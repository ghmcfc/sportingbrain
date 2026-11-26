import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_CmGXGesc.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { t as $$Base } from "./Base_BwtY1iqR.mjs";
import { t as renderScript } from "./editorial_EDQVPNOA.mjs";
import { n as SPORTS_DAY, r as THIRTY_DAYS } from "./games_C3d5Ac21.mjs";
// src/pages/sports-day.astro
var sports_day_exports = /* @__PURE__ */ __exportAll({
	default: () => $$SportsDay,
	file: () => $$file,
	url: () => $$url
});
var $$SportsDay = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Sports Day at Home and the 30-day challenge | SportingBrain",
		"description": "Eight sports day events for the garden or the park with a printable scorecard, plus a 30-day get-moving challenge for the whole family.",
		"page": "sportsday"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pg-head"><h1>Sports Day at Home</h1><p>Eight events you can run in a garden, a park or a hallway, with things you already own. Print the scorecard, pick teams and go. Then try the 30-day challenge.</p></header><div class="pg-btns no-print" style="margin:0 0 16px"><button class="btn gold" onclick="window.print()">Print the pack</button></div><section class="pg-card"><h2>The events</h2><ol>${SPORTS_DAY.map(([t, d]) => renderTemplate`<li><b>${t}.</b> ${d}</li>`)}</ol><p class="pg-note">Grown-ups: pick a safe, clear space and keep an eye on younger ones. Points idea: 3 for first, 2 for second, 1 for everyone who takes part.</p></section><section class="pg-card"><h2>Scorecard</h2><table class="sd-table"><thead><tr><th>Event</th><th>Name</th><th>Name</th><th>Name</th><th>Name</th></tr></thead><tbody>${SPORTS_DAY.map(([t]) => renderTemplate`<tr><td>${t}</td><td></td><td></td><td></td><td></td></tr>`)}<tr><td><b>Total</b></td><td></td><td></td><td></td><td></td></tr></tbody></table></section><section class="pg-card print-break"><h2>The 30-day challenge</h2><p>One small thing a day. Tick it off when it's done. Your ticks stay on this device.</p><p class="pg-step" id="tc" aria-live="polite"></p><div class="track" id="track">${THIRTY_DAYS.map((t, k) => renderTemplate`<label><input type="checkbox"${addAttribute(k, "data-k")}><b>${k + 1}</b><span>${t}</span></label>`)}</div></section>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/sports-day.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/sports-day.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/sports-day.astro";
var $$url = "/sports-day.html";
// \0virtual:astro:page:src/pages/sports-day@_@astro
var page = () => sports_day_exports;
export { page };
