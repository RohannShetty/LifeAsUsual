# LifeAsUsual — India-First Product Completion Plan (P0–P9)

> **Status:** ACTIVE DELIVERY PLAN, not a claim of completion  
> **Plan revision:** 2026-11-19 · baseline must be refreshed at each agent run  
> **Repository:** https://github.com/RohannShetty/LifeAsUsual  
> **Canonical goal:** https://github.com/RohannShetty/LifeAsUsual/issues/4  
> **Approved roadmap:** `docs/india-first-roadmap.md`  
> **Editorial delivery:** https://github.com/RohannShetty/LifeAsUsual/issues/23  
> **Expected location:** repository root, `PLAN.md`

## 0. Mission, authority and non-negotiables

**Mission:** Ship a trustworthy, accessible, genuinely India-first public guide that helps people act on real problems, without breaking inherited reading progress, historical source attribution or safety controls. Implement, verify, create scoped PRs, integrate safe work and continue to the next unblocked task. This file is the executable work queue for an agent harness, **not** permission to bypass review, publish unverified advice or silently merge risky changes.

**Product decisions already approved:** (1) all ages/backgrounds, rural and urban; (2) useful universal life guidance plus Indian practical journeys; (3) English, Hindi and regional languages, with `en-IN`, `hi-IN`, `mr-IN` pilots; (4) all 28 states + 8 UTs represented, but no invented coverage; (5) no fixed public 34-chapter/765-tip cap; (6) AI-reviewed drafts clearly distinguished from human review; (7) website, PWA/offline, audio and checklists; (8) new India-first identity after migration/clearance; (9) free access, optional donations/sponsorship with editorial independence. The owner has explicitly approved **KEEP / REWRITE / REPLACE / COMBINE / RETIRE / HOLD** decisions for old content while preserving legacy IDs, bookmarks and progress. Do not ask these questions again.

