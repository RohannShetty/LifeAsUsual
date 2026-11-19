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
