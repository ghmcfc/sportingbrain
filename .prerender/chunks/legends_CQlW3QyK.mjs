import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_CmGXGesc.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { t as $$Base } from "./Base_BwtY1iqR.mjs";
import { t as renderScript } from "./editorial_EDQVPNOA.mjs";
import { t as $$AdSlot } from "./AdSlot_NgYEwbda.mjs";
import { t as $$IeBand } from "./ireland_BMVB1g9z.mjs";
import { a as LEGENDS } from "./ireland_BYHEycyv.mjs";
// src/pages/ireland/legends.astro
var legends_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Legends,
	file: () => $$file,
	url: () => $$url
});
var $$Legends = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"image": "https://sportingbrain.com/og-ireland.png",
		"title": "Irish Legends: name the Irish sporting great | SportingBrain",
		"description": "Five clues to one of Ireland's sporting greats, hardest first. Hurlers, boxers, jockeys, golfers, footballers, men and women. New every day.",
		"page": "ielegends"
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "IeBand", $$IeBand, { "current": "legends" })}${maybeRenderHead($$result)}<div class="ie"><header class="ie-head"><p class="ga" lang="ga">Cé Mise?</p><h1>Irish Legends</h1><p>Five clues to one of Ireland's sporting greats, north and south, men and women. Hardest clue first. Guess after any clue: the fewer you need, the more points you get. A wrong guess costs you a clue.</p></header><div id="vs"></div><section class="pg-card ie-game" id="lg" aria-live="polite"></section>${renderComponent($$result, "AdSlot", $$AdSlot, { "name": "game_result" })}<p class="ie-note">${LEGENDS.length} legends so far, from Ronnie Delany in Melbourne to Paris 2024. Spotted a mistake? <a data-mistake href="#">Tell us</a>.</p></div>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/ireland/legends.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/ireland/legends.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/ireland/legends.astro";
var $$url = "/ireland/legends.html";
// \0virtual:astro:page:src/pages/ireland/legends@_@astro
var page = () => legends_exports;
export { page };
