import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { C as unescapeHTML, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_CmGXGesc.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { t as $$Base } from "./Base_BwtY1iqR.mjs";
import { t as renderScript } from "./editorial_EDQVPNOA.mjs";
import { t as D } from "./content_Dic6TXw9.mjs";
// src/pages/on-this-day.astro
var on_this_day_exports = /* @__PURE__ */ __exportAll({
	default: () => $$OnThisDay,
	file: () => $$file,
	url: () => $$url
});
var $$OnThisDay = createComponent(($$result, $$props, $$slots) => {
	const T = [...D.SB_TODAY].sort((a, b) => a.y - b.y);
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "On This Day in sport | SportingBrain",
		"description": "What happened in sport on this day: the matches, records, births and turning points, across every sport, men's and women's.",
		"wide": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="otd"><div class="otd-head"><span class="tag" style="background:var(--gold);color:#14254a">On This Day</span><h1 id="otdTitle">On this day in sport</h1><div class="otd-nav"><button class="iconbtn dark-btn" id="otdPrev" aria-label="Previous day">◀</button><input type="date" id="otdPick" aria-label="Pick a date"><button class="iconbtn dark-btn" id="otdNext" aria-label="Next day">▶</button><button class="btn ghost" id="otdToday">Today</button></div><div class="otd-filter" id="otdFilter"></div></div><ol class="otd-list" id="otdList" aria-live="polite"></ol><div class="card otd-guess" id="otdGuess"></div><p class="small" id="otdCount"></p></section><script id="otdData" type="application/json">${unescapeHTML(JSON.stringify(T))}<\/script>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/on-this-day.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/on-this-day.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/on-this-day.astro";
var $$url = "/on-this-day.html";
// \0virtual:astro:page:src/pages/on-this-day@_@astro
var page = () => on_this_day_exports;
export { page };
