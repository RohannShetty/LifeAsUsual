# Verification: Chapter 15 - Renting and Buying Housing

Verifier: independent-verifier-session-cbb8c456
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/15-renting-and-buying-housing.json
Manifest status: draft (recommend checked)

## Method

All 18 tips were read in full (all grade A) with reports/source-packs/chapter-15.md and
the earlier report, whose eleven blocking findings (Chinese tenancy and presale rules:
Jianfanggui [2026] No.3, MOC Orders 88 and 80, the Residential Quality Guarantee, the
Supreme People's Court interpretation, housing-bureau approval, rental escrow and agent
escrow in 15-1 to 15-5, 15-10, 15-11, 15-13, 15-14, 15-17 and 15-18) were re-run as
regression cases. The Chinese instruments are gone; every one of those tips now cites
an Indian statute or explicitly states that India has no equivalent.

Instruments checked: the Model Tenancy Act, 2021 (deposit cap, Rent Authority structure
read at prsindia.org/billtrack/the-model-tenancy-act-2021); the Transfer of Property
Act, 1882 ss.54, 105, 106; the Registration Act, 1908 ss.17(1)(d), 49, 50; the Real
Estate (Regulation and Development) Act, 2016 ss.3, 4(2)(l)(D), 11, 14(3), 17, 18, 19,
31; the Electricity Act, 2003 s.56 (fifteen clear days' written notice, read at the
bare-act text); the Consumer Protection Act, 2019; the Legal Services Authorities Act,
1987 and the NALSA helpline 15100 (nalsa.gov.in, HTTP 200); the EPF Scheme, 1952; and
RBI material on external benchmarks, resets and foreclosure charges.

Access failures, logged: indiacode.nic.in bitstream PDFs (RERA, TPA, Registration Act,
Electricity Act) returned HTTP 403 "Access Denied" from the Akamai edge, as did
mohua.gov.in PDFs; those sections were therefore checked against the bare-act
reproductions and the PRS Bill Track summary, which quote the same text. The RBI PDF
link for the external-benchmark circular redirected cross-origin and was not read; the
chapter names no circular number, so no specific number could mismatch.

