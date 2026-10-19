# Spec Delta: Reading Progress

## Purpose
Tracks reader progress across all 765 tips using viewport visibility criteria, persists read state and streaks in localStorage, and renders progress metrics and interactive SVG beads without external charting libraries.

## ADDED Requirements

### Requirement: Viewport Visibility Read Detection
The system SHALL mark a tip as read when at least 50% of the tip card remains continuously visible in the viewport for max(1.5s, min(6s, 40% of reading time at 230 wpm)), or when manually toggled.

#### Scenario: Reader finishes reading a tip
- **WHEN** a reader keeps a tip card in the active viewport for the required duration
- **THEN** the system marks the tip ID as read, increments progress metrics, and updates the local storage ledger

#### Scenario: Rapid scrolling past tips
- **WHEN** a reader flicks quickly past multiple tip cards in under 1.5 seconds
- **THEN** the tips are not marked as read

### Requirement: 765-Bead Inline SVG Reading Map
The system SHALL render an interactive reading map containing 765 glass beads grouped by chapter, lighting up individual beads when read and enabling click-to-jump navigation.

#### Scenario: Interacting with reading map beads
- **WHEN** a reader clicks an individual bead on the reading map
- **THEN** the browser smoothly navigates directly to the target chapter and scrolls to that specific tip anchor

### Requirement: Local Storage Persistence and Export
The system SHALL persist read tip IDs, bookmarks, daily counts, and streaks under a versioned localStorage key, and provide JSON export, JSON import, and reset actions.

#### Scenario: Exporting progress data
- **WHEN** a reader initiates an Export action from the progress page
- **THEN** the browser triggers a JSON file download containing the versioned reading ledger
