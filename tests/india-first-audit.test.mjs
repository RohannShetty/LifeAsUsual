import test from 'node:test';
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
