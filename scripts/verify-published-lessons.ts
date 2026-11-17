import fs from 'node:fs';
import path from 'node:path';
import { publicationInventoryErrors, type IndiaPublicationRecord } from '../src/lib/publication-gate';
import { publicationRegistryErrors } from '../src/lib/publication-registry';

const helpRoot = path.resolve('src/pages/help');
const registryPath = path.resolve('data/india-publications.json');
const repoRoot = path.resolve('.');
const PAGE_EXTENSIONS = new Set(['.astro', '.md', '.mdx', '.ts', '.js', '.tsx', '.jsx']);

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
    if (!entry.isFile()) continue;
    const extension = path.extname(entry.name);
    if (entry.name.startsWith('_')) continue; // Astro private module, never a route
    if (!PAGE_EXTENSIONS.has(extension)) continue;
    if (extension !== '.astro') {
      throw new Error(
        'Unsupported page format under src/pages/help (the fail-closed inventory only understands .astro): ' +
        childRelative
      );
    }
    if (entry.name.includes('[') || entry.name.includes(']')) {
      throw new Error('Dynamic routes under src/pages/help are unsupported by the fail-closed inventory: ' + childRelative);
    }
    const routePart = childRelative.replaceAll(path.sep, '/').replace(/\.astro$/, '').replace(/(?:^|\/)index$/, '');
    routes.push('/help/' + routePart);
  }
  return routes;
}

function readReport(relativePath: string): string | null {
  const resolved = path.resolve(repoRoot, relativePath);
  if (!resolved.startsWith(repoRoot + path.sep)) return null;
  try {
    if (!fs.statSync(resolved).isFile()) return null;
    return fs.readFileSync(resolved, 'utf8');
  } catch {
    return null;
  }
}

try {
  const parsed: unknown = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  const routes = collectHelpRoutes(helpRoot);
  const errors = [
    ...publicationRegistryErrors(parsed, { readReport }),
    ...publicationInventoryErrors(routes, (parsed as IndiaPublicationRecord[]) ?? [])
  ];
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
