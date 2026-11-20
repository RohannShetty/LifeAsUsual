import test from 'node:test';
import assert from 'node:assert/strict';
import { reviewIntegrityErrors, CHAPTER_NOTICE_MARKERS, TIPCARD_MARKERS } from '../scripts/verify-review-integrity.mjs';

const page = CHAPTER_NOTICE_MARKERS.join(' ');
const card = TIPCARD_MARKERS.join(' ');
const chapter = { chapter: 5, slug: 'do-not-waste-money', rewriteStatus: 'checked', tips: [{ id: '5-1', reviewStatus: 'source-checked' }] };
const manifest = { chapters: { '5': { tier: 'A', humanReview: 'pending', reviewMethod: 'ai-delegated-source-check' } } };
const ownerRecord = { route: '/help/report-financial-cyber-fraud/', lesson: { reviewStatus: 'human-reviewed', revision: 'v1', verification: [{ method: 'owner-self-review', verdict: 'pass', lessonRevision: 'v1' }], humanApproval: { independent: false, limitation: 'Site owner, not a lawyer.' } } };
function input(overrides = {}) {
  return { chapters: [structuredClone(chapter)], manifest: structuredClone(manifest), records: [structuredClone(ownerRecord)], chapterPage: page, tipCard: card, ...overrides };
}

test('accepts a checked chapter with automated tip labels and an owner self-review record', () => {
  assert.deepEqual(reviewIntegrityErrors(input()), []);
});

test('rejects the retired label that claimed independence', () => {
  const errors = reviewIntegrityErrors(input({ chapters: [{ ...chapter, tips: [{ id: '5-1', reviewStatus: 'independently-checked' }] }] }));
  assert.ok(errors.some((e) => e.includes('retired label independently-checked')));
});

test('rejects a checked chapter whose manifest has no review method', () => {
  const errors = reviewIntegrityErrors(input({ manifest: { chapters: { '5': { tier: 'A', humanReview: 'pending' } } } }));
  assert.ok(errors.some((e) => e.includes('reviewMethod as missing')));
});

test('rejects a chapter that renders as human-reviewed without an approved record', () => {
  const errors = reviewIntegrityErrors(input({ chapters: [{ ...chapter, rewriteStatus: 'reviewed' }], records: [] }));
  assert.ok(errors.some((e) => e.includes('renders as human-reviewed but has no approved publication record')));
});

test('rejects a tip that shows Human-reviewed without an approved record', () => {
  const errors = reviewIntegrityErrors(input({ chapters: [{ ...chapter, tips: [{ id: '5-1', reviewStatus: 'reviewed' }] }], records: [] }));
  assert.ok(errors.some((e) => e.includes('shows Human-reviewed with no approved publication record')));
});

test('rejects a manifest signed-off entry without an approved record', () => {
  const errors = reviewIntegrityErrors(input({ manifest: { chapters: { '5': { humanReview: 'signed-off' } } }, records: [] }));
  assert.ok(errors.some((e) => e.includes('manifest says signed-off')));
});

test('rejects a template that lost the draft notice', () => {
  const errors = reviewIntegrityErrors(input({ chapterPage: 'AI-reviewed draft for India.' }));
  assert.ok(errors.some((e) => e.startsWith('Chapter template lost the draft notice marker')));
});

test('rejects qualified-human without an independent reviewer', () => {
  const record = structuredClone(ownerRecord);
  record.lesson.verification[0].method = 'qualified-human';
  const errors = reviewIntegrityErrors(input({ records: [record] }));
  assert.ok(errors.some((e) => e.includes('claims qualified-human without an independent reviewer')));
});

test('rejects owner-self-review without a stated limitation', () => {
  const record = structuredClone(ownerRecord);
  delete record.lesson.humanApproval.limitation;
  const errors = reviewIntegrityErrors(input({ records: [record] }));
  assert.ok(errors.some((e) => e.includes('must mark owner-self-review as not independent and state its limitation')));
});
