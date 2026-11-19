import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { verifyAnchors } from '../scripts/verify-anchors.mjs';

const fixture = (pages) => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'anchors-'));
  for (const [name, html] of Object.entries(pages)) {
    const file = path.join(root, name);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, '<!doctype html>' + html);
  }
  return root;
};

test('accepts a fragment that resolves on the same page', () => {
  const root = fixture({ 'index.html': '<a href="#3-1">x</a><h2 id="3-1">t</h2>' });
  const result = verifyAnchors(root);
  assert.equal(result.ok, true, result.problems.join(', '));
  assert.equal(result.checked, 1);
});

test('accepts a cross-page fragment that resolves', () => {
  const root = fixture({
    'index.html': '<a href="/chapters/01/#1-2">x</a>',
    'chapters/01/index.html': '<h2 id="1-2">t</h2>'
  });
  const result = verifyAnchors(root);
  assert.equal(result.ok, true, result.problems.join(', '));
});

test('fails when a fragment has no target id', () => {
  const root = fixture({ 'index.html': '<a href="#7-9">x</a><h2 id="7-1">t</h2>' });
  const result = verifyAnchors(root);
  assert.equal(result.ok, false);
  assert.match(result.problems.join('\n'), /has no target id/);
});

test('fails on a duplicated id', () => {
  const root = fixture({ 'index.html': '<h2 id="1-1">a</h2><h2 id="1-1">b</h2>' });
  const result = verifyAnchors(root);
  assert.equal(result.ok, false);
  assert.match(result.problems.join('\n'), /duplicate id #1-1/);
});
