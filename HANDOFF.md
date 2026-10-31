# HANDOFF — 2026-10-31 · v2.7.0 "Monsoon Ornaments"

Supersedes `HANDOFF.md` dated 2026-10-30. That version was written *before* the three workstreams ran;
its numbered sections are now history (§1 records what actually happened). Read this file, then
`AGENTS.md` (hard rules), then `reports/qa.md` line 84 and the v2.7.0 block at lines 58-82.

**Nothing is half-written.** The tree is clean, the site builds, all gates passed again at
2026-10-31 23:34-23:40 IST on this exact source, and the six commits are unpushed. What is open is
human work: three small text fixes, seven edition decisions, one visual review, one Lighthouse run.

---

## 0. State at a glance

| Fact | Value |
| --- | --- |
| Repo | `D:/github_softwares/howtolivebetter` |
| Branch | `master`, working tree clean |
| HEAD | `18c0886` was the work tip; this handoff is committed on top. **Six commits ahead of `origin/master` (parent of the work was `677c7b8`), not pushed.** |
| Version | v2.7.0 (Monsoon Ornaments), `CHANGELOG.md` entry dated 2026-10-30 |
| Built site | `dist/` rebuilt 2026-10-31 23:34, 52 pages, 9.03 s |
| OpenSpec | ONE change, `redesign-monsoon-ornaments`, 17/17 tasks, status complete — **implemented but NOT archived** |
| India manifest | 34 chapters, all `checked`, all `humanReview: pending`, 0 open issues; 19 of them Tier A |
| Source submodule | pinned `5f210ca` (`epub-latest-2-g5f210ca`), untouched the whole session |
| Branches | `master` only — `rewrite/india-edition` was merged and deleted |

Uncommitted at handoff time: nothing. Generated/gitignored evidence:
`reports/visual/` (22 PNGs plus their JSON metadata), `test-results/`, `pagefind/`, `dist/`.

---

## 1. What changed since the 30 October handoff

The old handoff listed three unstarted workstreams. All three ran; here is the outcome:

| Workstream | Outcome | Evidence |
| --- | --- | --- |
| **C — visual sweep baseline** | Done: 8 screenshots of v2.6.1 and a 184-test Playwright baseline before any CSS moved | `reports/visual/`, `reports/tools/capture-screens.mjs` |
| **B — chapter 4 line review** | Done: all 18 tips + 6 chapter-level checks read against source. **3 blocking defects, 7 decisions, 5 notes, 0 numeric mismatches.** Two verification rows upgraded from "unverified" to read-from-primary. Nothing applied. | `reports/chapter-04-review-findings.md` (112 lines), worksheet `reports/chapter-04-line-review.md` |
| **A — implement `redesign-monsoon-ornaments`** | Done: four ornament surfaces shipped, reader text byte-identical, 216 tests green, change recorded. Archive step deliberately left open. | `CHANGELOG.md` [2.7.0], `DECISIONS.md` ADR-012, `reports/qa.md` :58-82 |

### The five commits

| Commit | What it holds |
| --- | --- |
| `c8f2b5f` chore(handoff) | The 30 October handoff plus `reports/tools/make-review-packets.mjs`, which regenerates both review packets |
| `f0452d0` docs(review) | `reports/chapter-04-line-review.md` (worksheet), `reports/chapter-04-review-findings.md` (findings), `reports/human-review-tier-a.md` (550 lines, 19 chapters, 477 tips) |
| `f68a401` feat(reader) | v2.7.0: 14 files, +985/−41. `src/styles/ornament.css` (new, 205 lines), `src/components/ReadingMap.astro` (+106), `src/pages/chapters/[n]-[slug].astro` (+70), `src/pages/index.astro` (+59), `src/styles/ui.css` (−18), `src/cast/particle-burst.ts` (±3), `tests/ornament.spec.ts` (new, 291 lines), three `reports/tools/*.mjs` measurement scripts |
| `17c891d` docs(openspec) | The four artifacts + three spec deltas checked in under `openspec/changes/redesign-monsoon-ornaments/` |
| `18c0886` docs(qa) | The v2.7.0 QA block in `reports/qa.md` |

### What shipped in v2.7.0

