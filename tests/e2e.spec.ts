import { test, expect } from '@playwright/test';

test.describe('How To Live Better - Comprehensive E2E Tests', () => {

  test('1. Home page renders hero, daily win, progress ring, and zero horizontal scroll', async ({ page }) => {
    await page.goto('/');

    // Page title and headline
    await expect(page).toHaveTitle(/How To Live Better/);
    const headline = page.locator('h1.home-headline');
    await expect(headline).toBeVisible();

    // Daily Quick Win hero
    const dailyPanel = page.locator('.daily-win-panel');
    await expect(dailyPanel).toBeVisible();

    // Cast greeting present on home
    const castRow = page.locator('.cast-welcome-row');
    await expect(castRow).toBeVisible();

    // Check zero horizontal overflow
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasHorizontalOverflow).toBe(false);
  });

  test('2. Calm Chapter (Chapter 1) suppresses characters, speech bubbles, and bursts', async ({ page }) => {
    await page.goto('/chapters/01-do-not-die-early/');

    // Check chapter header
    const title = page.locator('.chapter-main-title');
    await expect(title).toBeVisible();

    // Verify Calm Mode flag is active
    const root = page.locator('.chapter-page-root');
    await expect(root).toHaveAttribute('data-calm-chapter', 'true');

    // The celebration still closes the chapter: the seal renders, the cast does not
    const celebration = page.locator('#chapter-celebration');
    await expect(celebration).toHaveCount(1);
    await expect(page.locator('.celebration-cast')).toHaveCount(0);
    await expect(celebration.locator('.orn-seal')).toHaveCount(1);

    // Confirm the India rewrite notice is present and status-aware
    const notice = page.locator('#india-rewrite-notice');
    await expect(notice).toBeVisible();
    await expect(notice).toHaveAttribute('data-rewrite-status', 'checked');
    await expect(notice).toContainText('India');

    // Zero horizontal scroll on reader page
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasHorizontalOverflow).toBe(false);
  });

  test('3. Non-Calm Chapter (Chapter 2) renders celebration cast and tips', async ({ page }) => {
    await page.goto('/chapters/02-do-not-die-slowly/');

    // Verify root is not calm
    const root = page.locator('.chapter-page-root');
    await expect(root).toHaveAttribute('data-calm-chapter', 'false');

    // Check celebration card exists, with the cast and the seal
    const celebration = page.locator('#chapter-celebration');
    await expect(celebration).toBeVisible();
    await expect(celebration.locator('.celebration-cast')).toHaveCount(1);
    await expect(celebration.locator('.orn-seal')).toHaveCount(1);

    // Tip cards exist
    const tipCards = page.locator('.tip-card');
    expect(await tipCards.count()).toBeGreaterThan(10);
  });

  test('4. Explore page filters recommendations instantly and updates URL', async ({ page }) => {
    await page.goto('/explore/');

    // Initial state: 765 tips
    const resultsCount = page.locator('#results-count');
    await expect(resultsCount).toContainText('765 of 765 tips');

    // Open the filter sheet, then filter by Grade A
    await page.locator('#open-filter-sheet').click();
    const chipA = page.locator('.filter-chip.chip-a');
    await chipA.click();

    // Verified exact count from BRIEF: 495 Grade A tips
    await expect(resultsCount).toContainText('495 of 765 tips');
    expect(page.url()).toContain('evidence=A');
    await page.locator('#close-filter-sheet').click();

    // Search query filter
    const searchInput = page.locator('#explore-search');
    await searchInput.fill('hypertension');
    await expect(resultsCount).not.toContainText('495 of 765 tips');
  });

  test('5. Mobile touch targets meet the 44px ergonomics requirement', async ({ page, isMobile }) => {
    if (!isMobile) return;

    await page.goto('/');

    // Check bottom navigation items
    const navItems = page.locator('.nav-link');
    const count = await navItems.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const box = await navItems.nth(i).boundingBox();
      expect(box).not.toBeNull();
      if (box) {
        expect(box.width).toBeGreaterThanOrEqual(44);
        expect(box.height).toBeGreaterThanOrEqual(44);
      }
    }
  });

  test('6. Legal Attribution and CC BY 4.0 link present in About page', async ({ page }) => {
    await page.goto('/about/');

    const pageText = await page.textContent('body');
    expect(pageText).toContain('How To Live Better by eternity4719');
    expect(pageText).toContain('Creative Commons Attribution 4.0 International');
    expect(pageText).toContain('Translated into English and reformatted for the web');
    expect(pageText).toContain('India Rewrite Status');
    expect(pageText).toContain('inherited chapters have India-adapted files');
    expect(pageText).toContain('not a guarantee of factual accuracy or professional sign-off');
  });

  test('7. Theme palettes switch both modes and survive reload', async ({ page }) => {
    await page.goto('/');
    await page.locator('#open-settings-btn:visible, #desktop-settings-btn:visible').first().click();

    await page.locator('.palette-btn[data-palette="ivory"]').click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
    await expect(page.locator('html')).toHaveAttribute('data-palette', 'ivory');

    await page.locator('.palette-btn[data-palette="monsoon"]').click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await expect(page.locator('html')).toHaveAttribute('data-palette', 'monsoon');

    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await expect(page.locator('html')).toHaveAttribute('data-palette', 'monsoon');
  });

  test('8. Guided finder produces a filtered Explore link', async ({ page }) => {
    await page.goto('/');
    const finder = page.locator('#find-your-step');
    await finder.scrollIntoViewIfNeeded();

    await finder.locator('.finder-option[data-value="Money"]').click();
    await finder.locator('.finder-option[data-value="Quick"]').click();
    await finder.locator('.finder-option[data-value="None needed"]').click();

    const result = finder.locator('[data-finder-result]');
    await expect(result).toBeVisible();
    const href = await result.locator('[data-result-link]').getAttribute('href');
    expect(href).toContain('/explore/');
    expect(href).toContain('scope=Money');
    expect(href).toContain('time=Quick');
  });

  test('10. INR reference toggle stays controllable on rewritten chapters', async ({ page }) => {
    // India-rewritten tips state prices in rupees directly, so the yuan-to-rupee badge
    // generator finds nothing to annotate; the preference must still work and persist.
    await page.goto('/chapters/11-red-lines-for-developers/');
    await expect(page.locator('.inr-ref')).toHaveCount(0);

    await page.locator('#open-settings-btn:visible, #desktop-settings-btn:visible').first().click();
    await page.locator('#inr-toggle').uncheck();
    await expect(page.locator('html')).toHaveAttribute('data-show-inr', 'false');

    await page.locator('#inr-toggle').check();
    await expect(page.locator('html')).toHaveAttribute('data-show-inr', 'true');
  });

  test('11. India-adapted tips show AI-reviewed draft status rather than expert approval', async ({ page }) => {
    await page.goto('/chapters/18-is-having-kids-worth-it/');
    await expect(page.locator('.tip-card')).toHaveCount(7);
    await expect(page.locator('.india-application')).toHaveCount(0);
    await expect(page.locator('.badge-source')).toHaveCount(0);
    await expect(page.locator('.badge-draft')).toHaveCount(7);
    await expect(page.locator('.badge-draft').first()).toContainText('AI-reviewed draft');
    await expect(page.locator('.badge-checked')).toHaveCount(0);
  });

  test('9. Marking a tip read persists in localStorage', async ({ page }) => {
    await page.goto('/chapters/04-do-not-waste-time/');
    const firstCard = page.locator('.tip-card').first();
    await firstCard.locator('.mark-read-btn').click();

    const stored = await page.evaluate(() => localStorage.getItem('htlb_ledger_v1'));
    expect(stored).toContain('4-1');

    await page.reload();
    await expect(page.locator('.tip-card').first().locator('.mark-read-btn')).toHaveClass(/is-read/);
  });

});