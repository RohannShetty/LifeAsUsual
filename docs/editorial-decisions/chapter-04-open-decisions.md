# Chapter 4 — open editorial decisions

Status: **PENDING OWNER/EDITOR DECISION.** This file records the seven decisions that
`reports/chapter-04-review-findings.md` left to the editor, with the evidence each
one rests on and a recommended resolution. Nothing here has been applied, and no
decision is recorded as taken.

- Source: `reports/chapter-04-review-findings.md` (prepared 30 October 2026; implementation
  addendum 31 October 2026).
- Shipped chapter: `data/en-in/chapters/04-do-not-waste-time.json`; overrides in
  `data/en-in/overrides/04.json`; source text `source/book/04-不要浪费时间.md`.
- The chapter has **not** received human sign-off. Passing automated checks after the
  F1–F3 fixes is not expert verification.

## Decisions and recommendations

| ID | Question | Recommended resolution | Why |
| --- | --- | --- | --- |
| D1 | 4-13 quotes a ₹300–₹1,000 self-help book price that is an indicative band, not a conversion of the source amount | **Keep as-is, but move the band into the caveat as "indicative"** | The reader needs a rupee scale; the sentence currently reads as a fact. Moving it to the caveat keeps the reader informed without asserting a surveyed price. |
| D2 | 4-13 and 4-15 append MoHFW/WHO homepage citations that support no claim | **Remove the two unsupported ministry/WHO links** | A citation that supports nothing teaches readers to trust decorations. AGENTS.md requires a source to back a claim, and the appended links are not attached to any claim in these two tips. |
| D3 | 4-13 swaps the source crisis line 12356 for Tele-MANAS 14416 without its own citation | **Keep 14416 and cite the Tele-MANAS page on the tip** | 12356 is a banned source-edition term and 14416 is the real national line; the only defect is that the reader cannot see where the number comes from. |
| D4 | 4-14 lost the housework time-use survey and now carries no quantity | **State the arithmetic in words, without the China figure** | "A household that outsources nothing loses an hour or more a day" preserves the tip's premise without importing a foreign survey. |
| D5 | 4-15 is a rewrite: TRAI subscriber count plus derived arithmetic instead of the source's national time-use survey | **Accept the rewrite** | The rewrite says explicitly that India publishes nothing comparable, and the 365/40 arithmetic is sound. It is further from the source than any other tip here, but it is not less true. |
| D6 | 4-16 and 4-18 dropped China time-use figures without saying so | **One sentence each: the figure was a source-edition survey and is not reproduced** | Silence about a removed statistic is what makes the page look complete when it is not. 4-15 already models the honest sentence. |
| D7 | The chapter's opening paragraph (hours only; does not convert time into lifespan or money; grades B/C) is not shipped | **Ship a one-paragraph opener carrying the same three points** | This is the chapter's own statement of its limits. Shipping the tips without it is what lets a reader treat the page as stronger than its evidence. |

## Sign-off

| Decision | State | Owner/editor | Date | Note |
| --- | --- | --- | --- | --- |
| D1 | PENDING | — | — | — |
| D2 | PENDING | — | — | — |
| D3 | PENDING | — | — | — |
| D4 | PENDING | — | — | — |
| D5 | PENDING | — | — | — |
| D6 | PENDING | — | — | — |
| D7 | PENDING | — | — | — |

An answer of "keep as is" must still be written down here with a date, so the next
reader does not re-litigate the same seven questions.

## What this file is not

- It is not a review, a sign-off, or an editorial decision.
- It does not change the shipped chapter. After a decision, the change lands in
  `data/en-in/overrides/04.json` (or the source data where no override exists), is
  regenerated with the documented build steps, and is re-checked by the gates.
- It does not close P0.6. P0.6 closes when these rows carry a decision and date, or
  when the owner records that the chapter stays as-is.
