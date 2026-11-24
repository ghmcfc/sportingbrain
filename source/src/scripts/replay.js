// Ball-by-ball cricket replay: scoreboard, worm chart, scrubber, wickets. Data from Cricsheet.
// ball = [over, n, batter, bowler, batRuns, extras, total, wicket|null, extraType 'w'|'n'|'']
const COL = ['#1F3864', '#8A6100'];
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
import { withFullNames } from '../data/cricnames.js';
export function initReplay(m0) {
  const m = withFullNames(m0);
  const inns = m.innings.slice(0, 2), maxBalls = (m.overs || 50) * 6;
  // Flatten into a timeline with running state per ball
  const T = []; const wk = [];
  inns.forEach((inn, i) => {
    let runs = 0, wkts = 0, legal = 0;
    inn.balls.forEach(b => {
      runs += b[6]; if (b[8] !== 'w' && b[8] !== 'n') legal++;
      if (b[7] && !/retired hurt/.test(b[7])) { wkts++; wk.push({ g: T.length, i, txt: b[7], score: `${runs}/${wkts}`, ov: `${Math.floor(legal / 6)}.${legal % 6}` }); }
      T.push({ i, b, runs, wkts, legal });
    });
  });
  const last = (i) => { for (let g = T.length - 1; g >= 0; g--) if (T[g].i === i) return T[g]; };
  const $ = id => document.getElementById(id), svg = $('rpSvg'), scrub = $('rpScrub');
  scrub.max = T.length - 1;
  const ymax = Math.max(...inns.map((_, i) => (last(i) || { runs: 0 }).runs), inns[1]?.target?.runs || 0) * 1.08 || 100;
  const X = l => 50 + l / maxBalls * 730, Y = r => 330 - r / ymax * 300;
  // axes
  let ax = '';
  for (let o = 0; o <= (m.overs || 50); o += (m.overs > 20 ? 10 : 5)) ax += `<line x1="${X(o * 6)}" x2="${X(o * 6)}" y1="30" y2="330" stroke="var(--line,#ddd)" stroke-width="1"/><text x="${X(o * 6)}" y="350" font-size="12" text-anchor="middle" fill="currentColor" opacity=".7">${o}</text>`;
  const step = ymax > 250 ? 50 : 25;
  for (let r = 0; r <= ymax; r += step) ax += `<line x1="50" x2="780" y1="${Y(r)}" y2="${Y(r)}" stroke="var(--line,#ddd)" stroke-width="1"/><text x="42" y="${Y(r) + 4}" font-size="12" text-anchor="end" fill="currentColor" opacity=".7">${r}</text>`;
  if (inns[1]?.target?.runs) ax += `<line x1="50" x2="780" y1="${Y(inns[1].target.runs)}" y2="${Y(inns[1].target.runs)}" stroke="#C62828" stroke-dasharray="6 5"/><text x="776" y="${Y(inns[1].target.runs) - 6}" text-anchor="end" font-size="12" fill="#C62828">Target ${inns[1].target.runs}</text>`;
  $('rpLegend').innerHTML = inns.map((x, i) => `<span><i style="background:${COL[i]}"></i>${esc(x.team)}</span>`).join('');
  function draw(g) {
    let out = ax;
    inns.forEach((_, i) => {
      const pts = T.filter((t, k) => t.i === i && k <= g).map(t => `${X(t.legal).toFixed(1)},${Y(t.runs).toFixed(1)}`);
      if (pts.length) out += `<polyline points="${X(0)},${Y(0)} ${pts.join(' ')}" fill="none" stroke="${COL[i]}" stroke-width="3" stroke-linejoin="round"/>`;
    });
    wk.filter(w => w.g <= g).forEach(w => { const t = T[w.g]; out += `<circle cx="${X(t.legal)}" cy="${Y(t.runs)}" r="6" fill="#C62828" stroke="#fff" stroke-width="2" data-g="${w.g}" style="cursor:pointer"><title>${esc(w.txt)} ${w.score}</title></circle>`; });
    const t = T[g]; out += `<line x1="${X(t.legal)}" x2="${X(t.legal)}" y1="30" y2="330" stroke="${COL[t.i]}" stroke-opacity=".35" stroke-width="2"/>`;
    svg.innerHTML = out;
    // scoreboard
    $('rpInns').innerHTML = `<span class="tag" style="background:${COL[t.i]};${t.i ? 'color:#14254a' : ''}">${t.i ? 'Second' : 'First'} innings</span> <b>${esc(inns[t.i].team)}</b>`;
    $('rpScore').textContent = `${t.runs}/${t.wkts}`; $('rpOvers').textContent = `${Math.floor(t.legal / 6)}.${t.legal % 6} overs`;
    const tgt = inns[1]?.target?.runs;
    const res = document.querySelector('[data-result]')?.textContent;
    $('rpNeed').textContent = g === T.length - 1 && res ? res : t.i === 1 && tgt ? (t.runs >= tgt ? 'Target reached' : `Need ${tgt - t.runs} from ${Math.max(0, maxBalls - t.legal)} balls`) : (t.i === 0 && g === T.length - 1 ? '' : '');
    // batters and bowler so far this innings
    const bat = {}, out_ = new Set(); let bowl = {};
    T.forEach((x, k) => { if (k > g || x.i !== t.i) return; const b = x.b;
      bat[b[2]] = bat[b[2]] || { r: 0, b: 0 }; bat[b[2]].r += b[4]; if (b[8] !== 'w') bat[b[2]].b++;
      if (b[7]) out_.add(b[7].split(' (')[0]);  // retired hurt also leaves the crease
      bowl[b[3]] = bowl[b[3]] || { r: 0, w: 0, l: 0 }; bowl[b[3]].r += b[4] + (b[8] ? b[5] : 0); if (b[8] !== 'w' && b[8] !== 'n') bowl[b[3]].l++; if (b[7] && !/run out|retired|obstruct/.test(b[7])) bowl[b[3]].w++; });
    const notOut = Object.keys(bat).filter(n => !out_.has(n));
    const cur = [t.b[2], ...notOut.filter(n => n !== t.b[2])].filter(n => !out_.has(n)).slice(0, 2);
    const bw = bowl[t.b[3]];
    $('rpBat').innerHTML = cur.map(n => `<div><b>${esc(n)}</b> ${bat[n].r} <small>(${bat[n].b})</small></div>`).join('') + `<div class="small">Bowling: <b>${esc(t.b[3])}</b> ${Math.floor(bw.l / 6)}.${bw.l % 6} overs, ${bw.r} runs, ${bw.w} wkt${bw.w === 1 ? '' : 's'}</div>`;
    // feed
    const feed = []; for (let k = g; k >= 0 && feed.length < 8; k--) { const x = T[k], b = x.b;
      const what = b[7] ? `<b class="out">OUT</b> ${esc(b[7])}` : b[8] === 'w' ? 'wide' : b[8] === 'n' ? `no ball, ${b[6]}` : b[4] === 4 ? '<b>FOUR</b>' : b[4] === 6 ? '<b>SIX</b>' : (b[6] ? `${b[6]} run${b[6] > 1 ? 's' : ''}` : 'no run');
      feed.push(`<li><span class="ov">${b[0]}.${b[1]}</span> ${esc(b[3])} to ${esc(b[2])}: ${what}</li>`); }
    $('rpFeed').innerHTML = feed.join('');
  }
  $('rpWkts').innerHTML = inns.map((x, i) => `<div><b style="color:${COL[i]}">${esc(x.team)}</b><ol>${wk.filter(w => w.i === i).map(w => `<li><button class="linkbtn" data-g="${w.g}">${w.score} (${w.ov} ov): ${esc(w.txt)}</button></li>`).join('')}</ol></div>`).join('');
  let g = 0, timer = null;
  const go = k => { g = Math.max(0, Math.min(T.length - 1, k)); scrub.value = g; draw(g); };
  scrub.addEventListener('input', () => { stop(); go(+scrub.value); });
  document.addEventListener('click', e => { const el = e.target.closest('[data-g]'); if (el) { stop(); go(+el.dataset.g); } });
  const play = $('rpPlay');
  function stop() { clearInterval(timer); timer = null; play.textContent = '▶ Play'; }
  play.addEventListener('click', () => { if (timer) return stop(); if (g >= T.length - 1) go(0); play.textContent = '❚❚ Pause';
    timer = setInterval(() => { if (g >= T.length - 1) return stop(); go(g + 1); }, +$('rpSpeed').value); });
  $('rpSpeed').addEventListener('change', () => { if (timer) { stop(); play.click(); } });
  const start = +new URLSearchParams(location.search).get('g') || 0; go(start);
}
