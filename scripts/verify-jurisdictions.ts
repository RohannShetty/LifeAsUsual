import fs from 'node:fs';
import path from 'node:path';
import { validateIndiaJurisdictionRegistry } from '../src/lib/india-jurisdictions';

const registryPath = path.resolve('data/india-jurisdictions.json');
try {
  const registry: unknown = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  const errors = validateIndiaJurisdictionRegistry(registry);
  if (errors.length) {
    console.error('India jurisdiction coverage validation failed:');
    for (const error of errors) console.error(' - ' + error);
    process.exitCode = 1;
  } else {
    console.log('India jurisdiction registry passed: 28 states and 8 union territories; coverage statuses remain explicit.');
  }
} catch (error) {
  console.error('India jurisdiction validation failed closed:', error);
  process.exitCode = 1;
}
