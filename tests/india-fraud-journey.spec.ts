import { test, expect } from '@playwright/test';

test.describe('India-first financial cyber-fraud reporting guide', () => {
  test('has visible draft status, official reporting routes and realistic limitations', async ({ page }) => {
    await page.goto('/help/report-financial-cyber-fraud/');
    await expect(page.getByRole('heading', { name: /Money lost to a UPI or online scam/ })).toBeVisible();
    await expect(page.getByText('Editorial draft, not professional advice.')).toBeVisible();
    await expect(page.locator('a[href="tel:1930"]')).toBeVisible();
    await expect(page.locator('.urgent a[href="https://cybercrime.gov.in/"]')).toHaveCount(1);
    await expect(page.locator('.sources a[href="https://cybercrime.gov.in/"]')).toHaveCount(1);
    await expect(page.getByText('Do not assume an automatic refund.')).toBeVisible();
    await expect(page.getByText(/customer-liability rules for/)).toBeVisible();

    // Official RBI notification page, not the unextractable PDF or an unofficial mirror.
    await expect(page.locator('.clarification a[href*="NotificationUser.aspx?Id=11040"]')).toHaveCount(1);
    await expect(page.locator('.sources a[href*="NotificationUser.aspx?Id=11040"]')).toHaveCount(1);
    await expect(page.locator('a[href*="NOTI1506072017.PDF"]')).toHaveCount(0);

    // No literal markdown emphasis leaks into the rendered page.
    await expect(page.locator('article.journey')).not.toContainText('*unauthorised electronic banking transactions*');

    // The directions effective 1 January 2027 are disclosed where liability is explained.
    await expect(page.getByText(/From 1 January 2027, amended RBI directions/)).toBeVisible();
    await expect(page.getByText(/granting approval under coercion or duress/)).toBeVisible();

    const links = await page.locator('.sources a').count();
    expect(links).toBe(6);
    await expect(page.getByText(/Claim-level source mapping is recorded/)).toBeVisible();
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
