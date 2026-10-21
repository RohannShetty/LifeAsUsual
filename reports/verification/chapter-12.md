# Verification: Chapter 12 - Starting Your Own Business

Verifier: Independent verification agent (delegated)
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/12-starting-a-business.json
Manifest status: draft, tier A, 28 tips, verifier null, humanReview pending, bannedTerms 0

## Method

Read `reports/source-packs/chapter-12.md` and the chapter JSON. All seven HIGH-RISK tips
in the pack (12-12, 12-14, 12-16, 12-17, 12-23, 12-24, 12-26) were checked, plus 12-5,
12-8, 12-13 and 12-21 as spot checks. This is the best-rewritten chapter of the seven: the
Indian scheme names are real and correctly tied to Indian regulators. Access failures:
**indiacode.nic.in returned HTTP 403** (Akamai "Access Denied") for every statute request;
**mca.gov.in returned HTTP 403**; **pib.gov.in returned HTTP 403**; **labour.gov.in
returned HTTP 403**. Where a PDF was the only official copy, web_fetch could not read it
(unsupported content type), so the text was confirmed through the regulator's HTML pages,
search snippets and contemporaneous reporting (Reuters, taxguru, NDTV).

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 12-8 | FSSAI: basic registration up to Rs 12 lakh turnover; state licence above that up to Rs 20 crore; central licence above Rs 20 crore | FSSAI licensing regulations; FSSAI Order dated 13.03.2026 | Revised turnover threshold order | 2026-10-21 | no | FSSAI revised the thresholds by order of 13 March 2026, effective 1 April 2026: **basic up to Rs 1.5 crore, state licence Rs 1.5-50 crore, central above Rs 50 crore**. At the review date the tip's figures are six months out of date, and its only hedge is "revised from time to time". |
| 12-5 | Indian law imposes no franchise disclosure/registration regime; verify trademark, MCA filings and the contract | IP India; CCI; Consumer Protection Act, 2019 | — | 2026-10-21 | yes | No Indian franchise-disclosure statute exists; the advice maps to the Trade Marks Act 1999 register, MCA filings and the 2019 Act. Accurate. |
| 12-13 | Invoice and composition-scheme duties under CGST; s.122 penalty | CGST Act, 2017; GSTN | ss.31, 10, 122 | 2026-10-21 | yes | Section numbering and scheme names correct; the threshold figures are left to "the notified turnover" rather than invented. |
| 12-16 | ESI applies from 10 employees, EPF from 20; appointment letter and wage records; labour codes | ESIC; EPFO; Code on Social Security 2020; Code on Wages 2019 | — | 2026-10-21 | yes | Employee thresholds correct. The four labour codes were notified to commence on **21 November 2025** (PIB; Reuters 21.11.2025), which the tip's framing matches. esic.gov.in reachable; epfo.gov.in reachable; labour.gov.in 403. |
| 12-17 | Code on Wages requires timely full payment; deductions only as authorised; Payment of Bonus Act applies | Code on Wages 2019; Payment of Bonus Act 1965; MoLE | — | 2026-10-21 | yes | Framework claims confirmed (Codes commenced 21.11.2025). The exact "prescribed time" period is left unstated, which is safe. |
| 12-21 | Copyright registration and ownership under the Copyright Act, 1957 | Copyright Act, 1957 | ss.13, 17 | 2026-10-21 | yes | Correct Act and no invented procedure. |
| 12-23 | Strike-off via ROC; "the Fast Track Exit scheme applies to eligible companies"; LLP Form 24; IBC Part III | Companies Act 2013 s.248; LLP Act 2008; IBC 2016 | s.248 | 2026-10-21 | unverified | mca.gov.in returned 403. The Fast Track Exit scheme (2011, under the 1956 Act) was superseded by the Companies (Removal of Names) Rules, 2016 and Form STK-2; the sentence is likely outdated even though the rest of the tip is right. Confirm and replace with "Form STK-2 route" before shipping. Not counted as blocking because the operative advice (strike off, do not abandon filings) is correct. |
| 12-24 | E-Commerce Rules 2020 disclosure duties; 1930 and cybercrime.gov.in for payment fraud; BNS cheating; IS 19000 on reviews | CP(E-Commerce) Rules 2020; cybercrime.gov.in; BIS | Rules 4-5 | 2026-10-21 | yes | 1930 is the real National Cyber Crime helpline and cybercrime.gov.in resolves; IS 19000:2022 on online consumer reviews is real (PIB PRID 1882828; BIS scheme Feb 2026). No invented hotline. |
| 12-26 | Private placement under Companies Act s.42 (identified persons, separate account, ROC filing); public issue needs SEBI; CIS regulations; RBI deposit directions | Companies Act 2013 s.42; SEBI Act 1992; SEBI CIS Regulations; RBI | s.42 | 2026-10-21 | yes | s.42 private-placement conditions and the separate-account rule are correctly described; SEBI (CIS) Regulations 1999 exist. |
| 12-12 | Spot check: returns, including a nil return, must be filed | Income Tax e-filing; GSTN; MCA21 | — | 2026-10-21 | yes | Nil-return obligations exist on each portal; incometax.gov.in and gst.gov.in both reachable. |
| 12-14 | Spot check: never share an OTP or pay into a private account; report on 1930 | Income Tax Dept; cybercrime.gov.in; RBI | — | 2026-10-21 | yes | 1930 and cybercrime.gov.in correct; RBI's "pay only into the account named in the challan" guidance matches. |

## Banned-term check

- JSON: 0 banned terms (China, Chinese, mainland, RMB, yuan, hukou, yibao, dibao, CNY).
- Rendered page: 0 banned terms in `dist/chapters/12-starting-a-business/index.html`.
  The rendered page still carries the superseded "12 lakh" threshold and does **not**
  contain "1.5 Crore", so the outdated figure is already published.

## Safety and editorial check

- No unsupported high-risk claim: 12-8 is unsupported as of 1 April 2026 (wrong
  thresholds); 12-23's Fast Track Exit sentence is doubtful. The remaining high-risk tips
  are supported.
- No invented scheme, number or hotline: pass. FSSAI, ESIC, EPFO, MCA21, GSTN, IBC,
  SEBI CIS, IP India, IS 19000 and 1930 all exist.
- No direct equivalent recorded where needed: pass — 12-5 explicitly says India has no
  franchise-disclosure statute, which is the correct handling of a missing equivalent.
- Caveats retained: 12-8's caveat ("threshold is revised from time to time") is a hedge
  that does not cure a wrong current figure.

## Blocking issues

1. **12-8** — turnover thresholds outdated. Replace "Rs 12 lakh / Rs 20 crore" with
   "Rs 1.5 crore / Rs 50 crore" per the FSSAI order of 13 March 2026 (effective 1 April
   2026), and cite the order date so the figure is dated rather than timeless.

## Issues requiring confirmation (not counted as blocking)

- **12-23** — "the Fast Track Exit scheme applies to eligible companies" is likely
  superseded by the Companies (Removal of Names) Rules, 2016 (Form STK-2). mca.gov.in
  returned 403; confirm before shipping.
- **12-8 sources** — a Ministry of Housing and Urban Affairs URL is appended to a food
  licensing tip and supports nothing. Remove it.

Verdict: FAIL

Blocking issues: 1 (12-8). Everything else in the chapter is a genuine India rewrite with
real schemes, real sections and no invented hotline; a single factual refresh would clear
the verdict.
