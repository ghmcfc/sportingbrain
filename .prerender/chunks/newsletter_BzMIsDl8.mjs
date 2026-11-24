import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_HiHdV6xW.mjs";
import { t as D } from "./content_C08_KHGP.mjs";
// src/pages/newsletter.astro
var newsletter_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Newsletter,
	file: () => $$file,
	url: () => $$url
});
var $$Newsletter = createComponent(($$result, $$props, $$slots) => {
	const base = "/".replace(/\/?$/, "/");
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "The Weekly Brain: Free Sports Quiz Email | SportingBrain",
		"description": "Every Friday: the week's five hardest sports questions, the best Call It moment, a forgotten story and the Cynical Round-Up. Free, and unsubscribe in one click.",
		"wide": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="nlp"><header class="nlp-hero"><p class="gg-kicker">Free, every Friday</p><h1>The Weekly Brain</h1><p class="nlp-stand">The five hardest sports questions of the week, in your inbox on Friday morning. Answer them before you look, then check how you did on the site.</p><form class="nlb-form big" data-nl novalidate><label class="vh" for="nlp-e">Email address</label><input id="nlp-e" type="email" name="EMAIL" autocomplete="email" placeholder="Your email address" required><input type="text" name="email_address_check" value="" tabindex="-1" autocomplete="off" class="vh" aria-hidden="true"><button type="submit" class="btn gold">Send me the Weekly Brain</button><p class="nlb-msg" role="status"></p></form><p class="nlp-small">We'll email a link to confirm, and you're only signed up once you click it. We never sell or share your email. Unsubscribe in one click. You must be 13 or over. <a${addAttribute(`${base}about.html`, "href")}>Privacy</a></p></header><h2>What's in it</h2><div class="nlp-grid"><div class="nlp-item"><h3>Five hard questions</h3><p>The week's toughest, from every sport. Answers on the site.</p></div><div class="nlp-item"><h3>The Call It moment</h3><p>The best frozen moment of the week. Would you have called it?</p></div><div class="nlp-item"><h3>Flashback</h3><p>One forgotten story from sport's past, told properly.</p></div><div class="nlp-item"><h3>The Cynical Round-Up</h3><p>The week in sport, with an eye-roll. Clearly labelled satire.</p></div><div class="nlp-item"><h3>Book of the Week</h3><p>One sports book worth your time.</p></div><div class="nlp-item"><h3>Beat this score</h3><p>A challenge to forward to the mate who thinks he knows it all.</p></div></div><p class="nlp-small">Form not working? <a${addAttribute(D.SB_NEWSLETTER_FORM, "href")} target="_blank" rel="noopener">Sign up on our email provider's page instead</a>.</p></section>` })}`;
}, "/home/claude/sportingbrain/source/src/pages/newsletter.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/newsletter.astro";
var $$url = "/newsletter.html";
// \0virtual:astro:page:src/pages/newsletter@_@astro
var page = () => newsletter_exports;
export { page };
