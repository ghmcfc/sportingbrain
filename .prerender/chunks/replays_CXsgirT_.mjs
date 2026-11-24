import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { a as wt20_2024_final_exports, c as t20wc_2024_final_exports, d as cwc_2023_final_exports, f as cwc_2019_final_exports, i as wwc_2017_final_exports, l as t20wc_2022_final_exports, m as cwc_2011_final_exports, n as wwc_2025_final_exports, o as wt20_2023_final_exports, p as cwc_2015_final_exports, r as wwc_2022_final_exports, s as wt20_2020_final_exports, t as REPLAYS, u as t20wc_2016_final_exports } from "./replays_DcOYl_rd.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_HiHdV6xW.mjs";
// src/pages/replays.astro
var replays_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Replays,
	file: () => $$file,
	url: () => $$url
});
var $$Replays = createComponent(($$result, $$props, $$slots) => {
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
	const have = REPLAYS.filter((r) => Object.keys(feeds).some((k) => k.endsWith(`/${r.slug}.json`)));
	const base = "/".replace(/\/?$/, "/");
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Replays: great finals, ball by ball | SportingBrain",
		"description": "Replay the greatest cricket finals ball by ball: women's and men's, with worm charts, every wicket and a live scoreboard.",
		"wide": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="sec"><h1>Replays</h1></div><p class="teaser">The great finals, rebuilt from real ball-by-ball data. Press play, or drag to any moment.</p><div class="listgrid">${have.map((r) => renderTemplate`<article class="card replay-card"><span class="tag" style="background:#2E7D32">Cricket</span><div class="title">${r.title}</div><p class="teaser">${r.teaser}</p><a class="stretch"${addAttribute(`${base}replays/${r.slug}.html`, "href")}${addAttribute(`Replay: ${r.title}`, "aria-label")}></a></article>`)}</div><p class="small">Data: Cricsheet, Open Data Commons Attribution License.</p>` })}`;
}, "/home/claude/sportingbrain/source/src/pages/replays.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/replays.astro";
var $$url = "/replays.html";
// \0virtual:astro:page:src/pages/replays@_@astro
var page = () => replays_exports;
export { page };
