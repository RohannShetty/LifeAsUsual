import { test, expect } from '@playwright/test';

test.describe('installable offline shell', () => {
  test('manifest is linked and describes an installable app', async ({ page, request }) => {
    await page.goto('/');
    const href = await page.locator('link[rel="manifest"]').getAttribute('href');
    expect(href).toBeTruthy();
    const response = await request.get(href!);
    expect(response.status()).toBe(200);
    const manifest = await response.json();
    expect(manifest.name).toContain('Life as Usual');
    expect(manifest.display).toBe('standalone');
    expect(manifest.start_url).toBeTruthy();
    const sizes = manifest.icons.map((icon: { sizes: string }) => icon.sizes);
    expect(sizes).toContain('192x192');
    expect(sizes).toContain('512x512');
    for (const icon of manifest.icons) {
      const res = await request.get(new URL(icon.src, page.url()).href);
      expect(res.status()).toBe(200);
      expect(res.headers()['content-type']).toContain('image/png');
    }
  });

  test('service worker registers and keeps a visited chapter readable offline', async ({ page, context }) => {
    await page.goto('/chapters/01-do-not-die-early/');
    await page.waitForFunction(() => navigator.serviceWorker.getRegistration().then((r) => Boolean(r)), null, {
      timeout: 15000
    });
    await page.waitForFunction(() => Boolean(navigator.serviceWorker.controller), null, { timeout: 15000 });
    await context.setOffline(true);
    await page.goto('/chapters/01-do-not-die-early/');
    await expect(page.locator('h1')).toBeVisible();
    await context.setOffline(false);
  });

  test('offline fallback page is available and honest about limits', async ({ page }) => {
    await page.goto('/offline/');
    await expect(page.getByRole('heading', { name: 'You are offline' })).toBeVisible();
    await expect(page.getByText(/stored on this device only/)).toBeVisible();
  });
});
