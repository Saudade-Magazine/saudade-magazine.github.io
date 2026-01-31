// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // 1. Your Organization URL
  site: 'https://saudade-magazine.github.io',
  
  // 2. Base must be empty for Organization Root sites
  base: '', 

  integrations: [mdx(), sitemap(), tailwind()],
});// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://clay-astro-theme.netlify.app',
    integrations: [sitemap()],
});
