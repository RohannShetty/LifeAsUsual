import test from 'node:test';
import assert from 'node:assert/strict';
import { editorialProgressSummary } from '../scripts/verify-inventory.ts';

test('reports proposals separately from unassessed and owner-approved decisions', () => {
  const summary = editorialProgressSummary(765, 716, 49);
  assert.match(summary, /No owner-approved editorial dispositions/);
  assert.match(summary, /49 proposed decisions remain unapproved/);
  assert.match(summary, /716 tips remain unassessed/);
  assert.doesNotMatch(summary, /Every disposition is still UNASSESSED/);
});

test('reports named approvals when actual owner-approved decisions exist', () => {
  const summary = editorialProgressSummary(765, 700, 50);
  assert.match(summary, /15 owner-approved editorial dispositions are recorded/);
  assert.match(summary, /50 proposed decisions remain unapproved/);
  assert.match(summary, /700 tips remain unassessed/);
});

test('rejects progress counts that exceed the inventory total', () => {
  assert.throws(() => editorialProgressSummary(765, 716, 50), /exceed the inventory total/);
});