1. **One brass hairline family** (`src/styles/ornament.css`, imported from `src/layouts/BaseLayout.astro`
   after `ui.css` and before `comic.css`). Tokens `--orn-hairline` 1px, `--orn-rule` 2px,
   `--orn-bead` 5px, `--orn-arch-h` 22px, `--orn-gap` 20px; every line mixed from `--color-brass`
   (62/82% dark, 72/92% light). No token is redefined; `--color-brass` still lives once in
   `src/styles/tokens.css`.
2. **Kolam lattice on the reading map.** Each of the 34 clusters carries one closed petal-cusp contour in
   a 100x100 box, drawn twice: a static dim base (present with JS blocked) and a lit loop whose
   `stroke-dashoffset` follows `--kolam-trace`, written once per cluster by the existing ledger
   subscription. Beads stay a 20 px CSS grid; the 44 px targets stay.
3. **Arch crown on the home daily panel** — 22 px stroke-only SVG above the panel's existing top rule.
   No `clip-path`; focus ring cleared by measurement at 360 px / 130% text.
4. **Completion seal on every chapter page**, calm chapters included. `.chapter-celebration` is now always
   rendered and Calm Mode removes only the cast/ink frame; the burst is imported only when
   `.celebration-cast` exists.
5. **Ruled rupee annotation**: `.inr-ref` lost its fill, radius and border, gained a 1 px brass underline
   and tabular figures, and moved from `ui.css` to `ornament.css`. It only renders where an author RMB
   figure survives (`/guides/`), because rewritten chapters state rupees directly.

Two defects fixed on the way, both real:

- **Dead calm-chapter burst guard** — `src/cast/particle-burst.ts` read `document.body.dataset.calmChapter`,
  but the flag lives on `.chapter-page-root`. Calm chapters had been protected only by rendering no
  celebration at all.
- **A bead press could open a neighbour** — the 44 px targets overlap on a 20 px lattice, and the browser
  gave the click to whichever anchor painted last (pressing 1-3 reached 1-13). `initBeadResolution()` now
  resolves a pointer press to the nearest bead centre; keyboard activation (`detail === 0`) and
  non-primary buttons keep the anchor's own href.

### What did not change, on purpose

- **No tip text, data file, slug, layout, palette or type role.** Proof: HEAD built in a separate
  worktree, both `dist/` trees stripped of scripts, styles, SVG and comments, 52 pages compared —
  6,146,471 bytes each, no diff.
- **The source submodule** stays pinned at `5f210ca`.
- **The chapter 4 review changed nothing.** Every finding still stands against the shipped page; no
text was edited while reviewing.

---

## 2. What is verified, and how to reproduce it

Re-run on `18c0886` at 2026-10-31 23:34 IST, clean tree:

```bash
node node_modules/astro/astro.js build                      # 52 pages, 9.03 s
node --experimental-strip-types scripts/verify.ts            # 34/34 chapters, 765/765 tips,
                                                             # 2,491 URL checks, 11,682 number checks, 0 CJK
node --experimental-strip-types scripts/verify-india.ts --final   # 34 chapters, 765 tips, PASS
node scripts/scan-dist-terms.mjs --final                     # 52 pages, 0 banned terms
node scripts/check-links.mjs                                 # 2,234 internal links resolve
```

Behaviour, re-run against this same commit at handoff time (2026-10-31, 2.9 min):

- **Playwright 216 passed** in 2.9 min across 360x800, 390x844, 768x1024, 1440x900 — the 184-check
  baseline plus 32 ornament checks in `tests/ornament.spec.ts` (ornament cap in dark/light x reduced
  motion on/off x Comic effects on/off, seal settles exactly once, reduced-motion final state, 44 px
  bead targets, real bead presses in three chapters, the JS-blocked map, the ruled annotation).
- **Budgets**: reader JS 12.0 KB gzip (chapter), 11.5 KB (`/progress/`), 12.3 KB (home) against 60 KB;
  page HTML +0.2 to +0.5 KB gzip; character SVG 9.5 KB; comic font 10.6 KB; burst 0.96 KB gzip.
- **Ornament count per page**: home 1 arch / 0 kolam / 0 seal; chapter 0 / 0 / 1; `/progress/` 34
  contours, no motif inside a tip card.
