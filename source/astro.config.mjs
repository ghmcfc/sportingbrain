import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
export default defineConfig({ integrations:[sitemap({ filter: p => !p.includes('/f1/') })],
  site: 'https://sportingbrain.com',
  base: '/',
  build: { format: 'file' },
  outDir: './dist'
});
