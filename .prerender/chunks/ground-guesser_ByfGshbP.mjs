import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { S as unescapeHTML, b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_Cqf3cu7R.mjs";
import { t as renderScript } from "./editorial_CA9FmRQi.mjs";
import { t as $$AdSlot } from "./AdSlot_YzCgxnYl.mjs";
import { n as VENUES, t as venues_default } from "./venues_DA5n52Va.mjs";
// src/pages/ground-guesser.astro
var ground_guesser_exports = /* @__PURE__ */ __exportAll({
	default: () => $$GroundGuesser,
	file: () => $$file,
	url: () => $$url
});
var $$GroundGuesser = createComponent(($$result, $$props, $$slots) => {
	const slug = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
	const G = VENUES.map((v) => ({
		k: slug(v[0]),
		v
	})).filter((x) => venues_default[x.k]).map(({ k, v }) => ({
		k,
		name: v[1],
		alt: v[2],
		sport: v[3],
		place: v[4],
		known: v[5],
		file: venues_default[k].file,
		opened: venues_default[k].opened,
		by: venues_default[k].author,
		lic: venues_default[k].licence,
		src: venues_default[k].source
	}));
	const sports = [...new Set(G.map((g) => g.sport))];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Ground Guesser: name the stadium from a close-up | SportingBrain",
		"description": `${G.length} real grounds and venues: football, cricket, rugby, tennis, golf, racing and F1. Start zoomed right in, type your answer, and name them in as few clues as you can.`,
		"page": "ground"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pg-head"><h1>Ground Guesser</h1><p>A real photo of a real ground, starting zoomed right in. Type your answer whenever you think you know it. Every clue you need costs you a point. ${G.length} grounds and venues across ${sports.length} sports.</p></header><div id="vs"></div><div class="gg-modes" role="tablist" aria-label="Mode"><button role="tab" data-mode="daily" aria-selected="true">Today's five</button><button role="tab" data-mode="endless" aria-selected="false">Endless</button><button role="tab" data-mode="collection" aria-selected="false">My grounds</button></div><div class="gg-sport" id="ggSport" hidden><label>Sport <select id="ggSel"><option value="">Every sport</option>${sports.map((s) => renderTemplate`<option>${s}</option>`)}</select></label></div><section class="pg-card" id="gg" aria-live="polite"></section><datalist id="ggNames">${[...new Set(G.map((g) => g.name))].sort().map((n) => renderTemplate`<option${addAttribute(n, "value")}></option>`)}</datalist>${renderComponent($$result, "AdSlot", $$AdSlot, { "name": "game_result" })}<p class="pg-note">Photos from Wikimedia Commons under free licences, credited after every ground. Opening years from Wikidata.</p><script id="ggData" type="application/json">${unescapeHTML(JSON.stringify(G))}<\/script>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/ground-guesser.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/ground-guesser.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/ground-guesser.astro";
var $$url = "/sportingbrain/ground-guesser.html";
// \0virtual:astro:page:src/pages/ground-guesser@_@astro
var page = () => ground_guesser_exports;
export { page };
