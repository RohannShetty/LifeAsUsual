import fs from 'node:fs';
import path from 'node:path';

const BANNED = /\b(China|Chinese|mainland|RMB|yuan|hukou|yibao|dibao|CNY)\b/i;
const CJK = /[\u3000-\u303f\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff00-\uffef]/;
const FOREIGN_TERMS = /\b(NMPA|NHSA|SAMR|MOHRSS|CSCSE|CBIRC|NFRA|MIIT|SFDA|CNCA|AQSIQ|QDII|PRC|HuiFa|Yibaofa|Guobanfa|Caijin)\b|\b(State Council|Supreme People|procuratorate|hukou|yibao|dibao|guokao|zikao|chengkao|jubensha|Renminbi|WeChat|Alipay)\b/i;
const args = process.argv.slice(2);
const finalMode = args.includes('--final');

const manifest = JSON.parse(fs.readFileSync('data/en-in/manifest.json', 'utf-8'));
const source = JSON.parse(fs.readFileSync('data/en/all-chapters.json', 'utf-8'));
const sourceByChapter = new Map(source.map((chapter) => [chapter.chapter, chapter]));

const rewrittenPaths = [];
for (const [key, meta] of Object.entries(manifest.chapters)) {
  if (meta.status === 'queued') continue;
  const chapter = sourceByChapter.get(Number(key));
  if (!chapter) continue;
  rewrittenPaths.push(
    'dist/chapters/' + String(chapter.chapter).padStart(2, '0') + '-' + chapter.slug + '/index.html'
  );
}

const chromePaths = [
  'dist/india/index.html',
  'dist/about/index.html',
  'dist/chapters/index.html'
];

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

const files = finalMode
  ? walk('dist')
  : [...rewrittenPaths, ...chromePaths].filter((file) => fs.existsSync(file));

if (!files.length) {
  console.error('No built HTML files found. Run npm run build first.');
  process.exit(1);
}

const hits = [];
for (const file of files) {
  const text = fs.readFileSync(file, 'utf-8');
  const match = text.match(BANNED) || text.match(CJK) || text.match(FOREIGN_TERMS);
  if (match) hits.push(file + ' -> ' + match[0]);
}

console.log('Term scan (' + (finalMode ? 'final, all pages' : 'rewritten chapters and chrome') + ')');
console.log('pages scanned: ' + files.length);

if (hits.length) {
  console.error('FAIL: ' + hits.length + ' page(s) contain a banned term');
  for (const hit of hits.slice(0, 40)) console.error('  - ' + hit);
  process.exit(1);
}

console.log('PASS: no banned terms found.');
