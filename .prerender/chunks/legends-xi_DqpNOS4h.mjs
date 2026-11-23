import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, g as renderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
// src/pages/legends-xi.astro
var legends_xi_exports = /* @__PURE__ */ __exportAll({
	default: () => $$LegendsXi,
	file: () => $$file,
	url: () => $$url
});
var $$LegendsXi = createComponent(($$result, $$props, $$slots) => {
	const to = "/sportingbrain".replace(/\/?$/, "/") + "pick-your-xi.html";
	return renderTemplate`<html lang="en-GB"><head><meta charset="utf-8"><meta name="robots" content="noindex"><link rel="canonical"${addAttribute(to, "href")}><meta http-equiv="refresh"${addAttribute(`0;url=${to}`, "content")}><title>Pick Your XI</title>${renderHead($$result)}</head><body><a${addAttribute(to, "href")}>Pick Your XI has moved here.</a></body></html>`;
}, "/home/claude/sportingbrain/source/src/pages/legends-xi.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/legends-xi.astro";
var $$url = "/sportingbrain/legends-xi.html";
// \0virtual:astro:page:src/pages/legends-xi@_@astro
var page = () => legends_xi_exports;
export { page };
