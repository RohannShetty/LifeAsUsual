#!/usr/bin/env node
/**
 * Reject mutable GitHub Actions references in repository workflows.
 *
 * Commit pinning prevents a tag owner from silently changing the code fetched
 * by a workflow. It does not establish that a pinned action is trustworthy;
 * action upgrades still require review of the upstream release and SHA.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const workflowDirectory = '.github/workflows';
const actionLine = /^\s*-\s*uses:\s*([^\s#]+)(?:\s+#\s*(.*))?\s*$/;
const immutableSha = /^[a-f0-9]{40}$/i;
const releaseLabel = /\bv\d+(?:\.\d+){0,2}\b/i;

export function inspectWorkflowActions(content, path = '<workflow>') {
  const failures = [];
  const pins = [];
  const lines = content.split(/\r?\n/);

  for (let index = 0; index < lines.length; index += 1) {
    const match = lines[index].match(actionLine);
    if (!match) continue;

    const reference = match[1];
    if (reference.startsWith('./')) continue;

    const separator = reference.lastIndexOf('@');
    if (separator <= 0) {
      failures.push(`${path}:${index + 1}: action reference has no explicit @ref: ${reference}`);
      continue;
    }

    const action = reference.slice(0, separator);
    const ref = reference.slice(separator + 1);
    if (!immutableSha.test(ref)) {
      failures.push(`${path}:${index + 1}: ${action} must use a full 40-character commit SHA, not "${ref}"`);
      continue;
    }

    const comment = match[2] ?? '';
    if (!releaseLabel.test(comment)) {
      failures.push(`${path}:${index + 1}: pinned action must retain a human-readable version comment (for example # v4.2.0)`);
      continue;
    }

    pins.push({ action, sha: ref.toLowerCase(), version: comment.match(releaseLabel)[0] });
  }

  return { failures, pins };
}

const workflowFiles = readdirSync(workflowDirectory)
  .filter((name) => /\.ya?ml$/i.test(name))
  .sort();

if (workflowFiles.length === 0) {
  console.error(`No workflow YAML files found in ${workflowDirectory}`);
  process.exit(1);
}

const allPins = [];
const allFailures = [];
for (const name of workflowFiles) {
  const path = join(workflowDirectory, name);
  const result = inspectWorkflowActions(readFileSync(path, 'utf8'), path);
  allPins.push(...result.pins);
  allFailures.push(...result.failures);
}

if (allFailures.length > 0) {
  console.error('GitHub Actions pin verification failed:');
  for (const failure of allFailures) console.error(`  - ${failure}`);
  process.exit(1);
}

console.log(`GitHub Actions pin verification passed: ${allPins.length} immutable references across ${workflowFiles.length} workflows.`);
