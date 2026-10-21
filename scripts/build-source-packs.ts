import fs from 'node:fs';
import path from 'node:path';

interface Tip {
  id: string;
  title: string;
  sources: string;
  caveats: string;
}

interface Chapter {
  chapter: number;
  slug: string;
  title: string;
  tips: Tip[];
}

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

const worklist = parseCsv(fs.readFileSync('reports/india-rewrite-worklist.csv', 'utf-8'));
const header = worklist[0];
const riskById = new Map<string, string>();
for (const row of worklist.slice(1)) {
  riskById.set(row[header.indexOf('id')], row[header.indexOf('risk')]);
}

const source: Chapter[] = JSON.parse(fs.readFileSync('data/en/all-chapters.json', 'utf-8'));
const manifest = JSON.parse(fs.readFileSync('data/en-in/manifest.json', 'utf-8'));
const SKIP = new Set([7, 19]);

for (const chapter of source) {
  if (SKIP.has(chapter.chapter)) continue;
  const file = fs.readdirSync('data/en-in/chapters').find((name) => name.startsWith(String(chapter.chapter).padStart(2, '0') + '-'));
  if (!file) continue;
  const india: Chapter = JSON.parse(fs.readFileSync(path.join('data/en-in/chapters', file), 'utf-8'));
  const indiaById = new Map(india.tips.map((tip) => [tip.id, tip]));
  const highRisk = chapter.tips.filter((tip) => riskById.get(tip.id) === 'high');

  const lines: string[] = [];
  lines.push('# Source Pack: Chapter ' + String(chapter.chapter).padStart(2, '0') + ' - ' + chapter.title);
  lines.push('');
  lines.push('Status: draft - awaiting independent verification');
  lines.push('Researcher: AI rewrite pass');
  lines.push('Date: 21 October 2026');
  lines.push('Access date: 21 October 2026 (citations were carried into the rewrite; see open issues)');
  lines.push('Chapter file: data/en-in/chapters/' + file);
  lines.push('');
  lines.push('## Claims');
  lines.push('');
  lines.push('| Tip | Claim or quantity | Official source | Section or page | Accessed | Verdict |');
  lines.push('| --- | --- | --- | --- | --- | --- |');
  for (const tip of highRisk) {
    const rewritten = indiaById.get(tip.id);
    const claim = (rewritten?.title ?? tip.title).replace(/\|/g, '/').slice(0, 220);
    const sources = (rewritten?.sources ?? tip.sources).replace(/\|/g, '/').replace(/;/g, '; ').slice(0, 420);
    lines.push('| ' + tip.id + ' | ' + claim + ' | ' + sources + ' | Cited section as named in the source | 2026-10-21 | pending |');
  }
  if (!highRisk.length) {
    lines.push('| - | No high-risk claim in this chapter | - | - | - | n/a |');
  }
  lines.push('');
  lines.push('## No-equivalent notes');
  lines.push('');
  lines.push('- High-risk source-edition schemes without a direct Indian equivalent were replaced with the closest Indian route and a caveat; see the chapter file.');
  lines.push('');
  lines.push('## Open issues');
  lines.push('');
  const issues = manifest.chapters[String(chapter.chapter)]?.openIssues ?? [];
  if (issues.length) {
    for (const issue of issues) lines.push('- ' + issue);
  } else {
    lines.push('- Independent verification pending.');
  }
  lines.push('');
  const out = path.join('reports/source-packs', 'chapter-' + String(chapter.chapter).padStart(2, '0') + '.md');
  fs.writeFileSync(out, lines.join('\n'));
  console.log('Wrote ' + out + ' (' + highRisk.length + ' high-risk claims)');
}
