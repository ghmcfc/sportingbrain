import { S as unescapeHTML, X as AstroError, Y as UnavailableAstroGlobal, b as addAttribute, d as renderSlot, g as renderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as renderScript } from "./editorial_CA9FmRQi.mjs";
import { t as ads_default } from "./ads_D17Y6DFZ.mjs";
// node_modules/@astrojs/runtime/dist/internal/server/astro-global.js
var ASTRO_GENERATOR = `Astro v7.4.13`;
function createError(name) {
	return new AstroError({
		...UnavailableAstroGlobal,
		message: UnavailableAstroGlobal.message(name)
	});
}
function createAstro(site) {
	return {
		get site() {
			console.warn(`Astro.site inside getStaticPaths is deprecated and will be removed in a future major version of Astro. Use import.meta.env.SITE instead`);
			return site ? new URL(site) : void 0;
		},
		get generator() {
			console.warn(`Astro.generator inside getStaticPaths is deprecated and will be removed in a future major version of Astro.`);
			return ASTRO_GENERATOR;
		},
		get callAction() {
			throw createError("callAction");
		},
		get clientAddress() {
			throw createError("clientAddress");
		},
		get cookies() {
			throw createError("cookies");
		},
		get csp() {
			throw createError("csp");
		},
		get currentLocale() {
			throw createError("currentLocale");
		},
		get getActionResult() {
			throw createError("getActionResult");
		},
		get isPrerendered() {
			throw createError("isPrerendered");
		},
		get locals() {
			throw createError("locals");
		},
		get originPathname() {
			throw createError("originPathname");
		},
		get params() {
			throw createError("params");
		},
		get preferredLocale() {
			throw createError("preferredLocale");
		},
		get preferredLocaleList() {
			throw createError("preferredLocaleList");
		},
		get props() {
			throw createError("props");
		},
		get redirect() {
			throw createError("redirect");
		},
		get request() {
			throw createError("request");
		},
		get response() {
			throw createError("response");
		},
		get rewrite() {
			throw createError("rewrite");
		},
		get routePattern() {
			throw createError("routePattern");
		},
		get self() {
			throw createError("self");
		},
		get slots() {
			throw createError("slots");
		},
		get url() {
			throw createError("url");
		},
		get session() {
			throw createError("session");
		},
		get cache() {
			throw createError("cache");
		},
		get logger() {
			throw createError("logger");
		}
	};
}
var analytics_default = { goatcounter: "" };
var $$Base = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Base;
	const { title, description, page = "", wide = false, image, type = "website", noindex = false, noads = false } = Astro.props;
	const adsOn = !!ads_default.client && !noads;
	const base = "/sportingbrain".endsWith("/") ? "/sportingbrain" : "/sportingbrain/";
	const canonical = new URL(Astro.url.pathname, Astro.site).href;
	const ogImage = image || new URL(base + "og.png", Astro.site).href;
	const nav = [
		[
			"Today",
			base,
			"today"
		],
		[
			"Play",
			`${base}play.html`,
			"play"
		],
		[
			"Read",
			`${base}read.html`,
			"read"
		],
		[
			"Watch",
			`${base}watch.html`,
			"watch"
		],
		[
			"Kids",
			`${base}kids.html`,
			"kids"
		]
	];
	const path = Astro.url.pathname.replace(base, "/").replace(/\.html$/, "");
	const section = /^\/kids/.test(path) ? "kids" : /^\/(replays|laughs|watch)/.test(path) ? "watch" : /^\/(this-week|flashback|on-this-day|stories|sports|round-up|read|newsletter)/.test(path) ? "read" : path === "/" || path === "/index" ? "today" : /^\/(about|credits|settings|offline)/.test(path) ? "" : "play";
	const ld = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "SportingBrain",
		url: new URL(base, Astro.site).href,
		description: "The free daily sports hub for everyone who loves sport."
	};
	return renderTemplate`<html lang="en-GB"${addAttribute(base, "data-base")}><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><meta name="description"${addAttribute(description, "content")}>${noindex && renderTemplate`<meta name="robots" content="noindex,nofollow">`}<link rel="canonical"${addAttribute(canonical, "href")}><meta property="og:type"${addAttribute(type, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonical, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="theme-color" content="#0F1E36"><link rel="manifest"${addAttribute(`${base}manifest.webmanifest`, "href")}><link rel="apple-touch-icon"${addAttribute(`${base}assets/apple-touch-icon.png`, "href")}><link rel="icon"${addAttribute(`${base}assets/mark.svg`, "href")} type="image/svg+xml"><script type="application/ld+json">${unescapeHTML(JSON.stringify(ld))}<\/script>${adsOn && renderTemplate`<script async${addAttribute(`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ads_default.client}`, "src")} crossorigin="anonymous"><\/script>`}${adsOn && renderTemplate`<script>window.SB_ADS=true;document.addEventListener('DOMContentLoaded',()=>setTimeout(()=>document.querySelectorAll('ins.adsbygoogle:not([data-adsbygoogle-status])').forEach(()=>{try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(e){}}),50));<\/script>`}${analytics_default.goatcounter && !noads && renderTemplate`<script${addAttribute(`https://${analytics_default.goatcounter}.goatcounter.com/count`, "data-goatcounter")} async src="https://gc.zgo.at/count.js"><\/script>`}<script>if('serviceWorker' in navigator&&location.protocol==='https:')addEventListener('load',()=>navigator.serviceWorker.register(document.documentElement.dataset.base+'sw.js').catch(()=>{}));<\/script>${renderHead($$result)}</head><body><a class="skip" href="#main">Skip to content</a><header class="top"><div class="wrap"><a class="wordmark"${addAttribute(base, "href")}><span class="mark" aria-hidden="true">SB</span><span>SportingBrain</span></a><nav class="sb-tabs" aria-label="Main">${nav.map(([t, h, k]) => renderTemplate`<a${addAttribute(h, "href")}${addAttribute(section === k ? "page" : void 0, "aria-current")}>${t}</a>`)}</nav><div class="hdr-right"><button class="iconbtn" data-share-site aria-label="Share SportingBrain">Share</button><button class="iconbtn" data-dark aria-label="Switch dark mode">Dark</button></div></div></header>${renderScript($$result, "/home/claude/sportingbrain/source/src/layouts/Base.astro?astro&type=script&index=0&lang.ts")}<main${addAttribute(["wrap", { wide }], "class:list")}${addAttribute(page, "data-page")} id="main">${renderSlot($$result, $$slots["default"])}</main><footer class="site-foot"><div class="wrap wide foot-grid"><div><a class="wordmark"${addAttribute(base, "href")}><span class="mark" aria-hidden="true">SB</span><span>SportingBrain</span></a><p>The smartest free sports site in the world. Real matches, real data, stories nobody else tells. No betting, ever.</p></div><div><h2>Play</h2><a${addAttribute(`${base}play.html`, "href")}>All games</a><a${addAttribute(`${base}pub-quiz.html`, "href")}>Pub and Club Quiz</a><a${addAttribute(`${base}weekly-expert.html`, "href")}>Weekly Expert</a><a${addAttribute(`${base}call-it.html`, "href")}>Call It</a><a${addAttribute(`${base}daily.html`, "href")}>Beat the Brain</a><a${addAttribute(`${base}higher-or-lower.html`, "href")}>Higher or Lower</a><a${addAttribute(`${base}connections.html`, "href")}>Connections</a><a${addAttribute(`${base}challenge.html?c=family`, "href")}>Family challenge</a><a${addAttribute(`${base}kids.html`, "href")}>Kids Zone</a></div><div><h2>Read</h2><a${addAttribute(`${base}this-week.html`, "href")}>This Week in Sport</a><a${addAttribute(`${base}flashback.html`, "href")}>Flashback</a><a${addAttribute(`${base}on-this-day.html`, "href")}>On This Day</a><a${addAttribute(`${base}replays.html`, "href")}>Replays</a><a${addAttribute(`${base}sports.html`, "href")}>Sport guides</a><a${addAttribute(`${base}round-up.html`, "href")}>The Cynical Round-Up</a></div><div><h2>SportingBrain</h2><a${addAttribute(`${base}newsletter.html`, "href")}>The Daily Brain newsletter</a><a${addAttribute(`${base}about.html`, "href")}>About and privacy</a><a href="#" data-welcome>What is SportingBrain?</a><a href="#" data-dys>Dyslexia-friendly font</a><a${addAttribute(`${base}settings.html`, "href")}>Your settings</a><a${addAttribute(`${base}credits.html`, "href")}>Photo credits</a><a href="https://tally.so/r/zE7LVZ" data-mistake target="_blank" rel="noopener">Spotted a mistake? Tell us</a></div></div><div class="wrap wide foot-small"><p>Photos from Wikimedia Commons, credited on each page and on the Photo credits page. Cricket data from Cricsheet (Open Data Commons Attribution License). Facts checked against the sources listed on every article.</p></div></footer>${renderScript($$result, "/home/claude/sportingbrain/source/src/layouts/Base.astro?astro&type=script&index=1&lang.ts")}</body></html>`;
}, "/home/claude/sportingbrain/source/src/layouts/Base.astro", void 0);
export { createAstro as n, $$Base as t };
