
// Capture the review matrix for reports/monsoon-glass.md section 3b.
// Needs the preview server (npm run preview, port 4321). Writes PNGs to reports/visual/ (gitignored).
// Read the results with the modlens CLI, e.g.
//   npx @liustack/modlens analyze -i reports/visual/chapter-desktop-neel.png -m "Gemini 3.8 Flash (Low)" -o out.json
import { chromium } from 'playwright';
import fs from 'node:fs';

const OUT = 'reports/visual';
fs.mkdirSync(OUT, { recursive: true });
const BASE = 'http://localhost:4321';
const CH = '/chapters/01-do-not-die-early';

const shots = [
  { name: 'home-desktop-neel',    url: '/',    vp: [1440, 900], palette: 'midnight', theme: 'dark'  },
  { name: 'home-desktop-chandni', url: '/',    vp: [1440, 900], palette: 'pearl',    theme: 'light' },
  { name: 'chapter-desktop-neel', url: CH,     vp: [1440, 900], palette: 'midnight', theme: 'dark'  },
  { name: 'chapter-fold-open',    url: CH,     vp: [1440, 900], palette: 'midnight', theme: 'dark', openFold: true },
  { name: 'chapter-desktop-kora', url: CH,     vp: [1440, 900], palette: 'ivory',    theme: 'light' },
  { name: 'chapter-mobile-neel',  url: CH,     vp: [390, 844],  palette: 'midnight', theme: 'dark'  },
  { name: 'chapter-mobile-chandni', url: CH,   vp: [390, 844],  palette: 'pearl',    theme: 'light' },
  { name: 'home-mobile-kora',     url: '/',    vp: [390, 844],  palette: 'ivory',    theme: 'light' },
];

const browser = await chromium.launch();
const report = [];
for (const s of shots) {
  const ctx = await browser.newContext({ viewport: { width: s.vp[0], height: s.vp[1] }, deviceScaleFactor: 1 });
  await ctx.addInitScript(([palette, theme]) => {
    localStorage.setItem('htlb_settings_v1', JSON.stringify({ theme, palette, textSize: 100, comicEffects: true, reduceTransparency: false }));
  }, [s.palette, s.theme]);
  const page = await ctx.newPage();
  await page.goto(BASE + s.url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(700);
  const html = await page.evaluate(() => ({
    palette: document.documentElement.dataset.palette,
    theme: document.documentElement.dataset.theme,
    bg: getComputedStyle(document.documentElement).backgroundColor,
    font: getComputedStyle(document.body).fontFamily,
    glassy: document.querySelectorAll('.is-glassy').length,
    cards: document.querySelectorAll('.tip-card').length,
  }));
  if (s.openFold) {
    const btn = page.locator('.notes-toggle').first();
    if (await btn.count()) { await btn.click(); await page.waitForTimeout(600); }
  }
  await page.screenshot({ path: OUT + '/' + s.name + '.png' });
  report.push({ name: s.name, ...html });
  await ctx.close();
}
await browser.close();
fs.writeFileSync(OUT + '/meta.json', JSON.stringify(report, null, 1));
console.log(JSON.stringify(report, null, 1));
