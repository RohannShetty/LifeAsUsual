# Spec Delta: mobile-reader-shell

## Purpose
Adds a folded evidence block and offscreen layout skipping to the reader shell while preserving touch targets and overflow guarantees.

## ADDED Requirements

### Requirement: Folded evidence block on every tip
The system SHALL collapse each tip's Cost, Benefit and Caveats into a single control that is closed by default when JavaScript is available, exposing it through a button with `aria-expanded` and `aria-controls`, marking the closed body `inert`, closing on Escape, and rendering the evidence open when JavaScript is unavailable.

#### Scenario: Opening the notes on a tip
- **WHEN** a reader activates the "Open the notes" handle on a tip card
- **THEN** the evidence expands from 0 to its full height, the button reports `aria-expanded="true"`, the body is no longer `inert`, and the card is remembered for the session

#### Scenario: Reading with JavaScript disabled
- **WHEN** the page loads with scripts blocked
- **THEN** Cost, Benefit and Caveats are visible in full and the fold handle is hidden

### Requirement: Offscreen tips skip layout work
The system SHALL mark tip cards with `content-visibility: auto` and a reserved intrinsic size so that cards outside the viewport cost no layout or paint.

#### Scenario: Loading a 47-tip chapter on a throttled phone
- **WHEN** chapter 02 loads on a throttled mobile profile
- **THEN** only in-view cards are laid out, the scroll height stays stable, and the page remains free of horizontal overflow at 360px
