import fs from 'node:fs';
import path from 'node:path';
import { checklistPublicationErrors } from '../src/lib/checklist-publication';
import type { CanonicalLesson } from '../src/lib/content-trust';

const root = path.resolve('.');
const checklistPath = path.join(root, 'data/india-checklists.json');
const lessonPath = path.join(root, 'data/india-publications.json');
const reportRoot = path.resolve(root, 'reports/checklist-reviews');

function readReport(relativePath: string): string | null {
  const resolved = path.resolve(root, relativePath);
  if (!resolved.startsWith(reportRoot + path.sep)) return null;
  try {
    if (!fs.statSync(resolved).isFile()) return null;
    return fs.readFileSync(resolved, 'utf8');
  } catch {
    return null;
  }
}

try {
  const registry: unknown = JSON.parse(fs.readFileSync(checklistPath, 'utf8'));
  const lessonsRaw: unknown = JSON.parse(fs.readFileSync(lessonPath, 'utf8'));
  const checklists = registry && typeof registry === 'object'
    ? (registry as { checklists?: unknown }).checklists
    : undefined;
  const lessons = Array.isArray(lessonsRaw)
    ? lessonsRaw.map((record) => (record as { lesson: CanonicalLesson }).lesson)
    : [];
  const errors = checklistPublicationErrors(checklists, lessons, { readReport });

  if (errors.length) {
    console.error('Checklist publication gate failed closed:');
    for (const error of errors) console.error(' - ' + error);
    process.exitCode = 1;
  } else {
    const count = Array.isArray(checklists) ? checklists.length : 0;
    console.log(
      'Checklist publication gate passed for ' + count +
      ' approved checklist record(s). ' +
      (count === 0 ? 'No checklist routes are approved for publication yet.' : 'Every record is linked to a current lesson revision and exact qualified review evidence.')
    );
  }
} catch (error) {
  console.error('Checklist publication gate failed closed:', error);
  process.exitCode = 1;
}
