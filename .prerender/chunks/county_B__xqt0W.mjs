import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_CmGXGesc.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { t as $$Base } from "./Base_BwtY1iqR.mjs";
import { t as renderScript } from "./editorial_EDQVPNOA.mjs";
import { t as $$AdSlot } from "./AdSlot_NgYEwbda.mjs";
import { t as $$IeBand } from "./ireland_BMVB1g9z.mjs";
// src/pages/ireland/county.astro
var county_exports = /* @__PURE__ */ __exportAll({
	default: () => $$County,
	file: () => $$file,
	url: () => $$url
});
var $$County = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"image": "https://sportingbrain.com/og-ireland.png",
		"title": "Name the County: daily GAA county quiz | SportingBrain",
		"description": "Five clues to one of Ireland's 32 counties: All-Ireland history, the county ground, the nickname, the colours. Name it in as few clues as you can.",
		"page": "iecounty"
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "IeBand", $$IeBand, { "current": "county" })}${maybeRenderHead($$result)}<div class="ie"><header class="ie-head"><p class="ga" lang="ga">Cén Contae?</p><h1>Name the County</h1><p>Five clues to one of the 32 counties, hardest first: a piece of GAA history, the county ground, the nickname, the colours, then the province. The fewer clues you need, the more points you get. A wrong guess costs you a clue. New every day.</p></header><div id="vs"></div><section class="pg-card ie-game" id="nc" aria-live="polite"></section>${renderComponent($$result, "AdSlot", $$AdSlot, { "name": "game_result" })}<p class="ie-note">All 32 counties, north and south, each one coming round in turn. Spotted a mistake? <a data-mistake href="#">Tell us</a>.</p></div>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/ireland/county.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/ireland/county.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/ireland/county.astro";
var $$url = "/ireland/county.html";
// \0virtual:astro:page:src/pages/ireland/county@_@astro
var page = () => county_exports;
export { page };
