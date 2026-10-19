# PLAN: How To Live Better (v2: Comic Style on Apple-Style Glass)

## 1. Overview & Core Philosophy
Transform the open-source guide `https://github.com/eternity4719/HowToLiveBetter` into a mobile-first English reading web application.
- **Tagline:** "Spend the least money, time and effort to get back the most lifespan, money and personal freedom."
- **Reader Mindset:** A menu, not a to-do list. Picking one or two tips counts.
- **Look & Feel:** Comic-book world on Apple-style glass. Comic is illustration, lettering, and motion; glass is the material. Two original SVG characters (Plus & Minus) host the experience with speech bubbles. Reading column stays calm.
- **Translation Strategy (Option 2):** Baseline ingested from `parveen0029/The-Evidence-Based-Life` (CC BY 4.0, all 765 tips), refined through the `humanizer` skill (`.agents/skills/humanizer/SKILL.md`) and verified against the Chinese source text (`source/book`).

---

## 2. File Tree & Architecture

```text
howtolivebetter/
├── .agents/
│   └── skills/
│       └── humanizer/
│           └── SKILL.md                 # Installed humanizer skill
├── .cursor/
│   └── rules/
│       └── project.mdc                  # Rules restating sections 3, 13, 14
├── source/                              # Git submodule: eternity4719/HowToLiveBetter
├── scripts/
│   ├── parse.ts                         # Validates & parses source book into data/zh/
│   ├── ingest-parveen.ts                # Ingests & normalizes baseline English tips
│   ├── humanize.ts                      # Applies humanizer skill & glossary checks
│   └── verify.ts                        # Enforces totals, numbers, URLs, zero CJK
├── data/
│   ├── zh/                              # Parsed Chinese JSON
│   ├── en/                              # Validated English JSON (765 tips)
│   ├── glossary.json                    # Enforced terminology (yibao, hukou, etc.)
│   ├── dialogue.json                    # Plus & Minus dialogue triggers (<12 words)
│   └── calm-chapters.json               # Sensitive chapters (1, 13, 16, 25, 28, 29, 30, 33)
├── src/
│   ├── components/
│   │   ├── TipCard.astro                # 6-field card with fake glass & sticker chips
│   │   ├── ReadingMap.astro             # 765 inline SVG beads
│   │   ├── BottomNav.astro              # Floating Apple-style glass bar (mobile)
│   │   ├── LeftRail.astro               # Desktop navigation rail
│   │   └── SettingsSheet.astro          # Font, size, theme, comic effects toggle
│   ├── cast/
│   │   ├── Character.astro              # Plus & Minus SVG (<25KB total, 6 moods)
│   │   ├── Bubble.astro                 # Apple glass speech bubbles with ink tails
│   │   └── Sfx.astro                    # PING, POP, TA-DA, NICE, WHOOSH stickers
│   ├── layouts/
│   │   └── BaseLayout.astro             # Tokens, View Transitions, reduced-motion
│   ├── pages/
│   │   ├── index.astro                  # Home: splash sequence, Daily Quick Win, ring
│   │   ├── start.astro                  # Reader-facing intro from README
│   │   ├── chapters/
│   │   │   ├── index.astro              # 34 chapter cards with progress bars
│   │   │   └── [n]-[slug].astro         # Chapter reader (sticky header, On this page sheet)
│   │   ├── guides/
│   │   │   ├── index.astro              # 9 standalone guides index
│   │   │   └── [slug].astro             # Guide reader
│   │   ├── explore.astro                # Pagefind search & multi-parameter filters
│   │   ├── progress.astro               # Reading map, streaks, 14-day history
│   │   ├── picks.astro                  # Saved tips from localStorage
│   │   └── about.astro                  # CC BY 4.0 license, disclaimers, attribution
│   └── styles/
│       ├── tokens.css                   # Jade, Amber, Mist, Steel, Ink, easing springs
│       ├── glass.css                    # Liquid Glass utilities & fake glass classes
│       └── comic.css                    # Halftone radial gradients, ink outlines
├── public/
│   ├── fonts/                           # Self-hosted Literata, Bricolage, Lilita One
│   └── favicon.svg
├── reports/
│   ├── qa.md                            # Verification results for M0-M4
│   └── spotcheck.md                     # Ch 4 review + 3 random tips per chapter
├── BRIEF.md                             # Source specifications
├── PLAN.md                              # This document
├── DECISIONS.md                         # Architecture decision records
└── AGENTS.md                            # Agent instructions & boundaries
```

