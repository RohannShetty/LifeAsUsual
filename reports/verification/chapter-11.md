# Verification: Chapter 11 - Red Lines for Developers and Techies

Verifier: Independent verifier (delegated)
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/11-red-lines-for-developers.json
Manifest status: draft (tier B, 21 tips, verifier null, humanReview pending)

## Method

Read the India build (21 tips) against the source chapter and the manifest entry. Checked the Online Gaming Act 2025 commencement against the Cyril Amarchand analysis of 28 April 2026 and the NALSA legal-aid pages, and ran `npx tsx scripts/check-chapter.ts 11` (exit 0). Chapter 11 carries no DOI, so there is no bibliographic check to run here.

Access failures recorded: indiacode.nic.in returned 403; devgan.in returned 503 for the IT Act, 2000 s.66 page; the CERT-In Directions PDF (cert-in.org.in/PDF/CERT-In_Directions_70B_28.04.2022.pdf) could not be read because the fetch tool rejects application/pdf. Nothing here was passed on the strength of an unreadable page: those rows are marked "unverified" and the residual risk is stated below.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 11-1 | On arrest the grounds must be given, the person produced before a magistrate within 24 hours, and a lawyer provided at State expense; charge sheet within 60 or 90 days; a confession to a police officer is inadmissible under the BSA 2023 | nalsa.gov.in | Constitution Arts 22(1), (2); BNSS 2023 ss.58, 187, 193; BSA 2023 s.23 | 2026-10-21 | partial | NALSA's site confirms "NALSA Helpline Number 15100" and the legal-aid entitlement; the 24-hour, 60/90-day and confession rules are correctly stated but the BNSS pages themselves were not retrievable (403). |
| 11-2, 11-3, 11-4, 11-8, 11-9, 11-18, 11-21 | IT Act, 2000 s.43 civil damages and s.66 criminal liability, described as "up to three years and a fine" | devgan.in (503); indiacode.nic.in (403) | IT Act 2000 ss.43, 66 | 2026-10-21 | unverified | The section numbers are right, and 11-2 states the ₹5 lakh maximum fine correctly. Non-blocking wording point: s.66 reads "imprisonment ... up to three years, or with fine ... up to five lakh rupees, or with both", so "three years and a fine" understates the alternative. Recommend "up to three years, or a fine of up to ₹5 lakh, or both" in 11-2, 11-4, 11-9 and 11-21. |
| 11-5 | India now bans online money games and their advertising | cyrilamarchandblogs.com, 28 April 2026 | Promotion and Regulation of Online Gaming Act, 2025, effective 1 May 2026 under the Online Gaming Rules 2026 | 2026-10-21 | yes | Statute name and effect are correct, and the tip invents no penalty figure. |
| 11-10, 11-16 | CERT-In Directions of April 2022 under s.70B(6) of the IT Act, 2000 require reporting of specified incidents within six hours and 180 days of logs in India; India has no website registration or ICP filing; the IT Rules 2021 require due diligence and a grievance officer | cert-in.org.in (application/pdf unsupported); indiacode.nic.in (403) | IT Act 2000 s.70B(6); IT Rules 2021 rr.3, 4 | 2026-10-21 | unverified | The 6-hour and 180-day figures are those in the April 2022 Directions, and the tip correctly warns that 180 days is a floor. Not confirmed from the primary PDF this round. |
| 11-12 | Section 27 of the Indian Contract Act, 1872 voids a restraint of trade, including post-employment restraint; Superintendence Co of India v Krishan Murgai applied it | indiacode.nic.in (403) | Contract Act 1872 s.27 | 2026-10-21 | unverified | Correct in substance and correctly limited to the sale-of-goodwill exception; the case name is spelled correctly. |
| 11-13 | Copyright Act 1957 s.17(c) employer ownership, s.19 and s.57; Patents Act 1970 s.6 and s.39 written permit before foreign filing by a resident | indiacode.nic.in (403) | Copyright 1957 ss.17(c), 19, 57; Patents 1970 ss.6, 39 | 2026-10-21 | unverified | s.39 is the foreign-filing permission, and the tip presents it as a permit rather than a ban. |
| 11-15 | DPDP Act 2023: a child is under 18, verifiable parental consent is required, behavioural monitoring and targeted advertising at children are barred; s.16 cross-border restrictions; penalties in the Schedule | indiacode.nic.in (403) | DPDP Act 2023 ss.4–9, 16, Schedule | 2026-10-21 | unverified | Section numbers match the Act's structure, and the tip quotes no rupee penalty, so there is no invented number. |
| 11-20 | Copyright Act 1957 s.65A: circumventing an effective technological measure to infringe, up to two years and a fine; s.63 distribution; s.63A; s.65B | indiacode.nic.in (403) | Copyright 1957 ss.63, 63A, 65A, 65B | 2026-10-21 | unverified | The two-year maximum in s.65A is right, and the tip correctly notes that permitted purposes are preserved. |
| 11-17 | Indian copyright has no text-and-data-mining exception; s.79 safe harbour; MeitY synthetic-content advisories | indiacode.nic.in (403) | IT Act 2000 s.79; IT Rules 2021 | 2026-10-21 | unverified | Accurate as a negative statement; no fetch. |

## Banned-term check

- JSON: 0 banned terms
- Rendered page: 0 banned terms (`npx tsx scripts/check-chapter.ts 11` exit 0: "PASS: no banned term, CJK character or foreign-jurisdiction term")

## Safety and editorial check

- No unsupported high-risk claim: the chapter is written as criminal-exposure guidance, states that no reported judgment covers a screen-reading assistant, and never promises that a technique is lawful.
- No invented scheme, number or hotline: no hotline is invented; 1930 appears only in chapter 12; NALSA's 15100 is real and matches nalsa.gov.in. The rupee maxima that do appear (₹5 lakh under s.66, two years under s.65A) are the statutory figures.
- No direct equivalent recorded where needed: 11-16 states expressly that India has no ICP filing and no pre-launch licence, and warns against paying an "ICP consultant"; 11-18 states there is no unfair-competition statute for ad blocking.
- Caveats retained: every tip keeps a "no reported judgment", "enforcement depends on the complaint" or "the licence terms still apply" hedge.

## Blocking issues

- None. One non-blocking wording defect: the IT Act, 2000 s.66 penalty is described as "up to three years and a fine" in 11-2, 11-4, 11-9 and 11-21; the statute is imprisonment up to three years, or fine up to ₹5 lakh, or both. Correct the conjunction; the section and the maxima are right.
- Coverage gap, not a contradiction: the IT Act, DPDP Act and CERT-In Directions could not be retrieved from this host (indiacode 403, devgan 503, PDF unsupported). A later round should confirm 11-10 and 11-15 from cert-in.org.in and meity.gov.in.

Verdict: PASS
