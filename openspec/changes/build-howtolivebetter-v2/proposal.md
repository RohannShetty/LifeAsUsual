# Proposal: Build How To Live Better Web Application (v2)

## Why
Transform the open-source Chinese longevity and life decision guide `https://github.com/eternity4719/HowToLiveBetter` into a mobile-first English reading web application. The site presents 765 evidence-graded life recommendations using an Apple-style Liquid Glass material foundation combined with an expressive comic illustration and motion layer hosted by original characters Plus & Minus.

## What Changes
- Complete frontend web application built with Astro (static output), TypeScript, and custom CSS design tokens.
- Fully validated English translation dataset across all 34 chapters (765 tips), preserving numbers, percentages, units, currency (¥ RMB), DOIs, and citations verbatim.
- Performance-conscious Apple Liquid Glass design system: real `backdrop-filter` limited to navigation and sheets ($\le 3$ surfaces), with static fake glass on repetitive tip cards guaranteeing 60fps scrolling and $\ge 7:1$ text contrast.
- Pure inline SVG/CSS reading progress engine: 50% reading time visibility tracker, versioned `localStorage` persistence, 765-bead SVG Reading Map, progress rings, and streaks without external chart libraries.
- Original character system: Plus (Jade `#46D9A0`) and Minus (Amber `#F5B85A`) in inline SVG (<25KB total), 6 moods, interface-only dialogue bubbles (<12 words), and Calm Mode for sensitive chapters.
- Client-side Pagefind search with multi-parameter filtering and View Transitions comic panel wipes.

## Capabilities

### New Capabilities
- `reading-interface`: Core responsive reader layout, 6-bullet tip card with fake glass, expandable sources, and reading settings sheet (text size, serif/sans, theme, reduce transparency).
- `reading-progress`: Reading detection engine (50% visibility for reading duration), `localStorage` state persistence, 765-bead SVG Reading Map, progress rings, and JSON export/import.
- `comic-layer`: Original SVG cast (Plus & Minus), glass speech bubbles, SFX popups, Calm Mode for sensitive topics, master comic effects toggle, and View Transitions panel wipes.
- `search-and-filters`: Lazy-loaded Pagefind search and multi-parameter filtering (evidence grade, value tier, cost trio, scope, disputed).

### Modified Capabilities
None (initial greenfield implementation).

## Impact
- Filesystem: Populates `src/`, `data/`, `public/`, and `reports/`.
- Runtime Dependencies: Astro, Zod, Pagefind. Zero runtime analytics, zero tracking cookies, zero external font requests.
- Target Budgets: Reader page JS $\le 60\text{ KB}$ gzip; character SVG $\le 25\text{ KB}$; comic font $\le 25\text{ KB}$; mobile Lighthouse $\ge 90$ performance, $\ge 95$ accessibility.
