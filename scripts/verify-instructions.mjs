#!/usr/bin/env node
/**
 * Instruction drift guard (PLAN.md P0.6).
 *
 * The India-first contract lives in AGENTS.md, PLAN.md, BRIEF.md and
 * .cursor/rules/project.mdc. A later edit can quietly restore the old
 * English-only translation product, or delete the lineage that tells a
 * reader which document wins. These are cheap deterministic assertions:
 * the documents must exist, must name the India-first authority, and the
 * two that carry inherited-edition rules must keep their scope statement.
 *
 * This checks structure, not editorial truth. It cannot tell whether a
 * claim is correct and it is not a substitute for review.
 */
import { readFileSync } from 'node:fs';

const failures = [];

function read(path) {
  try {
    return readFileSync(path, 'utf8');
  } catch {
    failures.push(`Missing required instruction file: ${path}`);
    return '';
  }
}

function requireMatch(path, text, pattern, description) {
  if (!pattern.test(text)) failures.push(`${path}: ${description}`);
}

const agents = read('AGENTS.md');
const plan = read('PLAN.md');
const brief = read('BRIEF.md');
const cursorRules = read('.cursor/rules/project.mdc');
const roadmap = read('docs/india-first-roadmap.md');

requireMatch('AGENTS.md', agents, /india-first-roadmap\.md/, 'must name docs/india-first-roadmap.md as the approved direction');
requireMatch('AGENTS.md', agents, /legacy corpus/i, 'must say the inherited edition is a legacy corpus');
requireMatch('.cursor/rules/project.mdc', cursorRules, /india-first-roadmap\.md/, 'must name docs/india-first-roadmap.md');
requireMatch('docs/india-first-roadmap.md', roadmap, /India-first/i, 'must describe the India-first direction');
requireMatch('PLAN.md', plan, /### P0\.3/, 'must keep the P0.3 checklist heading');
requireMatch('PLAN.md', plan, /### P9/, 'must keep the P9 phase');
requireMatch('BRIEF.md', brief, /\*\*Status and scope[^*]*\*\*/, 'must keep its status-and-scope banner');
requireMatch('BRIEF.md', brief, /inherited English edition/i, 'must scope itself to the inherited English edition');
requireMatch('BRIEF.md', brief, /\bPLAN\.md\b/, 'must point at PLAN.md as the governing plan');
requireMatch('BRIEF.md', brief, /presented as a translation/i, 'must limit fidelity rules to content presented as a translation');

if (failures.length > 0) {
  console.error('Instruction drift guard failed:');
  for (const failure of failures) console.error('  - ' + failure);
  process.exit(1);
}
console.log('Instruction drift guard passed: 5 documents, scope statements intact.');
