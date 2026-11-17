# India fraud-journey guide: claim-level source verification

**Subject:** `src/pages/help/report-financial-cyber-fraud.astro` (PR #15, branch `feat/india-fraud-journey`)
**Verification date:** 16 November 2026 (IST)
**Verified by:** AI-agent source check of the primary/official pages on 16 November 2026, then an owner review of the same sources and the built page by Rohan Shetty on 17 November 2026 (`reports/india-fraud-guide-human-review.md`). Neither step is qualified legal, financial, or victim-support review, and the owner review is **self-review by the site owner**, not independent review.
**Publication status:** published 17 November 2026 after the owner review. The AI source check alone would not have met the repository's human-review requirement; that requirement is met only in the narrow sense described in the human-review record, and an independent professional review remains outstanding.

## Method

Every cited page was fetched on 16 November 2026 and the quoted passage was read in the response body. Where a page could not be verified, that is recorded as a failure rather than assumed. Claims that are editorial practice rather than sourced fact are labelled as such.

## Claim-level evidence

| ID | Claim in the draft | Source | Verified passage | Verdict |
| --- | --- | --- | --- | --- |
| C1 | 1930 is India's national helpline for reporting cyber financial fraud, available in all States/UTs | I4C / NCRP, <https://i4c.mha.gov.in/ncrp.aspx> | "This helps citizens to report cyber financial frauds on National Helpline number 1930"; "1930 National Helpline number is running in all States/UTs"; NCRP launched 30.08.2019 and CFCFRMS connects 85 banks and payment intermediaries | Supported |
| C2 | The helpline was operationalised by the Ministry of Home Affairs for immediate reporting of financial frauds and for help filing complaints on cybercrime.gov.in | PIB, 6 April 2022, <https://www.pib.gov.in/PressReleasePage.aspx?PRID=1814120> | Release states MHA operationalised the toll-free 1930 helpline for immediate reporting of financial frauds on CFCFRMS and for assistance in lodging complaints on cybercrime.gov.in | Supported |
| C3 | cybercrime.gov.in is the official portal for submitting a financial-fraud complaint | Portal home, <https://cybercrime.gov.in/> | HTTP 200, but the complaint and FAQ pages render their text with JavaScript; the fetched HTML for `/Accept.aspx` and `/webform/FAQ.aspx` contains no `1930` text and no liability guidance. Earlier draft wording that attributed a "homepage notice" to `/Accept.aspx` was **not verifiable** and has been removed | Portal identity supported; on-page wording **unverified** |
| C4 | The 2017 RBI circular sets customer liability for unauthorised electronic banking transactions | RBI notification, <https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11040> | Para 6: zero liability for bank contributory fraud/negligence, or third-party breach notified within three working days. Para 7: customer negligence means the customer bears the entire loss until reporting; a 4–7 working-day delay caps liability at the Table 1 amounts (₹5,000 / ₹10,000 / ₹25,000); beyond seven working days the bank's Board-approved policy applies. Para 9: shadow reversal within 10 working days. Para 10: resolution and liability determination within 90 days | Supported |
| C5 | Liability depends on how the transaction happened, whose negligence was involved, and how quickly the bank was notified | Same as C4 | Paragraphs 6–8 turn on exactly those three factors | Supported |
| C6 | A payment the customer personally authorised after being tricked may be assessed differently from a payment the customer never authorised | Same as C4, read together with the 2026 amendment (C7) | The 2017 circular addresses "unauthorised" transactions. The 2026 amendment widens the framework by defining "fraudulent EBT" to include a payment the customer executed by granting approval under coercion or duress, which confirms that authorised-but-induced transfers were outside the 2017 wording | Supported |
| C7 | From 1 January 2027 amended RBI directions widen the framework, speed up complaints, and provide compensation for small-value fraudulent transactions | RBI press release, 24 June 2026, <https://www.rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=63011> (Press Release 2026-2027/533); directions, <https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=13543> | Release: the amendment Directions "shall come into effect from January 1, 2027", and the draft proposed to extend the framework "to cover other categories of fraudulent electronic banking transactions, reduce the time taken by banks to process complaints ... and introduce a compensation mechanism for small value fraudulent electronic banking transactions." Directions: "These Directions shall apply in cases of electronic banking transactions undertaken by customers of a bank on or after January 1, 2027"; "Fraudulent EBT means an EBT executed by a third-party using the credentials obtained from the customer through fraudulent means or executed by the customer by granting approval under coercion or duress from the third-party, and / or an unauthorised EBT" | Supported |
| C8 | Do not assume an automatic refund | Derived from C4 and C7 | Neither instrument promises reversal of every scam transfer; the 2017 caps and the 2027 compensation scheme are conditional | Supported as a caution, not as a quoted rule |
| C9 | Contact the bank through official channels, preserve transaction evidence, do not pay "recovery" agents | Editorial practice guidance | No single official page states all of this; it is practical advice consistent with C1–C4 and with standard fraud-reporting guidance | **Editorial, not sourced** |

## Defects found and fixed in the draft

1. Markdown emphasis `*unauthorised electronic banking transactions*` was rendered literally as asterisks inside JSX. Replaced with `<em>`.
2. Two sources (`cybercrime.gov.in/Accept.aspx`, `/webform/FAQ.aspx`) were cited for wording that could not be observed because the pages are JavaScript-rendered. Replaced with the static I4C/NCRP page and the PIB release, which carry the same claims, and the portal is now cited only as the complaint destination.
3. The 2017 circular was linked as a PDF that this environment could download (100,028 bytes, valid PDF) but not text-extract, because the file uses CID-encoded fonts. Replaced with RBI's official HTML notification page, whose full text was read and quoted above.
4. The draft predated a material change in the governing framework: the amendment effective 1 January 2027. A paragraph and two sources were added so readers are not given 2017-only guidance after the change takes effect.

## Publication gate (how this was gated)

`scripts/verify-published-lessons.ts` runs in `prebuild`. It requires a record in `data/india-publications.json` for every route under `src/pages/help/`. `assessLesson` in `src/lib/content-trust.ts` refuses to publish high- or critical-risk content unless `reviewStatus` is `human-reviewed` with a documented `humanApproval`. This guide is financial-harm content and is treated as high risk.

Consequences, all verified on this branch:

- With no record, the build fails with a missing-publication-record error. Observed on 16 November 2026 by merging `origin/master` (e198f5f) into this branch without committing and running the gate:
  `India-first publication gate failed closed:` / `- No canonical trust record for India-first route /help/report-financial-cyber-fraud/`
- With a record that is not human-reviewed, the build fails the high-risk review requirement.

Both behaviours are intended fail-closed behaviour. The page was published only after a registry record and a named, dated owner approval existed; the gate was never weakened to accept an AI-only record.

## Remaining blockers

1. **Independent professional review** of C1–C8 by someone competent in Indian consumer-protection and cyber-fraud practice. The published page carries owner self-review only, and says so; that is weaker than professional sign-off and is recorded as such.
2. ~~A registered publication record~~ — done on 17 November 2026 (`data/india-publications.json`).
3. Optional: a screenshot or archived copy of the cybercrime.gov.in complaint flow, so C3 can be verified rather than described as unverified.
4. Optional: bind the review to a content hash, so editing the page without a new review fails closed.

## Re-verification

```bash
npm run verify:publication   # must pass for the single registered /help route
npm run build
npx astro check        # must stay at 0 errors
npx playwright test tests/india-fraud-journey.spec.ts
```
