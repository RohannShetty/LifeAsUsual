import { test, expect } from '@playwright/test';

test.describe('search-engine discovery signals', () => {
  test('home page exposes a canonical link and Open Graph metadata', async ({ page }) => {
    await page.goto('/');
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toBeTruthy();
    expect(canonical).toMatch(/^https?:\/\//);
    expect(await page.locator('meta[property="og:title"]').getAttribute('content')).toBeTruthy();
    expect(await page.locator('meta[property="og:description"]').getAttribute('content')).toBeTruthy();
    expect(await page.locator('meta[name="twitter:card"]').getAttribute('content')).toBe('summary');
  });

  test('sitemap.xml and robots.txt are published and well formed', async ({ request, baseURL }) => {
    const sitemap = await request.get('/sitemap.xml');
    expect(sitemap.status()).toBe(200);
    expect(sitemap.headers()['content-type']).toContain('xml');
    const xml = await sitemap.text();
    expect(xml).toContain('<urlset');
    expect(xml).toMatch(/<loc>https?:\/\/[^<]+\/<\/loc>/);

    const robots = await request.get('/robots.txt');
    expect(robots.status()).toBe(200);
    const text = await robots.text();
    expect(text).toMatch(/Sitemap: https?:\/\/[^\s]+\/sitemap\.xml/);
    expect(baseURL).toBeTruthy();
  });

  test('a built chapter page carries its own canonical URL', async ({ page, request }) => {
    await page.goto('/chapters/01-do-not-die-early/');
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toContain('/chapters/01-do-not-die-early/');
    const sitemap = await request.get('/sitemap.xml');
    const xml = await sitemap.text();
    expect(xml).toContain('/chapters/01-do-not-die-early/');
  });
});
