# Content Trust Specification

## ADDED Requirements

### Requirement: Claim-specific evidence and provenance
The system SHALL maintain stable identities and individually reviewable evidence for each material public-facing claim, including exact citation locator, source version/date, jurisdiction, population/applicability, reviewer and independent verification result.

#### Scenario: The source is only a regulator homepage
- **WHEN** a detailed legal or medical claim cites a regulator homepage without an exact supporting rule or guideline
- **THEN** the verification status SHALL remain unverified, and the system SHALL report the missing claim-to-source support.

#### Scenario: Claim originally measured another country
- **WHEN** a published statistic comes from an international study
- **THEN** the original population SHALL remain explicitly visible and SHALL NOT be silently relabelled as an India estimate.

### Requirement: Separate review status from study grade
The system SHALL represent evidence grade and editorial review status as independent fields.

#### Scenario: AI check has passed
- **WHEN** an independent AI verifier has checked the exact accessible evidence with no blocking finding
- **THEN** the page SHALL visibly say "AI-reviewed draft" and SHALL NOT suggest qualified professional signoff.

#### Scenario: Human reviewer signs off
- **WHEN** a qualified named reviewer approves a version, date and scope
- **THEN** that precise revision MAY show "Human-reviewed" with its scope, while other versions remain drafts.

### Requirement: Risk-sensitive publication
High-impact advice SHALL not be automatically recommended when a relevant safety-critical claim has missing evidence, source mismatch or unresolved harmful uncertainty.

#### Scenario: High-risk source inaccessible
- **WHEN** the required source cannot be checked
- **THEN** the verifier SHALL record the access failure and the claim SHALL NOT be advanced to AI-reviewed draft.

### Requirement: Preservation of legacy identities
The system SHALL preserve inherited tip URLs, user reading state and upstream licence attribution while allowing new original Indian lessons with non-colliding IDs.

#### Scenario: Original India lesson is added
- **WHEN** an editor adds a sourced Indian practical guide
- **THEN** the public count MAY increase without invalidating the inherited 765-tip invariant or old anchors.

### Requirement: Jurisdiction and localization
Jurisdictional and translated variants SHALL be independently versioned and verified, and the system SHALL display missing coverage instead of fabricating state-specific answers.

#### Scenario: State rule unavailable
- **WHEN** a user selects a jurisdiction without supported verified guidance
- **THEN** the page SHALL show national guidance with a clear coverage limitation, not fabricated local deadlines or fees.
