# Chapter 04 review findings — for human sign-off

> **Implementation addendum (2026-10-31; Phase 0 branch, not human sign-off):** F1-F3 have been corrected in both `data/en-in/overrides/04.json` and the compiled chapter file. D1: removed the unsourced ₹300–₹1,000 book-price estimate. D2: removed unrelated MoHFW/WHO homepage citations and linked the relevant Swedish trial, Tele-MANAS helpline, and April–June 2026 TRAI/PIB report to the claims they support. D3: retained India-specific Tele-MANAS and linked its official page. **D4-D7 still require separate editorial decisions; the chapter has not received human sign-off.** The original findings below are preserved as the review baseline. Passing automated checks after this change must not be described as expert verification.

Prepared 2026-10-30 in the same session as the worksheet [chapter-04-line-review.md](reports/chapter-04-line-review.md).
Scope: acceptance Check 4 in [AGENTS.md](AGENTS.md) section 2. This file is the *result* of the line-by-line pass; the worksheet stays the reading instrument and the [sign-off block](reports/chapter-04-line-review.md) stays the human's to sign.

Method: compared `source/book/04-不要浪费时间.md` (167 lines, 18 tips) against the shipped data `data/en-in/chapters/04-do-not-waste-time.json` and the override file that generates it, `data/en-in/overrides/04.json`, field by field — title, cost, in plain words, benefit, evidence grade, sources, caveats, cost tags — then against the rules in [AGENTS.md](AGENTS.md) sections 1-2 and [openspec/specs/india-edition/spec.md](openspec/specs/india-edition/spec.md). Numbers were re-read one by one against the source line, not spot-checked.

**Result: 3 blocking defects, 7 decisions that are yours, 5 recorded notes, 0 numeric mismatches.**

## Verified in this pass (upgrades two rows of the verification report)

The verifier recorded 4-16 as unverified because bls.gov returned HTTP 403. Both blocked figures now read from the primary releases and the block is gone:

