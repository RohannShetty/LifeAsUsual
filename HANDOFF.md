# HANDOFF — 2026-10-30

Read this first in a new session, then read `AGENTS.md` (hard rules) and
`openspec/changes/redesign-monsoon-ornaments/{proposal,design,tasks}.md`.

Purpose: finish three workstreams that were planned but not started. All three
are unblocked. Nothing is half-written — the tree is consistent and every gate
is green as of this snapshot.

---

## 0. Where things stand

| Fact | Value |
| --- | --- |
| Repo | `D:/github_softwares/howtolivebetter` |
| Branch | `master`, clean against `origin/master` at `677c7b8` (pushed 2026-10-30) |
| Version | v2.6.1 (Monsoon Glass) |
| Built site | `dist/` present, built 2026-10-30 11:48 |
| OpenSpec | exactly ONE change: `redesign-monsoon-ornaments`, all 4 artifacts done, `validate --changes --strict` green, zero implementation code written |
| India manifest | 34 chapters, all `checked`, all `humanReview: pending`, 0 open issues |

Uncommitted at snapshot time:

- `M reports/qa.md` (Check 4 now points at the review packets)
- `?? openspec/changes/redesign-monsoon-ornaments/`
- `?? reports/human-review-tier-a.md` (550 lines, 19 Tier A chapters, 477 tips)
- `?? reports/chapter-04-line-review.md` (268 lines, all 18 tips of chapter 4)
- `?? reports/tools/make-review-packets.mjs` (regenerates both packets)
- `?? HANDOFF.md` (this file)

Gates verified 2026-10-30:

- `verify-india` PASS — 34 chapters, 765 tips, all Tier A counted
- `verify` PASS — 34/34 chapters, 765/765 tips, 2,491 URL checks, 11,682 number checks, 0 CJK
- `scan-dist-terms.mjs --final` — 52 pages, 0 banned terms
- `check-links.mjs` — 52 pages, 2,234 links resolve
- Playwright — `test-results/.last-run.json` says passed (184 tests)
- Mobile Lighthouse (Check 6) — recorded 27 Oct in `reports/qa.md`: chapter 02 desktop 99/100/100/100, mobile **91/100/100/100**, FCP 2.6s, LCP 2.8s, TBT 0ms, CLS 0.041. Check 6 is GREEN; do not re-litigate it.

Housekeeping: local branch `rewrite/india-edition` is fully merged and can be
deleted (`git branch -d rewrite/india-edition`). It never existed on GitHub —
`git ls-remote --heads origin` lists only `master`.

---

## 1. Sandbox facts — read before running anything

`npm`, `npx` and `tsx` **fail** in this environment: the esbuild service uses a
named pipe the sandbox blocks (`EPERM`). Use plain `node`:

```bash
node --experimental-strip-types scripts/verify-india.ts --final
node --experimental-strip-types scripts/build-india-data.ts
node --experimental-strip-types scripts/verify.ts
node scripts/scan-dist-terms.mjs --final
node scripts/check-links.mjs
node reports/tools/make-review-packets.mjs
```

Playwright and Astro through `node` directly:

```bash
node node_modules/astro/astro.js preview --port 4321     # what playwright.config.ts expects
node node_modules/@playwright/test/cli.js test            # both specs, 4 viewports, 184 tests
node node_modules/@playwright/test/cli.js test tests/e2e.spec.ts --project=Mobile-360x800
node node_modules/astro/astro.js build                   # may still hit the esbuild pipe
```

- Browsers are installed: `%LOCALAPPDATA%/ms-playwright/chromium-1248`.
- `astro build` goes through Vite/esbuild and can fail with the same `EPERM`. If
  it does, ask the human to run `npm run build` in a normal terminal; do not
  fake a build or hand-edit `dist/`.
- Lighthouse is **not installed** and needs the network. Do not promise a fresh
  number; the 27 Oct measurement in `reports/qa.md` is the recorded evidence.
- tsx-only scripts that import through `tsconfig` paths may not work under
  `--experimental-strip-types`. `scripts/india-status.ts` is unverified there.
