# comic-layer Specification

## Purpose
Renders original SVG characters Plus and Minus, speech bubble dialogue, SFX sticker animations, View Transitions comic panel wipes, and respectful Calm Mode suppression for sensitive chapters.

## Requirements

### Requirement: Original SVG Character Cast
The system SHALL render original characters Plus (Jade `#46D9A0`) and Minus (Amber `#F5B85A`) in pure inline SVG with 3px ink outlines (`#04110F`), CSS breathing and blinking, and squash-and-stretch reactions, keeping total character SVG payload under 25KB.

#### Scenario: Displaying cast reactions
- **WHEN** a reader marks a tip as read or saves a pick
- **THEN** the character component renders the corresponding mood with a squash-and-stretch reaction without raster images or external animation libraries

### Requirement: Interface-Only Dialogue Engine
The system SHALL present character speech bubbles strictly for interface moments (first visit, daily win, achievements, empty states) with a maximum of 12 words per bubble and zero advice, claims, or disclaimers.

#### Scenario: Triggering interface dialogue
- **WHEN** a reader completes a chapter
- **THEN** a dialogue exchange of at most 3 speech bubbles appears with celebratory interface text and auto-dismisses after 6 seconds

### Requirement: Calm Mode on Sensitive Topics
The system SHALL automatically suppress characters, speech bubbles, SFX stickers, and particle bursts on chapters covering death, suicide, serious illness, disability, crime, or bereavement.

#### Scenario: Reading a sensitive chapter
- **WHEN** a reader views Chapter 1, 13, 16, 25, 28, 29, 30, or 33
- **THEN** no characters or SFX stickers appear, and chapter completion displays a quiet, neutral glow

### Requirement: Comic Effects Master Switch
The system SHALL provide a master toggle in settings allowing readers to disable characters, speech bubbles, SFX stickers, and particle bursts across the entire application while keeping the glass layout intact.

#### Scenario: Disabling comic effects
- **WHEN** a reader turns off the Comic Effects switch in reading settings
- **THEN** all character SVGs, dialogue bubbles, and particle canvas bursts are removed from view
