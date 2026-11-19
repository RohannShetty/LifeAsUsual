import { test, expect } from '@playwright/test';

test.describe('bead navigation', () => {
  test('keyboard activation follows the bead and back returns to the map', async ({ page }) => {
    await page.goto('/progress/');
    const firstBead = page.locator('.map-bead').first();
    await firstBead.scrollIntoViewIfNeeded();
    await firstBead.focus();
    const href = await firstBead.getAttribute('href');
    expect(href).toContain('/chapters/');
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(new RegExp(href!.split('#')[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '#'));
    await page.goBack();
    await expect(page).toHaveURL(/\/progress\/$/);
    await expect(page.locator('.beads-container')).toBeVisible();
  });

  test('clicking a bead opens its tip anchor', async ({ page }) => {
    await page.goto('/progress/');
    const bead = page.locator('.map-bead').nth(2);
    await bead.scrollIntoViewIfNeeded();
    const href = await bead.getAttribute('href');
    await bead.click();
    await expect(page).toHaveURL(new RegExp(href!.split('#')[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '#'));
    await expect(page.locator('.beads-container')).toHaveCount(0);
  });
});