#!/usr/bin/env node
/**
 * Internal link checker for the built site.
 *
 * Walks every dist/**.html file, collects local href/src targets and asserts
 * that each one resolves to a file in dist/ (a directory resolves only if it
 * contains index.html). External URLs, mailto:, tel: and pure fragments are
 * out of scope: this gate is about broken internal navigation.
 *
 * Exit code 0 when every internal link resolves, 1 otherwise, listing the
 * first 50 problems.
 */
import fs from 'node:fs';
import path from 'node:path';

const DIST = 'dist';
const SKIP_PREFIXES = ['http://', 'https://', '//', 'mailto:', 'tel:', 'data:', 'javascript:', '#'];

const files = [];
const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) files.push(full);
  }
};

if (!fs.existsSync(DIST)) {
  console.error('dist/ not found - run npm run build first.');
  process.exit(1);
}
walk(DIST);

const exists = (target) => {
  const clean = target.split('#')[0].split('?')[0];
  if (!clean) return true;
  const rel = decodeURIComponent(clean).replace(/^\/+/, '');
  const candidate = path.join(DIST, rel);
  if (fs.existsSync(candidate)) {
    const stat = fs.statSync(candidate);
    if (stat.isDirectory()) return fs.existsSync(path.join(candidate, 'index.html'));
    return true;
  }
  if (!path.extname(candidate) && fs.existsSync(candidate + '.html')) return true;
  if (!path.extname(candidate) && fs.existsSync(path.join(candidate, 'index.html'))) return true;
  return false;
};

const problems = [];
let checked = 0;
for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const page = '/' + path.relative(DIST, file).split(path.sep).join('/');
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const target = match[1].trim();
    if (!target || SKIP_PREFIXES.some((p) => target.startsWith(p))) continue;
    if (target.startsWith('/')) {
      checked += 1;
      if (!exists(target)) problems.push(page + ' -> ' + target);
    } else {
      checked += 1;
      const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(page), target));
      if (!exists(resolved)) problems.push(page + ' -> ' + target);
    }
  }
}

console.log('Link check (internal)');
console.log('pages: ' + files.length + ', internal links: ' + checked);
if (problems.length) {
  console.log('broken: ' + problems.length);
  for (const p of problems.slice(0, 50)) console.log('  ' + p);
  process.exit(1);
}
console.log('PASS: every internal link resolves.');
