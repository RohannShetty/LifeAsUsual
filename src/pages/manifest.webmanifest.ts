import type { APIRoute } from 'astro';

// Base-aware Web App Manifest. The site is deployed under a subpath on GitHub
// Pages, so start_url, scope and icon URLs must all be derived at build time.
export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL || '/';
  const origin = site ? site.origin : '';
  const manifest = {
    name: 'Life as Usual — How to live better in India',
    short_name: 'Life as Usual',
    description:
      'Practical, money-first lessons for living better in India: health, money, work and rights, with sources and honest limits.',
    lang: 'en-IN',
    dir: 'ltr',
    start_url: base,
    scope: base,
    id: base,
    display: 'standalone',
    orientation: 'portrait-primary',
    background_color: '#0A1230',
    theme_color: '#0A1230',
    categories: ['lifestyle', 'health', 'finance', 'education'],
    icons: [
      { src: base + 'icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: base + 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: base + 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
    ],
    shortcuts: [
      { name: 'Read the chapters', url: base + 'chapters/' },
      { name: 'Practical guides', url: base + 'guides/' },
      { name: 'My progress', url: base + 'progress/' }
    ]
  };
  return new Response(JSON.stringify(manifest, null, 2), {
    headers: {
      'Content-Type': 'application/manifest+json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
