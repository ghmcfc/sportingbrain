import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_CmGXGesc.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { r as PLAY, t as $$Base } from "./Base_BwtY1iqR.mjs";
// src/pages/more.astro
var more_exports = /* @__PURE__ */ __exportAll({
	default: () => $$More,
	file: () => $$file,
	url: () => $$url
});
var $$More = createComponent(($$result, $$props, $$slots) => {
	const base = "/".replace(/\/?$/, "/");
	const G = [
		["Play", [
			[
				"play.html",
				`All ${PLAY.length} games`,
				"Every game on SportingBrain, daily and weekly."
			],
			[
				"connections.html",
				"Connections: Sport",
				"Sixteen names, four groups. New every day."
			],
			[
				"call-it.html",
				"Call It",
				"A real match, frozen. Call what happens next."
			],
			[
				"this-week.html",
				"This Week's Quiz",
				"Five questions on the week in sport."
			],
			[
				"pub-quiz.html",
				"Pub and Club Quiz",
				"Four rounds with answers, free to print."
			],
			[
				"archive.html",
				"Archive",
				"Play the puzzles you missed."
			]
		]],
		["Read and watch", [
			[
				"read.html",
				"Read",
				"True stories, Flashback and the week in sport."
			],
			[
				"flashback.html",
				"Flashback",
				"Forgotten stories from sport's past, told properly."
			],
			[
				"on-this-day.html",
				"On This Day",
				"What happened in sport on this date."
			],
			[
				"sports.html",
				"Sport guides",
				"How every sport works, in plain English."
			],
			[
				"watch.html",
				"Watch",
				"Replays and the Laugh of the Day."
			],
			[
				"round-up.html",
				"The Cynical Round-Up",
				"The week in sport, with an eye-roll. Satire."
			]
		]],
		["For you", [
			[
				"colours.html",
				"Your Colours",
				"Pick your team. It goes on every score you share."
			],
			[
				"newsletter.html",
				"The Weekly Brain",
				"The week's hardest questions, every Friday. Free."
			],
			[
				"app.html",
				"Get the app",
				"SportingBrain on your home screen. Free, no app store."
			],
			[
				"kids.html",
				"Kids Zone",
				"Sports games for 6 to 12-year-olds. No ads."
			],
			[
				"gift-guide.html",
				"Sports gifts",
				"Christmas gift ideas for every kind of sports fan."
			],
			[
				"settings.html",
				"Your settings",
				"Dark mode, reminders and your data."
			]
		]]
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "More from SportingBrain: every game, story and guide",
		"description": "Everything on SportingBrain in one place: all the games, Flashback stories, On This Day, sport guides, the newsletter, the Kids Zone and gifts.",
		"page": "more"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pg-head"><h1>More from SportingBrain</h1><p>Everything that isn't today's games, in one place.</p></header>${G.map(([h, items]) => renderTemplate`<section class="blk"><header class="sh"><h2>${h}</h2></header><div class="ps-groups">${items.map(([u, t, d]) => renderTemplate`<a${addAttribute(base + u, "href")}><b>${t}</b><span>${d}</span></a>`)}</div></section>`)}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/more.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/more.astro";
var $$url = "/more.html";
// \0virtual:astro:page:src/pages/more@_@astro
var page = () => more_exports;
export { page };
