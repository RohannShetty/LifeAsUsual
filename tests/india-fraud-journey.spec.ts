import { test, expect } from '@playwright/test';

test.describe('India-first financial cyber-fraud reporting guide', () => {
  test('has visible draft status, official reporting routes and realistic limitations', async ({ page }) => {
    await page.goto('/help/report-financial-cyber-fraud/');
    await expect(page.getByRole('heading', { name: /Money lost to a UPI or online scam/ })).toBeVisible();
    await expect(page.getByText('Editorial draft, not professional advice.')).toBeVisible();
    await expect(page.locator('a[href="tel:1930"]')).toBeVisible();
    await expect(page.locator('a[href="https://cybercrime.gov.in/"]')).toHaveCount(1);
    await expect(page.locator('a[href*="rbi.org.in/commonman/Upload/English/Notification/PDFs/NOTI1506072017.PDF"]')).toHaveCount(2);
    await expect(page.getByText('Do not assume an automatic refund.')).toBeVisible();
    const links = await page.locator('.sources a').count();
    expect(links).toBe(3);
    await expect(page.getByText(/their exact claim mappings have not yet been signed off/)).toBeVisible();
    await expect(page.locator('a[href*="Crime_AuthoLogin.aspx"]')).toHaveCount(0);
  });

  test('a lightweight, private checklist is usable without saving account details', async ({ page }) => {
    await page.goto('/help/report-financial-cyber-fraud/');
    const keysBefore = await page.evaluate(() => Object.keys(localStorage).sort());
    const items = page.locator('.steps input[type="checkbox"]');
    await expect(items).toHaveCount(5);
    await items.first().check();
    await expect(items.first()).toBeChecked();
    await items.last().check();
    await expect(items.last()).toBeChecked();
    expect(await page.evaluate(() => Object.keys(localStorage).sort())).toEqual(keysBefore);
    expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBe(0);
  });

  test('the existing guides index links to the new India-first guide', async ({ page }) => {
    await page.goto('/guides/');
    const link = page.getByRole('link', { name: /Open cyber-fraud reporting checklist/ });
    await expect(link).toBeVisible();
    await link.click();
    await expect(page).toHaveURL(/\/help\/report-financial-cyber-fraud\/$/);
  });
});
