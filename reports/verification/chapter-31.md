# Verification: Chapter 31 - Paths After Eighteen

Verifier: independent verifier, subagent of session-cbb8c456-d1d0-47f5-b30f-11f4d6163239
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/31-paths-after-eighteen.json
Manifest status: draft
Pass type: targeted re-verification of the two corrections that blocked the previous round (not a fresh full audit)

## Scope of this pass

The previous full audit ended in FAIL on two items: (h) 31-15 cited "section 6(1A)" for deemed residence - the numbering of the repealed Income-tax Act 1961 - fused the visiting-citizen 120-day rule with the deemed-resident rule, and said "financial year" where the 2025 Act says "tax year"; (i) 31-2 said women have been admitted to the National Defence Academy "since 2021", when the Supreme Court order was August 2021 but the first women cadets joined in 2022. A fixer has since edited the shipped JSON. This pass confirms both corrections in the built file, re-reads the provisions they rest on, and checks the file for surviving traces of the old wording. The other fifteen tips were not re-audited; their previous findings are carried forward as notes.

## Method

I read the corrections in the shipped file, data/en-in/chapters/31-paths-after-eighteen.json (17 tips, manifest status draft), not in any override copy, and searched the file for "6(1A)", "since 2021" and "financial year": no match survives.

Evidence read this session:

- Income-tax Act, 2025, section 6 - a practitioner's section-by-section note that quotes the sub-sections, https://cajatinkarda.in/articles/nri-property-tax-part-1 (HTTP 200). It sets out s.6(2)(a) (182 days), s.6(2)(b) (60 days plus 365 in the four preceding tax years), s.6(3) (citizen leaving India for employment abroad or as crew of an Indian ship), the 120-day variation for a citizen or person of Indian origin above the fifteen-lakh threshold, and s.6(7) (deemed resident).
- A conference presentation whose summary line reads "Section 6(7) of ITA 2025 corresponds with section 6(1A) of ITA 1961" (odishataxadvocates.in PDF; the PDF body is not fetchable, the indexed summary is what confirms the mapping).
- National Defence Academy, women's entry: en.wikipedia.org (raw wikitext, HTTP 200) - "The Supreme Court of India passed an order in August 2021 that allowed female candidates to appear for all upcoming NDA entrance examination", and the 148th course passed out on 30 May 2025 with 17 female cadets, "the first time for female cadets graduating from the National Defence Academy"; theprint.in, https://theprint.in/defence/first-batch-of-19-women-cadets-join-nda-set-to-begin-training-this-week/1074554/ (HTTP 200), whose embedded publication date is 2022-08-08, headline "First batch of 19 women cadets join NDA, set to begin training this week".

I then ran `npx tsx scripts/check-chapter.ts 31`: exit 0, "chapter 31 (31-paths-after-eighteen.json): 17 tips / PASS: no banned term, CJK character or foreign-jurisdiction term."

## Corrections checked

| Item | Correction previously required | What the built JSON now says | How verified | Result |
| --- | --- | --- | --- | --- |
| (h) 31-15 | Cite s.6(7) of the Income-tax Act 2025, not s.6(1A) of the 1961 Act; separate the 120-day visiting-citizen rule from the deemed-resident rule; say "tax year" | Plain words, line 377: "Under the residence test in the Income-tax Act, 2025, which replaced the 1961 Act on 1 April 2026 and renumbered its sections, you are resident if you are in India for 182 days or more in the tax year, or for 60 days in the year and 365 days in the four preceding years (the 60-day test does not apply to a citizen who leaves India for employment abroad or as a member of the crew of an Indian ship), and a citizen who is not liable to tax in any other country and whose income other than foreign sources is above fifteen lakh rupees is deemed resident under section 6(7); a visiting citizen or person of Indian origin above that threshold uses 120 days instead of 60." | Fetch: s.6(7) is the deemed-resident provision ("An Indian citizen who is not liable to tax in any other country ... AND whose Indian income exceeds 15 lakh (excluding foreign-sourced income) shall be deemed Resident"), and the mapping to the old s.6(1A) is confirmed; s.6(2)(a) and 6(2)(b) give the 182-day and 60-plus-365 tests, s.6(3) the employment/crew carve-out, and the 120-day figure is the separate citizen/PIO variation | fixed |
| (i) 31-2 | Say women have been admitted to the NDA since 2022, with the Supreme Court order of August 2021 opening the examination | Plain words, line 52: "Women have been admitted to the National Defence Academy since 2022 (the Supreme Court's August 2021 order opened the examination to them)." | Fetch: ThePrint's report of the first batch of 19 women cadets joining the NDA is dated 2022-08-08; Wikipedia records the August 2021 order and the first female graduation on 30 May 2025 (148th course) | fixed |

## The section 6 point in detail

