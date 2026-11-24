import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
// Pages that should not be in the sitemap: F1 (non-commercial data), utility pages and old URLs that redirect to the Kids Zone.
const SKIP = ['/f1/', '/embed', '/offline', '/which-sport', '/guess-the-sport', '/the-grid', '/guess-the-player', '/legends-xi', '/tiktok', '/insta'];
const today = new Date().toISOString().slice(0, 10);
export default defineConfig({ integrations:[sitemap({
    filter: p => !SKIP.some(s => new URL(p).pathname.startsWith(s)),
    // Match the canonical tags: every page is served and linked as .html, the home page as /.
    serialize: item => ({ ...item, url: item.url.endsWith('/') ? item.url : item.url + '.html', lastmod: today })
  })],
  site: 'https://sportingbrain.com',
  base: '/',
  build: { format: 'file' },
  outDir: './dist'
});
