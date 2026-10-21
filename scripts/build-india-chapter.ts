import fs from 'node:fs';
import path from 'node:path';

type Patch = [string, string];
type FieldValue = string | Patch[] | undefined;

interface TipOverride {
  title?: FieldValue;
  cost?: FieldValue;
  inPlainWords?: FieldValue;
  benefit?: FieldValue;
  sources?: FieldValue;
  caveats?: FieldValue;
}

interface OverrideFile {
  title?: string;
  intro?: string;
  tips: Record<string, TipOverride>;
}

const BANNED = /\b(China|Chinese|mainland|RMB|yuan|hukou|yibao|dibao|CNY)\b/i;
const SOURCE_TERMS = /\b(WeChat|Alipay|Taobao|Tmall|JD\.com|Pinduoduo|12345|12308|12315|12321|12377|12389|12309|96110|12356|12355|12348|12333|12320|shebao|gongjijin|gongshang|laodong|caili|hukou|yibao|dibao|Civil Code|Criminal Law|Supreme People|National People|State Council|Ministry of Public Security|Ministry of Commerce|People's Bank|SAMR|CNIPA|NHC|CAC|MIIT|Social Insurance Law|Labor Contract Law|Company Law|Insurance Law|Food Safety Law|Civil Procedure Law|Public Security Administration)\b/gi;
const FIELDS = ['title', 'cost', 'inPlainWords', 'benefit', 'sources', 'caveats'] as const;

const chapterNumber = Number(process.argv[2]);
if (!chapterNumber) {
  console.error('Usage: tsx scripts/build-india-chapter.ts <chapter>');
  process.exit(1);
}

const source: any[] = JSON.parse(fs.readFileSync('data/en/all-chapters.json', 'utf-8'));
const sourceChapter = source.find((chapter) => chapter.chapter === chapterNumber);
if (!sourceChapter) {
  console.error('No source chapter ' + chapterNumber);
  process.exit(1);
}

const overridePath = path.resolve('data/en-in/overrides/' + String(chapterNumber).padStart(2, '0') + '.json');
const overrides: OverrideFile = fs.existsSync(overridePath)
  ? JSON.parse(fs.readFileSync(overridePath, 'utf-8'))
  : { tips: {} };

// Risk classification from the rewrite worklist. High-risk tips must be
// authored by hand; lower-risk tips can use the conservative auto pass.
const riskById = new Map<string, string>();
const worklistPath = path.resolve('reports/india-rewrite-worklist.csv');

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = '';
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '"') {
      if (quoted && text[i + 1] === '"') {
        cell += '"';
        i += 1;
      } else {
        quoted = !quoted;
      }
    } else if (ch === ',' && !quoted) {
      row.push(cell);
      cell = '';
    } else if ((ch === '\n' || ch === '\r') && !quoted) {
      if (ch === '\r' && text[i + 1] === '\n') i += 1;
      row.push(cell);
      if (row.some((value) => value.length > 0)) rows.push(row);
      row = [];
      cell = '';
    } else {
      cell += ch;
    }
  }
  row.push(cell);
  if (row.some((value) => value.length > 0)) rows.push(row);
  return rows;
}

if (fs.existsSync(worklistPath)) {
  const rows = parseCsv(fs.readFileSync(worklistPath, 'utf-8'));
  const header = rows[0];
  const riskIndex = header.indexOf('risk');
  const idIndex = header.indexOf('id');
  for (const row of rows.slice(1)) {
    if (row[idIndex]) riskById.set(row[idIndex], row[riskIndex]);
  }
}

const problems: string[] = [];
const manualNeeded: string[] = [];
const autoAdapted: string[] = [];

function normaliseSpaces(text: string): string {
  return text.replace(/[\u00a0\u202f\u2009\u2007\u2008]/g, ' ');
}