- Escaping trap in this harness: backslash escapes written through tool calls get
  collapsed (`\s` arrives as a bare `s`, `\uXXXX` becomes an invalid escape).
  Write real characters (`…`, `—`, `₹`, `≥`) and build regexes from character
  classes or `String.fromCharCode(92)` instead of literals.

---

## 2. Workstream A — implement `redesign-monsoon-ornaments`

Goal: add three brass ornament systems without changing layout, navigation,
palette or body typography. Additive only. Source of truth is
`openspec/changes/redesign-monsoon-ornaments/tasks.md` — work the six groups in
order and tick boxes as you go.

Files you will touch:

- `src/styles/ornament.css` — NEW, one token ladder (D6): `--orn-hairline: 1px`,
  `--orn-rule: 2px`, `--orn-bead: 5px`, `--orn-arch-h: 22px`, `--orn-gap: 20px`,
  `--orn-line: color-mix(in srgb, var(--color-brass) 62%, transparent)`
- `src/layouts/BaseLayout.astro` — import `ornament.css` after `ui.css`, before
  `comic.css`
- `src/pages/chapters/[n]-[slug].astro` — kolam map overlay, arch crown, seal,
  `--kolam-trace` wiring
- `src/styles/ui.css` — the `.inr-ref` rule (D5: brass hairline underline at the
  existing 0.78em, `font-variant-numeric: tabular-nums`); `src/scripts/inr.ts`
  must NOT need an edit
- `CHANGELOG.md` (v2.7.0), `DECISIONS.md`, `reports/qa.md`

Non-negotiable constraints from the design:

- Kolam loop = ONE canonical petal-cusp closed path in a 100x100 viewBox per
  chapter, `preserveAspectRatio="none"` + `vector-effect="non-scaling-stroke"`,
  progress via `pathLength="1"` and `stroke-dashoffset: calc(1 - var(--kolam-trace, 0))`.
  Do not thread a serpentine line through bead centres — the grid wraps with
  `repeat(auto-fill, 20px)` and it would need three media-queried SVGs
  (765 anchors x 3).
- Beads stay a CSS grid at `--kolam-pitch: 20px` (14px disc + 6px gutter); the
  44px `::after` touch target stays; do not widen the pitch.
- Arch crown is a separate stroke-only inline SVG in the panel padding band at
  `height: var(--orn-arch-h)` (about 22px). No `clip-path` on the panel.
- Seal is static, `aria-hidden`, ≤400ms settle, only under
  `prefers-reduced-motion: no-preference`; it survives Calm Mode AND Comic
  effects off. Characters stay behind `!isCalm` — the seal never joins them.
- The cast never touches the advice (AGENTS.md rule 6). Ornament is not a
  character: no copy, no advice, no numbers.

Acceptance for A:

1. Rendered reader text is byte-identical to v2.6.1 (diff the tip body text of a
   sample chapter before and after).
2. Overlay is `aria-hidden` and adds no JS; `--kolam-trace` comes from the
   existing progress ledger, not a new listener.
3. At 360px with 130% text: no horizontal overflow, arch does not clip the title
   focus ring, loop cusps survive, beads still clickable at 44px.
4. All four gates above re-run green, then `openspec validate --changes --strict`.
5. Then archive: `openspec archive redesign-monsoon-ornaments` (skill:
   `openspec-archive-change`), which applies the spec deltas.

---

## 3. Workstream B — chapter 4 line review (acceptance Check 4)

Worksheet is ready: `reports/chapter-04-line-review.md` — 6 chapter-level checks
plus all 18 tips, each with Cost / In plain words / Benefit / Caveats and the
first words of the Sources line to compare against source.

Method:

1. Build/preview, then open `/chapters/4-<slug>/` next to `source/book/04-*.md`.
2. Walk the 18 tip rows. For each: numbers, units, currency (stays in ¥/₹ as in
   source — never converted), evidence grade, citation, and that nothing was
   added, softened, reordered or strengthened.
3. Resolve the three carried flags:
   - 4-16 — ATUS figures (2.6h TV, 5.2h leisure) are **unverified**; bls.gov
     returns 403. Either re-source them or mark the claim as graded/disputed per
     project convention. Do not quietly drop the numbers.
   - 4-16 — non-blocking overclaim note; tighten the sentence or accept it.
   - see the packet for the exact wording of each.
