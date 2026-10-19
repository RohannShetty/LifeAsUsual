# BRIEF: How To Live Better, a premium English reading site (v2: comic style on Apple-style glass)

**Role:** senior front-end engineer, product designer and technical translator, working autonomously in this repo.

## 0. How to work

- Read this whole file first. Then write `PLAN.md` (milestones, file tree, risks) and commit it.
- Work through milestones M0 to M4 (section 12). Commit after each. After each milestone, run the checks in section 13 that apply and fix failures before moving on.
- Make decisions yourself and log them in `DECISIONS.md`. Stop to ask only if something blocks you completely (no access to the source repo, or no way to run the translation).
- Create `AGENTS.md` and `.cursor/rules/project.mdc` that restate sections 3, 13 and 14, so later sessions keep the rules.
- If you run out of context, resume from the checklist in `PLAN.md`.

## 1. Goal

Turn the open-source book at https://github.com/eternity4719/HowToLiveBetter (branch `main`) into a fast, beautiful, mobile-first reading site. Everything a visitor sees is in English. A reader should be able to find a tip, read it comfortably, judge how far to trust it, and see how far through the book they are.

Site title: **How To Live Better**. Tagline (translate faithfully): "Spend the least money, time and effort to get back the most lifespan, money and personal freedom." The book's own spirit: it is a menu, not a to-do list. Picking one or two tips counts.

**Look and feel (v2).** A comic-book world on Apple-style glass. Comic is the illustration, lettering and motion layer; glass is the material. Two original characters, Plus and Minus, host the experience in short speech bubbles. The reading column stays calm. A first-time visitor should say "wow" within five seconds, and nothing about layout, navigation, features, palette or body typography changes because of it.

## 2. Source facts (verified 19 Oct 2026; re-check at build time)

Chinese appears in this brief only as parsing tokens and glossary sources. None of it may reach the site.

- The source is Simplified Chinese: 34 chapters in `book/NN-*.md` (about 1.1M characters, 765 tips). The book calls chapters 节 and tips 条.
- Every tip is `### N. Title`, then one HTML comment, then six bullets in this order:
  `<!-- 成本标签: 钱=0 时间=少 毅力=否 收益=大 口径=时间 人群=老人,60岁 -->`
  成本 (Cost), 说人话 (In plain words), 收益 (Benefit), 证据等级 (Evidence grade A/B/C), 来源 (Sources), 备注 (Caveats). A chapter may open with intro paragraphs before tip 1. Tip ID = chapter-tip, e.g. `7-12`.
- Tag values: money 0/少/多; time 少/中/多; willpower 否/些/是; benefit size 大/中/小; scope (口径) 死亡率/金钱/时间/自由; audience (人群, optional; comma = or, plus = and; missing = everyone) 怀孕, 婴幼儿, 孩子, 老人, 35岁, 60岁, 女性.
  English labels: scope = Lifespan / Money / Time and energy / Personal freedom. Money = Free / Small cost / Real money. Time = Quick / A few hours / Takes time every day. Willpower = None needed / Some / A lot. Audience = Pregnant or planning / Child under 3 / Child 3 to 18 / Older relatives at home / Age 35+ / Age 60+ / Women.
