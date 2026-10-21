# Verification: Chapter 18 - Is Having Kids Worth It

Verifier: independent-verifier-a45fe80c-adb7-4922-988d-78d56d4d0b53
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/18-is-having-kids-worth-it.json
Manifest status: draft (recommend checked)

## Method

I read all 7 tips, the claim list in reports/source-packs/chapter-18.md, and the older FAIL report at reports/verification/chapter-18.md. The three regression items from that report were re-tested: the 98-day leave figure with a maternity-insurance fund and a 60-day provincial reward leave (18-2), the rupee penalty ladder derived from yuan (18-3), and the ART restriction to married couples with Guobanfa [2024] No. 48 (18-7). All three defects are gone: 18-2 now states the Indian 26-week, employer-paid position; 18-3 states the statutory penalty without a yuan conversion; 18-7 states the ART Act 2021 position.

Instruments: Maternity Benefit Act 1961 (s.5, s.11, s.11A, s.12, s.21) read through section-level mirrors and Indian Kanoon because indiacode.nic.in returns HTTP 403; nalsa.gov.in (HTTP 200, "NALSA Helpline Number 15100"); PIB and NHA material for PM-JAY, ICDS, PM POSHAN and PMMVY; ART (Regulation) Act 2021 and the Assisted Reproductive Technology (Regulation) Rules, 2022; PCPNDT Act 1994. Access failures: indiacode.nic.in 403; pib.gov.in press-release bodies 403; pmjay.gov.in and icds-wcd.nic.in not directly readable. Crossref: eight DOIs resolved (HTTP 200); the bulk re-check of all 67 DOIs failed (HTTP 400 from DOI URL-encoding, then 429 rate limiting), so the fertility DOIs in 18-7 (Steiner 2016, Rothman 2013, Magnus 2019, Franasiak 2014) were not individually re-resolved and are not claimed as verified.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 18-1 | India has no universal child benefit; support is scheme-based - PM-JAY, ICDS, PM POSHAN, PMMVY and state schemes; ask the district social welfare office, never pay an agent | PM-JAY; ICDS; PM POSHAN; PMMVY | - | 2026-10-21 | yes | All four schemes are real and correctly characterised (hospitalisation, anganwadi nutrition, school meal, maternity benefit). No amount is hard-coded, and eligibility is correctly tied to SECC/state lists rather than self-declaration. |
| 18-2 | 26 weeks for the first two children, employer-paid; 12 weeks thereafter; leave may start 8 weeks before delivery; 12 weeks for adoption of a child under 3 months and for surrogacy; crèche at 50+ employees; two nursing breaks until 15 months; coverage of factories, mines, plantations, shops with 10+ employees and ESIC-covered establishments | Maternity Benefit Act 1961 ss.5, 11, 11A; ESI Act coverage | ss.5, 11, 11A | 2026-10-21 | yes | Matches the Act as amended in 2017, including the 10-employee threshold for shops and establishments and the 15-month limit on nursing breaks. |
| 18-3 | Section 12 bars dismissal or a pay cut during maternity leave; contravention is punishable with imprisonment up to one year, a fine, or both; an inspector enforces; NALSA legal aid 15100 | Maternity Benefit Act 1961 ss.12, 21; nalsa.gov.in/legal-aid | ss.12, 21 | 2026-10-21 | no | s.12 and s.21 are stated correctly (s.21 allows up to one year and a fine up to Rs 5,000, or both). Blocking: the caveat still cites the Industrial Disputes Act, 1947 as live protection, and that Act was repealed on 21 November 2025. |
| 18-4 | Time cost of children is a framework, not a fixed number; evidence grade C | Author framework | - | 2026-10-21 | yes | Correctly presented as an author framework with grade C; no legal or numerical claim. |
| 18-5 | Costs split into ages 0-3, compulsory education and post-compulsory education; PM POSHAN and PM-JAY apply | PM POSHAN; PM-JAY | - | 2026-10-21 | yes | No invented amounts; scheme references are accurate and caveats warn that private and government schools differ by an order of magnitude. |
| 18-6 | Keep the child's costs in separate accounts from household money | - | - | 2026-10-21 | yes | No external claim. |
| 18-7 | ART (Regulation) Act 2021 and Rules 2022 govern clinics; treatment is open to married couples and single women within the Act's age limits; PCPNDT Act 1994 prohibits prenatal sex determination | ART Act 2021; ART Rules 2022; PCPNDT Act 1994 | - | 2026-10-21 | yes | The earlier "married couples and family-planning approval" restriction and Guobanfa reference are gone. Single women are eligible under the 2021 Act; PCPNDT 1994 correctly cited. |

## Banned-term check

- JSON: 0 banned terms - npx tsx scripts/check-chapter.ts 18 reports "PASS: no banned term, CJK character or foreign-jurisdiction term".
- Rendered page: not rendered (no build run). JSON scanned for the banned agency list, CJK characters and China/RMB/yuan/hukou/yibao/dibao: none.

## Safety and editorial check

- No unsupported high-risk claim: 18-1 and 18-5 rest on real schemes with no invented amounts; 18-2 matches the Act clause by clause.
- No invented scheme, number or hotline: no invented scheme or hotline; NALSA 15100 verified; the yuan-derived penalty ladder is gone.
- No direct equivalent recorded where needed: 18-1 opens by saying India has no universal child benefit instead of implying one.
- Caveats retained: caveats cover SECC eligibility, scheme changes, the 12-week rule after two children, and the ESIC/shops coverage boundary.

## Blocking issues

- 18-3 (caveats): "Outside that, your protection comes from the state Shops and Establishments Act, the Industrial Disputes Act, 1947 if you are a workman, or your contract." The Industrial Disputes Act, 1947 was repealed on 21 November 2025. Correction: "the Industrial Relations Code, 2020".

Verdict: FAIL
