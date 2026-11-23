import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { S as unescapeHTML, b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { n as createAstro, t as $$Base } from "./Base_Cqf3cu7R.mjs";
import { t as renderScript } from "./editorial_CA9FmRQi.mjs";
import { t as $$AdSlot } from "./AdSlot_YzCgxnYl.mjs";
import { t as D } from "./content_6vITlJRi.mjs";
import { t as FLASHBACKS } from "./flashbacks_C9iOEUpR.mjs";
// src/pages/flashback/[id].astro
var _id__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Id,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://ghmcfc.github.io");
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
	const base = "/sportingbrain".replace(/\/?$/, "/");
	const credit = D.SB_CREDIT(f.sport);
	const img = D.SB_PHOTO(f.sport, 1600);
	const col = D.SB_SPORT_COLOURS[f.sport] || "#1F3864";
	const year = (f.date || "").slice(0, 4) || (f.when.match(/\d{4}/) || [""])[0];
	const others = FLASHBACKS.filter((x) => x.id !== f.id).slice(0, 3);
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
		"image": credit ? img : void 0,
		"type": "article",
		"wide": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<article class="fb"><header class="fb-hero"${addAttribute(img ? `--hero:url('${img}')` : "", "style")}><div class="fb-year" aria-hidden="true">${year}</div><span class="tag"${addAttribute(`background:${col}`, "style")}>Flashback · ${f.sport}</span><h1>${f.title}</h1><p class="fb-stand">${f.standfirst}</p><p class="fb-when">${f.when} · <span${addAttribute(year, "data-yearsago")}></span></p></header>${credit && renderTemplate`<p class="photo-credit">Photo: ${credit.what}. <a${addAttribute(credit.url, "href")} target="_blank" rel="noopener">${credit.by} / Wikimedia Commons</a></p>`}<section class="fb-nums" aria-label="The numbers">${f.numbers.map((n) => renderTemplate`<div class="fb-num"><b${addAttribute(n[0], "data-count")}>${n[0]}</b><small>${n[1]}</small></div>`)}</section><div class="fb-grid"><div class="fb-body">${f.body.map((p) => renderTemplate`<p>${p}</p>`)}<div class="fb-after"><b>What happened next</b><p>${f.after}</p></div><button class="btn ghost"${addAttribute(`Flashback: ${f.title}. ${f.standfirst}`, "data-share-text")}>Share this Flashback</button></div><aside class="fb-time card" aria-label="Timeline"><b>Timeline</b><ol class="tl">${f.timeline.map((t, k) => renderTemplate`<li${addAttribute(`--d:${k * 120}ms`, "style")}><span>${t[0]}</span>${t[1]}</li>`)}</ol></aside></div><section class="fb-src"><b>Sources</b><ul>${f.sources.map((s) => renderTemplate`<li><a${addAttribute(s[1], "href")} rel="noopener" target="_blank">${s[0]}</a></li>`)}</ul></section><div class="sec"><h2>More flashbacks</h2><a${addAttribute(`${base}flashback.html`, "href")}>All</a></div><div class="next3">${others.map((x) => renderTemplate`<a${addAttribute(`${base}flashback/${x.id}.html`, "href")}><span>📼</span>${x.title}</a>`)}</div></article><script type="application/ld+json">${unescapeHTML(JSON.stringify(ld))}<\/script>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/flashback/[id].astro?astro&type=script&index=0&lang.ts")}${renderComponent($$result, "AdSlot", $$AdSlot, { "name": "article_end" })}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/flashback/[id].astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/flashback/[id].astro";
var $$url = "/sportingbrain/flashback/[id].html";
// \0virtual:astro:page:src/pages/flashback/[id]@_@astro
var page = () => _id__exports;
export { page };
