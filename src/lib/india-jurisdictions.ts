export type IndiaJurisdictionKind = 'state' | 'union-territory';
export type CoverageStatus = 'unsupported' | 'draft' | 'reviewed';

export interface IndiaJurisdictionRecord {
  code: string;
  name: string;
  kind: IndiaJurisdictionKind;
  coverageStatus: CoverageStatus;
  coverageNote?: string;
  coverageEvidence?: Array<{ id: string; url: string; locator: string; checkedAt: string }>;
  coverageReview?: { reviewer: string; reviewedAt: string; reportPath: string };
}

export interface IndiaJurisdictionRegistry {
  schemaVersion: number;
  directorySource: { title: string; url: string; checkedAt: string };
  jurisdictions: IndiaJurisdictionRecord[];
}

export const EXPECTED_INDIA_JURISDICTION_CODES = new Set<string>([
  "IN-AN", "IN-AP", "IN-AR", "IN-AS", "IN-BR", "IN-CH", "IN-CG", "IN-DN", "IN-DL",
  "IN-GA", "IN-GJ", "IN-HR", "IN-HP", "IN-JK", "IN-JH", "IN-KA", "IN-KL", "IN-LA",
  "IN-LD", "IN-MP", "IN-MH", "IN-MN", "IN-ML", "IN-MZ", "IN-NL", "IN-OD", "IN-PY",
  "IN-PB", "IN-RJ", "IN-SK", "IN-TN", "IN-TS", "IN-TR", "IN-UP", "IN-UK", "IN-WB"
]);

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

function validDate(value: string): boolean {
  if (!ISO_DATE.test(value)) return false;
  const date = new Date(value + 'T00:00:00Z');
  return !Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === value;
}

/** Structural coverage registry check; it does not verify local rules or source truth. */
export function validateIndiaJurisdictionRegistry(value: unknown): string[] {
  const errors: string[] = [];
  if (!value || typeof value !== 'object') return ['Jurisdiction registry must be an object'];
  const registry = value as Partial<IndiaJurisdictionRegistry>;
  if (registry.schemaVersion !== 1) errors.push('Unsupported jurisdiction registry schema version');
  if (!registry.directorySource?.title?.trim() || !registry.directorySource.url?.startsWith('https://')) {
    errors.push('Official directory source metadata is required');
  }
  if (!registry.directorySource?.checkedAt || !validDate(registry.directorySource.checkedAt)) {
    errors.push('Official directory check date is invalid');
  }
  if (!Array.isArray(registry.jurisdictions)) return [...errors, 'Jurisdictions must be an array'];

  const codes = new Set<string>();
  const names = new Set<string>();
  let states = 0;
  let unionTerritories = 0;

  for (const record of registry.jurisdictions) {
    if (!record || typeof record !== 'object') {
      errors.push('Jurisdiction records must be objects');
      continue;
    }
    if (!EXPECTED_INDIA_JURISDICTION_CODES.has(record.code)) errors.push('Unknown Indian jurisdiction code: ' + record.code);
    if (codes.has(record.code)) errors.push('Duplicate Indian jurisdiction code: ' + record.code);
    codes.add(record.code);
    if (!record.name?.trim() || names.has(record.name)) errors.push('Missing or duplicate jurisdiction name: ' + record.name);
    names.add(record.name);
    if (record.kind === 'state') states++;
    else if (record.kind === 'union-territory') unionTerritories++;
    else errors.push('Invalid jurisdiction kind for ' + record.code);
    if (!['unsupported', 'draft', 'reviewed'].includes(record.coverageStatus)) {
      errors.push('Invalid coverage status for ' + record.code);
    }
    if (record.coverageStatus === 'unsupported' && record.coverageEvidence?.length) {
      errors.push('Unsupported coverage must not carry reviewed evidence for ' + record.code);
    }
    if (record.coverageStatus === 'reviewed') {
      if (!record.coverageEvidence?.length || !record.coverageReview?.reviewer?.trim() ||
          !validDate(record.coverageReview.reviewedAt) || !record.coverageReview.reportPath?.trim()) {
        errors.push('Reviewed coverage requires source passages, a dated reviewer record, and a report for ' + record.code);
      }
      for (const evidence of record.coverageEvidence || []) {
        if (!evidence.id.trim() || !evidence.url.startsWith('https://') ||
            evidence.locator.trim().length < 4 || !validDate(evidence.checkedAt)) {
          errors.push('Reviewed coverage has incomplete source evidence for ' + record.code);
        }
      }
    }
  }

  for (const code of EXPECTED_INDIA_JURISDICTION_CODES) {
    if (!codes.has(code)) errors.push('Missing Indian jurisdiction: ' + code);
  }
  if (codes.size !== 36) errors.push('Expected 36 unique Indian State/UT records; found ' + codes.size);
  if (states !== 28) errors.push('Expected 28 states; found ' + states);
  if (unionTerritories !== 8) errors.push('Expected 8 union territories; found ' + unionTerritories);
  return errors;
}
