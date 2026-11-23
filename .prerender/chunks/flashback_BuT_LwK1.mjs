import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_Cqf3cu7R.mjs";
import { t as D } from "./content_6vITlJRi.mjs";
import { t as FLASHBACKS } from "./flashbacks_C9iOEUpR.mjs";
// src/pages/flashback.astro
var flashback_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Flashback,
	file: () => $$file,
	url: () => $$url
});
var $$Flashback = createComponent(($$result, $$props, $$slots) => {
	const base = "/sportingbrain".replace(/\/?$/, "/");
	const list = [...FLASHBACKS].sort((a, b) => (a.date || a.when.match(/\d{4}/)[0]) > (b.date || b.when.match(/\d{4}/)[0]) ? 1 : -1);
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Flashback: the forgotten moments of sport | SportingBrain",
		"description": "The moments sport forgot, told properly: Dick, Kerr Ladies, the 1904 marathon, Jahangir Khan's 555, Major Taylor and more.",
		"wide": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="sec"><h2>Flashback</h2></div><p class="teaser" style="max-width:60ch">Not the ones you already know. The moments sport forgot, told properly, with the numbers and the sources.</p><div class="fb-strip" role="list">${list.map((f) => renderTemplate`<a role="listitem"${addAttribute(`${base}flashback/${f.id}.html`, "href")}><b>${(f.date || f.when).match(/\d{4}/)[0]}</b><span>${f.sport}</span></a>`)}</div><div class="listgrid">${list.map((f) => renderTemplate`<article class="card photo-card">${D.SB_PHOTO(f.sport, 800) && renderTemplate`<img class="ph"${addAttribute(D.SB_PHOTO(f.sport, 800), "src")} alt="" loading="lazy">`}<div class="pc-body"><span class="tag"${addAttribute(`background:${D.SB_SPORT_COLOURS[f.sport] || "#1F3864"}`, "style")}>${f.sport} · ${f.when}</span><div class="title">${f.title}</div><p class="teaser">${f.standfirst}</p></div><a class="stretch"${addAttribute(`${base}flashback/${f.id}.html`, "href")}${addAttribute(`Read: ${f.title}`, "aria-label")}></a></article>`)}</div>` })}`;
}, "/home/claude/sportingbrain/source/src/pages/flashback.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/flashback.astro";
var $$url = "/sportingbrain/flashback.html";
// \0virtual:astro:page:src/pages/flashback@_@astro
var page = () => flashback_exports;
export { page };
