# Architecture & Project Decisions

## ADR-001: Hybrid Translation Strategy (Option 2)
- **Context:** Translating ~600k–700k English words across 34 chapters (765 tips) from scratch requires significant API spend and execution time.
- **Decision:** Ingest the CC BY 4.0 English dataset from `parveen0029/The-Evidence-Based-Life` containing all 765 tips matching the chapter structure. Apply normalization, glossary consistency checks, and a humanizing refinement pass to fix stripped citations and enforce direct second-person style.
- **Consequences:** Saves 8–12 hours of API run time and eliminates unnecessary LLM translation cost while retaining strict alignment with the Chinese source.

## ADR-002: Humanizer Integration
- **Context:** Machine/LLM-generated translations frequently introduce AI tells (staged run-ups, forced triads, dramatic one-line closers).
- **Decision:** Install `blader/humanizer` into `.agents/skills/humanizer/SKILL.md`. Enforce that humanizer edits apply strictly to prose rhythm and natural phrasing, leaving numbers, percentages, units, currency (¥ RMB), DOIs, and URLs unchanged.
- **Consequences:** Consistent, natural voice across tips without violating faithful translation non-negotiables.

## ADR-003: Typeface Roles
- **Context:** The site requires a distinct reading serif, a clean UI sans, and a comic display font.
- **Decision:** Self-host:
  - Reading serif: **Literata** (body 17–18px, line-height 1.7, 60–68 char measure).
  - UI sans: **Bricolage Grotesque** (navigation, chips, metadata).
  - Comic display: **Lilita One** (<25KB, Latin subset) strictly for SFX stickers, speech bubbles, splash titles, and Home headline.
- **Consequences:** Zero external font dependencies, no layout shift (`font-display: swap`), strict typography discipline.

## ADR-004: Liquid Glass vs. Fake Glass Performance Boundary
- **Context:** Applying `backdrop-filter: blur(24px)` across 765 scrolling tip cards causes severe GPU lag and breaks 60fps mobile budgets.
- **Decision:** Real Liquid Glass (`backdrop-filter: blur(24px) saturate(180%) brightness(1.06)`) is restricted to floating nav bar, sheets, and modal dialogs (maximum 3 active surfaces). Tip cards use opaque "fake glass" backgrounds with static lighting highlights to preserve 60fps and guarantee $\ge 7:1$ text contrast.
- **Consequences:** Flawless mobile scroll performance with near-zero CLS.

## ADR-005: Initial Calm Mode Chapters
- **Context:** The comic cast and particle celebrations must not appear on chapters covering heavy topics.
- **Decision:** Chapters 1, 13, 16, 25, 28, 29, 30, and 33 run in Calm Mode (`data/calm-chapters.json`), disabling Plus & Minus, SFX stickers, and particle bursts in favor of a quiet glow.
- **Consequences:** Respectful reader experience on sensitive topics.

## ADR-006: Batched Progressive Feed Rendering & Touch Target Expansion
- **Context:** Rendering 765 recommendation cards synchronously in `explore.astro` created over 23,000 DOM nodes, causing stutter on mobile typing and filter switching. Furthermore, dense elements like the 14px beads in `ReadingMap.astro` were difficult to tap accurately on small mobile touchscreens.
- **Decision:**
  - Implement batched progressive display in `explore.astro` using an initial 25-card slice and an `IntersectionObserver` sentinel that progressively unhides subsequent batches on scroll, paired with 120ms debounce and `requestAnimationFrame`.
  - Use `::after` absolute pseudo-elements (`44px × 44px`) to expand interactive hit areas without altering the compact visual aesthetic of the bead field.
- **Consequences:** 60fps filter transitions, zero keyboard lag, and full WCAG 2.5.5 / Section 10 touch compliance across all mobile viewports down to 360px.

## ADR-007: Material Ladder Replaces the Fake-Glass Card
- **Context:** ADR-004 kept real `backdrop-filter` on chrome and used `.fake-glass` for the 765 tip cards. In practice `.fake-glass` was still a lit surface — jade-tinted border, a white top bevel and a drop shadow — so every tip read as a floating glass tile, and the card carried six nested rounded boxes (badges, chips, two metric blocks, a caveats panel, a sources drawer) inside a seventh.
- **Decision:** Introduce a two-step material ladder in `src/styles/ui.css`: `.paper` (hairline border, card background, no shadow) for content surfaces and `.plate` (same plus a 2px jade top edge) for one emphasised panel per page. Tip cards, pagination cards and the home panels move to `.paper`; the tip card overrides its background to `--theme-card-strong` so body copy keeps its 7:1 margin. `backdrop-filter` is now chrome only: sticky chapter header, bottom nav, settings sheet, reading map.
- **Consequences:** Fewer compositor layers while scrolling, one consistent border vocabulary across the site, and content surfaces that read as pages rather than tiles. Contrast is unchanged because the background is opaque and the text tokens did not move. ADR-004's performance boundary still holds; its material choice for content surfaces is superseded by this entry.

## ADR-008: Type Roles Are Serif for Reading, Sans for Labels
- **Context:** Measured from the shipped `fvar` tables, `literata-regular.woff2` carries `opsz 7–72, wght 400–900` and `bricolage-grotesque.woff2` carries `opsz 12–96, wght 200–800`, but `@font-face` declared only `400` for Literata and `400 700` for Bricolage. Every `font-weight: 800` was therefore clamped to 700, and bold Literata in body copy was browser-synthesised.
- **Decision:** Declare the real ranges in `src/styles/fonts.css`. Give headline duty to the reading serif — chapter titles and all 765 tip titles are Literata 600 — and keep Bricolage for labels, chrome, metadata and numerals. No font file is added, so the 221,088 B payload and the privacy rule are untouched.
- **Consequences:** Headlines are heavier than before (real 600, not synthesised), and the reading voice and the headline voice are the same face. Labels stay sans and tracked, which keeps the two roles legible at a glance. The italic file still has no `wght` axis; declared as 400 only.

## ADR-009: View Transitions Are Cut Into Named Groups
- **Context:** Route transitions were defined twice — once in a scoped `<style>` block in `BaseLayout.astro`, where they could never match, and once globally in `comic.css`. The live copy animated the root group with a translate and a rotation, which moved the left rail, the bottom nav and the sticky chapter header along with the page.
- **Decision:** Name three groups in `comic.css`: `chrome-rail`, `chrome-nav`, `reading-column`. Root and chrome hold still; the reading column leaves in 130 ms and arrives in 260 ms, transform and opacity only. Reduced motion collapses the duration to 1 ms. The dead scoped block is deleted rather than repaired.
- **Consequences:** Navigation now reads as the page changing rather than the window lurching, and the animation is compositor-only. Acceptance Check 9 ("panel wipe or fade fallback, no layout shift") is satisfied by the fade fallback; no scroll-linked or JS-driven motion was added.
