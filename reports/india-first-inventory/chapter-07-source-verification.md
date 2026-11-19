# Chapter 7 source verification (19 November 2026)

Audit of tips 7-7, 7-8, 7-9 and 7-13 in `data/en-in/chapters/07-living-with-no-money.json` against official Indian sources. This record separates what was read in a primary source from what could not be verified. It is not a reviewer approval: all four tips remain AI-checked drafts and the dispositions below are proposals.

## Verified and corrected

| Tip | Claim before | Finding | Source read |
| --- | --- | --- | --- |
| 7-13 | "NAPS reimburses 25 per cent of the prescribed stipend ... to the employer" | Wrong direction of payment. The stipend support is credited to the apprentice through the National Apprenticeship Portal; the government share is 25 per cent of the stipend, capped at Rs 1,500 per month per apprentice. Text now says pays the apprentice directly. | PIB Release 2294856, https://www.pib.gov.in/PressReleasePage.aspx?PRID=2294856 |
| 7-13 | "PM-DAKSH pays for training of SC, ST, OBC, EWS, women and transgender candidates" | Current official description lists Scheduled Castes, Other Backward Classes, Economically Weaker Sections, De-notified Tribes and Safai Karamcharis (including waste pickers). ST, women and transgender were removed from the sentence. | PIB Release 2223175, https://www.pib.gov.in/PressReleasePage.aspx?PRID=2223175 |
| 7-8 | "No fee for the UDID card application in most states" | The UDID scheme states fees NIL and delivery free of cost by speed post, nationally. Sentence now says the application is free and the card is posted at no cost. | Department of Empowerment of Persons with Disabilities, https://depwd.gov.in/en/udid-scheme |
| 7-7 | "at a price fixed by the Centre" | Current PIB description states the grain is presently free of cost. Sentence now says the Centre sets the price and it is presently free of cost. | PIB Release 2179514, https://www.pib.gov.in/PressReleasePage.aspx?PRID=2179514 |

NFSA quantities in 7-7 were checked and match the same PIB release: 5 kg per person per month for priority households, 35 kg per household per month for Antyodaya households, coverage capped at 75 per cent rural and 50 per cent urban. ONORC portability is described in PIB Release 2335306.

## Checked, but left unchanged

- 7-7: section 3 and section 4 references, the food-security allowance, ration-card fees and the sentence that Antyodaya status "unlocks" school meals had no readable primary passage in this audit. They are plausible but unverified, and remain HOLD review items rather than corrections.
- 7-8: IGNDPS age band 18-79, severe or multiple disability, BPL requirement and central rate of Rs 300 per month (Rs 500 at 80+) were confirmed against PIB Release 2187327; ADIP caps (Rs 15,000 for aids every three years, Rs 30,000 for prostheses, Rs 50,000 for a motorised tricycle) were confirmed. State top-ups and caregiver allowances are described only as varying by state, which the sources do not contradict.
- 7-9: PM-JAY cover of Rs 5 lakh per family per year was confirmed against PIB Release 2296131 and the Ayushman Vay Vandana track for people aged 70 and above against PIB Release 2082288. ESIC contribution rates of 0.75 per cent employee and 3.25 per cent employer with effect from 1 July 2019 were confirmed at https://esic.gov.in/contribution. The claims that PM-JAY is cashless, covers pre-existing conditions from day one, and issues cards after eKYC were left as written because no contradicting passage was found, not because a passage was read.
- 7-13: Jan Shikshan Sansthan age range 15-45 is confirmed by PIB Release 2241731 and ITI coverage by PIB Release 2294861. "Free including assessment" for PMKVY and "verifiable certificates" on Skill India Digital were not confirmed by a readable passage and remain open review items.

## Sources that could not be read

