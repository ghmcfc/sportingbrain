import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, g as renderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
// src/pages/which-sport.astro
var which_sport_exports = /* @__PURE__ */ __exportAll({
	default: () => $$WhichSport,
	file: () => $$file,
	url: () => $$url
});
var $$WhichSport = createComponent(($$result, $$props, $$slots) => {
	const to = "/".replace(/\/?$/, "/") + "kids/which-sport.html";
	return renderTemplate`<html lang="en-GB"><head><meta charset="utf-8"><meta name="robots" content="noindex"><link rel="canonical"${addAttribute(to, "href")}><meta http-equiv="refresh"${addAttribute(`0;url=${to}`, "content")}><title>Moved to the Kids Zone</title>${renderHead($$result)}</head><body><a${addAttribute(to, "href")}>This game has moved to the Kids Zone.</a></body></html>`;
}, "/home/claude/sportingbrain/source/src/pages/which-sport.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/which-sport.astro";
var $$url = "/which-sport.html";
// \0virtual:astro:page:src/pages/which-sport@_@astro
var page = () => which_sport_exports;
export { page };
