import fs from 'node:fs';
import path from 'node:path';
import { z } from 'zod';

const EnglishTagSchema = z.object({
  money: z.enum(['Free', 'Small cost', 'Real money']),
  time: z.enum(['Quick', 'A few hours', 'Takes time every day']),
  willpower: z.enum(['None needed', 'Some', 'A lot']),
  benefit: z.enum(['Large', 'Medium', 'Small']),
  scope: z.enum(['Lifespan', 'Money', 'Time and energy', 'Personal freedom']),
  audience: z.array(z.string()).default([]),
});

const EnglishTipSchema = z.object({
  id: z.string(), // "1-1"
  chapter: z.number(),
  tip: z.number(),
  title: z.string().min(1),
  tags: EnglishTagSchema,
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
  reviewStatus: z.enum(['source', 'draft']).optional(),
});

export type EnglishTip = z.infer<typeof EnglishTipSchema>;

const EnglishChapterSchema = z.object({
  chapter: z.number(),
  slug: z.string(),
  title: z.string(),
  intro: z.string(),
  edition: z.enum(['source', 'india']).optional(),
  rewriteStatus: z.enum(['draft', 'reviewed']).optional(),
  tips: z.array(EnglishTipSchema),
});

export type EnglishChapter = z.infer<typeof EnglishChapterSchema>;

// Map Chinese tag values to official English labels (Section 2)
function mapScope(zhScope: string): 'Lifespan' | 'Money' | 'Time and energy' | 'Personal freedom' {
  switch (zhScope) {
    case '死亡率': return 'Lifespan';
    case '金钱': return 'Money';
    case '时间': return 'Time and energy';
    case '自由': return 'Personal freedom';
    default: throw new Error(`Unknown scope: ${zhScope}`);
  }
}

function mapMoney(zhMoney: string): 'Free' | 'Small cost' | 'Real money' {
  switch (zhMoney) {
    case '0': return 'Free';
    case '少': return 'Small cost';
    case '多': return 'Real money';
    default: throw new Error(`Unknown money tag: ${zhMoney}`);
  }
}

function mapTime(zhTime: string): 'Quick' | 'A few hours' | 'Takes time every day' {
  switch (zhTime) {
    case '少': return 'Quick';
    case '中': return 'A few hours';
    case '多': return 'Takes time every day';
    default: throw new Error(`Unknown time tag: ${zhTime}`);
  }
}

function mapWillpower(zhWill: string): 'None needed' | 'Some' | 'A lot' {
  switch (zhWill) {
    case '否': return 'None needed';
    case '些': return 'Some';
    case '是': return 'A lot';
    default: throw new Error(`Unknown willpower tag: ${zhWill}`);
  }
}

function mapBenefit(zhBenefit: string): 'Large' | 'Medium' | 'Small' {
  switch (zhBenefit) {
    case '大': return 'Large';
    case '中': return 'Medium';
    case '小': return 'Small';
    default: throw new Error(`Unknown benefit tag: ${zhBenefit}`);
  }
}

function mapAudience(zhAudience: string[]): string[] {
  const map: Record<string, string> = {
    '怀孕': 'Pregnant or planning',
    '婴幼儿': 'Child under 3',
    '孩子': 'Child 3 to 18',
    '老人': 'Older relatives at home',
    '35岁': 'Age 35+',
    '60岁': 'Age 60+',
    '女性': 'Women',
  };
  return zhAudience.map(a => map[a] || a);
}

// Slugs for chapters
const CHAPTER_SLUGS: Record<number, { slug: string; title: string }> = {
  1: { slug: "do-not-die-early", title: "Do Not Die Early" },
  2: { slug: "do-not-die-slowly", title: "Do Not Die Slowly" },
  3: { slug: "do-not-waste-energy", title: "Do Not Waste Energy" },
  4: { slug: "do-not-waste-time", title: "Do Not Waste Time" },
  5: { slug: "do-not-waste-money", title: "Do Not Waste Money" },
  6: { slug: "the-negative-list", title: "The Negative List" },
  7: { slug: "living-with-no-money", title: "How to Live When You Have No Money" },
  8: { slug: "law-and-property-safety", title: "Law and Property Safety" },
  9: { slug: "everyday-legal-red-lines", title: "Everyday Legal Red Lines" },
  10: { slug: "dating-and-marriage", title: "Are Dating and Marriage Worth It" },
  11: { slug: "red-lines-for-developers", title: "Red Lines for Developers and Techies" },
  12: { slug: "starting-a-business", title: "Starting Your Own Business" },
  13: { slug: "emergencies-what-to-do-first", title: "Emergencies: What to Do First" },
  14: { slug: "accounts-and-information-security", title: "Accounts and Information Security" },
  15: { slug: "renting-and-buying-housing", title: "Renting and Buying Housing" },
  16: { slug: "living-with-chronic-disease", title: "Living with Chronic Disease" },
  17: { slug: "elderly-at-home", title: "Elderly at Home" },
  18: { slug: "is-having-kids-worth-it", title: "Is Having Kids Worth It" },
  19: { slug: "employment-and-work-injury", title: "Employment and Work Injury" },
  20: { slug: "newborn-care", title: "Newborn Care" },
  21: { slug: "travel-and-abroad-safety", title: "Travel and Abroad Safety" },
  22: { slug: "how-to-relax", title: "How to Relax" },
  23: { slug: "which-skills-to-learn", title: "Which Skills to Learn" },
  24: { slug: "navigating-healthcare", title: "Navigating Healthcare and Doctors" },
  25: { slug: "after-someone-dies", title: "After Someone Dies" },
  26: { slug: "building-a-website-or-platform", title: "Building a Website or Platform" },
  27: { slug: "pregnancy-and-childbirth", title: "Pregnancy and Childbirth" },
  28: { slug: "do-not-ruin-health-for-looks", title: "Do Not Ruin Health for Looks" },
  29: { slug: "after-a-major-blow", title: "After a Major Blow" },
  30: { slug: "school-age-kids", title: "School-Age Kids" },
  31: { slug: "paths-after-eighteen", title: "Paths After Eighteen" },
  32: { slug: "studying-abroad", title: "Studying Abroad" },
  33: { slug: "living-with-disability", title: "Living with Disability" },
  34: { slug: "safe-home-medications", title: "Safe Home Medications" },
};

