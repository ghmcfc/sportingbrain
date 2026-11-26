import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_CmGXGesc.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { t as $$Base } from "./Base_BwtY1iqR.mjs";
import { t as renderScript } from "./editorial_EDQVPNOA.mjs";
import { t as $$AdSlot } from "./AdSlot_NgYEwbda.mjs";
import { t as $$IeBand } from "./ireland_BMVB1g9z.mjs";
// src/pages/ireland/brain.astro
var brain_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Brain,
	file: () => $$file,
	url: () => $$url
});
var $$Brain = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"image": "https://sportingbrain.com/og-ireland.png",
		"title": "The Irish Brain: hard daily Irish sports quiz | SportingBrain",
		"description": "Five hard questions on Irish sport every day: GAA, rugby, football, racing, boxing, golf and more. Pick your county and share your score.",
		"page": "iebrain"
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "IeBand", $$IeBand, { "current": "brain" })}${maybeRenderHead($$result)}<div class="ie"><header class="ie-head"><p class="ga" lang="ga">Dúshlán an Lae</p><h1>The Irish Brain</h1><p>Five hard questions on Irish sport, new every day. Three Hard, then two Expert. Hurling and football, rugby, racing, boxing, the League of Ireland and the rest. No easy ones.</p></header><div id="vs"></div><section class="pg-card ie-game" id="ib" aria-live="polite"></section>${renderComponent($$result, "AdSlot", $$AdSlot, { "name": "game_result" })}<p class="ie-note">Spotted a mistake? <a data-mistake href="#">Tell us</a> and we will fix it.</p></div>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/ireland/brain.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/ireland/brain.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/ireland/brain.astro";
var $$url = "/ireland/brain.html";
// \0virtual:astro:page:src/pages/ireland/brain@_@astro
var page = () => brain_exports;
export { page };
