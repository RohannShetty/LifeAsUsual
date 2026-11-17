export type PageType = 'home' | 'chapter' | 'collection' | 'reference';

/**
 * Classifies a request path for the editorial shell. GitHub Pages serves the
 * site from a subpath, so the base must be stripped before matching; both the
 * trailing-slash and extensionless forms of a route are accepted.
 */
export function pageTypeFor(fullPath: string, base: string): PageType {
  const basePath = (base || '/').replace(/\/+$/, '');
  let pathname = fullPath || '/';
  if (basePath && (pathname === basePath || pathname.startsWith(basePath + '/'))) {
    pathname = pathname.slice(basePath.length);
  }
  if (!pathname.startsWith('/')) pathname = '/' + pathname;
  if (pathname === '/') return 'home';
  if (/^\/chapters\/[^/]+\/?$/.test(pathname)) return 'chapter';
  if (/^\/(chapters|guides|explore|picks)\/?$/.test(pathname)) return 'collection';
  return 'reference';
}