- **Check 6's Lighthouse half is unverified for v2.7.0.** The toolchain is not installed here; the
  27 October mobile run (chapter 02: mobile 92 / 100 / 100 / 100, desktop 99 / 100 / 100 / 100,
  FCP 2.6 s, LCP 2.8 s, TBT 0 ms, CLS 0.041) remains the recorded evidence. See §4.

---

## 3. Pending: needs your decision (chapter 4 — acceptance Check 4)

Check 4 has two halves. The spot-check half is **done**: `reports/spotcheck.md` carries 3 random tips
for each of the 34 chapters (102 tips) plus the 18-tip chapter 4 pilot, all PASS. The line-review half
produced findings, and the worksheet's verdict block is still blank:

```
Reviewer:            (blank)
Date:                (blank)
Verdict (PASS / changes required):   (blank)
```

Full detail with quotes and line numbers: `reports/chapter-04-review-findings.md`. Summary:

### Three blocking defects (rule breaches, not taste)

| ID | Tip | Problem | Proposed |
| --- | --- | --- | --- |
| **F1** | 4-16 in plain words | "gives that half of your leisure time back" strengthens the source's *the saving is inside that block* into a promise of ~2.6 h/day, while the same tip's caveat admits no study measured a saving | "Switching to viewing information at scheduled times, the time you win back is the time you no longer spend in front of it." |
| **F2** | 4-13 caveats | "as in Section 10" — the source says *item 10 of this section*; "Section 10" resolves to a different chapter of the book | "as in item 10 of this section" |
| **F3** | 4-9 in plain words | generalises the weak link to all "personality traits" while the same tip's benefit lists conscientiousness and impulsivity as strong correlates, and drops self-control from the predictors | "Procrastination has little to do with laziness, or with traits like neuroticism and sensation-seeking. What predicts it is how unpleasant the task feels, whether you believe you can complete it, how easily immediate temptations pull you away, and how much self-control you have." |

### Seven decisions that are yours (D1-D7)

| ID | Tip(s) | The choice |
| --- | --- | --- |
| **D1** | 4-13 | "about ₹300–₹1,000" replaces the source's "tens of yuan". Keep the indicative band, drop the amount, or mark it indicative in the caveat — rule 2 (currency as published) and a rupee reader's needs cannot both be met by one sentence |
| **D2** | 4-13, 4-15 | Appended MoHFW/WHO sources back no claim in either tip. House convention (chapter 1 does it after real citations) — keep everywhere, or attach these two to a claim they support |
| **D3** | 4-13 | Crisis line swapped 12356 → Tele-MANAS 14416. Edition-mandated by the banned-term scan, but no citation and invisible to the reader. Accept, and decide whether the line needs its own source |
| **D4** | 4-14 | China housework survey (1 h 17 min, 38,500 households) removed, leaving a tip about your hourly wage with no quantity. State the arithmetic in words, or leave it |
| **D5** | 4-15 | Largest divergence in the chapter: CNNIC figures removed, TRAI subscriber base + "nine 40-hour working weeks" added. More honest than importing a foreign average, further from the source. Accept or reduce to arithmetic + phone-screen-time |
| **D6** | 4-16, 4-18 | China time-use figures removed with no substitute and no note (4-15 at least says India publishes nothing comparable). Accept silence, or add one sentence per tip |
| **D7** | whole book | The chapter's opening paragraph (counts hours only, no lifespan/money conversion, graded B and C because evidence is thin) is not shipped in any chapter. `intro` is a generated label (`scripts/ingest-parveen.ts:255`); `src/pages/chapters/[n]-[slug].astro:98-106` renders title + meta only. Build a chapter intro, or strike the worksheet's "intro keeps the source framing" check and record the omission |

Five notes (N1-N5) are recorded in the findings file with no change proposed. **Zero numeric
mismatches** — every figure, unit, grade, DOI and dataset count in all 18 tips was re-read against the
source line by line, list at `reports/chapter-04-review-findings.md:104`.

Two rows of `reports/verification/chapter-04.md` were also upgraded: ATUS 2025 (bls.gov release
USDL-26-1022: 2.6 h viewing TV, 5.2 h leisure, "half") and TRAI quarter ended 30 June 2026
(1,114.17 million subscribers) now read from the primary releases; the earlier HTTP 403 block is closed.

