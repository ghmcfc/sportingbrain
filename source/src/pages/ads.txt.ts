import ADS from '../data/ads.json';
export function GET() {
  const pub = (ADS.client || '').replace(/^ca-/, '');
  return new Response(pub ? `google.com, ${pub}, DIRECT, f08c47fec0942fa0\n` : '# Advertising not switched on yet\n', { headers: { 'Content-Type': 'text/plain' } });
}
