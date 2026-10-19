import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: process.env.SITE || 'https://howtolivebetter.github.io',
  base: process.env.BASE || '/',
  build: {
    format: 'directory'
  }
});
