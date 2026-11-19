#!/usr/bin/env node
/**
 * Fragment/anchor checker for the built site.
 *
 * The link checker ignores pure fragments, so nothing currently proves that the
 * 765 legacy tip anchors (#7-1) still exist in the built HTML. This gate walks
 * dist/**.html, collects every local href fragment, and asserts the target page
 * defines that id exactly once. It also fails on duplicate ids, because a
 * duplicated id makes a deep link land on the wrong element.
 *
 * Usage: node scripts/verify-anchors.mjs   (BASE=/LifeAsUsual/ for a pages build)
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const DIST = 'dist';
const BASE = (process.env.BASE || '/').replace(/\/+$/, '');

const walk = (dir, files = []) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name.endsWith('.html')) files.push(full);
  }
  return files;
};

const collectIds = (html) => {
  const seen = new Map();
  for (const match of html.matchAll(/\sid="([^"]+)"/g)) {
    const id = match[1];
    seen.set(id, (seen.get(id) || 0) + 1);
  }
  return seen;
};

const collectHrefs = (html) => {
  const hrefs = [];
  for (const match of html.matchAll(/\shref="([^"]+)"/g)) hrefs.push(match[1].replace(/&amp;/g, '&'));
  return hrefs;
};

const isExternal = (href) => /^(https?:)?\/\//.test(href) || /^(mailto:|tel:|data:|javascript:)/.test(href);

const stripBase = (target) => {
  if (!BASE) return target;
  if (target === BASE || target === BASE + '/') return '/';
  if (target.startsWith(BASE + '/')) return target.slice(BASE.length);
  return null;
};

const resolveTarget = (fromFile, href, dist) => {
  const [rawPath, fragment] = href.split('#');
  if (!fragment) return null;
  let file = fromFile;
  if (rawPath) {
    const withoutQuery = rawPath.split('?')[0];
    const clean = stripBase(withoutQuery);
    if (clean === null) return null;
    const absolute = clean.startsWith('/')
      ? path.join(dist, clean)
      : path.resolve(path.dirname(fromFile), clean);
    file = clean.endsWith('/') ? path.join(absolute, 'index.html') : absolute;
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  }
  return { file, fragment };
};

export function verifyAnchors(dist = DIST) {
  if (!fs.existsSync(dist)) return { ok: false, problems: [dist + '/ not found - run npm run build first.'], checked: 0, files: 0 };
  const files = walk(dist);
  const idCache = new Map();
  const idsFor = (file) => {
    if (!idCache.has(file)) idCache.set(file, collectIds(fs.readFileSync(file, 'utf8')));
    return idCache.get(file);
  };
  const problems = [];
  let checked = 0;
  for (const file of files) {
    const html = fs.readFileSync(file, 'utf8');
    for (const [id, count] of collectIds(html)) {
      if (count > 1) problems.push(path.relative(dist, file) + ': duplicate id #' + id + ' appears ' + count + ' times');
    }
    for (const href of collectHrefs(html)) {
      if (isExternal(href) || !href.includes('#')) continue;
      const target = resolveTarget(file, href, dist);
      if (!target) continue;
      checked += 1;
      if (!fs.existsSync(target.file)) {
        problems.push(path.relative(dist, file) + ': ' + href + ' points at a missing page');
        continue;
      }
      if (!idsFor(target.file).has(target.fragment)) {
        problems.push(path.relative(dist, file) + ': ' + href + ' has no target id in ' + path.relative(dist, target.file));
      }
    }
  }
  return { ok: problems.length === 0, problems, checked, files: files.length };
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const result = verifyAnchors();
  if (!result.ok) {
    console.error('Anchor check FAILED (' + result.problems.length + ' problem(s)):');
    for (const problem of result.problems.slice(0, 50)) console.error(' - ' + problem);
    process.exit(1);
  }
  console.log('Anchor check passed: ' + result.checked + ' fragment link(s) across ' + result.files + ' page(s).');
}
