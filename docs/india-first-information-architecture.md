# India-first information architecture and editorial migration

Status: **Approved direction, implementation in progress.** Decision 17 November 2026.
Tracking: [Issue #23](https://github.com/RohannShetty/LifeAsUsual/issues/23), [Epic #4](https://github.com/RohannShetty/LifeAsUsual/issues/4).

## Product rule

Build for the Indian reader's actual problem first. Repeated explanations of why a Chinese or other foreign service does not exist in India are not a useful lesson. Unavailable foreign services may remain in immutable source provenance and internal migration notes, but not as the public organizing principle. Keep universal guidance where it is genuinely applicable and supported.

The 765 inherited IDs remain the permanent compatibility inventory. **765 published tips and 34 chapters are not future product targets.** Editorial disposition per ID: KEEP, REWRITE, REPLACE, COMBINE, RETIRE or HOLD. Automated tagging never grants publication approval.

## Navigation proposal

| Navigation | Reader's purpose | Proposed route | Publication gate |
|---|---|---|---|
| Get help with a problem | Something happened and I need steps | /help/[problem]/ | Canonical trust record, exact sources; high-risk fails closed |
| Everyday life | Build durable habits and skills | /everyday/[topic]/ | Clear provenance, applicability and review status |
| By life stage | Student, worker, caregiver, parent, senior | /life-stages/[stage]/ | Do not equate a life stage with legal benefit eligibility |
| Browse topics | Explore and search current guides | /topics/[topic]/ | Index only publishable content |
| Region and language | Verified state/UT information in preferred language | Exact URL design TBD | Unsupported jurisdiction or translation must be honestly labeled |
| Legacy compatibility | Preserve old bookmarks and reading history | /chapters/[number]-[slug]/#chapter-tip | Keep original anchors or verified redirect/replacement mappings |

Do not publish placeholder routes until content trust, redirect and accessibility tests are ready. Replacement pages must never be marked read simply because the original tip was read.

## Priority Indian problem journeys

1. **Lost employment or income.** Separate formally employed, ESIC/EPF-covered, gig/unorganised, self-employed and eligible rural-household routes. Start with immediate food/shelter needs, job search and unpaid wages; only offer assistance after confirming applicable scheme and current eligibility. Avoid leading with the absence of a foreign-type unemployment benefit.
2. **Financial fraud.** First actions, official reports, bank complaint, evidence preservation and next steps, with documented qualified review before publication.
3. **Medical urgency and accessing care.** Safety-first entry, actual Indian access points, independently reviewed eligibility and emergency instructions.
4. **Renting or buying housing.** State-specific protections and remedies, not unsupported national generalizations.
5. **Documents.** Aadhaar, PAN, voter records, name/address corrections and escalation using official process references.
6. **Education, work rights, family and senior care.** Location-aware practical steps, varying eligibility and accessibility.

Use the reader flow: **What happened? → Urgency → Eligibility → Documents → Official action → What to expect → Escalation → Last checked and review status.** Separate stable advice from changing fees, deadlines, helplines and service procedures.

## Content inventory and review

Run the deterministic inventory command: node scripts/india-first-audit.mjs
Check the committed baseline: node scripts/india-first-audit.mjs --check
Run safety tests: node --test tests/india-first-audit.test.mjs

Outputs:
- reports/india-first-inventory/legacy-inventory.csv (all inherited IDs with unchanged anchors and editorial fields)
- reports/india-first-inventory/summary.md (chapter counts and candidate triage counts)

Every row begins **UNASSESSED**, with NO claim-level source verification performed by the audit and NONE as reviewer approval. Screening flags are *candidates*, not defect verdicts. Human-reviewed status must never be inferred from an AI review label, evidence grade or passing test.

For every editorial change record the reader problem, exact source section, accessed date, jurisdiction, applicability, disposition and rationale, old-to-new mapping, reviewer identity and approval when actually obtained. Retired or consolidated lessons need explicit fallback pages or redirects and progress migration tests.

## Release sequence

- [x] Versioned inherited-ID inventory generator, deterministic snapshot and regression tests; no content changed.
- [ ] Disposition queue with source-specific review for each of the 765 rows, prioritize high-risk or foreign-service claims.
- [ ] Reconcile contradictory instructions in AGENTS.md, other project guidance, and stale India-content status.
- [ ] Safe content model for original Indian lessons, redirects and old progress import.
- [ ] Chapter 7 employment-loss pilot, independently source-checked and reviewed.
- [ ] Implement reader-first navigation and region/locale coverage indicators.
- [ ] Expand high-risk gates to every applicable published content path and test failure cases.
- [ ] Validate end-to-end migration on Android, all required browsers and locales, accessibility and source freshness.

Source attribution and immutable original records remain intact. None of these unchecked items is considered complete because the audit generator passed.