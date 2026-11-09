import fs from 'node:fs';
import path from 'node:path';
import { publicationInventoryErrors, type IndiaPublicationRecord } from '../src/lib/publication-gate';

const helpRoot = path.resolve('src/pages/help');
const registryPath = path.resolve('data/india-publications.json');

function collectHelpRoutes(directory: string, relative = ''): string[] {
  if (!fs.existsSync(directory)) return [];
  const routes: string[] = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const childRelative = path.join(relative, entry.name);
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      routes.push(...collectHelpRoutes(fullPath, childRelative));
      continue;
    }
    if (!entry.isFile() || !entry.name.endsWith('.astro')) continue;
    if (entry.name.includes('[') || entry.name.includes(']')) {
      throw new Error('Dynamic routes under src/pages/help are unsupported by the fail-closed inventory: ' + childRelative);
    }
    const routePart = childRelative.replaceAll(path.sep, '/').replace(/\.astro$/, '').replace(/(?:^|\/)index$/, '');
    routes.push('/help/' + routePart);
  }
  return routes;
}

try {
  const parsed: unknown = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  if (!Array.isArray(parsed)) throw new Error('data/india-publications.json must contain an array');
  const routes = collectHelpRoutes(helpRoot);
  const errors = publicationInventoryErrors(routes, parsed as IndiaPublicationRecord[]);
  if (errors.length) {
    console.error('India-first publication gate failed closed:');
    for (const error of errors) console.error(' - ' + error);
    process.exitCode = 1;
  } else {
    console.log('India-first publication gate passed for ' + routes.length + ' help route(s).');
  }
} catch (error) {
  console.error('India-first publication gate failed closed:', error);
  process.exitCode = 1;
}
