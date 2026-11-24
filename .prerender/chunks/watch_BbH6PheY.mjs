import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { S as unescapeHTML, b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { a as wt20_2024_final_exports, c as t20wc_2024_final_exports, d as cwc_2023_final_exports, f as cwc_2019_final_exports, i as wwc_2017_final_exports, l as t20wc_2022_final_exports, m as cwc_2011_final_exports, n as wwc_2025_final_exports, o as wt20_2023_final_exports, p as cwc_2015_final_exports, r as wwc_2022_final_exports, s as wt20_2020_final_exports, t as REPLAYS, u as t20wc_2016_final_exports } from "./replays_DcOYl_rd.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_HiHdV6xW.mjs";
import { t as photoFor } from "./photos_CEFIZU4w.mjs";
import { t as icon } from "./icons_DEQZHaxa.mjs";
// src/pages/watch.astro
var watch_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Watch,
	file: () => $$file,
	url: () => $$url
});
var $$Watch = createComponent(($$result, $$props, $$slots) => {
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
	const venueOf = (slug) => {
		const f = Object.entries(feeds).find(([k]) => k.endsWith(`/${slug}.json`));
		return f ? f[1].default.venue || "" : "";
	};
	const R = REPLAYS.map((r) => ({
		r,
		v: venueOf(r.slug),
		p: photoFor(venueOf(r.slug) + " " + r.title, "Cricket", r.slug.length)
	}));
	const base = "/".replace(/\/?$/, "/");
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Watch: ball-by-ball replays and Laugh of the Day | SportingBrain",
		"description": "Great cricket finals replayed ball by ball, Call It play-outs and a funny moment from sport every day.",
		"page": "watch",
		"wide": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="art-head"><h1>Watch</h1><p class="art-stand">Great finals replayed ball by ball, and one funny moment from sport every day.</p></header><div class="gtiles three-up"><a class="gt"${addAttribute(`${base}laughs.html`, "href")} style="--c:#F2A900"><span class="gt-ic">${unescapeHTML(icon("laughs", 44))}</span><span class="gt-tx"><b>Laugh of the Day</b><small>One hand-picked funny moment from sport, every day.</small></span></a><a class="gt"${addAttribute(`${base}call-it.html`, "href")} style="--c:#0F1E36"><span class="gt-ic">${unescapeHTML(icon("call-it", 44))}</span><span class="gt-tx"><b>Call It, then watch it</b><small>Call the next five overs of a real final, then watch them ball by ball.</small></span></a><a class="gt"${addAttribute(`${base}call-it-football.html`, "href")} style="--c:#C8102E"><span class="gt-ic">${unescapeHTML(icon("call-it-football", 44))}</span><span class="gt-tx"><b>Call It: Football</b><small>Call the rest of a great final, then watch the goals go in.</small></span></a></div><header class="sh" style="margin-top:34px"><h2>Ball-by-ball replays</h2></header><div class="three tight">${R.map(({ r, v, p }) => renderTemplate`<a class="story"${addAttribute(`${base}replays/${r.slug}.html`, "href")}>${p && renderTemplate`<figure class="sfig"><img${addAttribute(p.src, "src")}${addAttribute(p.alt, "alt")} loading="lazy" width="800" height="450"><figcaption>${p.credit}</figcaption></figure>`}<span class="kick">${v}</span><h3>${r.title}</h3><p>${r.teaser}</p></a>`)}</div>` })}`;
}, "/home/claude/sportingbrain/source/src/pages/watch.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/watch.astro";
var $$url = "/watch.html";
// \0virtual:astro:page:src/pages/watch@_@astro
var page = () => watch_exports;
export { page };
