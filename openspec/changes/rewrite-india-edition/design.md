# Design

## Context

See proposal.md for motivation. The current implementation already has the shape needed for a chapter-by-chapter rewrite:

- data/en/all-chapters.json is the untouched source edition.
- data/en-in/chapters/19-employment-and-work-injury.json is the first India rewrite.
- scripts/build-india-data.ts merges rewrite files over the source and writes data/en-in/all-chapters.json.
- prebuild, predev and precheck regenerate that merged file.
- Every page now loads the merged edition.
- Tip cards already support reviewStatus, and chapter pages support edition: india.
- The site shows a draft badge, a rewrite notice and a queued notice.

The missing pieces are coverage (33 chapters), independent verification, a manifest and fail-closed checks.

## Goals / Non-Goals

**Goals:**

- A deterministic data contract and build path for 34 India chapters.
- A verification model where the writer and the verifier are separate agents.
- A manifest that is the single source of truth for chapter status.
- Automated gates that fail on missing chapters, banned terms, unsupported high-risk claims and stale presentation.
- A final branch that can be merged to master only after all 34 chapters and the full test suite pass.

**Non-Goals:**

- No visual redesign, navigation change or new reader feature.
- No change to the source submodule or data/en and data/zh.
- No automatic claim that an AI check equals legal or medical review.
- No per-wave push to master; the final merge is the publish point.

## Decisions

### D1. One JSON file per chapter, merged at build time

Use data/en-in/chapters/NN-slug.json, one file per chapter, with the same tip schema plus edition, rewriteStatus, reviewStatus and verification metadata.

scripts/build-india-data.ts replaces matching chapters and writes a generated merged file. The generated file is ignored by git and rebuilt by prebuild, predev and precheck.

**Why:** chapter files are independent, so writers can work in parallel without merge conflicts. A single monolithic India file would conflict on every concurrent write.

**Alternative rejected:** a second complete all-chapters.json maintained by hand. It duplicates 4 MB and makes conflicts certain.

### D2. Manifest is the status authority

Add data/en-in/manifest.json with edition, generatedAt, totalChapters, totalTips, and per chapter: status, verifier, verifiedAt, sourceCount, humanReview, openIssues and bannedTerms.

The India page, worklist and report read from the manifest. Chapter JSON carries its own status for rendering, but the manifest is the authority for completion.

**Why:** without one authority, the page can claim a chapter is done while the data says otherwise.

**Alternative rejected:** deriving status from file presence. A file can exist while failing verification.

### D3. Two-stage independent verification

Stage 1: writer produces the chapter and a source pack. Stage 2: a fresh verifier receives only the draft and the source pack; it checks each high-risk claim against official Indian sources and writes reports/verification/chapter-NN.md.

The verifier cannot approve a claim without a URL, section and access date. It can return pass, pass-with-issues or fail. A fail returns the chapter to draft.

**Why:** self-review is the main failure mode for generated legal and medical text.

**Alternative rejected:** one agent writes and verifies. It cannot reliably detect its own unsupported claims.

### D4. Three active chapter lanes

At most three chapters are in flight:

    lane A: research N+1
    lane B: write N
    lane C: verify N-1
    integrator: merge N-2, update manifest, commit

Writers own one chapter file. Verifiers own one verification report. Only the integrator edits the manifest, worklist, report and git state. Builds run only when no writer is mid-write.

**Why:** more parallelism increases merge and review risk faster than it increases throughput.

**Alternative rejected:** 33 parallel writers. The integration and verification queue would dominate.

### D5. Branch, then one final merge

Work on rewrite/india-edition. Commit per wave. Do not push partial waves to master. Merge to master only after the final gate.

**Why:** the live site should not oscillate between queued and rewritten chapters during the rewrite. Chapter 19 is already live and remains the only completed chapter until the final merge.

**Alternative rejected:** push every wave. It gives incremental visibility but makes the public edition look permanently half-finished.

### D6. Fail-closed automated gates

Add scripts/verify-india.ts and scripts/scan-dist-terms.mjs.

verify:india checks chapter count, tip count, schema, banned terms, source domains, status consistency and verification reports.

The dist scanner checks the built HTML for banned terms. For a wave it checks rewritten pages; for the final gate it checks all 52 pages.

**Why:** a manual checklist will drift. The build must reject a bad chapter.

**Alternative rejected:** rely on the report and screenshots.

### D7. Preserve tags and evidence grades for this change

Keep the existing cost/time/willpower/scope/audience tags and evidence grades so the 765-tip totals and existing tests remain stable. Re-grade evidence only in a separate change after the content is stable.

**Why:** changing grades during the rewrite would mix content risk with dataset risk.

**Alternative rejected:** re-grade every tip in the same pass. It would invalidate the 495/218/52 totals and make verification harder to isolate.

### D8. Tier A review stays separate from AI verification

Legal, medical and financial chapters can reach checked through independent AI verification, but not reviewed without a named human reviewer. They remain checked-draft with a visible badge until then.

**Why:** an AI verifier can check sources; it cannot provide professional legal or medical sign-off.

**Alternative rejected:** mark AI-checked legal content as reviewed. That would overstate the assurance.

## Risks / Trade-offs

- **Legal or medical error** -> Tier A human review; checked-draft badge; source-per-claim; no unsupported advice.
- **Banned terms return in prose** -> JSON and dist scanners; verifier checks source-edition references; fail closed.
- **Verifier rubber-stamps the writer** -> fresh context, no writer rationale, explicit pass/fail rubric, spot-check by a second verifier on Tier A.
- **Parallel writers collide** -> one file per chapter; only integrator edits shared files.
- **Build runs during writes** -> QA runs only after a chapter is frozen; integrator serializes builds.
- **Government sites block access** -> save official PDFs/screenshots; cite stable portal URLs; record access date.
- **The public site looks half-done** -> branch until final; Chapter 19 remains the only completed chapter on master.
- **Tags/grades drift** -> preserve tags and grades in this change; separate re-grade later.

## Migration Plan

1. Add verify:india, dist scanner, manifest schema and source-pack template.
2. Add the manifest and set Chapter 19 to checked-draft (or checked after its verification report exists).
3. Run waves 1-5 on rewrite/india-edition; after each wave, update manifest, worklist and report.
4. Final gate: 34/34 chapters, 765/765 tips, zero banned terms, zero broken links, full Playwright, Pages build.
5. Merge to master; watch the Pages run; verify live chapter pages at 390 px and 1440 px.
6. Rollback: revert the merge commit. Chapter files are additive and the source data is untouched.

## Open Questions

- Who is the named Tier A human reviewer? This does not block drafting or checked-draft publication; it only blocks the reviewed status.
- Should evidence grades be re-evaluated after the rewrite? Deferred to a separate change so this change keeps the dataset totals stable.
