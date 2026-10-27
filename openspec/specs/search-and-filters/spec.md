# search-and-filters Specification

## Purpose
Enables offline-capable keyword search across all 765 tips using lazy-loaded Pagefind, alongside multi-dimensional condition filtering synchronized with URL search parameters.

## Requirements

### Requirement: Lazy-Loaded Pagefind Search
The system SHALL index tip titles, In plain words, and caveats at build time, and load Pagefind search assets lazily on demand only when the reader navigates to `/explore/`.

#### Scenario: Searching for tips on the Explore page
- **WHEN** a reader types a query into the Explore search bar
- **THEN** Pagefind loads its index chunks on demand and returns ranked matching tip cards within 100 milliseconds

### Requirement: Multi-Dimensional Condition Filtering
The system SHALL provide interactive chip filters across evidence grade (A, B, C), value tier (Very High, High, Average), cost dimensions (Free, Quick, No Willpower), scope, and Disputed status.

#### Scenario: Filtering by condition tags
- **WHEN** a reader selects "Grade A" and "Free" filters
- **THEN** the results list instantly filters to show only tips that satisfy both criteria, updating the displayed matching count

### Requirement: URL Search Parameter Synchronization
The system SHALL mirror the active search term and all selected filter chips into URL query parameters to support link sharing and browser history navigation.

#### Scenario: Sharing filtered search results
- **WHEN** a reader applies multiple filters and copies the browser URL
- **THEN** opening the URL in another tab restores the exact query and active filter selection
