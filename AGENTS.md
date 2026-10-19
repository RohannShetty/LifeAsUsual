# Agent Operating Rules & Non-Negotiables

This file governs all AI coding agents working on the **How To Live Better** project. It restates sections 3, 13, and 14 from `BRIEF.md`.

---

## 1. Non-Negotiables (Section 3)

1. **English Only:** Zero CJK characters in anything shipped: pages, alt text, meta tags, OG image, slugs, JSON-LD, console output.
2. **Faithful Translation:** Never summarize, omit, add, reorder, soften, or strengthen. Do not add medical, legal, or safety advice. Keep every number, percentage, unit, date, statute reference, evidence grade, DOI, URL, and citation exactly as in the source. Keep currency in RMB (¥); do not convert.
3. **Licence (CC BY 4.0):** Every page footer and the About page credit "How To Live Better by eternity4719", link original repo and licence, and say: *"Translated into English and reformatted for the web. Changes were made. Not endorsed by the author."* Keep author's caveat that content may be outdated or wrong and that readers should defer to local authorities, doctors, and lawyers. Add one dismissible line at top of each chapter: *"Written for mainland China. Laws, insurance and procedures elsewhere may differ."*
4. **Privacy:** No analytics, cookies, or third-party requests; self-host all fonts. Reading progress lives only in `localStorage`.
5. **Source Stays Untouched:** Keep `./source` submodule pinned to a commit. Content is baked in at build time; no runtime fetching.
6. **The Cast Never Touches the Advice:** Characters (Plus & Minus) speak only about the interface: greetings, progress, empty states, celebrations. They never comment on, summarize, rate, or joke about a tip, and never add advice, claims, numbers, or disclaimers. Sensitive chapters run in Calm Mode.

---

## 2. Acceptance Checks (Section 13)

The build fails if any of these checks are red (`reports/qa.md`):

1. **Parse Check:** Every total matches (765 tips; Evidence A 495 / B 218 / C 52; Value tier Very high 122 / High 344 / Average 299; Disputed 88; Still being verified 3; Scope Lifespan 274 / Money 290 / Freedom 124 / Time 77).
2. **Translation Check:** Tip counts per chapter equal source; 0 CJK characters in `dist/`; every URL, DOI, and Arabic numeral matches source; glossary terms used consistently.
3. **Link Check:** Every cross-reference resolves; no broken internal links; no leftover raw tokens or comments.
4. **Review Check:** Chapter 4 reviewed line-by-line; 3 random tips per chapter spot-checked in `reports/spotcheck.md`.
5. **Playwright Check:** Verified at 360x800, 390x844, 768x1024, 1440x900 in light and dark, reduced motion on/off, Comic effects on/off: no horizontal overflow, touch targets $\ge 44\text{ px}$, progress persists, Reset/Export/Import work, chapter-complete moment fires once.
6. **Budgets Check:** Reader page JS $\le 60\text{ KB}$ gzip; character SVG $\le 25\text{ KB}$; comic font $\le 25\text{ KB}$; mobile Lighthouse $\ge 90$ performance, $\ge 95$ a11y, best practices, SEO.
7. **Legal Check:** Attribution and mainland China notice appear where required.
8. **Comic Layer Check:** `data/dialogue.json` passes lint (at most 12 words per bubble; no digits; none of *should, must, cure, guarantee, doctor, lawyer, medicine*; no CJK); calm chapters render with no cast, SFX, or bursts; Comic effects off removes all characters/bursts; no character, halftone, or ink outline inside reading column.
9. **Motion Check:** Route change uses panel wipe or fade fallback; no layout shift; no task over 50ms during transitions on throttled mobile.

---

## 3. Don'ts (Section 14)

1. Don't paraphrase or "improve" the author's advice.
2. Don't invent statistics, hotlines, or disclaimers.
3. Don't ship Chinese text or original `og.png`.
4. Don't add analytics, a chart library, scroll hijacking, or extra features.
5. Don't animate body text.
6. Don't put characters, SFX, halftone, or ink outlines inside the reading column.
7. Don't use copyrighted characters, brand mascots, or any named artist's style; Plus and Minus are original.
8. Don't use raster character art or Lottie.
9. Don't joke about illness, death, crime, money trouble, or disability.
10. Don't change layout, navigation, features, palette, or body typography for the sake of the comic layer.
11. Don't stop to ask unless fully blocked.
