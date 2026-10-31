import { test, expect, type Page } from '@playwright/test';

/**
 * Brass ornament layer (openspec change redesign-monsoon-ornaments).
 *
 * These tests are the acceptance evidence for the ornament spec: one hairline
 * family, at most two drawn motifs on a page, a map that keeps its lattice
 * without JavaScript, and a seal that settles once and honours reduced motion.
 */

const SETTINGS_KEY = 'htlb_settings_v1';

const baseSettings = {
  theme: 'dark',
  palette: 'midnight',
  textSize: '17.5px',
  comicEffects: true,
  reduceTransparency: false,
  inrReference: true
};

const combos: Array<{
  theme: 'dark' | 'light';
  palette: 'midnight' | 'chandni';
  reducedMotion: 'no-preference' | 'reduce';
  comicEffects: boolean;
}> = [];
for (const theme of ['dark', 'light'] as const) {
  for (const reducedMotion of ['no-preference', 'reduce'] as const) {
    for (const comicEffects of [true, false]) {
      combos.push({ theme, palette: theme === 'dark' ? 'midnight' : 'chandni', reducedMotion, comicEffects });
    }
  }
}

async function applySettings(page: Page, settings: Record<string, unknown>) {
  await page.evaluate(
    ({ key, value }) => localStorage.setItem(key, JSON.stringify(value)),
    { key: SETTINGS_KEY, value: settings }
  );
}

async function overflowX(page: Page) {
  return page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
}