- **ATUS 2025** (https://www.bls.gov/news.release/atus.nr0.htm, release 10:00 a.m. ET Thursday, 25 June 2026, USDL-26-1022): "Watching TV was the leisure and sports activity that occupied the most time (2.6 hours per day), accounting for half of all leisure time, on average (5.2 hours)." Both shipped numbers (2.6 h, 5.2 h, half) are exact and the 2025 vintage is right.
- **TRAI, quarter ended 30 June 2026** (TRAI press release No.135/2026, 12 October 2026; PIB PRID=2322388; as reported by DD News, 13 October 2026): "India's internet subscriber base increased to 1,114.17 million at the end of June 2026, from 1,092.79 million at the end of March 2026." The shipped "about 1.11 billion internet subscribers at the end of June 2026" holds, and so does the claim that TRAI publishes subscribers rather than viewing time.

## Blocking defects (three)

Each is a rule breach, not a taste call: AGENTS.md section 1 rule 2 forbids strengthening or dropping limits; the India spec's "Faithful India adaptation" requires the source's own hedge to survive.

### F1 — 4-16 strengthens a hedge into a promise (strengthened)

- Shipped: `data/en-in/chapters/04-do-not-waste-time.json:402`, generated from `data/en-in/overrides/04.json:28`: "Switching to viewing information at scheduled times **gives that half of your leisure time back**."
- Source: `source/book/04-不要浪费时间.md:145`: "把要看的信息改成定时集中看，能省下的就在这一块里" — *what you can save is inside that block*, i.e. the saving is bounded by it, not equal to it.
- Why it fails: the sentence now asserts you recover about 2.6 hours a day. The source asserts only that any saving falls within television time, and the same tip's caveat says no study has measured a saving at all. This is the one finding that makes the page claim more than the book does.
- Proposed: "Switching to viewing information at scheduled times, the time you win back is the time you no longer spend in front of it." (The verifier proposed the same wording; it keeps the direction and drops the quantity.)

### F2 — 4-13 caveat points at the wrong section (wrong cross-reference)

- Shipped: `data/en-in/chapters/04-do-not-waste-time.json:331`, from `data/en-in/overrides/04.json:5`: "stimulus control (**as in Section 10**, which advises moving unwanted items out of reach)".
- Source: `source/book/04-不要浪费时间.md:122`: "刺激控制那一样在**本节**第 10 条" — item 10 *of this section*.
- Why it fails: "Section 10" names a different chapter of this book (Dating and marriage), so the pointer resolves to the wrong tip. The wording should be "item 10 of this section".

### F3 — 4-9 contradicts its own benefit on personality (added claim, dropped factor)

- Shipped: `data/en-in/chapters/04-do-not-waste-time.json:227`: "Procrastination has little to do with laziness or **personality traits**."
- Source: `source/book/04-不要浪费时间.md:82`: "这件事让人多难受、觉不觉得自己做得成、容不容易被眼前的东西带走、**自控强不强**，和拖延关系最强。神经质、爱寻求刺激这类性格，和拖延只有很弱的关联。"
- Why it fails: two problems in one sentence. (a) The source restricts the weak link to *neuroticism and sensation-seeking*; the shipped line generalises to personality traits, while the same tip's benefit lists conscientiousness and impulsivity — both traits — among the strongest correlates, so the page contradicts itself. (b) Self-control (自控) drops out of the predictor list although the benefit keeps it.
- Proposed: "Procrastination has little to do with laziness, or with traits like neuroticism and sensation-seeking. What predicts it is how unpleasant the task feels, whether you believe you can complete it, how easily immediate temptations pull you away, and how much self-control you have."

## Decisions that are yours (seven)

### D1 — 4-13 ₹ price band replaces a published currency amount

- Shipped: `data/en-in/chapters/04-do-not-waste-time.json:326`: "A self-help book costs about ₹300–₹1,000". Source: `source/book/04-不要浪费时间.md:117`: "一本自助书几十元" (tens of yuan).
- The verification report records this as a plausible Indian price band, not a converted figure, and it was never fetched. AGENTS.md rule 2 says currency stays as published; the India edition needs a rupee reader to know a price. Both cannot be satisfied by one sentence, so choose: keep the indicative band, drop the amount ("a self-help book, some free"), or mark it as indicative in the caveat.

### D2 — 4-13 and 4-15 cite official Indian sources that back nothing (2 places)

- 4-13 sources: `data/en-in/chapters/04-do-not-waste-time.json:330` append "Ministry of Health and Family Welfare. <https://mohfw.gov.in/>; World Health Organization. <https://www.who.int/>".
- 4-15 sources: `:380` append "Ministry of Health and Family Welfare. <https://mohfw.gov.in/>".
- Source chapter has neither. The pattern is a house convention, not a chapter-4 invention: chapter 1 does the same after real citations (e.g. `data/en-in/chapters/01-do-not-die-early.json:130` adds ICMR and MoHFW), and the India spec's "Official source verification" requirement asks for at least one official Indian source per high-risk claim. In 4-13 (a Swedish psychology trial) and 4-15 (telecom time-use) no claim is attached to the appended ministries, so they read as decoration on a page a reader may use to judge the whole edition. Decide: keep the convention everywhere, or attach these two to a claim they actually support.

### D3 — 4-13 swaps the crisis hotline

- Shipped: `data/en-in/chapters/04-do-not-waste-time.json:331` sends low mood or anxiety to "Tele-MANAS on 14416". Source: `source/book/04-不要浪费时间.md:122` sends it to 12356.
- Edition-mandated (the banned-term scan rejects 12356 as a source-edition term), and 14416 is the real national line, but the tip carries no citation for it and the swap is invisible to the reader. Accept as an India adaptation, and decide whether the line needs its own source.

### D4 — 4-14 loses the housework measurement and now carries no quantity

- Dropped from the source: 1 h 17 min a day average, 1 h 59 min among those who did it, the 2024 survey covering 38,500 households and 107,000 people, and the stats.gov.cn URL (`source/book/04-不要浪费时间.md:128,130`).
- Shipped benefit keeps only the Whillans study (`data/en-in/chapters/04-do-not-waste-time.json:353`), and `:352` in plain words now has no figure at all.
- Removing a China survey is forced by the banned-term rule (india-edition spec, "No source-edition terms"), so this is not a defect. What is left is a tip titled "use your own hourly wage" whose page never says how much housework time exists — decide whether to state the arithmetic in words ("a household where nobody outsources loses an hour or more a day") or leave it as is.

### D5 — 4-15 is a rewrite, not a translation (largest divergence in the chapter)

- Removed: 5 h 37 min and 6 h 03 min a day, the 92.9% who used the internet that day, 2 h 42 min in 2018, CNNIC's 30.6 hours a week and 10.68 billion short-video users at 95.1%, and three source URLs (`source/book/04-不要浪费时间.md:136-139`).
- Added: the TRAI subscriber figure, the framing "no Indian regulator publishes the average time a person spends watching short videos", the derived "nine 40-hour working weeks", and "the equivalent of a second part-time job" (`data/en-in/chapters/04-do-not-waste-time.json:377-380`, from `data/en-in/overrides/04.json:35-38`).
- Round 1 of verification failed this tip for presenting CNNIC figures with no country named; round 2 passed the TRAI rewrite, and the TRAI number is confirmed above. The "368/40" arithmetic is sound (365 / 40 = 9.1). The decision: this tip now argues from arithmetic instead of a national survey, which is more honest than importing a foreign average but further from the source than any other tip here. Accept the rewrite, or reduce it to the arithmetic plus the phone-screen-time route.

### D6 — 4-16 and 4-18 lose their China figures the same way

- 4-16 drops 1 h 40 min a day and 3 h 16 min for ages 75-84, with the stats.gov.cn URL (`source/book/04-不要浪费时间.md:146,148`; shipped `data/en-in/chapters/04-do-not-waste-time.json:403,405`).
- 4-18 drops 50 min a day and 1 h 02 min among those who travelled, with the stats.gov.cn URL (`source/book/04-不要浪费时间.md:164,166`; shipped `:453,455`). Neither tip substitutes an Indian figure, and neither says so.
- 4-15 at least states that India publishes nothing comparable. These two do not. Decide whether silence is acceptable for a China-statistic removal in this edition, or whether each needs one sentence saying the figure was a source-edition survey.

### D7 — the chapter's opening paragraph is not shipped

- Source `source/book/04-不要浪费时间.md:5` opens the chapter with the framing: this section counts only hours, does not convert time into lifespan or money, and is graded B and C because most entries rest on a single study or an aggregate time-use survey.
- The page has no such paragraph. `data/en-in/chapters/04-do-not-waste-time.json:5` sets `intro` to "Chapter 4: Do Not Waste Time", a label produced by `scripts/ingest-parveen.ts:255`, and `src/pages/chapters/[n]-[slug].astro:98-106` renders the title and a generated meta line only.
- This is structural across all 34 chapters, not a chapter-4 slip, and the worksheet's own chapter-level check asks that "intro keeps the framing the source sets". It cannot pass for any chapter as built. Decide: build a chapter intro, or strike that check and record the omission as an edition decision.

## Recorded notes (no change proposed)

- N1 — 4-1 says "94 separate studies" (`:27`) where the source says 94 项（独立）检验 (94 independent tests, `:10-11`), and "significantly higher" where the source says 明显更高. Gollwitzer and Sheeran did analyse 94 independent studies, so the noun is right; "significantly" borrows statistical language the source does not use. Not worth changing alone; it appears twice.
- N2 — 4-2 describes the source's 实施意图研究 as "commitment strategies" (`:53`) and adds "the result is clear" where the source reports the sub-finding flatly (`:20`). Direction and numbers unchanged.
- N3 — 4-1 and 4-2 soften 注定做不成 into "tasks that seem impossible to complete" and "efforts they're unlikely to succeed at" (`:28`, `:53`). The softening is small and in the safer direction, but it is the source's certainty that the entry rests on.
- N4 — Titles: 4-1 shortens 把「打算做」写成「几点、在哪、遇到什么就做什么」 to "Write what to do as if… then…", dropping time and place (`:13`); 4-3 gains a full stop. Body text keeps all three elements.
- N5 — 4-5 says "Two studies" for the source's 两项调查 (two surveys, `:47`); 4-6 says "Two surveys" correctly. Cosmetic.

## Chapter-level checks (all pass except D7)

| Check | Result |
| --- | --- |
| Every source tip appears once, in source order | pass — 18 of 18, ids 4-1 to 4-18 in order |
| Intro keeps the source framing | **fail — see D7** |
| Evidence grades match the source | pass — A: 1, 9, 11, 13; B: 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 17, 18; C: 15, 16 |
| Disputed marks survive | pass — 4-6 and 4-18 only, matching the source's 争议 caveats |
| Cost lines keep source currency; INR reads as reference | **decision — see D1** |
| No medical, legal or safety advice added; caveats retained | pass — every source caveat has a shipped counterpart; no advice added |
| Cost tags mirror the source 成本标签 | pass — money/time/willpower/benefit on all 18 |
| Numbers, units, grades, DOIs | pass — 0 mismatches found (see list below) |

Numbers re-read one by one and matching: 4-1 d = 0.65; 4-3 98 datasets, $15/$13/$8, 4.11/3.32/3.29 shows; 4-4 33.9 / 55.5 days, 29.7%, 29.3% to 60.0%, 37 participants; 4-5 958 / 292, 55 and 56 groups, 34%; 4-6 676 / 304, 35+ hours; 4-7 5-15 minutes; 4-8 80.6%, 38.7%, r = 0.82; 4-9 691 coefficients; 4-10 −0.60 (−0.84 to −0.36), 12 studies / 1,098, −1.13 (−1.90 to −0.37), 3 studies / 154, 24 trials; 4-11 2,538, 90.0%, 13.7%, 9.4-16.0%, 6.0%, 15.7%, 10.2%, 13.2 points (3.1-22.8), $150 / $650 / about $800; 4-12 96 / 82 / 62, 12 weeks, 18-254 days, 95%; 4-13 150, d 0.70 (0.29-1.10), 0.50 (0.10-0.90), 0.81 (0.40-1.22), 0.69 (0.29-1.09), 31.3-40.0%, 24.0-36.0%; 4-14 6,271, four countries; 4-15 1.11 billion, 365 hours, nine 40-hour weeks; 4-16 2.6 h, 5.2 h, half; 4-17 251 users, 6 participants; 4-18 30 minutes, 5 hours.

## How a fix would land

All three blocking items live in `data/en-in/overrides/04.json` (4-16 in plain words at `:28`; 4-13 caveats at `:5`; 4-9 in plain words is not overridden yet, so it needs a new entry, because `data/en-in/chapters/04-do-not-waste-time.json:227` is generated from the source data at `data/en/all-chapters.json`). Regenerate with `node --experimental-strip-types scripts/build-india-chapter.ts 4`, then `node --experimental-strip-types scripts/build-india-data.ts`, then the gates. Nothing above has been applied — the text is exactly as it was before this review.

## Verdict line for the worksheet

`changes required` for the three blocking items (F1-F3), then sign. D1-D7 are edition decisions that should be recorded even if the answer is "keep as is", so the next reader does not re-litigate them.
