// Reader JS budget: the gzipped weight of every script a page actually loads,
// external chunks deduped, inline scripts each gzipped, for a chapter page, the
// progress page and home. AGENTS.md Check 6 caps reader page JS at 60 KB gzip.
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const dist = process.argv[2] || 'dist';
const pages = [
  'chapters/02-do-not-die-slowly/index.html',
  'progress/index.html',
  'index.html'
];

const gz = (buf) => zlib.gzipSync(buf, { level: 9 }).length;

function budgetPage(rel) {
  const html = fs.readFileSync(path.join(dist, rel), 'utf8');
  const srcs = new Set();
  let m;
  const srcRe = /<script[^>]*\ssrc="([^"]+)"/g;
  while ((m = srcRe.exec(html))) srcs.add(m[1]);

  const inlineTexts = [];
  const inlineRe = /<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g;
  while ((m = inlineRe.exec(html))) {
    if (m[1].trim()) inlineTexts.push(m[1]);
  }

  const files = [];
  let externalGz = 0;
  let externalRaw = 0;
  for (const src of srcs) {
    const local = path.join(dist, src.replace(/^\//, ''));
    const raw = fs.readFileSync(local);
    const gzipped = gz(raw);
    externalGz += gzipped;
    externalRaw += raw.length;
    files.push({ src, rawKb: +(raw.length / 1024).toFixed(1), gzKb: +(gzipped / 1024).toFixed(1) });
  }

  const inlineRaw = inlineTexts.reduce((sum, text) => sum + Buffer.byteLength(text, 'utf8'), 0);
  const inlineGz = inlineTexts.reduce((sum, all) => sum + gz(all), 0);

  return {
    page: '/' + rel.replace(/index\.html$/, ''),
    external: files,
    externalGzKb: +(externalGz / 1024).toFixed(1),
    inlineCount: inlineTexts.length,
    inlineRawKb: +(inlineRaw / 1024).toFixed(1),
    inlineGzKb: +(inlineGz / 1024).toFixed(1),
    totalRawKb: +((externalRaw + inlineRaw) / 1024).toFixed(1),
    totalGzKb: +((externalGz + inlineGz) / 1024).toFixed(1)
  };
}

const rows = pages.map(budgetPage);
for (const row of rows) {
  console.log(
    row.page.padEnd(34) +
    'external ' + String(row.externalGzKb).padStart(5) + ' KB gz (' + row.external.length + ' files)' +
    ' + inline ' + String(row.inlineGzKb).padStart(5) + ' KB gz (' + row.inlineCount + ')' +
    ' = ' + String(row.totalGzKb).padStart(5) + ' KB gz'
  );
}
console.log(JSON.stringify(rows, null, 1));
