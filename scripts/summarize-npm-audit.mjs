#!/usr/bin/env node
/**
 * Print a deterministic report from npm audit JSON (not an autofix).
 * Usage: node scripts/summarize-npm-audit.mjs audit-full.json audit-prod.json
 * No request is made to the network by this script.
 */
import fs from 'node:fs';

function readAudit(path) {
  let parsed;
  try {
    parsed = JSON.parse(fs.readFileSync(path, 'utf8'));
  } catch (error) {
    throw new Error('Invalid or missing npm audit JSON at ' + path + ': ' + error.message);
  }
  if (!parsed || typeof parsed !== 'object' || !parsed.vulnerabilities) {
    throw new Error('Audit data is not a npm audit vulnerabilities report: ' + path);
  }
  const items = Object.entries(parsed.vulnerabilities)
    .map(([name, item]) => ({
      name,
      severity: item.severity ?? 'unknown',
      direct: item.isDirect === true,
      range: item.range ?? 'unknown',
      via: Array.isArray(item.via)
        ? item.via.map(value => typeof value === 'string' ? value : [value.source, value.title, value.url].filter(Boolean).join(' — '))
        : [],
      fix: item.fixAvailable === false
        ? 'No known fix'
        : item.fixAvailable === true
          ? 'Potential compatible fix'
          : typeof item.fixAvailable === 'object'
            ? 'Package ' + item.fixAvailable.name + '@' + item.fixAvailable.version + (item.fixAvailable.isSemVerMajor ? ' (major)' : '')
            : 'Unknown'
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const counts = parsed.metadata?.vulnerabilities ?? {};
  return { items, counts };
}

const [fullPath, productionPath] = process.argv.slice(2);
if (!fullPath || !productionPath) {
  console.error('Usage: node scripts/summarize-npm-audit.mjs full.json prod.json');
  process.exit(2);
}
const full = readAudit(fullPath);
const production = readAudit(productionPath);

function section(name, report) {
  const counts = report.counts;
  const rows = [
    '## ' + name,
    '',
    '**Counts:** ' + ['critical', 'high', 'moderate', 'low', 'info'].map(level => level + ': ' + (counts[level] ?? 0)).join(', '),
    '',
    '| Package | Severity | Direct dependency | Affected versions | Suggested fix |',
    '| --- | --- | --- | --- | --- |'
  ];
  for (const item of report.items) {
    const clean = value => String(value).replaceAll('|', '\\|').replaceAll('\n', ' ').replaceAll('\r', ' ');
    rows.push('| ' + [item.name, item.severity, item.direct ? 'Yes' : 'Transitive', item.range, item.fix].map(clean).join(' | ') + ' |');
  }
  if (report.items.length === 0) rows.push('| None | — | — | — | — |');
  rows.push('', '<details><summary>Advisories and dependency paths</summary>', '');
  for (const item of report.items) {
    rows.push('- **' + item.name + ':** ' + (item.via.join('; ') || 'No advisory details provided'));
  }
  rows.push('', '</details>', '');
  return rows.join('\n');
}

const markdown = [
  '# Dependency audit evidence',
  '',
  'This report is diagnostic. No packages were upgraded automatically; do not confuse vulnerabilities reported by npm with proven production exploitability.',
  '',
  section('Full dependency tree', full),
  section('Production-only dependencies', production)
].join('\n');

process.stdout.write(markdown + '\n');
if (process.env.GITHUB_STEP_SUMMARY) {
  fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, markdown + '\n');
}