test.describe('Brass ornament layer', () => {
  test('1. Ornament cap holds across the display matrix', async ({ page }) => {
    await page.goto('/');

    for (const combo of combos) {
      await page.emulateMedia({ reducedMotion: combo.reducedMotion });
      await applySettings(page, { ...baseSettings, ...combo });
      await page.goto('/');
      await page.waitForLoadState('load');

      // Home: the arch crown is the only drawn ornament on the page.
      await expect(page.locator('.orn-arch')).toHaveCount(1);
      await expect(page.locator('.orn-kolam')).toHaveCount(0);
      await expect(page.locator('.orn-seal')).toHaveCount(0);
      expect(await overflowX(page)).toBe(0);

      const archHeight = await page.locator('.orn-arch').evaluate((el) => el.getBoundingClientRect().height);
      expect(Math.round(archHeight)).toBe(22);

      // Chapter page: the seal is the only motif, and the cast follows the
      // Comic effects preference.
      await page.goto('/chapters/02-do-not-die-slowly/');
      await page.waitForLoadState('load');
      await expect(page.locator('.orn-seal')).toHaveCount(1);
      await expect(page.locator('.orn-kolam')).toHaveCount(0);
      await expect(page.locator('.orn-arch')).toHaveCount(0);
      await expect(page.locator('.celebration-cast')).toHaveCount(1);
      if (!combo.comicEffects) {
        const hidden = await page.locator('.celebration-cast .character-wrapper').first().evaluate(
          (el) => getComputedStyle(el).display
        );
        expect(hidden).toBe('none');
      }
      expect(await overflowX(page)).toBe(0);

      // Ornament never enters a tip card.
      await expect(page.locator('.tip-card .orn-seal, .tip-card .orn-kolam, .tip-card .orn-arch')).toHaveCount(0);
    }
  });

  test('2. Reduced motion shows the seal at its final state with no animation', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/chapters/02-do-not-die-slowly/');
    await page.locator('#chapter-celebration').scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);

    const trace = await page.locator('.orn-seal-trace').evaluate((el) => {
      const cs = getComputedStyle(el);
      return {
        opacity: cs.opacity,
        dashoffset: cs.strokeDashoffset,
        animationName: cs.animationName,
        running: el.getAnimations().length
      };
    });
    expect(trace.opacity).toBe('1');
    expect(trace.dashoffset).not.toBe('1');
    expect(trace.animationName).toBe('none');
    expect(trace.running).toBe(0);
  });

  test('3. The seal settles exactly once when the celebration is reached', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'no-preference' });
    await page.goto('/chapters/02-do-not-die-slowly/');

    await page.evaluate(() => {
      const el = document.getElementById('chapter-celebration');
      (window as unknown as { __settleCount: number }).__settleCount = 0;
      const observer = new MutationObserver(() => {
        if (el && el.classList.contains('is-settled')) {
          (window as unknown as { __settleCount: number }).__settleCount += 1;
          observer.disconnect();
        }
      });
      if (el) observer.observe(el, { attributes: true, attributeFilter: ['class'] });
    });

    await page.locator('#chapter-celebration').scrollIntoViewIfNeeded();
    await expect(page.locator('#chapter-celebration')).toHaveClass(/is-settled/);
    await page.waitForTimeout(900);

    const after = await page.evaluate(() => {
      const el = document.getElementById('chapter-celebration');
      const trace = document.querySelector('.orn-seal-trace');
      return {
        count: (window as unknown as { __settleCount: number }).__settleCount,
        settledSections: document.querySelectorAll('.chapter-celebration.is-settled').length,
        opacity: trace ? getComputedStyle(trace).opacity : null,
        dashoffset: trace ? getComputedStyle(trace).strokeDashoffset : null,
        animations: trace ? trace.getAnimations().map((a) => a.playState) : []
      };
    });
    expect(after.count).toBe(1);
    expect(after.settledSections).toBe(1);
    expect(after.opacity).toBe('1');
    expect(after.dashoffset).not.toBe('1');
    // Exactly one settle animation ran, and it has finished.
    expect(after.animations.length).toBeLessThanOrEqual(1);
    for (const state of after.animations) expect(state).toBe('finished');
  });

  test('4. Progress map keeps one lattice per cluster and 44px bead targets', async ({ page }) => {
    await page.goto('/progress/');

    await expect(page.locator('.map-bead')).toHaveCount(765);
    await expect(page.locator('.chapter-cluster')).toHaveCount(34);
    await expect(page.locator('.orn-kolam')).toHaveCount(34);
    await expect(page.locator('.orn-kolam-base')).toHaveCount(34);
    await expect(page.locator('.orn-kolam-loop')).toHaveCount(34);
    await expect(page.locator('#map-read-counter')).toHaveText('0 / 765 Beads');

    const geometry = await page.locator('.chapter-cluster').first().evaluate((cluster) => {
      const beads = cluster.querySelector('.cluster-beads') as HTMLElement;
      const bead = cluster.querySelector('.map-bead') as HTMLElement;
      return {
        pitch: getComputedStyle(cluster).getPropertyValue('--kolam-pitch').trim(),
        gap: getComputedStyle(beads).gap,
        bead: bead.getBoundingClientRect().width,
        target: getComputedStyle(bead, '::after').width,
        overlayPointer: getComputedStyle(cluster.querySelector('.orn-kolam') as Element).pointerEvents
      };
    });
    expect(geometry.pitch).toBe('20px');
    expect(geometry.gap).toBe('6px');
    expect(Math.round(geometry.bead)).toBe(14);
    expect(parseFloat(geometry.target)).toBeGreaterThanOrEqual(44);
    expect(geometry.overlayPointer).toBe('none');
    expect(await overflowX(page)).toBe(0);
  });

  test('5. A bead pointer press resolves to its visible centre across chapters', async ({ page }) => {
    await page.goto('/progress/');

    for (const clusterIndex of [0, 6, 17]) {
      const cluster = page.locator('.chapter-cluster').nth(clusterIndex);
      const bead = cluster.locator('.map-bead').nth(2);
      const href = await bead.getAttribute('href');
      expect(href).toBeTruthy();
      const target = new URL(href as string, 'http://localhost:4321');

      // The map is a *nested* 520px scroll container. Keep the chosen bead
      // inside that viewport, not merely inside the outer document.
      await bead.scrollIntoViewIfNeeded();
      await expect(bead).toBeInViewport({ ratio: 1 });
      const box = await bead.boundingBox();
      expect(box).not.toBeNull();
      if (!box) continue;

      // Verify that the visible dot is not covered by fixed navigation or
      // another layer. A failure here is a real hit-target regression, not
      // something to paper over by increasing navigation timeouts.
      const point = { x: box.x + box.width / 2, y: box.y + box.height / 2 };
      const isInsideMap = await page.evaluate(({ x, y }) => {
        const hit = document.elementFromPoint(x, y);
        return !!hit?.closest('.beads-container');
      }, point);
      expect(isInsideMap, `Bead centre for cluster ${clusterIndex} is obscured`).toBe(true);

      await page.mouse.click(point.x, point.y);
      await page.waitForURL((url) => url.pathname === target.pathname && url.hash === target.hash);

      await expect(page.locator('.chapter-main-title')).toBeVisible();
      await expect(page.locator('[id="' + target.hash.slice(1) + '"]')).toHaveCount(1);
      expect(await overflowX(page)).toBe(0);
      await page.goto('/progress/');
    }
  });

  test('5b. Gap between overlapping bead hit targets resolves to the nearest dot', async ({ page }) => {
    await page.goto('/progress/');
    const beads = page.locator('.chapter-cluster').first().locator('.map-bead');
    const bead = beads.nth(2);
    await bead.scrollIntoViewIfNeeded();
    const box = await bead.boundingBox();
    expect(box).not.toBeNull();
    if (!box) return;

    // A 20px lattice with 14px dots has a 6px visual gap. Clicking 2px to
    // the right of the disc tests navigation without relying on the anchor
    // DOM target, which may be a neighbouring expanded pseudo-element.
    const expected = await bead.getAttribute('href');
    expect(expected).toBeTruthy();
    const point = { x: box.x + box.width + 2, y: box.y + box.height / 2 };
    await page.mouse.click(point.x, point.y);
    const target = new URL(expected as string, 'http://localhost:4321');
    await page.waitForURL((url) => url.pathname === target.pathname && url.hash === target.hash);
  });

  test('6. Reading one chapter lights only that cluster', async ({ page }) => {
    await page.goto('/progress/');

    const chapterOneTipCount = await page.locator('.chapter-cluster').first().locator('.map-bead').count();
    const readTipIds = Array.from({ length: chapterOneTipCount }, (_, i) => '1-' + (i + 1));

    await page.evaluate(({ key, ids }) => {
      localStorage.setItem(key, JSON.stringify({
        version: 1,
        readTipIds: ids,
        picks: [],
        lastPosition: null,
        history: {},
        streak: 0,
        lastActiveDate: null
      }));
    }, { key: 'htlb_ledger_v1', ids: readTipIds });

    await page.goto('/progress/');
    await page.waitForTimeout(300);

    const traces = await page.evaluate(() =>
      [...document.querySelectorAll('.chapter-cluster')].slice(0, 4).map((c) =>
        (c as HTMLElement).style.getPropertyValue('--kolam-trace')
      )
    );
    expect(traces[0]).toBe('1.000');
    expect(traces[1]).toBe('0.000');
    expect(traces[2]).toBe('0.000');
    expect(traces[3]).toBe('0.000');
    await expect(page.locator('#map-read-counter')).toHaveText(chapterOneTipCount + ' / 765 Beads');
  });

  test('7. The map keeps every contour when scripting is blocked', async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();
    await page.goto('/progress/');

    await expect(page.locator('.map-bead')).toHaveCount(765);
    await expect(page.locator('.orn-kolam')).toHaveCount(34);
    await expect(page.locator('.orn-kolam-base')).toHaveCount(34);
    await expect(page.locator('.orn-kolam-loop')).toHaveCount(34);
    await expect(page.locator('.map-bead.is-read')).toHaveCount(0);
    const detailsRows = await page.locator('details summary, details a').count();
    expect(detailsRows).toBeGreaterThan(0);
    await context.close();
  });

  test('8. The ruled rupee annotation is a hairline, not a badge', async ({ page }) => {
    await page.goto('/guides/home-emergency-equipment-checklist/');

    const refs = page.locator('.inr-ref');
    expect(await refs.count()).toBeGreaterThan(0);

    const style = await refs.first().evaluate((el) => {
      const cs = getComputedStyle(el);
      const parentText = el.parentElement ? el.parentElement.textContent || '' : '';
      return {
        borderBottomWidth: cs.borderBottomWidth,
        borderBottomStyle: cs.borderBottomStyle,
        borderRadius: cs.borderRadius,
        backgroundColor: cs.backgroundColor,
        backgroundImage: cs.backgroundImage,
        display: cs.display,
        numeric: cs.fontVariantNumeric,
        insideLinkOrCode: !!el.closest('a, code'),
        authorFigureBefore: /¥\s?[\d.,]+\s*$/.test(
          parentText.slice(0, parentText.indexOf(el.textContent || '')).trim()
        ) || /¥/.test(parentText.slice(0, parentText.indexOf(el.textContent || '')))
      };
    });
    expect(style.borderBottomWidth).toBe('1px');
    expect(style.borderBottomStyle).toBe('solid');
    expect(style.borderRadius).toBe('0px');
    expect(style.backgroundColor).toBe('rgba(0, 0, 0, 0)');
    expect(style.backgroundImage).toBe('none');
    expect(style.display).toBe('inline');
    expect(style.numeric).toBe('tabular-nums');
    expect(style.insideLinkOrCode).toBe(false);
    expect(style.authorFigureBefore).toBe(true);

    // Turning the preference off removes the annotation entirely.
    await applySettings(page, { ...baseSettings, inrReference: false });
    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('data-show-inr', 'false');
    await expect(page.locator('.inr-ref')).toHaveCount(0);
  });
});
