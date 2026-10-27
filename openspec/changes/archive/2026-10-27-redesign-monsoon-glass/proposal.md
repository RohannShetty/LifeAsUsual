# Proposal: Redesign the reader as Monsoon Glass

## Why
The reader asked for three things the current build cannot give: a fully glass reading surface (v2.5.0 deliberately made tip cards opaque), an interface that feels alive rather than a stack of documents, and relief from the per-tip evidence block, whose Cost, Benefit and Caveats sections dominate every chapter. The site also reads as generic dark glass with jade accents; the content is an India rewrite, and the visual language has not caught up.

## What Changes
- **A living ground.** Every page renders a fixed `.monsoon-ground` plane with three low-alpha accent pools, a 2.8% grain and a slow drift, in dark and light variants, static under reduced motion.
- **Glass reading cards.** Tip cards move from the opaque `.paper` material to a 72% tint of the page ground with a hairline and a lit edge. Blur is not free, so `backdrop-filter` is added only to cards in view, capped at 3, by an IntersectionObserver; cards off screen declare `content-visibility: auto`.
- **Folded evidence.** Cost, Benefit and Caveats move behind one brass-ruled handle per tip, collapsed by default, animated with `grid-template-rows`, correct for `aria-expanded`/`aria-controls`/`inert`, closable with Escape, remembered per session, and readable with JavaScript off.
- **Indian palette and type.** The four `data-palette` IDs are retinted to Neel, Monsoon, Chandni and Kora with Peacock, Marigold and Indigo-steel accents plus Brass and Kumkum rules; Mukta (Ek Type, Mumbai) replaces Bricolage as the interface face. Bricolage is removed: its subset never contained the rupee sign it was kept for, so it cost 77 KB per page for nothing.
- **Truthful accessibility.** Closed TOC and settings sheets become `inert`; the chapter "Tips (N)" button's visible text becomes its accessible name.

## Capabilities

### New Capabilities
- `monsoon-material`: the ground plane, the five-rung tint ladder, the in-view blur budget, and the contrast floor that makes glass reading safe.

### Modified Capabilities
- `liquid-glass-system`: glass now extends to content surfaces under a bounded blur budget, replacing the "chrome only" rule and the fake-glass card that preceded it.
- `mobile-reader-shell`: the reader gains a folded evidence block and offscreen layout skipping, keeping the 44px target and no-overflow rules intact.

## Impact
- Affected files: `src/styles/tokens.css`, `src/styles/ground.css` (new), `src/styles/glass.css`, `src/styles/fonts.css`, `src/scripts/glass-cards.ts` (new), `src/components/TipCard.astro`, `src/components/SettingsSheet.astro`, `src/layouts/BaseLayout.astro`, `src/pages/chapters/[n]-[slug].astro`.
- Assets: Mukta 400/700/800 added (63,108 B); Bricolage removed (76,888 B). Net font payload −13,780 B, now 207,308 B.
- Budgets: mobile Lighthouse performance ≥ 90, accessibility ≥ 95, best practices and SEO ≥ 95; reader JS ≤ 60 KB gzip; text contrast ≥ 7:1 on every palette.
- Non-negotiables untouched: content, numbers, currency, citation URLs, slugs, the comic layer's rules, and the zero-third-party-request policy.
