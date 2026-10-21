# Verification: Chapter 17 - Elderly at Home

Verifier: independent-verifier-a45fe80c-adb7-4922-988d-78d56d4d0b53
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/17-elderly-at-home.json
Manifest status: draft (recommend checked)

## Method

I read all 13 tips, the claim list in reports/source-packs/chapter-17.md, and the older FAIL report at reports/verification/chapter-17.md. Every regression item in that report was re-tested: Chinese Civil Code art. 33 guardianship (17-1), the six will types and notarial priority (17-2), the 6/8/10% reverse-mortgage LTV and CBIRC/NFRA (17-6), the "few hundred rupees" air mattress plus Chinese LTCI (17-8), the 12-month deposit cap and civil-affairs filing (17-11), provincial filial leave with 12333 and flk.npc.gov.cn (17-12), and the NHC dementia plan (17-13). All are gone; 17-1, 17-2, 17-6, 17-8, 17-11 and 17-13 now state the Indian position or that India has no equivalent.

Instruments: nalsa.gov.in (HTTP 200), Social Justice and Empowerment material, RBI material, NICE NG97 (read in full), and Crossref for DOIs. Access failures: indiacode.nic.in returns HTTP 403, so the Indian Succession Act 1925 s.63, the Maintenance and Welfare of Parents and Senior Citizens Act 2007 and the National Trust Act 1999 were cross-read from section-level mirrors and government pages rather than the primary statute site; pib.gov.in bodies return HTTP 403 (titles and note IDs readable); elderline.gov.in failed DNS (ENOTFOUND); mohfw.gov.in and socialjustice.gov.in were not directly readable. DOI resolution: eight DOIs resolved via Crossref (HTTP 200); the later bulk re-check of all 67 DOIs returned HTTP 400 and then 429, so the remaining DOIs (including Clarfield 2003, Porter 2022, Ottaviani 2026, Latimer 2026) were not individually re-resolved and are marked accordingly.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 17-1 | India has no adult guardianship statute; the Guardians and Wards Act, 1890 covers minors only; National Trust Act 1999 limited guardianship; Mental Healthcare Act 2017 advance directive and nominated representative; a will is made under the Indian Succession Act 1925 | GWA 1890; National Trust Act 1999; MHCA 2017 ss.5-6, 14; ISA 1925 | - | 2026-10-21 | yes | Accurate. MHCA 2017 indeed provides advance directives and nominated representatives; a power of attorney is not guardianship. |
| 17-2 | A will needs writing, the testator's signature and two witnesses (ISA s.63); registration is optional; a notarised will has no priority; a later will revokes an earlier one | Indian Succession Act 1925 s.63; Registration Act 1908 s.18 | s.63; s.18 | 2026-10-21 | yes | s.63 requirements stated correctly; registration is optional under s.18 and notarisation confers no priority. |
| 17-5 | Maintenance and Welfare of Parents and Senior Citizens Act, 2007 gives a maintenance tribunal; Senior Citizens' Savings Scheme is the small-savings route; RBI/SEBI warn about unauthorised deposit takers | MWPSC Act 2007 ss.4-9; SCSS; RBI/SEBI investor alerts | ss.4-9 | 2026-10-21 | yes | Tribunal mechanism and SCSS both real. Note: SCSS interest rates change quarterly, so no rate is hard-coded - correct. |
| 17-6 | Reverse mortgage loans come from banks/HFCs under the RBI framework; an annuity-linked version is permitted; India runs no state pilot and sells no "reverse mortgage insurance"; 6/8/10% are warning signs, not thresholds | RBI reverse mortgage framework | - | 2026-10-21 | yes | The Chinese insurance pilot, LTV ladder and CBIRC/NFRA references are gone; text presents the percentages as red flags, which is defensible. |
| 17-7 | PM-JAY, ESIC, state palliative-care programmes; RPwD Act 2016 certificate; AAM/ASHA | NHA; ESIC; RPwD Act 2016 | - | 2026-10-21 | yes | The RPwD Act 2016 disability certificate route is real and correctly attributed. |
| 17-8 | India has no long-term-care insurance; entry-level pressure-relieving mattress costs several thousand rupees; pressure ulcers raise mortality | Porter 2022; Ottaviani 2026; Shi 2018; Latimer 2026 Cochrane | - | 2026-10-21 | yes | Chinese LTCI claim removed; the "no LTC insurance in India" statement is correct. DOIs not individually re-resolved. |
| 17-9 | NPCBVI provides free cataract surgery at government facilities; private surgery costs about Rs 15,000-40,000 per eye | NPCBVI/NPCB material | - | 2026-10-21 | yes | Programme is real. The private price is a market range with no statutory source - note, not a blocking defect. |
| 17-11 | India has no national deposit cap for nursing homes; state nursing-home rules, Clinical Establishments Act 2010, National Trust Act 1999 and MWPSC Act 2007 apply | Clinical Establishments Act 2010; National Trust Act 1999; MWPSC 2007 | - | 2026-10-21 | yes | The Chinese 12-month cap and escrow/civil-affairs filing are gone; no national cap exists. |
| 17-12 | India has no statutory elder-care leave; the Factories Act, 1948 and state Shops and Establishments Acts set hours, rest and leave; CCS (Leave) Rules 1972 for central government staff | Factories Act 1948; OSH Code 2020; CCS (Leave) Rules 1972 | - | 2026-10-21 | no | Blocking: the Factories Act 1948 was repealed on 21 November 2025 and replaced by the Occupational Safety, Health and Working Conditions Code, 2020, which is now cited as live law. |
| 17-13 | NICE NG97 memory assessment; reversible dementias under 1% (Clarfield 2003); India has no standard long-term-care health insurance and no national dementia screening programme | NICE NG97; Clarfield 2003 | NG97 1.1.12, 1.2.1, 1.2.2, 1.2.6 | 2026-10-21 | yes | NG97 read in full; the recommendation numbers cited match the guideline's structure. Chinese NHC plan removed. |

## Banned-term check

- JSON: 0 banned terms - npx tsx scripts/check-chapter.ts 17 reports "PASS: no banned term, CJK character or foreign-jurisdiction term".
- Rendered page: not rendered (no build run). JSON scanned for the banned agency list, CJK characters and China/RMB/yuan/hukou/yibao/dibao: none. The 12333 hotline and flk.npc.gov.cn source are gone.

## Safety and editorial check

- No unsupported high-risk claim: 17-5, 17-7 and 17-9 check out against the named instruments; 17-12's negative claim is correct but rests on a repealed statute.
- No invented scheme, number or hotline: no invented scheme or hotline remains; the Chinese LTCI pilot, CBIRC and provincial leave entitlements are all removed.
- No direct equivalent recorded where needed: 17-1 (guardianship), 17-6 (insurance), 17-8 (LTCI), 17-11 (deposit cap) and 17-12 (elder-care leave) each say India has no equivalent rather than implying one.
- Caveats retained: caveats present throughout; 17-6's caveat correctly reframes 6/8/10% as warning signs.

## Blocking issues

- 17-12 (benefit and sources): "The Factories Act, 1948 and the state Shops and Establishments Acts set hours, weekly rest and leave entitlement ..." and the source line "Factories Act, 1948. <https://www.indiacode.nic.in/>" present a statute repealed on 21 November 2025 as current law. Correction: cite "The Occupational Safety, Health and Working Conditions Code, 2020 (sections 25 and 32)" and drop the Factories Act source URL.

Verdict: FAIL