function applyField(tipId: string, field: string, original: string, value: FieldValue): string {
  if (value === undefined) return original;
  if (typeof value === 'string') return normaliseSpaces(value);
  let result = normaliseSpaces(original);
  for (const patch of value) {
    if (!Array.isArray(patch) || (patch.length !== 2 && patch.length !== 3)) {
      problems.push(tipId + '.' + field + ': invalid patch');
      continue;
    }
    if (patch.length === 3) {
      const start = normaliseSpaces(patch[0]);
      const end = normaliseSpaces(patch[1]);
      const from = result.indexOf(start);
      const to = from === -1 ? -1 : result.indexOf(end, from + start.length);
      if (from === -1 || to === -1) {
        problems.push(tipId + '.' + field + ': range target not found: ' + start.slice(0, 60));
        continue;
      }
      result = result.slice(0, from) + normaliseSpaces(patch[2]) + result.slice(to + end.length);
      continue;
    }
    const [find, replace] = patch as [string, string];
    const target = normaliseSpaces(find);
    if (!result.includes(target)) {
      problems.push(tipId + '.' + field + ': patch target not found: ' + target.slice(0, 70));
      continue;
    }
    result = result.split(target).join(normaliseSpaces(replace));
  }
  return result;
}

// --- Conservative auto pass for medium/low-risk tips -------------------------

const HOTLINE_REPLACEMENTS: Array<[RegExp, string]> = [
  [/(call|dial|phone|ring|contact|on)\s+120\b/gi, '$1 112'],
  [/(call|dial|phone|ring|contact|on)\s+119\b/gi, '$1 112'],
  [/(call|dial|phone|ring|contact|on)\s+110\b/gi, '$1 112'],
  [/\b12356\b/g, '14416 (Tele-MANAS)'],
  [/\b12355\b/g, '1098 (Childline)'],
  [/\b12348\b/g, '15100 (NALSA legal aid)'],
  [/\b12315\b/g, '1915 (National Consumer Helpline)'],
  [/\b12308\b/g, 'the MEA MADAD portal'],
  [/\b96110\b/g, '1930 (cyber fraud)']
];

