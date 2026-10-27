# reading-interface Specification

## Purpose
Provides the core responsive web reader layout, glass tip cards, folded evidence and expandable source citations, and reading settings for the 765 life recommendations.

## Requirements

### Requirement: Structured Tip Card Presentation
The system SHALL present each tip inside a 6-field card containing title and linkable anchor ID, sticker chips, visual lead "In plain words", cost, benefit, caveats, and expandable sources.

#### Scenario: Viewing a standard tip card
- **WHEN** a reader navigates to a chapter or tip anchor
- **THEN** the tip card displays the title, chips, In plain words, Cost, Benefit, Caveats, and a collapsed Sources toggle with citation count

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

### Requirement: Glass tip cards with a bounded blur budget
The system SHALL style tip cards on the thick glass tint (72% of the page ground) and SHALL apply `backdrop-filter` to at most three cards at a time, only while they intersect the viewport, keeping text contrast at or above 7:1 on every palette and skipping layout for offscreen cards.

#### Scenario: Scrolling through a long chapter
- **WHEN** a user scrolls through a chapter containing dozens of tips on a mobile device
- **THEN** no more than three cards carry blur at any moment, the rest stay on the opaque-tinted material, and body text contrast remains above 7:1 in both light and dark themes

#### Scenario: Reader reduces transparency
- **WHEN** the reader enables Reduce transparency or the operating system prefers reduced transparency
- **THEN** no tip card receives a blur filter and every card renders with the opaque tint fallback
