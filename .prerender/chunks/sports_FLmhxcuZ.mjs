import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_Cqf3cu7R.mjs";
import { t as GUIDES } from "./guides_wX4Wgl8Y.mjs";
// src/pages/sports.astro
var sports_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Sports,
	file: () => $$file,
	url: () => $$url
});
var $$Sports = createComponent(($$result, $$props, $$slots) => {
	const base = "/sportingbrain".replace(/\/?$/, "/");
	const list = [...GUIDES].sort((a, b) => a.name.localeCompare(b.name));
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Sport guides: how every sport really works | SportingBrain",
		"description": "Proper guides to how each sport works: rules, scoring, tactics experts watch for, the greats, the big events and how to get involved in the UK.",
		"wide": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="sec"><h2>Sport guides</h2></div><p class="teaser" style="max-width:62ch">Not "the ball is round". How each sport actually works, what the experts are watching for, and the people who defined it.</p><input class="sg-filter" type="search" placeholder="Find a sport" aria-label="Find a sport" oninput="document.querySelectorAll('.sg-card').forEach(c=&gt;c.hidden=!c.dataset.n.includes(this.value.toLowerCase()))"><div class="listgrid">${list.map((g) => renderTemplate`<a class="card sg-card"${addAttribute(g.name.toLowerCase(), "data-n")}${addAttribute(`${base}sports/${g.id}.html`, "href")}><div class="big-emoji">${g.emoji}</div><div class="title">${g.name}</div><p class="teaser">${g.line}</p></a>`)}</div>` })}`;
}, "/home/claude/sportingbrain/source/src/pages/sports.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/sports.astro";
var $$url = "/sportingbrain/sports.html";
// \0virtual:astro:page:src/pages/sports@_@astro
var page = () => sports_exports;
export { page };
