# Review status vocabulary

The corpus uses a small, closed vocabulary so a source check can never be
mistaken for a human or professional review. Each value says who did what,
not how good the page is.

| Value | Who produced it | What it claims | What it does not claim |
| --- | --- | --- | --- |
| `source` | Inherited source edition | The text is the original source edition | Nothing about India |
| `draft` | Automated India adaptation | An India rewrite exists | That any source was checked |
| `source-checked` | Delegated AI review pass | Sources were re-read against the claim and a report ended in a PASS verdict | No human read it; no claim is independent, qualified or professionally verified |
| `reviewed` | Named human reviewer | A signed publication record exists for this revision | Specialist qualification, unless the record carries `qualified-human` with an independent reviewer |

Reader-facing badges follow the same split: `draft` renders **Unverified
draft**, `source-checked` renders **AI-reviewed draft**, and only `reviewed`
renders **Human-reviewed**. The chapter template keeps a permanent notice
that automated checks do not establish a matching primary source or
professional approval.

## Rules the gates enforce

- `scripts/verify-india.ts` accepts only the values above and requires a
  manifest `reviewMethod` for every checked or reviewed chapter.
- `scripts/verify-review-integrity.mjs` rejects the retired
  `independently-checked` token, requires a signed publication record for any
  `reviewed` chapter or tip, requires `qualified-human` records to declare an
  independent reviewer and `owner-self-review` records to declare that they
  are not independent, keeps the draft notices in the templates, and rejects
  unearned verification phrases.
- A passing browser test, a green build, an evidence grade, a working URL or
  a large source count never changes a review status. Only
  `scripts/india-mark-verified.ts` moves a chapter to `source-checked`, and it
  refuses to run without a PASS verdict in the chapter report.

## Migration

On 20 November 2026 the inherited `independently-checked` token was renamed
`source-checked` in all 765 tips, and each chapter manifest gained a
`reviewMethod` (`ai-delegated-source-check`). The old token was retired because
the verifier strings it depended on describe AI or delegated sessions, so the
word "independently" asserted something the record did not support. No review
content, source, date or attribution was dropped: only the label changed.

See [docs/india-first-roadmap.md](india-first-roadmap.md) for the editorial
gates and [AGENTS.md](../AGENTS.md) for the operating contract.