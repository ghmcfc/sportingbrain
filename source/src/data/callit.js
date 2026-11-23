// Call It: freeze a real moment, ask what happens next. Built from Cricsheet ball-by-ball data.
import { REPLAYS } from './replays.js';
import { withFullNames } from './cricnames.js';
const feeds = import.meta.glob('./feeds/cricket/*.json', { eager: true });
const legal = b => b[8] !== 'w' && b[8] !== 'n';
const isWkt = b => b[7] && !/retired hurt/.test(b[7]);
function band(v, edges) { // edges like [20,30,40] -> 4 bands
  const labels = [`Under ${edges[0]}`, ...edges.slice(0, -1).map((e, i) => `${e} to ${edges[i + 1] - 1}`), `${edges[edges.length - 1]} or more`];
  let k = edges.findIndex(e => v < e); if (k < 0) k = edges.length; return { labels, answer: k };
}
export function buildMoments() {
  const out = [];
  for (const r of REPLAYS) {
    const f = Object.entries(feeds).find(([k]) => k.endsWith(`/${r.slug}.json`)); if (!f) continue;
    const m = withFullNames(f[1].default), overs = m.overs || 50, t20 = overs <= 20, span = t20 ? 3 : 5;
    let g0 = 0;
    m.innings.slice(0, 2).forEach((inn, i) => {
      const B = inn.balls; let runs = 0, wk = 0, lg = 0; const state = [];
      const bat = {}; const out_ = new Set();
      B.forEach(b => { runs += b[6]; if (legal(b)) lg++; if (isWkt(b)) wk++; bat[b[2]] = (bat[b[2]] || 0) + b[4]; if (b[7]) out_.add(b[7].split(' (')[0]);
        state.push({ runs, wk, lg, bat: { ...bat }, out: new Set(out_), striker: b[2] }); });
      const stops = t20 ? [6, 9, 12, 15] : [10, 20, 30, 35, 40];
      for (const ov of stops) {
        const k = state.findIndex(s => s.lg === ov * 6); if (k < 0) continue;
        const s = state[k]; if (s.wk >= 9) continue;
        const endK = state.findIndex(x => x.lg === (ov + span) * 6);
        const fin = endK >= 0 ? state[endK] : state[state.length - 1];
        if (endK < 0 && fin.wk < 10 && !(i === 1)) continue;
        const dr = fin.runs - s.runs, dw = fin.wk - s.wk;
        const rr = s.runs / Math.max(1, s.lg) * 6 * span * (ov >= 35 || (t20 && ov >= 15) ? 1.2 : 1); // late overs go faster
        const r5 = x => Math.max(5, Math.round(x / 2) * 2);
        const edges = [r5(rr * 0.75), r5(rr), r5(rr * 1.3)].filter((e, i, a) => i === 0 || e > a[i - 1]);
        const rb = band(dr, edges);
        const atCrease = Object.keys(s.bat).filter(n => !s.out.has(n));
        const pair = [s.striker, ...atCrease.filter(n => n !== s.striker)].filter(n => !s.out.has(n)).slice(0, 2).map(n => [n, s.bat[n]]);
        const tgt = inn.target?.runs;
        out.push({
          id: `${r.slug}-${i}-${ov}`, slug: r.slug, match: r.title, date: m.date, venue: m.venue, team: inn.team,
          opp: m.teams.find(t => t !== inn.team), innings: i, overs, score: `${s.runs}/${s.wk}`, at: `${ov}.0`, pair,
          need: i === 1 && tgt ? `${inn.team} need ${tgt - s.runs} from ${overs * 6 - s.lg} balls` : null,
          g: g0 + k, span,
          qs: [
            { q: `How many runs will ${inn.team} score in the next ${span} overs?`, opts: rb.labels, a: rb.answer, reveal: `${dr} runs` },
            { q: `How many wickets will fall in those ${span} overs?`, opts: ['None', 'One', 'Two', 'Three or more'], a: Math.min(3, dw), reveal: `${dw} wicket${dw === 1 ? '' : 's'}` }
          ],
          after: `${fin.runs}/${fin.wk} after ${Math.floor(fin.lg / 6)}.${fin.lg % 6} overs`
        });
      }
      g0 += B.filter(b => true).length;
    });
  }
  return out;
}
