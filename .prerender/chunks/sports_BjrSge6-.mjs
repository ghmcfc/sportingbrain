import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_CmGXGesc.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { t as $$Base } from "./Base_BwtY1iqR.mjs";
import { t as GUIDES } from "./guides_o27e1tSE.mjs";
import { t as D } from "./content_Dic6TXw9.mjs";
// src/pages/sports.astro
var sports_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Sports,
	file: () => $$file,
	url: () => $$url
});
var $$Sports = createComponent(($$result, $$props, $$slots) => {
	const base = "/".replace(/\/?$/, "/");
	const list = [...GUIDES].sort((a, b) => a.name.localeCompare(b.name));
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Sport guides: how every sport really works | SportingBrain",
		"description": "Proper guides to how each sport works: rules, scoring, tactics experts watch for, the greats, the big events and how to get involved in the UK.",
		"wide": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="art-head"><h1>Sport guides</h1><p class="art-stand">Not "the ball is round". How each sport actually works, what the experts are watching for, and the people who defined it.</p></header><input class="sg-filter" type="search" placeholder="Find a sport" aria-label="Find a sport" oninput="document.querySelectorAll('.sg-card').forEach(c=&gt;c.hidden=!c.dataset.n.includes(this.value.toLowerCase()))"><div class="gtiles guides-all">${list.map((g) => renderTemplate`<a class="story guide-card sg-card"${addAttribute(g.name.toLowerCase(), "data-n")}${addAttribute(`${base}sports/${g.id}.html`, "href")}><figure class="sfig"><img${addAttribute(D.SB_PHOTO(g.name, 800), "src")}${addAttribute(g.name, "alt")} loading="lazy" width="800" height="450"></figure><h3>${g.name}</h3><p>${g.line}</p></a>`)}</div>` })}`;
}, "/home/claude/sportingbrain/source/src/pages/sports.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/sports.astro";
var $$url = "/sports.html";
// \0virtual:astro:page:src/pages/sports@_@astro
var page = () => sports_exports;
export { page };
