import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, g as renderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
// src/pages/the-grid.astro
var the_grid_exports = /* @__PURE__ */ __exportAll({
	default: () => $$TheGrid,
	file: () => $$file,
	url: () => $$url
});
var $$TheGrid = createComponent(($$result, $$props, $$slots) => {
	const to = "/".replace(/\/?$/, "/") + "kids/the-grid.html";
	return renderTemplate`<html lang="en-GB"><head><meta charset="utf-8"><meta name="robots" content="noindex"><link rel="canonical"${addAttribute(to, "href")}><meta http-equiv="refresh"${addAttribute(`0;url=${to}`, "content")}><title>Moved to the Kids Zone</title>${renderHead($$result)}</head><body><a${addAttribute(to, "href")}>This game has moved to the Kids Zone.</a></body></html>`;
}, "/home/claude/sportingbrain/source/src/pages/the-grid.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/the-grid.astro";
var $$url = "/the-grid.html";
// \0virtual:astro:page:src/pages/the-grid@_@astro
var page = () => the_grid_exports;
export { page };
