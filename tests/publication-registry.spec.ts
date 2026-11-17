import { expect, test } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import { publicationRegistryErrors } from '../src/lib/publication-registry';
import { publicationInventoryErrors } from '../src/lib/publication-gate';
import { assessLesson } from '../src/lib/content-trust';

const repoRoot = path.resolve(process.cwd());
const registryPath = path.join(repoRoot, 'data', 'india-publications.json');
const realRegistry = (): unknown => JSON.parse(fs.readFileSync(registryPath, 'utf8'));

const readReport = (relativePath: string): string | null => {
  const resolved = path.join(repoRoot, relativePath);
  try {
    return fs.readFileSync(resolved, 'utf8');
  } catch {
    return null;
  }
};

const clone = <T>(value: T): T => JSON.parse(JSON.stringify(value)) as T;

test.describe('publication registry runtime validation', () => {
  test('the shipped registry passes schema and cross-reference checks', () => {
    expect(publicationRegistryErrors(realRegistry(), { readReport })).toEqual([]);
  });

  test('an enum casing typo fails closed instead of skipping the high-risk branch', () => {
    const registry = clone(realRegistry()) as any[];
    registry[0].lesson.claims[0].risk = 'High';
    const errors = publicationRegistryErrors(registry, { readReport });
    expect(errors.join('\n')).toMatch(/claims\.0\.risk/);
  });

  test('an unknown review status fails closed', () => {
    const registry = clone(realRegistry()) as any[];
    registry[0].lesson.reviewStatus = 'approved';
    expect(publicationRegistryErrors(registry, { readReport }).join('\n')).toMatch(/reviewStatus/);
  });

  test('a fabricated evidence report path is rejected', () => {
    const registry = clone(realRegistry()) as any[];
    registry[0].lesson.verification[0].reportPath = 'reports/does-not-exist.md';
    expect(publicationRegistryErrors(registry, { readReport }).join('\n'))
      .toMatch(/evidence report does not exist/);
  });

  test('an evidence report that predates the reviewed revision is rejected', () => {
    const registry = clone(realRegistry()) as any[];
    registry[0].lesson.revision = '2027-01-01';
    expect(publicationRegistryErrors(registry, { readReport }).join('\n'))
      .toMatch(/does not mention the reviewed revision/);
  });

  test('a verification event for another revision is rejected', () => {
    const registry = clone(realRegistry()) as any[];
    registry[0].lesson.verification[0].lessonRevision = '2026-01-01';
    expect(publicationRegistryErrors(registry, { readReport }).join('\n'))
      .toMatch(/verification covers revision/);
  });

  test('dangling claim, source and verification references are rejected', () => {
    const registry = clone(realRegistry()) as any[];
    registry[0].lesson.claims[0].sourceIds = ['missing-source'];
    registry[0].lesson.verification[0].claimIds.push('missing-claim');
    const errors = publicationRegistryErrors(registry, { readReport }).join('\n');
    expect(errors).toMatch(/unknown source missing-source/);
    expect(errors).toMatch(/unknown claim missing-claim/);
  });

  test('deleting the only record fails the production inventory closed', () => {
    const routes = ['/help/report-financial-cyber-fraud/'];
    const errors = publicationInventoryErrors(routes, []);
    expect(errors.join('\n')).toMatch(/No canonical trust record for India-first route/);
  });

  test('a lowercase claim jurisdiction cannot evade the India-source rule', () => {
    const lesson = clone((realRegistry() as any)[0].lesson);
    lesson.claims[0].jurisdiction = 'in';
    for (const source of lesson.evidence) source.jurisdiction = 'US';
    const errors = assessLesson(lesson).errors.join('\n');
    expect(errors).toMatch(/No precise supporting evidence for claim fg-helpline/);
  });
});
