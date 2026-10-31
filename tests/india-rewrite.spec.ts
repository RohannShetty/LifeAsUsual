import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

const BANNED = /\b(China|Chinese|mainland|RMB|yuan|hukou|yibao|dibao|CNY)\b/i;

interface ManifestChapter {
  status: 'queued' | 'draft' | 'checked' | 'reviewed';
  tips: number;
  tier: 'A' | 'B';
  humanReview: string;
}

interface SourceChapter {
  chapter: number;
  slug: string;
  title: string;
  tips: Array<{ id: string }>;
}

const manifest: { chapters: Record<string, ManifestChapter> } = JSON.parse(
  fs.readFileSync(path.resolve('data/en-in/manifest.json'), 'utf-8')
);
const source: SourceChapter[] = JSON.parse(
  fs.readFileSync(path.resolve('data/en/all-chapters.json'), 'utf-8')
);
const sourceByChapter = new Map(source.map((chapter) => [chapter.chapter, chapter]));

const chapterPath = (chapter: number): string => {
  const record = sourceByChapter.get(chapter);
  if (!record) throw new Error('No source chapter ' + chapter);
  return '/chapters/' + String(chapter).padStart(2, '0') + '-' + record.slug + '/';
};

const rewritten = Object.entries(manifest.chapters).filter(([, meta]) => meta.status !== 'queued');

test.describe('India rewrite chapters', () => {
  for (const [key, meta] of rewritten) {
    const chapterNumber = Number(key);
    const sourceChapter = sourceByChapter.get(chapterNumber);
    const expectedTips = sourceChapter?.tips.length ?? meta.tips;

    test('Chapter ' + key + ' is a ' + meta.status + ' India rewrite with no banned terms', async ({ page }) => {
      await page.goto(chapterPath(chapterNumber));

      const notice = page.locator('#india-rewrite-notice');
      await expect(notice).toBeVisible();
      await expect(notice).toHaveAttribute('data-rewrite-status', meta.status);
      await expect(notice).toContainText(
        meta.status === 'draft' ? 'Unverified India draft'
          : meta.status === 'reviewed' ? 'Human-reviewed India edition'
          : 'AI-reviewed draft for India'
      );

      await expect(page.locator('.tip-card')).toHaveCount(expectedTips);

      if (meta.status === 'reviewed') {
        await expect(page.locator('.badge-checked')).toHaveCount(expectedTips);
        await expect(page.locator('.badge-draft')).toHaveCount(0);
        await expect(page.locator('.badge-human-review')).toHaveCount(0);
      } else {
        await expect(page.locator('.badge-draft')).toHaveCount(expectedTips);
        await expect(page.locator('.badge-checked')).toHaveCount(0);
        const awaitingHuman = meta.status === 'checked' && meta.tier === 'A' && meta.humanReview !== 'signed-off';
        await expect(page.locator('.badge-human-review')).toHaveCount(awaitingHuman ? expectedTips : 0);
        if (meta.status === 'checked') {
          await expect(page.locator('.badge-draft').first()).toContainText('AI-reviewed draft');
        }
      }

      const text = await page.locator('body').innerText();
      expect(text).not.toMatch(BANNED);

      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth
      );
      expect(overflow).toBe(0);
    });
  }

  test('Reading state persists across a reload on the first rewritten chapter', async ({ page }) => {
    const first = rewritten[0];
    test.skip(!first, 'No rewritten chapter to test');
    const chapterNumber = Number(first?.[0]);

    await page.goto(chapterPath(chapterNumber));
    const firstTip = page.locator('.tip-card').first();
    await expect(firstTip).toBeVisible();

    const markRead = firstTip.locator('.mark-read-btn');
    await markRead.click();
    await expect(markRead).toHaveClass(/is-read/);

    await page.reload();
    const restored = page.locator('.tip-card').first().locator('.mark-read-btn');
    await expect(restored).toHaveClass(/is-read/);

    const state = await page.evaluate(() => {
      const raw = localStorage.getItem('htlb_ledger_v1');
      return raw ? JSON.parse(raw) : null;
    });
    expect(state?.version).toBe(1);
    expect(state?.readTipIds?.length).toBeGreaterThan(0);
  });
});
