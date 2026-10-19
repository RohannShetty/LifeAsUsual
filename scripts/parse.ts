import fs from 'node:fs';
import path from 'node:path';
import { z } from 'zod';

const TagSchema = z.object({
  money: z.enum(['0', '少', '多']),
  time: z.enum(['少', '中', '多']),
  willpower: z.enum(['否', '些', '是']),
  benefit: z.enum(['大', '中', '小']),
  scope: z.enum(['死亡率', '金钱', '时间', '自由']),
  audience: z.array(z.string()).default([]),
});

const TipSchema = z.object({
  id: z.string(), // e.g. "1-1"
  chapter: z.number(),
  tip: z.number(),
  title: z.string().min(1),
  tags: TagSchema,
  costScore: z.number(),
  valueTier: z.enum(['Very high', 'High', 'Average']),
  disputed: z.boolean(),
  stillVerifying: z.boolean(),
  cost: z.string(),
  inPlainWords: z.string(),
  benefit: z.string(),
  evidenceGrade: z.enum(['A', 'B', 'C']),
  sources: z.string(),
  caveats: z.string(),
});

export type Tip = z.infer<typeof TipSchema>;

const ChapterSchema = z.object({
  chapter: z.number(),
  slug: z.string(),
  title: z.string(),
  intro: z.string(),
  tips: z.array(TipSchema),
});

export type Chapter = z.infer<typeof ChapterSchema>;

function computeValueTier(money: '0' | '少' | '多', time: '少' | '中' | '多', willpower: '否' | '些' | '是', benefit: '大' | '中' | '小'): { score: number; tier: 'Very high' | 'High' | 'Average' } {
  const mScore = { '0': 0, '少': 1, '多': 2 }[money];
  const tScore = { '少': 0, '中': 1, '多': 2 }[time];
  const wScore = { '否': 0, '些': 1, '是': 2 }[willpower];
  const score = mScore + tScore + wScore;

  let tier: 'Very high' | 'High' | 'Average' = 'Average';
  if (benefit === '大') {
    if (score === 0) tier = 'Very high';
    else if (score >= 1 && score <= 2) tier = 'High';
    else tier = 'Average';
  } else if (benefit === '中') {
    if (score === 0) tier = 'High';
    else tier = 'Average';
  } else {
    tier = 'Average';
  }

  return { score, tier };
}

