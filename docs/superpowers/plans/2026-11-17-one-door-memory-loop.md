# One Door, Memory Loop, Editorial Shell

Date: 2026-11-17
Base: master 35d9844
Branch: feat/one-door-memory-loop
Source decision: user order m00711 "use superpower skills and get all a+b+c in sequence using inline execution".

## Goal

Make the site navigable for a first-time reader in one decision (A), make reading recallable over time with a spaced-review loop that stores nothing off-device (B), and give chapter pages a reading-first typographic shell without touching palette, nav layout or body type scale (C). Remove the hard-coded 765/34 so a 35th chapter is a data change, not a CI failure.

## File structure

New:
- src/lib/edition.ts - derived edition stats (totalTips, chapters, veryHighTips) from data/en-in/all-chapters.json
- src/components/IntentFork.astro - the single entrance (five intent links + browse)
- src/components/RecallDeck.astro - server-rendered recall card shell + pool payload
- src/scripts/recall.ts - client scheduling/space repetition over localStorage ledger
- src/styles/editorial.css - reading-first chapter/guide typography
- docs/design-contract.md - tokens, components, page types, rules for future agents
- tests/recall.spec.ts - unit-ish Playwright test of scheduling + deck behaviour

Modified:
- src/pages/index.astro - fork replaces QuestionFlow invitation; daily win demoted; derived counts
- src/pages/explore.astro, progress.astro, chapters/index.astro, india.astro, src/components/ProgressRing.astro, src/components/ReadingMap.astro - derived counts
- src/components/LeftRail.astro - remove /start and /india entries (India becomes a trust link in About + home pill)
- astro.config.mjs - redirect /start/ -> /
- src/layouts/BaseLayout.astro - import editorial.css, accept pageType
- src/pages/chapters/[n]-[slug].astro - chapter "of N" derived, pageType chapter
- src/pages/guides/index.astro - merge help links into the hub
- src/scripts/storage-ledger.ts - add readAt + recall maps (optional fields, same version 1)
- scripts/verify-india.ts, scripts/parse.ts - assert against manifest, never the literal 765
- tests/ornament.spec.ts, tests/e2e.spec.ts - derive expected bead/tip counts from data

## Tasks

### Task 1 - Derived edition stats (prerequisite)
Files: src/lib/edition.ts (new).
Exports: interface EditionStats { totalTips: number; chapters: number; veryHigh: number }; export function readEditionStats(): EditionStats reading data/en-in/all-chapters.json with fs, memoised in module scope, throwing on unreadable data.
Verify: node -e via tsx prints 765 / 34 / 122. Commit 1.

### Task 2 - Replace every hard-coded total
Files: the six page/components above, chapter template badge, scripts/verify-india.ts, scripts/parse.ts.
Rule: no literal 765 or 34 in src/pages or src/components; scripts compare against manifest/derived sums.
Verify: grep finds no 765 outside tests/data; npm run verify:india passes; npm run build passes.
Commit 2.

### Task 3 - The one door
Files: src/components/IntentFork.astro (new), src/pages/index.astro.
Fork: h2 "What do you want to fix first?", five links Money/Health/Time and energy/Personal freedom/Browse all 34 chapters -> /explore/?scope=... or /chapters/. Home order: hero (cast welcome line) -> fork -> daily win -> continue reading (secondary) -> map teaser (link only).
explore.astro reads ?scope= to pre-filter (small client change) or fork links carry the label only; verify filter works in browser.
Verify: Playwright home test: one primary heading, fork links resolve, no QuestionFlow on home.
Commit 3.

### Task 4 - Retire /start, demote /india, merge guides+help hub
Files: LeftRail.astro, astro.config.mjs, guides/index.astro, about.astro (India trust link), any test that visits /start.
Verify: build, /start/ returns redirect stub to /, nav has 5 items, guide hub lists help entries.
Commit 4.

### Task 5 - Ledger fields
Files: src/scripts/storage-ledger.ts.
Add optional readAt: Record<string, number> and recall: Record<string, number> (stage index) and lastRecall: string|null. markTipRead stamps readAt. Export RECALL_INTERVALS_DAYS = [3,7,21,60] and dueTipIds(state, now).
Verify: tests/recall.spec.ts asserts spacing math in browser context.
Commit 5.

### Task 6 - Recall deck (B)
Files: src/components/RecallDeck.astro (new), src/scripts/recall.ts (new), index.astro + progress.astro embed, editorial.css card styles.
Deck: server-rendered empty shell with pool payload limited to Very high tips (id, title, chapter, slug); client picks up to 3 read-and-due tips; shows "Do you still remember?" -> reveal titles -> "Remembered"/"Show me again" updates stage. Empty state invites reading one tip. No network, no analytics, aria-live for reveal, 44px targets.
Verify: Playwright - seeded localStorage renders deck, reveal shows 3 titles, buttons change next-due label, keyboard reachable.
Commit 6.

### Task 7 - Editorial shell (C)
Files: src/styles/editorial.css (new), BaseLayout.astro, chapter template pageType, guides/index.astro pageType.
Scope: chapter opener (eyebrow numeral, title scale), reading measure cap 68ch, lead paragraph, tip title scale, hairline section rules, print rules. No palette/body font/nav changes. One cast moment per screen rule documented; calm chapters untouched.
Verify: 360/390/1440 screenshots no horizontal overflow, existing ornament/visual tests pass.
Commit 7.

### Task 8 - Docs and final gate
Files: docs/design-contract.md.
Content: tokens table, page types, component inventory, count derivation rule, cast zoning rule, recall contract, how to add chapter 35 (data only).
Verify: npm run verify:india, verify:publication, verify:jurisdictions, check, build, test:e2e subset; link check; term scan; report sizes.
Commit 8. Push branch, open PR.

## Rulings log
- (T4) /start redirects instead of being deleted: the URL is part of the published surface and may be linked; a redirect keeps legacy links alive while removing the door.
- (T4) /india keeps its route and loses its nav slot: trust provenance stays reachable, it stops competing as a daily destination.
- (T6) Recall pool is the 122 Very-high tips: 765 titles would add ~56KB of page HTML for a feature that needs a small, high-signal deck.
- (T3) Keep the daily win: it is the only content that changes without a user action, so it moves below the fork rather than disappearing.
