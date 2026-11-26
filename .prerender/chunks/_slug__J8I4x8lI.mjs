import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { C as unescapeHTML, b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_CmGXGesc.mjs";
import { a as wt20_2024_final_exports, c as t20wc_2024_final_exports, d as cwc_2023_final_exports, f as cwc_2019_final_exports, i as wwc_2017_final_exports, l as t20wc_2022_final_exports, m as cwc_2011_final_exports, n as wwc_2025_final_exports, o as wt20_2023_final_exports, p as cwc_2015_final_exports, r as wwc_2022_final_exports, s as wt20_2020_final_exports, t as REPLAYS, u as t20wc_2016_final_exports } from "./replays_DcOYl_rd.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { t as renderScript } from "./editorial_EDQVPNOA.mjs";
import { a as createAstro, t as $$Base } from "./Base_BwtY1iqR.mjs";
import { t as fullName } from "./cricnames_CZwpT7iv.mjs";
import { t as photoFor } from "./photos_DGkK6est.mjs";
// src/pages/replays/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://sportingbrain.com");
function getStaticPaths() {
	const feeds = /* #__PURE__ */ Object.assign({
		"../../data/feeds/cricket/cwc-2011-final.json": cwc_2011_final_exports,
		"../../data/feeds/cricket/cwc-2015-final.json": cwc_2015_final_exports,
		"../../data/feeds/cricket/cwc-2019-final.json": cwc_2019_final_exports,
		"../../data/feeds/cricket/cwc-2023-final.json": cwc_2023_final_exports,
		"../../data/feeds/cricket/t20wc-2016-final.json": t20wc_2016_final_exports,
		"../../data/feeds/cricket/t20wc-2022-final.json": t20wc_2022_final_exports,
		"../../data/feeds/cricket/t20wc-2024-final.json": t20wc_2024_final_exports,
		"../../data/feeds/cricket/wt20-2020-final.json": wt20_2020_final_exports,
		"../../data/feeds/cricket/wt20-2023-final.json": wt20_2023_final_exports,
		"../../data/feeds/cricket/wt20-2024-final.json": wt20_2024_final_exports,
		"../../data/feeds/cricket/wwc-2017-final.json": wwc_2017_final_exports,
		"../../data/feeds/cricket/wwc-2022-final.json": wwc_2022_final_exports,
		"../../data/feeds/cricket/wwc-2025-final.json": wwc_2025_final_exports
	});
	return REPLAYS.filter((r) => Object.keys(feeds).some((k) => k.endsWith(`/${r.slug}.json`))).map((r) => ({
		params: { slug: r.slug },
		props: { r }
	}));
}
var $$Slug = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const feeds = /* #__PURE__ */ Object.assign({
		"../../data/feeds/cricket/cwc-2011-final.json": cwc_2011_final_exports,
		"../../data/feeds/cricket/cwc-2015-final.json": cwc_2015_final_exports,
		"../../data/feeds/cricket/cwc-2019-final.json": cwc_2019_final_exports,
		"../../data/feeds/cricket/cwc-2023-final.json": cwc_2023_final_exports,
		"../../data/feeds/cricket/t20wc-2016-final.json": t20wc_2016_final_exports,
		"../../data/feeds/cricket/t20wc-2022-final.json": t20wc_2022_final_exports,
		"../../data/feeds/cricket/t20wc-2024-final.json": t20wc_2024_final_exports,
		"../../data/feeds/cricket/wt20-2020-final.json": wt20_2020_final_exports,
		"../../data/feeds/cricket/wt20-2023-final.json": wt20_2023_final_exports,
		"../../data/feeds/cricket/wt20-2024-final.json": wt20_2024_final_exports,
		"../../data/feeds/cricket/wwc-2017-final.json": wwc_2017_final_exports,
		"../../data/feeds/cricket/wwc-2022-final.json": wwc_2022_final_exports,
		"../../data/feeds/cricket/wwc-2025-final.json": wwc_2025_final_exports
	});
	const { r } = Astro.props;
	const m = Object.entries(feeds).find(([k]) => k.endsWith(`/${r.slug}.json`))[1].default;
	const o = m.outcome || {};
	const result = o.winner ? `${o.winner} won${o.by ? " by " + Object.entries(o.by).map(([k, v]) => `${v} ${k}`).join(" ") : ""}${o.method ? " (" + o.method + ")" : ""}${o.eliminator ? " (" + o.eliminator + " won the Super Over decider)" : ""}` : o.result === "tie" ? "Tied" : o.result || "";
	const base = "/".replace(/\/?$/, "/");
	const _feedsAll = /* #__PURE__ */ Object.assign({
		"../../data/feeds/cricket/cwc-2011-final.json": cwc_2011_final_exports,
		"../../data/feeds/cricket/cwc-2015-final.json": cwc_2015_final_exports,
		"../../data/feeds/cricket/cwc-2019-final.json": cwc_2019_final_exports,
		"../../data/feeds/cricket/cwc-2023-final.json": cwc_2023_final_exports,
		"../../data/feeds/cricket/t20wc-2016-final.json": t20wc_2016_final_exports,
		"../../data/feeds/cricket/t20wc-2022-final.json": t20wc_2022_final_exports,
		"../../data/feeds/cricket/t20wc-2024-final.json": t20wc_2024_final_exports,
		"../../data/feeds/cricket/wt20-2020-final.json": wt20_2020_final_exports,
		"../../data/feeds/cricket/wt20-2023-final.json": wt20_2023_final_exports,
		"../../data/feeds/cricket/wt20-2024-final.json": wt20_2024_final_exports,
		"../../data/feeds/cricket/wwc-2017-final.json": wwc_2017_final_exports,
		"../../data/feeds/cricket/wwc-2022-final.json": wwc_2022_final_exports,
		"../../data/feeds/cricket/wwc-2025-final.json": wwc_2025_final_exports
	});
	const _venue = (sl) => {
		const f = Object.entries(_feedsAll).find(([k]) => k.endsWith(`/${sl}.json`));
		return f ? f[1].default.venue || "" : "";
	};
	const MORE = REPLAYS.filter((x) => x.slug !== r.slug).slice(0, 3).map((x) => ({
		x,
		v: _venue(x.slug),
		p: photoFor(_venue(x.slug) + " " + x.title, "Cricket", x.slug.length)
	}));
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": (r.title + " | Replay").length <= 60 ? `${r.title} | Replay` : r.title,
		"description": `${r.teaser} Replay every ball, with the live scoreboard, worm chart and every wicket.`,
		"wide": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<article class="replay"><span class="tag" style="background:#2E7D32">Cricket replay · ball by ball</span><h1>${r.title}</h1><p class="teaser" style="font-size:1.1rem">${r.teaser}</p><p class="small">${m.venue}${m.city && !(m.venue || "").includes(m.city) ? ", " + m.city : ""} · ${new Date(m.date).toLocaleDateString("en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric"
	})} · ${m.overs} overs a side · <b data-result>${result}</b>${m.pom ? ` · Player of the match: ${m.pom.map(fullName).join(", ")}` : ""}</p><div class="rp-grid"><section class="card rp-board" aria-live="polite"><div class="rp-inns" id="rpInns"></div><div class="rp-score"><b id="rpScore">0/0</b><span id="rpOvers">0.0 overs</span></div><div id="rpNeed" class="rp-need"></div><div class="rp-bat" id="rpBat"></div><ol class="rp-feed" id="rpFeed"></ol></section><section class="card rp-chart"><div class="row" style="justify-content:space-between;flex-wrap:wrap;gap:8px"><b>Runs, ball by ball</b><div class="row" style="gap:6px"><button class="btn" id="rpPlay">▶ Play</button><select id="rpSpeed" aria-label="Speed"><option value="140">Normal</option><option value="40">Fast</option><option value="400">Slow</option></select></div></div><svg id="rpSvg" viewBox="0 0 800 360" role="img" aria-label="Worm chart of both innings"></svg><input type="range" id="rpScrub" min="0" value="0" aria-label="Scrub through the match" style="width:100%"><div class="small">Drag to any moment. Dots are wickets: tap one to jump there.</div><div class="rp-legend" id="rpLegend"></div></section></div><section class="card" style="margin-top:14px"><b>Every wicket</b><div class="rp-wkts" id="rpWkts"></div></section><p class="small" style="margin-top:12px">Data: <a href="https://cricsheet.org" rel="noopener">Cricsheet</a>, Open Data Commons Attribution License. Ball-by-ball figures may differ slightly from official scorecards.</p><div class="sec"><h2>More replays</h2></div><div class="three tight">${MORE.map(({ x, v, p }) => renderTemplate`<a class="story"${addAttribute(`${base}replays/${x.slug}.html`, "href")}>${p && renderTemplate`<figure class="sfig"><img${addAttribute(p.src, "src")}${addAttribute(p.alt, "alt")} loading="lazy" width="800" height="450"><figcaption>${p.credit}</figcaption></figure>`}<span class="kick">${v}</span><h3>${x.title}</h3><p>${x.teaser}</p></a>`)}</div></article><script id="rpData" type="application/json">${unescapeHTML(JSON.stringify(m))}<\/script>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/replays/[slug].astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/replays/[slug].astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/replays/[slug].astro";
var $$url = "/replays/[slug].html";
// \0virtual:astro:page:src/pages/replays/[slug]@_@astro
var page = () => _slug__exports;
export { page };
