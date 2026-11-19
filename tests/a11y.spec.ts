import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const PAGES = [
  { name: 'home', path: '/' },
  { name: 'chapters index', path: '/chapters/' },
  { name: 'chapter 1', path: '/chapters/01-do-not-die-early/' },
  { name: 'guides index', path: '/guides/' },
  { name: 'guide detail', path: '/guides/what-to-do-first-after-being-laid-off/' },
  { name: 'cyber-fraud guide', path: '/help/report-financial-cyber-fraud/' },
  { name: 'progress', path: '/progress/' },
  { name: 'india status', path: '/india/' },
];

const TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

/**
 * Long chapter pages use content-visibility on tip cards, so off-screen cards
 * have no resolved layout until they scroll near the viewport. Walk the page
 * once so axe measures the layout a reader actually sees.
 */
async function settleLayout(page: import('@playwright/test').Page) {
  await page.evaluate(async () => {
    const step = Math.max(320, window.innerHeight - 120);
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo({ top: y, behavior: 'instant' as ScrollBehavior });
      await new Promise((resolve) => requestAnimationFrame(() => resolve(null)));
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    await new Promise((resolve) => requestAnimationFrame(() => resolve(null)));
  });
}
const describeViolation = (v: any) => ({
  id: v.id,
  impact: v.impact,
  help: v.help,
  nodes: v.nodes.map((n: any) => ({
    target: n.target,
    html: String(n.html).slice(0, 200),
    summary: String(n.failureSummary ?? '').replace(/\\s+/g, ' ').slice(0, 240),
  })),
});

for (const target of PAGES) {
  test(`no WCAG 2.2 AA violations: ${target.name}`, async ({ page }) => {
    await page.goto(target.path);
    await page.waitForLoadState('networkidle');
    await settleLayout(page);
    const results = await new AxeBuilder({ page }).withTags(TAGS).analyze();
    expect(results.violations.map(describeViolation)).toEqual([]);
  });
}