npx tsx scripts/check-chapter.ts 15 -> PASS, 18 tips, no banned term, CJK character or
foreign-jurisdiction term (exit 0).

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 15-1 | MTA 2021 caps residential deposit at two months' rent and requires refund on possession; NALSA helpline 15100; Rent Authority | Model Tenancy Act, 2021 (PRS Bill Track); nalsa.gov.in | Deposit cap; three-tier authorities | 2026-10-21 | yes | The two-month residential / six-month non-residential cap and the Rent Authority/Rent Court/Rent Tribunal structure are correct. The text correctly says it is a model act that states may adopt. 15100 is the NALSA helpline. |
| 15-2 | Self-help eviction: call 112, record everything; India has no single national statute; where MTA applies the landlord needs notice and an order; BNS 2023 trespass, mischief, wrongful restraint | Model Tenancy Act, 2021; BNS 2023 | Possession; ss.329-331, 324, 126 | 2026-10-21 | yes | The no-equivalent framing ("India has no single national statute") is correct and the BNS offences are the right ones for a lock-out. |
| 15-3 | Agents are not a party to the lease; nothing in Indian law stops an agent from receiving rent | Model Tenancy Act; TPA 1882; contract/agency law | Lease privity | 2026-10-21 | yes | The tip explicitly rejects a blanket prohibition and rests on written authorisation and receipts — correct. |
| 15-4 | India has no supervised rental escrow; rely on the contract and BNS cheating/criminal breach of trust; RBI prepaid rules cover wallets not rent | MoHUA; RBI prepaid instrument rules; BNS 2023 | Prepaid Payment Instruments | 2026-10-21 | yes | The no-equivalent statement is explicit and accurate; the RBI prepaid framework genuinely does not regulate a landlord's rent. |
| 15-5 | Lease survives sale; TPA s.105/s.106; Registration Act s.17(1)(d)/s.49; MTA registration | TPA 1882; Registration Act 1908 | ss.105, 106; 17(1)(d), 49 | 2026-10-21 | yes | Section numbers match; the point that a registered lease binds a purchaser with notice is correct. |
| 15-6 | Verify title and mortgages at the sub-registrar/land registry, check encumbrances, pay by bank transfer with a purpose note | Registration Act 1908; state registration portals | Title search | 2026-10-21 | yes | Legally sound. But the title and sources are unchanged from the English/China text and the source line still says "For evidence retention and transfer notes, see the two articles about bride price and IOU in Section 8 for the same reason" — those articles do not exist in the India edition. Editorial residue, not a false legal claim; see notes. |
| 15-7 | RERA 70% escrow; resale payment by bank transfer against the registered sale deed; keep the bank record | RERA 2016 s.4(2)(l)(D); TPA 1882; Registration Act 1908 | s.4(2)(l)(D) | 2026-10-21 | yes | High-risk tip. The 70% separate-account requirement and the registration duty are stated correctly; the tip correctly notes there is no escrow requirement for a resale. |
| 15-8 | "By regulation, the smallest legal rental unit is the original room as designed; kitchens, bathrooms, balconies and basement storage cannot be used for living" | MoHUA and RBI cited in sources; no Indian instrument exists | None | 2026-10-21 | no | This is the Chinese rule (Measures for the Administration of Commercial Housing Leasing, Order No. 6, arts.8-9) with the sources swapped to MoHUA and RBI. India has no national minimum-rental-unit rule; only local municipal building bye-laws and the lease apply. The text also says "the rules are clear", implying a national regulation that does not exist. |
| 15-9 | India has no household-register bar on rural housing; land is a state subject; agricultural land purchase is restricted in many states; Registration Act 1908 | Registration Act 1908; TPA 1882; state land-revenue law | s.17 | 2026-10-21 | yes | High-risk tip. The hukou no-equivalent statement is explicit and correct, and the state-subject framing is right. |
| 15-10 | RERA s.3 registration, s.4(2)(l)(D) 70% account, s.11 duties, s.19 allottee rights, s.18 remedy | RERA 2016 | ss.3, 4(2)(l)(D), 11, 18, 19 | 2026-10-21 | yes | Section mapping correct; quarterly updates and the three-professional withdrawal certificate are accurately described. |
| 15-11 | No automatic refund of a booking amount; it is a contractual deposit; forfeiture must be reasonable; RERA s.18 for a registered project | RERA 2016 s.18; Contract Act 1872 s.74 (reasonable compensation) | s.18 | 2026-10-21 | yes | Correct no-equivalent framing; the penalty/reasonable-compensation point reflects s.74 of the Contract Act. |
| 15-12 | Carpet area must be disclosed and stated in the agreement; RERA s.14 and s.31; CPA 2019 unfair trade practice; CCPA | RERA 2016 ss.14, 31; Consumer Protection Act 2019 | ss.14, 31 | 2026-10-21 | yes | Correct. The text correctly says India has no statutory area-error formula. Minor: the caveat cross-references "Chapter 15, Rule 13" and "Rule 18"; these are items, not rules. |
| 15-13 | RERA s.18 interest for delay or refund with interest; s.17 conveyance; s.31 complaint; state rules set the rate | RERA 2016 | ss.17, 18, 31 | 2026-10-21 | yes | Correct; the choice between interest and withdrawal is stated as s.18 provides. |
| 15-14 | India has no provisional registration; Registration Act s.17/s.49/s.50; TPA s.54; title passes on registration | Registration Act 1908; TPA 1882 | ss.17, 49, 50; s.54 | 2026-10-21 | yes | The no-provisional-registration statement is explicit and correct; the s.54 "one hundred rupees and upwards" threshold is the statutory text. |
| 15-15 | RBI external benchmark with fixed spread and periodic reset; no foreclosure charges on a floating-rate home loan | RBI external benchmark circular (4 Sept 2019, effective 1 Oct 2019); RBI Pre-payment Charges on Loans Directions, 2025 | External benchmark; prepayment | 2026-10-21 | yes | Instruments are real; the chapter cites no circular number, so there is nothing to mismatch. Minor: "spread fixed for the life of the loan" is the 2019 position, later softened to limited permitted spread changes — the caveat already tells the reader to check the reset clause. |
| 15-16 | EPF Scheme 1952 housing advance; PMAY credit-linked subsidy for an eligible first-time buyer; compare rate, fee, LTV, prepayment | EPFO (epfo.gov.in); PMAY (pmaymis.gov.in); NHB | EPF Scheme para 68-series; PMAY CLSS | 2026-10-21 | yes | High-risk tip. The EPF advance and PMAY CLSS are real. Note only: the CLSS window closed on 31 March 2021 for MIG and PMAY-U 2.0 (2024) is the current vehicle; the text does not date the subsidy, so it is not false, but naming the current scheme would age better. |
| 15-17 | Society cannot cut water or power for arrears; Electricity Act 2003 s.56 requires fifteen clear days' notice; CPA 2019 District Commission; Registrar of Cooperative Societies | Electricity Act 2003 s.56 (bare act); CPA 2019 | s.56 | 2026-10-21 | yes | The fifteen-clear-days notice is verbatim and the "dispute with the society is not a ground for disconnection" reasoning is right. |
| 15-18 | RERA s.14(3): rectify structural/workmanship defects within 30 days of notice, claim within five years of possession; s.18 compensation | RERA 2016 s.14(3) | s.14(3) | 2026-10-21 | yes | The five-year and thirty-day periods match the statute. |

