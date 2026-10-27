# Tasks: How To Live Better Web Application (v2)

## 1. Phase 1: Reader Components & Layout Shell (Milestone M3.1)

- [x] 1.1 Implement `src/components/TipCard.astro` rendering the 6-field card with fake-glass styling, sticker chips, expandable sources drawer (grid-rows 0fr to 1fr), and linkable anchor IDs (`#7-12`). Verify with visual inspection on dark and light themes. *(Tools/Skills: CSS fake-glass tokens, semantic HTML, sub-agent research if needed for grid-row drawer animation)*
- [x] 1.2 Implement `src/components/BottomNav.astro` floating Apple-style Liquid Glass navigation bar for mobile viewports (360px–430px) with 44px minimum touch targets and safe-area insets. Verify layout at 360px width with zero horizontal overflow. *(Tools/Skills: CSS Liquid Glass tokens, responsive ergonomics)*
- [x] 1.3 Implement `src/components/LeftRail.astro` navigation sidebar for desktop viewports (>=1024px). Verify desktop display and breakpoint transitions. *(Tools/Skills: CSS media queries, tokens)*
- [x] 1.4 Implement `src/components/SettingsSheet.astro` slide-up sheet allowing readers to toggle font size, serif/sans font, dark/light theme, and Reduce Transparency. Verify preferences update CSS variables and persist in localStorage. *(Tools/Skills: Vanilla TypeScript island, localStorage wrapper with try/catch)*
- [x] 1.5 Update `src/layouts/BaseLayout.astro` integrating the responsive navigation shell, theme attributes, and font stylesheets. Verify static build with `npm run build`. *(Tools/Skills: Astro build)*

## 2. Phase 2: Reading Engine & Progress System (Milestone M3.2)

- [x] 2.1 Implement `src/scripts/read-tracker.ts` client-side island using a shared `IntersectionObserver` to detect when a tip card is 50% visible for max(1.5s, min(6s, 40% of reading time at 230wpm)). Verify read state fires on sustained visibility and ignores fast flick scrolling. *(Tools/Skills: IntersectionObserver API, client-side TypeScript)*
- [x] 2.2 Implement `src/scripts/storage-ledger.ts` managing versioned `localStorage` storage for read tip IDs, picks, per-day counts, streaks, with JSON export, JSON import, and reset actions. Verify data round-trip via export/import. *(Tools/Skills: Robust error handling, Blob file download)*
- [x] 2.3 Implement `src/components/ReadingMap.astro` rendering 765 inline SVG glass beads grouped by chapter that light up when read and navigate to tip anchors on click. Verify SVG responsiveness and text table accessibility fallback. *(Tools/Skills: SVG generation, accessibility WCAG tables)*
- [x] 2.4 Implement `src/components/ProgressRing.astro` SVG circular progress ring displaying "N of 765 tips read". Verify SVG stroke-dashoffset animation. *(Tools/Skills: Pure SVG/CSS animations, zero external chart libraries)*

## 3. Phase 3: Chapter Reader & Core Application Routes (Milestone M3.3)

- [x] 3.1 Implement chapter reader dynamic route `src/pages/chapters/[n]-[slug].astro` generating static pages for all 34 chapters from `data/en/` with sticky header, progress indicator, and "On this page" bottom sheet. Verify all 34 chapter pages generate at build time. *(Tools/Skills: Astro `getStaticPaths`, static data ingestion)*
- [x] 3.2 Implement `src/pages/chapters/index.astro` listing all 34 chapters with chapter descriptions, read percentage bars, and total tip counts. Verify chapter cards render cleanly. *(Tools/Skills: Astro component, CSS tokens)*
- [x] 3.3 Implement `src/pages/index.astro` Home page featuring the Daily Quick Win hero (selected deterministically by local date from 122 Very High tips), Continue reading action, overall progress ring, and 4 payoff shortcuts. Verify daily rotation logic. *(Tools/Skills: Deterministic PRNG / date hashing)*
- [x] 3.4 Implement `src/pages/start.astro` (reader-facing onboarding adapted from README), `src/pages/picks.astro` (saved bookmarks), and `src/pages/about.astro` (CC BY 4.0 license, eternity4719 author credit, mainland China disclaimers). Verify content compliance. *(Tools/Skills: Non-negotiable legal checklist)*
- [x] 3.5 Implement `src/pages/guides/[slug].astro` rendering the 9 standalone guides from `source/docs/`. Verify static generation. *(Tools/Skills: Markdown parsing, Astro getStaticPaths)*

