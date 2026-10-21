import fs from 'node:fs';
import path from 'node:path';

type ChapterStatus = 'queued' | 'draft' | 'checked' | 'reviewed';
type Tier = 'A' | 'B';

interface ManifestChapter {
  status: ChapterStatus;
  tier: Tier;
  tips: number;
  verifier: string | null;
  verifiedAt: string | null;
  sourceCount: number;
  humanReview: string;
  openIssues: string[];
  bannedTerms: number;
}

interface Manifest {
  edition: string;
  generatedAt: string;
  totalChapters: number;
  totalTips: number;
  chapters: Record<string, ManifestChapter>;
}

interface Tip {
  id: string;
  chapter: number;
  tip: number;
  title: string;
  tags: Record<string, unknown>;
  costScore: number;
  valueTier: string;
  disputed: boolean;
  stillVerifying: boolean;
  cost: string;
  inPlainWords: string;
  benefit: string;
  evidenceGrade: string;
  sources: string;
  caveats: string;
  reviewStatus?: string;
}

interface Chapter {
  chapter: number;
  slug: string;
  title: string;
  intro?: string;
  edition?: string;
  rewriteStatus?: string;
  tips: Tip[];
}

const BANNED = /\b(China|Chinese|mainland|RMB|yuan|hukou|yibao|dibao|CNY)\b/i;
const BANNED_TERMS = ['China', 'Chinese', 'mainland', 'RMB', 'yuan', 'hukou', 'yibao', 'dibao', 'CNY'];

// Official Indian hosts, plus WHO for international medical evidence. A host is
// accepted when it is a suffix of the parsed URL hostname, so "notgov.in" and
// "gov.in.example.com" are rejected.
const OFFICIAL_HOSTS = [
  'gov.in',
  'nic.in',
  'who.int',
  'rbi.org.in',
  'sebi.gov.in',
  'irdai.gov.in',
  'nha.gov.in',
  'nfsa.gov.in',
  'nalsa.gov.in',
  'esic.gov.in',
  'epfo.gov.in'
];

const VALID_STATUSES: ChapterStatus[] = ['queued', 'draft', 'checked', 'reviewed'];
const VALID_TIERS: Tier[] = ['A', 'B'];
const VALID_VALUE_TIERS = ['Very high', 'High', 'Average'];
const REQUIRED_TIP_FIELDS = [
  'id',
  'chapter',
  'tip',
  'title',
  'tags',
  'costScore',
  'valueTier',
  'cost',
  'inPlainWords',
  'benefit',
  'evidenceGrade',
  'sources',
  'caveats'
] as const;

const args = process.argv.slice(2);
const finalMode = args.includes('--final');
let chapterFilter = '';
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--chapter') chapterFilter = args[i + 1] || '';
  if (args[i].startsWith('--chapter=')) chapterFilter = args[i].split('=')[1] || '';
}

const errors: string[] = [];
const chapterDir = path.resolve('data/en-in/chapters');
const manifestPath = path.resolve('data/en-in/manifest.json');
const sourcePath = path.resolve('data/en/all-chapters.json');

function fail(message: string) {
  console.error('FAIL: ' + message);
  process.exit(1);
}

if (!fs.existsSync(manifestPath)) fail('Missing data/en-in/manifest.json');
if (!fs.existsSync(sourcePath)) fail('Missing data/en/all-chapters.json');

const manifest: Manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
const source: Chapter[] = JSON.parse(fs.readFileSync(sourcePath, 'utf-8'));
const sourceByChapter = new Map(source.map((chapter) => [chapter.chapter, chapter]));

if (manifest.edition !== 'india') errors.push('manifest.edition must be "india"');
if (manifest.totalChapters !== 34) errors.push('manifest.totalChapters must be 34');
if (manifest.totalTips !== 765) errors.push('manifest.totalTips must be 765');
if (Object.keys(manifest.chapters).length !== 34) {
  errors.push('manifest must declare 34 chapters, found ' + Object.keys(manifest.chapters).length);
}

