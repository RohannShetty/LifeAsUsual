# india-edition Specification

## Purpose
Defines the complete India edition rewrite: chapter coverage, source-verified claims, status tracking, and fail-closed build and publish gates.

## Requirements

### Requirement: Complete chapter coverage

The India edition SHALL provide a rewritten chapter for all 34 chapters and 765 tips. A chapter declared rewritten MUST NOT fall back to source data at build time.

#### Scenario: All chapters rewritten

- **WHEN** all 34 India chapter files are present and valid
- **THEN** the built edition contains 765 India tips and 34 India chapters

#### Scenario: Missing chapter

- **WHEN** a chapter is declared complete but its India file is missing or has fewer tips than the source
- **THEN** the build fails with the chapter and tip count

### Requirement: No source-edition terms

The published India edition SHALL contain zero occurrences of China, Chinese, mainland, RMB, yuan, hukou, yibao, dibao or CNY in rewritten chapters and site chrome.

#### Scenario: Banned term found

- **WHEN** the term scan finds a banned term in a rewritten chapter or site chrome
- **THEN** the build fails and names the file and term

#### Scenario: Clean build

- **WHEN** the scan finds no banned terms across the built site
- **THEN** the scan passes and reports the number of pages checked

### Requirement: Official source verification

Every high-risk legal, medical or financial claim SHALL cite at least one official Indian source with a section and access date. Unsupported claims MUST be removed or marked unresolved.

#### Scenario: Unsupported claim

- **WHEN** a verifier finds a high-risk claim without an official source
- **THEN** the chapter is returned to draft and cannot be marked checked

#### Scenario: Supported claims

- **WHEN** every high-risk claim has an official source and the verifier signs the report
- **THEN** the chapter may move from draft to checked

### Requirement: Chapter status model

Each chapter SHALL have one status: draft, checked or reviewed. Reviewed MUST require an independent verification report and, for Tier A legal, medical or financial chapters, a named human reviewer. Draft and checked chapters MUST remain visibly badged.

#### Scenario: Premature reviewed status

- **WHEN** a chapter is marked reviewed without a verification report or required human sign-off
- **THEN** validation fails

#### Scenario: Checked draft

- **WHEN** a chapter has passed automated and independent checks but awaits human review
- **THEN** it is shown as checked-draft with a visible draft badge

### Requirement: Fail-closed build and publish

The build SHALL fail if a rewritten chapter is structurally invalid, incomplete, contains banned terms or lacks a verification report. Final publication SHALL require 34 of 34 chapters and a passing full test suite.

#### Scenario: Invalid chapter

- **WHEN** a rewritten chapter has a missing field, duplicate tip ID or invalid status
- **THEN** the build fails before generating pages

#### Scenario: Final publication

- **WHEN** all 34 chapters are checked or reviewed and build, link, term, schema and Playwright checks pass
- **THEN** the final merge may be pushed and deployed

### Requirement: Rewrite transparency

The India page and rewrite worklist SHALL derive completed and queued chapters from the manifest. They MUST NOT label a queued chapter as rewritten.

#### Scenario: Manifest update

- **WHEN** a chapter moves to checked or reviewed
- **THEN** the India page and worklist show it as completed and remove it from queued

#### Scenario: Stale presentation

- **WHEN** the page claims a chapter is rewritten but the manifest says queued
- **THEN** validation fails

### Requirement: Review provenance

Each checked or reviewed chapter SHALL record the verifier identity, verification date, source count and any open issues. Tier A chapters SHALL record either the human reviewer or a pending-review flag.

#### Scenario: Missing provenance

- **WHEN** a chapter is checked without verifier identity, date or source count
- **THEN** validation fails

#### Scenario: Tier A pending review

- **WHEN** a Tier A chapter is checked but has no human reviewer
- **THEN** it remains checked-draft and records pending review

### Requirement: Faithful India adaptation

Rewrites SHALL preserve universal advice and evidence and MUST NOT invent an Indian scheme, statute, number or hotline. Where no Indian equivalent exists, the text SHALL say so and give the closest Indian route.

#### Scenario: No direct equivalent

- **WHEN** a source claim has no Indian equivalent
- **THEN** the rewrite states that and does not fabricate one

#### Scenario: Invented equivalent

- **WHEN** a verifier finds an Indian scheme, statute or number that its source does not support
- **THEN** the chapter is rejected
