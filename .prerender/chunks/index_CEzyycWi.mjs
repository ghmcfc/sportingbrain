import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { S as unescapeHTML, c as renderComponent, h as maybeRenderHead, m as renderTemplate, n as templateExit, t as templateEnter } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_Cqf3cu7R.mjs";
import { t as $$AdSlot } from "./AdSlot_YzCgxnYl.mjs";
import { t as buildMoments } from "./callit_cB5Iv1ix.mjs";
// src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const M = buildMoments().map((m) => ({
		match: m.match,
		team: m.team,
		opp: m.opp,
		score: m.score,
		at: m.at,
		need: m.need,
		q: m.qs[0].q,
		innings: m.innings
	}));
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "SportingBrain: the smartest free sports site in the world",
		"description": "Call It, the daily game built on real matches. Flashback, On This Day, ball-by-ball replays, proper sport guides and the Cynical Round-Up. Free. No betting, ever.",
		"page": "home",
		"wide": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<noscript><p>SportingBrain needs JavaScript switched on to play the games.</p></noscript><template id="ad-home_leaderboard">${templateEnter($$result)}${renderComponent($$result, "AdSlot", $$AdSlot, { "name": "home_leaderboard" })}${templateExit($$result)}</template><template id="ad-home_infeed">${templateEnter($$result)}${renderComponent($$result, "AdSlot", $$AdSlot, { "name": "home_infeed" })}${templateExit($$result)}</template><script id="ciHome" type="application/json">${unescapeHTML(JSON.stringify(M))}<\/script>` })}`;
}, "/home/claude/sportingbrain/source/src/pages/index.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/index.astro";
var $$url = "/sportingbrain.html";
// \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
export { page };
