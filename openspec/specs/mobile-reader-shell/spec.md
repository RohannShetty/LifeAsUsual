# mobile-reader-shell Specification

## Purpose
Defines the responsive layout, touch ergonometrics, fluid typography, and viewport adaptation standards for mobile readers on small screens down to 360px.

## Requirements

### Requirement: Interactive controls must meet minimum 44px touch targets
The system SHALL ensure every interactive element, including filter chips, navigation links, drawer triggers, map beads, and action buttons, provides a touch target of at least 44px by 44px on mobile screens.

#### Scenario: Tapping map beads on narrow mobile viewports
- **WHEN** a reader taps a 14px bead in the reading map on a 360px viewport
- **THEN** the hit area expands via a pseudo-element to at least 44px by 44px, successfully registering the touch without misclicks

#### Scenario: Tapping drawer close and header buttons
- **WHEN** a reader interacts with the Table of Contents button, disclaimer dismiss button, or settings close button
- **THEN** the target touch box measures at least 44px in both dimensions

### Requirement: Fluid typography must prevent viewport clipping
The system SHALL use fluid font sizing via CSS clamp() for display headlines to prevent horizontal overflow and awkward line breaks on narrow devices.

#### Scenario: Rendering hero titles at 360px width
- **WHEN** the home page or chapter reader loads on a 360px viewport
- **THEN** display headlines scale smoothly without causing horizontal overflow or breaking layout containers

### Requirement: Bottom navigation must respect safe area insets and avoid crowding
The system SHALL adapt the floating bottom navigation capsule to avoid safe-area overlaps and maintain comfortable touch target spacing across all mobile widths.

#### Scenario: Viewing bottom navigation on device with home indicator
- **WHEN** viewing the application on a mobile device with home bar insets
- **THEN** the floating capsule is positioned above env(safe-area-inset-bottom) and its items remain evenly spaced without label truncation

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