### How a fix lands

All three blocking items are override-level edits:

- `data/en-in/overrides/04.json:28` — 4-16 in plain words (F1)
- `data/en-in/overrides/04.json:5` — 4-13 caveats (F2)
- 4-9 needs a **new** override entry for `inPlainWords`; `data/en-in/chapters/04-do-not-waste-time.json:227`
  is generated from `data/en/all-chapters.json` (F3)

Then:

```bash
node --experimental-strip-types scripts/build-india-chapter.ts 4
node --experimental-strip-types scripts/build-india-data.ts
node --experimental-strip-types scripts/verify-india.ts --final
node node_modules/astro/astro.js build
node --experimental-strip-types scripts/verify.ts
node scripts/scan-dist-terms.mjs --final && node scripts/check-links.mjs
```

Then record the verdict in `reports/qa.md` Check 4 and the worksheet's sign-off block. If you accept
"keep as is" for D1-D7, record that too — the point is that the next reader does not re-litigate them.
Registering chapter status is a separate step (`scripts/india-status.ts 4 reviewed --human=signed-off`);
`scripts/verify-india.ts` fails a chapter that is `reviewed` without that flag.

---

## 4. Pending: needs a person or a capability

1. **A human visual review of the palettes and the fold on a real phone.** Open in every prior round;
   v2.7.0 adds ornaments that were measured, not looked at. The session model cannot accept image
   input; prior rounds used the `modlens` vision bridge on `reports/tools/capture-screens.mjs` output,
   then re-measured anything a machine flagged. A person still has to say the seal, arch and kolam look
   right on a handset.
2. **Lighthouse for v2.7.0.** No toolchain installed, no network in-session. Needs a machine with Chrome
   + Lighthouse; measure the chapter page at mobile and desktop, then update `reports/qa.md` Check 6 and
   drop the "unverified for this change" caveat. Do not invent a number.
3. **Archive the openspec change** — `redesign-monsoon-ornaments` is still a live change, and
   `openspec/specs/` has no `brass-ornament/` directory yet, so its deltas are unapplied:
   ```bash
   openspec validate redesign-monsoon-ornaments --strict
   openspec archive redesign-monsoon-ornaments      # or the openspec-archive-change skill
   openspec list                                    # should show no live changes
   ```
   Safe to do now: the deltas describe the ornament system, not chapter 4 text. Archiving does not wait
   on Check 4.
4. **Push.** Six commits sit ahead of `origin/master` (the five work commits plus this handoff). Push
   from your terminal or ask for it.
5. **Tier A India review** — 19 chapters, 477 tips, every claim needing a decision:
   `reports/human-review-tier-a.md` (worst first: chapter 08 with 24 decisions and 14 blocked sources,
   then 09 and 07). This is the largest open queue in the project and is independent of this session.
   All 34 chapters still read `humanReview: pending` in `data/en-in/manifest.json`.

---

## 5. Traps that will bite in this environment

Verified again at handoff time:

- **`npm`, `npx`, `tsx` fail** — esbuild's named pipe is blocked (`EPERM`). Use plain `node`, with
  `--experimental-strip-types` for `.ts` scripts. `node node_modules/astro/astro.js` and
  `node node_modules/@playwright/test/cli.js` stand in for the package binaries.
- **`astro preview` binds IPv6 loopback only.** `http://localhost:4321/` → 200,
  `http://[::1]:4321/` → 200, `http://127.0.0.1:4321/` → connection refused. Use `localhost`.
  `playwright.config.ts` (`baseURL: http://localhost:4321`, `reuseExistingServer: true`) is happy, but
  its `webServer` command is `npx astro preview`, which cannot start under this sandbox — so **start the
  preview yourself first**, in the background, and let Playwright reuse it.
- **Give Playwright a large timeout.** The full suite is ~2.4 min plus browser startup; a 120 s tool
  timeout kills it mid-run and reports a bare exit 1.
- **`astro build` can hit the same `EPERM`.** If it does, ask the human to run `npm run build` in a
  normal terminal. Never hand-edit or fake `dist/`; `scan-dist-terms` and `check-links` read it.
