import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_Cqf3cu7R.mjs";
import "./content_6vITlJRi.mjs";
// src/pages/credits.astro
var credits_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Credits,
	file: () => $$file,
	url: () => $$url
});
var $$Credits = createComponent(($$result, $$props, $$slots) => {
	const P = Object.entries(globalThis.SB_PHOTOS).filter(([k], i, a) => a.findIndex((x) => x[1][0] === globalThis.SB_PHOTOS[k][0]) === i);
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Photo credits | SportingBrain",
		"description": "Credits for the photographs used on SportingBrain.",
		"page": "credits"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pg-head"><h1>Photo credits</h1><p>Our photographs come from Wikimedia Commons and are used under their free licences. Each link goes to the photo's page, which shows its licence. Thank you to every photographer.</p></header><ul class="credits">${P.map(([k, p]) => renderTemplate`<li><b>${p[2]}</b>, by ${p[1]}. <a${addAttribute(`https://commons.wikimedia.org/wiki/File:${encodeURIComponent(p[0])}`, "href")} target="_blank" rel="noopener">Photo page and licence</a></li>`)}</ul><p class="pg-note">Data: Cricsheet (Open Data Commons Attribution Licence). Clips in Laugh of the Day belong to their owners and play in YouTube's own player.</p>` })}`;
}, "/home/claude/sportingbrain/source/src/pages/credits.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/credits.astro";
var $$url = "/sportingbrain/credits.html";
// \0virtual:astro:page:src/pages/credits@_@astro
var page = () => credits_exports;
export { page };
