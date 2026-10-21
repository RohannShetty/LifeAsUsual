# Changelog

All notable changes to the **How To Live Better** project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.3.0] - 2026-10-21

India edition: an India policy crosswalk, a dated INR reference, a per-tip India application layer, and a mobile-first redesign of the reading experience.

### Added
- **India edition page** (`/india/`): 20 policy mappings, 10 China-to-India helpline mappings, 12 China-heavy chapters and 18 official Indian sources.
- **Dated INR reference**: every RMB amount can show an indicative `≈ ₹` badge at ¥1 ≈ ₹14.21 (21 October 2026), with a Reading Settings toggle and a clear non-transaction-rate disclaimer.
- **Per-tip India application**: all 765 tips carry a collapsed 34-chapter India note; tips naming a Chinese rule or hotline get a `China-specific` badge.
- **India hotline notes**: 120/110/119/12308/12315/12348/12356/96110 are mapped to Indian equivalents inside the relevant cards.
- **Rewrite worklist**: `reports/india-rewrite-worklist.csv` classifies 129 high-risk claims, 451 context-only tips and 185 universal tips.
- **Guided finder**: a three-question flow that links to a pre-filtered Explore result.
- **Four theme palettes**: Midnight Jade and Monsoon Ink (dark), Pearl and Ivory Clove (light).
- **India notice component** and a new favicon.

### Changed
- **Mobile home**: compact hero, one cast note, daily tip above the fold, compact progress strip, finder and map teaser; page height roughly halved.
- **Explore**: nine filter rows collapsed into a filter sheet with quick chips, active-filter count and a live result footer.
- **Chapter and tip cards**: tighter reading column, chip-based metadata, slimmer source notice and an auto-hiding bottom nav.
- **Navigation**: four tabs plus a settings gear; desktop rail gains an India Edition entry.
- **Settings**: palette grid, INR toggle and a cookie-free reading-memory note.

### Fixed
- **Light-theme scoped selectors**: Astro had scoped `[data-theme="light"]` ancestors to the component, so light ring tracks and light card borders never applied. Global ancestors restore the intended light theme.
- **Cast orphans**: dismissing a speech bubble now removes the whole note row.
- **India chapter links**: removed a doubled chapter-number prefix.
- **Favicon**: added `public/favicon.svg`; all internal links now resolve.

### Verified
- `npm run build`: 52 pages.
- `npm run verify`: 34/34 chapters, 765/765 tips, 0 CJK.
- `npm run check`: 0 errors.
- 0 broken internal links across 52 pages.
- Chrome/OpenCLI: all four palettes, INR toggle, guide finder, filters, read-state persistence and nav auto-hide.

---

## [2.2.1] - 2026-10-20

Accessibility and design-system repair following a full technical audit of the 2.2.0 redesign.

### Fixed
- **Invisible Headings in the Default Dark Theme (P1)**: 22 declarations across 13 files pointed body-level text at `--color-ink` (`#04110F`), which is an outline colour, not a text colour on a dark surface. Page titles, section titles, card headings, callouts, comic bubbles and secondary buttons rendered at **1.02–1.05:1**. They now use `--theme-text`; ink is kept only on jade, amber and steel fills where it belongs.
- **Nine Undefined Design Tokens (P1)**: `--color-glass-fill`, `--color-glass-border`, `--shadow-glass`, `--radius-sm`, `--duration-fast`, `--font-display`, `--font-body` and `--color-ink-muted` were referenced but never defined, so cards lost their fills, borders, shadows and radii, transitions never ran, and every display heading silently fell back to the body serif. Defined in `src/styles/tokens.css`, with light-theme values for the glass and shadow tokens.
- **Light-Theme Accent Contrast (P2)**: Accent colours used as text now resolve through new `--color-jade-text`, `--color-amber-text` and `--color-steel-text` tokens, which keep the luminous accents in dark mode and darken them under `[data-theme="light"]`. Disputed and verifying badges gained explicit light-theme inks.
- **Heading Hierarchy (P2)**: Chapter pages opened with an `h2` before the `h1`, and tip titles were `h3` directly under page headings. The duplicate chapter kicker is now a paragraph, and tip titles, the Reading Map title and the empty-state title are `h2`. First heading on every route is now `h1`.
- **Reading Settings Switch Focus and Hit Area (P2)**: `.switch-input` used `outline: none` with `appearance: none` and no replacement, and its 44×24 box was under the tap floor. Rebuilt as a 44×44 target with track and knob pseudo-elements and a `:focus-visible` ring. The Explore search input no longer suppresses its focus ring either.
- **Missing Skip Link and Unlabeled Landmarks (P2)**: Added a focus-revealed `.skip-link` to `#main-content`, and `aria-label="Sections"` to the desktop rail navigation so both `<nav>` landmarks are named.
- **Remaining Touch Targets (P1)**: Citation links gained `min-height: 44px`; bottom-nav labels and the `v2` sticker were raised from 10.4px to the 11px functional-text floor.
- **`ProgressRing` Prop Mismatch**: Removed the unsupported `showPercentage` prop from `src/pages/progress.astro`, which astro check reported as `ts(2322)`.

### Added
- **`npm run check`**: `@astrojs/check` is now a dev dependency, so `.astro` files are type-checked in CI and locally alongside `tsc`.
- `.codegraph/` and `graphify-out/` added to `.gitignore`.

### Verified
- astro check: 46 files, 0 errors, 0 warnings.
- Rendered contrast probe, dark theme: **0 failures across 8 routes × 2 viewports**.
- Playwright E2E: 24/24 passing.
- Impeccable detector on `dist/`: 758 → 177 findings; `low-contrast` 292 → 52, `undersized-ui-text` 306 → 0, `skipped-heading` 36 → 1.

