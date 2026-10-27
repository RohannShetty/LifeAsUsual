# Redesign Proposal — "The Field Guide"

**Project:** How To Live Better (India edition)
**Repo:** `D:\github_softwares\howtolivebetter`
**Date:** 2026-10-26
**Status:** Proposal only. No source file has been modified. Awaiting approval before Phase 1.
**Author role:** front-end engineer + art direction

---

## 0. How to read this

Sections 1–2 are the audit: what is actually in the repository, measured, with file and line references.
Section 3 is the brainstorm (three directions, each drawn from the subject).
Sections 4–5 are the design: tokens, type, layout, and a full motion specification.
Section 6 is the implementation plan, file by file.
Section 7 is what could break the nine acceptance checks in `AGENTS.md`, and how to prevent it.

Every number in the audit was measured from this checkout, not estimated.

---

## 1. Assumptions, and the three unfilled slots

The brief left three placeholders. Rather than block, here is the reading I have used. Correct any of them and I will revise the affected sections.

| Slot in the brief | Assumption used | Source |
| --- | --- | --- |
| `[SPECIFY: tech stack]` | Astro 5 static output (MPA) + vanilla TypeScript modules + plain CSS custom properties. No React, no Tailwind, no CSS-in-JS. `ClientRouter` provides SPA-style view transitions. Nodes: `astro@^5`, `@playwright/test`, `pagefind`, `tsx`. | `package.json`, `src/layouts/BaseLayout.astro:2` |
| `[SPECIFY: brand guidelines]` | The brand is the site as shipped: four palettes (Midnight Jade, Pearl, Monsoon, Ivory), Literata body / Bricolage Grotesque display / Lilita One comic, the Plus & Minus comic layer, CC BY 4.0, English-only, no analytics. "Premium" must be reached **inside** these constraints, not by replacing them. | `BRIEF.md`, `AGENTS.md`, `src/styles/tokens.css` |
| `[SPECIFY: target audience]` | Mobile-first readers in India, plausibly mid-range Android on a metered connection; the same person also reads on a laptop. They arrive for one concrete answer, not to browse. Reading is private and local-only. | `BRIEF.md`, `data/dialogue.json` trigger set, `tests` viewports 360/390/768/1440 |

**Constraint I must state up front:** this session's model cannot accept image input. Every visual judgement below is derived from reading the CSS and markup and from measured geometry, not from looking at the rendered page. The proposal includes a screenshot-review step (Phase 0, step 3) that a human or an image-capable model must run before Phase 2 is considered done.

---

## 2. Repository audit

### 2.1 Shape of the codebase

| Area | Files | Lines |
| --- | --- | --- |
| Styles | `tokens.css` 164, `ui.css` 213, `comic.css` 144, `glass.css` 89, `fonts.css` 33 | 643 |
| Pages | `explore.astro` 958, `india.astro` 549, `index.astro` 469, `progress.astro` 379, `about.astro` 261, `start.astro` 164, `picks.astro` 126 | 2,906 |
| Layout | `BaseLayout.astro` | 217 |
| Components | `TipCard.astro` 841, `SettingsSheet.astro` 651, `QuestionFlow.astro` 506, `ReadingMap.astro` 256, `BottomNav.astro` 212, `LeftRail.astro` 193, `ProgressRing.astro` 139, `IndiaNotice.astro` 46 | 2,844 |
| Cast | `Character.astro` 330, `Bubble.astro` 221, `dialogue-manager.ts`, `particle-burst.ts` | 551 |
| Tests | `e2e.spec.ts` 193, `india-rewrite.spec.ts` 98 | 291 |

The site is 52 built pages, 765 tips, 34 chapters. It is not a greenfield page: the redesign has to move a working, tested, gated artefact.

### 2.2 The design system as implemented

**Semantic palette** (`src/styles/tokens.css`) — load-bearing, and it is good. Jade = benefit / Grade A, Amber = cost / Grade B, Steel = neutral / Grade C, plus Mist text on Deep ink. Four palettes share one token contract via `data-theme` + `data-palette`. This is the strongest part of the current design and the redesign should not touch the hues.

**Typography** (`src/styles/fonts.css`)

| Face | File | Size | Declared weights | Role |
| --- | --- | --- | --- | --- |
| Literata | `literata-regular.woff2` | 85,672 B | `400` only | body |
| Literata Italic | `literata-italic.woff2` | 47,856 B | `400` only | emphasis |
| Bricolage Grotesque | `bricolage-grotesque.woff2` | 76,888 B | `400 700` | display + labels |
| Lilita One | `lilita-one.woff2` | 10,672 B | `400` | comic SFX only |

Total font payload: **221,088 B** (216 KB). Comic font is 10.7 KB against a 25 KB cap — 14.3 KB of headroom exists there and is unused.

**Type scale issues measured from the source**

- `font-weight` appears 124 times: **800 x51, 700 x50, 600 x11, 400 x4**, plus `650` x3 and `500` x2. Four weights below 600 in the entire design. Heavy weight everywhere is the single loudest "template" tell on the page.
- Bricolage declares `font-weight: 400 700` but is used at **800** in 51 places (e.g. `.home-headline`, `.section-kicker`, `.india-pill`). If the shipped variable file tops out at 700, every one of those is browser-synthesised faux bold. If it does not, the `@font-face` range is lying. Either way it needs verifying and correcting — this is exactly the kind of thing that separates "premium" from "looks premium".
- Literata ships only a 400 roman and a 400 italic. **Any bold inside serif body copy is synthesised.** There is no true bold on the reading surface.

**Material** (`src/styles/glass.css`) — `.liquid-glass` = `backdrop-filter: blur(24px) saturate(180%) brightness(1.06)` + dithered noise + specular gradient + four border colours, on `--radius-outer: 24px`. `.fake-glass` is the flat, cheaper variant used on the 765 tip cards.

