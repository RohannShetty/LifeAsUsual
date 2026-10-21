# Verification: Chapter 11 - Red Lines for Developers and Techies

Verifier: independent-verifier-subagent
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/11-red-lines-for-developers.json
Manifest status: draft (recommend checked)

## Method

Adversarial check of all 21 tips against the Information Technology Act, 2000; Bharatiya Nyaya Sanhita, 2023; Bharatiya Nagarik Suraksha Sanhita, 2023; Copyright Act, 1957; Patents Act, 1970; Indian Contract Act, 1872; Digital Personal Data Protection Act, 2023; Telecommunications Act, 2023; Promotion and Regulation of Online Gaming Act, 2025; PMLA, 2002; POCSO Act, 2012; and the CERT-In Directions of 28 April 2022. Access failures: www.indiacode.nic.in returned HTTP 403 on every request; PIB release PRID 2241804 returned 403; the DoT eServices authorisation pages (eservices.dot.gov.in) returned 403. Statute text was therefore read on Indian Kanoon/SooperKanoon and departmental pages. Section text was read for Patents Act s.39, Copyright Act ss.63/65A, IT Act ss.66/69A and the Online Gaming Act commencement. Claims that could not be confirmed from an official page are marked.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
|---|---|---|---|---|---|---|
| 11-1 | FIR under BNSS s.173; Article 22(1)-(2) and 39A; NALSA 15100; default bail at 60/90 days; BSA confession to police inadmissible | https://nalsa.gov.in/ | BNSS s.173, s.187; Constitution Arts. 22, 39A; BSA 2023 s.23 | 2026-10-21 | yes | 15100 is the NALSA legal-aid helpline; default bail period is 60/90 days. Grade C framing, no invented offence. |
| 11-2 | IT Act s.66 (3 years / 5 lakh), s.43; Copyright s.65A circumvention, s.63; s.66C/66D | https://www.indiacode.nic.in/ | IT Act ss.43, 66, 66C, 66D; Copyright ss.63, 65A | 2026-10-21 | yes | Penalties correct. No user-count or rupee threshold exists in s.66. |
| 11-3 | Ticket/flash-sale scripts; IRCTC terms; IT Act ss.43/66; BNS; Railways Act touting | https://www.irctc.co.in/ | IT Act ss.43, 66; Railways Act 1989 s.143 | 2026-10-21 | yes | IRCTC terms prohibit automated booking; touting is an offence under the Railways Act. |
| 11-4 | No fixed record threshold for scraping; IT Act s.43/66; DPDP fiduciary duties; Copyright s.2(o) compilations | https://www.meity.gov.in/ | IT Act ss.43, 66; DPDP 2023 ss.4-10, Schedule; Copyright s.2(o) | 2026-10-21 | yes | DPDP Schedule penalties run to hundreds of crores; no "record count" threshold. |
| 11-5 | Online money games banned by the 2025 Act; state gambling laws; BNS cheating; IT Act ss.66/66C/66D/67/67A/67B; POCSO; RBI KYC; PMLA | https://www.meity.gov.in/ | Promotion and Regulation of Online Gaming Act, 2025; IT Act ss.66-67B; POCSO 2012 | 2026-10-21 | yes | Act received assent in August 2025 and prohibits online money games (commencement 1 May 2026). PIB page 403; commencement confirmed via PIB mirror/newsonair. |
| 11-6 | On leaving: return access; no deletion, backdoor or password change; IT Act, BNS mischief/breach of trust, contract, CERT-In | https://www.cert-in.org.in/ | IT Act 2000 ss.43, 66; BNS ss.316, 324; Contract Act | 2026-10-21 | yes | High-risk tip. Legally sound; the earlier "30 days / labour arbitration" import is gone. Written scope and NDA survival are correctly stated. |
| 11-7 | No trade-secrets statute; Copyright s.17(c) employer first owner; s.51 infringement; s.55 remedies; s.63 punishment 6 months-3 years + 50,000-2 lakh; IT Act ss.43/66 | https://www.indiacode.nic.in/ | Copyright ss.17(c), 51, 55, 63; IT Act ss.43, 66 | 2026-10-21 | yes | Punishment range correct. |
| 11-8 | IT Act ss.66/43; "BNS, 2023 covers mischief and theft of electricity" | https://www.indiacode.nic.in/ | IT Act ss.43, 66; BNS 2023; Electricity Act 2003 s.135 | 2026-10-21 | yes | Note: electricity theft is specifically Electricity Act, 2003 s.135; the BNS has no electricity-theft offence (it covers mischief). Core IT Act advice is correct. |
| 11-9 | Testing without permission; IT Act ss.43/66 (3 years/5 lakh), 66C/66D; no statutory safe harbour; DPDP | https://www.cert-in.org.in/ | IT Act ss.43, 66, 66C, 66D | 2026-10-21 | yes | No safe-harbour statute for unauthorised testing. |
| 11-10 | No vulnerability-disclosure statute; CERT-In nodal agency; Directions under s.70B(6): 6-hour reporting, 180-day logs in India, NTP sync; duties on organisations | https://www.cert-in.org.in/ | IT Act s.70B(6); CERT-In Directions 28.04.2022 | 2026-10-21 | yes | Directions apply to service providers/intermediaries/data centres, not independent researchers; text says so. |
| 11-11 | India does not ban VPNs; Telecom Act 2023 authorisation; ISP licence from DoT; CERT-In KYC 5 years/logs 180 days; s.69A blocking | https://dot.gov.in/ | Telecommunications Act 2023; IT Act s.69A; CERT-In Directions 2022 | 2026-10-21 | yes | Note: the caveat "no prohibition on private international gateways" is overbroad. A private international gateway needs an ILD/UL (VNO-ILD) authorisation from DoT. Recommend narrowing that sentence. Not blocking: the operative advice (no VPN ban; authorisation for service provision) is right. |
| 11-12 | Contract Act s.27: post-employment non-compete void; Superintendence Co. v Krishan Murgai; confidentiality/non-solicitation enforceable | https://www.indiacode.nic.in/ | Contract Act s.27; Supdt. Co. of India v Krishan Murgai (1981) 2 SCC 246 | 2026-10-21 | yes | Restraint during employment is valid; post-termination restraint is void. |
| 11-13 | Copyright s.17(c); s.19 assignment in writing; Patents Act s.6 and s.39 "only government employees"; private ownership by contract; s.57 moral rights | https://indiankanoon.org/doc/1096790/ | Patents Act ss.6, 39; Copyright ss.17(c), 19, 57 | 2026-10-21 | **no** | Patents Act s.39 applies to **any person resident in India** applying abroad without a written permit (defence/atomic-energy proviso), not only government employees. The benefit misstates s.39. Blocking. |
| 11-14 | GPL; Copyright ss.14/51/55/63/65A/57; no open-source statute; no statutory damages multiplier | https://www.indiacode.nic.in/ | Copyright ss.14, 51, 55, 57, 63, 65A | 2026-10-21 | yes | GPL is enforced as a copyright licence; no separate OSS statute. |
| 11-15 | DPDP ss.4/5/6/8/9/16; child under 18; verifiable parental consent; no behavioural monitoring/targeted ads at children; Schedule up to 250 crore; Data Protection Board; IT Act s.43A | https://www.meity.gov.in/ | DPDP 2023 ss.4-9, 16, Schedule | 2026-10-21 | yes | s.9(1)-(3) covers children; s.9(3) bans tracking/behavioural monitoring/targeted advertising directed at children. |
| 11-16 | No ICP/website registration; IT Rules 2021 Rule 3(1)(b); grievance officer 24h ack / 15 days; SSMI Rule 4 monthly report + first originator; CERT-In 6 hours/180 days; DPDP; CII under s.70A/NCIIPC | https://www.meity.gov.in/ | IT Rules 2021 rr.3(1)(b), 4; IT Act s.70A; CERT-In Directions 2022 | 2026-10-21 | yes | No Indian ICP filing exists; CII designation is by government notification. |
| 11-17 | No pre-launch AI safety assessment or algorithm registry; IT Act s.79 safe harbour; IT Rules 2021; DPDP; no TDM exception; MeitY deepfake advisories; s.69A | https://www.meity.gov.in/ | IT Act s.79; IT Rules 2021; DPDP 2023; Copyright Act | 2026-10-21 | yes | MeitY synthetic-content advisories are real; no registration regime. |
| 11-18 | No unfair-competition statute or reported judgment on ad blocking; Copyright ss.14/51/55/63; IT Act ss.43/66; DPDP; Competition Act s.4 dominance | https://www.cci.gov.in/ | Copyright ss.14, 51, 55, 63; Competition Act s.4 | 2026-10-21 | yes | Ad blocking is not a statutory offence; the Competition Act applies only to abuse of dominance. |
| 11-19 | API resale: no criminal offence or licence; contract breach; DPDP data fiduciary; IT Act ss.43/66 for leaked keys; BNS cheating; CGST threshold | https://cbic.gov.in/ | DPDP 2023; IT Act ss.43, 66; CGST Act 2017 s.22 | 2026-10-21 | yes | GST registration threshold (Rs 40 lakh goods / Rs 20 lakh services) is correctly left generic. |
| 11-20 | Copyright s.65A circumvention (up to 2 years + fine), s.63 (6 months-3 years + 50,000-2 lakh), s.63A second conviction, s.55, s.65B; BNS cheating | https://www.indiacode.nic.in/ | Copyright ss.55, 63, 63A, 65A, 65B | 2026-10-21 | yes | Penalties correct. |
| 11-21 | IT Act s.43 civil, s.66 (3 years/5 lakh), s.66F cyber terrorism (life); BNS abetment; no separate DDoS offence | https://www.indiacode.nic.in/ | IT Act ss.43, 66, 66F; BNS abetment | 2026-10-21 | yes | No stand-alone DDoS section; conduct is charged under s.66/66F. |

