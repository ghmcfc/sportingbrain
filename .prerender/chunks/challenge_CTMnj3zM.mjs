import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { c as renderComponent, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_Cqf3cu7R.mjs";
// src/pages/challenge.astro
var challenge_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Challenge,
	file: () => $$file,
	url: () => $$url
});
var $$Challenge = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "This week's challenges | SportingBrain",
		"description": "The Weekly Brain Challenge, World Sport Wednesday and the Friday Family Challenge.",
		"page": "challenge"
	})}`;
}, "/home/claude/sportingbrain/source/src/pages/challenge.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/challenge.astro";
var $$url = "/sportingbrain/challenge.html";
// \0virtual:astro:page:src/pages/challenge@_@astro
var page = () => challenge_exports;
export { page };
