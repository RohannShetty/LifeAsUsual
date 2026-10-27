# Spec Delta: reading-interface

## Purpose
Moves the tip card's material contract from opaque fake glass to real glass with a bounded blur budget, matching the shipped reader.

## REMOVED Requirements

### Requirement: Fake Glass Performance Styling
The system SHALL style repetitive tip cards using opaque fake-glass CSS fills without backdrop blur filters to preserve 60fps scrolling and maintain a minimum 7:1 text contrast ratio.

#### Scenario: Scrolling through a long chapter
- **WHEN** a user scrolls through a chapter containing dozens of tips on a mobile device
- **THEN** cards render without GPU backdrop filter lag and body text contrast remains above 7:1 in both light and dark themes

## ADDED Requirements

### Requirement: Glass tip cards with a bounded blur budget
The system SHALL style tip cards on the thick glass tint (72% of the page ground) and SHALL apply `backdrop-filter` to at most three cards at a time, only while they intersect the viewport, keeping text contrast at or above 7:1 on every palette and skipping layout for offscreen cards.

#### Scenario: Scrolling through a long chapter
- **WHEN** a user scrolls through a chapter containing dozens of tips on a mobile device
- **THEN** no more than three cards carry blur at any moment, the rest stay on the opaque-tinted material, and body text contrast remains above 7:1 in both light and dark themes

#### Scenario: Reader reduces transparency
- **WHEN** the reader enables Reduce transparency or the operating system prefers reduced transparency
- **THEN** no tip card receives a blur filter and every card renders with the opaque tint fallback