## Banned-term check

- JSON: 0 banned terms. `npx tsx scripts/check-chapter.ts 11` returned PASS: no banned term, CJK character or foreign-jurisdiction term (21 tips).
- Rendered page: not rebuilt in this pass; the JSON source is clean.

## Safety and editorial check

- No unsupported high-risk claim: the high-risk tip 11-6 is legally sound; the 11-13 failure is a misdescription of s.39, not an invented offence.
- No invented scheme, number or hotline: NALSA 15100, CERT-In 6-hour/180-day rules and the 2025 gaming Act are real.
- No direct equivalent recorded where needed: the "no trade-secrets statute", "no vulnerability-disclosure statute", "no website registration/ICP", "no AI registry" and "no separate DDoS offence" statements are correct.
- Caveats retained: 11-8 (public bug bounty is scoped permission), 11-11 (legitimate VPN compliance), 11-16 (retention vs minimisation) and 11-17 (no registration is not no duties) are present.

## Blocking issues

- **11-13**: benefit says "only section 39 deals with inventions by employees of the government or a government undertaking". Section 39 of the Patents Act, 1970 applies to **any person resident in India** who applies for a patent outside India without a prior written permit; it is a foreign-filing control, not a government-employment rule. Correct the sentence to say s.39 is a resident foreign-filing permit and that private-sector employee invention ownership is governed by the contract (hired-to-invent/assignment), not by the Act.

Verdict: FAIL
