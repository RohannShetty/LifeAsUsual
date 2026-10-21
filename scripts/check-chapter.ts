import fs from 'node:fs';
import path from 'node:path';

const n = Number(process.argv[2]);
if (!Number.isInteger(n) || n < 1 || n > 34) {
  console.error('usage: tsx scripts/check-chapter.ts <chapter-number>');
  process.exit(2);
}
const key = String(n).padStart(2, '0');
const manifest = JSON.parse(fs.readFileSync('data/en-in/manifest.json', 'utf-8'));
if (!manifest.chapters[String(n)]) {
  console.error('No manifest entry for chapter ' + n);
  process.exit(2);
}
const source = JSON.parse(fs.readFileSync('data/en/all-chapters.json', 'utf-8'));
const sourceChapter = source.find((c) => c.chapter === n);
if (!sourceChapter) {
  console.error('No source chapter ' + n);
  process.exit(2);
}
const file = key + '-' + sourceChapter.slug + '.json';
const raw = fs.readFileSync(path.join('data/en-in/chapters', file), 'utf-8');
const CJK = /[\u3000-\u303f\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff00-\uffef]/;
const BANNED = /\b(China|Chinese|mainland|RMB|yuan|hukou|yibao|dibao|CNY)\b/i;
const FOREIGN_TERMS = /\b(NMPA|NHSA|SAMR|MOHRSS|CSCSE|CBIRC|NFRA|MIIT|SFDA|CNCA|AQSIQ|QDII|PRC|HuiFa|Yibaofa|Guobanfa|Caijin)\b|\b(State Council|Supreme People|procuratorate|hukou|yibao|dibao|guokao|zikao|chengkao|jubensha|Renminbi|WeChat|Alipay)\b/i;
const chapter = JSON.parse(raw);
const problems = [];
for (const [label, re] of [['banned term', BANNED], ['CJK', CJK], ['foreign term', FOREIGN_TERMS]]) {
  const hit = raw.match(re);
  if (hit) problems.push(label + ': ' + hit[0]);
}
for (const tip of chapter.tips) {
  if (!/https?:\/\//i.test(tip.sources || '')) problems.push(tip.id + ' has no source URL');
}
console.log('chapter ' + n + ' (' + file + '): ' + chapter.tips.length + ' tips');
if (problems.length) {
  console.error('FAIL (' + problems.length + ')');
  for (const p of problems) console.error('  - ' + p);
  process.exit(1);
}
console.log('PASS: no banned term, CJK character or foreign-jurisdiction term.');
