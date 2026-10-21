import fs from 'node:fs';
import path from 'node:path';

type ChapterStatus = 'queued' | 'draft' | 'checked' | 'reviewed';

interface ManifestChapter {
  status: ChapterStatus;
  tier: 'A' | 'B';
  tips: number;
}

interface Manifest {
  chapters: Record<string, ManifestChapter>;
}

interface Tip {
  id: string;
  chapter: number;
  tip: number;
  title: string;
  tags: { scope?: string };
  inPlainWords: string;
  cost: string;
  benefit: string;
  caveats: string;
}

interface Chapter {
  chapter: number;
  tips: Tip[];
}

interface Row {
  id: string;
  chapter: string;
  title: string;
  china_terms: string;
  risk: string;
  india_anchor: string;
  india_application: string;
  rewrite_status: string;
}

const BANNED = /\b(China|Chinese|mainland|RMB|yuan|hukou|yibao|dibao|CNY)\b/i;
const SOURCE_SPECIFIC = /\b(WeChat|Alipay|Taobao|12345|12308|12315|12321|12377|12389|12309|96110|12356|12355|12348|12333|shebao|gongjijin|gongshang|laodong|caili)\b/i;

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

function csvCell(value: string): string {
  if (/[",\r\n]/.test(value)) return '"' + value.replace(/"/g, '""') + '"';
  return value;
}

const manifest: Manifest = JSON.parse(fs.readFileSync('data/en-in/manifest.json', 'utf-8'));
const source: Chapter[] = JSON.parse(fs.readFileSync('data/en/all-chapters.json', 'utf-8'));
const worklistPath = path.resolve('reports/india-rewrite-worklist.csv');

// Preserve the audit's risk and anchor classifications when the worklist
// already exists; recompute anything missing from the source text.
const prior = new Map<string, string[]>();
if (fs.existsSync(worklistPath)) {
  const rows = parseCsv(fs.readFileSync(worklistPath, 'utf-8'));
  const header = rows[0];
  for (const row of rows.slice(1)) {
    const record: Record<string, string> = {};
    header.forEach((key, index) => (record[key] = row[index] ?? ''));
    if (record.id) prior.set(record.id, row);
  }
}

const rows: Row[] = [];
for (const chapter of source) {
  const meta = manifest.chapters[String(chapter.chapter)];
  const status = meta?.status ?? 'queued';
  const chapterNotes = [
    meta?.tier === 'A' ? 'Tier A chapter.' : 'Tier B chapter.',
    status === 'queued'
      ? 'Still source text; queued for an India rewrite.'
      : 'Rewritten for India; see data/en-in/chapters/ and reports/source-packs/.'
  ].join(' ');

  for (const tip of chapter.tips) {
    const existing = prior.get(tip.id);
    const existingRisk = existing ? existing[4] : '';
    const existingAnchor = existing ? existing[5] : '';
    const existingTerms = existing ? existing[3] : '';
    const text = [tip.title, tip.inPlainWords, tip.cost, tip.benefit, tip.caveats].join(' ');
    const bannedTerms = [...new Set((text.match(new RegExp(BANNED.source, 'gi')) ?? []).map((term) => term.toLowerCase()))];
    const sourceTerms = [...new Set((text.match(new RegExp(SOURCE_SPECIFIC.source, 'gi')) ?? []).map((term) => term.toLowerCase()))];
    const risk = existingRisk || (bannedTerms.length || sourceTerms.length ? 'high' : 'low');
    const anchor = existingAnchor || (risk === 'high' ? 'legal-or-health' : 'universal');
    const rewriteStatus =
      status === 'queued' ? 'queued'
        : status === 'draft' ? 'rewritten-draft'
        : status === 'checked' ? 'rewritten-checked'
        : 'rewritten-reviewed';

    rows.push({
      id: tip.id,
      chapter: String(chapter.chapter),
      title: tip.title,
      china_terms: existingTerms || [...bannedTerms, ...sourceTerms].join('; '),
      risk,
      india_anchor: anchor,
      india_application: status === 'queued'
        ? (existing && existing[6] ? existing[6] : chapterNotes)
        : chapterNotes,
      rewrite_status: rewriteStatus
    });
  }
}

const header = ['id', 'chapter', 'title', 'china_terms', 'risk', 'india_anchor', 'india_application', 'rewrite_status'];
const lines = [header.join(',')];
for (const row of rows) {
  lines.push(header.map((key) => csvCell(String((row as unknown as Record<string, string>)[key] ?? ''))).join(','));
}
fs.writeFileSync(worklistPath, lines.join('\n') + '\n');

const counts = rows.reduce<Record<string, number>>((acc, row) => {
  acc[row.rewrite_status] = (acc[row.rewrite_status] ?? 0) + 1;
  return acc;
}, {});
console.log('India worklist: ' + rows.length + ' rows');
console.log(JSON.stringify(counts));
