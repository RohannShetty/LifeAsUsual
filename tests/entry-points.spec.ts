import { expect, test } from '@playwright/test';

// P4.1: the reading library and the practical guides are equal, first-class
// ways in. Equal prominence must not become an equal claim of verification.
test.describe('P4.1 two first-class entry points', () => {
  test('the home page offers both entry points with equal structure and honest labels', async ({ page }) => {
    await page.goto('/');
    const library = page.locator('[data-entry-point="library"]');
    const guides = page.locator('[data-entry-point="guides"]');
    await expect(library).toBeVisible();
    await expect(guides).toBeVisible();
    await expect(library).toHaveAttribute('href', /\/chapters\/$/);
    await expect(guides).toHaveAttribute('href', /\/guides\/$/);
    // Same component contract: no primary/secondary styling difference.
    const classes = await page.locator('.entry-card').evaluateAll((nodes) => nodes.map((node) => node.className));
    expect(classes.length).toBe(2);
    expect(new Set(classes).size).toBe(1);
    await expect(library).toContainText('AI-reviewed draft');
    await expect(guides).toContainText('not yet India-adapted');
    await expect(guides).toContainText('owner self-reviewed');
  });

  test('the practical guides are reachable from the mobile navigation on every viewport', async ({ page }) => {
    await page.goto('/');
    const nav = page.getByRole('navigation', { name: 'Mobile navigation' });
    if (!(await nav.isVisible())) return; // the capsule is hidden on wide viewports by design
    const guides = nav.getByRole('link', { name: 'Guides' });
    await expect(guides).toBeVisible();
    const box = await guides.boundingBox();
    expect(box!.width).toBeGreaterThanOrEqual(44);
    expect(box!.height).toBeGreaterThanOrEqual(44);
  });

  test('both destinations exist and cross-link to each other', async ({ page }) => {
    await page.goto('/chapters/');
    await expect(page.locator('a[href$="/guides/"]').first()).toBeVisible();
    await page.goto('/guides/');
    await expect(page.getByRole('link', { name: /library|chapters/i }).first()).toBeVisible();
  });
});
