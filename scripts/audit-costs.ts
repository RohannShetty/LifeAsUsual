import fs from 'node:fs';
import path from 'node:path';

/**
 * Money audit: compares the India edition's price sentences with the source
 * edition's, to catch the two failure modes the independent verifiers found.
 *
 *   RELABEL       the numerals were copied and only the currency noun changed
 *                 (\u51e0\u5341\u5143 -> "a few dozen rupees")
 *   CONVERTED     the yuan figure was multiplied by the fixed 14.21 rate
 *                 (3,000 yuan -> \u20b942,600). A currency convention, not an
 *                 Indian retail price, so it still needs a source.
 *
 * Numbers are only compared when they sit next to a money word in their own
 * text, which keeps study figures and counts out of the result.
 */

type Tip = Record<string, unknown> & { id: string };
const src = JSON.parse(fs.readFileSync('data/en/all-chapters.json', 'utf8')) as {
  chapter: number;
  tips: Tip[];
}[];

const SOURCE_MONEY = /(?:\d[\d,]*(?:\.\d+)?)\s*(?:\u5143|yuan|RMB|\u5757)|(?:\u5143|yuan|RMB|\u5757)\s*(?:\d[\d,]*(?:\.\d+)?)/gi;
const INDIA_MONEY = /\u20b9\s?\d[\d,]*(?:\.\d+)?|\d[\d,]*(?:\.\d+)?\s?(?:rupees?|Rs\.?)/gi;

const nums = (text: string, re: RegExp): number[] => {
  const out: number[] = [];
  for (const hit of text.match(re) ?? []) {
    for (const raw of hit.match(/\d[\d,]*(?:\.\d+)?/g) ?? []) {
      const value = Number(raw.replace(/,/g, ''));
      if (Number.isFinite(value) && value > 0) out.push(value);
    }
  }
  return out;
};

const srcText = new Map<string, string>();
for (const ch of src) for (const t of ch.tips) srcText.set(String(t.id), JSON.stringify(t));

type Row = { chapter: number; tip: string; cls: 'RELABEL' | 'CONVERTED' | 'UNVERIFIED'; evidence: string };
const rows: Row[] = [];

for (const file of fs.readdirSync('data/en-in/chapters').filter((f) => f.endsWith('.json'))) {
  const chapter = Number((file.match(/^(\d+)/) ?? [])[1]);
  const india = JSON.parse(fs.readFileSync(path.join('data/en-in/chapters', file), 'utf8')) as { tips: Tip[] };
  for (const tip of india.tips) {
    const source = srcText.get(String(tip.id)) ?? '';
    const cost = String(tip.cost ?? '');
    const s = nums(source, SOURCE_MONEY);
    const i = nums(cost, INDIA_MONEY);
    if (s.length === 0) continue;
    if (i.length === 0) continue;
    const relabel = i.every((x) => s.includes(x));
    const converted = i.some((x) => s.some((y) => Math.abs(x / y - 14.21) < 0.9));
    const cls = relabel ? 'RELABEL' : converted ? 'CONVERTED' : 'UNVERIFIED';
    rows.push({ chapter, tip: String(tip.id), cls, evidence: cost.slice(0, 180) });
  }
}

fs.writeFileSync(
  'reports/cost-audit.csv',
  'chapter,tip,class,india_cost\n' +
    rows.map((r) => [r.chapter, r.tip, r.cls, JSON.stringify(r.evidence)].join(',')).join('\n') +
    '\n',
);

const counts: Record<string, number> = {};
for (const r of rows) counts[r.cls] = (counts[r.cls] ?? 0) + 1;
console.log('money fields compared: ' + rows.length);
console.log(Object.entries(counts).map(([k, v]) => k + ': ' + v).join(', '));
const perChapter: Record<number, string[]> = {};
for (const r of rows) (perChapter[r.chapter] ??= []).push(r.tip + '(' + r.cls + ')');
for (const [ch, list] of Object.entries(perChapter)) console.log('ch' + ch + ': ' + list.join(' '));
