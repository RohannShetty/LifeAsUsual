/**
 * Resolves a path taking into account Astro's base URL.
 * Works seamlessly both with '/' and subpaths like '/LifeAsUsual/'.
 */
export function resolvePath(path: string = ''): string {
  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${normalizedBase}${cleanPath}`;
}
