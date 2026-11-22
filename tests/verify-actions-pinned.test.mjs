import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { inspectWorkflowActions } from '../scripts/verify-actions-pinned.mjs';

test('accepts an immutable SHA with a release annotation', () => {
  const result = inspectWorkflowActions('- uses: actions/checkout@11d5960a326750d5838078e36cf38b85af677262 # v4.4.0');
  assert.deepEqual(result.failures, []);
  assert.equal(result.pins.length, 1);
  assert.equal(result.pins[0].version, 'v4.4.0');
});

test('rejects a movable major tag', () => {
  const result = inspectWorkflowActions('- uses: actions/checkout@v4 # v4.4.0');
  assert.equal(result.pins.length, 0);
  assert.match(result.failures[0], /full 40-character commit SHA/);
});

test('rejects a malformed or abbreviated SHA', () => {
  const result = inspectWorkflowActions('- uses: actions/checkout@11d5960 # v4.4.0');
  assert.equal(result.pins.length, 0);
  assert.match(result.failures[0], /full 40-character commit SHA/);
});

test('requires a version annotation for auditability', () => {
  const result = inspectWorkflowActions('- uses: actions/checkout@11d5960a326750d5838078e36cf38b85af677262');
  assert.equal(result.pins.length, 0);
  assert.match(result.failures[0], /version comment/);
});

test('ignores repository-local composite actions', () => {
  const result = inspectWorkflowActions('- uses: ./.github/actions/local-check');
  assert.deepEqual(result.failures, []);
  assert.deepEqual(result.pins, []);
});

test('Pages deployment is restricted to the master branch', () => {
  const workflow = readFileSync('.github/workflows/deploy.yml', 'utf8');
  assert.match(workflow, /^  deploy:\n    if: github\.ref == 'refs\/heads\/master'$/m);
});