const files = fs.existsSync(chapterDir)
  ? fs.readdirSync(chapterDir).filter((name) => name.endsWith('.json')).sort()
  : [];
const declaredChapters = new Set(Object.keys(manifest.chapters).map(Number));
const fileByChapter = new Map<number, string>();
const declaredFiles = new Set<string>();

for (const file of files) {
  const parsed = JSON.parse(fs.readFileSync(path.join(chapterDir, file), 'utf-8')) as Chapter;
  if (fileByChapter.has(parsed.chapter)) {
    errors.push('Two chapter files declare chapter ' + parsed.chapter);
  }
  fileByChapter.set(parsed.chapter, file);
  if (!declaredChapters.has(parsed.chapter)) {
    errors.push('Chapter file ' + file + ' is not declared by the manifest');
  } else {
    declaredFiles.add(file);
  }
  const expected = String(parsed.chapter).padStart(2, '0') + '-' + parsed.slug + '.json';
  if (file !== expected) errors.push('Chapter file ' + file + ' should be named ' + expected);
}

let totalTips = 0;
let checkedTips = 0;
let checkedChapters = 0;
const seenIds = new Set<string>();

for (const [key, meta] of Object.entries(manifest.chapters)) {
  const chapterNumber = Number(key);
  if (!Number.isInteger(chapterNumber) || chapterNumber < 1 || chapterNumber > 34) {
    errors.push('Manifest chapter key is not 1-34: ' + key);
    continue;
  }
  if (chapterFilter && chapterNumber !== Number(chapterFilter)) continue;

  const sourceChapter = sourceByChapter.get(chapterNumber);
  if (!sourceChapter) {
    errors.push('Chapter ' + key + ' has no source chapter');
    continue;
  }

  if (!VALID_STATUSES.includes(meta.status)) errors.push('Chapter ' + key + ' has invalid status ' + meta.status);
  if (!VALID_TIERS.includes(meta.tier)) errors.push('Chapter ' + key + ' has invalid tier ' + meta.tier);
  if (!Number.isInteger(meta.tips) || meta.tips !== sourceChapter.tips.length) {
    errors.push('Chapter ' + key + ' manifest tip count does not match source (' + meta.tips + ' vs ' + sourceChapter.tips.length + ')');
  }

  const file = fileByChapter.get(chapterNumber);
  const isComplete = meta.status === 'checked' || meta.status === 'reviewed';

  if (meta.status === 'queued') {
    if (file) errors.push('Chapter ' + key + ' is queued but has a rewrite file');
    if (meta.verifier || meta.verifiedAt || meta.sourceCount > 0) {
      errors.push('Chapter ' + key + ' is queued but records verification provenance');
    }
    if (meta.humanReview !== 'n/a') errors.push('Chapter ' + key + ' is queued but has a humanReview value');
    continue;
  }

  if (!file) {
    errors.push('Chapter ' + key + ' is ' + meta.status + ' but has no rewrite file');
    continue;
  }


  const chapter = JSON.parse(fs.readFileSync(path.join(chapterDir, file), 'utf-8')) as Chapter;
  const raw = fs.readFileSync(path.join(chapterDir, file), 'utf-8');

  // Banned terms: whole file, then per field for a useful error location.
  const fileTerm = raw.match(BANNED);
  if (fileTerm) {
    errors.push('Chapter ' + key + ' file contains banned term "' + fileTerm[0] + '"');
  }
  for (const field of ['title', 'intro'] as const) {
    if (typeof chapter[field] === 'string' && BANNED.test(chapter[field] as string)) {
      errors.push('Chapter ' + key + ' ' + field + ' contains a banned term');
    }
  }

  if (chapter.chapter !== chapterNumber) errors.push('Chapter ' + key + ' file declares chapter ' + chapter.chapter);
  if (chapter.slug !== sourceChapter.slug) errors.push('Chapter ' + key + ' slug does not match source slug');
  if (chapter.edition !== 'india') errors.push('Chapter ' + key + ' is missing edition: india');
  if (chapter.rewriteStatus !== meta.status) {
    errors.push('Chapter ' + key + ' rewriteStatus does not match manifest status');
  }
  if (chapter.tips.length !== sourceChapter.tips.length || chapter.tips.length !== meta.tips) {
    errors.push('Chapter ' + key + ' tip count mismatch');
  }

  totalTips += chapter.tips.length;
  if (isComplete) {
    checkedChapters += 1;
    checkedTips += chapter.tips.length;
  }

  const chapterTipNumbers = new Set<number>();
  for (const [index, tip] of chapter.tips.entries()) {
    const expectedTip = index + 1;

    if (seenIds.has(tip.id)) errors.push('Duplicate tip ID ' + tip.id);
    seenIds.add(tip.id);

    for (const field of REQUIRED_TIP_FIELDS) {
      const value = (tip as unknown as Record<string, unknown>)[field];
      if (value === undefined || value === null || (typeof value === 'string' && !value.trim())) {
        errors.push('Tip ' + (tip.id || expectedTip) + ' has empty ' + field);
      }
    }

    if (tip.id !== chapterNumber + '-' + expectedTip) {
      errors.push('Tip ' + tip.id + ' should have id ' + chapterNumber + '-' + expectedTip + ' (sequence position ' + expectedTip + ')');
    }
    if (tip.chapter !== chapterNumber) errors.push('Tip ' + tip.id + ' chapter field is ' + tip.chapter);
    if (tip.tip !== expectedTip) errors.push('Tip ' + tip.id + ' tip field is ' + tip.tip + ', expected ' + expectedTip);
    if (chapterTipNumbers.has(tip.tip)) errors.push('Duplicate tip number ' + tip.tip + ' in chapter ' + chapterNumber);
    chapterTipNumbers.add(tip.tip);

    if (BANNED.test(JSON.stringify(tip))) {
      const hit = JSON.stringify(tip).match(BANNED);
      errors.push('Tip ' + tip.id + ' contains banned term "' + (hit ? hit[0] : '?') + '"');
    }
    if (typeof tip.sources !== 'string' || !/https?:\/\//i.test(tip.sources)) {
      errors.push('Tip ' + tip.id + ' has no source URL');
    }
    if (!VALID_VALUE_TIERS.includes(tip.valueTier)) errors.push('Tip ' + tip.id + ' has invalid valueTier');
    if (!['A', 'B', 'C'].includes(tip.evidenceGrade)) errors.push('Tip ' + tip.id + ' has invalid evidenceGrade');
    if (typeof tip.tags !== 'object' || tip.tags === null || Array.isArray(tip.tags)) {
      errors.push('Tip ' + tip.id + ' has invalid tags');
    }
    if (typeof tip.costScore !== 'number') errors.push('Tip ' + tip.id + ' has a non-numeric costScore');

    // A tip that makes an India-specific claim (institutions, schemes, hotlines,
    // rupee amounts) must cite at least one official host. Universal evidence
    // from a cohort study cannot honestly cite an Indian source, so a credible
    // URL is enough there.
    const urls = tip.sources.match(/https?:\/\/[^\s<>")]+/gi) ?? [];
    if (!urls.length) errors.push('Tip ' + tip.id + ' has no parseable source URL');
    const indiaClaim = /\b(India|Indian|Aadhaar|PAN|ESIC|EPFO|EPF|UAN|PM-JAY|Ayushman|MGNREGA|NALSA|Tele-MANAS|RBI|SEBI|IRDAI|GST|₹|rupee|rupees|UAN|112|108|14416|1098|14567|1930|15100|1915)\b/i.test(
      [tip.title, tip.inPlainWords, tip.benefit, tip.caveats, tip.sources].join(' ')
    );
    if (meta.tier === 'A' && indiaClaim) {
      let officialCount = 0;
      for (const url of urls) {
        let host = '';
        try {
          host = new URL(url).hostname.toLowerCase();
        } catch {
          errors.push('Tier A tip ' + tip.id + ' has an invalid URL ' + url);
          continue;
        }
        if (OFFICIAL_HOSTS.some((domain) => host === domain || host.endsWith('.' + domain))) {
          officialCount += 1;
        }
      }
      if (officialCount === 0) errors.push('Tier A tip ' + tip.id + ' makes an India claim but has no official Indian source host');
    } else if (meta.tier === 'A') {
      for (const url of urls) {
        try {
          new URL(url);
        } catch {
          errors.push('Tier A tip ' + tip.id + ' has an invalid URL ' + url);
        }
      }
    }

    const expectedReview = meta.status === 'reviewed' ? 'reviewed'
      : meta.status === 'checked' ? 'independently-checked'
      : 'draft';
    if (tip.reviewStatus !== expectedReview) {
      errors.push('Tip ' + tip.id + ' reviewStatus is ' + (tip.reviewStatus ?? 'missing') + ', expected ' + expectedReview);
    }
  }

  if (isComplete) {
    const report = path.resolve('reports/verification/chapter-' + String(chapterNumber).padStart(2, '0') + '.md');
    if (!fs.existsSync(report)) {
      errors.push('Chapter ' + key + ' has no verification report');
    } else {
      const text = fs.readFileSync(report, 'utf-8');
      if (!/verdict\s*:\s*pass/i.test(text)) {
        errors.push('Chapter ' + key + ' verification report has no PASS verdict');
      }
      if (!/chapter\s+' + chapterNumber + '\b/i.test(text)) {
        errors.push('Chapter ' + key + ' verification report does not name chapter ' + chapterNumber);
      }
    }
    if (meta.sourceCount <= 0) errors.push('Chapter ' + key + ' has no source count');
    if (!meta.verifier) errors.push('Chapter ' + key + ' has no verifier');
    if (!meta.verifiedAt) errors.push('Chapter ' + key + ' has no verifiedAt');
    if (!Array.isArray(meta.openIssues)) errors.push('Chapter ' + key + ' openIssues must be an array');
    if (meta.bannedTerms !== 0) errors.push('Chapter ' + key + ' recorded bannedTerms must be 0');
    if (meta.status === 'reviewed') {
      if (meta.humanReview !== 'signed-off') {
        errors.push('Chapter ' + key + ' is reviewed without a signed-off humanReview value');
      }
      if (meta.tier === 'A') {
        if (!meta.verifier || /^ai|automated/i.test(meta.verifier)) {
          errors.push('Chapter ' + key + ' is reviewed without a named human reviewer');
        }
      }
    }
  }
}

if (chapterFilter && !manifest.chapters[chapterFilter]) {
  errors.push('Unknown chapter ' + chapterFilter);
}

if (finalMode) {
  const completed = Object.values(manifest.chapters).filter(
    (chapter) => chapter.status === 'checked' || chapter.status === 'reviewed'
  ).length;
  if (completed !== 34) errors.push('Final mode requires 34 checked/reviewed chapters, found ' + completed);
  if (totalTips !== 765) errors.push('Final mode requires 765 rewritten tips, found ' + totalTips);
  if (checkedTips !== 765) errors.push('Final mode requires 765 checked/reviewed tips, found ' + checkedTips);
  if (files.length !== 34) errors.push('Final mode requires 34 chapter files, found ' + files.length);
  const draft = Object.values(manifest.chapters).filter((chapter) => chapter.status === 'draft').length;
  if (draft !== 0) errors.push('Final mode requires 0 draft chapters, found ' + draft);
}

const mode = finalMode ? 'final' : chapterFilter ? 'chapter ' + chapterFilter : 'manifest';
console.log('India verification (' + mode + ')');
console.log('chapters declared: ' + Object.keys(manifest.chapters).length);
console.log('chapter files: ' + files.length);
console.log('rewritten tips: ' + totalTips);
console.log('checked/reviewed chapters: ' + checkedChapters + ', tips: ' + checkedTips);

if (errors.length) {
  console.error('FAIL: ' + errors.length + ' issue(s)');
  for (const error of errors.slice(0, 60)) console.error('  - ' + error);
  process.exit(1);
}

console.log('PASS: India verification is green.');
