import { test, expect } from '@playwright/test';

test.describe('offline freshness notice', () => {
  test('is hidden online and explains stale risk when offline', async ({ page, context }) => {
    await page.goto('/');
    const notice = page.locator('[data-offline-notice]');
    await expect(notice).toBeHidden();

    await context.setOffline(true);
    await page.evaluate(() => window.dispatchEvent(new Event('offline')));
    await expect(notice).toBeVisible();
    await expect(notice).toContainText('You are offline');
    await expect(notice).toContainText('Reconnect');

    await context.setOffline(false);
    await page.evaluate(() => window.dispatchEvent(new Event('online')));
    await expect(notice).toBeHidden();
  });

  test('appears on a cached chapter page while the network is gone', async ({ page, context }) => {
    await page.goto('/chapters/07-living-with-no-money/');
    await context.setOffline(true);
    await page.evaluate(() => window.dispatchEvent(new Event('offline')));
    const notice = page.locator('[data-offline-notice]');
    await expect(notice).toBeVisible();
    await expect(notice).toContainText('may');
  });
});