function parseChapterFile(filePath: string): Chapter {
  const content = fs.readFileSync(filePath, 'utf-8');
  const filename = path.basename(filePath, '.md');
  const chapterMatch = filename.match(/^(\d+)-(.*)$/);
  if (!chapterMatch) {
    throw new Error(`Invalid chapter file name: ${filename}`);
  }

  const chapterNum = parseInt(chapterMatch[1], 10);
  const chapterSlug = chapterMatch[2];

  // Extract title and intro
  const titleMatch = content.match(/^#\s*\d+\.\s*(.+)$/m);
  const chapterTitle = titleMatch ? titleMatch[1].trim() : chapterSlug;

  // Split by tip header: `### N. Title`
  const tipSections = content.split(/^###\s+(\d+)\.\s*(.+)$/m);
  const intro = tipSections[0].trim();

  const tips: Tip[] = [];

  for (let i = 1; i < tipSections.length; i += 3) {
    const tipNum = parseInt(tipSections[i], 10);
    const tipTitle = tipSections[i + 1].trim();
    const tipBody = tipSections[i + 2] || '';

    // Extract HTML comment tag: <!-- 成本标签: 钱=0 时间=少 毅力=否 收益=大 口径=死亡率 人群=老人,60岁 -->
    const tagMatch = tipBody.match(/<!--\s*成本标签:\s*([^>]+?)\s*-->/);
    if (!tagMatch) {
      throw new Error(`Missing tag comment in Chapter ${chapterNum}, Tip ${tipNum}: "${tipTitle}"`);
    }

    const tagStr = tagMatch[1];
    const tagPairs = tagStr.split(/\s+/).filter(Boolean);
    const rawTags: Record<string, string> = {};
    for (const pair of tagPairs) {
      const [k, v] = pair.split('=');
      if (k && v) rawTags[k.trim()] = v.trim();
    }

    const audience = rawTags['人群'] ? rawTags['人群'].split(/[,+]/).map(s => s.trim()).filter(Boolean) : [];

    const parsedTags = TagSchema.parse({
      money: rawTags['钱'],
      time: rawTags['时间'],
      willpower: rawTags['毅力'],
      benefit: rawTags['收益'],
      scope: rawTags['口径'],
      audience,
    });

    const { score, tier } = computeValueTier(parsedTags.money, parsedTags.time, parsedTags.willpower, parsedTags.benefit);

    // Parse the 6 bullets: 成本, 说人话, 收益, 证据等级, 来源, 备注
    const getBullet = (prefix: string): string => {
      // Regex matching bullet starting with `- prefix：` or `- prefix:` until the next bullet or end of string
      const regex = new RegExp(`^-\\s*${prefix}[：:]([\\s\\S]*?)(?=^-\\s*(?:成本|说人话|收益|证据等级|来源|备注)[：:]|$)`, 'm');
      const m = tipBody.match(regex);
      return m ? m[1].trim() : '';
    };

    const cost = getBullet('成本');
    const inPlainWords = getBullet('说人话');
    const benefit = getBullet('收益');
    const gradeRaw = getBullet('证据等级').toUpperCase().replace(/[^ABC]/g, '');
    const sources = getBullet('来源');
    const caveats = getBullet('备注');

    if (!cost) throw new Error(`Missing '成本' in Chapter ${chapterNum}, Tip ${tipNum}`);
    if (!inPlainWords) throw new Error(`Missing '说人话' in Chapter ${chapterNum}, Tip ${tipNum}`);
    if (!benefit) throw new Error(`Missing '收益' in Chapter ${chapterNum}, Tip ${tipNum}`);
    if (!gradeRaw || !['A', 'B', 'C'].includes(gradeRaw)) {
      throw new Error(`Invalid '证据等级' ("${gradeRaw}") in Chapter ${chapterNum}, Tip ${tipNum}`);
    }
    if (!sources) throw new Error(`Missing '来源' in Chapter ${chapterNum}, Tip ${tipNum}`);
    if (!caveats) throw new Error(`Missing '备注' in Chapter ${chapterNum}, Tip ${tipNum}`);

    const disputed = caveats.startsWith('争议') || caveats.includes('【争议】') || caveats.includes('争议：');
    const stillVerifying = tipBody.includes('待核实') || tipBody.includes('TODO');

    const tipObj = TipSchema.parse({
      id: `${chapterNum}-${tipNum}`,
      chapter: chapterNum,
      tip: tipNum,
      title: tipTitle,
      tags: parsedTags,
      costScore: score,
      valueTier: tier,
      disputed,
      stillVerifying,
      cost,
      inPlainWords,
      benefit,
      evidenceGrade: gradeRaw as 'A' | 'B' | 'C',
      sources,
      caveats,
    });

    tips.push(tipObj);
  }

  return ChapterSchema.parse({
    chapter: chapterNum,
    slug: chapterSlug,
    title: chapterTitle,
    intro,
    tips,
  });
}

function main() {
  const bookDir = path.resolve('source/book');
  const files = fs.readdirSync(bookDir).filter(f => f.endsWith('.md')).sort();

  console.log(`Found ${files.length} chapter files.`);

  const allChapters: Chapter[] = [];
  let totalTips = 0;
  const gradeCounts = { A: 0, B: 0, C: 0 };
  const tierCounts = { 'Very high': 0, 'High': 0, 'Average': 0 };
  const scopeCounts = { '死亡率': 0, '金钱': 0, '时间': 0, '自由': 0 };
  let disputedCount = 0;
  let stillVerifyingCount = 0;

  for (const file of files) {
    const chapter = parseChapterFile(path.join(bookDir, file));
    allChapters.push(chapter);
    totalTips += chapter.tips.length;

    // Save individual chapter JSON
    const outPath = path.resolve(`data/zh/${String(chapter.chapter).padStart(2, '0')}-${chapter.slug}.json`);
    fs.writeFileSync(outPath, JSON.stringify(chapter, null, 2), 'utf-8');

    for (const t of chapter.tips) {
      gradeCounts[t.evidenceGrade]++;
      tierCounts[t.valueTier]++;
      scopeCounts[t.tags.scope]++;
      if (t.disputed) disputedCount++;
      if (t.stillVerifying) stillVerifyingCount++;
    }
  }

  // Also write all tips index
  fs.writeFileSync(path.resolve('data/zh/all-chapters.json'), JSON.stringify(allChapters, null, 2), 'utf-8');

  console.log('\n================ PARSE TOTALS ================');
  console.log(`Total Tips: ${totalTips} (Target: 765)`);
  console.log(`Evidence Grades: A=${gradeCounts.A} (495), B=${gradeCounts.B} (218), C=${gradeCounts.C} (52)`);
  console.log(`Value Tiers: Very high=${tierCounts['Very high']} (122), High=${tierCounts['High']} (344), Average=${tierCounts['Average']} (299)`);
  console.log(`Scopes: Lifespan=${scopeCounts['死亡率']} (274), Money=${scopeCounts['金钱']} (290), Freedom=${scopeCounts['自由']} (124), Time=${scopeCounts['时间']} (77)`);
  console.log(`Disputed: ${disputedCount} (88)`);
  console.log(`Still Verifying: ${stillVerifyingCount} (3)`);
  console.log('==============================================\n');

  // Verify against targets
  const errors: string[] = [];
  if (totalTips !== 765) errors.push(`Total tips mismatch: got ${totalTips}, expected 765`);
  if (gradeCounts.A !== 495 || gradeCounts.B !== 218 || gradeCounts.C !== 52) {
    errors.push(`Evidence grades mismatch: A=${gradeCounts.A}/495, B=${gradeCounts.B}/218, C=${gradeCounts.C}/52`);
  }
  if (tierCounts['Very high'] !== 122 || tierCounts['High'] !== 344 || tierCounts['Average'] !== 299) {
    errors.push(`Value tiers mismatch: Very high=${tierCounts['Very high']}/122, High=${tierCounts['High']}/344, Average=${tierCounts['Average']}/299`);
  }
  if (scopeCounts['死亡率'] !== 274 || scopeCounts['金钱'] !== 290 || scopeCounts['自由'] !== 124 || scopeCounts['时间'] !== 77) {
    errors.push(`Scope mismatch: Lifespan=${scopeCounts['死亡率']}/274, Money=${scopeCounts['金钱']}/290, Freedom=${scopeCounts['自由']}/124, Time=${scopeCounts['时间']}/77`);
  }
  if (disputedCount !== 88) errors.push(`Disputed mismatch: got ${disputedCount}, expected 88`);
  if (stillVerifyingCount !== 3) errors.push(`Still verifying mismatch: got ${stillVerifyingCount}, expected 3`);

  if (errors.length > 0) {
    console.error('Validation FAILED with errors:');
    errors.forEach(e => console.error('  - ' + e));
    process.exit(1);
  } else {
    console.log('✓ ALL TARGET TOTALS MATCH EXACTLY! Build passed.');
  }
}

main();
