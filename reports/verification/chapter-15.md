# Verification: Chapter 15 - Renting and Buying Housing

Verifier: independent-verifier-session-cbb8c456
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/15-renting-and-buying-housing.json
Manifest status: draft (recommend checked)
Round: 2, re-verification after the blocking fixes

## Method

Second pass on chapter 15. The one blocking finding from the first report (15-8 presenting
the Chinese minimum-rental-unit rule with MoHUA and RBI as sources) and the four editorial
findings were re-tested as regression cases; the other 17 tips were re-read in the built
JSON for anything new or obviously wrong, since the rewrite touched most of them.

As for chapter 13, two checks ran before the text check:

1. Build reproducibility. data/en-in/overrides/15.json was replayed against
   data/en/all-chapters.json with the same applyField, hotline and auto-adapt logic as
   scripts/build-india-chapter.ts, in memory only. Result: 18 tips, 0 field differences
   against the committed chapter JSON, 0 patches whose target text was missing. The
   committed file is exactly what the build produces from the overrides, so the fixes live
   in the override layer and survive a rebuild.
2. Fresh static check. `npx tsx scripts/check-chapter.ts 15` -> PASS, 18 tips, no banned
   term, CJK character or foreign-jurisdiction term (exit 0).

Fetches used for this chapter: 8 recorded attempts, of which 3 were blocked. The load
bearing fetches were prsindia.org (Model Tenancy Act), hprera.nic.in (RERA s.14(3) as
described by the official Haryana authority) and pmay-urban.gov.in (the live PMAY-U
structure).

Access failures, logged rather than worked around:

- indiacode.nic.in: HTTP 403 "Access Denied" (Akamai) on the RERA, Transfer of Property
  Act, Registration Act and Electricity Act texts, so those sections were read from
  bare-act reproductions and from the PRS Bill Track summary, which quote the same words.
- pib.gov.in PressReleasePage PRID=2147921: 403 (320-byte body). This is the release that
  would have confirmed the 2024 approval of PMAY-U 2.0 and the 31 March 2021 close of the
  old credit-linked subsidy window from an official source; the dates are therefore
  recorded below as text-only.
- pmay-urban.gov.in/pmay-u-2-0: 404. hudco.org.in CLSS-closure PDF: "unsupported content
  type application/pdf". mohua.gov.in PDFs: 403 in the earlier round.
- ftp.latestlaws.com: fetch failed. lawcodehub.com/bns/309: 404 (not needed here, logged
  for completeness).

## What the fixes say

- 15-8 (grade A). Title: "Don't rent a subdivided flat on trust: India has no national
  rule on the smallest rentable unit, so check the sanctioned plan, the municipal bye-laws
  and the lease". Plain words: "India has no national rule fixing the smallest rentable
  unit. What decides whether a flat may be divided, and which rooms may be slept in, is the
  local municipal building bye-laws, the sanctioned plan for that building, the fire-safety
  rules and your lease." Benefit: "No Union law says a kitchen, a bathroom or a balcony can
  never be lived in, and there is no national minimum floor area per tenant." Sources are
  the National Building Code of India 2016 Part 4, the Delhi Building Bye-Laws 2016
  (explicitly "an example of the state and municipal bye-laws"), and NALSA. MoHUA and RBI
  are gone from this tip, "MOC Order" returns 0 hits in the chapter, and the sentence
  claiming a national regulation ("the rules are clear") is gone.
- 15-6. Sources now Registration Act 1908 s.17, Transfer of Property Act 1882 ss.54-55 and
  NALSA. "Bride price" and "IOU" return 0 hits; the old source sentence about "the two
  articles about bride price and IOU in Section 8" is gone.
- 15-12. Caveat now ends "Delay in delivery is covered in Chapter 15, item 13; handover
  defects in item 18." The "Rule 13 / Rule 18" numbering is gone, and the two references
  land on the right tips: 15-13 is RERA s.18 delay and refund, 15-18 is s.14(3) handover
  defects.
- 15-16. Title: "compare a bank home loan, an EPF housing advance and the PMAY-U 2.0
  interest subsidy". Plain words: "the earlier credit-linked subsidy scheme under PMAY-U
  closed on 31 March 2021, and PMAY-U 2.0, approved in 2024, is the scheme now on offer";
  the caveat repeats "do not rely on a builder's brochure that still quotes the closed
  credit-linked subsidy". Nothing presents the closed CLSS as live.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 15-8 | India has no national rule on the smallest rentable unit or a minimum floor area per tenant; local building bye-laws, the sanctioned plan, fire-safety rules and the lease decide; a subdivision after sanction is unauthorised construction | No Union instrument states such a rule; the claim is stated as an absence, and the tip points to municipal law | text only (negative claim) | 2026-10-21, text | yes | The claim is now the correct negative one, and it matches the first report's finding. A negative cannot be proved by fetch; what was verified is that the tip no longer attributes any rule to MoHUA, RBI or a central order, and that its sources are the model code and an example bye-law. |
