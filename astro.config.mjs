import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Your GitHub Organization URL
  site: 'https://saudade-magazine.github.io',
  
  // Base must be empty string for organization root repositories
  base: '', 

  // Ensure all integrations are loaded
  integrations: [mdx(), sitemap(), tailwind()],
});

