import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
export default defineConfig({ integrations:[sitemap({ filter: p => !p.includes('/f1/') })],
  site: 'https://ghmcfc.github.io',
  base: '/sportingbrain',
  build: { format: 'file' },
  outDir: './dist'
});