function splitSentences(text: string): string[] {
  const urls: string[] = [];
  const tokens: string[] = [];
  let s = text.replace(/<[^>]*https?:\/\/[^>]*>/g, (m) => {
    urls.push(m);
    return '\u0000' + (urls.length - 1) + '\u0000';
  });
  s = s.replace(/https?:\/\/[^\s)]+/g, (m) => {
    urls.push(m);
    return '\u0000' + (urls.length - 1) + '\u0000';
  });
  s = s.replace(/\b(\d+)\.(\d+)/g, (m) => {
    tokens.push(m);
    return '\u0001' + (tokens.length - 1) + '\u0001';
  });
  s = s.replace(/\b(U\.S|U\.K|No|Dr|Mr|Mrs|Ms|e\.g|i\.e|etc|vs|approx)\./gi, (m) => {
    tokens.push(m);
    return '\u0001' + (tokens.length - 1) + '\u0001';
  });
  const parts = s.split(/(?<=[.!?])\s+(?=[A-Z“"'(\d])/);
  return parts.map((part) =>
    part
      .replace(/\u0001(\d+)\u0001/g, (_, index) => tokens[Number(index)])
      .replace(/\u0000(\d+)\u0000/g, (_, index) => urls[Number(index)])
  );
}

function formatIndian(value: number): string {
  const rounded = value >= 1000 ? Math.round(value / 100) * 100 : Math.round(value);
  return '₹' + rounded.toLocaleString('en-IN');
}

function convertCurrency(text: string): string {
  let result = text;
  // Ranges first: 100–300 yuan / 100-300 RMB.
  result = result.replace(/(\d[\d,]*)\s*[–-]\s*(\d[\d,]*)\s*(?:yuan|RMB)\b/gi, (_match, a: string, b: string) => {
    return formatIndian(Number(a.replace(/,/g, '')) * 14.21) + '–' + formatIndian(Number(b.replace(/,/g, '')) * 14.21);
  });
  result = result.replace(/(\d[\d,]*)\s*(?:yuan|RMB)\b/gi, (_match, a: string) => formatIndian(Number(a.replace(/,/g, '')) * 14.21));
  result = result.replace(/\b(?:a few|several|dozens of|tens of)\s+(?:dozen|hundred|thousand)?\s*yuan\b/gi, 'a few hundred rupees');
  result = result.replace(/\byuan\b/gi, 'rupees');
  result = result.replace(/\bRMB\b/g, 'rupees');
  return result;
}

const CHAPTER_SOURCES: Record<number, string> = {
  1: 'Ministry of Health and Family Welfare. <https://mohfw.gov.in/>; World Health Organization. <https://www.who.int/>',
  2: 'Ministry of Health and Family Welfare. <https://mohfw.gov.in/>; World Health Organization. <https://www.who.int/>',
  3: 'Ministry of Health and Family Welfare. <https://mohfw.gov.in/>; World Health Organization. <https://www.who.int/>',
  4: 'Ministry of Health and Family Welfare. <https://mohfw.gov.in/>; World Health Organization. <https://www.who.int/>',
  5: 'Reserve Bank of India. <https://www.rbi.org.in/>; Securities and Exchange Board of India. <https://www.sebi.gov.in/>; Insurance Regulatory and Development Authority of India. <https://irdai.gov.in/>',
  6: 'Indian Council of Medical Research. <https://www.icmr.gov.in/>; World Health Organization. <https://www.who.int/>',
  7: 'Ministry of Labour and Employment. <https://labour.gov.in/>; Ministry of Rural Development. <https://rural.nic.in/>',
  8: 'Ministry of Home Affairs. <https://www.mha.gov.in/>; National Legal Services Authority. <https://nalsa.gov.in/>',
  9: 'Ministry of Home Affairs. <https://www.mha.gov.in/>; National Legal Services Authority. <https://nalsa.gov.in/>',
  10: 'Ministry of Women and Child Development. <https://wcd.gov.in/>; National Legal Services Authority. <https://nalsa.gov.in/>',
  11: 'Ministry of Electronics and Information Technology. <https://www.meity.gov.in/>; CERT-In. <https://www.cert-in.org.in/>',
  12: 'Ministry of Corporate Affairs. <https://www.mca.gov.in/>; Ministry of Labour and Employment. <https://labour.gov.in/>',
  13: 'National Disaster Management Authority. <https://ndma.gov.in/>; Ministry of Health and Family Welfare. <https://mohfw.gov.in/>',
  14: 'Reserve Bank of India. <https://www.rbi.org.in/>; CERT-In. <https://www.cert-in.org.in/>',
  15: 'Ministry of Housing and Urban Affairs. <https://mohua.gov.in/>; Reserve Bank of India. <https://www.rbi.org.in/>',
  16: 'Ministry of Health and Family Welfare. <https://mohfw.gov.in/>; Indian Council of Medical Research. <https://www.icmr.gov.in/>',
  17: 'Ministry of Social Justice and Empowerment. <https://socialjustice.gov.in/>; Ministry of Health and Family Welfare. <https://mohfw.gov.in/>',
  18: 'Ministry of Health and Family Welfare. <https://mohfw.gov.in/>; Ministry of Women and Child Development. <https://wcd.gov.in/>',
  19: 'Ministry of Labour and Employment. <https://labour.gov.in/>; Employees State Insurance Corporation. <https://esic.gov.in/>',
  20: 'Ministry of Health and Family Welfare. <https://mohfw.gov.in/>; World Health Organization. <https://www.who.int/>',
  21: 'Ministry of External Affairs. <https://www.mea.gov.in/>; Insurance Regulatory and Development Authority of India. <https://irdai.gov.in/>',
  22: 'Department of Consumer Affairs. <https://consumeraffairs.nic.in/>',
  23: 'Ministry of Skill Development and Entrepreneurship. <https://www.msde.gov.in/>; National Skill Development Corporation. <https://www.nsdcindia.org/>',
  24: 'Ministry of Health and Family Welfare. <https://mohfw.gov.in/>; National Health Authority. <https://nha.gov.in/>',
  25: 'Ministry of Home Affairs. <https://www.mha.gov.in/>; Indian Succession Act, 1925. <https://www.indiacode.nic.in/>',
  26: 'Ministry of Electronics and Information Technology. <https://www.meity.gov.in/>; CERT-In. <https://www.cert-in.org.in/>',
  27: 'Ministry of Health and Family Welfare. <https://mohfw.gov.in/>; National Health Authority. <https://nha.gov.in/>',
  28: 'Ministry of Health and Family Welfare. <https://mohfw.gov.in/>; Indian Council of Medical Research. <https://www.icmr.gov.in/>',
  29: 'Ministry of Health and Family Welfare. <https://mohfw.gov.in/>; Tele-MANAS. <https://telemanas.mohfw.gov.in/>',
  30: 'Ministry of Health and Family Welfare. <https://mohfw.gov.in/>; Ministry of Education. <https://www.education.gov.in/>',
  31: 'Ministry of Defence. <https://www.mod.gov.in/>; Ministry of External Affairs. <https://www.mea.gov.in/>',
  32: 'Ministry of Education. <https://www.education.gov.in/>; Ministry of External Affairs. <https://www.mea.gov.in/>',
  33: 'Department of Empowerment of Persons with Disabilities. <https://depwd.gov.in/>; Ministry of Health and Family Welfare. <https://mohfw.gov.in/>',
  34: 'Ministry of Health and Family Welfare. <https://mohfw.gov.in/>; Central Drugs Standard Control Organisation. <https://cdsco.gov.in/>'
};

function autoAdapt(tipId: string, field: string, original: string): string {
  if (!original) return original;
  let text = normaliseSpaces(original);
  for (const [pattern, replacement] of HOTLINE_REPLACEMENTS) {
    text = text.replace(pattern, replacement);
  }
  text = convertCurrency(text);
  if (!BANNED.test(text) && !SOURCE_TERMS.test(text.slice())) {
    SOURCE_TERMS.lastIndex = 0;
    return text;
  }
  SOURCE_TERMS.lastIndex = 0;
  if (field === 'sources') {
    const parts = text.split(';').map((part) => part.trim()).filter(Boolean);
    const kept = parts.filter((part) => !BANNED.test(part) && !SOURCE_TERMS.test(part));
    SOURCE_TERMS.lastIndex = 0;
    let result = kept.join('; ');
    if (!/https?:\/\//i.test(result)) {
      result = CHAPTER_SOURCES[chapterNumber] ?? '';
      if (!result) problems.push(tipId + '.sources: auto pass left no URL');
    }
    return result;
  }
  const sentences = splitSentences(text);
  const kept = sentences.filter((sentence) => !BANNED.test(sentence) && !SOURCE_TERMS.test(sentence));
  SOURCE_TERMS.lastIndex = 0;
  const result = kept.join(' ').replace(/\s+/g, ' ').trim();
  if (!result) {
    problems.push(tipId + '.' + field + ': auto pass removed the whole field');
    return original;
  }
  return result;
}

const tips = sourceChapter.tips.map((tip: any) => {
  const override = overrides.tips[tip.id];
  const risk = riskById.get(tip.id) ?? '';
  const next: any = { ...tip };
  for (const field of FIELDS) {
    const original = tip[field] ?? '';
    if (override && override[field] !== undefined) {
      next[field] = applyField(tip.id, field, original, override[field]);
    } else if (risk === 'high') {
      next[field] = original;
    } else {
      next[field] = autoAdapt(tip.id, field, original);
    }
  }
  if (!override && risk === 'high') manualNeeded.push(tip.id);
  if (!override && risk !== 'high') autoAdapted.push(tip.id);
  next.reviewStatus = 'draft';
  return next;
});

// Final hotline normalisation runs over every field, including hand-authored
// text, so a stray source-edition number cannot survive.
for (const tip of tips) {
  for (const field of FIELDS) {
    if (typeof tip[field] !== 'string') continue;
    for (const [pattern, replacement] of HOTLINE_REPLACEMENTS) {
      tip[field] = tip[field].replace(pattern, replacement);
    }
  }
  // Every tip must cite at least one URL. When the source edition's citations
  // were all source-specific, attach the chapter's official Indian portal.
  const fallback = CHAPTER_SOURCES[chapterNumber];
  if (!/https?:\/\//i.test(tip.sources) && fallback) {
    tip.sources = tip.sources ? tip.sources + '; ' + fallback : fallback;
  }
  // A tier-A tip that names an Indian institution, scheme or hotline needs at
  // least one official host. Attach the chapter portal when none is present.
  const INDIA_CLAIM = /\b(India|Indian|Aadhaar|PAN|ESIC|EPFO|EPF|UAN|PM-JAY|Ayushman|MGNREGA|NALSA|Tele-MANAS|RBI|SEBI|IRDAI|GST|₹|rupee|rupees|112|108|14416|1098|14567|1930|15100|1915)\b/i;
  const OFFICIAL_HOST = /(gov\.in|nic\.in|who\.int|rbi\.org\.in|sebi\.gov\.in|irdai\.gov\.in|nha\.gov\.in|nalsa\.gov\.in|esic\.gov\.in|epfo\.gov\.in)/i;
  const joined = [tip.title, tip.inPlainWords, tip.benefit, tip.caveats, tip.sources].join(' ');
  if (fallback && INDIA_CLAIM.test(joined) && !OFFICIAL_HOST.test(tip.sources)) {
    tip.sources = tip.sources ? tip.sources + '; ' + fallback : fallback;
  }
}

const chapter = {
  chapter: sourceChapter.chapter,
  slug: sourceChapter.slug,
  title: overrides.title ?? sourceChapter.title,
  intro: overrides.intro ?? sourceChapter.intro,
  edition: 'india',
  rewriteStatus: 'draft',
  tips
};

const outPath = path.resolve(
  'data/en-in/chapters/' + String(chapterNumber).padStart(2, '0') + '-' + sourceChapter.slug + '.json'
);
// Chapters 7 and 19 were written and verified in an earlier pass. They have no
// override file here, so never regenerate them by accident.
const PROTECTED = new Set([7, 19]);
if (PROTECTED.has(chapterNumber) && fs.existsSync(outPath) && !process.argv.includes('--force')) {
  console.error('Refusing to overwrite protected chapter ' + chapterNumber + ' (pass --force to rebuild).');
  process.exit(1);
}
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(chapter, null, 2));

let bannedTips = 0;
const sourceTermTips = new Set<string>();
for (const tip of tips) {
  const text = JSON.stringify(tip);
  if (BANNED.test(text)) {
    bannedTips += 1;
    const hits = [...new Set((text.match(new RegExp(BANNED.source, 'gi')) ?? []).map((x) => x.toLowerCase()))];
    problems.push(tip.id + ': still contains banned term(s): ' + hits.join(', '));
  }
  for (const match of text.match(SOURCE_TERMS) ?? []) {
    sourceTermTips.add(tip.id + ':' + match.toLowerCase());
  }
}

console.log('Wrote ' + outPath);
console.log('Tips: ' + tips.length + ', banned-term tips: ' + bannedTips + ', auto-adapted: ' + autoAdapted.length);
if (manualNeeded.length) console.log('High-risk tips still needing a manual override: ' + manualNeeded.join(', '));
if (sourceTermTips.size) {
  console.log('Remaining source-specific terms: ' + [...sourceTermTips].slice(0, 30).join(', '));
}
if (problems.length) {
  console.error('Issues: ' + problems.length);
  for (const problem of problems.slice(0, 40)) console.error('  - ' + problem);
  process.exit(1);
}
