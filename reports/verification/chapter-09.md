# Verification: Chapter 09 - Everyday Legal Red Lines

Verifier: Independent verification agent (delegated)
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/09-everyday-legal-red-lines.json
Manifest status: draft, tier A, 29 tips, verifier null, humanReview pending, bannedTerms 0

## Method

Read `reports/source-packs/chapter-09.md` and the chapter JSON. All six HIGH-RISK tips
named in the pack (9-2, 9-7, 9-16, 9-20, 9-21, 9-22) were compared with the cited Indian
instrument; 9-1, 9-12 and 9-13 were spot-checked for invented schemes, figures and
hotlines. Access failures, recorded rather than worked around: **indiacode.nic.in returns
HTTP 403** (Akamai "Access Denied") for every request; **mha.gov.in PDFs redirect
cross-origin**; **web_fetch cannot read application/pdf** ("unsupported content type"), so
statute text was read on Indian Kanoon and bare-act mirrors and PDFs only through search
snippets; **cara.nic.in does not resolve** (DNS, getaddrinfo ENOTFOUND), so CARA material
was read on cara.wcd.gov.in, which does resolve. The configured search engine (Bing)
returned no candidates; the fallback engine was used.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 9-2 | Insulting the national flag or the Constitution can bring up to three years' imprisonment, or a fine, or both | Prevention of Insults to National Honour Act, 1971 | s.2 | 2026-10-21 | yes | Wording matches the section verbatim (indiankanoon.org/doc/683564). mha.gov.in PDF unreadable (cross-origin). |
| 9-2 | Commercial use of national emblems needs permission | Emblems and Names (Prevention of Improper Use) Act, 1950 | s.3 | 2026-10-21 | yes | Act in force, prohibits trade/profession use; tip claims no figure. |
| 9-2 | Title: "a group chat is a public place in law" | BNS 2023 — no instrument cited | — | 2026-10-21 | no | No cited statute or judgment declares a group chat a "public place". Obscene material sent to a group is caught by IT Act s.67 on a different footing. Unsupported legal status claim. |
| 9-7 | Keeping found property can be criminal; a finder carries a bailee's duty | BNS 2023 (dishonest misappropriation); Indian Contract Act, 1872 | Contract Act s.71 | 2026-10-21 | yes | s.71: finder "is subject to the same responsibility as a bailee". |
| 9-7 | Using a found card is a separate offence, and the bank can reverse the debit and freeze the card | BNS 2023 / IT Act 2000; RBI card-safety framework | — | 2026-10-21 | yes | Directionally accurate; no invented figure or hotline. |
| 9-12 | Voyeurism and stalking are BNS s.77 and s.78 | BNS 2023 | ss.77-78 | 2026-10-21 | yes | Numbering confirmed. |
| 9-13 | Real money gaming is banned by a 2025 Act | Promotion and Regulation of Online Gaming Act, 2025 (Act 32 of 2025) | whole Act | 2026-10-21 | yes | Assent 22.08.2025, corrigenda 28.08.2025; MeitY text and PIB release 18.03.2026 confirm the prohibition on online money games. |
| 9-16 | Aadhaar Act punishes unauthorised access to the CIDR and impersonation; DPDP Act 2023 gives data rights | Aadhaar (TDD) Act, 2016; DPDP Act, 2023 | Aadhaar ss.34, 38, 42 | 2026-10-21 | yes | Sections confirmed (uidai.gov.in Act PDF snippet; indiankanoon.org/doc/136376647). indiacode 403; text seen via search cache. |
| 9-20 | "There is no fee for the legal adoption process through CARA"; cost tag "Free" | Adoption Regulations, 2022; CARA FAQ (2026) | Reg. 49, Schedule XV | 2026-10-21 | no | CARA FAQ Q13: PAPs "are required to pay adoption fees in installments". Reg. 49 and Schedule XV prescribe the fee. The claim is the opposite of the regulator's published position. |
| 9-20 | Paying a birth mother directly and taking the child home is trafficking; only the CARA route is lawful | JJ Act, 2015; BNS 2023 | JJ Act adoption provisions | 2026-10-21 | yes | Directionally correct; cara.nic.in unreachable (DNS). |
| 9-21 | An insurer may avoid a policy taken by fraud and recover what it paid | Insurance Act, 1938 | s.45 | 2026-10-21 | yes | s.45 bars questioning a life policy after three years, leaving fraud within that window actionable — consistent with the tip. |
| 9-21 | Insurance fraud can be prosecuted as cheating/forgery | BNS 2023; IRDAI | ss.318, 336 | 2026-10-21 | yes | No invented penalty figure. |
| 9-22 | Commercial organ dealing: 5-10 years and a fine of Rs 20 lakh to Rs 1 crore | Transplantation of Human Organs and Tissues Act, 1994 | s.19 | 2026-10-21 | yes | Confirmed on courtbook.in / legalrepublic.in; s.19A covers illegal tissue dealing. |
| 9-1 | Spot check: identity theft, personation and obscene electronic content are IT Act offences | IT Act, 2000 | ss.66C, 66D, 67 | 2026-10-21 | yes | Sections exist; note the tip's phrase "false electronic content" is not an IT Act offence — false-information/public-mischief offences sit in BNS ss.352-356. Non-blocking over-inclusion. |

## Banned-term check

- JSON: 0 banned terms (China, Chinese, mainland, RMB, yuan, hukou, yibao, dibao, CNY).
- Rendered page: 0 banned terms in `dist/chapters/09-everyday-legal-red-lines/index.html`.
  The same page repeats the defective "no fee for the legal adoption" sentence, so the
  error is already public in `dist/`.

## Safety and editorial check

- No unsupported high-risk claim: **FAIL.** 9-20 states as fact that CARA adoption is
  free, which CARA's own FAQ and the Adoption Regulations contradict; 9-2 asserts a
  statutory status ("public place") for group chats that no cited instrument grants.
- No invented scheme, number or hotline: pass. 14416 (Tele-MANAS), 1930 and 112 are all
  real; no invented Indian scheme or agency name found in the chapter.
- No direct equivalent recorded where needed: 9-7 and 9-16 record Indian equivalents
  properly. In 9-20 the Indian equivalent is present but mis-stated, not missing.
- Caveats retained: 9-20's caveat repeats the "no fee" error instead of qualifying it, so
  the caveat compounds rather than limits the claim.

## Blocking issues

1. **9-20** — "There is no fee for the legal adoption process through CARA" plus the
   "Free" cost tag. Contradicted by CARA FAQ (2026) Q13 and Adoption Regulations 2022
   Reg. 49/Schedule XV, which prescribe adoption fees paid in installments. Required fix:
   state that a fee is prescribed and payable in installments, and correct the cost tag.
2. **9-2** — the title's legal assertion that "a group chat is a public place in law" is
   not supported by any cited instrument. Required fix: cite the offence actually
   engaged (IT Act s.67 for obscenity, BNS defamation) or soften the claim.

Verdict: FAIL

Blocking issues: 2 (9-20, 9-2). 12 of 14 checked claims pass; the chapter is otherwise a
genuine India rewrite with plausible, correctly numbered citations.
