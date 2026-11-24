import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_HiHdV6xW.mjs";
// src/pages/about.astro
var about_exports = /* @__PURE__ */ __exportAll({
	default: () => $$About,
	file: () => $$file,
	url: () => $$url
});
var $$About = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "About and privacy | SportingBrain",
		"description": "Who we are, what we do and how we look after your privacy."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="article"><section class="card" style="margin-top:14px"><h1 class="title">About SportingBrain</h1><p>SportingBrain is a free daily sports hub for everyone who loves sport. A new puzzle every day, quick games, true stories, and what's happening in sport this week, across every sport, men's and women's.</p><p>The Brain is our own cartoon mascot. He sets the puzzles, plays against you, and is a terrible loser.</p><p><b>No betting. No gambling ads. Ever.</b></p></section><section class="card"><h2 class="title">Privacy, in plain English</h2><p><b>What we collect:</b> nothing, unless you sign up to The Weekly Brain newsletter. That is the only time we ask for any details, and it's just your email address. You don't need an account to play anything.</p><p><b>The newsletter:</b> we use your email address only to send you the newsletter. We never sell it or share it for marketing. The sign-up form and the emails are run for us by Brevo, a European email service that follows GDPR. You confirm your address by clicking a link before you're added. You can unsubscribe at any time with one click, and you can ask us to delete your email address whenever you like. You must be 13 or over to sign up.</p><p><b>Affiliate links:</b> as an Amazon Associate SportingBrain earns from qualifying purchases. Some links, such as those in our gift guide, go to Amazon and are marked. If you buy something, Amazon pays us a small commission at no extra cost to you. There are no affiliate links in the Kids Zone, and we never link to betting.</p><p><b>What stays on your device:</b> your scores, streaks, badges and settings are saved in your own browser so they're there next time. They never leave your device. Clearing your browser data removes them.</p><p><b>Cookies and adverts:</b> SportingBrain shows adverts from Google AdSense to keep the site free. Google and its partners may use cookies to show and measure adverts, but only after you agree in the consent message that appears on your first visit. You can change your choice at any time on the <a${addAttribute(`${base}settings.html`, "href")}>settings page</a>, or read <a href="https://policies.google.com/technologies/partner-sites" rel="noopener">how Google uses information from sites that use its services</a>. There are no adverts, no cookies and no tracking of any kind in the Kids Zone, and never any betting adverts.</p><p><b>Visitor counting:</b> we count visits with GoatCounter, which uses no cookies and collects no personal information.</p><p><b>Photos:</b> our sport photos come from Pexels, licensed for free commercial use. We never use photos of children or of famous people.</p></section><section class="card"><h2 class="title">Spotted a mistake?</h2><p>We check our facts carefully. If you think we've got one wrong, tell us and we'll fix it.</p></section></div>` })}`;
}, "/home/claude/sportingbrain/source/src/pages/about.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/about.astro";
var $$url = "/about.html";
// \0virtual:astro:page:src/pages/about@_@astro
var page = () => about_exports;
export { page };
