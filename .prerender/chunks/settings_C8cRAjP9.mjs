import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_Cqf3cu7R.mjs";
import { t as renderScript } from "./editorial_CA9FmRQi.mjs";
// src/pages/settings.astro
var settings_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Settings,
	file: () => $$file,
	url: () => $$url
});
var $$Settings = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Your settings | SportingBrain",
		"description": "Choose how SportingBrain looks and behaves: reminders, display, cookies and your game history.",
		"page": "settings"
	}, { "default": async ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pg-head"><h1>Your settings</h1><p>Everything here is saved on this device only. We don't have accounts, and we never see your scores.</p></header><section class="pg-card set-list"><h2>Reminders and tips</h2><label><input type="checkbox" data-k="tips_off"> Turn off tips and reminders (welcome message, newsletter invitation)</label><label><input type="checkbox" data-k="streak_banner_off"> Hide the "streak ends at midnight" banner</label><h2>Display</h2><label><input type="checkbox" data-k="dark" data-c="dark"> Dark mode</label><label><input type="checkbox" data-k="dys" data-c="dyslexic"> Dyslexia-friendly font</label><label><input type="checkbox" data-k="reduce_motion" data-c="reduce-motion"> Reduce motion</label><label><input type="checkbox" data-k="big_text" data-c="big-text"> Larger text</label><h2>Add to your home screen</h2><p id="a2hs">Open SportingBrain like an app, one tap from your home screen. <button class="btn ghost" id="a2hsBtn" hidden>Add SportingBrain</button></p><p class="pg-note" id="a2hsHow">iPhone or iPad: tap the Share button in Safari, then <b>Add to Home Screen</b>. Android: open the browser menu, then <b>Add to Home screen</b> or <b>Install app</b>.</p><h2>Cookies and advertising</h2><p>We only use cookies for advertising and statistics after you agree. <button class="btn ghost" id="cookieBtn">Cookie settings</button></p><h2>Newsletter</h2><p>Every email has a one-click unsubscribe link at the bottom.</p><h2>Your game history</h2><p>Streaks, scores, badges, your XIs and your Ground Hopper stamps are kept in this browser.</p><button class="btn ghost" id="clearAll">Clear my game history</button><p class="pg-note" id="msg" aria-live="polite"></p></section>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/settings.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/settings.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/settings.astro";
var $$url = "/sportingbrain/settings.html";
// \0virtual:astro:page:src/pages/settings@_@astro
var page = () => settings_exports;
export { page };