- **Disputed:** the Caveats bullet starts with 争议 (88 tips). Show a "Disputed" chip and keep the counter-evidence visible. Tips containing 待核实 or TODO (3) get a "Still being verified" chip.
- Cross-references read like 见第 N 节第 M 条（title）, 见第 M 条（title）(same chapter) and 见第 N 节.
- **Value tier** (the author's judgment, not evidence). Cost score = money {0:0, 少:1, 多:2} + time {少:0, 中:1, 多:2} + willpower {否:0, 些:1, 是:2}. Benefit 大: score 0 = Very high, score 1 to 2 = High, otherwise Average. Benefit 中: score 0 = High, otherwise Average. Benefit 小: Average. Implement it yourself from this rule.
- **Totals that must match** (the README states most of them): 765 tips; evidence A 495 / B 218 / C 52; value tier Very high 122 / High 344 / Average 299; Disputed 88; Still being verified 3; scope Lifespan 274 / Money 290 / Freedom 124 / Time 77.
- **In scope:** the 34 chapters; the README's reader-facing parts as a "Start here" section (what the book answers, how to read, four resources, evidence grades, value tiers, reading the numbers, chapter descriptions); the 9 standalone guides in `docs/*.md` (not `引用对照.md`) as "Guides".
- **Out of scope for phase 1:** `docs/核实记录/` (231 fact-check logs, about 1.3M characters, larger than the book) and `docs/引用对照.md`: audit trails, not reading material. Also `tools/`, `.github/`, `ads/`, `skills/`, `CLAUDE.md`, `AGENTS.md`, `衍生项目.md`, `index.html`, and the README's badges, downloads, AI-skill, star-history, donation, ads and business sections. `og.png` contains Chinese text, so never reuse it.

## 3. Non-negotiables

1. **English only.** No CJK characters in anything shipped: pages, alt text, meta tags, OG image, slugs, JSON-LD, console output.
2. **Faithful translation.** Never summarize, omit, add, reorder, soften or strengthen. Do not add your own medical, legal or safety advice. Keep every number, percentage, unit, date, statute reference, evidence grade, DOI, URL and English-language citation exactly as in the source. Keep currency in RMB (¥); do not convert.
3. **Licence (the text is CC BY 4.0).** Every page footer and the About page credit "How To Live Better by eternity4719", link the original repo and the licence, and say: "Translated into English and reformatted for the web. Changes were made. Not endorsed by the author." Keep the author's caveat that content may be outdated or wrong and that readers should defer to local authorities, doctors and lawyers. Add one dismissible line at the top of each chapter: "Written for mainland China. Laws, insurance and procedures elsewhere may differ." Write your own code; the source repo's code is MIT, so if you reuse any of it, keep its notice.
4. **Privacy.** No analytics, cookies or third-party requests; self-host fonts. Progress lives only in `localStorage`.
5. **Source stays untouched.** Add it as a git submodule at `./source`, pinned to a commit (`git init` first if needed). Content is baked in at build time; no runtime fetching.
6. **The cast never touches the advice.** Characters speak only about the interface: greetings, progress, empty states, celebrations. They never comment on, summarize, rate or joke about a tip, and never add advice, claims, numbers or disclaimers. Chapters on heavy subjects run in calm mode (section 7).

## 4. Translation pipeline (the largest job)

Expect roughly 600k to 700k English words, about a million output tokens.

- `scripts/parse`: read `source/book` into validated JSON (Zod) under `data/zh/`. Fail the build on any malformed tip.
- `scripts/translate`: resumable and cached by `sha256(source tip + glossary version + prompt version)`, so upstream edits re-translate only changed tips. Unit = one tip (title plus six fields), batches of up to 8, concurrency 4 to 8, retry with backoff. Read `ANTHROPIC_API_KEY` or `OPENAI_API_KEY` and `TRANSLATE_MODEL` from env (provide `.env.example`; hard-code no model). Write to `data/en/`.
- No key or no network: translate batch by batch yourself, one chapter at a time, into the same JSON schema, ticking `PLAN.md` after each chapter. Never skip, summarize or leave "the rest for later".
- **Pilot first:** translate Chapter 4 (18 tips), review it line by line against the source, fix the prompt and glossary, and only then run all 34. Build M3 on the pilot data while the full run continues.
- `data/glossary.json` is injected into the prompt and enforced by a post-check. Seed it: chapter (节), tip (条), In plain words (说人话), Benefit (收益), Caveats (备注), state medical insurance (医保, yibao), social insurance (社保), Housing Provident Fund (公积金), household registration (户口, hukou), minimum living allowance (低保, dibao), work-related injury insurance (工伤), labor arbitration (劳动仲裁), local police station (派出所), top-tier Grade-3 Class-A hospital (三甲医院), bride price (彩礼, caili). Use official English names for laws and agencies. Pinyin only on first mention per chapter, for terms with no English equivalent.
- Voice: plain, direct, second person, short sentences, like the source.
- Turn every cross-reference into a working link: "See Chapter 16, Tip 14 (title)". A broken reference fails the build.

## 5. Pages and the tip card

Static routes: `/` Home; `/chapters/` and `/chapters/[n]-[slug]/` (one page per chapter); `/start/`; `/guides/` and `/guides/[slug]/`; `/explore/`; `/progress/`; `/picks/`; `/about/`.

- **Home:** the hero is the **Daily quick win**: one real tip from the 122 Very-high-value tips, chosen deterministically by local date, shown with its cost chips and payoff. Below it: Continue reading, the overall progress ring, and four shortcuts for what you get back (lifespan, money, time and energy, freedom).
- **Navigation:** floating glass bottom bar on mobile (Home, Chapters, Explore, Progress); left rail plus reading column on desktop.
- **Tip card, in this order:** title with its ID (e.g. 7.12, a real linkable anchor because the book cross-references by number); chips (value tier, evidence grade, scope, cost trio, audience, Disputed, Still being verified); **In plain words** as the visual lead (the author says this line alone is enough to decide); Cost; Benefit; Caveats (always visible); Sources (collapsed, count shown, animated with the grid-rows 0fr to 1fr technique, always in the DOM for search and print). Actions: Mark read, Save to My Picks, Copy link.
- Evidence grade is a ring: filled for A, half for B, hollow for C, with text for screen readers.
- **Chapter page:** slim sticky header with title and progress; an "On this page" bottom sheet listing tips with read dots; Resume button; previous and next chapter.
- **Reading settings sheet:** text size, serif or sans, theme (auto, light, dark), Reduce transparency.
- **Explore:** Pagefind search plus filters (evidence, value tier, scope, free, quick, no willpower, audience, Disputed), with state kept in the URL.

## 6. Read-completion system (priority 0)

- A tip counts as read when at least 50% of it has been visible for max(1.5 s, min(6 s, 40% of its reading time at 230 wpm)). Mark read toggles manually. Fast flicks must not count. A chapter is complete when all its tips are read.
- Visuals, all inline SVG and CSS, no chart library: (1) a slim scroll bar at the top of each chapter (scroll-driven animation with a JS fallback); (2) the overall ring, "N of 765 tips"; (3) the **Reading map**: 765 glass beads, one per tip, grouped by chapter, beads light up when read, tap a bead to jump there; (4) chapter bars with percentages; (5) tips per day for the last 14 days, and the streak.
- Persist in `localStorage` under a versioned key as sets of tip IDs (not positions), plus last position, picks, per-day counts and settings. Wrap every access in try/catch. Provide Export and Import (JSON) and Reset with confirmation.
- Everything stays legible at 360 px wide with no horizontal scroll. Every chart has a text alternative (a hidden table with the same data).

## 7. Fun elements and the cast

The five fun elements are unchanged: (1) Daily quick win; (2) "Surprise me", a random tip weighted toward Very high; (3) the chapter-complete moment (a canvas burst of glass beads, under 1.5 KB of code, plus `navigator.vibrate(10)`; see section 8); (4) streak and milestone medallions at 10, 50, 100, 250, 500 and 765 tips; (5) My Picks, saved tips, echoing the book's idea that one or two picks count. The cast now hosts them. Add no other features.

**The cast** (original characters; inline SVG built from simple shapes; no raster art, no Lottie):

- **Plus** (jade): a rounded plus sign, the optimist who spots the payoff. **Minus** (amber): a rounded bar, the dry accountant who asks what it costs. They are the two sides of the book's ledger and keep the chips' colour meaning: jade is benefit, amber is cost.
- Shared construction: 3 px ink outline (#04110F), flat fill, one halftone shadow, round dot eyes, swappable brows and mouths. Six moods: neutral, happy, surprised, smug, sleepy, cheering. One `<Character who mood size>` component; all character SVG together at most 25 KB.
- Idle life: a slow blink and a 2 px breathing bob, CSS only. Reactions: hop, wobble, squash-and-stretch.

**Dialogue:**

- Bubbles are Apple-style glass with a 2 px ink outline and a tail (section 8). At most 12 words per bubble and 3 bubbles per exchange; tap to dismiss; auto-hide after 6 s; never covering content or blocking input.
- Lines live in `data/dialogue.json`, keyed by trigger, 3 to 5 variants each, picked at random but never the same twice in a row. English only, plain and warm, with light humour built on the cost-versus-payoff gag. Example: Minus: "Cost?" Plus: "Zero." Minus: "Fine."
- Triggers are interface moments only: first visit (3 bubbles, skippable), Daily quick win intro, Resume reading, Mark read, pick saved, chapter complete, milestone, streak, empty states, Explore with no results, 404, offline.
- They appear on Home, Progress, Picks, empty states, sheets, transitions and celebrations. Never inside tip cards or the reading column.
- Banned in lines: advice; medical, legal or financial claims; statistics; the words should, must, cure, guarantee, doctor, lawyer, medicine; urgency and guilt (a broken streak gets a gentle welcome back); jokes about illness, death, crime, money trouble or disability.

**Calm mode:** no characters, no SFX, no bursts; chapter completion is a quiet glow with neutral text. On from the start for chapters 1, 13, 16, 25, 28, 29, 30 and 33 (`data/calm-chapters.json`). Read every chapter's tip titles and add any other chapter that deals with suicide, bereavement, serious illness, disability, abuse or crime; log the additions in `DECISIONS.md`. If the Daily quick win or a "Surprise me" tip comes from a calm chapter, its card renders calm too.

**Comic effects switch:** one on/off control in the Reading settings sheet. Off removes characters, bubbles, SFX and bursts, and keeps the glass and the layout.

## 8. Visual design: comic style on Apple-style glass

**Unchanged from v1 (do not touch):** the layout and navigation; the palette (background #08171C to #0F2E36, jade #46D9A0, amber #F5B85A, mist #E8F1EF, steel #8FB3D9; dark by default, follows the system, light theme in pearl with teal-tinted glass); colour meaning (jade = benefit and strong evidence, amber = cost, steel = neutral); the two typefaces (a reading serif, suggest Literata, and a UI sans, suggest Bricolage Grotesque or Instrument Sans; self-hosted, `font-display: swap`; body 17 to 18 px, line-height 1.7, measure 60 to 68 characters, sentence case); the copy rules (short, active, specific; empty and error states say what to do next). The comic layer and the glass sit on top of these.

Before coding, write a compact design plan: the named hex colours, type roles, and ASCII wireframes for Home (including the splash sequence), Reader and Progress. Critique it against the generic-generated-page traits (identical rounded cards with one shared shadow, gradient washes as decoration, mechanical eyebrow labels, arrows on buttons) and revise. Take screenshots while building, and before finishing remove one decorative element.

**Division of labour: comic is illustration, lettering and framing; glass is the material.**

- **Comic layer:** the cast; speech bubbles; SFX stickers that pop on actions; halftone dot shading (CSS radial-gradient at 6 to 10% opacity) behind the Home hero, the Progress header and celebration splashes; ink outlines (2 to 3 px, #04110F) on characters, bubbles, stickers and the Home hero panel; slightly skewed panel gutters between Home sections; chips and badges as stickers (ink outline, flat fill, a tiny hard shadow) with their colours and text unchanged.
- **SFX vocabulary:** PING, POP, TA-DA, NICE, WHOOSH. No violent words (no POW, BAM, CRASH).
- **Lettering:** one comic display face, self-hosted, latin subset, at most 25 KB (suggest Lilita One). Used only for SFX, bubble text, splash titles and the Home headline. Never for body text, tips, buttons or form labels.
- **Reading column:** calm. Tip cards stay fake glass with no ink outline, no halftone and no characters; only the chips and badges inside them take the sticker styling.
- **Home hero:** a comic splash page: a framed panel with a halftone burst, the Daily quick win in a glass speech bubble held by Plus, and Minus raising an eyebrow beside it.

**Apple-style glass (Liquid Glass look)** wherever glass appears (nav bar, sheets, hero, bubbles, modals):

- Fill `color-mix(in srgb, white 10%, transparent)` in dark and about white 55% in light, tuned per theme; `backdrop-filter: blur(24px) saturate(180%) brightness(1.06)` plus the `-webkit-` prefix.
- A 1 px rim light (white at about 35% on the top-left edge fading to 6% at the bottom-right), an inner top highlight, a soft specular sheen (135deg gradient from 25% to 0%), and a long soft shadow (`0 12px 40px rgb(0 0 0 / .28)`). Optional faint noise (3% at most) only to prevent banding.
- Concentric radii (inner radius = outer radius minus padding); capsule shapes for the nav bar and controls; vary radius, blur and opacity by hierarchy rather than one rounded card everywhere.
- Behaviour: press = scale .98 with a brighter sheen; sheets and the nav bar morph through View Transitions; tint follows the page-level theme variables, not per-element JS.
- Optional enhancement, Chromium only: an SVG displacement filter for edge refraction on the nav bar. Never on Safari or Firefox, never on text-heavy surfaces.
- Keep the v1 glass rules: reading surfaces at least 80% opaque with body contrast at least 7:1 in both themes; real blur only on a few large or sticky surfaces (no more than 3 on screen); fake glass on tip cards; fallbacks for `@supports not (backdrop-filter: blur(1px))`, `prefers-reduced-transparency`, forced-colors and the Reduce transparency switch.

**Wow, spent in three places:** (1) the Home splash sequence (section 9); (2) the chapter-complete splash: a TA-DA burst, both characters cheering, that chapter's beads lighting up in a wave (calm chapters get the quiet glow instead); (3) the Reading map, where each glass bead lights up with a small halftone pop when its tip is read. Everything else stays quiet.

**Palette discipline:** no new hues. Ink (#04110F) is the only addition, used for outlines.

## 9. Motion flow

Goal: the whole app feels like one continuous comic page being turned, at 60 fps. Use one vocabulary everywhere.

- **Tokens:** `--ease-out: cubic-bezier(.22,1,.36,1)`, `--ease-inout: cubic-bezier(.4,0,.2,1)`, a `linear()` spring with about 8% overshoot, durations 150 / 250 / 400 / 600 ms. Animate only `transform`, `opacity` and `clip-path`.
- **Every route change:** a comic panel wipe with the View Transitions API: the outgoing page slides out along a slightly diagonal gutter while the incoming panel slides in (350 to 450 ms). Shared elements morph (chapter card to chapter header, tip chip to tip card). Back reverses direction. Fallback: a 200 ms cross-fade.
- **Every control:** squash-and-stretch on press and release (scale .96, spring back to 1); chips pop; toggles snap with a tiny overshoot; sheets rise on the spring and settle.
- **Cast:** bubbles pop in with overshoot (scale .6 to 1.04 to 1 in 280 ms) and leave with a quick shrink; characters react to actions (hop on Mark read, wobble on an error); SFX stickers fly in, hold 700 ms and fade.
- **Scroll flow:** halftone and background orbs drift at 0.2 to 0.4 times scroll speed (transform only; scroll-driven animations with a requestAnimationFrame fallback); the chapter progress bar and the sticky header respond to scroll. Nothing else moves on scroll.
- **Reading is sacred:** never animate or delay body text; tip text is visible immediately; native scrolling only, no scroll hijacking or smooth-scroll libraries.
- **Home splash (once per session, tap to skip):** panels slam in on a short stagger, the halftone bursts, Plus and Minus hop in, a bubble pops, the progress ring fills. 1.8 s at most, and the page is interactive from the first frame.
- **Reduced motion or Comic effects off:** travel and bounce become 150 ms fades; characters hold static poses; bubbles fade; no bursts. Pause every loop when the tab is hidden.

## 10. Mobile, performance, accessibility

- Design at 360 to 430 px first, then check 768, 1024 and 1440. Thumb-zone navigation, 44 px touch targets, safe-area insets, `100dvh`, nothing hover-only.
- The longest chapter is about 50k English words: use `content-visibility: auto` with `contain-intrinsic-size` on every tip, and one shared `IntersectionObserver`.
- Budgets: JS at most 60 KB gzip on reader pages (Pagefind loads lazily on Explore), CLS near 0, mobile Lighthouse at least 90 performance and 95 accessibility, best practices and SEO.
- Semantic HTML, skip link, visible focus, desktop shortcuts (j and k for next and previous tip, / for search), screen-reader labels for grade rings.
- SEO: `lang="en"`, unique title and description per chapter, canonical URLs, sitemap, a new English OG image.
- Comic budgets: all character SVG at most 25 KB, comic font at most 25 KB, no new JS dependency; halftone and bubbles are CSS or inline SVG; bursts reuse the canvas from section 7. The Lighthouse budgets hold with Comic effects on.

## 11. Stack and layout

Astro (static output) and TypeScript; hand-written CSS with custom-property design tokens, no UI kit; small vanilla TypeScript islands (Preact only if needed); Pagefind; inline SVG icons; Zod; Playwright. Take `site` and `base` from env so it works on a custom domain or under `/repo`, and add a GitHub Pages workflow.

Layout: `source/` (submodule), `scripts/`, `data/zh/`, `data/en/`, `data/dialogue.json`, `data/calm-chapters.json`, `src/` (with `src/cast/` for Character, Bubble and Sfx), `public/`, `reports/`, `PLAN.md`, `DECISIONS.md`, `AGENTS.md`.

## 12. Milestones

- **M0** scaffold, design tokens, source submodule.
- **M1** parser, validated Chinese data, counts match (stop and report if they do not).
- **M2** glossary, Chapter 4 pilot, review, then the full translation (keep it running while M3 proceeds).
- **M3** layout, glass system, Home, Chapters, Reader, Progress, My Picks.
- **M3b** comic layer: the cast, dialogue, calm mode, Comic effects switch, panel-flow transitions, Home splash, chapter-complete splash.
- **M4** Explore and filters, About and attribution, QA, accessibility, performance, deploy notes.
- **Phase 2, only after every check passes:** tap-to-define glossary terms, share button, installable offline mode, an English port of `selfcheck.html` (a reader-facing life self-check whose answers stay on the device), an Evidence ledger from the fact-check logs, "Recently updated" badges from `updates.json`.

## 13. Acceptance checks (write results to `reports/qa.md`; the build fails if any is red)

1. **Parse:** every total listed in section 2 matches; every tip has all six fields; re-read the README's own totals at build time and compare.
2. **Translation:** tip counts per chapter equal the source; zero CJK characters in `dist/`; every URL and DOI, and every Arabic-digit number in a source tip, appears in its translation (report mismatches, auto-retry, then fix by hand); glossary terms used consistently.
3. **Links:** every cross-reference resolves; no broken internal links; no leftover HTML comments or raw markers.
4. **Review:** Chapter 4 reviewed line by line before the full run; afterwards spot-check 3 random tips per chapter and log them in `reports/spotcheck.md`.
5. **Playwright** at 360x800, 390x844, 768x1024 and 1440x900, light and dark, reduced motion on and off, Comic effects on and off: no horizontal overflow, targets at least 44 px, progress survives reload, Reset, Export and Import work, the chapter-complete moment fires exactly once.
6. **Budgets:** the Lighthouse and bundle limits from section 10.
7. **Legal:** attribution and the mainland-China notice appear where section 3 says.
8. **Comic layer:** `data/dialogue.json` passes a lint (at most 12 words per bubble; no digits; none of should, must, cure, guarantee, doctor, lawyer, medicine; no CJK); calm chapters render with no cast, SFX or bursts; Comic effects off removes every character and burst; no character, halftone or ink outline appears inside the reading column; a screenshot sheet shows both characters in all six moods.
9. **Motion:** every route change uses the panel wipe or the fade fallback; no layout shift during transitions; no long task over 50 ms during a transition on a throttled mobile profile; reduced motion verified.

## 14. Don't

Don't paraphrase or "improve" the author's advice. Don't invent statistics, hotlines or disclaimers. Don't ship Chinese text or the original `og.png`. Don't add analytics, a chart library, scroll hijacking, or more features than section 7. Don't animate body text. Don't put characters, SFX, halftone or ink outlines inside the reading column. Don't use copyrighted characters, brand mascots or any named artist's style; Plus and Minus are original. Don't use raster character art or Lottie. Don't joke about illness, death, crime, money trouble or disability. Don't change layout, navigation, features, palette or body typography for the sake of the comic layer. Don't stop to ask unless fully blocked.
