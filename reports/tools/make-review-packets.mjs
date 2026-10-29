import fs from 'node:fs';
import path from 'node:path';

const DATE = '2026-10-30';
const NL = String.fromCharCode(10);
const BS = String.fromCharCode(92);
const PIPE = BS + '|';
const manifest = JSON.parse(fs.readFileSync('data/en-in/manifest.json', 'utf8'));

const chapters = new Map();
for (const file of fs.readdirSync('data/en-in/chapters')) {
  if (!file.endsWith('.json')) continue;
  const data = JSON.parse(fs.readFileSync(path.join('data/en-in/chapters', file), 'utf8'));
  chapters.set(Number(data.chapter), data);
}

const pad = (n) => String(n).padStart(2, '0');
const reportPath = (n) => 'reports/verification/chapter-' + pad(n) + '.md';
const sourcePath = (n) => 'source/book/' + pad(n) + '-*.md';
const isTipId = (s) => /^[0-9]+-[0-9]+$/.test(String(s || '').trim());

const BLOCKED_WORDS = ['403', 'access denied', 'could not be read', 'could not read', 'not readable', 'no readable text', 'unreadable', 'not fetchable', 'fetch typeerror', 'unsupported content type', 'could not be fetched', 'not read', 'no fetchable'];
const ACTION_WORDS = ['should-fix', 'should fix', 'non-blocking', 'note,', 'overclaim', 'invented', 'stronger than', 'residual', 'must not be recorded', 'note:', 'editorial note', 'plausible', 'no citation'];
const hasAny = (text, words) => {
  const low = String(text || '').toLowerCase();
  return words.some((word) => low.includes(word));
};

function analyse(n) {
  const file = reportPath(n);
  const result = { ok: false, rows: 0, accepted: [], flagged: [], blocked: [], notes: [] };
  if (!fs.existsSync(file)) return result;
  const lines = fs.readFileSync(file, 'utf8').split(NL);
  let header = [];
  let inCarry = false;
  for (const line of lines) {
    if (line.startsWith('## ')) {
      const low = line.toLowerCase();
      inCarry = low.includes('note') || low.includes('residual') || low.includes('blocking issue') || low.includes('carried');
      continue;
    }
    if (line.startsWith('|')) {
      const cells = line.split('|').map((c) => c.trim());
      if ((cells[1] || '').toLowerCase() === 'tip') { header = cells.map((c) => c.toLowerCase()); continue; }
      if (!isTipId(cells[1])) continue;
      const at = (names) => {
        for (const name of names) {
          const i = header.indexOf(name);
          if (i > 0) return i;
        }
        return -1;
      };
      const passAt = at(['pass?', 'result', 'pass']);
      const get = (i) => (i > 0 ? (cells[i] || '').trim() : '');
      const row = {
        tip: cells[1],
        claim: get(at(['claim'])),
        source: get(at(['source checked', 'source'])),
        section: get(at(['section', 'basis'])),
        access: get(at(['accessed'])),
        pass: get(passAt),
        note: get(passAt > 0 ? passAt + 1 : at(['note'])),
      };
      const pass = row.pass.split('*').join('');
      if (!pass || pass === '-') continue;
      const low = pass.toLowerCase();
      const clean = low.startsWith('yes') && !hasAny(row.note, ACTION_WORDS);
      result.rows += 1;
      if (clean) result.accepted.push(row);
      else if (hasAny(row.note, BLOCKED_WORDS)) result.blocked.push(row);
      else result.flagged.push(row);
      continue;
    }
    if (inCarry && line.startsWith('- ') && line.trim().length > 3) {
      const text = line.slice(2).trim();
      if (text.toLowerCase().replace(/[.]/g, '') !== 'none') result.notes.push(text);
      continue;
    }
    if (inCarry && line.startsWith('  ') && result.notes.length && line.trim().length > 0) {
      const last = result.notes.length - 1;
      result.notes[last] = result.notes[last] + ' ' + line.trim();
    }
  }
  result.ok = true;
  return result;
}

