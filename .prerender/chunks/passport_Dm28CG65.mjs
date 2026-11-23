import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_Cqf3cu7R.mjs";
import { t as renderScript } from "./editorial_CA9FmRQi.mjs";
// src/pages/passport.astro
var passport_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Passport,
	file: () => $$file,
	url: () => $$url
});
var $$Passport = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Ground Hopper Passport: stamp every ground you visit | SportingBrain",
		"description": "Keep a passport of every stadium, ground and venue you've been to, any sport. Saved on your device only, nothing sent to us.",
		"page": "passport"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pg-head"><h1>Ground Hopper Passport</h1><p>Every ground, stadium, course and court you've been to, any sport, any level. Add a stamp after each visit. It lives on this device only: we never see it.</p></header><form class="pg-card pg-form" id="f"><label>Ground or venue <input name="g" required maxlength="60" placeholder="e.g. Edgeley Park"></label><label>Sport <select name="s"><option>Football</option><option>Cricket</option><option>Rugby union</option><option>Rugby league</option><option>Tennis</option><option>Golf</option><option>Netball</option><option>Athletics</option><option>Horse racing</option><option>Darts</option><option>Snooker</option><option>Motorsport</option><option>Other</option></select></label><label>Date <input name="d" type="date" required></label><label>What you saw (optional) <input name="m" maxlength="60" placeholder="e.g. County v Rovers, 2-1"></label><button class="btn gold">Stamp it</button></form><div class="pg-sec"><h2>Your stamps</h2><span id="n"></span></div><div class="stamps" id="stamps"></div><div class="pg-btns"><button class="btn ghost" onclick="window.print()">Print my passport</button><button class="btn ghost" id="shr">Share my total</button></div>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/passport.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/passport.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/passport.astro";
var $$url = "/sportingbrain/passport.html";
// \0virtual:astro:page:src/pages/passport@_@astro
var page = () => passport_exports;
export { page };
