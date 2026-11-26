import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_CmGXGesc.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { t as renderScript } from "./editorial_EDQVPNOA.mjs";
import { t as $$Kids } from "./Kids_a_rXGl2M.mjs";
// src/pages/kids/which-sport.astro
var which_sport_exports = /* @__PURE__ */ __exportAll({
	default: () => $$WhichSport,
	file: () => $$file,
	url: () => $$url
});
var $$WhichSport = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Kids", $$Kids, {
		"title": "Which Sport Are You? | SportingBrain Kids Zone",
		"description": "Six quick questions to find the sport that matches your personality.",
		"band": "older"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pg-head"><h1>Which Sport Are You?</h1><p>Six questions, no right answers. At the end you find out which sport suits you best.</p></header><section class="pg-card" id="game" aria-live="polite"></section>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/kids/which-sport.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/kids/which-sport.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/kids/which-sport.astro";
var $$url = "/kids/which-sport.html";
// \0virtual:astro:page:src/pages/kids/which-sport@_@astro
var page = () => which_sport_exports;
export { page };
