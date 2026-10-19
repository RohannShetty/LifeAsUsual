# Design: How To Live Better Web Architecture (v2)

## Context
See `proposal.md` for background and user goals.
The application requires delivering 765 rich life recommendations across 34 chapters with high mobile performance ($\le 60\text{ KB}$ reader JS, Lighthouse $\ge 90$ performance, 60fps scrolling) while implementing an expressive "Comic style on Apple-style glass" aesthetic.

## Goals / Non-Goals

**Goals:**
- Zero runtime JavaScript dependencies for static reading text; all tips baked into static HTML at build time.
- Liquid Glass optics with GPU safety: maximum 3 active `backdrop-filter` surfaces on screen at any time.
- Smooth View Transitions comic panel wipes with standard fade fallback.
- Self-contained reader state stored strictly in versioned `localStorage` with zero analytics, tracking, or network leaks.
- Strict typography discipline: self-hosted Literata (reading serif), Bricolage Grotesque (UI sans), and Lilita One (comic display).

**Non-Goals:**
- Dynamic server runtime or SSR (output is 100% static).
- External chart or graphing libraries (progress rings and reading map use inline SVG and CSS).
- Translating audit trails (`docs/核实记录/`) or Chinese-only graphics (`og.png`).
- Paraphrasing or modifying the author's advice or statutory citations.

## Decisions

### 1. Astro Static Architecture with Vanilla TypeScript Islands
- **Decision:** Build the site using Astro static output (`output: 'static'`) with vanilla TypeScript islands for interactive widgets (read tracking, settings sheet, search).
- **Rationale:** Minimizes bundle overhead and easily meets the $\le 60\text{ KB}$ gzip JS budget on reader pages. Preact or heavy UI frameworks are avoided.
- **Alternatives Considered:** Next.js (too heavy, requires Node server or complex static export), Vite SPA (hurts SEO, larger bundle), SvelteKit (unnecessary framework overhead).

### 2. Apple Liquid Glass vs. Fake Glass Performance Boundary
- **Decision:** Restrict true `backdrop-filter: blur(24px)` to floating navigation, bottom sheets, and dialogue bubbles. Repetitive tip cards use static "fake glass" backgrounds with static lighting rim highlights.
- **Rationale:** 765 tip cards with backdrop filters would crash mobile GPU compositors and cause severe scroll stutter. Fake glass delivers identical perceived aesthetic with 60fps scrolling and $\ge 7:1$ text contrast.
- **Alternatives Considered:** Real backdrop filter on all cards (rejected due to frame drops on mobile).

### 3. Pure Inline SVG & CSS Progress Map
- **Decision:** Render the 765-bead Reading Map and progress rings using inline SVG and CSS custom properties.
- **Rationale:** Zero external chart dependencies, instantaneous rendering, responsive scaling, and direct DOM event handling for click-to-jump navigation.
- **Alternatives Considered:** Chart.js, D3.js, Canvas (rejected due to bundle weight and accessibility barriers).

### 4. View Transitions API for Comic Panel Flow
- **Decision:** Implement native View Transitions API with diagonal panel wipe animations between route changes, falling back to a 200ms cross-fade.
- **Rationale:** Achieves the continuous comic page-turning feel without hijacking scroll or blocking the main thread.
- **Alternatives Considered:** Barba.js, Framer Motion (rejected due to bundle weight and script overhead).

## Risks / Trade-offs

- **[Risk]** Long chapters (up to 50k words) causing DOM bloat and scroll stutter.  
  → **Mitigation:** Use `content-visibility: auto` with `contain-intrinsic-size: 1px 400px` on all tip cards, driven by a single shared `IntersectionObserver`.
- **[Risk]** Missing or broken cross-references (`见第 N 节第 M 条`).  
  → **Mitigation:** Generate deterministic anchors (`#7-12`) and validate all cross-reference URLs in automated CI checks.
- **[Risk]** Sensitive chapter tone dissonance with comic characters.  
  → **Mitigation:** Enforce Calm Mode (`data/calm-chapters.json`), removing Plus & Minus, dialogue bubbles, SFX, and bursts from sensitive chapters.