Counting `.liquid-glass` usage: **chapter page 5, home 3, explore 3, plus BottomNav 1, SettingsSheet 1, ReadingMap 1.** On a chapter page, five blurring surfaces can coexist (sticky header, cast bubble, source drawer, nav, sheet). `backdrop-filter` is the most expensive filter there is; five stacked on a mid-range Android is the difference between 60 fps and 30 fps scrolling.

### 2.3 Motion inventory — everything the site currently animates

| # | Name | Location | Trigger | Property |
| --- | --- | --- | --- | --- |
| 1 | `panel-wipe-out/in` | `BaseLayout.astro:177-205` | route change | translateX 40px + scale 0.98, 350ms |
| 2 | `panel-wipe-out/in` | `comic.css:97-125` | route change | translate 3-4% + rotate 0.5deg, 380ms |
| 3 | `fade-wipe-out/in`, `fade` | `comic.css:128-143`, `BaseLayout.astro:207-217` | reduced motion | opacity, 150-180ms |
| 4 | `bubblePop` / `bubbleDismiss` | `Bubble.astro` | cast dialogue | scale + opacity |
| 5 | `charBob` / `charBlink` / `charShadowScale` | `Character.astro` | ambient | transform, infinite |
| 6 | `sfx-fly` | `comic.css:75-92` | chapter complete | scale/rotate/translate, 700ms |
| 7 | particle burst | `particle-burst.ts` (1,784 B) | chapter complete | canvas-less DOM particles |
| 8 | hover/active transitions | everywhere | pointer | `transform`, `background` |

**13 keyframes total.** No scroll-linked animation. No FLIP. No `@starting-style`. No springs (only three near-identical cubic-béziers). No motion on the reading-progress bar. No persistent-element transition (see defect 1).

### 2.4 Measured budgets

| Budget | Cap (`AGENTS.md`) | Current | Headroom |
| --- | --- | --- | --- |
| Reader page JS | 60 KB gzip | **13,671 B gzip** across all built chunks | **46.3 KB** |
| Comic font | 25 KB | 10,672 B | 14.3 KB |
| Character SVG | 25 KB | inline in `Character.astro` and `Bubble.astro` | to verify |
| Mobile Lighthouse perf | >= 90 | last run 2026-10-19 | unknown after India rewrite |
| Largest JS chunk | — | `ClientRouter` 15,362 B raw | — |

There is genuine room to add motion. There is *not* room to add it carelessly, because the performance budget is a scoring gate, not a guideline.

### 2.5 Defects and opportunities found while reading

These are ordered by how much they hold the design back.

1. **The view-transition system is dead code.** Two blocks both target `::view-transition-old(root)`:
   `BaseLayout.astro:177-205` (350ms, translateX ±40px, scale 0.98) and `comic.css:97-125` (380ms, translate ±3-4%, rotate 0.5deg). Only one can win, decided by bundle order, and nothing in the source says which. Practically: the "comic panel diagonal wipe" that `BRIEF.md` describes is probably never seen. Fix by deleting one and tokenising the survivor.
2. **The whole document animates on every navigation, including the chrome.** No element has a `view-transition-name`. So the left rail, the bottom nav and the sticky chapter header all slide-and-fade on every route change, which reads as a page reload rather than a transition. Persistent chrome is the single highest-value motion fix available.
3. **Comic effects cannot be switched off.** `SettingsSheet.astro:500` writes `data-comic-effects="on"` / `"off"`, but the only selectors that read it are `Bubble.astro:211` and `Character.astro:318`, both matching `[data-comic-effects="false"]`. The value `"false"` is never written, so turning Comic Effects off changes a DOM attribute and nothing else. **This fails `AGENTS.md` acceptance check 8** ("Comic effects off removes all characters/bursts"). It is a pre-existing defect, not a redesign idea, and it must be fixed before the comic-adjacent motion work can be trusted.
4. **The material is one-note.** Home is three `.liquid-glass` panels in a row (daily win, reading overview, map teaser), all at `--radius-outer: 24px`, all with the same shadow. Three identical rounded cards is the exact composition the brief calls un-premium. Material should encode hierarchy; right now it encodes nothing.
5. **Heavy-weight monoculture** — see 2.2. 101 of 124 weight declarations are >= 700.
6. **Faux bold on the reading surface** — see 2.2. Literata has no 700.
7. **Two competing dictionaries for the same concepts.** `--radius-outer` (24) vs `--radius-card` (20) vs `--radius-inner` (16) vs `--radius-sm` (10); `--ease-spring` and `--spring-overshoot` are identical values; `--duration-fast` duplicates `--dur-fast`; `--content-max: 760px` in `ui.css` duplicates `.reading-column { max-width: 760px }` in the layout. Every one of these is a place where a later change silently disagrees.
8. **No display scale.** `clamp(2.15rem, 8vw, 3rem)` for the home headline is the only large type on the site. A reference work of 765 entries has no typographic hierarchy above h2.
9. **The best idea in the product is under-designed.** The bead map — "765 beads. One for every tip" — is the most distinctive thing here and it gets one teaser panel. It is also the natural home for scroll-linked motion.
10. **Measure is fine, protect it.** `TipCard.astro:503` caps body text at `var(--text-measure, 65ch)`; `chapters/[n]-[slug].astro:335` uses 52ch and `:431` 520px; `QuestionFlow.astro:158` 54ch and `:347` 46ch. Do not "improve" these; any wider measure will make the page look cheaper, not richer.

---

## 3. Brainstorm — three directions

The subject, inventoried from the repo so the design comes from the thing itself rather than from what a life-advice site is expected to look like:

