# Changelog

All notable changes to the **How To Live Better** project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