India Code returned "Access Denied" (Akamai), and these could not be retrieved or rendered: the Department of Food and Public Distribution FAQ, the National Health Authority PM-JAY pages, swavlambancard.gov.in, MSDE pages, skillindiadigital.gov.in (404), apprenticeshipindia.gov.in (single-page app shell), nsap.nic.in (DNS failure) and pmdaksh.dosje.gov.in (timeout). Unreadable is not the same as wrong: items that depend only on these sources stay unverified and are listed for HOLD, not deleted.

## Review status

All four tips still carry review status `independently-checked` and evidence grade A in the chapter file even though several claims rested on domain-root links. That label is accurate only for automated checking, not for professional sign-off, and the 7-13 and 7-8 corrections show why: a link existing is not the same as the link supporting the sentence. Dispositions recorded: 7-7, 7-8 and 7-13 `PROPOSED_REWRITE`; 7-9 left unchanged pending a readable PM-JAY source.

## Second pass: tips 7-2, 7-3, 7-5 and 7-6 (19 November 2026)

This pass checked the procedural safety-net tips. It removed guarantees that no readable official page supports and kept the verified route structure.

| Tip | Verified | Changed | Left as unverified |
| --- | --- | --- | --- |
| 7-2 | CLC(Central) functions and central-sphere jurisdiction (clc.gov.in); four labour codes commenced 21 November 2025 and SAMADHAN accepts labour-code filings (PIB 2192463, samadhan.labour.gov.in) | Title no longer claims "neither charges a court fee"; cost section says the first stage is conciliation, not a court trial, and that a lawyer is optional but advisable; "three free doors" became "three routes"; removed the savings-for-pending-cases phrase and the decree-enforceability claim | Repeal savings clause, documents checklist, "1-3 visits", claims-authority section numbers, labour-court fee waiver |
| 7-3 | Section 12 categories including industrial workmen and persons in custody; 15100 helpline; DLSA location; Lok Adalat award final with no appeal and no court fee (nalsa.gov.in/legal-aid, /lok-adalats) | Removed the ration-card sentence; court-fee exemption replaced with process fees and drafting, which NALSA actually lists; removed the unverified prison/juvenile/shelter clinic sentence; stopped attributing Lok Adalats to a section number | Section 19 attribution, prison clinics, "many wage disputes" characterisation |
| 7-5 | NCS is the central job-matching platform with job fairs and counselling (PIB 1883671); e-Shram gives a Universal Account Number (PIB 2303053) | Title and prose dropped "free"; "employers are checked before posting" replaced with the published blacklist; exchange certificates softened to "some recruitments ask, check the vacancy notice"; removed the unsupported placement-fee rule | Free registration, pre-posting vetting, registration certificates, agency fee of a month's salary |
| 7-6 | SDRF constituted under section 48(1)(a) for notified disasters and immediate relief; NDRF under section 46; NFBS pays Rs 20,000 to a BPL household on the death of a primary earner aged 18-59 (ndmindia.mha.gov.in/ndmi/response-fund, PIB 2187327) | Title and opening qualified as "no universal" grant; NFBS sentence now states the 18-59 age band, BPL condition and Rs 20,000; SDRF sentence reframed as immediate relief after a notified disaster | CMRF legal basis and discretion, collector's sanctioning power, PM-JAY cross-claim, "slow and discretionary" characterisation |

### Sources that could not be read in this pass

India Code (Akamai "Access Denied", then an Angular single-page app whose Act PDFs are viewer wrappers), labour.gov.in labour-codes page (Next.js shell with no text) and its PDFs (Access Denied), doj.gov.in (empty body), ncs.gov.in and its FAQ (Angular shell), eshram.gov.in (language gate), and nsap.nic.in (DNS failure). The SDRF norms table sits in an MHA PDF behind a viewer and was not extractable. Unreadable does not mean wrong: those claims were softened or left unverified instead of being deleted.

### Review status

The four tips still carry review status `independently-checked` and grades A or B. This pass found claims in each that no readable source supported, which confirms that the label describes automated citation checking, not passage-level verification by a named reviewer. Dispositions recorded as PROPOSED_REWRITE for all four.
