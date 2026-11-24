import { a as wt20_2024_final_exports, c as t20wc_2024_final_exports, d as cwc_2023_final_exports, f as cwc_2019_final_exports, i as wwc_2017_final_exports, l as t20wc_2022_final_exports, m as cwc_2011_final_exports, n as wwc_2025_final_exports, o as wt20_2023_final_exports, p as cwc_2015_final_exports, r as wwc_2022_final_exports, s as wt20_2020_final_exports, t as REPLAYS, u as t20wc_2016_final_exports } from "./replays_DcOYl_rd.mjs";
import { n as withFullNames } from "./cricnames_CZwpT7iv.mjs";
// src/data/callit.js
var feeds = /* #__PURE__ */ Object.assign({
	"./feeds/cricket/cwc-2011-final.json": cwc_2011_final_exports,
	"./feeds/cricket/cwc-2015-final.json": cwc_2015_final_exports,
	"./feeds/cricket/cwc-2019-final.json": cwc_2019_final_exports,
	"./feeds/cricket/cwc-2023-final.json": cwc_2023_final_exports,
	"./feeds/cricket/t20wc-2016-final.json": t20wc_2016_final_exports,
	"./feeds/cricket/t20wc-2022-final.json": t20wc_2022_final_exports,
	"./feeds/cricket/t20wc-2024-final.json": t20wc_2024_final_exports,
	"./feeds/cricket/wt20-2020-final.json": wt20_2020_final_exports,
	"./feeds/cricket/wt20-2023-final.json": wt20_2023_final_exports,
	"./feeds/cricket/wt20-2024-final.json": wt20_2024_final_exports,
	"./feeds/cricket/wwc-2017-final.json": wwc_2017_final_exports,
	"./feeds/cricket/wwc-2022-final.json": wwc_2022_final_exports,
	"./feeds/cricket/wwc-2025-final.json": wwc_2025_final_exports
});
var legal = (b) => b[8] !== "w" && b[8] !== "n";
var isWkt = (b) => b[7] && !/retired hurt/.test(b[7]);
function band(v, edges) {
	const labels = [
		`Under ${edges[0]}`,
		...edges.slice(0, -1).map((e, i) => `${e} to ${edges[i + 1] - 1}`),
		`${edges[edges.length - 1]} or more`
	];
	let k = edges.findIndex((e) => v < e);
	if (k < 0) k = edges.length;
	return {
		labels,
		answer: k
	};
}
function buildMoments() {
	const out = [];
	for (const r of REPLAYS) {
		const f = Object.entries(feeds).find(([k]) => k.endsWith(`/${r.slug}.json`));
		if (!f) continue;
		const m = withFullNames(f[1].default), overs = m.overs || 50, t20 = overs <= 20, span = t20 ? 3 : 5;
		let g0 = 0;
		const worms = m.innings.slice(0, 2).map((inn) => {
			let r_ = 0, l_ = 0;
			const pts = [[0, 0]], wk_ = [];
			inn.balls.forEach((b) => {
				r_ += b[6];
				if (legal(b)) {
					l_++;
					if (l_ % 6 === 0) pts.push([l_ / 6, r_]);
				}
				if (isWkt(b)) wk_.push([+(l_ / 6).toFixed(2), r_]);
			});
			if (l_ % 6) pts.push([+(l_ / 6).toFixed(2), r_]);
			return {
				pts,
				wk: wk_
			};
		});
		m.innings.slice(0, 2).forEach((inn, i) => {
			const B = inn.balls;
			let runs = 0, wk = 0, lg = 0;
			const state = [];
			const bat = {};
			const out_ = /* @__PURE__ */ new Set();
			B.forEach((b) => {
				runs += b[6];
				if (legal(b)) lg++;
				if (isWkt(b)) wk++;
				bat[b[2]] = (bat[b[2]] || 0) + b[4];
				if (b[7]) out_.add(b[7].split(" (")[0]);
				state.push({
					runs,
					wk,
					lg,
					bat: { ...bat },
					out: new Set(out_),
					striker: b[2]
				});
			});
			const stops = t20 ? [
				6,
				9,
				12,
				15
			] : [
				10,
				20,
				30,
				35,
				40
			];
			for (const ov of stops) {
				const k = state.findIndex((s) => s.lg === ov * 6);
				if (k < 0) continue;
				const s = state[k];
				if (s.wk >= 9) continue;
				const endK = state.findIndex((x) => x.lg === (ov + span) * 6);
				const fin = endK >= 0 ? state[endK] : state[state.length - 1];
				if (endK < 0 && fin.wk < 10 && !(i === 1)) continue;
				const dr = fin.runs - s.runs, dw = fin.wk - s.wk;
				const rr = s.runs / Math.max(1, s.lg) * 6 * span * (ov >= 35 || t20 && ov >= 15 ? 1.2 : 1);
				const r5 = (x) => Math.max(5, Math.round(x / 2) * 2);
				const rb = band(dr, [
					r5(rr * .75),
					r5(rr),
					r5(rr * 1.3)
				].filter((e, i, a) => i === 0 || e > a[i - 1]));
				const atCrease = Object.keys(s.bat).filter((n) => !s.out.has(n));
				const pair = [s.striker, ...atCrease.filter((n) => n !== s.striker)].filter((n) => !s.out.has(n)).slice(0, 2).map((n) => [n, s.bat[n]]);
				const tgt = inn.target?.runs;
				out.push({
					id: `${r.slug}-${i}-${ov}`,
					slug: r.slug,
					match: r.title,
					date: m.date,
					venue: m.venue,
					team: inn.team,
					opp: m.teams.find((t) => t !== inn.team),
					innings: i,
					overs,
					score: `${s.runs}/${s.wk}`,
					at: `${ov}.0`,
					pair,
					need: i === 1 && tgt ? `${inn.team} need ${tgt - s.runs} from ${overs * 6 - s.lg} balls` : null,
					g: g0 + k,
					span,
					start: [s.runs, s.wk],
					chart: {
						upto: worms[i].pts.filter((p) => p[0] <= ov),
						wk: worms[i].wk.filter((w) => w[0] <= ov),
						other: i === 1 ? worms[0].pts : null,
						target: i === 1 && tgt ? tgt : null,
						otherTeam: m.teams.find((t) => t !== inn.team)
					},
					play: B.slice(k + 1, (endK >= 0 ? endK : state.length - 1) + 1).map((b, j) => {
						const st = state[k + 1 + j];
						const bs = st.lg - (legal(b) ? 1 : 0);
						return [
							`${Math.floor(bs / 6)}.${bs % 6 + 1}`,
							b[2],
							b[3],
							b[6],
							isWkt(b) ? b[7] : "",
							b[8],
							st.runs,
							st.wk
						];
					}),
					qs: [{
						q: `How many runs will ${inn.team} score in the next ${span} overs?`,
						opts: rb.labels,
						a: rb.answer,
						reveal: `${dr} runs`
					}, {
						q: `How many wickets will fall in those ${span} overs?`,
						opts: [
							"None",
							"One",
							"Two",
							"Three or more"
						],
						a: Math.min(3, dw),
						reveal: `${dw} wicket${dw === 1 ? "" : "s"}`
					}],
					after: `${fin.runs}/${fin.wk} after ${Math.floor(fin.lg / 6)}.${fin.lg % 6} overs`
				});
			}
			g0 += B.filter((b) => true).length;
		});
	}
	return out;
}
export { buildMoments as t };
