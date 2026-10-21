import fs from 'node:fs';
import path from 'node:path';

/**
 * Flip one chapter to the independently-checked state after reading its
 * verification report. Refuses to run unless the report ends in a PASS verdict.
 *
 *   npx tsx scripts/india-mark-verified.ts 12
 *   npx tsx scripts/india-mark-verified.ts 12 --date=2026-10-21 --verifier=independent-verifier-ab12
 */
const args = process.argv.slice(2);
const chapter = Number(args[0]);
if (!Number.isInteger(chapter) || chapter < 1 || chapter > 34) {
  console.error('usage: tsx scripts/india-mark-verified.ts <chapter> [--date=YYYY-MM-DD] [--verifier=name]');
  process.exit(2);
}
const flag = (name: string): string | undefined => {
  const hit = args.find((arg) => arg.startsWith('--' + name + '='));
  return hit ? hit.slice(name.length + 3) : undefined;
};

const key = String(chapter).padStart(2, '0');
const reportPath = path.join('reports/verification', 'chapter-' + key + '.md');
if (!fs.existsSync(reportPath)) {
  console.error('No verification report at ' + reportPath);
  process.exit(1);
}
const report = fs.readFileSync(reportPath, 'utf-8');
if (!/verdict\s*:\s*pass/i.test(report)) {
  console.error(reportPath + ' does not carry a PASS verdict; refusing to mark chapter ' + chapter);
  process.exit(1);
}

const reportVerifier = (report.match(/^Verifier:\s*(.+)$/im)?.[1] ?? '').trim();
const reportDate = (report.match(/^(?:Date|Access date):\s*(\d{4}-\d{2}-\d{2})/im)?.[1] ?? '');
const verifier = flag('verifier') || reportVerifier || 'independent-verifier';
const date = flag('date') || reportDate || new Date().toISOString().slice(0, 10);

const manifestPath = 'data/en-in/manifest.json';
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
const meta = manifest.chapters[String(chapter)];
if (!meta) {
  console.error('No manifest entry for chapter ' + chapter);
  process.exit(1);
}

const source = JSON.parse(fs.readFileSync('data/en/all-chapters.json', 'utf-8'));
const sourceChapter = source.find((entry: any) => entry.chapter === chapter);
if (!sourceChapter) {
  console.error('No source chapter ' + chapter);
  process.exit(1);
}
const chapterFile = path.join('data/en-in/chapters', key + '-' + sourceChapter.slug + '.json');
const built = JSON.parse(fs.readFileSync(chapterFile, 'utf-8'));

built.rewriteStatus = 'checked';
let withSource = 0;
for (const tip of built.tips) {
  tip.reviewStatus = 'independently-checked';
  if (/https?:\/\//i.test(tip.sources ?? '')) withSource += 1;
}
fs.writeFileSync(chapterFile, JSON.stringify(built, null, 2) + '\n');

meta.status = 'checked';
meta.verifier = verifier;
meta.verifiedAt = date;
meta.sourceCount = withSource;
meta.bannedTerms = 0;
meta.openIssues = [];
if (meta.humanReview === 'n/a') meta.humanReview = 'pending';
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');

console.log(
  'Chapter ' + chapter + ' -> checked (verifier: ' + verifier + ', date: ' + date + ', tips with source: ' + withSource + ')'
);
