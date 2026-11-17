# Design contract: one door, a memory loop, a reading shell

Status: implemented on `feat/one-door-memory-loop` (plan: `docs/superpowers/plans/2026-11-17-one-door-memory-loop.md`).

This contract records the rules the edition now follows, so the next change does
not quietly undo them.

## 1. One door

The home page asks one question: **"What do you want back first?"**
(`src/components/IntentFork.astro`, `id="find"`).

- Four answers map to a scope filter on `/explore/`: Money, Health (Lifespan),
  Time and energy, Freedom (Personal freedom). A fifth card is "Just browsing",
  which opens the chapter list.
- The fork is the only onboarding invitation on the home page. The guided
  question flow is gone from the home page.
- `/start/` keeps its page because it documents the evidence grades and the
  ROI model. It no longer appears in the rail, in the bottom navigation, or as a
  home call to action.
- `/india/` keeps its route because it is the provenance and coverage record.
  It no longer appears in navigation; it is reached from the home India pill,
  the About page, and the rewrite notices on chapter pages.
- Help pages are reachable from `/guides/` ("When something has gone wrong"),
  sourced from `data/india-publications.json`, so a new published help page
  appears in the hub without editing markup.

Rule: adding a new entrance to the home page requires removing another. The
fork's question stays first.

## 2. A memory loop

Reading progress used to be passive. It now schedules recall
(`src/scripts/storage-ledger.ts`, `src/components/RecallDeck.astro`).

- Intervals: 3, 7, 21 and 60 days after a tip is first read, then it holds.
- The deck shows at most three due tips; a tip is due only after it has been
  read.
- "I remembered" moves the tip one stage forward. "Not yet" resets it to stage
  zero and returns after three days. Either answer restarts the interval from
  now. Only a tip that is due may advance, so a duplicate click or a second tab
  cannot skip a stage.
- The deck draws from the Very-high tips the reader has read; its copy says so.
  If a wide pool is ever needed, change the copy with it.
- Home shows the deck only when something is due. `/progress/` always shows it,
  including its empty states.
- Everything stays in the same `localStorage` ledger as reading progress and
  picks; export and import carry the new fields. No account, no network.
- The cast never comments on a recall answer. Success and failure are neutral.

Rule: any new memory feature must work offline, inside the existing ledger, and
with no third-party request.

## 3. A reading shell

`src/styles/editorial.css`, scoped by `data-page-type` on `<html>`, derives
the page type from the route in `BaseLayout.astro` via
`src/lib/page-type.ts`. That helper strips `import.meta.env.BASE_URL` first,
because the deployed site lives under `/LifeAsUsual/`; without it every route
falls back to `reference`.

- `chapter`: serif chapter title and tip titles, 66ch reading measure, a hairline
  under the chapter header, balanced title wrapping.
- `collection`: balanced page titles, leads capped at 62ch.
- `home` and `reference`: unchanged.
- Print drops navigation, the cast, the completion seal and pagination.

Rule: editorial rules never move the cast, never animate body text, and never
add a request.

## 4. Totals are derived, never typed

`src/lib/edition.ts` is the only source of published counts (tips, chapters,
Very-high tips). Pages and components read it; filter chips on `/explore/` count
the loaded tips. `scripts/parse.ts` keeps its literals because it validates the
immutable source corpus, not the edition. `scripts/verify-india.ts` compares
the manifest against the actual source and edition files, and `scripts/verify.ts`
compares the English corpus against the Chinese source counts rather than typed
targets.

Rule: a new chapter must not require editing a literal anywhere. If a count is
typed by hand in a page, that is a defect.

## 5. Gates

Run before a release:

```
npm run check
npm run build
npm run scan:terms
npm run check:links
npm run verify:publication
npm run verify:jurisdictions
npx playwright test
```

The publication gate still governs high-risk pages. This contract does not
weaken it: an unverified high-risk page stays unpublished.