**Owner decisions confirmed 19 November 2026** ([epic #4 comment](https://github.com/RohannShetty/LifeAsUsual/issues/4#issuecomment-7006298594)), binding on this plan:

1. **Equal product prominence.** The inherited 765-tip reading library and the India-first practical problem-solving guides are both first-class, equally prominent experiences, with shared search and discovery and accessible navigation. Library entry points, legacy IDs, anchors, bookmarks, reading history, progress and attribution are preserved. Equal prominence does **not** license advertising unassessed inherited claims as verified India guidance; the P1 dispositions are what separate the library from verified Indian advice.
2. **17 November cyber-fraud self-review.** The owner confirms personally performing the recorded editorial self-review. The record stays `owner-self-review` with `independent: false`. That confirms the event, not independent source verification, professional qualification or blanket approval of high-risk claims. Publication policy may narrow what such a record permits; it may not widen it.
3. **Release timing.** Complete and evidence **all** P0–P9 acceptance gates before public promotion. No limited-public-beta shortcut, and a green CI run or an accessible GitHub Pages URL is not release approval. The epic stays open until the P9 evidence matrix passes.

Where earlier wording in this file conflicts with these, this block wins: P0's publication gate must cover inherited chapter routes, not only `src/pages/help/**`; P4 must ship two equal first-class entry points; P9 is mandatory before any promotion or "finished platform" claim.

**Authority precedence (when instructions disagree):** safety and law; explicit owner decisions; current GitHub epic #4 and verified issue acceptance; approved India-first roadmap; this plan; current implementation contracts/tests; historical `BRIEF.md`, old `PLAN.md`, legacy AGENTS/Cursor translation-era directions. Preserve historical documentation as historical material, but do not let obsolete English-only, fixed-765-public-output or RMB/faithful-translation rules control new Indian material. In the first documentation PR, reconcile the actual repo instructions so this precedence is explicit.

**Operating rules:**

- Work from the actual `master` and open PR heads. Never assume a previous chat's status is current.
- Prefer a failing test or user-facing acceptance gate over a fresh architecture audit or cosmetic redesign.
- Use isolated worktrees/branches and delegated specialists when available; integration lead reviews every result. Never claim subagent tests passed without evidence.
- Preserve the pinned upstream source and its attribution; maintain stable old anchors (`#7-1`, etc.), inbound links, reading history, picks and exported/imported progress.
- Never fabricate primary-source quotations, professional credentials, personal sign-off, legal applicability, scheme eligibility, mobile-device observations, security remediation or passing CI.
- Editorial approval ≠ source retrieval ≠ independent source verification ≠ qualified specialist sign-off ≠ green code tests. Store and label separately.
- Published high-risk changes fail closed on missing/contradictory/stale evidence and required review. A page existing on a government domain is not proof for every claim on that page.
- Do not purchase a domain, change production DNS, activate donations, submit identity documents or attest human review on behalf of the owner.
- Scope PRs tightly; never create one giant PR covering P0–P9. Respect branch protections and review requirements. Merge only when exact-head checks and relevant review are verified; do not silently merge an unverified PR.
- Do not keep spinning on an unresolved external dependency. Record the blocker, its owner and next exact action; move to unblocked work.

### 0.1 Working definitions

| Term | Meaning |
|---|---|
| **Implemented** | Code/content exists on a branch, not necessarily shippable |
| **Verified** | Relevant checks passed on a named commit with evidence/links |
| **Merged** | Exact PR merged, master checked, downstream state recorded |
| **Published** | Deployed route is reachable and verified at the production origin |
| **Reviewed** | Recorded review by a real identified reviewer, limited to the exact revision/scope |
| **Qualified review** | Credentials, scope and independence requirements met where applicable; never inferred from a field name alone |
| **Blocked** | Specific external authorization, source unavailability or qualified human dependency makes the next step unsafe |
| **Acceptance gate complete** | User-observable behavior + tests + sources/review + verified release evidence all satisfy the gate |

### 0.2 Baseline known on 19 November 2026: **revalidate before changing checkboxes**

- [x] [PR #24](https://github.com/RohannShetty/LifeAsUsual/pull/24) merged reproducible inventory for **765 inherited IDs**, as an inventory input only; this is **not 765 editorial approvals** (`master` reference `1ac22c7`, v2.8.1 at last inspection).
- [x] [PR #17](https://github.com/RohannShetty/LifeAsUsual/pull/17) merged the structural registry for 28 states + 8 UTs; **not verified local service coverage**.
- [x] PRs #16/#18/#19 introduced and strengthened fail-closed publication validation for `/help` paths; broader content-route gate and real verification workflow remain incomplete.
- [x] [PR #15](https://github.com/RohannShetty/LifeAsUsual/pull/15) **merged on 17 Nov 2026**. Its cyber-fraud guide has a site-owner **self-review record**, not independent specialist approval. The authenticity and semantics of that approval require attention; do not rewrite history or claim professional sign-off.
- [ ] [PR #26](https://github.com/RohannShetty/LifeAsUsual/pull/26) remains draft and unmerged at last inspection. [Run 44374495592](https://github.com/RohannShetty/LifeAsUsual/actions/runs/44374495592) failed: **395 Playwright passed, 1 failed**, mobile `tests/e2e.spec.ts` legacy recall deck remained hidden at 390×844. Build and type-check passed.
- [ ] [Issue #25](https://github.com/RohannShetty/LifeAsUsual/issues/25) unresolved build dependency `picomatch` ReDoS advisory; monitor actual upstream version, reachability, CI permissions and mitigations; do not describe as fixed.
- [ ] [Issue #3](https://github.com/RohannShetty/LifeAsUsual/issues/3) real-device touch/navigation evidence outstanding despite automated pointer regression coverage.
- [ ] Epic #4 and [issues #5–#8](https://github.com/RohannShetty/LifeAsUsual/issues) have substantive acceptance work still open; issue #4's historical statement that PR #15 is draft must be corrected without falsely checking the broader gate.

**First agent action:** `git status`, branch/default SHA, `git log`, PR list, issue states, Actions on exact commits, deployed origin, package scripts, content inventory. Log confirmed differences in an issue comment or `reports/delivery/`, then work; do not repeat a full repository audit without a concrete reason.

### 0.3 How to integrate this file

This repository already has a legacy `PLAN.md` describing the old English-only translation/design milestone M0–M4. Before replacing it in GitHub:

1. Preserve the exact historical version as `docs/history/legacy-reading-edition-plan.md` (or an equivalent immutable Git-tracked archive); record its original blob SHA.
2. Replace root `PLAN.md` with this India-first plan on a **scoped documentation PR**, not directly on `master`.
3. Clearly mark `BRIEF.md`, legacy source translation specs and outdated scripts/rules as *historical/inherited-edition only* rather than deleting source provenance.
4. Reconcile with PR #26 rather than overwriting its changes. Review the combined instructions, including `.cursor/rules/project.mdc`, `AGENTS.md`, OpenSpec and the roadmap.
5. Preserve any still-useful UX/accessibility constraints from the legacy plan where they do not conflict with the approved India-first product.
6. Verify markdown links, the plan's issue references and its placement; merge only after applicable checks pass.

## 1. Delivery protocol, task accounting and PR workflow

### 1.1 One source of progress truth

- Epic #4 is the public **acceptance tracker**. Issue #23 owns the editorial inventory/rebuild. #5 owns source/trust, #6 journeys/states, #7 languages/offline/audio, #8 identity/release, #3 mobile pointer, #25 security.
- Keep each GitHub issue checkbox synchronized with *verified evidence*, not estimates. Avoid parallel conflicting checklists that drift out of sync.
- This file contains an **implementation queue**. Its `[x]` items are prior observed facts only. Do not check pending P0–P9 tasks without exact evidence.
- In GitHub issue comments or `reports/delivery/STATUS.md`, record each package: `task ID | branch/PR | head SHA | CI URLs | artifact/reviewer evidence | merged SHA | production verification | remaining risk`.
- Always compare linked issue text to actual PR state. Update incorrect historical wording (especially #15) without claiming unrelated gates are done.

### 1.2 PR standard

Each scoped PR must include: problem, affected acceptance tasks, changed files and data migrations, test commands/results, exact head SHA, CI run links, source-verification table where content is changed, failure-mode tests, risk/rollback plan and a clear **mergeability** statement. For high-risk content, provide a separately reviewable content/evidence PR and do **not** treat code review as professional editorial approval.

**Lifecycle:** branch from current master → smallest coherent change → targeted tests → full relevant matrix → security/content gates → independent review where needed → recheck head after requested changes → merge if authorized and verified → test merged master → production smoke check → update linked issues and epic → next task. A green commit from another branch does not certify this head.

**Suggested PR slices (descriptive, not pre-created):**

| Package | Focus | Primary tracker | Dependency |
|---|---|---|---|
| PR-A | CI recall-deck failure + regression | #4 / #3 | None |
| PR-B | Complete PR #26 policy reconciliation and archive old root plan | #23 / #4 | Coordinate with existing #26 |
| PR-C | Security mitigation/evidence and Actions hardening | #25 | Advisory/package reality |
| PR-D | Legacy IDs, route redirects and progress migration | #5 / #23 | Content schema design |
| PR-E | Editorial inventory decisions, contradiction correction, chapter batches | #23 | Inventory baseline |
| PR-F | Full publication-path safety gate + reviewer semantics | #5 | Existing `/help` gate |
| PR-G | Job/income Chapter 7 national pilot and eligibility branches | #6 / #23 | Evidence and trust gate |
| PR-H | Problem-first nav/search/mobile UX and correction entry point | #6 / #8 | Stable content routes |
| PR-I | Verified jurisdiction pilot + honest coverage UI | #6 | Sources + overlays |
| PR-J | Locale infrastructure and `en-IN`/`hi-IN`/`mr-IN` pilots | #7 | Canonical records |
| PR-K | PWA, offline packs and progress-safe updates | #7 | Locale/route structure |
| PR-L | Checklists, audio and offline end-to-end experience | #7 | Approved content + PWA |
| PR-M | Identity, accessibility, legal, privacy and correction operations | #8 | Research + owner approval for external changes |
| PR-N | Release evidence and production validation | #4 / #8 | All mandatory gates |

Open smaller PRs when necessary; not all slices must run sequentially. The workflow must adapt to actual repository state, not manufacture PRs for already-complete work.

### 1.3 Evidence and review artifacts

Use versioned, machine-readable JSON/CSV plus human-readable reports where appropriate. Suggested locations, created only when useful:

- `reports/delivery/status.md`, `reports/delivery/risk-register.md`, `reports/delivery/release-evidence.md`
- `reports/editorial/legacy-dispositions.csv` (or existing committed inventory extended, never duplicated)
- `reports/editorial/claim-source-checks/<journey>.md`
- `reports/editorial/reviewer-events/<lesson-revision>.md` (actual reviewers only)
- `reports/migration/legacy-progress-fixtures/`
- `reports/qa/mobile-device-matrix.md`, `reports/qa/offline-test-matrix.md`
- `reports/security/dependency-reachability.md`

### 1.4 Definition of a real blocker

Mark **Owner action needed** only for: (a) factual confirmation of an alleged personal review; (b) legally/clinically/financially qualified specialist attestation where release policy requires it; (c) real-device manual observations not reproducible through automated environment; (d) domain/payment/identity/spending or production account permissions; (e) genuine release/business decision not already approved. Missing source data does **not** permit inventing it: HOLD affected content and proceed with safe work.

---

## P0 — Stabilize CI, security, publication honesty and baseline

**Goal:** establish a repeatable, trustworthy build and remove immediately actionable failures before expanding live high-risk advice. **Trackers:** #4, #3, #25, #23. **Parallelism:** CI engineering + dependency/security + editorial safety.

### P0.1 — Establish current truth
- [ ] Read current GitHub `master`, all open PRs, issue statuses, recent Actions, current deployed pages, relevant `package.json` and lockfile; record SHAs and links.
- [ ] Identify old checked boxes that lack evidence and stale status assertions; correct by narrow issue updates, preserving historical record.
- [ ] Record existing build commands and CI matrix; preserve baseline screenshots/metrics where available.
- [ ] Distinguish legacy behavior bugs from new India-first defects; prioritize high-risk user harms.

### P0.2 — Fix the exact current failure
- [ ] Download/inspect [run 44374495592](https://github.com/RohannShetty/LifeAsUsual/actions/runs/44374495592) and its mobile failure context.
- [ ] Reproduce the `tests/e2e.spec.ts` legacy recall-deck (`[data-recall-deck]`) hidden-state failure at 390×844; inspect localStorage initialization, hydration, timing, page modes and mock state.
- [ ] Fix root cause (app or test), not merely timeout/retry/suppression; add deterministic negative and positive cases.
- [ ] Repeat failing test to assess flakiness and verify across supported viewports, browsers and reduced motion.
- [ ] Re-run exact-head TypeScript, build, links, term scans, content gate and all Playwright; repair any additional actual failures.

### P0.3 — Mobile reading map issue #3
- [ ] Inspect pointer target and nearest-bead calculations; account for nav overlays, adjacent 44px hit targets, scroll, JS readiness and reduced-JS mode.
- [ ] Verify tapping a visible bead reaches the intended ID (including first/second row overlaps), keyboard and back/forward navigation.
- [ ] Verify a real touch device or explicitly document missing device evidence. Do not infer physical touch results from browser emulation.
- [ ] Update #3 only for demonstrated acceptance completion.

### P0.4 — Security issue #25
- [ ] Produce full `npm audit` report and current lockfile tree; record Astro and `picomatch` versions and the exact advisory and fix availability **as of check date**.
- [ ] Verify Astro's static generation/build dependency exposure versus delivered client/runtime code; evaluate untrusted pattern/input paths.
- [ ] Apply supported fixed versions when they exist; if not, document tested mitigation and residual risk, without silencing full auditing.
- [ ] Review GitHub Actions least privilege, PR trust boundaries, third-party actions and pinned versions; never expose secrets to untrusted PR workflows.
- [ ] Verify production/runtime high/critical audit gates still fail for real exposure; retain periodic complete audit and close #25 only with justified remediation/approved risk acceptance.

### P0.5 — Published high-risk review record integrity
- [ ] Compare merged PR #15, `data/india-publications.json`, actual published page and `reports/india-fraud-guide-human-review.md` with content-trust rules.
- [x] Owner confirmed on 19 November 2026 that the 17 Nov site-owner reading/review genuinely occurred (#4 comment 7006298594); the record stays `owner-self-review` / `independent: false`, and the confirmation is recorded as an event, not as independent verification.
- [ ] Check whether `qualified-human` in code is incorrectly satisfied by an unqualified self-review; ensure schema semantics, independence and policy match reality.
- [ ] For unverifiable/high-risk claims, correct status and withhold or limit publication as policy requires. Avoid pretending a record is professional legal/financial sign-off.
- [ ] Recheck RBI 2017 vs 2026 amendment effective **1 Jan 2027** and other time-sensitive claims before changing the page; require new revision-specific review.
- [ ] Extend the fail-closed publication gate beyond `src/pages/help/**` to inherited chapter routes that present high-risk India guidance, with explicit withheld/qualified states instead of unassessed publication.
- [ ] Add a regression test that a high-risk inherited route without a permitted review record fails the build.

### P0.6 — Historical content/instruction reconciliation
- [ ] Preserve old root `PLAN.md` in Git before replacement; migrate active instructions to this P0–P9 file.
- [ ] Reconcile existing draft PR #26 with `AGENTS.md`, `.cursor/rules/project.mdc`, `BRIEF.md`, old `PLAN.md`, OpenSpec and scripts. No more global English-only, faithful-China-translation or public 765-count rules.
- [ ] Fix stale status in `data/india-context.json`, `/about` and `/india` where contradicted by current editorial evidence; do not imply unreviewed chapters are approved.
- [ ] Add deterministic checks against contradictory instruction strings and incorrect claims of India verification.
- [ ] Reconcile upstream pinned submodule's historical 17-commit delta with a report; never import blindly.
- [ ] Review known Chapter 4 decisions and critical health/safety claims; correct or HOLD dangerous information rather than invent expert sign-off.

**P0 exit evidence:** exact-head green mandatory CI or explicitly quarantined nonrelease work; honest human-review semantics; linked security risk register; reproducible mobile regression checks; PR #26 safely resolved; deployment/release claims only if production verified. Do not block independent content draft work while a patchless dev dependency remains documented and controlled.

---

## P1 — All 765 inherited tips: decisions, editorial queue and audit accuracy

**Goal:** turn inventory into a controlled **reviewed disposition queue**, not a fabricated claim that the 765 tips were individually approved. The dispositions are also what let the reading library stay equally prominent with the practical guides without presenting unassessed tips as verified India advice. **Trackers:** #23, #4.

### P1.1 — Trustworthy inventory pipeline
- [ ] Reuse merged PR #24 script/report; confirm all **765 unique inherited IDs** appear once, with missing/duplicate ID tests and deterministic ordering.
- [ ] Verify chapter, route, title, source origin, original attribution, audience, dependencies, risk, evidence and current review status fields.
- [ ] Include source accessibility and checked date; flag evidence-grade/status contradictions. Missing verification must be `UNVERIFIED/UNASSESSED`, not fabricated.
- [ ] Report coverage counts by chapter, risk, foreign dependency, disposition candidate/approved state and held content; distinguish **input 765** from public output count.

### P1.2 — Chapter review workstream
- [ ] Queue chapters by severity: dangerous health/emergency/legal/financial claims; foreign-only service dependencies; stale government procedures; low-risk evergreen advice.
- [ ] Assign stable IDs and disposition candidates `KEEP | REWRITE | REPLACE | COMBINE | RETIRE | HOLD` with rationale, audience, India problem journey, replacement target, migration and review status.
- [ ] Inspect **full body text**, not titles only; record specific actionable claims and contradictions.
- [ ] Validate India-specific official source **passage and scope**, not just URL reachability. Record unavailable text as unresolved.
- [ ] Apply editorial decisions in traceable chapter batches; no automatic final approval from simple heuristics or an LLM classification.
- [ ] Flag cross-cutting inconsistencies, copied foreign figures, INR/RMB mix, India-unavailable procedures and outdated deadlines.
- [ ] Maintain a countable queue with `UNASSESSED`, `CANDIDATE`, `SOURCE-CHECKED`, `REVIEWED`, `HOLD`, `IMPLEMENTED`, `RELEASED`, not a single misleading percentage.

### P1.3 — Public-information architecture from the decisions
- [ ] Map tips to **Get help with a problem / Everyday life / Life stages / Browse topics**; keep linked journeys and topics independent of original chapter structure.
- [ ] Specify the eligible/audience branch, required documents, immediate steps, deadlines/fees/freshness, state variant, escalation and disclaimer for each practical journey.
- [ ] Plan redirects for retired/merged tips; never simply delete anchors or mark substitute material as already read.
- [ ] Keep original source prose and derivative changes accurately attributed and versioned.

**P1 exit evidence:** reproducible 765-ID inventory + every inherited ID has a documented editorial decision **or an explicit HOLD/UNASSESSED state with owner/review queue**; no false published-complete claim; traceable mappings for changed content. **Full editorial acceptance requires genuinely reviewed decisions**, not just 765 candidates.

---

## P2 — Canonical lesson, trust, route and progress-migration contracts

**Goal:** prove new India-original and legacy-derived records can coexist safely. **Trackers:** #5, #23, #4. **Depends on:** content schema foundations; may run alongside P1.

### P2.1 — Data provenance and canonical model
- [ ] Separate immutable upstream source data, legacy imported translation, revised Indian lessons, original India lessons, claim/source records, jurisdiction overlays and independent localized editions.
- [ ] Version stable IDs, routes, ancestry, supersession, publish state, source checked dates, reviewer events, change history, risk and evidence grade.
- [ ] Support revisions, retired tips, merged tips, alias routes, language variants and parent national/state relationships without route collision.
- [ ] Validate unique identifiers, old 765 anchors, cross-references, source/claim foreign keys and state codes at build time.

### P2.2 — Claim-level truth rules
- [ ] Require exact evidence URL/document + section/table/page/quotation locator, issuing authority, version, applicable geography/audience, checked date and source accessibility.
- [ ] Distinguish `unverified`, `ai-reviewed-draft`, `human-reviewed`, `qualified-specialist-reviewed` where applicable, `withdrawn/outdated`; never substitute an evidence-grade A for review status.
- [ ] Require independent verification attempts, recording failed retrieval and contradictions. Do not use a fake placeholder reviewer or self-review labelled independent.
- [ ] Authenticate and scope human reviewer events to exact lesson revision, claim IDs, qualifications and approval outcome; allow revocation and re-review.
- [ ] Fail closed on changed claims, missing/inconsistent source/reviewer events, stale applicability, unsupported state facts and future-dated evidence.
- [ ] Publish corrections and withdrawal reasons without exposing private reviewer credentials or reader data.

### P2.3 — Every relevant publication route
- [ ] Audit all generated pages and sources, not only `src/pages/help/**`; categorize legacy, archived, informational and actionable routes before gates.
- [ ] Make checks cover **every actionable publishable route** using a route inventory that cannot be bypassed by direct imports, aliases or dynamically generated output.
- [ ] Ensure raw legacy content is correctly disclosed as heritage/unverified where appropriate, not silently grandfathered into "reviewed" status.
- [ ] Add negative tests for unregistered route, source contradiction, unsupported locale/state, duplicate route, missing review, withdrawn revision, stale source and misleading badge.
- [ ] Verify actual production output contains no gated high-risk route on failure.

### P2.4 — Reading continuity and data migration
- [ ] Inventory existing storage key formats, `localStorage` schemas, picks, last position, history, reminders, exports and imported legacy data.
- [ ] Implement versioned, idempotent migration for old ID → canonical ID → active/retired/merged target. Preserve original read-state separately from new content completion.
- [ ] Maintain old `/chapters/.../#7-1` links and deep links with appropriate redirects/anchors, not forced homepage resets.
- [ ] Test migrations across fresh, full, partial, malformed and repeated imports; offline use, tab concurrency, privacy mode, account-free reading and rollback.
- [ ] Verify deleting/retiring a tip never marks a replacement read; export/import round-trip remains valid.

**P2 exit evidence:** one synthetic + one real original India lesson, one state overlay and one localized draft all pass positive and negative checks, with correct review limitations; old 765 IDs and state migrations survive. A high-risk route with missing requisite human review demonstrably cannot publish.

---

## P3 — Action-first India practical journeys and editorial quality

**Goal:** turn the product into real problem-solving guidance rather than a translated list of foreign-service absences. **Trackers:** #6, #23, #4. **Depends on:** P2 safety before high-risk release.

### P3.1 — Reusable practical-journey template
- [ ] Define: problem/urgency, safe first action, choose situation, eligibility tree, verified national route, local variant, documents/evidence, fees/deadlines with checked date, application steps, appeal/escalation, FAQs, source locators, limitations and correction action.
- [ ] Split evergreen advice from rapidly changing prices, scheme forms, portals, eligibility, offices, deadlines, contacts and government role changes.
- [ ] Make phone numbers and official URLs clickable and correct; if an official portal is unreadable, do not claim the hidden JavaScript text was verified.
- [ ] Show draft status and qualified review accurately; HOLD unverified high-stakes instructions.

### P3.2 — Chapter 7: job/income-loss pilot (first major replacement)
- [ ] Inspect `data/en-in/chapters/07-living-with-no-money.json`, 7-1 through 7-23, and the partial verification report; eliminate absence-first presentation of foreign unemployment schemes.
- [ ] Route by salaried, ESIC-covered, informal/gig, self-employed and rural households; ask only eligibility questions that change the next action.
- [ ] Independently verify current exact ESIC, EPFO, MGNREGA, NCS, ration, emergency shelter, wage-dispute and applicable assistance evidence before publishing eligibility statements.
- [ ] Separate ESI employment-injury/benefit types, provident fund withdrawal, rural employment guarantee and job-search tools rather than describing them as one unemployment insurance program.
- [ ] Document unavailable/unreadable passages and HOLD their claims; provide safe non-eligibility-specific actions where possible.
- [ ] Implement replacement routes and preserve all 7-1–7-23 legacy anchors, saved reading and source attribution.
- [ ] Test one end-to-end scenario for each employment branch, plus excluded/ineligible/unknown paths and unsupported state selection.

### P3.3 — Remaining priority journeys
- [ ] **Cyber-fraud:** revalidate published route after any source/effective-date change, limitations for authorized vs unauthorized transactions, 1930/report portal and bank escalation; re-review exact revision.
- [ ] **Emergency healthcare:** immediate help, verified emergency services, nearest appropriate facility guidance, public coverage pathways, no unsupported medical treatment instructions.
- [ ] **Tenancy/housing:** agreements, deposits, notices, disputes, jurisdiction-sensitive caveats; no blanket India-wide tenant law claims.
- [ ] **Identity corrections:** Aadhaar/PAN and related document corrections, official portal choices, identity/privacy/fee caveats and verified escalation.
- [ ] **Work and unpaid wages:** employment-type distinctions, documented rights, complaint routes and non-legal-advice warnings.
- [ ] **Education, families, seniors, accessibility:** representative original India-useful content; check target audience and state variance.
- [ ] Add practical pages for rural and low-literacy conditions without assuming smartphones, English proficiency or online payment access.

### P3.4 — Acceptance samples
- [ ] Each released pilot has exact primary sources checked against claims, documented review scope, visible last-updated/checked dates and noninvented jurisdiction status.
- [ ] Reader can choose a scenario and follow a complete action path including a truthful "unknown/not eligible/not supported" outcome.
- [ ] Test source failures, 404 official links, changes in legal effective dates, retractions and correction reporting.

**P3 exit evidence:** working, independently sourced representative Indian problem journeys accessible from home/search; risk controls actually enforced. Not every desired guide must be published if evidence/review is missing; held items stay explicitly open in the epic.

---

## P4 — Reader-facing IA, accessible UX, search and mobile reliability

**Goal:** ensure real readers can find and use approved material. **Trackers:** #6, #8, #3. **Depends on:** stable canonical routes; can prototype sooner.

### P4.1 — Navigation and discovery
- [ ] Ship **two equal first-class entry points**: the reading library and practical problem-solving guides, neither demoted to a secondary or archive experience, sharing search, discovery and accessible navigation (owner decision, 19 November 2026).
- [ ] Preserve library deep links, anchors, bookmarks, reading progress and attribution through the new IA.
- [ ] Home has **Get help with a problem**, **Everyday life**, **Life stages**, **Browse topics**, plus search; highlight urgent routes without distracting animation.
- [ ] Allow changing state/UT and language without sign-in, with visible fallback/unsupported notice and no false coverage claims.
- [ ] Search returns relevant official Indian journeys, handles common colloquial terms, typos and script differences where indexed; test no-results and stale/withdrawn content.
- [ ] Build accessible breadcrumbs, next/previous actions, related topics, source displays, full keyboard use, semantic landmarks and focus management.
- [ ] Present uncertainties, evidence quality, reviewer identity/scope and correction links close to the actionable text.

### P4.2 — Reading experience and progress
- [ ] Preserve old reading features, picks, bookmarks, export/import, dark/light, font size and responsive chapter navigation where still useful.
- [ ] Fix mobile bead pointer and recall deck; test scroll/overlay interactions, reduced motion, screen readers and slow/failed hydration.
- [ ] Check no accidental auto-marking of new rewritten lessons as completed; show retired items transparently.
- [ ] Avoid noisy mascot/comic treatment on illness, death, crisis, financial loss, disability and legal-risk advice.

### P4.3 — WCAG and performance
- [ ] Target **WCAG 2.2 AA**: contrast, focus indicators, 44px-class tap targets where relevant, accessible names, forms/errors, landmarks, skip links and no color-only state.
- [ ] Test 360×800, 390×844, 768×1024, 1440×900 plus narrow and low-end Android actual hardware; keyboard-only and reduced motion.
- [ ] Establish measured Core Web Vitals baseline (LCP, INP, CLS), loading time and payload budgets; document devices/networks instead of inventing scores.
- [ ] Test low connectivity, font failure, JS off/slow, reader search, large text, long chapters and RTL-ready architecture if later needed.

**P4 exit evidence:** testable reader journey from home → relevant help → state/language → official source → actionable step → correction, plus mobile and accessibility evidence. Device-specific acceptance stays open without real-device observation.

---

## P5 — India jurisdiction coverage and source freshness

**Goal:** trustworthy geographically specific content, **not** just a 36-item dropdown. **Trackers:** #6, #5.

### P5.1 — Jurisdiction registry and UI
- [x] 28 state + 8 UT registry exists from PR #17; entries originally unsupported by design.
- [ ] Confirm codes/names/versioning and national → state/UT → local overlay precedence, with legal effective dates and known unsupported states.
- [ ] Show `verified`, `partial`, `not yet verified`, `withdrawn` at claim/journey level; never convert a structural registry into a coverage badge.
- [ ] Clear generic India guidance fallback where a local claim is not supported, without pretending national rules apply identically in every state.

### P5.2 — Verified state pilots
- [ ] Use Maharashtra as a proposed pilot and select two other states **based on actual source accessibility and reader value**, not arbitrary fabricated coverage.
- [ ] For each state journey, identify official issuing agency, authority, exact section, effective date, eligibility, forms, contact/escalation and differences from national guidance.
- [ ] Store independent evidence/review events and test conflict resolution when national and state guidance differ.
- [ ] Run negative-path tests for unsupported state, expired rule, moved link, temporary outage, user choosing another state mid-journey and no location access.

### P5.3 — Coverage reporting and maintenance
- [ ] Publish counts by **verified published journey × jurisdiction × language**, with denominators, dates and explicit gaps.
- [ ] Add scheduled monitoring for changed official sources, but require human/editorial approval before changing high-risk public claims.
- [ ] Define review frequency by risk and volatility; refresh date must reflect actual passage inspection, not a scheduled job firing.

**P5 exit evidence:** at least a defensible national/state-variant pilot with exact source review, honest all-36 metadata, and safe unsupported-state fallback. **Nationwide comprehensive verified content remains open until actually delivered.**

---

## P6 — English, Hindi, Marathi pilots and localization architecture

**Goal:** useful supported multilingual journeys with independent correctness, not machine-fluent unsafe translations. **Trackers:** #7, #5, #8. **Depends on:** P2 canonical model + P3 approved content.

### P6.1 — Versioned locale infrastructure
- [ ] Model canonical content, locale revision, localized route, source links, legal terminology, reviewer record, last checked date and fallback state independently.
- [ ] Implement `en-IN`, `hi-IN`, `mr-IN` language switch, SEO/hreflang/canonical rules and accessible labels.
- [ ] Mark untranslated or AI-draft content visibly; never claim complete Hindi/Marathi coverage because UI strings exist.
- [ ] Verify Pagefind/search behavior for Latin, Devanagari and mixed search terms, including typographic normalization and stop words.

### P6.2 — Translation and linguistic review
- [ ] Select small, useful and adequately sourced pilot journeys; translate interface and reviewed content with traceable canonical revision.
- [ ] Validate numbers, lakh/crore formatting, INR, helplines, names, eligibility, negative words, dates/effective dates, deadlines and critical safety exceptions against canonical version.
- [ ] Obtain actual competent reviewer evidence for high-impact translations where required; do not invent native-language endorsement.
- [ ] Hold translated high-risk changes after upstream canonical revision until independently re-reviewed.
- [ ] Test fallback behavior, links, keyboard, font loading, line wrapping, low-end Android and right-language narration pairing.

**P6 exit evidence:** at least one genuinely reviewed end-to-end practical journey in each pilot locale, accurate search and visible true coverage counters; remaining language requests tracked without false completion.

---

## P7 — Installable PWA, offline packs, checklists and audio

**Goal:** one real offline end-to-end guide, not merely a manifest or a play button. **Trackers:** #7, #8. **Depends on:** P2 routes, P6 locale metadata, approved lesson content.

### P7.1 — Offline PWA architecture
- [ ] Manifest, icons, installability, appropriate service worker/caching strategy and scope; respect static GitHub Pages base paths.
- [ ] Selective pack manifest keyed by journey, state, locale, content revision and verified date; avoid downloading every piece by default.
- [ ] Handle install, update, first load, offline navigation, deleted/retired content, stale high-risk guidance, failed updates, storage quotas and eviction.
- [ ] Ensure offline text includes source/caveat/date and warns when freshness cannot be rechecked; no automatic unreviewed content upgrades.
- [ ] Keep privacy local by default, without pushing personal reading data or checklist details to third parties.

### P7.2 — Checklists
- [ ] Represent checklist steps as stable, versioned, approved action records linked to claims; never manufacture medical/legal commands from summaries.
- [ ] Implement accessible completion, undo, save, reset, optional print/export and progress migration; keep user notes private unless explicit export.
- [ ] Test offline completion, reinstall/update, step modification, stale pack, imported old progress and screen reader semantics.

### P7.3 — Audio
- [ ] Provide transcript-linked audio and playback controls, speed and pause/resume, accessible labels and reduced-bandwidth options.
- [ ] Test pronunciation of Indian names/agencies, numbers, official helplines, dates, negation and legal caveats in each shipped language.
- [ ] Authenticate assets and preserve licensing/attribution; mark machine-generated audio as such where appropriate.
- [ ] Verify correct text/audio revision matching and offline audio availability only when a selected pack includes it.

### P7.4 — Actual Android acceptance
- [ ] On low-cost Android, install → select language/state → download verified pack → disconnect network → open guide → use checklist → play matching audio → resume saved progress → reconnect/update without data loss.
- [ ] Test at low storage, private mode, offline cold-start, partial downloads, network flaps and stale-content safety warnings.

**P7 exit evidence:** reproducible network-off demo with checklist/audio and progress preservation, plus human-device evidence. Mere service-worker registration is not done.

---

## P8 — Identity, privacy, correction system and sustainability

**Goal:** safe public stewardship with transparent content ownership and licensing. **Trackers:** #8, #4.

### P8.1 — Name and design identity
- [ ] Research India-first name candidates, linguistic meanings, pronunciation, target audience fit, trademark/domain risks and accessibility.
- [ ] Propose brand, logo, typography and source-transparent design system; avoid government-implying names and logos.
- [ ] Obtain explicit owner selection **before** buying a domain, renaming repo or migrating public URLs; preserve existing route/SEO redirects.
- [ ] Ship brand changes only with source attribution, UX and performance regression checks.

### P8.2 — Reader correction and content lifecycle
- [ ] Provide visible report/correction entry point on actionable pages, including claim reference, anonymous submission option and basic spam controls.
- [ ] Record editorial triage, owner, severity, issue-to-fix status, corrected version, withdrawal and public changelog with privacy-safe minimal data.
- [ ] Define urgent misinformation removal/rollback procedure; corrected claims require evidence and proper review before republication.
- [ ] Schedule official source/freshness reviews, but never treat automated check success as human passage approval.

### P8.3 — Legal, attribution, privacy and funding
- [ ] Verify upstream CC BY 4.0 authorship/changes, translations, images, fonts, audio, code and third-party assets; identify actual license obligations.
- [ ] Clearly distinguish information from personalized medical/legal/financial advice; use readable limitations without making disclaimers a substitute for safety.
- [ ] Validate privacy claims against real code (analytics, localStorage, search, offline cache, service worker, submissions, logs, third parties); provide necessary disclosures/consent where applicable.
- [ ] Propose optional donations/sponsor placements with editorial independence, disclosures and no effect on ranking or critical access.
- [ ] Require owner-controlled payment onboarding/merchant identity, account permissions and expenses; do not insert a payment link or make commitments without permission.

**P8 exit evidence:** chosen approved identity or documented temporary identity for pilot, working correction loop, validated license/privacy disclosures, editorial firewall and migration plan; no unauthorized purchases or identity actions.

---

## P9 — Release verification, evidence pack and operating handoff

**Goal:** prove the product works for its claimed scope in production. **Trackers:** #4, #8 and every still-open blocking issue. **Depends on:** relevant previous gates, not their calendar dates.

### P9.1 — Code, content and security release matrix
- [ ] Exact release SHA passes applicable `npm ci`, Astro/TS, content manifest, `verify:publication`, `verify:jurisdictions`, full build, `scan:terms`, `check:links`, inventory/redirect migrations, Playwright and relevant offline/localization checks.
- [ ] Dependency audit and Actions permission review documented; no unaccepted high/critical runtime exposure and no unresolved release-blocking dev-chain risk.
- [ ] Recheck every published high-risk claim's effective date, source accessibility, revision, jurisdiction, author/verifier separation and required real approval; no hidden unsupported routes.
- [ ] Validate all changed URLs/anchors, export/import formats, progress migrations, search indexes, hreflang, canonicals, sitemap, robots, 404 and RSS/change notices if supported.
- [ ] Verify WCAG 2.2 AA target findings, actual Android touch/offline checks, desktop/tablet behavior, Core Web Vitals, network/low-storage failure states and privacy.
- [ ] Produce the **final evidence matrix** mapping every P0–P9 gate to its commit, tests, source/human verification where required, production observation and open-risk disposition; no public promotion before it passes in full.

### P9.2 — Production end-to-end and release notes
- [ ] Validate deployed origin corresponds to tested SHA. CI success alone does not prove live publishing.
- [ ] Smoke-test public issue journeys, state/language switch, source links, external-official links, offline install/pack, checklist, audio, corrections, progress and rollbacks.
- [ ] Publish honest per-journey/per-locale/per-state coverage metrics and unsupported limits; no fake "all India verified" statement.
- [ ] Generate release notes, known issues, editorial/source risk register, evidence links, human-review list, security report, accessibility results and rollback plan.
- [ ] Confirm owner approvals for domain changes, identity/payment actions and any explicitly high-risk professional/publication decisions; no inferred consent.
- [ ] Update epic #4 and linked issues accurately: checked only for demonstrated gates; leave unverified/nonreleased work explicitly open.

### P9.3 — Maintenance and failure response
- [ ] Establish assigned owners for monitoring broken official links, effective-date changes, cyber-fraud notices, service-worker stale packs and reader corrections.
- [ ] Document rollback/withdrawal procedures and how an agent starts another safe implementation cycle.
- [ ] Add periodic CI/dependency/freshness checks with clear distinction between **detected change** and **human-approved new public guidance**.
- [ ] Keep open issues/risks searchable; no invented background work or implied perpetual autonomous execution.

**P9 exit evidence:** exact release SHA, tested and deployed origin, verified coverage disclosures, green required gates, attributable review/signoff, a realistic rollback plan, no unresolved blocking safety/security/functional defect. **Only then** is it permissible to close epic #4.

---

## 2. Cross-phase acceptance traceability

| Epic acceptance area | Execution phases | Linked tracking | Evidence required |
|---|---|---|---|
| Gate 0: stable honest foundation | P0, P4, P9 | #4, #3, #25 | Exact-head green CI; mobile/device evidence; corrected claims and security risk disposition |
| Gate 1: source/trust and stable IDs | P0, P1, P2 | #4, #5, #23 | Source/claim/reviewer records; broad fail-closed checks; old-state migration tests |
| Gate 2: useful Indian problem guides | P1, P3, P5 | #4, #6, #23 | Representative working journeys, exact primary sources, eligibility and coverage truth |
| Gate 3: identity and accessibility | P4, P8, P9 | #4, #8 | Domain/name clearance, approved accessible experience, migration and mobile evidence |
| Gate 4: locales and offline/audio | P6, P7, P9 | #4, #7 | Multilingual verified pilot, network-offline checklist/audio Android walk-through |
| Gate 5: release and sustainability | P8, P9 | #4, #8 | Correction loop, licensing/privacy, risk register, deployment proof and review history |

### 2.1 Definition of done for every practical guide

- [ ] India problem and intended readers defined; scope and state selection understandable.
- [ ] Current authoritative primary source mapped **per substantive claim**, with exact locator/effective date/checked date.
- [ ] Eligibility branches and exceptions tested; no foreign-only service masquerades as Indian help.
- [ ] Required evidence/approval exists for the exact revision/risk; no unqualified reviewer called a specialist.
- [ ] Emergency/medical/legal/financial caveats visible and correct; no unsafe quick-fix or individual outcome guarantee.
- [ ] Published route, redirects, search inclusion, language/fallback and local storage behavior verified.
- [ ] Accessibility, mobile, broken links, correction access, freshness/withdrawal scenario and release SHA recorded.

### 2.2 Mandatory CI/QA commands (verify actual scripts before running)

```bash
npm ci
npm run check
npm run build
npm run verify:publication
npm run verify:jurisdictions
npm run scan:terms
npm run check:links
npm run india:worklist
npx playwright test
npm audit --json
```

Also use script-specific unit tests, source checks, performance/accessibility tools, and actual Android validation where those gates apply. `npm audit` may report an unresolved **development-only** advisory: investigate, document and preserve the finding rather than hiding it. Tests must run on the **actual PR head** and merged/deployed SHA, not an earlier green build.

### 2.3 Risk register minimum fields

`risk ID | category | severity | affected live route/asset | exact evidence | current state | mitigation | verification needed | next actor | review date | link`. At minimum track: high-risk false approval, unsupported India entitlement, missing official source, wrong state law, old progress loss, stale offline emergency info, mobile touch mismatch, package advisory, reviewer authentication, misleading translation, content attribution, privacy/donation disclosure and incorrect SEO migration.

### 2.4 Actual owner intervention queue

| When | Exact owner action | Agent may do beforehand |
|---|---|---|
| **Now, authenticity only** | Confirm whether the recorded 17 Nov cyber-fraud source-reading/self-review in `reports/india-fraud-guide-human-review.md` really occurred; if not, correct record and reassess live guide | Inspect PR #15, code gate, citations and page; prepare safe correction/withholding PR |
| High-risk release review | Arrange/approve **real, appropriately qualified** legal/medical/financial review where the publication rules require it | Prepare compact evidence packet and list unresolved claims; HOLD until verified |
| Device validation | Provide actual touch/offline test observation when automated hardware is unavailable | Automate browser tests and publish reproducible device checklist |
| Brand/domain migration | Select brand and authorize domain/production URL changes | Research candidates, trademarks, UX options and rollback plan |
| Payments/third-party accounts | Approve spend, identity verification and account permissions | Design compliant, editorially independent integration without activating it |

**No other already-approved product decisions should be reasked.** If an owner action is pending, work on another safe task rather than blocking all implementation.

---

## 3. Agent orchestration and safe autonomy

**Lead / integrator:** owns this plan, merges verified outputs, maintains epic checkboxes and final risk state.

**Specialists (when supported):** (A) CI/security, (B) editorial India primary sources and dispositions, (C) content schema/validator/migration, (D) reader UX/a11y, (E) locale/offline/audio, (F) independent QA/claims verifier. Partition by files/branches to minimize collisions. Lower-cost agents may perform deterministic listing/classification, but high-risk evidence and integration require deeper review. Never assume a connector/skill exists without confirming tool availability.

**Preferred immediate sequence:**

1. Refresh baseline and correct stale PR #15 status claims in GitHub tracking.
2. Diagnose the real one-test mobile failure and stabilize PR #26; protect older `PLAN.md` in history before replacing it with this plan.
3. Address mobile navigation/security and review-record honesty (P0) in parallel.
4. Complete canonical IDs, full-route content gates and rollback/migration fixtures (P2).
5. Work Chapter 7 jobs/income pilot (P3) while the 765-tip queue advances (P1); keep unverified claims held.
6. Ship reader discovery and jurisdiction pilots (P4/P5) based on reviewed material.
7. Release reviewed `en-IN`/`hi-IN`/`mr-IN` pilot, then offline packs/checklists/audio (P6/P7).
8. Implement correction/identity/governance (P8), complete production evidence (P9), then close only verified epic gates.

**Checkpoint after each PR:** produce concise `Completed | Verified SHAs/CI | Risks | Blockers (owner vs external) | Next unblocked task`. Where an agent session ends, leave the exact next branch, issue, command and blocker as a durable handoff. **Do not claim background or continuous work that the current harness cannot actually perform.**

## 4. First executable task for the next agent session

**Task:** reconcile repository plan and fix the current failing PR #26 test, not start another architecture audit.

1. Fetch `master`, `PLAN.md`, roadmap, `AGENTS.md`, PR #26 head/diff, epic #4, #23, #25 and workflow 44374495592.
2. Diagnose `tests/e2e.spec.ts` recall-deck hidden state at 390×844; add deterministic regression and fix app/test cause.
3. Prepare scoped PR changes preserving old root plan at `docs/history/legacy-reading-edition-plan.md`; integrate this root `PLAN.md` without overwriting unrelated PR #26 updates.
4. Run exact-head tests, review diff, then integrate only if approved checks and policy pass. Update issue #4's stale PR #15 statement.
5. Record status/evidence and continue to P0's next unblocked gate.

**STOP CONDITIONS:** no trusted tool access needed for safe repo work, actual authorization/credentials required, published high-risk claims cannot be verified, required qualified human sign-off missing, or all verified acceptance gates complete. A single blocked content item is **not** a reason to stop unrelated coding, evidence gathering or UI work. Escalate exactly what the owner must do, with link and consequence.

**Success is a useful verified public India-first product with transparent limitations, not a green test badge covering incomplete or unsafe content.**