| 15-8 | National Building Code of India 2016 Part 4 governs fire and life safety, including exits and means of escape | BIS National Building Code, as cited (bis.gov.in) | Part 4 | 2026-10-21, text | yes | Correct part number and scope for a standard that is cited, not enforced as statute; the tip says so ("the state fire rules and the National Building Code ... govern exits"). |
| 15-6 | Title search at the sub-registrar where the deed is registered; encumbrance certificate; pay by bank transfer with a purpose note | Registration Act 1908 s.17; TPA 1882 ss.54-55; NALSA, as now cited | s.17; ss.54, 55 | 2026-10-21, text | yes | The dead cross-reference is gone. The registration and transfer provisions are the right ones for a title check; the practical advice (encumbrance certificate, written authority, subletting consent, society NOC) is sound and local. |
| 15-1 | Model Tenancy Act 2021 caps a residential security deposit at two months' rent and six months for non-residential; Rent Authority, Rent Court, Rent Tribunal; model law, states must adopt | Model Tenancy Act 2021, prsindia.org/billtrack/the-model-tenancy-act-2021 | Deposit cap; three-tier authorities | 2026-10-21, fetch | yes | Caps and structure match; the tip correctly says it applies only where a state has adopted it. |
| 15-12 | RERA requires the carpet area to be disclosed and stated in the agreement; s.31 complaint; s.14 completion per sanctioned plans; CPA 2019 unfair trade practice | RERA 2016 ss.14, 31; Consumer Protection Act 2019 | ss.14, 31 | 2026-10-21, text | yes | Section numbers correct; the tip is careful to say India has no statutory area-error formula, which is right. |
| 15-16 | The CLSS window closed on 31 March 2021 and PMAY-U 2.0, approved in 2024, is the scheme now on offer; EPF Scheme 1952 allows a housing advance | pmay-urban.gov.in (official portal) | PMAY-U 2.0 sections; CLSS notice | 2026-10-21, fetch | yes with a date caveat | The portal's own menu carries "PMAY-U 2.0 CSMC Minutes" and "PMAY-U 2.0 Sanction/Release Orders", and a notice there reads: "Letter Dated 17th August, 2022 : Union Cabinet has approved continuation of Pradhan Mantri Awas Yojana-Urban (PMAY-U) upto 31st December, 2024 with all the verticals, except Credit Linked Subsidy Scheme (CLSS) vertical". So 2.0 is live and CLSS is closed, as the tip says. The exact dates "31 March 2021" and "approved in 2024" are not confirmed by a fetched official page (PIB release 403, /pmay-u-2-0 404); they are supported by the chapter's text and the portal's structure only. |
| 15-16 | EPF Scheme 1952 housing advance exists, with service and cost conditions | EPF Scheme 1952, as printed (epfo.gov.in) | para 68-series | 2026-10-21, text | yes | Not re-fetched this round; the scheme and its advance are real and the tip adds no figure that could be wrong. |
| 15-18 | RERA s.14(3): defects notified within five years of possession must be rectified within thirty days, else compensation | RERA s.14(3) as summarised by the official Haryana RERA, hprera.nic.in/Home/FAQs | s.14(3) | 2026-10-21, fetch (state authority) | yes | "Within five years from the date of handing over possession ... rectify ... within thirty days ... appropriate compensation" matches the tip. |
| 15-2 | India has no single national statute on eviction; where the MTA applies the landlord needs notice and an order; self-help eviction is not lawful; call 112 and record everything | Model Tenancy Act 2021; BNS 2023 trespass, mischief and wrongful restraint; built JSON grep for 112 | MTA possession provisions; BNS | 2026-10-21, fetch and text | yes | No-equivalent statement explicit and correct; 112 appears four times in the chapter, all here, and no other hotline survives. |
| 15-3, 15-4 | Agents are not a party to the lease and may receive rent with written authority; India has no supervised rental escrow, and the RBI prepaid-instrument rules do not cover a landlord's rent | text of the tips; RBI prepaid instrument framework | Prepaid Payment Instruments | 2026-10-21, text | yes | Both are correctly framed as absences, and neither invents a supervisory regime. |
| 15-5, 15-14 | TPA ss.105-106; registration under s.17(1)(d) and the effect of non-registration under s.49; title passes on registration; India has no provisional registration; s.54's "one hundred rupees and upwards" threshold | TPA 1882; Registration Act 1908, as cited | ss.105, 106; 17(1)(d), 49, 50; s.54 | 2026-10-21, text | yes | Section numbers and the s.54 threshold are correct. The no-provisional-registration statement is explicit. |
| 15-7, 15-10, 15-13 | RERA s.4(2)(l)(D) 70% separate account; s.3 registration; s.11 duties; s.19 allottee rights; s.18 interest or refund with interest; s.17 conveyance | RERA 2016, as cited | ss.3, 4(2)(l)(D), 11, 17, 18, 19, 31 | 2026-10-21, text | yes | Mapping correct; the tips note there is no escrow for a resale and no fixed national interest rate, both right. |
| 15-9 | No household-register bar on rural housing in India; land and land revenue are state subjects; agricultural land purchase is restricted in many states | text; the Constitution's state-subject allocation as reflected in state land-revenue law | text only | 2026-10-21, text | yes | No-equivalent statement explicit; the state-subject framing is correct. |
| 15-11 | A booking amount is a contractual deposit, not automatically refundable; forfeiture must be reasonable (Contract Act s.74); RERA s.18 for a registered project | Contract Act 1872 s.74; RERA 2016 s.18 | s.74; s.18 | 2026-10-21, text | yes | The reasonable-compensation point is the right one. |
| 15-15 | RBI external benchmark with a fixed spread and periodic reset; no foreclosure charges on a floating-rate home loan | RBI external-benchmark circular (4 Sept 2019, effective 1 Oct 2019); RBI prepayment directions, as described | External benchmark; prepayment | 2026-10-21, text | yes | Instruments real and no circular number is quoted, so nothing can mismatch; the caveat tells the reader to read the reset clause, which covers the later relaxation on spread changes. |
| 15-17 | A society cannot cut water or power for arrears; Electricity Act 2003 s.56 requires fifteen clear days' written notice; District Consumer Commission under CPA 2019 | Electricity Act 2003 s.56, bare act | s.56 | 2026-10-21, text | yes | The fifteen-clear-days formula is verbatim. |