- **Write/edit require a prior read of the same file in-session.** The filesystem policy rejects blind
  overwrites.
- **Backslash escapes collapse** when written through tool calls (`\s` arrives as `s`). Write real
  characters (`—`, `₹`, `≥`, `…`) and build regexes from `String.fromCharCode(92)`.
- **`data/en-in/manifest.json` chapters is an object keyed `"1"`..`"34"`**, not an array.
  `(m.chapters || []).find(...)` throws.
- **Bead presses in tests must be real pointer presses.** The nearest-bead resolver deliberately steps
  aside for keyboard activation (`detail === 0`), which keeps the anchor's own href.
- **The ruled rupee rule is mostly dormant.** Rewritten chapters state rupees directly, so `.inr-ref`
  only renders on `/guides/` pages that still carry an RMB figure.

---

## 6. File map

| Path | Owns |
| --- | --- |
| `AGENTS.md` | Hard rules and the nine acceptance checks |
| `BRIEF.md` | The book's brief; sections 3, 13, 14 are restated in AGENTS.md |
| `src/styles/ornament.css` | The whole ornament layer: token ladder, kolam, arch, seal, `.inr-ref` |
| `src/components/ReadingMap.astro` | 34-cluster lattice overlay, `--kolam-trace` writes, `initBeadResolution()` |
| `src/pages/chapters/[n]-[slug].astro` | Seal markup, always-on `.chapter-celebration`, calm handling |
| `src/pages/index.astro` | Arch crown above the daily panel |
| `src/cast/particle-burst.ts` | Burst; the calm guard now reads `.chapter-page-root` |
| `tests/ornament.spec.ts` | 32 ornament checks (cap, seal, targets, presses, JS-blocked map) |
| `tests/e2e.spec.ts`, `tests/india-rewrite.spec.ts` | The 184-check baseline |
| `reports/tools/ornament-verify.mjs` | Per-page ornament counts and geometry |
| `reports/tools/measure-reader-js.mjs` | gzip budget measurement |
| `reports/tools/text-extract.mjs` | Byte-identity text dump |
| `reports/tools/capture-screens.mjs` | 8 screenshots across palettes (needs a preview) |
| `reports/tools/make-review-packets.mjs` | Regenerates both human-review packets |
| `reports/chapter-04-review-findings.md` | F1-F3, D1-D7, N1-N5, zero-mismatch list |
| `reports/chapter-04-line-review.md` | The worksheet and the sign-off block |
| `reports/human-review-tier-a.md` | 19 Tier A chapters, 477 tips |
| `reports/qa.md` | The nine checks; status line 84; v2.7.0 block 58-82 |
| `openspec/changes/redesign-monsoon-ornaments/` | proposal, design, tasks, three spec deltas |
| `DECISIONS.md` | ADR-012 is the ornament rationale; ADR-011 is measure-before-restyle |
| `CHANGELOG.md` | v2.7.0 entry with every number above |

---

## 7. Resume in a new session

```text
Read HANDOFF.md at the repo root, then AGENTS.md and reports/qa.md:58-84.
Then pick up the two open threads: (a) apply or decline the three blocking chapter 4
fixes F1-F3 and record my decisions on D1-D7 in reports/chapter-04-review-findings.md,
re-running the gates and updating reports/qa.md Check 4; (b) archive the openspec
change redesign-monsoon-ornaments once I confirm, and remind me about the pending
Lighthouse run and the on-phone visual review.
Do not ask me to re-confirm anything decided in HANDOFF.md.
```

First commands in a fresh session:

```bash
git log --oneline -6 && git status --porcelain
node node_modules/astro/astro.js preview --port 4321        # then open http://localhost:4321
node node_modules/@playwright/test/cli.js test               # needs the preview already running
```

---

## 8. Outside the repo

Two session artifacts live outside this checkout and are not part of the project:

- `C:/Users/$hetty/.dsh/prompts/direction-learning-assistant.md` — a paste-ready prompt for a
  decision-support assistant (14 sections, 395 lines: slot gate, capability gate, evidence gate,
  arithmetic gate, claim ledger, direction decision, output contract, self-audit).
- `C:/Users/$hetty/.dsh/prompts/direction-learning-assistant.test-record.md` — what was tested and
  what remains unexercised.
