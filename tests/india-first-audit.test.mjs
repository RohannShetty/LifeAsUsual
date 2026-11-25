import test from 'node:test';
import fs from 'node:fs';
import assert from 'node:assert/strict';
import { makeInventory, asCsv, asSummary, inventoryFromDirectory } from '../scripts/india-first-audit.mjs';

const original = [{chapter:7,slug:'living-with-no-money',title:'Legacy',tips:[{id:'7-1',tip:1,title:'Old'}]}];
const current = [{chapter:7,slug:'living-with-no-money',title:'India edition',tips:[{id:'7-1',tip:1,title:'India has no national unemployment insurance',tags:{scope:'Money',audience:[]},sources:'ESIC <https://esic.gov.in/>',reviewStatus:'source-checked',evidenceGrade:'A'}]}];
const manifest = {chapters:{7:{tier:'A',humanReview:'pending',verifiedAt:'2026-10-21'}}};

test('creates an unapproved row, retains the exact public anchor and separates AI from human review', () => {
  const report = makeInventory(original,current,manifest);
  const row = report.rows[0];
  assert.equal(report.legacyIdCount,1);
  assert.equal(report.unassessed,1);
  assert.equal(row.legacy_id,'7-1');
  assert.equal(row.current_route,'/chapters/07-living-with-no-money/#7-1');
  assert.equal(row.disposition,'UNASSESSED');
  assert.equal(row.reviewer_approval,'NONE');
  assert.equal(row.claim_source_verified_in_this_audit,'NO');
  assert.equal(row.evidence_grade_from_edition,'A');
  assert.equal(row.chapter_human_review_from_manifest,'pending');
  assert.match(row.potential_content_gaps,/absence-or-comparison-framing/);
  assert.match(row.source_urls,/esic.gov.in/);
  assert.match(asCsv(report),/legacy_id,legacy_chapter/);
  assert.match(asSummary(report),/Not an editorial approval/);
});

test('a retired tip is kept in the legacy inventory pending a safe redirect', () => {
  const report = makeInventory(original,[{...current[0],tips:[]}],manifest);
  assert.deepEqual(report.legacyIdsMissingFromEdition,['7-1']);
  assert.equal(report.rows[0].current_presence,'MISSING_NEEDS_MIGRATION');
  assert.equal(report.rows[0].migration_decision,'PRESERVE_LEGACY_ID_PENDING_REVIEW');
});

test('duplicate source IDs are rejected instead of silently overwriting progress keys', () => {
  assert.throws(() => makeInventory([{...original[0],tips:[original[0].tips[0],original[0].tips[0]]}],current,manifest),/duplicate legacy tip ID/);
});

test('duplicate published IDs and malformed identifiers fail', () => {
  assert.throws(() => makeInventory(original,[{...current[0],tips:[current[0].tips[0],current[0].tips[0]]}],manifest),/duplicate India tip ID/);
  assert.throws(() => makeInventory(original,[{...current[0],tips:[{...current[0].tips[0],id:'7-X'}]}],manifest),/India tip ID mismatch/);
});

test('the repository baseline covers every immutable source ID without approving it', () => {
  const report = inventoryFromDirectory();
  assert.equal(report.legacyIdCount,report.rows.length);
  assert.ok(report.legacyIdCount > 0);
  assert.equal(new Set(report.rows.map(r=>r.legacy_id)).size,report.rows.length);
  assert.ok(report.rows.every(r=>r.reviewer_approval==='NONE' && r.claim_source_verified_in_this_audit==='NO'),
    'no recorded disposition may carry a reviewer approval or claim source verification');
});

test('an explicit editorial disposition is separate from evidence or qualified review', () => {
  const report = makeInventory(original, current, manifest, {
    '7-1': { disposition: 'REWRITE', rationale: 'Make the Indian job-loss journey action-first', author: 'Editorial owner',
      india_first_journey: 'lost-employment', migration_decision: 'KEEP_LEGACY_ANCHOR' }
  });
  assert.equal(report.unassessed, 0);
  assert.equal(report.rows[0].disposition, 'REWRITE');
  assert.equal(report.rows[0].india_first_journey, 'lost-employment');
  assert.equal(report.rows[0].reviewer_approval, 'NONE');
  assert.equal(report.rows[0].claim_source_verified_in_this_audit, 'NO');
});

