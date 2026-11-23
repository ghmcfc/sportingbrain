import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { c as renderComponent, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_Cqf3cu7R.mjs";
// src/pages/daily.astro
var daily_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Daily,
	file: () => $$file,
	url: () => $$url
});
var $$Daily = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Beat the Brain: today's sports puzzle | SportingBrain",
		"description": "Five questions across every sport and a cheeky AI rival to beat. New every day.",
		"page": "daily"
	})}`;
}, "/home/claude/sportingbrain/source/src/pages/daily.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/daily.astro";
var $$url = "/sportingbrain/daily.html";
// \0virtual:astro:page:src/pages/daily@_@astro
var page = () => daily_exports;
export { page };
