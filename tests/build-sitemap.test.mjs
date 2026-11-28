import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { buildSitemap, robotsText } from '../scripts/build-sitemap.mjs';

function makeDist(files) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'sitemap-'));
  for (const relative of files) {
    const full = path.join(dir, relative);
    fs.mkdirSync(path.dirname(full), { recursive: true });
    fs.writeFileSync(full, '<html></html>');
  }
  return dir;
}

test('sitemap lists directory routes with the configured base', () => {
  const dist = makeDist([
    'index.html',
    'chapters/index.html',
    'chapters/01-do-not-die-early/index.html',
    'about.html'
  ]);
  const { xml, urls } = buildSitemap({
    dist,
    origin: 'https://example.org',
    basePath: '/LifeAsUsual/'
  });
  assert.deepEqual(urls, [
    'https://example.org/LifeAsUsual/',
    'https://example.org/LifeAsUsual/about.html',
    'https://example.org/LifeAsUsual/chapters/',
    'https://example.org/LifeAsUsual/chapters/01-do-not-die-early/'
  ]);
  assert.match(xml, /<loc>https:\/\/example\.org\/LifeAsUsual\/chapters\/01-do-not-die-early\/<\/loc>/);
  fs.rmSync(dist, { recursive: true, force: true });
});

test('sitemap and robots are excluded from their own listing', () => {
  const dist = makeDist(['index.html', 'sitemap.xml', 'robots.txt']);
  const { urls } = buildSitemap({ dist, origin: 'https://example.org', basePath: '/' });
  assert.deepEqual(urls, ['https://example.org/']);
  fs.rmSync(dist, { recursive: true, force: true });
});

test('robots.txt points at the absolute sitemap url', () => {
  const text = robotsText('https://example.org/LifeAsUsual/sitemap.xml');
  assert.match(text, /^User-agent: \*\nAllow: \//);
  assert.match(text, /Sitemap: https:\/\/example\.org\/LifeAsUsual\/sitemap\.xml/);
});