function main() {
  const rawDataPath = path.resolve('data/parveen-raw.json');
  if (!fs.existsSync(rawDataPath)) {
    console.error('Missing data/parveen-raw.json');
    process.exit(1);
  }

  const parveenData = JSON.parse(fs.readFileSync(rawDataPath, 'utf-8'));
  const rawRules: any[] = parveenData.rules;
  console.log(`Loaded ${rawRules.length} rules from parveen-raw.json`);

  // Load Chinese parsed data
  const zhAllPath = path.resolve('data/zh/all-chapters.json');
  const zhChapters: any[] = JSON.parse(fs.readFileSync(zhAllPath, 'utf-8'));
  const zhTipMap = new Map<string, any>();
  for (const ch of zhChapters) {
    for (const t of ch.tips) {
      zhTipMap.set(t.id, t);
    }
  }

  // Create data/en directory
  fs.mkdirSync(path.resolve('data/en'), { recursive: true });

  // Group English tips by chapter
  const enChaptersMap = new Map<number, EnglishTip[]>();
  for (let c = 1; c <= 34; c++) enChaptersMap.set(c, []);

  // CJK regex check
  const cjkRegex = /[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF]/;

  let cjkStrippedCount = 0;

  for (const r of rawRules) {
    const chapterNum = r.chapter;
    const tipNum = r.n;
    const id = `${chapterNum}-${tipNum}`;

    const zhTip = zhTipMap.get(id);
    if (!zhTip) {
      throw new Error(`Chinese source tip not found for ID: ${id}`);
    }

    // Clean any residual Chinese characters or empty brackets in sources/text
    let cleanSources = r.sourcesRaw || (r.sources ? r.sources.join('; ') : '');
    // Replace empty brackets like : ", , , "; with clean text
    cleanSources = cleanSources.replace(/:\s*",\s*,\s*,\s*";/g, '');
    cleanSources = cleanSources.replace(/\s+/g, ' ').trim();

    // Check and clean caveats / plain terms
    let cleanCaveats = r.note || '';
    let cleanPlain = r.plainTerms || '';
    let cleanBenefit = r.gain || '';
    let cleanCost = r.cost || '';

    // If any CJK remains, strip or replace
    const stripCJK = (s: string) => {
      if (cjkRegex.test(s)) {
        cjkStrippedCount++;
        return s.replace(/[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF]/g, '').trim();
      }
      return s;
    };

    cleanSources = stripCJK(cleanSources);
    cleanCaveats = stripCJK(cleanCaveats);
    cleanPlain = stripCJK(cleanPlain);
    cleanBenefit = stripCJK(cleanBenefit);
    cleanCost = stripCJK(cleanCost);

    const tipObj: EnglishTip = {
      id,
      chapter: chapterNum,
      tip: tipNum,
      title: r.title.trim(),
      tags: {
        money: mapMoney(zhTip.tags.money),
        time: mapTime(zhTip.tags.time),
        willpower: mapWillpower(zhTip.tags.willpower),
        benefit: mapBenefit(zhTip.tags.benefit),
        scope: mapScope(zhTip.tags.scope),
        audience: mapAudience(zhTip.tags.audience),
      },
      costScore: zhTip.costScore,
      valueTier: zhTip.valueTier,
      disputed: zhTip.disputed,
      stillVerifying: zhTip.stillVerifying,
      cost: cleanCost,
      inPlainWords: cleanPlain,
      benefit: cleanBenefit,
      evidenceGrade: zhTip.evidenceGrade, // Use validated source evidence grade
      sources: cleanSources,
      caveats: cleanCaveats,
    };

    enChaptersMap.get(chapterNum)!.push(tipObj);
  }

  // Write out each chapter JSON
  const allEnChapters: EnglishChapter[] = [];

  for (let c = 1; c <= 34; c++) {
    const tips = enChaptersMap.get(c)!;
    tips.sort((a, b) => a.tip - b.tip);

    const meta = CHAPTER_SLUGS[c];
    const enChapter: EnglishChapter = {
      chapter: c,
      slug: meta.slug,
      title: meta.title,
      intro: `Chapter ${c}: ${meta.title}`,
      tips,
    };

    allEnChapters.push(enChapter);
    const filename = `${String(c).padStart(2, '0')}-${meta.slug}.json`;
    fs.writeFileSync(path.resolve(`data/en/${filename}`), JSON.stringify(enChapter, null, 2), 'utf-8');
  }

  fs.writeFileSync(path.resolve('data/en/all-chapters.json'), JSON.stringify(allEnChapters, null, 2), 'utf-8');

  console.log(`✓ Ingested all 34 chapters (${rawRules.length} tips) into data/en/`);
  console.log(`✓ Cleaned CJK instances: ${cjkStrippedCount}`);
}

main();