const tierA = [];
for (const key of Object.keys(manifest.chapters)) {
  const meta = manifest.chapters[key];
  if (meta.tier === 'A') tierA.push({ n: Number(key), meta });
}
tierA.sort((a, b) => a.n - b.n);
const totalTipsA = tierA.reduce((sum, c) => sum + c.meta.tips, 0);
const signedOff = tierA.filter((c) => c.meta.humanReview === 'signed-off').length;

const esc = (s) => String(s == null ? '' : s).split('|').join(PIPE).split(/[ ]+/).join(' ').trim();
const clip = (s, n) => {
  const words = esc(s).split(' ');
  return words.length <= n ? words.join(' ') : words.slice(0, n).join(' ') + '…';
};
const tick = (s) => '\u0060' + s + '\u0060';
const noteText = (s) => {
  const text = String(s == null ? '' : s).split(/\s+/).join(' ').trim();
  if (text.length <= 420) return text;
  const cut = text.slice(0, 420);
  const space = cut.lastIndexOf(' ');
  return (space > 200 ? cut.slice(0, space) : cut) + '…';
};
const tipList = (rows) => rows.map((r) => tick(r.tip)).join(', ');

let out = '';
out += '# Human review packet — Tier A chapters' + NL + NL;
out += 'Prepared ' + DATE + '. Regenerate with ' + tick('node reports/tools/make-review-packets.mjs') + ' after any text edit.' + NL + NL;
out += '**Scope: ' + tierA.length + ' Tier A chapters, ' + totalTipsA + ' tips, ' + signedOff + ' of ' + tierA.length + ' chapters signed off.** Every chapter in ' + tick('data/en-in/manifest.json') + ' still carries ' + tick('humanReview: "pending"') + '.' + NL + NL;
out += 'This is the review still owed on the India edition. Until a chapter reads ' + tick('signed-off') + ', [india.astro](src/pages/india.astro) lists it under pending human review and the chapter page shows the reviewer chip, so this packet is the blocking item, not a formality. Tier B chapters are not in this packet; their review is not gated.' + NL + NL;
out += '## How to review one chapter' + NL + NL;
out += '1. Read the built page against the source chapter. English page: ' + tick('/chapters/N-slug/') + ' in the local build. Source: ' + tick('source/book/NN-*.md') + ' in the pinned submodule.' + NL;
out += '2. Read for the recommendation, not for polish. Nothing may be summarised away, reordered, softened or strengthened, and every number, unit, grade, DOI and citation must still be the source value.' + NL;
out += '3. Check the India substitution. A figure that exists for India must be named and sourced where it is used; a converted figure must not wear an Indian source.' + NL;
out += '4. Work the flags. Each flag is a decision, not a re-audit: either the text already carries the hedge, or it gets one.' + NL;
out += '5. Sign off in the table at the end, then record it:' + NL + NL;
out += '   ' + String.fromCharCode(96, 96, 96) + NL;
out += '   npx tsx scripts/india-status.ts <chapter> checked --human=signed-off --verifier="<name>" --date=' + DATE + NL;
out += '   npx tsx scripts/verify-india.ts --final' + NL;
out += '   ' + String.fromCharCode(96, 96, 96) + NL + NL;
out += '   If the toolchain will not start in your environment, edit ' + tick('data/en-in/manifest.json') + ' directly: set ' + tick('chapters["<chapter>"].humanReview') + ' to ' + tick('"signed-off"') + ', then run the verifier.' + NL + NL;
out += 'What is not your job here: re-resolving DOIs, re-fetching government pages, or re-grading evidence. Those were done and recorded per chapter in ' + tick('reports/verification/') + '. You are the last reader, not a second verifier — but you are the one who decides whether a hedge is enough.' + NL + NL;
out += '## Chapter index' + NL + NL;
out += '| Ch | Title | Tips | Needs a decision | Source blocked | Claims recorded | Report | Built page |' + NL;
out += '| --- | --- | --- | --- | --- | --- | --- | --- |' + NL;
for (const c of tierA) {
  const data = chapters.get(c.n);
  const a = analyse(c.n);
  const dec = a.flagged.length + a.notes.length;
  out += '| ' + pad(c.n) + ' | ' + esc(data && data.title) + ' | ' + c.meta.tips + ' | ' + (dec || 'none') + ' | ' + (a.blocked.length || 'none') + ' | ' + (a.accepted.length + a.blocked.length + a.flagged.length) + ' | [chapter-' + pad(c.n) + '.md](' + reportPath(c.n) + ') | ' + tick('/chapters/' + c.n + '-' + (data ? data.slug : '') + '/') + ' |' + NL;
}
out += NL + '*Needs a decision* counts the rows the verifier marked partial, unverified or annotated, plus editorial notes carried in the report. *Source blocked* counts claims that read clean but whose primary source returned 403 or would not load: confirm the hedge reads correctly, do not re-fetch.' + NL;