## Banned-term check

- `npx tsx scripts/check-chapter.ts 15` -> PASS (18 tips, exit 0), run fresh this round.
- Independent grep of the built JSON: 0 hits for China / Chinese / mainland / RMB / yuan /
  CNY / hukou / yibao / dibao / MOC / Jianfanggui, 0 CJK, 0 hits for "Article N", 0 hits for
  "bride price", and 0 hits for the old hotlines 120, 101, 110 and 108.
- The checker cannot catch the fault this chapter was failed for: 15-8 contained no banned
  term, only a Chinese rule dressed in Indian sources. That was found by comparing the
  claim with Indian instruments, not by the term list, which is why the claim table above
  records the absence of the rule explicitly.

## Safety and editorial check

- No unsupported high-risk claim remains: 15-7, 15-9, 15-15 and 15-16 all state their
  limits, and 15-16 now dates the subsidy scheme instead of implying a live CLSS.
- No invented scheme, number or hotline: 15100 (NALSA), Rent Authority, state RERA,
  District Consumer Commission, PMAY-U 2.0 and the EPF advance all exist. The only rupee
  figures are genuine statutory thresholds (s.54 TPA "one hundred rupees and upwards").
- No direct equivalent silently implied: 15-2, 15-3, 15-4, 15-8, 15-9, 15-11, 15-12 and
  15-14 each state where India has no equivalent. 15-8 is now one of them rather than the
  exception.
- Caveats retained: all 18 tips keep caveats; limitation, state-law and registration
  caveats intact.

## Blocking issues

None. The blocker from the first report is cleared in the built JSON and in the override
layer that produces it: 15-8 no longer states a national minimum-rental-unit rule, claims
no Indian ministry made one, and rests on municipal bye-laws, the sanctioned plan and the
lease.

## Editorial notes (non-blocking)

- Cross-reference wording, same artefact as chapter 13: 15-14 caveat says "Chapter 15,
  Rule 6" and 15-18 caveat says "Chapter 15, Rule 13", where these are items. 15-12 is
  fixed. Suggest one sweep of "Rule" -> "Item" in cross-references across the edition.
- 15-16: the two dates (CLSS closed 31 March 2021; PMAY-U 2.0 approved 2024) could not be
  confirmed against an official release because pib.gov.in returns 403 to this session. The
  chapter's substance is right and the portal confirms CLSS is closed and 2.0 is running;
  if a citation is wanted, a reachable official page or the PMAY-U 2.0 operational
  guidelines would close the gap.

Verdict: PASS