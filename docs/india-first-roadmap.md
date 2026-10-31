# India-first product roadmap (approved direction)

Status: **Approved product direction; staged implementation.**  
Decision date: 31 October 2026.  
Current project: `RohannShetty/LifeAsUsual` on `master`.

This document records the product decisions for the next iteration. It does **not** declare features complete. Preserve existing stable lesson anchors, reader progress and original attribution during migration.

## Product definition

An openly accessible, evidence-informed life guide for India that combines general self-improvement with actionable guidance for real situations.

### Binding decisions

1. **Audience:** everyone, including students, adults, families, seniors, rural and urban readers.
2. **Content:** universal life lessons plus India-specific practical advice and real-world action guides.
3. **Languages:** English, Hindi and regional languages; add content in verified batches, not with misleading "complete" labels.
4. **Geography:** all Indian states and union territories represented in the data model from day one; publish state-specific rules only once their sources and applicability are checked.
5. **Volume:** no artificial cap on original Indian lessons, while keeping inherited IDs stable.
6. **Editorial:** AI review permitted with prominent **AI-reviewed draft** labels. This is not expert endorsement. Known unsafe or unsupported high-stakes claims must be withheld until corrected.
7. **Formats:** website, offline PWA, audio, practical checklists.
8. **Identity:** seek a new India-first name and visual identity. Do not rename the repository or change public URLs until a migration plan is ready.
9. **Funding:** free public access, optional donations or disclosed sponsorships. Editorial independence is mandatory.

### Recommended first localization pilots

English (`en-IN`), Hindi (`hi-IN`), Marathi (`mr-IN`). These are pilot candidates, not the limit of intended language coverage. Translation must preserve numbers, eligibility, limitations, uncertainty, negation and source provenance; do not infer correctness from fluent language.

## Prioritized workstreams

### P0 / Phase 0: stabilize the existing edition

- Resolve latest Astro/TypeScript CI blockers and re-run all gated checks.
- Review dependency audit findings by exact package, version, reachability and fix; avoid blind major upgrades.
- Correct Chapter 4 review blockers F1-F3 in both authoritative overrides and shipped chapter records. Retain the review worksheet and do not falsify human sign-off.
- Correct stale public rewrite-status descriptions in `data/india-context.json`, `src/pages/about.astro` and `src/pages/india.astro`.
- Audit misleading or irrelevant homepage citations and foreign research presented as India-specific evidence. Document remaining examples before broad edits.
- Assess the upstream submodule delta and incorporate only editorially approved changes.
- Run current Playwright, TypeScript, build, India source scan, mobile performance and accessibility checks.

**Exit:** CI green on one tested commit; known blockers corrected; clear remaining risk register. An automated green check alone does not establish all content is accurate.

### P0 / Phase 1: establish the content/trust contract

- Model immutable source provenance, canonical Indian lessons, claim-level source records, jurisdiction overlays and localized editions separately.
- Introduce source link, exact section/page, jurisdiction, applicability, evidence quality, risk, review status, last-checked date and source version.
- Use separate author and verifier roles. The verifier must attempt independent checks, report inaccessible sources and never invent citations.
- Allow `unverified`, `ai-reviewed-draft`, `human-reviewed`, `withdrawn` claim/lesson states, with separate evidence grades.
- Introduce stable IDs for original India-only material, redirects for moved lessons and a migration for existing progress and links.
- Reconcile `AGENTS.md`, `BRIEF.md`, `PLAN.md`, scripts, tests and OpenSpec. Current fixed 34/765 gates must become version-aware when original content is added.
- Treat non-English scripts as required for valid localized content, not as forbidden source-language contamination.

**Exit:** a new lesson can be created, sourced, AI-reviewed, tied to a state, localized and published without changing or corrupting inherited lesson data.

### P1 / Phase 2: practical Indian coverage

- Prioritize emergency safety, healthcare access, money and UPI fraud, work and benefits, housing/property, identity documents, education, family, seniors, accessibility and everyday life.
- Add problem journeys: a financial scam, an urgent health need, a job loss, a tenancy dispute, an identity document correction.
- Explicitly label each jurisdiction's supported coverage. Use national guidance where state-specific procedures remain unverified.
- Separate durable research from changing scheme deadlines, fees, offices, eligibility and helplines.

**Exit:** readers can find and act on a sample of well-sourced, high-value Indian problem guides.

### P1 / Phase 3: identity and UX

- Select a new name only after trademark, domain and audience/language checks.
- Reorganize navigation into "Find help now", "Improve everyday life" and "Explore by life stage".
- Add visible location and language selection without requiring user accounts.
- Preserve accessible reading and avoid distracting decoration in high-stakes content.

### P1 / Phase 4: translations, PWA, audio and checklists

- Store translations as independently reviewed versions of a canonical lesson; show truthful per-locale coverage.
- Evaluate Pagefind indexing and search quality for every target script.
- Ship installable PWA and selective offline packs with publication dates and stale-content warnings.
- Derive checklist steps from approved lesson records and test offline completion/export.
- Pilot audio with transcripts, reviewed numerals/negations and safe pronunciation of names and official terms.

### P2 / Phase 5: public release and sustainability

- Gate releases on content safety, provenance, honest draft labels, CI, accessibility, Android device testing, offline correctness and correction mechanisms.
- Maintain accurate CC BY 4.0 upstream attribution, other translation/assets attribution and code licensing.
- Funding is voluntary; sponsors cannot alter recommendations, evidence grades, search priority or access to critical guidance.
- Run scheduled source/official-scheme freshness reviews, with human/editorial approval before public changes.

## Current risks and restrictions

- The October 31 verification workflow was failing on four `tests/ornament.spec.ts` type errors before the initial Phase 0 branch.
- The latest installation reported seven dependency vulnerabilities; details and production impact require further triage.
- The October 30 Chapter 4 review documented F1-F3 blocking errors, seven editorial decisions and no human sign-off. See `reports/chapter-04-review-findings.md` for the correction addendum.
- An upstream comparison showed 17 commits ahead of the pinned original source. Never merge them blindly.
- Existing manifests and fixed counts reflect **the inherited edition**, not the future all-India platform.
- A passing source-host check must not be mistaken for proof that a linked document supports a specific claim.
- Do not publish new state laws, emergency instructions or benefit eligibility without exact current sources.

## Suggested OpenSpec boundaries

1. `stabilize-current-release`
2. `content-trust-foundation`
3. `jurisdiction-and-localization`
4. `india-life-journeys`
5. `india-first-brand-and-reader`
6. `offline-audio-checklists`
7. `public-launch-governance`

Use scoped changes and explicit acceptance criteria; do not combine all workstreams into a single migration. No change is considered complete without the relevant checks and a visible review record.