out += NL + '## Per-chapter worksheets' + NL;
for (const c of tierA) {
  const data = chapters.get(c.n);
  const a = analyse(c.n);
  out += NL + '### Chapter ' + pad(c.n) + ' — ' + (data ? data.title : '') + NL + NL;
  out += 'Tips ' + c.meta.tips + ' · verified ' + (c.meta.verifiedAt || '—') + ' · ' + (c.meta.verifier || '—') + ' · claims recorded: ' + a.accepted.length + ' clean, ' + a.flagged.length + ' to decide, ' + a.blocked.length + ' source-blocked' + NL + NL;
  out += 'Read ' + tick('/chapters/' + c.n + '-' + (data ? data.slug : '') + '/') + ' against ' + tick(sourcePath(c.n)) + '.' + NL;
  if (a.rows === 0) {
    out += NL + 'This report carries no claim table (a targeted pass or a narrative verification), so its notes are the whole record. Read ' + tick(reportPath(c.n)) + ' before signing off.' + NL;
  }
  if (a.flagged.length) {
    out += NL + '**Needs a decision**' + NL + NL + '| Tip | Claim | Recorded | Why it needs you |' + NL + '| --- | --- | --- | --- |' + NL;
    for (const row of a.flagged) out += '| ' + esc(row.tip) + ' | ' + clip(row.claim, 18) + ' | ' + clip(row.pass, 4) + ' | ' + clip(row.note, 30) + ' |' + NL;
  }
  if (a.notes.length) {
    out += NL + '**Editorial notes carried in the report**' + NL + NL;
    for (const note of a.notes) out += '- ' + noteText(note) + NL;
  }
  if (a.blocked.length) {
    out += NL + '**Source blocked at verification** — read the text, confirm the hedge, do not re-fetch: ' + tipList(a.blocked) + NL;
  }
  if (a.rows > 0 && !a.flagged.length && !a.notes.length && !a.blocked.length) {
    out += NL + 'No flag survived verification for this chapter: every claim row was recorded clean and no editorial note was carried. Read it as a reader and sign off.' + NL;
  }
  out += NL + '- [ ] Read in full against the source' + NL + '- [ ] Numbers, units, grades and citations unchanged from source' + NL + '- [ ] India figures named and sourced where used' + NL + '- [ ] Every flag above resolved in the text or accepted with a reason' + NL;
}

out += NL + '## Sign-off' + NL + NL + '| Ch | Reviewer | Date | Verdict | Note |' + NL + '| --- | --- | --- | --- | --- |' + NL;
for (const c of tierA) out += '| ' + pad(c.n) + ' |  |  | pending / signed off / changes required |  |' + NL;
out += NL + 'A verdict of *changes required* sends the chapter back to draft (' + tick('npx tsx scripts/india-status.ts <chapter> draft') + ') with the change written as an ' + tick('--issue=') + ' entry, so it reappears in the manifest as an open issue instead of a memory.' + NL;

fs.writeFileSync('reports/human-review-tier-a.md', out);