test('unsupported or unattributed editorial decisions fail closed', () => {
  assert.throws(() => makeInventory(original,current,manifest,{'99-1':{disposition:'KEEP',rationale:'x',author:'x'}}),/unknown legacy ID/);
  assert.throws(() => makeInventory(original,current,manifest,{'7-1':{disposition:'REWRITE'}}),/rationale and decision author/);
  assert.throws(() => makeInventory(original,current,manifest,{'7-1':{disposition:'PUBLISHED',rationale:'x',author:'x'}}),/Invalid disposition/);
});


test('EPF tip 5-3 narrows unsupported withdrawal promises and remains an unapproved high-risk proposal', () => {
  const chapter = JSON.parse(fs.readFileSync('data/en-in/chapters/05-do-not-waste-money.json', 'utf8'));
  const tip = chapter.tips.find((item) => item.id === '5-3');
  assert.ok(tip);
  assert.match(tip.title, /eligible needs/);
  assert.match(tip.inPlainWords, /housing, higher education, marriage and medical treatment/);
  assert.match(tip.caveats, /Do not assume rent or home-loan payments are covered/);
  assert.equal(tip.evidenceGrade, 'B');
  const row = inventoryFromDirectory().rows.find((item) => item.legacy_id === '5-3');
  assert.equal(row.current_route, '/chapters/05-do-not-waste-money/#5-3');
  assert.equal(row.disposition, 'PROPOSED_REWRITE');
  assert.equal(row.reviewer_approval, 'NONE');
  assert.equal(row.disposition_candidate, 'HOLD');
  assert.equal(row.evidence_grade_from_edition, 'B');
  assert.match(row.source_urls, /NoteId=160661/);
});


test('Chapter 7 EPF and EPS advice uses the 2026 schemes and separates full settlement from partial withdrawal', () => {
  const chapter = JSON.parse(fs.readFileSync('data/en-in/chapters/07-living-with-no-money.json', 'utf8'));
  const epf = chapter.tips.find((item) => item.id === '7-1');
  const jobLoss = chapter.tips.find((item) => item.id === '7-12');
  assert.ok(epf && jobLoss);

  assert.match(epf.sources, /G\.S\.R\. 525\(E\)/);
  assert.match(epf.sources, /paragraphs 46 and 49/);
  assert.match(epf.sources, /G\.S\.R\. 527\(E\)/);
  assert.match(epf.sources, /pdunass\.epfo\.gov\.in/);
  assert.match(epf.sources, /G\.S\.R\. 703\(E\)/);
  assert.match(epf.sources, /G\.S\.R\. 704\(E\)/);
  assert.match(epf.sources, /G\.S\.R\. 847\(E\)/);
  assert.match(epf.sources, /G\.S\.R\. 890\(E\)/);
  assert.doesNotMatch(epf.sources, /staffnews\.in|labour-codes-by-vivek\.github\.io\/sources/);
  assert.match(epf.sources, /paragraphs 12 and 13/);
  assert.doesNotMatch(epf.sources, /EPF Scheme, 1952/);
  assert.match(epf.benefit, /12 continuous months/);
  assert.match(epf.benefit, /100% of the Eligible Member Balance/);
  assert.match(epf.benefit, /25% Minimum Balance/);
  assert.match(epf.benefit, /36 months/);
  assert.match(epf.benefit, /Central Government's amending notification/);
  assert.ok(epf.sources.includes('section 15(1)(e)'));
  assert.match(epf.benefit, /[Pp]aragraph 49\(1\)\(vi\)/);

  assert.match(jobLoss.sources, /pdunass\.epfo\.gov\.in/);
  assert.match(jobLoss.inPlainWords, /purpose-specific/);
  assert.match(jobLoss.inPlainWords, /25% Minimum Balance/);
  assert.match(jobLoss.inPlainWords, /not a general two-month wait/);
  assert.ok(jobLoss.inPlainWords.includes('section 15(1)(e)'));
  assert.doesNotMatch(jobLoss.inPlainWords, /75% of the eligible balance to be withdrawn at any time without documentation/);

  const rows = inventoryFromDirectory().rows;
  for (const id of ['7-1', '7-12']) {
    const row = rows.find((item) => item.legacy_id === id);
    assert.ok(row);
    assert.equal(row.disposition, 'PROPOSED_REWRITE');
    assert.equal(row.reviewer_approval, 'NONE');
    assert.equal(row.disposition_candidate, 'HOLD');
    assert.equal(row.claim_source_verified_in_this_audit, 'NO');
  }
});
