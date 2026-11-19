import fs from 'node:fs';
import path from 'node:path';
import { publicationInventoryErrors, type IndiaPublicationRecord } from '../src/lib/publication-gate';
import { publicationRegistryErrors } from '../src/lib/publication-registry';
import { inheritedPublicationErrors, type InheritedRouteDeclaration } from '../src/lib/inherited-publication';
import { guidePublicationErrors, type GuideRouteDeclaration } from '../src/lib/guide-publication';

const helpRoot = path.resolve('src/pages/help');
const registryPath = path.resolve('data/india-publications.json');
const inheritedPolicyPath = path.resolve('data/india-inherited-publication.json');
const chaptersPath = path.resolve('data/en-in/all-chapters.json');
const chapterTemplatePath = path.resolve('src/pages/chapters/[n]-[slug].astro');
const guidesPath = path.resolve('data/en/guides.json');
const guidePolicyPath = path.resolve('data/india-guide-publication.json');
const guideTemplatePath = path.resolve('src/pages/guides/[slug].astro');
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

function readChapterRoutes(): string[] {
  const chapters = JSON.parse(fs.readFileSync(chaptersPath, 'utf8')) as { chapter: number; slug: string }[];
  return chapters.map((chapter) => {
    const folder = String(chapter.chapter).padStart(2, '0') + '-' + chapter.slug;
    return '/chapters/' + folder + '/';
  });
}

function readGuideRoutes(): string[] {
  const guides = JSON.parse(fs.readFileSync(guidesPath, 'utf8')) as { slug: string }[];
  return guides.map((guide) => '/guides/' + guide.slug + '/');
}

function readGuideDeclarations(): GuideRouteDeclaration[] {
  const policy = JSON.parse(fs.readFileSync(guidePolicyPath, 'utf8')) as { routes?: GuideRouteDeclaration[] };
  if (!Array.isArray(policy.routes)) {
    throw new Error('data/india-guide-publication.json must carry a routes array');
  }
  return policy.routes;
}

function readInheritedDeclarations(): InheritedRouteDeclaration[] {
  const policy = JSON.parse(fs.readFileSync(inheritedPolicyPath, 'utf8')) as { routes?: InheritedRouteDeclaration[] };
  if (!Array.isArray(policy.routes)) {
    throw new Error('data/india-inherited-publication.json must carry a routes array');
  }
  return policy.routes;
}

try {
  const parsed: unknown = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  const routes = collectHelpRoutes(helpRoot);
  const records = (parsed as IndiaPublicationRecord[]) ?? [];
  const reviewedRoutes = records
    .filter((record) => record.lesson?.reviewStatus === 'human-reviewed')
    .map((record) => record.route);
  const errors = [
    ...publicationRegistryErrors(parsed, { readReport }),
    ...publicationInventoryErrors(routes, records),
    ...inheritedPublicationErrors({
      declarations: readInheritedDeclarations(),
      discoveredRoutes: readChapterRoutes(),
      chapterTemplate: fs.readFileSync(chapterTemplatePath, 'utf8'),
      reviewedRoutes
    }),
    ...guidePublicationErrors({
      declarations: readGuideDeclarations(),
      discoveredRoutes: readGuideRoutes(),
      guideTemplate: fs.readFileSync(guideTemplatePath, 'utf8'),
      reviewedRoutes
    })
  ];
  if (errors.length) {
    console.error('India-first publication gate failed closed:');
    for (const error of errors) console.error(' - ' + error);
    process.exitCode = 1;
  } else {
    console.log('India-first publication gate passed for ' + routes.length + ' help route(s), ' + readChapterRoutes().length + ' inherited chapter route(s) and ' + readGuideRoutes().length + ' guide route(s).');
  }
} catch (error) {
  console.error('India-first publication gate failed closed:', error);
  process.exitCode = 1;
}
