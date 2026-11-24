import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_HiHdV6xW.mjs";
import { t as D } from "./content_C08_KHGP.mjs";
// src/pages/stories.astro
var stories_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Stories,
	file: () => $$file,
	url: () => $$url
});
var $$Stories = createComponent(($$result, $$props, $$slots) => {
	const base = "/".replace(/\/?$/, "/");
	const col = (s) => D.SB_SPORT_COLOURS[s] || "#1F3864";
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "True sports stories | SportingBrain",
		"description": "Remarkable true stories from every sport: comebacks, firsts, underdogs and heroes.",
		"wide": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="sec"><h1>True sports stories</h1></div><div class="listgrid">${D.SB_STORIES.map((s) => renderTemplate`<article class="card photo-card">${D.SB_PHOTO(s.sport, 800) && renderTemplate`<img class="ph"${addAttribute(D.SB_PHOTO(s.sport, 800), "src")}${addAttribute(s.sport, "alt")} loading="lazy">`}<div class="pc-body"><span class="tag"${addAttribute(`background:${col(s.sport)}`, "style")}>${s.sport}</span><div class="title">${s.emoji} ${s.title}</div><p class="teaser">${s.teaser}</p></div><a class="stretch"${addAttribute(`${base}stories/${s.id}.html`, "href")}${addAttribute(`Read: ${s.title}`, "aria-label")}></a></article>`)}</div>` })}`;
}, "/home/claude/sportingbrain/source/src/pages/stories.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/stories.astro";
var $$url = "/stories.html";
// \0virtual:astro:page:src/pages/stories@_@astro
var page = () => stories_exports;
export { page };
