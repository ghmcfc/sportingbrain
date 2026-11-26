import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { C as unescapeHTML, b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_CmGXGesc.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { a as createAstro, t as $$Base } from "./Base_BwtY1iqR.mjs";
import { t as $$AdSlot } from "./AdSlot_NgYEwbda.mjs";
import { t as D } from "./content_Dic6TXw9.mjs";
// src/pages/stories/[id].astro
var _id__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Id,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://sportingbrain.com");
function getStaticPaths() {
	return D.SB_STORIES.map((s) => ({
		params: { id: s.id },
		props: { s }
	}));
}
var $$Id = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Id;
	const { s } = Astro.props;
	const base = "/".replace(/\/?$/, "/");
	const col = D.SB_SPORT_COLOURS[s.sport] || "#1F3864";
	const credit = D.SB_CREDIT(s.sport);
	const img = D.SB_PHOTO(s.sport, 1200);
	const others = D.SB_STORIES.filter((x) => x.id !== s.id).slice(0, 3);
	const ld = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: s.title,
		description: s.teaser,
		publisher: {
			"@type": "Organization",
			name: "SportingBrain"
		}
	};
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": `${s.title} | SportingBrain`,
		"description": s.teaser,
		"image": credit ? img : void 0,
		"type": "article"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<article class="article">${img && renderTemplate`<img class="lead-img"${addAttribute(img, "src")}${addAttribute(s.sport, "alt")}>`}${credit && renderTemplate`<p class="photo-credit">Photo: ${credit.what}. <a${addAttribute(credit.url, "href")} target="_blank" rel="noopener">${credit.by} / Wikimedia Commons</a></p>`}<span class="tag"${addAttribute(`background:${col};margin-top:14px`, "style")}>${s.sport}</span><h1>${s.title}</h1><p class="teaser" style="font-size:1.15rem">${s.teaser}</p>${s.body.map((p) => renderTemplate`<p>${p}</p>`)}<button class="btn ghost"${addAttribute(`${s.title}: ${s.teaser}`, "data-share-text")}>Share this story</button><div class="sec"><h2>Read next</h2></div><div class="next3">${others.map((x) => renderTemplate`<a${addAttribute(`${base}stories/${x.id}.html`, "href")}><span>${x.emoji}</span>${x.title}</a>`)}</div></article><script type="application/ld+json">${unescapeHTML(JSON.stringify(ld))}<\/script>${renderComponent($$result, "AdSlot", $$AdSlot, { "name": "article_end" })}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/stories/[id].astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/stories/[id].astro";
var $$url = "/stories/[id].html";
// \0virtual:astro:page:src/pages/stories/[id]@_@astro
var page = () => _id__exports;
export { page };
