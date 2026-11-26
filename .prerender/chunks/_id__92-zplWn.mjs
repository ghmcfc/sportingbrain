import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { C as unescapeHTML, b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_CmGXGesc.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { a as createAstro, t as $$Base } from "./Base_BwtY1iqR.mjs";
import { t as renderScript } from "./editorial_EDQVPNOA.mjs";
import { t as $$AdSlot } from "./AdSlot_NgYEwbda.mjs";
import { t as D } from "./content_Dic6TXw9.mjs";
import { t as FLASHBACKS } from "./flashbacks_BkymNGeb.mjs";
import { t as photoFor } from "./photos_DGkK6est.mjs";
// src/pages/flashback/[id].astro
var _id__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Id,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://sportingbrain.com");
function getStaticPaths() {
	return FLASHBACKS.map((f) => ({
		params: { id: f.id },
		props: { f }
	}));
}
var $$Id = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Id;
	const { f } = Astro.props;
	const base = "/".replace(/\/?$/, "/");
	D.SB_CREDIT(f.sport);
	D.SB_PHOTO(f.sport, 1600);
	D.SB_SPORT_COLOURS[f.sport];
	const year = (f.date || "").slice(0, 4) || (f.when.match(/\d{4}/) || [""])[0];
	const others = FLASHBACKS.filter((x) => x.id !== f.id).slice(0, 3).map((o) => ({
		o,
		ph: photoFor(o.title + " " + (o.body || []).join(" "), o.sport, 0, o.venue)
	}));
	const ph = photoFor(f.title + " " + f.standfirst + " " + (f.body || []).join(" "), f.sport, 0, f.venue);
	const ld = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: f.title,
		description: f.standfirst,
		about: f.sport,
		publisher: {
			"@type": "Organization",
			name: "SportingBrain"
		}
	};
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": `${f.title} | Flashback | SportingBrain`,
		"description": f.standfirst,
		"image": ph ? new URL(ph.src, Astro.site).href : void 0,
		"type": "article",
		"wide": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<article class="fb"><header class="art-head"><span class="kick">Flashback · ${f.sport} · ${year}</span><h1>${f.title}</h1><p class="art-stand">${f.standfirst}</p><p class="art-meta">${f.when} · <span${addAttribute(year, "data-yearsago")}></span></p></header>${ph && renderTemplate`<figure class="art-fig"><img${addAttribute(ph.src, "src")}${addAttribute(ph.alt, "alt")} width="1600" height="900"><figcaption>${ph.credit}</figcaption></figure>`}<section class="fb-nums" aria-label="The numbers">${f.numbers.map((n) => renderTemplate`<div class="fb-num"><b${addAttribute(n[0], "data-count")}>${n[0]}</b><small>${n[1]}</small></div>`)}</section><div class="fb-grid"><div class="fb-body">${f.body.map((p) => renderTemplate`<p>${p}</p>`)}<div class="fb-after"><b>What happened next</b><p>${f.after}</p></div><button class="btn ghost"${addAttribute(`Flashback: ${f.title}. ${f.standfirst}`, "data-share-text")}>Share this Flashback</button></div><aside class="fb-time card" aria-label="Timeline"><b>Timeline</b><ol class="tl">${f.timeline.map((t, k) => renderTemplate`<li${addAttribute(`--d:${k * 120}ms`, "style")}><span>${t[0]}</span>${t[1]}</li>`)}</ol></aside></div><section class="fb-src"><b>Sources</b><ul>${f.sources.map((s) => renderTemplate`<li><a${addAttribute(s[1], "href")} rel="noopener" target="_blank">${s[0]}</a></li>`)}</ul></section><div class="sec"><h2>More flashbacks</h2><a${addAttribute(`${base}flashback.html`, "href")}>All</a></div><div class="three tight">${others.map(({ o, ph }) => renderTemplate`<a class="story"${addAttribute(`${base}flashback/${o.id}.html`, "href")}>${ph && renderTemplate`<figure class="sfig"><img${addAttribute(ph.src, "src")}${addAttribute(ph.alt, "alt")} loading="lazy" width="800" height="450"></figure>`}<span class="kick">${o.sport}</span><h3>${o.title}</h3><p>${o.standfirst}</p></a>`)}</div></article><script type="application/ld+json">${unescapeHTML(JSON.stringify(ld))}<\/script>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/flashback/[id].astro?astro&type=script&index=0&lang.ts")}${renderComponent($$result, "AdSlot", $$AdSlot, { "name": "article_end" })}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/flashback/[id].astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/flashback/[id].astro";
var $$url = "/flashback/[id].html";
// \0virtual:astro:page:src/pages/flashback/[id]@_@astro
var page = () => _id__exports;
export { page };
