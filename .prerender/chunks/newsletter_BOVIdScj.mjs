import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_Cqf3cu7R.mjs";
import { t as renderScript } from "./editorial_CA9FmRQi.mjs";
import { t as D } from "./content_6vITlJRi.mjs";
import { t as FLASHBACKS } from "./flashbacks_C9iOEUpR.mjs";
// src/pages/newsletter.astro
var newsletter_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Newsletter,
	file: () => $$file,
	url: () => $$url
});
var $$Newsletter = createComponent(($$result, $$props, $$slots) => {
	const base = "/sportingbrain".replace(/\/?$/, "/");
	const r = D.SB_ROUNDUP;
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "The Daily Brain: the smartest sports email in your inbox | SportingBrain",
		"description": "Every morning: today's Call It, a Flashback, On This Day, one stat to win an argument with, and what to watch. Free.",
		"wide": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="nl"><div class="nl-hero card"><span class="tag" style="background:var(--gold);color:#14254a">The Daily Brain</span><h1>Sport, properly, before your first coffee.</h1><p class="teaser">One email, every morning, five minutes. Free. It's the only time we ask for any details, and all we ask for is your email address.</p><a class="btn gold nl-open"${addAttribute(`https://tally.so/r/${D.SB_NEWSLETTER_FORM}`, "href")} target="_blank" rel="noopener">Sign me up</a><p class="small">No spam, never sold or shared, unsubscribe in one click. Under 13? Ask a parent to sign up.</p></div><h2>What's in it</h2><div class="nl-grid"><div class="card"><b>🎯 Today's Call It</b><p>The frozen moment from a real match. Make your call before you've had breakfast.</p></div><div class="card"><b>📼 Flashback</b><p>One forgotten moment, told properly.</p></div><div class="card"><b>📅 On This Day</b><p>The best of what happened in sport on today's date.</p></div><div class="card"><b>📊 One stat</b><p>A number to win an argument with.</p></div><div class="card"><b>📺 What to watch</b><p>The fixtures that matter today, men's and women's.</p></div><div class="card"><b>😏 Fridays: the Cynical Round-Up</b><p>The week in sport, with an eye-roll. Labelled satire.</p></div></div><h2>A taste of this week's issues</h2><div class="nl-sample card"><p class="small">Sample, Monday 23 November 2026</p><p><b>📼 Flashback:</b> ${FLASHBACKS[0].title}. ${FLASHBACKS[0].standfirst}</p><p><b>😏 The Round-Up:</b> ${r.headline}.</p><p><b>📊 One stat:</b> 555. The number of consecutive matches Jahangir Khan won between 1981 and 1986.</p><p><a${addAttribute(`${base}call-it.html`, "href")}>Play today's Call It →</a></p></div></section>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/newsletter.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/newsletter.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/newsletter.astro";
var $$url = "/sportingbrain/newsletter.html";
// \0virtual:astro:page:src/pages/newsletter@_@astro
var page = () => newsletter_exports;
export { page };