The corrected sentence now keeps three things apart that the previous text ran together. First, ordinary residence: 182 days in the tax year, or 60 days in the year plus 365 in the four preceding years. Second, the carve-out: that 60-day limb is not applied to a citizen who leaves India for employment abroad or as crew of an Indian ship. Third, deemed residence: a citizen who is not liable to tax in any other country and whose income other than foreign sources exceeds fifteen lakh rupees is deemed resident under section 6(7). The visiting citizen or person of Indian origin rule is then stated as its own variation - 120 days instead of 60 - which is where it belongs, because it changes the day count for a class of visitor rather than creating a deemed resident. The citation is now to the 2025 Act's own numbering, and "tax year" is the 2025 Act's term.

Two limits of this verification should be stated. The section text was read through a practitioner note that quotes it, because incometax.gov.in returns HTTP 200 on its front page but exposes no fetchable statute text and its document references returned 403 in the previous round; the official gazette text of the 2025 Act was not read in this session. And the 120-day variation is described, not cited by sub-section, in the chapter - so there is no risk of the chapter carrying a wrong sub-section number for it, but the description itself was checked only against the secondary sources above.

## The NDA date in detail

"Since 2022" is the correct formulation. The Supreme Court's order opening the NDA examination to women candidates was passed in August 2021, which is what the parenthetical says; the first cohort of 19 women cadets joined the academy in 2022, which is what the main clause says. The two facts are consistent, and the sentence no longer implies that women were cadets in 2021. The academy's first female graduates passed out on 30 May 2025 after the three-year course, which corroborates a 2022 entry.

## Confirmed by text only

- The rest of 31-15 is unchanged: the worldwide-income consequence, the absence of an Indian withholding obligation on a foreign employer, advance tax by instalment, the foreign inward remittance certificate and the FEMA current-account treatment. None of those depends on the corrected sub-section.
- 31-15's caveat still says "Grade A on the statutory tests ..." and the tip's evidenceGrade is A.
- 31-2's caveat still opens "Grade A because the absence of conscription is a matter of statute and practice ..." and the tip's grade is A; every caveat in the chapter that states a grade matches its own badge (checked across all 17 tips).
- 31-2's sources field was not changed and still lists UPSC, the three service recruitment portals, the Coast Guard and the Ministry of Defence; that is adequate for a statement about entry routes.

## Access failures

- pib.gov.in returns HTTP 403 (Akamai "Access Denied") - including the NDA women's-recruitment release (PRID=1941369) attempted this pass, so the NDA facts rest on ThePrint and Wikipedia rather than a government release.
- indiacode.nic.in returns HTTP 403 on every handle and bitstream, so the Army Act 1950, Navy Act 1957 and Air Force Act 1950 are checked for name, year and effect only, not quoted.
- labour.gov.in returns HTTP 403.
- incometax.gov.in: front page HTTP 200, no fetchable statute text; the section-document references returned 403 in the previous round ("Reference#18.95f43717").
- incometaxindia.gov.in/w/section-6-253 returned 403 in the previous round; morth.nic.in fails with a fetch TypeError; bprd.mha.gov.in returns "unsupported content type application/pdf", so no PDF can be read through the fetch tool.

## Notes carried forward (non-blocking)

- 31-15, caveat (JSON line 381): the sentence "the deemed-residency rule for an Indian citizen not liable to tax in any other country whose income above fifteen lakh rupees is deemed resident in section 6(7)" is grammatically tangled. The citation and the substance are right, so this is an editorial note, not a blocking item; a rewrite along the lines of "the deemed-resident rule in section 6(7), for a citizen not liable to tax elsewhere whose income other than foreign sources is above fifteen lakh rupees" would read cleanly.
- 31-1, 31-9: the NDA and CDS age bands, the unmarried condition and the Coast Guard's direct Navik entry were checked against recruitment notifications in the previous audit and are unchanged.
- 31-4: Seva Nidhi, the four-year term and the NSP, Vidya Lakshmi and PM Vidyalaxmi routes are correct; the paramilitary and state-police reservation is stated without a percentage, which is the honest formulation, because the PIB releases that would fix the share are unreadable (403).
- 31-12: the Code on Social Security 2020 gig-worker definition, the Social Security Fund and the 1-2 per cent of turnover capped at 5 per cent of gig-worker payments were confirmed in the previous audit; the Code, not a repealed Act, is cited.
- 31-8, 31-13: education.gov.in returns 403, so the NCTE and TET route and the "no national six-year MBBS bond" claim rest on the statutory framework and prospectus practice rather than a ministry page.
- 31-16, 31-17: MUDRA, CGTMSE, Stand-Up India and PMEGP exist as described, and the negative claims (no fresh-graduate quota in central recruitment; NCC and sports marks in some state police recruitment only) hold.

## Banned-term check

- JSON: 0 banned terms
- `npx tsx scripts/check-chapter.ts 31`: exit 0, "chapter 31 (31-paths-after-eighteen.json): 17 tips / PASS: no banned term, CJK character or foreign-jurisdiction term."

## New blocking items

None. Both corrected sentences are accurate, the old numbering and date do not survive anywhere in the file, and the edits introduced no new error.

Verdict: PASS