---

## [2.2.0] - 2026-10-20

### Added
- **Mobile-First Auto-Hiding Sticky Header**: Smart directional scroll auto-hiding for chapter headers (`src/pages/chapters/[n]-[slug].astro`) on mobile screens to maximize vertical reading area and prevent viewport letterboxing.
- **$\ge 44\text{px}$ Touch Targets Across Navigation & Drawers**:
  - Expanded Table of Contents drawer links (`.toc-link`) with `10px 12px` padding and `min-height: 44px`.
  - Enforced accessible $\ge 44\text{px}$ touch target areas across `.action-btn-primary`, `.action-btn-secondary`, `.read-tip-cta`, and `.shortcut-card`.
- **Client-Side Pagefind Search Scope**: Attached `data-pagefind-body` to `<main class="reading-column">` in `BaseLayout.astro` ensuring search indexer captures reader content accurately.
- **Design & Audit Skills**: Installed `frontend-design` and `impeccable` agent skills to guide visual hierarchy and automated anti-pattern detection.

### Changed
- **Editorial Typography & De-slopping Redesign**:
  - Redesigned `TipCard.astro` to a clean editorial format: grouped top badges (ROI + Evidence Grade only), unified single-line metadata bar (Cost, Time, Effort, Scope), and enhanced serif reading typography (`1.05rem`, line-height `1.65`).
  - Eliminated generic colored `border-left` side-tab accents on caveat boxes, about page quotes, and tip cards; replaced with subtle 1px borders and refined background tints.
  - Replaced bounce and spring overshoot easing curves (`cubic-bezier(0.34, 1.3, 0.64, 1)`) with smooth natural deceleration (`cubic-bezier(0.16, 1, 0.3, 1)`) across `tokens.css`, `comic.css`, and drawer/navigation transitions.

### Fixed
- **Critical P0 Read Tracker Reconnection**: Connected `read-tracker.ts` inside `BaseLayout.astro`, fixing the defect where tip impression tracking, reading duration logging, and "Save to Picks" event delegation were inactive during client navigation.
- **Homepage Resume Reading Navigation**: Resolved broken `-slug` routing bug in `src/pages/index.astro` by dynamically resolving chapter numbers to their actual URL slugs via `data-slug-map`.

---

## [2.1.0] - 2026-10-20

### Added
- **Complete Explore Filter Dimensions**:
  - **Target Audience** chip filters covering all 7 book segments: Pregnant / Planning, Child < 3, Child 3–18, Elderly at home, Age 35+, Age 60+, and Women.
  - **Time Cost** filter chips: Quick, A few hours, and Takes time daily.
  - **Willpower Required** filter chips: None needed, Some, and A lot.
  - **Editorial Verification Status** chips: Disputed (88 tips) with distinct highlight styling and Still Verifying (3 tips).
  - Serialized all corresponding metadata attributes (`data-time`, `data-willpower`, `data-audience`, `data-disputed`, `data-verifying`) to `.explore-tip-item`.
- **Progressive Batch Rendering & Feed Optimization**:
  - Replaced synchronous full-DOM feed unhiding with progressive slice rendering (25 cards per batch) coordinated by an `#explore-scroll-sentinel` and `IntersectionObserver`.
  - Added 120ms debounce and `requestAnimationFrame` loop around search and filter execution to guarantee stutter-free typing on mobile devices.
  - Added CSS `content-visibility: auto` and `contain-intrinsic-size: 1px 360px` to isolate feed card layout passes.
- **Liquid Glass System Refinements**:
  - Embedded a 2% opacity fractal noise SVG data URI on `.liquid-glass` to eliminate OLED dark gradient banding.
  - Tuned directional 135-degree rim lighting (35% white top-left fading to 6% bottom-right) and 135-degree specular sheen (25% to 0%).
  - Added high-contrast opaque fallback styles for `[data-reduce-transparency="true"]` to instantly honor the Reading Settings switch.
- **Touch Target Hitbox Expansion**:
  - Added `::after` pseudo-element hitboxes (`min-width: 44px; min-height: 44px`) to all 765 `.map-bead` elements in `ReadingMap.astro`.
  - Enforced 44px minimum height and touch hitboxes on `.filter-chip`, `.close-btn`, `.toggle-pill`, `.on-page-btn`, and disclaimer dismiss controls.
- **Automated E2E Testing Harness**:
  - Added automated `webServer` provisioning (`npx astro preview --port 4321`) to `playwright.config.ts`.

### Changed
- **Fluid Typography**:
  - Replaced static `2.8rem` font sizing on `.home-headline` with `clamp(2rem, 7vw, 2.85rem)` and `overflow-wrap: break-word`.
  - Replaced static `2.1rem` font sizing on `.chapter-main-title` with `clamp(1.65rem, 5.5vw, 2.3rem)` to guarantee zero horizontal overflow at 360px.
- **Mobile Bottom Navigation**:
  - Added responsive media queries for narrow `<= 375px` screens to optimize capsule height, padding, and optical icon spacing without clipping.

### Fixed
- Fixed reading streak display in `src/pages/progress.astro` by reading `state.streak` directly as a number rather than looking for a nonexistent `.currentStreak` property.
- Fixed `dist` production build to ensure client-side JavaScript remains strictly under 25KB gzip (budget: 60KB).

---

## [2.0.0] - 2026-10-19

### Added
- Complete initial web implementation of How To Live Better (v2: Comic style on Apple-style liquid glass).
- 34 English chapters comprising 765 evidence-backed tips translated faithfully with evidence grades and value tiers.
- Plus and Minus original SVG comic cast with 6 moods and interface dialogue system.
- Offline-first progress tracking, Reading Map of 765 glass beads, Daily Quick Win, and local JSON backup/restore.