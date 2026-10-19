# Proposal: Mobile Optimization, Missing Filters, Liquid Glass Polish, and Smoothness

## Why

The current reader site contains 765 evidence-backed recommendations, but mobile readers on 360px–430px screens face accessibility and usability issues: touch targets below the 44px minimum, hardcoded non-fluid typography, and un-debounced synchronous DOM updates across 765 elements causing mobile interface stutter. Furthermore, the Explore page lacks several required filter dimensions specified in the project brief (audience, disputed status, time commitment, willpower required), the liquid glass system does not respect user transparency settings or include anti-banding treatment, and a ledger streak counter bug prevents reading habits from reflecting properly.

Resolving these issues ensures the site adheres strictly to the non-negotiables in `BRIEF.md` and `AGENTS.md` (mobile-first 360px ergonomics, zero third-party scripts, 60fps interaction budgets, and complete filter discovery).

## What Changes

- **Mobile Ergonomics & Accessibility**:
  - Enforce a minimum 44px touch hitbox on all interactive elements: `.map-bead` (via pseudo-element tap expansion), `.filter-chip`, drawer close buttons (`.close-btn`), on-page TOC buttons (`.on-page-btn`), and disclaimer dismiss controls.
  - Convert static headline sizing (`2.8rem`) in `index.astro` and chapter reader headers to fluid typography via `clamp()`.
  - Refine mobile navigation capsule padding and bottom spacing to prevent icon crowding on narrow 360px devices.
- **Explore Filtering & Discovery**:
  - Add missing filter categories to `explore.astro`: Target Audience (7 audience segments), Editorial Status (Disputed, Still being verified), Time Cost (Quick), and Willpower Cost (None needed).
  - Add corresponding data attributes (`data-time`, `data-willpower`, `data-audience`, `data-disputed`, `data-verifying`) to rendered tip items and update the filtering engine and URL synchronization.
- **Apple-Style Liquid Glass Polish**:
  - Connect the `[data-reduce-transparency="true"]` DOM state from `SettingsSheet` to `glass.css` to enable instantaneous high-contrast opaque fallbacks when transparency is disabled.
  - Implement the exact 135-degree specular sheen gradient (25% to 0%) and directional rim lighting (35% top-left fading to 6% bottom-right).
  - Add a lightweight SVG dither noise overlay (<= 2% opacity) to eliminate OLED color banding in dark gradients.
- **Rendering Performance & State Reliability**:
  - Implement batched progressive feed rendering in `explore.astro`: initially display 25 matched cards and load subsequent batches via `IntersectionObserver` sentinel on scroll.
  - Wrap search filtering in `requestAnimationFrame` with a 120ms debounce.
  - Fix the reading streak display bug in `progress.astro` by accessing `state.streak` directly instead of `state.streak.currentStreak`.

## Capabilities

### New Capabilities

- `mobile-reader-shell`: Responsive layout, minimum 44px touch targets across interactive controls, fluid typography, safe-area insets, and thumb-zone navigation.
- `recommendation-explorer`: Multi-dimensional filtering across evidence grade, ROI tier, domain scope, financial cost, time cost, willpower effort, audience segment, and editorial verification status with URL query synchronization and batched rendering.
- `liquid-glass-system`: Apple-style liquid glass design tokens, 135-degree rim lights, specular highlight sheens, anti-banding dither, concentric radii, and accessibility fallback states.

### Modified Capabilities

*(None - this is the first formal spec capture in OpenSpec)*

## Impact

- **Templates & Components**: `src/pages/explore.astro`, `src/pages/index.astro`, `src/pages/progress.astro`, `src/pages/chapters/[n]-[slug].astro`, `src/components/BottomNav.astro`, `src/components/ReadingMap.astro`, `src/components/SettingsSheet.astro`.
- **Styles**: `src/styles/glass.css`, `src/styles/tokens.css`.
- **Dependencies & Build**: No new npm dependencies. Pure CSS and vanilla TypeScript islands. Zero breaking changes to existing data schemas.