- **What it is:** a translated Chinese reference book of 765 graded recommendations, re-set for the web and re-written for Indian law and money.
- **Its own vocabulary:** chapter.tip numbering (`19.4`), evidence grades A/B/C, ROI tiers, "Disputed", "Still being verified", scope × time × willpower, a *menu* not a to-do list, "one or two tips count".
- **Its physical analogue:** an index card catalogue, a field guide, a stamped certificate, a printed ledger. Numbering, stamps, folios, running heads, hairline rules.
- **Its cast:** Plus & Minus, halftone dots, ink outlines, SFX — a comic layer that must stay outside the reading column.
- **Its colours:** jade, amber, steel on deep teal, named like weather (Midnight Jade, Monsoon) and like paper (Pearl, Ivory).
- **Its promise:** spend least, get back most. Restraint is on-brand; excess is off-brand.

### Direction A — **The Field Guide** (recommended)

*The site becomes the printed guide it was translated from: a well-made reference with running heads, folios, hairline rules, letterpressed grade stamps and chapter tabs. Material is matte paper, not glass. Premium is earned through craft — optical type, real rules, honest spacing — not through effects.*

```
  HOME (mobile, 390px)
  +----------------------------------+
  | HOW TO LIVE BETTER        [India]|  <- running head, hairline under
  |----------------------------------|
  | Spend the least money,           |  <- Literata display, 400, tight
  | time and effort.                 |
  |                                  |
  | 765 entries  ·  34 chapters      |  <- figures in Bricolage, tabular
  |----------------------------------|
  | TODAY'S ENTRY            1.19    |  <- folio number, top-right
  | Walk more, sit less.             |
  | [A] grade   [Very high] ROI      |  <- stamps, not pills
  | Cost: none   Time: daily         |
  | Read the entry ............................>  |
  |----------------------------------|
  | 02  MONEY                        |  <- chapter tab, hairline box
  | 03  SAFETY                       |
  | 04  ...                          |
  +----------------------------------+
```

- **Motion personality:** typesetting. Rules draw, stamps press, folios count in, page enters with a 60ms stagger of three layers. Nothing floats, nothing bounces except the stamps.
- **Risk:** without colour fields it can read as austere. Mitigated by the four palettes and by keeping exactly one glass surface (the chrome).

### Direction B — **Midnight Ledger**

*Keep the deep-teal glass world but rebuild it as an instrument: 1px hairlines, tabular figures, a single jade light source, numbers that read like a display. The page is a device that measures how you live.*

- **Composition:** asymmetric two-column on desktop, wide left margin as a data rail, cards reduced to ruled rows.
- **Motion:** instrument response — needle sweeps on the progress ring, digits roll on grade changes, a glow that tracks scroll.
- **Risk:** closest to what exists (so least "overhaul"), and monospace labels plus readouts is a well-worn product trope. It also does not fix defect 4, it celebrates it.

### Direction C — **The Bead Constellation**

*The 765-bead map becomes the site's primary navigation: chapters as constellations, tips as stars that light as you read; every page is a point in that field.*

- **Motion:** the most interesting of the three — parallax depth, scroll-linked orbits, FLIP on filter.
- **Risk:** it is a *new feature*, which the brief forbids, and it fights the reader-first job. Motion cost on mid-range Android would eat the Lighthouse score. Rejected on scope and performance, not on taste.

### Recommendation

**A as the structure, B's material discipline for the chrome only, C's bead map untouched except for scroll-linked lighting.** Rationale, stated plainly: the premium signal for a reference work is authority and craft (type, rules, stamps, numbers), and the site already owns three assets nobody else has — the graded vocabulary, the beads, and the cast. A redesign that adds effects but keeps five stacked blurs and 101 heavy weights will look more expensive and still read as generated.

---

## 4. The redesign — "The Field Guide"

### 4.1 Material ladder (the core change)

Replace "everything is glass" with a three-rung ladder. This single change does more for the premium read than any animation.

| Rung | Name | Look | Used for | Budget |
| --- | --- | --- | --- | --- |
| 1 | **Paper** | flat tinted fill, no blur, no shadow, 1px hairline `--theme-hairline` | tip cards, section blocks, table rows, notices | unlimited |
| 2 | **Plate** | paper + 2px top rule in the section's accent + 4% accent wash | daily entry, chapter openers, callouts | <= 3 per page |
| 3 | **Glass** | existing `.liquid-glass` | sticky chapter header, bottom nav, settings sheet, cast bubble | <= 2 per page, never inside the reading column |

Proposed additive tokens (nothing removed, nothing renamed yet):

```css
:root {
  /* Surface ladder — additive to the existing palette contract */
  --surface-paper:      color-mix(in srgb, var(--theme-surface) 92%, var(--theme-bg));
  --surface-paper-alt:  color-mix(in srgb, var(--theme-surface) 84%, var(--theme-bg));
  --rule-hairline:      color-mix(in srgb, var(--theme-text) 12%, transparent);
  --rule-strong:        color-mix(in srgb, var(--theme-text) 26%, transparent);
  --wash-accent:        color-mix(in srgb, var(--color-jade) 7%, transparent);

  /* Graded ink — Typography needs a real ladder, not three weights */
  --ink-strong:         var(--theme-text);
  --ink-body:           color-mix(in srgb, var(--theme-text) 88%, transparent);
  --ink-muted:          var(--theme-text-muted);
  --ink-faint:          color-mix(in srgb, var(--theme-text) 46%, transparent);

  /* Rhythm — one spacing scale, replaces ad-hoc 0.55/0.6/0.65/0.7/0.8rem */
  --space-1: 0.25rem;  --space-2: 0.5rem;  --space-3: 0.75rem;
  --space-4: 1rem;     --space-5: 1.5rem;  --space-6: 2rem;   --space-7: 3rem;
}
```

