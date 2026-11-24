import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, g as renderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
// src/pages/guess-the-sport.astro
var guess_the_sport_exports = /* @__PURE__ */ __exportAll({
	default: () => $$GuessTheSport,
	file: () => $$file,
	url: () => $$url
});
var $$GuessTheSport = createComponent(($$result, $$props, $$slots) => {
	const to = "/".replace(/\/?$/, "/") + "kids/guess-the-sport.html";
	return renderTemplate`<html lang="en-GB"><head><meta charset="utf-8"><meta name="robots" content="noindex"><link rel="canonical"${addAttribute(to, "href")}><meta http-equiv="refresh"${addAttribute(`0;url=${to}`, "content")}><title>Moved to the Kids Zone</title>${renderHead($$result)}</head><body><a${addAttribute(to, "href")}>This game has moved to the Kids Zone.</a></body></html>`;
}, "/home/claude/sportingbrain/source/src/pages/guess-the-sport.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/guess-the-sport.astro";
var $$url = "/guess-the-sport.html";
// \0virtual:astro:page:src/pages/guess-the-sport@_@astro
var page = () => guess_the_sport_exports;
export { page };
