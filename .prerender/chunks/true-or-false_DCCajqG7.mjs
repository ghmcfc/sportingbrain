import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { c as renderComponent, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_HiHdV6xW.mjs";
// src/pages/true-or-false.astro
var true_or_false_exports = /* @__PURE__ */ __exportAll({
	default: () => $$TrueOrFalse,
	file: () => $$file,
	url: () => $$url
});
var $$TrueOrFalse = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "True or False | SportingBrain",
		"description": "Sporting facts and fibs. Can you tell which is which?",
		"page": "tf"
	})}`;
}, "/home/claude/sportingbrain/source/src/pages/true-or-false.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/true-or-false.astro";
var $$url = "/true-or-false.html";
// \0virtual:astro:page:src/pages/true-or-false@_@astro
var page = () => true_or_false_exports;
export { page };