---

## 3. Required Skills & Technology Stack

1. **Static Site Engine:** Astro (Static Output) + TypeScript.
2. **Styling & Optics:** Hand-written modern CSS, CSS Custom Properties, `color-mix()`, `backdrop-filter`, radial-gradient halftones. No UI kits or Tailwind.
3. **Motion & Transitions:** View Transitions API (diagonal comic panel wipe 350–450ms, 200ms fade fallback), cubic-bezier easing tokens, `linear()` spring overshoot.
4. **Data Engineering:** Node.js/TypeScript scripts with Zod schema validation and SHA256 caching.
5. **Search & Storage:** Client-side Pagefind search (lazy-loaded on `/explore`) and versioned `localStorage` with JSON export/import.
6. **E2E Testing:** Playwright across 4 viewports (360x800, 390x844, 768x1024, 1440x900) testing dark/light, reduced motion, and comic toggles.

---

## 4. Design Language & Visual System

### Apple-Style Liquid Glass
- **Fills:** `color-mix(in srgb, white 10%, transparent)` in dark mode; `color-mix(in srgb, white 55%, transparent)` in light mode.
- **Optics:** `backdrop-filter: blur(24px) saturate(180%) brightness(1.06)` with `-webkit-` prefix.
- **Rim Lighting & Specular:** 1px directional rim light (top-left 35% white fading to bottom-right 6%), 135deg subtle gradient sheen, deep soft shadow (`0 12px 40px rgb(0 0 0 / .28)`).
- **Concentric Radii:** Inner radius equals outer radius minus padding. Capsule shapes for bottom nav and control pills.
- **Performance Rule:** Real blur strictly limited to nav bar, sheets, and modals ($\le 3$ active surfaces on screen). Repetitive tip cards use static "fake glass" for 60fps scrolling and $\ge 7:1$ contrast.

### Comic Layer
- **Ink Outlines:** 2px to 3px solid ink (`#04110F`) on characters, speech bubbles, stickers, and Home hero panel.
- **Halftone Shading:** CSS `radial-gradient` dot patterns (6% to 10% opacity) behind Home hero, Progress header, and celebration splashes.
- **Display Typography:** Lilita One (<25KB, Latin subset) used exclusively for SFX, bubble text, splash titles, and Home headline. Never for body text or tips.
- **The Cast:** Original SVG characters **Plus** (Jade `#46D9A0`, optimist) and **Minus** (Amber `#F5B85A`, accountant). 6 moods (neutral, happy, surprised, smug, sleepy, cheering), idle breathing (2px bob) and blink. Total SVG size $<25\text{ KB}$.
- **Speech Bubbles:** Liquid Glass with 2px ink outline and tail. Maximum 12 words per bubble, maximum 3 bubbles per exchange. Triggers are UI moments only; never inside reading columns.
- **Calm Mode:** Deactivates characters, SFX, and particle bursts on sensitive chapters (1, 13, 16, 25, 28, 29, 30, 33). Shows quiet glow instead.

---

## 5. Translation & Data Pipeline (Option 2)

1. **Ingest Baseline Dataset:**
   - Ingest `parveen0029/The-Evidence-Based-Life` dataset containing all 765 tips matching the 34 chapters.
   - Parse statutory citations, evidence grades (A: 495, B: 218, C: 52), and value tiers (Very High: 122, High: 344, Average: 299).
