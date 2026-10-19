# Tasks: Mobile Optimization, Extended Filters, Liquid Glass Refinement, and Rendering Smoothness

## 1. Mobile Ergonomics & Touch Target Expansion

- [x] 1.1 Add touch hitbox pseudo-elements (minimum 44x44px) to `.map-bead` in `src/components/ReadingMap.astro` and verify beads register touch without misclicks
- [x] 1.2 Enforce 44px minimum height and touch hitboxes on `.filter-chip` in `src/pages/explore.astro`, `.close-btn` and `.toggle-pill` in `src/components/SettingsSheet.astro`, and `.on-page-btn` in `src/pages/chapters/[n]-[slug].astro`
- [x] 1.3 Apply fluid typography with `clamp()` to `.home-headline` in `src/pages/index.astro` and `.chapter-main-title` in `src/pages/chapters/[n]-[slug].astro` and verify 360px viewport renders without overflow
- [x] 1.4 Refine `.nav-capsule` styling in `src/components/BottomNav.astro` with optical spacing and safe-area margin to guarantee no icon clipping on narrow 360px screens

## 2. Complete Filter Attributes & UI in Explore Page

- [x] 2.1 Update `.explore-tip-item` data attributes in `src/pages/explore.astro` to serialize `data-time`, `data-willpower`, `data-audience`, `data-disputed`, and `data-verifying`
- [x] 2.2 Add UI filter chip rows for Target Audience (7 segments), Editorial Status (Disputed, Verifying), Time Cost (Quick), and Willpower Cost (None needed) in `src/pages/explore.astro`
- [x] 2.3 Wire all newly introduced filter dimensions into active filter state management, URL search params synchronization (`updateURL()`), and `resetAll()` in `src/pages/explore.astro`

## 3. Explore Search Performance & Batched Progressive Rendering

- [x] 3.1 Implement a 120ms debounce and `requestAnimationFrame` wrapper around `applyFilters()` in `src/pages/explore.astro` to eliminate typing lag
- [x] 3.2 Implement batched progressive card reveal in `src/pages/explore.astro` with an initial slice of 25 matching items and an `IntersectionObserver` sentinel to dynamically load subsequent batches on scroll
- [x] 3.3 Ensure `.explore-tip-item` elements use `content-visibility: auto` with appropriate intrinsic dimensions to prevent layout shifts during filtering sweeps

## 4. Liquid Glass Visual Polish & Transparency Fallbacks

- [x] 4.1 Connect `[data-reduce-transparency="true"] .liquid-glass` in `src/styles/glass.css` to provide solid high-contrast opaque styling when transparency reduction is toggled in `SettingsSheet.astro`
- [x] 4.2 Refine `.liquid-glass` in `src/styles/glass.css` with 135-degree specular sheen gradient (25% to 0%) and directional rim lighting (35% top-left fading to 6% bottom-right)
- [x] 4.3 Add a lightweight SVG dither noise overlay (at 2% opacity) on `.liquid-glass` to eliminate color banding across OLED displays in dark mode

## 5. Progress Ledger Bugfix & Verification

- [x] 5.1 Fix `stat-streak-days` in `src/pages/progress.astro` to read `state.streak` directly (number) instead of `state.streak.currentStreak`
- [x] 5.2 Run Astro build (`npm run build`) and verify build succeeds with 0 errors
- [x] 5.3 Verify Explore page search and filters work correctly across all dimensions and URL parameters
- [x] 5.4 Verify mobile viewport layouts at 360px, 390px, and 768px with no horizontal overflow and all touch targets >= 44px
