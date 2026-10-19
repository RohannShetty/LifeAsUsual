# Spec Delta: Reading Interface

## Purpose
Provides the core responsive web reader layout, fake-glass tip cards, expandable source citations, and reading settings for the 765 life recommendations.

## ADDED Requirements

### Requirement: Structured Tip Card Presentation
The system SHALL present each tip inside a 6-field card containing title and linkable anchor ID, sticker chips, visual lead "In plain words", cost, benefit, caveats, and expandable sources.

#### Scenario: Viewing a standard tip card
- **WHEN** a reader navigates to a chapter or tip anchor
- **THEN** the tip card displays the title, chips, In plain words, Cost, Benefit, Caveats, and a collapsed Sources toggle with citation count

### Requirement: Fake Glass Performance Styling
The system SHALL style repetitive tip cards using opaque fake-glass CSS fills without backdrop blur filters to preserve 60fps scrolling and maintain a minimum 7:1 text contrast ratio.

#### Scenario: Scrolling through a long chapter
- **WHEN** a user scrolls through a chapter containing dozens of tips on a mobile device
- **THEN** cards render without GPU backdrop filter lag and body text contrast remains above 7:1 in both light and dark themes

### Requirement: Expandable Citations Drawer
The system SHALL collapse primary source citations by default and expand them smoothly using CSS grid animation without removing citation text from the DOM.

#### Scenario: Toggling sources visibility
- **WHEN** a reader clicks the Sources toggle button on a tip card
- **THEN** the sources list smoothly expands from 0fr to 1fr grid rows and exposes the citations and DOI links

### Requirement: Reader Settings Customization
The system SHALL provide a settings sheet allowing readers to adjust font size, toggle serif/sans typography, select theme (dark/light/auto), and enable Reduce Transparency.

#### Scenario: Adjusting reading preferences
- **WHEN** a reader changes theme or text size in the settings sheet
- **THEN** the root CSS variables update immediately and settings persist in localStorage