2. **Apply Humanizer & Glossary Rules:**
   - Standardize institutional terminology using `data/glossary.json` (e.g. *yibao*, *hukou*, *Grade-3 Class-A hospital*).
   - Clean up stripped citation punctuation.
   - Run humanizer skill checks to eliminate AI staging, forced triads, and dramatic fragments while leaving technical figures unchanged.
3. **Chapter 4 Pilot Review:**
   - Translate and refine Chapter 4 (18 tips).
   - Review line-by-line against `source/book/04-不要浪费时间.md` and log review notes in `reports/spotcheck.md`.
4. **Full Corpus Validation:**
   - Run automated verification for zero CJK characters in output, 100% Arabic numeral retention, and complete URL/DOI preservation.

---

## 6. Implementation Milestones

### Milestone M0: Scaffold, Design Tokens, Source Submodule
- [ ] Initialize git repository in workspace (`git init`).
- [ ] Add `https://github.com/eternity4719/HowToLiveBetter` as submodule at `./source`.
- [ ] Scaffold Astro static project with TypeScript and strict configs.
- [ ] Define CSS Custom Properties (`tokens.css`, `glass.css`, `comic.css`).
- [ ] Self-host required fonts: Literata (reading serif), Bricolage Grotesque (UI sans), Lilita One (comic display).
- [ ] Create `AGENTS.md` and `.cursor/rules/project.mdc` enforcing non-negotiables and acceptance rules.
- [ ] Commit M0.

### Milestone M1: Parser & Validated Chinese Data
- [ ] Create Zod schemas for tip structures, tags, and bullets in `scripts/parse.ts`.
- [ ] Parse all 34 chapters from `source/book/` into validated JSON under `data/zh/`.
- [ ] Run validation check against target counts:
  - Total tips: 765
  - Evidence grades: A = 495, B = 218, C = 52
  - Value tiers: Very high = 122, High = 344, Average = 299
  - Disputed tips = 88; Still being verified = 3
  - Scopes: Lifespan = 274, Money = 290, Freedom = 124, Time = 77
- [ ] Commit M1.

### Milestone M2: Baseline Ingestion, Humanizer & English Pipeline
- [ ] Ingest `parveen0029/The-Evidence-Based-Life` dataset into `data/en/`.
- [ ] Build `scripts/humanize.ts` applying `data/glossary.json` and humanizer prose rules.
- [ ] Run Chapter 4 pilot review (18 tips): verify against Chinese source, log line-by-line in `reports/spotcheck.md`.
- [ ] Execute normalization pass on all 34 chapters in `data/en/`.
- [ ] Verify acceptance check 2: zero CJK characters, Arabic numerals match, URLs/DOIs match.
- [ ] Commit M2.

### Milestone M3: Core Layout & Reading System
- [ ] Build responsive shell: mobile floating glass bottom bar (360px–430px) and desktop left rail.
- [ ] Implement TipCard component: fake glass styling, sticker chips, expandable sources (grid-rows 0fr to 1fr), linkable anchor IDs (`#7-12`).
- [ ] Implement Reading Engine: 50% visibility tracking via `IntersectionObserver`, `localStorage` persistence, streak, 14-day history.
- [ ] Implement 765-bead SVG Reading Map and overall progress rings (pure SVG/CSS, zero chart libraries).
- [ ] Implement Chapter reader (`/chapters/[n]-[slug]/`) with sticky header and "On this page" bottom sheet.
- [ ] Implement Home (`/`): Daily Quick Win hero, continue reading button, progress ring, payoff shortcuts.
- [ ] Implement My Picks (`/picks/`) and Reading Settings sheet (text size, font, theme, Reduce transparency).
- [ ] Commit M3.

