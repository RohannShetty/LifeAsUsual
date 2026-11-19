import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';

test.describe('corrections intake', () => {
  test('page explains what to send and links the public issue form', async ({ page }) => {
    await page.goto('/corrections/');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('wrong');
    await expect(page.getByText(/The exact sentence that is wrong/)).toBeVisible();
    await expect(page.getByText(/Never send Aadhaar/)).toBeVisible();
    const href = await page.getByRole('link', { name: /Open a correction report/ }).getAttribute('href');
    expect(href).toContain('issues/new?template=correction.yml');
    await expect(page.getByText(/call 112/)).toBeVisible();
  });

  test('the issue form exists and asks for a source and a checked date', () => {
    const form = readFileSync(new URL('../.github/ISSUE_TEMPLATE/correction.yml', import.meta.url), 'utf8');
    for (const field of ['page', 'claim', 'correct', 'source', 'checked', 'severity']) {
      expect(form).toContain('id: ' + field);
    }
    expect(form).toContain('labels: ["correction"]');
  });

  test('the corrections log records source corrections with dates and sources', () => {
    const log = readFileSync(new URL('../docs/corrections-log.md', import.meta.url), 'utf8');
    expect(log).toContain('| Date checked | Tip | Correction | Source | Pull request |');
    expect(log).toContain('7-13');
    expect(log).toContain('19 Nov 2026');
    expect(log).not.toMatch(/professionally verified/i);
  });
});
