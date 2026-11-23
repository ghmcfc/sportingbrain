import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://ghmcfc.github.io',
  base: '/sportingbrain',
  build: { format: 'file' },
  outDir: './dist'
});
