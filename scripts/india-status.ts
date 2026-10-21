import fs from 'node:fs';

const args = process.argv.slice(2);
const chapter = Number(args[0]);
const status = args[1] as 'queued' | 'draft' | 'checked' | 'reviewed';
if (!chapter || !status) {
  console.error('Usage: tsx scripts/india-status.ts <chapter> <queued|draft|checked|reviewed> [--verifier=] [--date=] [--sources=] [--human=] [--issue=]');
  process.exit(1);
}

const path = 'data/en-in/manifest.json';
const manifest = JSON.parse(fs.readFileSync(path, 'utf-8'));
const meta = manifest.chapters[String(chapter)];
if (!meta) {
  console.error('Unknown chapter ' + chapter);
  process.exit(1);
}

const flag = (name: string): string | undefined => {
  const hit = args.find((arg) => arg.startsWith('--' + name + '='));
  return hit ? hit.slice(name.length + 3) : undefined;
};

meta.status = status;
if (status === 'queued') {
  meta.verifier = null;
  meta.verifiedAt = null;
  meta.sourceCount = 0;
  meta.humanReview = 'n/a';
  meta.openIssues = [];
  meta.bannedTerms = 0;
} else {
  if (flag('verifier') !== undefined) meta.verifier = flag('verifier') || null;
  if (flag('date') !== undefined) meta.verifiedAt = flag('date') || null;
  if (flag('sources') !== undefined) meta.sourceCount = Number(flag('sources'));
  if (flag('human') !== undefined) meta.humanReview = flag('human');
  meta.openIssues = args.filter((arg) => arg.startsWith('--issue=')).map((arg) => arg.slice(8));
  meta.bannedTerms = 0;
}

fs.writeFileSync(path, JSON.stringify(manifest, null, 2) + '\n');
console.log('Chapter ' + chapter + ' -> ' + status);