## 4. Phase 4: Comic Layer, Characters & Motion (Milestone M3b)

- [x] 4.1 Implement `src/cast/Character.astro` inline SVG component rendering Plus (Jade `#46D9A0`) and Minus (Amber `#F5B85A`) across 6 moods (neutral, happy, surprised, smug, sleepy, cheering) with CSS breathing bob and blink, keeping total SVG under 25KB. Verify all moods visually. *(Tools/Skills: Inline SVG design, CSS keyframes)*
- [x] 4.2 Implement `src/cast/Bubble.astro` Liquid Glass speech bubble with ink tail, auto-dismissing after 6s and capped at 12 words per bubble. Verify bubble display and tap-to-dismiss. *(Tools/Skills: CSS glass tokens, auto-timer)*
- [x] 4.3 Implement `src/cast/dialogue-manager.ts` selecting lines from `data/dialogue.json` for UI triggers (first visit, daily win, mark read, streak, empty states) with automated lint enforcing zero advice, no numbers, and max 12 words. Verify dialogue linter passes. *(Tools/Skills: Automated regex linting)*
- [x] 4.4 Implement Calm Mode logic reading `data/calm-chapters.json`, suppressing characters, bubbles, SFX, and bursts on sensitive chapters (1, 13, 16, 25, 28, 29, 30, 33), alongside master Comic Effects toggle in Settings. Verify complete suppression in Calm Mode. *(Tools/Skills: Conditional rendering, settings state)*
- [x] 4.5 Implement View Transitions API comic panel diagonal wipe (350–450ms) with 200ms cross-fade fallback, Home splash sequence (<1.8s, tap to skip), and chapter complete canvas burst (<1.5KB) with `navigator.vibrate(10)`. Verify 60fps motion without layout shift. *(Tools/Skills: View Transitions API, lightweight HTML5 canvas burst)*

## 5. Phase 5: Search, Verification, Budgets & QA (Milestone M4)

- [x] 5.1 Implement `src/pages/explore.astro` integrating Pagefind search (lazy-loaded on demand) and multi-parameter filtering (evidence, value tier, cost trio, scope, disputed) synchronized with URL search params. Verify search accuracy and instant filtering. *(Tools/Skills: Pagefind integration, URLSearchParams)*
- [x] 5.2 Build Playwright test suite `tests/e2e.spec.ts` covering viewports 360x800, 390x844, 768x1024, and 1440x900 in light/dark and reduced motion, verifying $\ge 44\text{ px}$ targets, zero horizontal scroll, and progress persistence. Run `npx playwright test`. *(Tools/Skills: Playwright test runner, subagent execution)*
- [x] 5.3 Verify performance and bundle budgets: reader page JS $\le 60\text{ KB}$ gzip, character SVG $\le 25\text{ KB}$, comic font $\le 25\text{ KB}$, and mobile Lighthouse $\ge 90$ performance, $\ge 95$ accessibility. Verify with bundle analyzer and Lighthouse. *(Tools/Skills: gzip size check, Lighthouse CI)*
- [x] 5.4 Execute final QA verification checks in `reports/qa.md` and document line-by-line spot-checks in `reports/spotcheck.md`. Verify all 9 acceptance checks pass. *(Tools/Skills: QA audit checklist)*

## Workflow follow-up
- Run `/opsx-apply` to execute implementation phase by phase.
- Run `openspec archive` once all phases are complete and verified.