4. Cross-check `reports/spotcheck.md` (3 random tips per chapter, chapter 4 pilot
   already logged there).
5. Record the outcome in `reports/qa.md` Check 4 and, if text changed, re-run
   `verify.ts` + `scan-dist-terms.mjs --final` + `check-links.mjs`.

Sign-off itself belongs to the human reviewer. Tier A India sign-off is a
separate, larger queue: `reports/human-review-tier-a.md` (19 chapters, 477 tips,
worst first: chapter 08 with 24 decisions and 14 blocked sources, 09, 07).

Registering a verdict (do not run this yourself unless the human states it):

```bash
node --experimental-strip-types scripts/india-status.ts 8 reviewed --human=signed-off
node --experimental-strip-types scripts/india-status.ts 8 reviewed --issue="..."
```

`scripts/verify-india.ts:341` fails the build if a chapter is `reviewed` without
`--human=signed-off`. If the tsx path is broken in the sandbox, edit
`data/en-in/manifest.json` directly and regenerate with
`build-india-data.ts`, then re-run `verify-india --final`.

---

## 4. Workstream C — visual sweep (Check 5 evidence, pre- and post-change)

Run this BEFORE touching CSS (baseline of v2.6.1) and again after Workstream A.

```bash
node node_modules/astro/astro.js preview --port 4321
node reports/tools/capture-screens.mjs        # writes PNGs to reports/visual/ (gitignored)
node node_modules/@playwright/test/cli.js test
```

- `reports/tools/capture-screens.mjs` shoots 8 named states: home and chapter at
  1440x900 and 390x844 across the three palettes (neel / chandni / kora) plus an
  open-fold state. Read the PNGs with the image reader, not by guessing.
- Playwright covers 360x800, 390x844, 768x1024, 1440x900; light and dark;
  reduced motion on and off; Comic effects on and off. Assertions already in
  `tests/e2e.spec.ts` (193 lines) and `tests/india-rewrite.spec.ts` (98 lines):
  no horizontal overflow, touch targets ≥44px, progress persists across reload,
  Reset/Export/Import, chapter-complete moment fires once.
- Record the sweep in `reports/qa.md` Check 5 with the exact command and pass
  count. Add a short visual note (what changed, what was checked) — the previous
  round used `reports/monsoon-glass.md` as the model.

---

## 5. Suggested commit sequence

```
chore(handoff): add session handoff for ornament + review work
docs(reviews): add Tier A and chapter 4 human-review packets with generator
feat(reader): v2.7.0 monsoon ornaments (kolam map, arch crown, completion seal)
docs(qa): record visual sweep and Check 4 review outcome
chore(openspec): archive redesign-monsoon-ornaments and apply spec deltas
```

Push only after the gates pass; `master` is currently identical to
`origin/master`, so the human can also push from their own terminal.

---

## 6. Hard rules that bite during this work (from AGENTS.md)

1. Zero CJK in anything shipped — pages, alt text, meta, slug, JSON-LD, even
   console output.
2. Never summarize, omit, add, reorder, soften or strengthen the source. Every
   number, unit, date, statute, grade, DOI and URL stays exactly as sourced.
   Currency stays RMB/published currency; never convert.
3. Do not animate body text. No characters, SFX, halftone or ink outline inside
   the reading column. Nothing raster or Lottie.
4. Calm chapters render with no cast, SFX or bursts; Comic effects off removes
   all characters and bursts.
5. Privacy: no analytics, cookies or third-party requests; progress lives only in
   `localStorage`; fonts self-hosted.
6. Do not stop to ask unless fully blocked.

---

## 7. Paste this to start the new session

```text
Read HANDOFF.md at the repo root, then AGENTS.md.
Then execute the three workstreams in this order: C (visual sweep baseline),
B (chapter 4 line review, surfacing every discrepancy for my sign-off),
A (implement openspec change redesign-monsoon-ornaments end to end, then
re-run the visual sweep and all gates, then archive the change).
Do not ask me to re-confirm anything already decided in HANDOFF.md.
```

