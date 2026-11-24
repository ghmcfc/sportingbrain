import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_HiHdV6xW.mjs";
import { t as FLASHBACKS } from "./flashbacks_BkymNGeb.mjs";
import { t as photoFor } from "./photos_CEFIZU4w.mjs";
// src/pages/flashback.astro
var flashback_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Flashback,
	file: () => $$file,
	url: () => $$url
});
var $$Flashback = createComponent(($$result, $$props, $$slots) => {
	const base = "/".replace(/\/?$/, "/");
	const list = [...FLASHBACKS].sort((a, b) => (a.date || a.when.match(/\d{4}/)[0]) > (b.date || b.when.match(/\d{4}/)[0]) ? 1 : -1);
	const ph = (f) => photoFor(f.title + " " + f.standfirst + " " + (f.body || []).join(" "), f.sport, f.id.length, f.venue);
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Flashback: the forgotten moments of sport | SportingBrain",
		"description": "The moments sport forgot, told properly: Dick, Kerr Ladies, the 1904 marathon, Jahangir Khan's 555, Major Taylor and more.",
		"wide": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="art-head"><h1>Flashback</h1><p class="art-stand">Not the ones you already know. The moments sport forgot, told properly, with the numbers and the sources.</p></header><div class="fb-strip" role="list">${list.map((f) => renderTemplate`<a role="listitem"${addAttribute(`${base}flashback/${f.id}.html`, "href")}><b>${(f.date || f.when).match(/\d{4}/)[0]}</b><span>${f.sport}</span></a>`)}</div><div class="three tight">${list.map((f) => {
		const p = ph(f);
		return renderTemplate`<a class="story"${addAttribute(`${base}flashback/${f.id}.html`, "href")}>${p && renderTemplate`<figure class="sfig"><img${addAttribute(p.src, "src")}${addAttribute(p.alt, "alt")} loading="lazy" width="800" height="450"><figcaption>${p.credit}</figcaption></figure>`}<span class="kick">${f.sport} · ${f.when}</span><h3>${f.title}</h3><p>${f.standfirst}</p></a>`;
	})}</div>` })}`;
}, "/home/claude/sportingbrain/source/src/pages/flashback.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/flashback.astro";
var $$url = "/flashback.html";
// \0virtual:astro:page:src/pages/flashback@_@astro
var page = () => flashback_exports;
export { page };
