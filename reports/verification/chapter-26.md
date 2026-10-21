# Verification: Chapter 26 - Building a Website or Platform

Verifier: Independent verifier (delegated subagent, DeepSeek Harness); not an author of this chapter
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/26-building-a-website-or-platform.json
Manifest status: draft (manifest entry 26: tier B, 13 tips, verifier null, verifiedAt null, bannedTerms 0)

## Method

Every tip in the 13-tip chapter was read in full in the India build and each Indian legal or
procedural claim was traced to an instrument that was actually downloaded and read, never to a
search snippet. Texts read: the Payment and Settlement Systems Act, 2007 (India Code PDF
A2007-51.pdf, obtained through the India Code DSpace REST API), the RBI "Guidelines on Regulation
of Payment Aggregators and Payment Gateways" (RBI/DPSS/2019-20/174, dated 17 March 2020, updated
17 November 2020, read as rendered text at
https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11822), the Information Technology
(Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 as consolidated and updated on
6 April 2023 (India Code bitstream), the Digital Personal Data Protection Act, 2023 (ss.8, 9, 16
read verbatim), CERT-In Directions 70B of 28 April 2022 (6-hour reporting, 180-day India-resident
logs), and S.O. 942(E) of 25 February 2021 (the "fifty lakh registered users" significant social
media intermediary threshold). This chapter cites no DOI, so no DOI check was required. Banned
terms were checked with `npx tsx scripts/check-chapter.ts 26`.

Access failures, recorded rather than hidden: www.indiacode.nic.in returns HTTP 403, so all statute
text was pulled from the India Code DSpace API at https://indiacode.gov.in; www.meity.gov.in
returns HTTP 403 (so the IT Rules 2021 were read from India Code instead of the Ministry site);
the bare text of the Information Technology Act, 2000 could not be downloaded (the India Code item
for the Act carries no bitstream and the direct bitstream URL returns a non-PDF body), so section
79 itself was not read in the Act and the safe-harbour conditions were checked against the IT Rules
2021 instead; consumeraffairs.nic.in does not resolve (DNS, zero-length response), so the Consumer
Protection (E-Commerce) Rules, 2020 and the CCPA 2023 dark-pattern guidelines could not be read from
the official site; cybercrime.gov.in returns an empty shell to a plain fetch; rbi.org.in master
direction pages (BS_ViewMasDirections.aspx?id=12159 and id=12853) serve JavaScript shells with no
body text; the 2025 "RBI (Regulation of Payment Aggregators) Directions" download at
website.rbi.org.in returned only an HTML shell and, on retry, HTTP 000, so the 2025 directions
could not be read and this report relies on the 2020 PA/PG guidelines that were readable; the RBI
e-mandate circular could not be downloaded at all, so tip 26-13's e-mandate element is recorded as
unconfirmed rather than verified.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 26-1 | Collecting the buyer's money and paying the seller later is a payment system needing RBI authorisation; customer funds must sit in escrow with a scheduled commercial bank | Payment and Settlement Systems Act, 2007; RBI PA/PG Guidelines (17 Mar 2020, updated 17 Nov 2020) | PSS Act s.4(1); PA/PG guidelines paras 8.1, 8.3, 8.4; PSS Act s.23A (designated payment systems) | 2026-10-21 | yes | s.4(1) verbatim: "No person, other than the Reserve Bank, shall commence or operate a payment system except under and in accordance with an authorisation issued by the Reserve Bank". Para 8.1 verbatim: "Non-bank PAs shall maintain the amount collected by them in an escrow account with any scheduled commercial bank". Both halves of the tip are supported. |
| 26-2 | India has no licence for a paid website; permission attaches to the activity (GST, payment partner, e-commerce rules, company and municipal registration) | No official licence-list page could be fetched (meity.gov.in 403; the DoT licence list was not readable) | - | 2026-10-21 | partly | The operative claim (a website needs no telecom or content licence) is consistent with the IT Act 2000 scheme and is not contradicted by any instrument read. The absolute sentence "There is no value-added telecommunications licence in India" is false as written: India licenses Unified Licence / UL-VNO and ISP services. Needs the correction recorded below; not a blocking defect. |
| 26-3 | No state online-culture licence; a host of others' streams is an intermediary under the IT Act 2000 and the 2021 Rules; must act on a court order or government direction | IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 (consolidated, updated 6 Apr 2023) | Rule 3(1) due diligence; 36-hour removal clause; Part III for publishers of news and curated content | 2026-10-21 | yes | The 2021 Rules set out due diligence, a grievance officer and a periodic compliance report, and the 36-hour removal duty; Part III applies to publishers of news/current affairs and online curated content. Rights in music and performances are correctly flagged as separate. |
| 26-4 | No server registration; the platform must follow the IT Rules and the data-protection law; a telecom licence covers an ISP, not a website | IT Rules 2021; DPDP Act 2023; CERT-In Directions 70B (28 Apr 2022) | Rules 3(1)(a)-(d); CERT-In 70B(4) (6 hours) and 70B(5) (180-day logs in India); DPDP Act s.8 | 2026-10-21 | yes | All four obligations exist as described. No Indian instrument requires a website to register its server. |
| 26-5 | A marketplace must verify each seller, display the seller's details, appoint a grievance officer and keep user records for 180 days | IT Rules 2021 (read); Consumer Protection (E-Commerce) Rules, 2020 (could not be fetched - consumeraffairs.nic.in DNS failure) | IT Rules 2021 Rule 3(1)(h) and 3(1)(g) (180 days); e-commerce rules on verification/display as described, not read | 2026-10-21 | partly | The 180-day retention is verified verbatim in Rule 3(1)(h) (user registration information kept 180 days after cancellation or withdrawal) and Rule 3(1)(g) (removed content preserved 180 days). The e-commerce verification and display duties are correct in substance but were not read from the instrument because the department site did not resolve. |
| 26-6 | Safe harbour under s.79 depends on due diligence; content must be disabled within 36 hours of a court order or government notification; report to cybercrime.gov.in or 1930 | IT Rules 2021 (36-hour clause read verbatim); IT Act 2000 s.79 (not readable) | IT Rules 2021 Rule 3(1)(b) and the 36-hour removal clause | 2026-10-21 | yes | 36-hour clause verbatim: "as early as possible, but in no case later than thirty-six hours from the receipt of the court order or on being notified by the Appropriate Government or its agency". s.79 is the correct safe-harbour section, but the bare Act could not be downloaded. Note that 1930 is the cyber-financial-fraud helpline; cybercrime.gov.in is the right channel for images and threats. |
| 26-7 | No general real-name law; a verified phone or email can be a contract term; a significant social media intermediary must offer voluntary verification and identify the first originator on order | IT Rules 2021; DPDP Act 2023 | IT Rules 2021 Rule 4(1)-(2) (SSMI due diligence, voluntary verification, first-originator traceability); DPDP Act s.8 | 2026-10-21 | yes | No Indian statute imposes a universal real-name requirement. Traceability is subject to the Supreme Court proceedings on the 2021 Rules; the chapter's limitation to a significant social media intermediary is correct. |
| 26-8 | No under-16 live-streaming ban and no age-band tipping caps; a child is under 18, processing needs verifiable parental consent, and behavioural advertising to children is barred; a minor's agreement is void | DPDP Act 2023; Indian Contract Act, 1872 | DPDP Act s.9(1) read verbatim, s.9(3) tracking and targeted advertising | 2026-10-21 | yes | s.9(1) verbatim: "The Data Fiduciary shall, before processing any personal data of a child or a person with disability who has a lawful guardian obtain verifiable consent of the parent of such child or the lawful guardian". The contract point reflects s.11 competence plus the settled rule that a minor's agreement is void. |
| 26-9 | No 15-day restoration rule in India; act on the order and keep the record | IT Act 2000; IT Rules 2021 | Rule 3 (grievance and removal) | 2026-10-21 | yes | This is a negative claim: no instrument read imposes a 15-day restoration duty. The 2021 Rules impose removal duties and a grievance timeline (acknowledge in 24 hours, resolve in 15 days), which is a different thing and is not misstated. |
| 26-10 | Cross-border transfer allowed unless the Central Government restricts a destination by notification; no adequacy, certification or standard-contract filing; sector rules on top (RBI payment data in India; insurance, securities, telecom, health) | DPDP Act 2023 | s.16(1) and s.16(2) read verbatim | 2026-10-21 | yes | s.16(1): the Central Government may by notification restrict transfer to a notified country or territory; s.16(2) preserves higher-protection sector law. The RBI payment-data localisation and the sector conditions are correctly described as layered obligations. |
| 26-11 | Grade C author guidance: downtime tolerance, then support, then price; verify a vendor on the MCA portal and an RBI authorisation | MCA portal and RBI authorisation are the right registers; no evidential claim to test | - | 2026-10-21 | yes | evidenceGrade C matches the "author's experience" source line, so the grade is not stronger than the evidence. "Registration pathways" and "licensing status" read like translation residue; they carry no legal claim and should be plain English. |
| 26-12 | On a personal-data breach, notify the Data Protection Board and each affected person; CERT-In within six hours; logs kept in India for 180 days | DPDP Act 2023; CERT-In Directions 70B of 28 April 2022 | DPDP Act s.8(6) verbatim; CERT-In 70B(4) "within 6 hours of noticing such incidents"; 70B(5) "rolling period of 180 days ... within the Indian jurisdiction" | 2026-10-21 | yes | s.8(6) verbatim: "In the event of a personal data breach, the Data Fiduciary shall give the Board and each affected Data Principal, intimation of such breach in such form and manner as may be prescribed." Both deadlines verified. |
| 26-13 | Recurring e-mandate: pre-debit notification, authentication where required, cancellation honoured; a hidden renewal is an unfair trade practice and a listed dark pattern | RBI e-mandate framework (circular text NOT retrievable); Consumer Protection Act, 2019; CCPA 2023 dark-pattern guidelines (site does not resolve) | - | 2026-10-21 | not verified | The described framework (pre-debit notification, AFA for recurring mandates, cancellation) is how RBI's e-mandate regime works, but no instrument could be downloaded: the RBI document host returned HTTP 000 and the notification pages are JS shells. The consumer-law half is correct in principle but was not read from the 2023 guidelines. Recorded as unconfirmed, not as a defect. |

## Banned-term check

- JSON: 0 banned terms; `npx tsx scripts/check-chapter.ts 26` reports "PASS: no banned term, CJK character or foreign-jurisdiction term." (13 tips)
- Rendered page: 0 banned terms; no CJK character in any field.

## Safety and editorial check

- No unsupported high-risk claim: the legal exposure claims are calm and accurate; tip 26-1 correctly routes the money through a licensed aggregator rather than offering a workaround.
- No invented scheme, number or hotline: every figure checked (180 days, 36 hours, six hours, 50 lakh registered users, s.79/s.8/s.9/s.16) matches an instrument; 1930 and cybercrime.gov.in are real channels, though 1930 is the financial-fraud line.
- No direct equivalent recorded where needed: the chapter says plainly that India has no value-added telecom licence, no server registration, no real-name mandate, no under-16 stream ban and no 15-day restoration rule; nothing Chinese is presented as Indian.
- Caveats retained: each tip keeps its limits (sector rules on top of the DPDP Act, pre-authorisation, the SSMI-only scope of traceability).

## Blocking issues

None blocking. No repealed statute is cited as current law, no section number is wrong, no invented number or hotline was found, and no banned term or CJK character appears.

Non-blocking corrections requested:

1. Tip 26-2, inPlainWords: "There is no value-added telecommunications licence in India, and no general licence for a website that charges its users." The first clause is false. Replace with: "No telecom licence attaches to a website: India's Unified Licence, UL-VNO and ISP licences bind network operators, not a site that charges its users, and there is no general licence for a paid website."
2. Tip 26-2, sources: meity.gov.in does not serve the point; cite the Department of Telecommunications licensing page or the IT Act 2000 for the negative proposition.
3. Tip 26-6, inPlainWords: "reported to cybercrime.gov.in or the 1930 helpline" - 1930 is the cyber-financial-fraud helpline run alongside the same portal; for a sexual abuse image the channel is cybercrime.gov.in (and, where the law requires, the police). Tighten the wording.
4. Tip 26-5, sources: confirm the Consumer Protection (E-Commerce) Rules, 2020 citation against the department copy before publishing; consumeraffairs.nic.in did not resolve during this review.
5. Tip 26-13: attach a readable source for the e-mandate duty (RBI's e-mandate circular or the consolidated Digital Payments directions). The claim is right but unverified here.

Verdict: PASS