Radius: collapse to **three** — `--radius-capsule` (chips/stamps), `--radius-plate: 14px` (cards, one value, one hierarchy), `--radius-sheet: 24px` (sheets and modals only). Cards stop being 24px-rounded blobs; sheets still are.

### 4.2 Colour

Hues stay exactly as they are — they are correct, they carry meaning, and `AGENTS.md` protects them. What changes is *distribution*:

- Accent is used for **verdict**, never for decoration. Jade appears on the grade stamp and the single primary action; amber only on cost; steel only on neutral grade. Today amber is also used for the notice border and blue for nothing in particular.
- The page gets **one large field of background per section** instead of three floating cards: the section becomes a paper block with a top rule, and the accent lives in the rule and the stamp.
- Light palettes (Pearl, Ivory) get a true ink ramp so text hierarchy is possible without relying on weight 800.

### 4.3 Typography — the decision that matters most

**What changes**

1. **Fix the weight ladder before choosing new fonts.** Target distribution: 400/500 for body, 600 for labels, 700 for the single loudest element on the page. Reduce the 51 uses of 800 to at most 3. This is free, and it will do more than any new typeface.
2. **Declare real axis ranges.** Verify the Bricolage variable file's actual weight axis (a font inspector, one minute) and declare it truthfully in `fonts.css`. If it tops out at 700, every 800 must become 700 or the axis must be a newer file.
3. **True bold on the reading surface.** Either add a Literata 700 subset (literata is a variable font upstream: a 700 instance subsets to roughly 35-45 KB for latin) or remove bold from serif body copy entirely. I recommend the latter first — the page rarely needs emphasis in body; `.india-notice strong` and evidence labels are already sans.
4. **A display face, if the budget is granted.** Current display is Bricolage at 800 — a geometric grotesque doing work a book face should do. For a field guide the display face should feel printed and have real optical sizes.

| Option | Face | Added payload (latin subset, to be measured) | Case |
| --- | --- | --- | --- |
| T0 | No new face: Literata for display, Bricolage demoted to numerals/labels only | **0 B** | Zero risk, fixes the tells, but the display voice is the body voice |
| T1 **(recommended)** | **Newsreader** variable (opsz 6-72, wght 200-800, true italic) for headlines + chapter numerals | ~28-38 KB | Genuinely optical: `font-optical-sizing: auto` gives display cuts at 48px and text cuts at 17px. A bookish, editorial voice that matches a translated book. Real italic. |
| T2 | **Instrument Serif** for headline only | ~22-30 KB | Stronger personality, single weight, no optical axis, no second use |

Font budget rule for any of these: total font payload stays **<= 260 KB**, every new face is self-hosted (privacy constraint, `AGENTS.md` §4), `font-display: swap`, and `unicode-range` limited if the file ships more glyphs than the site needs. Artists/brands are not imitated; Newsreader is OFL.

**The proposed scale** (1.25 ratio at the reading end, 1.333 at the display end; these are starting values to tune against real pages):

```css
:root {
  --text-folio:   0.7rem;   /* 11.2px  numbered entries, tabular */
  --text-label:   0.78rem;  /* 12.5px  stamps, meta */
  --text-body:    1.0625rem;/* 17px    unchanged — do not touch */
  --text-lede:    1.24rem;  /* 19.8px  inPlainWords lead */
  --text-h3:      1.32rem;
  --text-h2:      1.72rem;
  --text-h1:      clamp(2rem, 6.2vw, 2.6rem);
  --text-display: clamp(2.6rem, 11vw, 4.4rem); /* chapter opener numeral only */
  --lh-tight:     1.06;
  --lh-snug:      1.22;
  --lh-body:      1.7;      /* keep */
  --tracking-display: -0.028em;
}
```

**Deliberately avoided** (these read as generated): a tracked-out ALL-CAPS eyebrow above every section (`.section-kicker` currently does this 3x on the home page — keep it **once**, on the page, not on every block), middle-dot meta strings, and `→` appended to every link. The `→` currently appears on 3 CTAs; keep it on the primary action only.

### 4.4 Layout

The measure is right (65ch cap at `TipCard.astro:503`) and the column is right (760px). What is wrong is the interior rhythm and the desktop emptiness.

```
  CHAPTER (desktop, 1440px)                    BEFORE          AFTER
  +--------+-------------------------------+   +------+------+   +-------+---------------+
  | rail   |  Ch 19  Employment      1/24 |   | rail | card |   | rail  |  Ch 19        |
  | 240px  |  ---------------------------- |   |      | card |   |       |  -----------  |
  |        |  19.4 Dignity at work        |   |      | card |   |       |  running head |
  |        |  [A] [Very high]             |   |      | card |   |       |  1  of  24    |
  |        |  in plain words ...          |   |      | card |   |       |  -----------  |
  |        |  ---------------------------- |   |      |      |   |       |  19.4 ...     |
  +--------+-------------------------------+   +------+------+   +-------+---------------+
                                              stacked cards     rules + a        margin
                                              on a blur         measure column    folio rail
```

- Cards become **ruled entries**: a 1px hairline above each tip, a folio in the left margin on wide screens, the stamp row aligned to a single baseline. On mobile the folio moves inline before the title.
- One **full-bleed chapter opener** per chapter: oversized numeral, title in the display face, the tip count, then the first rule. This is the "one bold element" the rest of the page defers to.
- Grid: 12-column at >= 1024px with a 96px folio margin and a 65ch measure; single column below. No new breakpoints — reuse 640 / 1024.

### 4.5 Component treatments

**Tip card** — anatomy stays identical, semantics stay identical; only the dressing changes.

