# Proposal

## Why

Only Chapter 19 has been rewritten for India: 24 of 765 tips. The other 33 chapters still render source-edition text, and 115 high-risk claims remain. The current mixed edition is honest — it marks queued chapters and draft tips — but it is not the complete India rewrite the project now needs. We need a verified, chapter-by-chapter replacement before the final update can be called finished.

## What Changes

- Rewrite the 33 remaining chapters (741 tips) into data/en-in/chapters/, one JSON file per chapter, with Indian institutions, statutes, benefits, prices and hotlines.
- Add a source pack and an independent verification report for every chapter.
- Add a chapter status model: draft, checked, reviewed, and a manifest that records what is actually done.
- Add verify:india and a built-site term scanner; wire them into build, check, and CI.
- Extend Playwright coverage for rewritten chapters: no banned terms, correct draft/checked badge, no overflow, and preserved reading state.
- Update /india/, the rewrite worklist and the implementation report as chapters land.
- Keep Tier A legal, medical and financial chapters at checked-draft until a named human reviewer signs them off.
- **BREAKING**: the published India edition will contain no source-edition terms; source text remains only in data/en/ and is not rendered for rewritten chapters.
- No UI redesign, no new reader features, and no changes to the source submodule.

## Capabilities

### New Capabilities

- india-edition: the complete India rewrite contract, chapter status model, source verification, and build/publish gates.

### Modified Capabilities

- None. The existing reader shell, search/filter and glass-system requirements do not change.

## Impact

- **Data:** data/en-in/chapters/, data/en-in/manifest.json, generated data/en-in/all-chapters.json.
- **Build:** scripts/build-india-data.ts, new scripts/verify-india.ts, new scripts/scan-dist-terms.mjs, package.json lifecycle scripts.
- **Pages:** the existing loaders already consume data/en-in/all-chapters.json; chapter pages gain checked/reviewed states and notices.
- **Tests:** India schema, banned-term, chapter UI and final-site Playwright checks.
- **Reports:** per-chapter source packs and verification reports, updated worklist and implementation report.
- **Delivery:** final merge to master, GitHub Pages deployment, live verification at 390 px and 1440 px.
