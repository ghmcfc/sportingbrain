import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { n as createAstro, t as $$Base } from "./Base_Cqf3cu7R.mjs";
import { t as $$AdSlot } from "./AdSlot_YzCgxnYl.mjs";
import { t as GUIDES } from "./guides_wX4Wgl8Y.mjs";
import { t as D } from "./content_6vITlJRi.mjs";
// src/pages/sports/[id].astro
var _id__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Id,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://ghmcfc.github.io");
function getStaticPaths() {
	return GUIDES.map((g) => ({
		params: { id: g.id },
		props: { g }
	}));
}
var $$Id = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Id;
	const { g } = Astro.props;
	const base = "/sportingbrain".replace(/\/?$/, "/");
	const credit = D.SB_CREDIT(g.name);
	const img = D.SB_PHOTO(g.name, 1600);
	const others = GUIDES.filter((x) => x.id !== g.id).sort(() => 0).slice(0, 4);
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": `${g.name}: how it really works | SportingBrain`,
		"description": `${g.line} Rules, scoring, what the experts watch for, the greats and the big events.`,
		"image": credit ? img : void 0,
		"type": "article",
		"wide": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<article class="sg"><header class="fb-hero"${addAttribute(img ? `--hero:url('${img}')` : "", "style")}><span class="tag" style="background:var(--gold);color:#14254a">Sport guide</span><h1>${g.name}</h1><p class="fb-stand">${g.line}</p></header>${credit && renderTemplate`<p class="photo-credit">Photo: ${credit.what}. <a${addAttribute(credit.url, "href")} target="_blank" rel="noopener">${credit.by} / Wikimedia Commons</a></p>`}<nav class="sg-tabs" aria-label="Sections"><a href="#how">How it works</a><a href="#watch">What to watch for</a><a href="#greats">The greats</a><a href="#terms">Talk like an expert</a><a href="#when">When it's on</a><a href="#play">Get involved</a></nav><div class="fb-grid"><div class="fb-body"><h2 id="how">How it works</h2>${g.how.map((p) => renderTemplate`<p>${p}</p>`)}<div class="sg-score card"><b>Scoring</b><p>${g.scoring}</p></div><h3>Formats</h3><ul class="sg-list">${g.formats.map((f) => renderTemplate`<li>${f}</li>`)}</ul>${renderComponent($$result, "AdSlot", $$AdSlot, { "name": "article_mid" })}<h2 id="watch">What the experts watch for</h2><ol class="sg-watch">${g.watch.map((w) => renderTemplate`<li>${w}</li>`)}</ol><h2 id="greats">The greats</h2><div class="sg-greats">${g.greats.map((x) => renderTemplate`<div class="card"><b>${x[0]}</b><p>${x[1]}</p></div>`)}</div><h2 id="terms">Talk like an expert</h2><p class="small">Tap a term to see what it means.</p><div class="sg-terms">${g.terms.map((t) => renderTemplate`<details class="card"><summary>${t[0]}</summary><p>${t[1]}</p></details>`)}</div></div><aside class="fb-time"><div class="card" id="when"><b>When it's on</b><ul class="sg-list">${g.events.map((e) => renderTemplate`<li><b>${e[0]}</b>: ${e[1]}</li>`)}</ul></div><div class="card" id="play" style="margin-top:12px"><b>Get involved in the UK</b><ul class="sg-list">${g.uk.map((u) => renderTemplate`<li><a${addAttribute(u[1], "href")} target="_blank" rel="noopener">${u[0]}</a></li>`)}</ul></div><div class="card" style="margin-top:12px"><b>Think you know it?</b><p class="small">Try today's Beat the Brain on Expert.</p><a class="btn"${addAttribute(`${base}daily.html?level=4`, "href")}>Play on Expert</a></div></aside></div><div class="sec"><h2>More guides</h2><a${addAttribute(`${base}sports.html`, "href")}>All</a></div><div class="next3">${others.map((x) => renderTemplate`<a${addAttribute(`${base}sports/${x.id}.html`, "href")}>${x.name}</a>`)}</div></article>${renderComponent($$result, "AdSlot", $$AdSlot, { "name": "article_end" })}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/sports/[id].astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/sports/[id].astro";
var $$url = "/sportingbrain/sports/[id].html";
// \0virtual:astro:page:src/pages/sports/[id]@_@astro
var page = () => _id__exports;
export { page };