## Banned-term check

- JSON: 0 banned terms (check-chapter.ts 15 PASS; no China/Chinese/mainland/RMB/yuan/
  hukou/yibao/dibao/CNY, no CJK, no NMPA/NHSA/SAMR/MOHRSS/CSCSE/CBIRC/NFRA/MIIT/SFDA/
  PRC/State Council/Supreme People/procuratorate/WeChat/Alipay).
- Rendered page: not built in this pass (build deliberately not run); the JSON is the
  only source of the rendered text. Note that the banned-term scan cannot catch 15-8,
  whose Chinese origin survives only as a rule statement with Indian-looking sources.

## Safety and editorial check

- No unsupported high-risk claim: 15-7, 15-9 and 15-16 are supported. 15-8 asserts a
  national rule that does not exist, which is the one unsupported claim of substance.
- No invented scheme, number or hotline: 15100 (NALSA), the Rent Authority, the state
  RERA and the District Consumer Commission all exist. No invented rupee threshold; the
  only rupee figures are the genuine s.54 TPA "one hundred rupees" threshold.
- No direct equivalent recorded where needed: 15-2, 15-3, 15-4, 15-9, 15-11, 15-12 and
  15-14 each state explicitly where India has no equivalent. 15-8 is the exception — it
  implies an equivalent that does not exist.
- Caveats retained: all 18 tips keep caveats; the limitation-period, state-law and
  registration caveats are intact.

## Blocking issues

- 15-8 (grade A): the tip states "By regulation, the smallest legal rental unit is the
  original room as built. Kitchens, bathrooms, balconies, and basement storage areas
  cannot be used for living" and "the rules are clear". This is the Chinese
  commercial-housing leasing rule (MOC Order No. 6, arts.8-9) presented as Indian
  regulation. India has no national minimum-rental-unit rule; only municipal building
  bye-laws, fire and safety rules, and the lease govern sub-division and habitable
  rooms. Correction: delete the "by regulation" claim and rewrite as "India has no
  national rule on the smallest rentable unit; local municipal building bye-laws and
  the lease decide, so check the sanctioned plan and the bye-laws before renting a
  subdivided flat", and remove MoHUA/RBI from the sources (keep or add the municipal
  bye-law reference) so that no Indian ministry appears to back a rule it never made.
  The rest of the tip (ventilation, safety, written inventory) can stay.

## Editorial notes (non-blocking)

- 15-6: title and source line are unchanged from the pre-rewrite text; the source line
  points to "the two articles about bride price and IOU in Section 8", which do not
  exist in the India edition. The legal content is sound; the cross-reference should be
  removed and the sources replaced with the Registration Act, 1908 and the state
  registration portal.
- 15-12 caveat: "Chapter 15, Rule 13" and "Rule 18" should read "item 13" and "item 18".
- 15-16: naming the current PMAY-U 2.0 (2024) subsidy instead of the closed 2021 CLSS
  window would avoid the text reading as if the old window were still open.

Verdict: FAIL
