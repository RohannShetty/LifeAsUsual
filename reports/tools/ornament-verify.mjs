// Verify v2.7.0 monsoon ornaments in a real browser: the kolam map contour,
// the arch crown, the completion seal, and the ruled rupee reference.
// Needs the preview server on localhost:4321. Writes PNGs to reports/visual/.
import { chromium } from 'playwright';
import fs from 'node:fs';

const OUT = 'reports/visual';
fs.mkdirSync(OUT, { recursive: true });
const BASE = 'http://localhost:4321';
const all = JSON.parse(fs.readFileSync('data/en-in/all-chapters.json', 'utf8'));

// Seed a plausible reader: chapter 1 finished, chapter 2 half way.
const seedIds = [];
for (const ch of all.slice(0, 2)) {
  const tips = ch.chapter === 1 ? ch.tips : ch.tips.slice(0, Math.ceil(ch.tips.length / 2));
  for (const tip of tips) seedIds.push(tip.id);
}

const browser = await chromium.launch();
const meta = [];

async function shot(name, url, opts = {}) {
  const vp = opts.vp ?? [1440, 900];
  const palette = opts.palette ?? 'midnight';
  const theme = opts.theme ?? 'dark';
  const textSize = opts.textSize ?? '17.5px';
  const ctx = await browser.newContext({ viewport: { width: vp[0], height: vp[1] }, deviceScaleFactor: 1 });
  await ctx.addInitScript(([palette, theme, textSize, ids]) => {
    localStorage.setItem('htlb_settings_v1', JSON.stringify({ theme, palette, textSize, comicEffects: true, reduceTransparency: false }));
    localStorage.setItem('htlb_ledger_v1', JSON.stringify({ version: 1, readTipIds: ids, picks: [], lastPosition: null, history: {}, streak: 0, lastActiveDate: null }));
  }, [palette, theme, textSize, seedIds]);
  const page = await ctx.newPage();
  await page.goto(BASE + url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  if (opts.scrollTo) {
    await page.locator(opts.scrollTo).scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
  }
  const probe = await page.evaluate(() => {
    const doc = document.documentElement;
    const loop = document.querySelector('.orn-kolam-loop');
    const trace = document.querySelector('.orn-seal-trace');
    const arch = document.querySelector('.orn-arch');
    const bead = document.querySelector('.map-bead');
    const inr = document.querySelector('.inr-ref');
    const seal = document.querySelector('.orn-seal');
    const box = (el) => { if (!el) return null; const r = el.getBoundingClientRect(); return [Math.round(r.width), Math.round(r.height)]; };
    return {
      overflow: doc.scrollWidth - doc.clientWidth,
      loopDashoffset: loop ? getComputedStyle(loop).strokeDashoffset : null,
      loopStroke: loop ? getComputedStyle(loop).stroke : null,
      kolamTraces: Array.from(document.querySelectorAll('.chapter-cluster')).slice(0, 3).map((c) => getComputedStyle(c).getPropertyValue('--kolam-trace').trim()),
      traceOpacity: trace ? getComputedStyle(trace).opacity : null,
      traceDashoffset: trace ? getComputedStyle(trace).strokeDashoffset : null,
      sealBox: box(seal),
      archBox: box(arch),
      archStroke: arch ? getComputedStyle(arch.querySelector('.orn-arch-line')).stroke : null,
      beadHit: bead ? getComputedStyle(bead, '::after').width : null,
      beadBox: box(bead),
      calm: document.querySelector('.chapter-page-root')?.dataset.calmChapter,
      cast: document.querySelectorAll('.celebration-cast').length,
      settled: document.getElementById('chapter-celebration')?.classList.contains('is-settled') ?? null,
      inrCount: document.querySelectorAll('.inr-ref').length,
      inr: inr ? getComputedStyle(inr).borderBottomWidth + ' ' + getComputedStyle(inr).borderBottomStyle + ' bg ' + getComputedStyle(inr).backgroundColor + ' radius ' + getComputedStyle(inr).borderRadius : null,
    };
  });
  await page.screenshot({ path: OUT + '/' + name + '.png' });
  meta.push({ name, ...probe });
  await ctx.close();
}

await shot('orn-home-desktop', '/');
await shot('orn-home-360-130', '/', { vp: [360, 800], textSize: '22.75px' });
await shot('orn-progress-desktop', '/progress/');
await shot('orn-progress-360', '/progress/', { vp: [360, 800], textSize: '22.75px' });
await shot('orn-chapter-calm-seal', '/chapters/01-do-not-die-early/', { scrollTo: '#chapter-celebration', palette: 'pearl', theme: 'light' });
await shot('orn-chapter-cast', '/chapters/02-do-not-die-slowly/', { scrollTo: '#chapter-celebration' });

await browser.close();
fs.writeFileSync(OUT + '/orn-meta.json', JSON.stringify(meta, null, 1));
console.log(JSON.stringify(meta, null, 1));
