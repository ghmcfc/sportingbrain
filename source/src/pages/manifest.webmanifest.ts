const b = import.meta.env.BASE_URL.replace(/\/?$/, '/');
export const GET = () => new Response(JSON.stringify({
  name: 'SportingBrain', short_name: 'SportingBrain',
  description: 'The free daily sports hub: games, guides and a new challenge every day.',
  start_url: b + '?source=homescreen', scope: b, display: 'standalone',
  background_color: '#0F1E36', theme_color: '#0F1E36',
  icons: [{ src: b + 'assets/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: b + 'assets/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }],
}), { headers: { 'Content-Type': 'application/manifest+json' } });
