import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_HiHdV6xW.mjs";
import { t as WEEK } from "./week_DDMEiJpo.mjs";
import { t as FLASHBACKS } from "./flashbacks_BkymNGeb.mjs";
import { t as GUIDES } from "./guides_wX4Wgl8Y.mjs";
import { t as D } from "./content_C08_KHGP.mjs";
import { t as photoFor } from "./photos_CEFIZU4w.mjs";
// src/pages/read.astro
var read_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Read,
	file: () => $$file,
	url: () => $$url
});
var $$Read = createComponent(($$result, $$props, $$slots) => {
	const base = "/".replace(/\/?$/, "/");
	const ph = (t, s, i, v) => photoFor(t, s, i, v);
	const W = WEEK.stories.slice(0, 4).map((s, i) => ({
		s,
		p: ph(s.title + " " + s.body, s.sport, i, s.venue)
	}));
	const F = FLASHBACKS.slice(0, 6).map((f, i) => ({
		f,
		p: ph(f.title + " " + f.standfirst + " " + (f.body || []).join(" "), f.sport, i, f.venue)
	}));
	const G = [
		"football",
		"cricket",
		"rugby-union",
		"tennis",
		"golf",
		"formula-1",
		"darts",
		"netball"
	].map((id) => GUIDES.find((g) => g.id === id)).filter(Boolean).map((g) => ({
		g,
		img: D.SB_PHOTO(g.name, 800),
		c: D.SB_CREDIT(g.name)
	}));
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Read: This Week, Flashback, On This Day and sport guides | SportingBrain",
		"description": "This Week in Sport, Flashback, On This Day, guides to every sport and the Cynical Round-Up.",
		"page": "read",
		"wide": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="art-head"><h1>Read</h1><p class="art-stand">This week's stories with their sources, forgotten moments told properly, and guides to every sport.</p></header><section class="blk"><header class="sh"><h2>This Week in Sport</h2><a${addAttribute(`${base}this-week.html`, "href")}>The full edition</a></header><div class="read-grid"><a class="story lead"${addAttribute(`${base}this-week.html#stories`, "href")}>${W[0].p && renderTemplate`<figure class="sfig"><img${addAttribute(W[0].p.src, "src")}${addAttribute(W[0].p.alt, "alt")} width="800" height="450"><figcaption>${W[0].p.credit}</figcaption></figure>`}<span class="kick">${W[0].s.sport}</span><h3>${W[0].s.title}</h3><p>${W[0].s.body.slice(0, 220).replace(/\s\S*$/, "")}…</p></a><div class="story-list">${W.slice(1).map(({ s, p }) => renderTemplate`<a class="story sm"${addAttribute(`${base}this-week.html#stories`, "href")}>${p && renderTemplate`<figure class="sfig"><img${addAttribute(p.src, "src")}${addAttribute(p.alt, "alt")} loading="lazy" width="800" height="450"></figure>`}<span class="kick">${s.sport}</span><h3>${s.title}</h3></a>`)}</div></div></section><section class="blk"><header class="sh"><h2>Flashback</h2><a${addAttribute(`${base}flashback.html`, "href")}>All ${FLASHBACKS.length}</a></header><div class="three tight">${F.slice(0, 3).map(({ f, p }) => renderTemplate`<a class="story"${addAttribute(`${base}flashback/${f.id}.html`, "href")}>${p && renderTemplate`<figure class="sfig"><img${addAttribute(p.src, "src")}${addAttribute(p.alt, "alt")} loading="lazy" width="800" height="450"><figcaption>${p.credit}</figcaption></figure>`}<span class="kick">${f.sport}, ${(f.date || f.when).match(/\d{4}/)[0]}</span><h3>${f.title}</h3><p>${f.standfirst}</p></a>`)}</div></section><section class="blk"><header class="sh"><h2>Christmas gift guide</h2><a${addAttribute(`${base}gift-guide.html`, "href")}>See the guide</a></header><p>Gifts for every sports fan: darts boards, books worth reading, garden games and more.</p></section><section class="blk"><header class="sh"><h2>Sport guides</h2><a${addAttribute(`${base}sports.html`, "href")}>All ${GUIDES.length}</a></header><div class="gtiles">${G.map(({ g, img }) => renderTemplate`<a class="story guide-card"${addAttribute(`${base}sports/${g.id}.html`, "href")}>${img && renderTemplate`<figure class="sfig"><img${addAttribute(img, "src")}${addAttribute(`${g.name}`, "alt")} loading="lazy" width="800" height="450"></figure>`}<h3>${g.name}</h3><p>${g.line}</p></a>`)}</div></section><div class="three"><section><header class="sh"><h2>On This Day</h2><a${addAttribute(`${base}on-this-day.html`, "href")}>Today</a></header><p>What happened in sport on today's date, through the years, with a guess-the-year game.</p></section><section><header class="sh"><h2>The Cynical Round-Up</h2><a${addAttribute(`${base}round-up.html`, "href")}>Read it</a></header><a class="ru-mini"${addAttribute(`${base}round-up.html`, "href")}><span class="satire">Satire. Tongue firmly in cheek.</span><h3 class="ru-h">${D.SB_ROUNDUP.headline}</h3></a></section><section><header class="sh"><h2>The Weekly Brain</h2><a${addAttribute(`${base}newsletter.html`, "href")}>Sign up</a></header><p>The week's five hardest questions, the best Call It moment and a forgotten story. Every Friday, free.</p></section></div>` })}`;
}, "/home/claude/sportingbrain/source/src/pages/read.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/read.astro";
var $$url = "/read.html";
// \0virtual:astro:page:src/pages/read@_@astro
var page = () => read_exports;
export { page };
