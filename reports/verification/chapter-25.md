# Verification: Chapter 25 - After Someone Dies

Verifier: independent-verifier-048d208e
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/25-after-someone-dies.json
Manifest status: draft (recommend checked)

## Method

Read all 12 tips, the source pack and the previous failing report. Used the old report's blocking list as a regression test: funeral-home licensing, the three-day morgue cap, the 48-hour autopsy request, the basic/non-basic funeral tariff, the "price violation" regulations, county-level civil-affairs registration and PIPL article 49 relative data access. All six are gone; the current text now states the Indian negative where no equivalent exists. Checked the replacements against the Bharatiya Nagarik Suraksha Sanhita 2023 (full text via Indian Kanoon, because indiacode.nic.in HTML handles returned HTTP 504), the Registration of Births and Deaths Act 1969 (full PDF from the India Code bitstream), the DPDP Act 2023 (section 14, bare-act text), the Indian Succession Act 1925, the Consumer Protection Act 2019, EPFO/ESIC/IRDAI scheme pages and RBI nomination rules. Ran `npx tsx scripts/check-chapter.ts 25` (PASS, 0 banned terms/CJK).

Access notes: indiacode.nic.in HTML pages returned 504; the RBD Act PDF bitstream returned 200. The DPDP section was read from a bare-act mirror because the official PDF was not reachable from this environment. crsorgi.gov.in was not reached; the RBD Act text itself was used instead.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 25-1 | Sudden/unnatural death: call 112, do not move the body; police inquire and report to the Executive Magistrate, who may hold an inquiry; cremation/burial needs registration first | BNSS 2023; RBD Act 1969 | BNSS s.194, s.196 | 2026-10-21 | yes | BNSS s.194 requires the officer to intimate the nearest Executive Magistrate, investigate in the presence of two inhabitants and report within 24 hours; s.196 lets the Magistrate hold an inquiry, and it is mandatory only for the clause (i)/(ii) cases. The "may hold" wording is correct. The "no cremation before registration" sentence is not in the RBD Act itself; it rests on municipal bye-laws and crematorium practice. Practically correct in most states, but it should be attributed to municipal rules rather than the central Act. |
| 25-2 | Death registered with the municipal registrar under the RBD Act; hospital issues the medical certificate of cause; registrar issues the death certificate, usually within 21 days | RBD Act 1969 | ss.8, 10, 12, 13 | 2026-10-21 | yes | s.8 lists the informants, s.10 provides medical certification of cause, s.12 requires a free extract on registration, s.13 sets the 21-day normal reporting period and delayed-registration fees. "Usually within 21 days" describes the reporting/registration window, not a statutory issuance deadline; acceptable. |
| 25-3 | No national rule that only a funeral home may move/embalm/cremate; no three-day statutory limit; municipal/panchayat crematoria are licensed by the local body; health officer controls removal; unnatural-death bodies stay until police/post-mortem release | RBD Act 1969; municipal law; MoHFW | - | 2026-10-21 | yes | Correct negative. No central statute creates a funeral-home monopoly or a three-day storage cap. The municipal licensing and health-officer control points are accurate in state municipal laws. |
| 25-4 | In an unnatural/suspicious death the police order the post-mortem; the family has no statutory right to demand one; ask the investigating officer in writing and the SDM to order an inquiry; 48-hour/seven-day windows are not Indian | BNSS 2023 | ss.194-196 | 2026-10-21 | yes | Correct. The post-mortem is part of the police investigation; s.196 permits a Magistrate's inquiry. The text expressly says the 48-hour and seven-day windows are not Indian rules. |
| 25-5 | India has no household-register cancellation; register the death, inform bank/insurer/EPFO/pension, settle the estate; surrender/transfer ration card, gas, vehicle | RBD Act 1969; EPFO; IRDAI; Indian Succession Act 1925 | - | 2026-10-21 | yes | Correct negative and accurate practical steps. |
| 25-6 | No national statutory list of basic funeral services or legally fixed prices; municipal crematoria publish their own charges; ask for an itemised quote; basic/non-basic is marketing, not a legal category | Consumer Protection Act 2019; municipal practice | - | 2026-10-21 | yes | Correct negative; no basic/non-basic tariff is asserted. |
| 25-7 | Forced bundling, above-quote charges and item-splitting are unfair trade practices under the CPA 2019; use NCH 1915, e-Daakhil, District Commission, municipal commissioner | Consumer Protection Act 2019; NCH; e-Daakhil | ss.2(47), 35 | 2026-10-21 | yes | Correct legal route and correct hotline/portal. |
| 25-8 | No Indian register of funeral agents; check municipal trade licence, shop-and-establishment registration, GSTIN and hospital vendor list | GST portal; MCA; MoHFW | - | 2026-10-21 | yes | Correct negative. GSTIN verification and trade licensing are real. |
| 25-9 | Collect EPF/EPS, ESIC dependants' benefit, life insurance, bank balances, pension; each has its own form and nominee rule | EPFO; ESIC; IRDAI; RBI | - | 2026-10-21 | yes | All schemes exist and the description is accurate. |
| 25-10 | DPDP Act 2023 protects a living person's data and gives no automatic relative access; a person may nominate someone in advance under the Act; if none, ask the platform and take legal advice | DPDP Act 2023 | s.14 (nomination); ss.11-12 | 2026-10-21 | yes | s.14(1) expressly allows a Data Principal to nominate an individual to exercise the Data Principal's rights after death or incapacity. No automatic heir right. Accurate. |
| 25-11 | An heir is liable for the deceased's debts only up to the estate received; can refuse the inheritance; secured creditor can enforce the mortgage | Indian Succession Act 1925; CPC 1908 | general principle | 2026-10-21 | yes | Correct as a general principle of succession law; the citation is broad but not wrong. |
| 25-12 | Probate is not mandatory for every estate; a nominated bank deposit can be released on the bank's form; a will needs probate for immovable property in some jurisdictions | Indian Succession Act 1925; RBI nomination rules | s.213 | 2026-10-21 | yes | s.213 makes probate/letters of administration necessary only in the specified local jurisdictions and for the specified communities. RBI nomination rules allow release to a nominee. Correct. |

## Banned-term check

- JSON: 0 banned terms, 0 CJK characters, 0 China-specific administrative vocabulary. `npx tsx scripts/check-chapter.ts 25` reports PASS.
- Rendered page: not rebuilt in this pass; the JSON is the content source and is clean.

## Safety and editorial check

- No unsupported high-risk claim: PASS — every high-risk tip either matches the Indian instrument or expressly says India has no equivalent.
- No invented scheme, number or hotline: PASS — 112, 1915 and e-Daakhil are real; the Chinese 3-day/48-hour/county-level rules are gone.
- No direct equivalent recorded where needed: PASS — 25-3, 25-4, 25-5, 25-6, 25-8 and 25-10 state the negative.
- Caveats retained: PASS — caveats are Indian and consistent with the body.

## Blocking issues

None.

Verdict: PASS
