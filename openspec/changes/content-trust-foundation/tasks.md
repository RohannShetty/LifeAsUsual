# Tasks (not started)

## 1. Safety and evidence contract
- [ ] 1.1 Define versioned typed schema for lessons, sources, claims, jurisdiction, locales and review events.
- [ ] 1.2 Add fixtures for one old tip, one original Indian lesson and one explicitly unverified high-risk claim.
- [ ] 1.3 Implement validator for exact source locator and claim/jurisdiction applicability; URL-only evidence must fail.
- [ ] 1.4 Add independent-verification report format, recording inaccessible links and unsupported claims.

## 2. Backwards-compatible migration
- [ ] 2.1 Preserve legacy `chapter-tip` anchors, source attribution and browser reader ledger.
- [ ] 2.2 Add original India lesson IDs and flexible count generation; retain separate inherited edition count check.
- [ ] 2.3 Ensure `build-india-chapter` overrides remain source-of-truth during migration.
- [ ] 2.4 Update AGENTS, BRIEF, PLAN and OpenSpec project constraints without accidental rule weakening.

## 3. Truthful public display
- [ ] 3.1 Show AI-reviewed **draft** prominently on all AI-checked material, independent of Tier A/B.
- [ ] 3.2 Show human-reviewed only when reviewer and dated scope are recorded.
- [ ] 3.3 Display jurisdiction/source dates and safe gap/fallback states.
- [ ] 3.4 Create tests preventing unsupported `Checked` badges and misleading source mappings.

## 4. Gate and tests
- [ ] 4.1 Fail build for invalid, missing or withdrawn references in published high-stakes recommendations.
- [ ] 4.2 Test reviewer/status transitions and translated-version independence.
- [ ] 4.3 Test state applicability, national fallbacks and stable legacy URLs/reading progress.
- [ ] 4.4 Run same-commit Astro, India manifest, browser, link and accessibility checks.
- [ ] 4.5 Publish evidence-backed release note; do not claim general completeness or professional signoff.

**Acceptance:** The sample original lesson, jurisdiction overlay and locale version can be published or correctly withheld with auditable evidence. No content count or review status is fictional.
