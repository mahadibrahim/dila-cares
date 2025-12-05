import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mahadibrahim.github.io',
  base: '/dila-cares',
  integrations: [sitemap()],
  output: 'static'
});