import { test, expect } from '@playwright/test';

// WCAG 1.4.10 Reflow: content must not require two-dimensional scrolling at
// 320 CSS px width (the 400% zoom equivalent for a 1280px window).
const PAGES = ['/', '/chapters/', '/chapters/01-do-not-die-early/', '/guides/', '/chapters/07-living-with-no-money/', '/progress/', '/india/'];

test.describe('Reflow at 320 CSS px', () => {
  for (const path of PAGES) {
    test(`no horizontal scrolling on ${path}`, async ({ page }) => {
      await page.setViewportSize({ width: 320, height: 640 });
      await page.goto(path);
      const metrics = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
      }));
      expect(metrics.scrollWidth, `document scrollWidth ${metrics.scrollWidth} vs viewport ${metrics.innerWidth}`).toBeLessThanOrEqual(metrics.innerWidth + 1);
    });
  }
});
