import { expect, test } from '@playwright/test';
import fs from 'node:fs';
import {
  EXPECTED_INDIA_JURISDICTION_CODES,
  validateIndiaJurisdictionRegistry,
  type IndiaJurisdictionRegistry
} from '../src/lib/india-jurisdictions';

const registry = JSON.parse(fs.readFileSync('data/india-jurisdictions.json', 'utf8')) as IndiaJurisdictionRegistry;

test.describe('India State and UT coverage inventory', () => {
  test('represents all 36 government-listed jurisdictions without claiming local coverage', () => {
    expect(validateIndiaJurisdictionRegistry(registry)).toEqual([]);
    expect(registry.jurisdictions).toHaveLength(36);
    expect(registry.jurisdictions.filter((item) => item.kind === 'state')).toHaveLength(28);
    expect(registry.jurisdictions.filter((item) => item.kind === 'union-territory')).toHaveLength(8);
    expect(registry.jurisdictions.map((item) => item.code).sort()).toEqual([...EXPECTED_INDIA_JURISDICTION_CODES].sort());
    expect(registry.jurisdictions.every((item) => item.coverageStatus === 'unsupported')).toBe(true);
  });

  test('missing or duplicate jurisdiction codes fail validation', () => {
    const missing = structuredClone(registry);
    missing.jurisdictions.pop();
    expect(validateIndiaJurisdictionRegistry(missing).join(' ')).toContain('Missing Indian jurisdiction');

    const duplicate = structuredClone(registry);
    duplicate.jurisdictions[1].code = duplicate.jurisdictions[0].code;
    expect(validateIndiaJurisdictionRegistry(duplicate).join(' ')).toContain('Duplicate Indian jurisdiction code');
  });

  test('a reviewed state cannot omit passage evidence and a review record', () => {
    const candidate = structuredClone(registry);
    candidate.jurisdictions[0].coverageStatus = 'reviewed';
    expect(validateIndiaJurisdictionRegistry(candidate).join(' ')).toContain('requires source passages');
  });
});
