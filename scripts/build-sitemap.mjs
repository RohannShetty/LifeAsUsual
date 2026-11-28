#!/usr/bin/env node
/**
 * Generate dist/sitemap.xml and dist/robots.txt from the built site.
 *
 * The site is served on GitHub Pages under a base path (e.g. /LifeAsUsual/),
 * so sitemap URLs must be absolute and base-aware. We derive the origin and
 * base from the same environment variables astro.config.mjs uses (SITE, BASE),
 * so a locally built site and the Pages deployment generate correct URLs for
 * their own audience.
 *
 * Output files are emitted inside dist/ after the Astro build + Pagefind pass.
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = path.resolve('.');
const distDir = path.join(root, 'dist');
const site = (process.env.SITE || 'https://howtolivebetter.github.io').replace(/\/+$/, '');
const rawBase = process.env.BASE || '/';
const base = rawBase.startsWith('/') ? rawBase : '/' + rawBase;
const basePath = base.endsWith('/') ? base : base + '/';

const IGNORED_FILES = new Set(['sitemap.xml', 'robots.txt', '404.html']);

function collectHtmlFiles(directory) {
  if (!fs.existsSync(directory)) return [];
  const results = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectHtmlFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

function routeFromHtmlFile(htmlFile, rootDir) {
  const relative = path.relative(rootDir, htmlFile).replaceAll(path.sep, '/');
  let route;
  if (relative === 'index.html') route = '';
  else if (relative.endsWith('/index.html')) route = relative.slice(0, -'/index.html'.length) + '/';
  else route = relative.slice(0, -'.html'.length) + '.html';
  return route;
}

export function buildSitemap({ dist = distDir, origin = site, basePath: bp = basePath } = {}) {
  const html = collectHtmlFiles(dist).filter((file) => {
    const name = path.basename(file);
    return !IGNORED_FILES.has(name);
  });
  const urls = html
    .map((file) => origin + bp + routeFromHtmlFile(file, dist))
    .sort((a, b) => a.localeCompare(b));
  const today = new Date().toISOString().slice(0, 10);
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((url) => [
      '  <url>',
      '    <loc>' + url + '</loc>',
      '    <lastmod>' + today + '</lastmod>',
      '  </url>'
    ].join('\n')),
    '</urlset>',
    ''
  ].join('\n');
  return { xml, urls };
}

export function robotsText(sitemapUrl) {
  return [
    'User-agent: *',
    'Allow: /',
    '',
    'Sitemap: ' + sitemapUrl,
    ''
  ].join('\n');
}

function writeOutputs() {
  if (!fs.existsSync(distDir)) {
    console.error('No dist/ directory found; run the Astro build first.');
    process.exitCode = 1;
    return;
  }
  const sitemapUrl = site + basePath + 'sitemap.xml';
  const { xml } = buildSitemap();
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml, 'utf8');
  fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsText(sitemapUrl), 'utf8');
  const count = (xml.match(/<loc>/g) || []).length;
  console.log('Sitemap generated with ' + count + ' URL(s) at ' + site + basePath + 'sitemap.xml');
}

// Allow unit tests to import the helpers without writing files.
const invokedPath = process.argv[1] ? pathToFileURL(path.resolve(process.argv[1])).href : '';
if (invokedPath && import.meta.url === invokedPath) {
  writeOutputs();
}