| Part | Now | After |
| --- | --- | --- |
| Container | `.fake-glass`, radius 20, shadow | paper, radius 14, no shadow, 1px top hairline |
| `19.4` | pill badge | folio numeral, tabular, `--ink-faint`, margin-aligned |
| Grade | dot + ring | 22px letterpress stamp: square, 1px rule, letter A in the grade colour, 1.5deg rotation |
| ROI | coloured pill | text label in the sans, grade colour as the only colour |
| Metrics (cost/benefit) | 2-col grid of blocks | 2-col ruled table, label above rule, value below |
| Sources drawer | JS height transition | `@starting-style` + `allow-discrete` (see 5.4.5) |
| Mark-read | icon button | same button; adds stamp-press animation |

**Home** — hero becomes a running head + display headline + figures, no pill row; the three glass panels become one plate (today's entry) and two ruled blocks. The cast bubble stays exactly where it is (it is outside the reading column and that rule is non-negotiable).

---

## 5. Motion system

### 5.1 Principles

1. **One signature moment per navigation, not per section.** Page-load sequences on every section are the most common generated-motion tell.
2. **Motion that answers an action** (opening, marking read, completing a chapter) is welcome; ambient motion is limited to the cast, which already has it.
3. **CSS first.** Everything in the catalogue below is achievable without a library, keeps the JS budget for the reader's real work, and cannot block the main thread.
4. **Cheap properties only:** `transform`, `opacity`, `clip-path`. Never animate `backdrop-filter`, `box-shadow` on large surfaces, `height`, or `filter`.
5. **Nothing moves in the reading column except the entry that is arriving**, and never body text.
6. **Every animation has a reduced-motion answer** and is off when the mode says so.

### 5.2 Motion tokens

```css
:root {
  --dur-micro:  120ms;  --dur-quick: 180ms;  --dur-base: 260ms;
  --dur-settle: 420ms;  --dur-page:  520ms;

  --ease-out:   cubic-bezier(0.22, 1, 0.36, 1);
  --ease-inout: cubic-bezier(0.65, 0, 0.35, 1);

  /* Real springs via linear() — a damped spring sampled at 1% steps.
     Josh Comeau's generator produces these; 11 points is enough for a UI. */
  --spring-press: linear(0, 0.019, 0.075 2.1%, 0.166 3.3%, 0.352 5.6%,
    0.562 8.4%, 0.756 11.7%, 0.898 15.4%, 0.985 19.6%, 1.028 24.4%,
    1.036 30.1%, 1.022 37%, 1.008 47%, 1.001 60%, 0.999 78%, 1);
  --spring-arrive: linear(0, 0.004, 0.016, 0.035 3.6%, 0.062 4.9%,
    0.113 6.5%, 0.262 10.4%, 0.454 14.9%, 0.643 19.8%, 0.792 25.1%,
    0.895 30.6%, 0.964 36.9%, 1.004 44.6%, 1.014 53.4%, 1.006 64.5%,
    1 78.2%, 0.999 100%);
}
```

(Exact curves to be regenerated from the model in the citation, not hand-tuned.)

### 5.3 The signature moment — "the page is set"

Fires once, on every route change, in 520ms total, on three layers only:

1. **0-180ms** — the running-head hairline draws left to right (`scaleX(0) -> 1`, `--spring-arrive`), origin left.
2. **80-380ms** — the chapter numeral and title arrive with a `clip-path` reveal (`inset(0 100% 0 0)` -> `inset(0)`) and 6px of upward travel. Text is fully present in the DOM and selectable throughout.
3. **260-520ms** — the first entry's grade stamp presses in: `scale(1.16) rotate(1.5deg)` -> `scale(1) rotate(1.5deg)`, `--spring-press`, plus a 40ms `opacity` ramp on the stamp only.

Nothing else on the page animates on arrival. Subsequent entries do not stagger in — they are already there, and scroll-linked motion handles them (5.4.1).

### 5.4 Technique catalogue

Each of these is a concrete change with a fallback and a failure mode.

**5.4.1 Scroll-linked entry (CSS `animation-timeline: view()`) — the biggest quality-per-byte win**

Tip entries fade and rise 8px as they enter the viewport, tied to scroll position rather than time. No JS, no observer, no layout thrash.

```css
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .tip-card {
      animation: entry-in linear both;
      animation-timeline: view();
      animation-range: entry 0% entry 60%;
    }
  }
}
@keyframes entry-in {
  from { opacity: 0.001; transform: translateY(10px); }
  to   { opacity: 1;     transform: translateY(0); }
}
```

Support: Chrome/Edge 115+, Safari 26, Firefox 144 (shipped 2026); the `@supports` block means older engines simply get the static page. **Constraint to respect:** `animation-range: entry` must not be applied to anything inside the reading column that the comic layer gates (check 9: "no character or burst inside the reading column"), and the effect must not fire when Comic Effects is off if the reviewer counts it as comic motion — I am treating it as editorial motion, not comic motion, but the classification should be confirmed.

**5.4.2 Scroll-linked reading progress**

The sticky chapter header gains a 2px progress rule whose `scaleX` is driven by `scroll-timeline` on the root scroller — no scroll listener, no rAF.

```css
.sticky-chapter-header { position: sticky; top: 0; z-index: 50; }
.chapter-progress-rule { transform-origin: left; will-change: transform; }
@supports (animation-timeline: scroll()) {
  .chapter-progress-rule {
    animation: progress-grow linear both;
    animation-timeline: scroll(root block);
  }
}
@keyframes progress-grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
```

**5.4.3 Persistent chrome across navigations (the fix for defect 2)**

Astro's `ClientRouter` animates the whole `root` because nothing is named. Name the chrome, and transition only the content:

```astro
<!-- BaseLayout.astro -->
<LeftRail currentPath={currentPath} transition:persist />
<BottomNav currentPath={currentPath} transition:persist />
```

```css
.left-rail    { view-transition-name: rail; }
.bottom-nav   { view-transition-name: nav; }
.sticky-chapter-header { view-transition-name: chapter-head; }
/* everything else stays unnamed and inside root */
::view-transition-old(root) { animation: content-out 260ms var(--ease-out) both; }
::view-transition-new(root) { animation: content-in 320ms var(--ease-out) both; }
@keyframes content-out { to { opacity: 0; transform: translateY(-6px); } }
@keyframes content-in  { from { opacity: 0; transform: translateY(8px); } }
```

This also fixes defect 1: one definition, in one file, tokenised.

**5.4.4 Stamp press with a real spring**

```css
.grade-stamp { transition: transform var(--dur-quick) var(--spring-press); }
.tip-card[data-read="true"] .grade-stamp { transform: rotate(1.5deg) scale(1.02); }
```

Cheap, and it is the single most on-brand micro-motion: a stamp is pressed, not faded.

**5.4.5 Drawer and sheet transitions with `@starting-style` (replaces JS height animation)**

```css
.sources-drawer {
  transition: height var(--dur-base) var(--ease-out),
              opacity var(--dur-quick) var(--ease-out),
              display var(--dur-base) allow-discrete;
}
@starting-style { .sources-drawer[open] { height: 0; opacity: 0; } }
```

Same for `SettingsSheet` (bottom sheet: translateY(12px) + opacity, 260ms). This removes a class of jank from the two most-tapped surfaces on the site, and reduces motion JS rather than adding it.

**5.4.6 Number roll for folios and counts (optional)**

`font-variant-numeric: tabular-nums` plus a `clip-path` slide between two stacked digits on the progress ring's count only. One element, once per state change. Do not apply to tip numbers inside the reading column.

**5.4.7 Comic layer (unchanged, but honest)**

The cast keeps `charBob`, `bubblePop`, `sfx-fly` and the particle burst. Two changes only: (a) fix the toggle so `data-comic-effects="off"` actually hides them — this is defect 3 and it is required by check 8; (b) replace the three near-identical cubic-béziers with `--spring-press` / `--spring-arrive` so the comic motion shares the site's timing language. Nothing new is added to the cast, and nothing crosses into the reading column.

### 5.5 Library decision — do not add one

| Option | Approx. cost (gzip, tree-shaken) | Verdict |
| --- | --- | --- |
| Motion (`motion` / formerly Motion One) | ~12-18 KB for `animate` + `scroll` + springs | Not needed. Its advantages are spring physics, scroll springs and FLIP — springs are now in CSS via `linear()`, scroll-linked animation is native, and nothing here needs FLIP. |
| GSAP (core + ScrollTrigger) | ~23-30 KB+ | No. ScrollTrigger exists to compensate for browser gaps that are closed in 2026. |
| Lenis / smooth scroller | ~3-6 KB | **Explicitly forbidden** by `AGENTS.md` ("no scroll hijacking"). |
| Custom FLIP for the bead map | ~2-3 KB of the existing vanilla budget | The only library-shaped gap. Defer to Phase 4, build only if the map's filter interaction proves to need it. |
| Nothing | **0 KB** | Recommended for Phases 1-3. |

The budget is not the reason — 46 KB of JS headroom exists. The reasons are: every native technique above degrades safely when unsupported; a library adds a hydration/init path on a static site; and a 3 KB hand-written utility is auditable in a way 18 KB of someone else's scheduler is not.

### 5.6 Reduced-motion and mode matrix

The site has four independent state signals. Every animation must define its answer for all four.

| Signal | Set by | Semantic |
| --- | --- | --- |
| `prefers-reduced-motion: reduce` | OS | Remove all non-essential motion |
| `data-comic-effects="off"` | Settings sheet | Remove cast, bursts, SFX |
| `data-reduce-transparency="true"` | Settings sheet | Remove blur |
| `data-calm-chapter="true"` | `calmChapters` | Sensitive chapter: no cast, no bursts |

| Animation | reduced-motion | comic off | calm chapter | reduce-transparency |
| --- | --- | --- | --- | --- |
| Signature "set the page" | becomes 120ms opacity only | unchanged | unchanged | unchanged |
| Scroll entry rise | disabled (content static) | unchanged | disabled | unchanged |
| Progress rule | unchanged (positional, not decorative) | unchanged | unchanged | unchanged |
| Stamp press | opacity flip only | unchanged | unchanged | unchanged |
| Drawer / sheet | 120ms opacity, no height travel | unchanged | unchanged | unchanged |
| Cast bob / bubble pop / SFX | static | hidden | hidden | unchanged |
| View transition | 150ms cross-fade (already exists) | unchanged | unchanged | unchanged |

### 5.7 Performance guardrails (these are the numbers the gate checks)

1. **`backdrop-filter` surfaces per page: <= 2.** Enforced by the material ladder. This is the single biggest win on a mid-range Android.
2. **Concurrent animations: <= 2** at any moment. Scroll-linked entry could otherwise animate 24 cards at once — it does not, because off-screen entries are not rendered (see 3).
3. **`content-visibility: auto` with `contain-intrinsic-size`** on `.tip-card` above the first screen. Long chapters are 24+ cards; this is what keeps the 50ms task budget in check 9.
4. **`will-change` only on the three persistent chrome layers**, never on list items.
5. **No animation of `backdrop-filter`, `box-shadow`, `height` on glass surfaces.** The existing `.liquid-glass:active` animates `box-shadow`; it is a 150ms transform+shadow on a small element, acceptable, but must not spread.
6. **Verify with Lighthouse mobile after each phase**, not at the end. The gate is >= 90.

---

## 6. Implementation plan

Seven phases. Each is independently reviewable, independently revertible, and leaves the build green.

### Phase 0 — Baseline (no visual change)

1. `npm run build && npm run verify` and record: page count, JS gzip total, CSS bytes per page, font bytes.
2. Run `npx playwright test` on all four viewports; record pass count.
3. **Capture screenshots** at 360/390/768/1440, light and dark, comic on/off — `reports/screenshots/redesign-baseline-*`. *(Requires a human or an image-capable model to review; this session cannot.)*
4. Record Lighthouse mobile (perf/a11y/BP/SEO) for home, a chapter, and progress.

Output: `reports/redesign-baseline.md`. This is the evidence file that later phases are compared against.

### Phase 1 — Token consolidation (no visual change)

Files: `src/styles/tokens.css`, `src/styles/ui.css`, `src/layouts/BaseLayout.astro`.

1. Add the surface ladder, ink ladder, and spacing scale as **additions**.
2. Alias the duplicates rather than deleting them in this phase (`--duration-fast: var(--dur-fast)` already exists — do it for `--spring-overshoot`, `--ease-spring`, `--content-max`).
3. Collapse view transitions to one definition; delete `comic.css:97-143` keyframes and keep a single tokenised pair in `BaseLayout.astro`.
4. Verify: build + verify + tests unchanged; screenshot diff should be zero.

### Phase 2 — Typography

Files: `fonts.css`, `tokens.css`, plus weight declarations across `index.astro`, `TipCard.astro`, `ui.css`, `LeftRail.astro`, `BottomNav.astro`, `SettingsSheet.astro`.

1. Inspect the Bricolage variable axis; correct the `@font-face` range.
2. Map every `font-weight: 800` to either 700 (labels) or the new display face. Target: <= 3 uses of the heaviest weight on any page.
3. Add the scale `--text-folio` ... `--text-display`; replace ad-hoc `rem` sizes.
4. If T1 is approved: add `newsreader.woff2` (subset), `font-optical-sizing: auto`, and use it for h1/h2 and chapter numerals only.
5. Verify: `npm run check`, build, and **contrast re-check** on every new text/background pair (the gate is 7:1 for tip cards).

### Phase 3 — Material and layout

Files: `glass.css`, `ui.css`, `TipCard.astro`, `index.astro`, `chapters/[n]-[slug].astro`, `explore.astro`, `india.astro`, `progress.astro`.

1. Add `.surface-paper`, `.surface-plate`; migrate panels off `.liquid-glass` in this order: home panels -> chapter cards -> explore/india blocks. Keep glass on chrome only.
2. Radius collapse to three values.
3. Tip card: folio, stamp, ruled metrics table, hairline. Markup changes are class-level only — every `data-*` attribute, id and anchor stays.
4. Chapter opener block (new markup, no new data).
5. Verify: touch targets >= 44px at 360px; zero horizontal overflow; 0 CJK in dist; link checker; both Playwright suites.

### Phase 4 — The signature moment and page transitions

Files: `BaseLayout.astro`, `comic.css`, `chapters/[n]-[slug].astro`, `LeftRail.astro`, `BottomNav.astro`.

1. Add `transition:persist` to rail and nav; add `view-transition-name`.
2. Delete the root-wide wipe; implement content out/in.
3. Chapter opener reveal (clip-path + travel), gated by reduced motion.
4. Verify: navigate between all 52 routes; assert no layout shift (CLS via Lighthouse), no double-render, and that the rail does not flash.

### Phase 5 — Scroll-linked motion and drawers

Files: `chapters/[n]-[slug].astro`, `TipCard.astro`, `SettingsSheet.astro`.

1. Progress rule with `scroll-timeline`.
2. Entry reveal with `view()`, `@supports` gated, plus `content-visibility`.
3. `@starting-style` for sources drawer and settings sheet; remove the JS height animation.
4. Verify: throttle CPU 4x in DevTools; confirm no task > 50ms during a route transition (check 9); confirm drawer still opens/closes and focus management is unchanged.

### Phase 6 — Comic layer correctness and springs

Files: `Bubble.astro`, `Character.astro`, `SettingsSheet.astro`, `comic.css`.

1. Fix the toggle: write `"false"` (or change both selectors to `"off"` — prefer fixing the *reader*, i.e. make CSS match the writer: `[data-comic-effects="off"]`).
2. Spring tokens replace the three cubic-béziers.
3. Verify: comic off removes every character, burst and SFX on all pages (check 8); calm chapters render with no cast.

### Phase 7 — Verification and handoff

1. Full gate: `npm run build`, `verify`, `check`, `check:links`, `scan:terms`, Playwright x4 viewports, Lighthouse x3 pages.
2. Update `reports/qa.md` with before/after numbers; add `reports/redesign-after.md`.
3. Update `CHANGELOG.md` and `DECISIONS.md` (record why no animation library, why the footer/reading-column rules stayed).

**Files not touched, by rule:** `scripts/*`, `data/*`, `tests/*`, `source/`, `astro.config.mjs`, `src/pages/about.astro` legal text, every `tip.*` content field, the consent/attribution strings, the palette hues.

---

## 7. Risks, and what could turn an acceptance check red

| Proposed change | Check at risk | Mitigation |
| --- | --- | --- |
| New display face | Budgets (perf >= 90) | Subset, self-host, measure; gate: total fonts <= 260 KB; abort to T0 if Lighthouse < 90 |
| Scroll-linked entry | Motion (no task > 50ms) | CSS-only, `content-visibility`, `@supports` gate; tested under 4x CPU throttle |
| Persistent chrome via `transition:persist` | Playwright (progress persists, nav works) | Rail/nav hold no state beyond `currentPath`; re-assert active state on `astro:page-load` |
| Removing glass from panels | Comic layer (no halftone/ink in reading column) | Unchanged — halftone was never on panels |
| Weight reduction to 700 | A11y contrast | Recheck 7:1 on tip cards; weight change does not alter colour |
| Fixing the comic toggle | **Check 8 — currently failing** | This is a fix, and it makes an existing promise true; flag it in the PR separately from the redesign |
| Drawer CSS transitions | Playwright (sources drawer opens) | Keep the JS focus trap; only the visual transition moves to CSS |
| New tokens | Nothing | Additive only in Phase 1; removals deferred to Phase 3 with an alias first |

**Conflicts in the brief that need a ruling**

1. "Richer animations" vs `AGENTS.md`: "no task over 50ms during transitions", "don't animate body text", "no scroll hijacking". The proposal resolves this by putting all motion on transform/opacity/clip-path driven by the compositor, and by keeping the reading column static.
2. "Prefer no third-party requests" (privacy) vs a new typeface. Resolved by self-hosting; no CDN.
3. "Full visual overhaul" vs "do not change palette, layout, navigation, features ... for the sake of the comic layer". The comic layer is not being changed for the redesign's sake — it is being corrected. Everything else is layout-adjacent but not navigation-changing.
4. A **motion setting** in the settings sheet would be the honest way to let readers opt out beyond the OS setting. It is a *new feature*, so it is **out of scope** unless you approve it explicitly.

---

## 8. Explicitly out of scope

- No new pages, routes, features, settings, or data.
- No change to navigation structure, information architecture, or the comic cast's behaviour (other than the toggle fix).
- No change to palette hues, body font size, or line-height.
- No analytics, no scroll hijacking, no smooth-scroll library, no parallax, no cursor effects, no WebGL, no Lottie, no raster character art.
- No animation inside the reading column except entry arrival; no animation of body text.
- No copy changes to tips, sources, legal strings. Where copy is proposed (running heads, folios) it is *chrome*, not content, and it must pass the 0-CJK and glossary checks.

---

## 9. Sources

Research was gathered via web search; each claim above that depends on an external fact cites one of these.

1. Josh W. Comeau, *Springs and Bounces in Native CSS* — `linear()` easing, spring sampling, why it replaces JS spring libraries. https://www.joshwcomeau.com/animation/linear-timing-function
2. Carmen Ansio, *Spring Animations in Pure CSS with linear()* — practical generator and curve shapes. https://www.carmenansio.com/articles/spring-physics-css
3. Trade Assistance, *Cross-Document View Transitions Are Finally Cross-Browser: A Practical Guide for 2026* — Chrome 126+, Safari 18.2+, `view-transition-name` for morphing persistent elements. https://trade-assistance.com/blog/cross-document-view-transitions-mpa-2026
4. Astro docs, *View transitions* — `ClientRouter`, `transition:persist`, `transition:animate`, custom animations. https://docs.astro.build/en/guides/view-transitions
5. CoderCops, *CSS View Transitions and Scroll-Driven Animations (2026)* — "by May 2026 all three major browsers support both modes, covering over 95% of global traffic". https://blog.codercops.com/blog/css-view-transitions-scroll-driven-animations-2026
6. DEV Community, *Mastering CSS Scroll Timeline* — `animation-timeline`, `animation-range`, `scroll()` vs `view()`. https://dev.to/softheartengineer/mastering-css-scroll-timeline-a-complete-guide-to-animation-on-scroll-in-2025-3g7p
7. web.dev, *Animation and motion* (Learn Accessibility) — media queries, pause/stop, avoiding infinite loops. https://web.dev/learn/accessibility/motion
8. W3C WAI, *Understanding SC 2.3.3: Animation from Interactions*. https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions
9. mironsoft, *CSS backdrop-filter and Glassmorphism: performance fallbacks* — blur is the most expensive filter function; GPU cost rationale for the material ladder. https://www.mironsoft.de/en/blog/css-backdrop-filter-frosted-glass-effects
10. Motion docs, *GSAP vs Motion* and *Migrate from GSAP to Motion* — bundle-size comparison used in the library decision. https://motion.dev/docs/gsap-vs-motion
11. themex.studio, *Editorial web design trends that put words first* — restraint, anti-card-grid, type-led editorial. https://themex.studio/guides/editorial-web-design-trends-that-put-words-first/
12. Laarpi, *Editorial Luxe style* — the display-serif reference direction (used only as a comparison, not copied). https://laarpi.com/styles/editorial-luxe

---

## 10. Execution checklist

- [x] Existing repository inspected and key assets identified — §2, with file:line references and measured byte counts.
- [x] Premium visual concepts generated — §3, three directions, each grounded in the subject, with a recommendation.
- [x] Animation enhancements outlined — §5, seven techniques, tokens, mode matrix, guardrails.
- [x] Research sources gathered and cited — §9, 12 sources.
- [x] Redesign proposal compiled in markdown — this document.
- [x] No unrelated code changes suggested — §8, plus the "files not touched" list in §6.
- [ ] Phase 0 baseline screenshots reviewed by a human or image-capable model — **blocked on this session's model**.
- [ ] Approval of direction A and the T0/T1 type decision — **blocked on you**.

---

## 11. What I need from you

1. **Direction:** A (Field Guide), B (Midnight Ledger), or a mix. I recommend A.
2. **Type:** T0 (no new face, free) or T1 (Newsreader display, ~30 KB). I recommend T1, with T0 as the fallback if the Lighthouse gate slips.
3. **The comic toggle bug:** may I fix it as part of this work? It is currently a failing acceptance criterion (check 8), and it is not a redesign idea.
4. **Optional motion setting:** in or out? Out by default.