### Milestone M3b: Comic Layer & Motion
- [ ] Implement `<Character who mood size />` SVG component for Plus & Minus (<25KB total).
- [ ] Implement `<Bubble />` component; populate `data/dialogue.json` with triggers (max 12 words, no advice/claims).
- [ ] Implement Calm mode (`data/calm-chapters.json`) for sensitive chapters.
- [ ] Implement master Comic effects toggle in Settings sheet.
- [ ] Wire View Transitions comic panel diagonal wipe (350–450ms) with fade fallback.
- [ ] Implement Home splash sequence (panels slam in, halftone burst, Plus/Minus hop in, <1.8s, tap to skip).
- [ ] Implement chapter-complete moment: canvas particle burst (<1.5KB) + `navigator.vibrate(10)`.
- [ ] Commit M3b.

### Milestone M4: Explore, Attribution, QA & Budgets
- [ ] Implement `/explore/` with Pagefind search and multi-parameter filtering (URL state preserved).
- [ ] Implement `/start/`, `/guides/`, and `/about/` (CC BY 4.0 license, author attribution, mainland China notice).
- [ ] Run Playwright test suite across all 4 target viewports (360x800, 390x844, 768x1024, 1440x900).
- [ ] Verify Lighthouse budgets ($\ge 90$ performance, $\ge 95$ accessibility, SEO, best practices).
- [ ] Verify reader JS bundle budget ($\le 60\text{ KB}$ gzip on reader pages).
- [ ] Document final test runs in `reports/qa.md`.
- [ ] Commit M4.

---

## 7. Acceptance Checks (Section 13)

1. **Parse Check:** 765 tips, 34 chapters, exact evidence grade and value tier totals match.
2. **Translation Check:** Zero CJK characters in `dist/`; all numbers, percentages, DOIs, and URLs preserved; glossary terms consistent.
3. **Link Check:** All cross-references (`见第 N 节第 M 条`) resolve to working anchors; zero broken internal links.
4. **Review Check:** Chapter 4 reviewed line by line; 3 random tips per chapter spot-checked and recorded in `reports/spotcheck.md`.
5. **Playwright Check:** Verified at 360x800, 390x844, 768x1024, 1440x900 in light/dark and reduced-motion modes. Touch targets $\ge 44\text{ px}$.
6. **Budgets Check:** Reader JS $\le 60\text{ KB}$ gzip; character SVG $\le 25\text{ KB}$; comic font $\le 25\text{ KB}$.
7. **Legal Check:** Attribution to eternity4719, CC BY 4.0 link, and mainland China caveat present on every page.
8. **Comic Layer Check:** Dialogue lint passes (at most 12 words, no advice words, no CJK); calm chapters render with no cast/SFX; Comic effects toggle removes all cast/bursts.
9. **Motion Check:** Route change uses panel wipe or fade; no layout shift; no task over 50ms during transitions.

---

## 8. Key Risks & Mitigations

1. **Risk:** Performance degradation from backdrop blur on long chapters.  
   **Mitigation:** Enforce fake glass (flat CSS fills) on tip cards; limit real blur to $\le 3$ sticky/modal elements; use `content-visibility: auto`.
2. **Risk:** Inadvertent content alteration during translation/humanizing.  
   **Mitigation:** Automated diff checks comparing numbers, percentages, and URLs against source text; enforce strict non-negotiables in prompt.
3. **Risk:** Broken cross-references from translated chapter/tip slugs.  
   **Mitigation:** Deterministic slug generation based strictly on numeric chapter-tip IDs (`/chapters/7-money/#7-12`).

---

## 9. Don'ts (Section 14)

1. Don't paraphrase or "improve" the author's advice.
2. Don't invent statistics, hotlines, or medical/legal disclaimers.
3. Don't ship Chinese text or the original `og.png`.
4. Don't add analytics, cookies, third-party requests, or external chart libraries.
5. Don't put characters, SFX, halftone, or ink outlines inside the reading column.
6. Don't animate body text or hijack native scrolling.
7. Don't use copyrighted character styles or raster character art.
8. Don't joke about illness, death, crime, money trouble, or disability.
