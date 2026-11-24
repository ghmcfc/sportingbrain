import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { S as unescapeHTML, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { a as wt20_2024_final_exports, c as t20wc_2024_final_exports, d as cwc_2023_final_exports, f as cwc_2019_final_exports, i as wwc_2017_final_exports, l as t20wc_2022_final_exports, m as cwc_2011_final_exports, n as wwc_2025_final_exports, o as wt20_2023_final_exports, p as cwc_2015_final_exports, r as wwc_2022_final_exports, s as wt20_2020_final_exports, t as REPLAYS, u as t20wc_2016_final_exports } from "./replays_DcOYl_rd.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as renderScript } from "./editorial_yLEYGdBR.mjs";
import { t as $$Base } from "./Base_HiHdV6xW.mjs";
import { n as withFullNames } from "./cricnames_CZwpT7iv.mjs";
// src/pages/stats-detective.astro
var stats_detective_exports = /* @__PURE__ */ __exportAll({
	default: () => $$StatsDetective,
	file: () => $$file,
	url: () => $$url
});
var $$StatsDetective = createComponent(($$result, $$props, $$slots) => {
	const feeds = /* #__PURE__ */ Object.assign({
		"../data/feeds/cricket/cwc-2011-final.json": cwc_2011_final_exports,
		"../data/feeds/cricket/cwc-2015-final.json": cwc_2015_final_exports,
		"../data/feeds/cricket/cwc-2019-final.json": cwc_2019_final_exports,
		"../data/feeds/cricket/cwc-2023-final.json": cwc_2023_final_exports,
		"../data/feeds/cricket/t20wc-2016-final.json": t20wc_2016_final_exports,
		"../data/feeds/cricket/t20wc-2022-final.json": t20wc_2022_final_exports,
		"../data/feeds/cricket/t20wc-2024-final.json": t20wc_2024_final_exports,
		"../data/feeds/cricket/wt20-2020-final.json": wt20_2020_final_exports,
		"../data/feeds/cricket/wt20-2023-final.json": wt20_2023_final_exports,
		"../data/feeds/cricket/wt20-2024-final.json": wt20_2024_final_exports,
		"../data/feeds/cricket/wwc-2017-final.json": wwc_2017_final_exports,
		"../data/feeds/cricket/wwc-2022-final.json": wwc_2022_final_exports,
		"../data/feeds/cricket/wwc-2025-final.json": wwc_2025_final_exports
	});
	const CASES = [];
	for (const r of REPLAYS) {
		const f = Object.values(feeds).find((x) => (x.default || x).slug === r.slug);
		if (!f) continue;
		withFullNames(f.default || f).innings.slice(0, 2).forEach((inn, n) => {
			const bat = {}, bowl = {};
			for (const b of inn.balls) {
				const [, , batter, bowler, runs, , , wk, ex] = b;
				bat[batter] ??= {
					r: 0,
					b: 0,
					six: 0
				};
				if (ex !== "w") bat[batter].b++;
				bat[batter].r += runs;
				if (runs === 6) bat[batter].six++;
				bowl[bowler] ??= { w: 0 };
				if (wk && !/run out|retired/i.test(wk)) bowl[bowler].w++;
			}
			const top = Object.entries(bat).sort((a, b) => b[1].r - a[1].r);
			const opts = top.slice(0, 4).map((t) => t[0]);
			top.slice(0, 2).forEach(([name, s]) => {
				if (s.r < 20) return;
				CASES.push({
					match: r.title,
					team: inn.team,
					opts,
					a: name,
					clue: `In the ${r.title.replace(/:.*/, "")}, this ${inn.team} batter made ${s.r} from ${s.b} balls${s.six ? `, including ${s.six} six${s.six > 1 ? "es" : ""}` : ""}.`
				});
			});
			const tb = Object.entries(bowl).sort((a, b) => b[1].w - a[1].w).slice(0, 4);
			if (tb[0] && tb[0][1].w >= 3 && (!tb[1] || tb[1][1].w < tb[0][1].w)) CASES.push({
				match: r.title,
				opts: tb.map((t) => t[0]),
				a: tb[0][0],
				clue: `In the ${r.title.replace(/:.*/, "")}, this bowler took ${tb[0][1].w} wickets when ${inn.team} batted.`
			});
		});
	}
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Stats Detective: whose World Cup final was it? | SportingBrain",
		"description": "A batting or bowling line from a real World Cup final, men's and women's. Work out who it belonged to.",
		"page": "detective"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pg-head"><h1>Stats Detective</h1><p>Each case is a real line from a World Cup final, worked out ball by ball from Cricsheet's scorecards. Who was it?</p></header><div id="vs"></div><section class="pg-card" id="game" aria-live="polite"></section><p class="pg-note">Data: Cricsheet, under the Open Data Commons Attribution Licence. Wickets exclude run outs.</p><script id="cases" type="application/json">${unescapeHTML(JSON.stringify(CASES))}<\/script>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/stats-detective.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/stats-detective.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/stats-detective.astro";
var $$url = "/stats-detective.html";
// \0virtual:astro:page:src/pages/stats-detective@_@astro
var page = () => stats_detective_exports;
export { page };