const ch4 = chapters.get(4);
const a4 = analyse(4);
let c4 = '';
c4 += '# Line-by-line review worksheet — Chapter 04, Do Not Waste Time' + NL + NL;
c4 += 'Prepared ' + DATE + '. Regenerate with ' + tick('node reports/tools/make-review-packets.mjs') + '.' + NL + NL;
c4 += 'This packet serves acceptance Check 4 in [AGENTS.md](AGENTS.md) section 2: "Chapter 4 reviewed line-by-line." It is a reading worksheet, not a re-verification — the claim checks are already in [chapter-04.md](reports/verification/chapter-04.md). Chapter 4 is Tier B, so it does not gate the India ' + tick('signed-off') + ' tally; it gates Check 4.' + NL + NL;
c4 += 'Read the source chapter ' + tick('source/book/04-*.md') + ' first, then the built page ' + tick('/chapters/4-do-not-waste-time/') + ', tip by tip. A section that does not survive the comparison gets the source line quoted and the tip rejected — "close enough" is not a verdict.' + NL + NL;
c4 += 'The review result — three blocking items and seven decisions — is in [chapter-04-review-findings.md](reports/chapter-04-review-findings.md). That file is where findings are argued; this worksheet is where the reading is logged, and it is regenerated on demand.' + NL + NL;
c4 += '## Chapter-level checks' + NL + NL;
c4 += '- [ ] Every tip in the source appears exactly once, in source order' + NL;
c4 += '- [ ] Intro keeps the framing the source sets and adds no promise' + NL;
c4 += '- [ ] Evidence grades match the source, not a re-grade' + NL;
c4 += '- [ ] Disputed and still-being-verified marks survive where the source has them' + NL;
c4 += '- [ ] Cost lines keep the source currency where the source uses it; any INR note reads as a reference, not a conversion of record' + NL;
c4 += '- [ ] No medical, legal or safety advice added; caveats retained' + NL;
c4 += NL + '## Tip-by-tip' + NL;
for (const tip of ch4.tips) {
  c4 += NL + '### ' + tip.id + ' — ' + tip.title + NL + NL;
  c4 += 'Evidence ' + tip.evidenceGrade + ' · value ' + tip.valueTier + (tip.disputed ? ' · disputed' : '') + (tip.stillVerifying ? ' · still being verified' : '') + NL + NL;
  c4 += '| Section | Opens with | Check |' + NL + '| --- | --- | --- |' + NL;
  const sections = [['Cost', tip.cost], ['In plain words', tip.inPlainWords], ['Benefit', tip.benefit], ['Caveats', tip.caveats], ['Sources', tip.sources]];
  for (const pair of sections) c4 += '| ' + pair[0] + ' | ' + clip(pair[1] || '(empty)', 14) + ' | [ ] matches source |' + NL;
  c4 += NL;
}
if (a4.flagged.length || a4.notes.length) {
  c4 += '## Carry-forward flags from the verification report' + NL + NL;
  if (a4.flagged.length) {
    c4 += '| Tip | Claim | Recorded | Why it still needs a decision |' + NL + '| --- | --- | --- | --- |' + NL;
    for (const row of a4.flagged) c4 += '| ' + esc(row.tip) + ' | ' + clip(row.claim, 20) + ' | ' + clip(row.pass, 4) + ' | ' + clip(row.note, 34) + ' |' + NL;
    c4 += NL;
  }
  for (const note of a4.notes) c4 += '- ' + noteText(note) + NL;
  c4 += NL;
}
c4 += '## Sign-off' + NL + NL + 'Reviewer:' + NL + 'Date:' + NL + 'Tips rejected:' + NL + 'Verdict (PASS / changes required):' + NL + NL;
c4 += 'Record the result in [qa.md](reports/qa.md) under Check 4 and keep the signed copy beside this file. Check 4 also needs the three-random-tips-per-chapter sample already logged in [spotcheck.md](reports/spotcheck.md).' + NL;

fs.writeFileSync('reports/chapter-04-line-review.md', c4);

console.log('tierA', tierA.length, 'tips', totalTipsA, 'signed', signedOff);
for (const c of tierA) {
  const a = analyse(c.n);
  console.log(pad(c.n), 'clean', a.accepted.length, 'decide', a.flagged.length, 'blocked', a.blocked.length, 'notes', a.notes.length);
}
console.log('ch4 decide', a4.flagged.length, 'notes', a4.notes.length, 'blocked', a4.blocked.length);
