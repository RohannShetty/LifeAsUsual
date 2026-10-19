# Design: Mobile Optimization, Extended Filters, Liquid Glass Refinement, and Rendering Smoothness

## Context

The reader site is built with Astro and static HTML generation, rendering 765 recommendations across 34 chapters. All client logic is written in vanilla TypeScript islands with zero runtime framework dependencies. See `proposal.md` for problem background and motivations.

## Goals / Non-Goals

**Goals:**
- Provide full 44px by 44px touch targets across all mobile viewports down to 360px without expanding visual button footprints.
- Implement all remaining filter dimensions (Audience, Editorial Status, Time Cost, Willpower) on `explore.astro` with URL synchronization.
- Implement progressive batched feed rendering on `explore.astro` to eliminate main-thread stutter during search filtering.
- Refine `glass.css` with exact directional rim lighting (135deg), specular sheen, anti-banding dither, and reactive `[data-reduce-transparency="true"]` fallback.
- Fix streak calculation rendering in `progress.astro`.

**Non-Goals:**
- No currency conversion or Indian localization (violates project non-negotiables #1, #2, #3).
- No new third-party JavaScript libraries or virtual DOM frameworks.
- No modifications to the pinned `./source` content or core data structures.

## Decisions

### 1. Touch Target Hitbox Expansion via Pseudo-Elements
- **Decision**: For dense UI elements like the 14px beads in `ReadingMap.astro` and compact chip tags, use `::after` absolute positioning with `min-width: 44px; min-height: 44px; left: 50%; top: 50%; transform: translate(-50%, -50%);` rather than increasing visual bead diameters.
- **Rationale**: Preserves the aesthetic bead field while satisfying mobile WCAG 2.5.5 / Section 10 touch target requirements.
- **Alternatives Considered**: Increasing bead size to 24px+ destroyed the visual density of the 765-bead matrix.

### 2. Batched DOM Visibility vs. Client-Side Virtual Scroll
- **Decision**: Keep static HTML cards in the DOM with `content-visibility: auto`, but control display activation via a lightweight slice/batch controller in `explore.astro`. Only the first 25 matching items are visible initially; as the reader approaches a scroll sentinel, the next batch of 25 is made visible.
- **Rationale**: True virtual scrolling breaks browser in-page search (Ctrl+F) and print stylesheets. Batched visibility preserves native scrolling and DOM accessibility while keeping layout and paint times sub-16ms.
- **Alternatives Considered**: Complete virtual list with absolute positioning (discards native DOM search and requires heavy resize listeners).

### 3. Glassmorphism Noise Overlay via Inline SVG Data URI
- **Decision**: Add a lightweight CSS background-image overlay using a data URI SVG noise filter set to 2% opacity on `.liquid-glass`.
- **Rationale**: Eliminates banding artifacts across high-resolution OLED mobile screens on dark gradients (`#08171C` to `#0F2E36`) with zero network overhead.

### 4. Debounced Filter Updates with requestAnimationFrame
- **Decision**: Debounce text input in `explore.astro` by 120ms and wrap the filtering loop in `requestAnimationFrame`.
- **Rationale**: Eliminates keystroke lag on mobile keyboards without noticeable latency.

## Risks / Trade-offs

- **[Risk]** Adding 4 new filter rows could increase vertical height of the filter controls panel on mobile.
  - **Mitigation**: Use compact horizontally scrollable or wrap-optimized pill groups with distinct visual tags, keeping the primary search input pinned at the top.
- **[Risk]** Pseudo-element touch hitboxes could overlap if items are placed closer than 10px.
  - **Mitigation**: Bead grid uses flex gap with touch event handling on the container level where appropriate.
