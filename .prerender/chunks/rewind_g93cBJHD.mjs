import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_CmGXGesc.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { t as $$Base } from "./Base_BwtY1iqR.mjs";
import { t as renderScript } from "./editorial_EDQVPNOA.mjs";
// src/pages/rewind.astro
var rewind_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Rewind,
	file: () => $$file,
	url: () => $$url
});
var $$Rewind = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Grandparent Rewind: a sports quiz round for every decade | SportingBrain",
		"description": "Pick a decade from the 1950s to the 2010s and play a round about it. Best played with someone who was there.",
		"page": "rewind"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pg-head"><h1>Grandparent Rewind</h1><p>Pick a decade and play a round about it. The idea is simple: hand the phone to someone who was there, then see if they remember it better than you know it.</p></header><div class="pg-tabs" role="group" aria-label="Decade" id="dec"></div><section class="pg-card" id="game" aria-live="polite"><p>Choose a decade to start.</p></section>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/rewind.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/rewind.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/rewind.astro";
var $$url = "/rewind.html";
// \0virtual:astro:page:src/pages/rewind@_@astro
var page = () => rewind_exports;
export { page };
