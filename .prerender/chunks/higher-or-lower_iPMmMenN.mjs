import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { c as renderComponent, m as renderTemplate } from "./server_CmGXGesc.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { t as $$Base } from "./Base_BwtY1iqR.mjs";
// src/pages/higher-or-lower.astro
var higher_or_lower_exports = /* @__PURE__ */ __exportAll({
	default: () => $$HigherOrLower,
	file: () => $$file,
	url: () => $$url
});
var $$HigherOrLower = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Higher or Lower: the sports stats game | SportingBrain",
		"description": "Is the next sports stat higher or lower? Keep going until you get one wrong.",
		"page": "hl"
	})}`;
}, "/home/claude/sportingbrain/source/src/pages/higher-or-lower.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/higher-or-lower.astro";
var $$url = "/higher-or-lower.html";
// \0virtual:astro:page:src/pages/higher-or-lower@_@astro
var page = () => higher_or_lower_exports;
export { page };
