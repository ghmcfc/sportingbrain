import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_HiHdV6xW.mjs";
import { t as renderScript } from "./editorial_yLEYGdBR.mjs";
// src/data/xi.js
var THEMES = [
	[
		"greatest",
		"Greatest XI",
		"The best of all time. No arguments. (There will be arguments.)"
	],
	[
		"duffers",
		"Duffers XI",
		"The ones who never quite looked the part. Affectionately."
	],
	[
		"daft-names",
		"Daft Names XI",
		"Picked on name alone. Say them out loud."
	],
	[
		"cult-heroes",
		"Cult Heroes XI",
		"Not the best. The ones you loved anyway."
	],
	[
		"funniest",
		"Funniest XI",
		"Characters, wind-up merchants and dressing-room legends."
	],
	[
		"hardest",
		"Hardest XI",
		"Nobody wants to play against this lot."
	],
	[
		"one-season",
		"One-Season Wonders XI",
		"Brilliant for one year, then gone."
	],
	[
		"haircuts",
		"Worst Haircuts XI",
		"Mullets, perms, frosted tips. Be kind."
	],
	[
		"club",
		"My Club XI",
		"The best XI your club has ever had, any era."
	],
	[
		"womens",
		"Women's XI",
		"The best women ever to play."
	],
	[
		"mixed",
		"Mixed XI",
		"Best men and women in one side."
	],
	[
		"custom",
		"Your own theme",
		"Make up the title and pick the side."
	]
];
var row = (y, xs, r) => xs.map((x) => [
	x,
	y,
	r
]);
[
	...row(71, [
		14,
		38,
		62,
		86
	], "DF"),
	...row(47, [
		14,
		38,
		62,
		86
	], "MF"),
	...row(22, [36, 64], "FW")
], [
	...row(71, [
		14,
		38,
		62,
		86
	], "DF"),
	...row(49, [
		26,
		50,
		74
	], "MF"),
	...row(22, [
		18,
		50,
		82
	], "FW")
], [
	...row(72, [
		14,
		38,
		62,
		86
	], "DF"),
	...row(56, [36, 64], "DM"),
	...row(37, [
		18,
		50,
		82
	], "AM")
], [
	...row(72, [
		26,
		50,
		74
	], "DF"),
	...row(48, [
		10,
		30,
		50,
		70,
		90
	], "MF"),
	...row(21, [36, 64], "FW")
], [
	...row(70, [
		8,
		28,
		50,
		72,
		92
	], "DF"),
	...row(46, [
		26,
		50,
		74
	], "MF"),
	...row(21, [36, 64], "FW")
], [
	...row(72, [
		26,
		50,
		74
	], "DF"),
	...row(48, [
		14,
		38,
		62,
		86
	], "MF"),
	...row(21, [
		18,
		50,
		82
	], "FW")
];
var SPORTS = [
	["football", "Football"],
	["cricket", "Cricket"],
	["rugby-union", "Rugby union"],
	["rugby-league", "Rugby league"]
];
// src/pages/pick-your-xi.astro
var pick_your_xi_exports = /* @__PURE__ */ __exportAll({
	default: () => $$PickYourXi,
	file: () => $$file,
	url: () => $$url
});
var $$PickYourXi = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Pick Your XI: greatest, duffers, daft names and more | SportingBrain",
		"description": "Pick any player for any theme: Greatest XI, Duffers XI, Daft Names XI, Cult Heroes, Funniest, Hardest. Football, cricket and both rugby codes. Share it as an image and let your mates rate it.",
		"page": "pickxi",
		"wide": true
	}, { "default": async ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pg-head"><h1>Pick Your XI</h1><p>Any player, any era, any theme. Pick a side, name a captain, then share it as an image and let your mates rate it out of ten.</p></header><section id="rateBox" hidden></section><div class="xi-step"><h2><span>1</span> Choose a theme</h2><div class="xi-themes" role="radiogroup" aria-label="Theme">${THEMES.map(([id, t, d]) => renderTemplate`<button role="radio" aria-checked="false"${addAttribute(id, "data-theme")}><b>${t}</b><small>${d}</small></button>`)}</div><label class="xi-custom" id="customWrap" hidden>Your title <input id="customTitle" maxlength="40" placeholder="e.g. Sunday League Legends XI"></label></div><div class="xi-step"><h2><span>2</span> Choose the sport</h2><div class="pg-tabs" role="group" aria-label="Sport">${SPORTS.map(([id, n]) => renderTemplate`<button aria-pressed="false"${addAttribute(id, "data-sport")}>${n}</button>`)}</div><label class="xi-form" id="formWrap">Formation <select id="formation"><option>4-4-2</option><option>4-3-3</option><option>4-2-3-1</option><option>3-5-2</option><option>5-3-2</option><option>3-4-3</option></select></label></div><div class="xi-step"><h2><span>3</span> Pick your players</h2><p class="pg-note">Tap a position and type any name. Suggestions appear as you type, but you can pick anyone at all. Have fun, be fair: no insults about real people.</p><div class="xi-board"><div id="pitch" class="xi-pitch" aria-label="Your team"></div><div class="xi-edit pg-card" id="editor" hidden><p class="pg-step" id="edPos"></p><label>Player <input id="edName" list="playerList" maxlength="40" autocomplete="off"></label><label>Why? (optional) <input id="edWhy" maxlength="80" placeholder="One line, keep it kind"></label><label class="xi-cap"><input type="checkbox" id="edCap"> Captain</label><div class="pg-btns"><button class="btn gold" id="edSave">Done</button><button class="btn ghost" id="edClear">Clear</button></div><p class="pg-note" id="edMsg" aria-live="polite"></p></div></div><datalist id="playerList"></datalist><div class="pg-form" style="margin-top:14px"><label>Manager or coach <input id="manager" maxlength="40"></label><label>Your name (shown on the card) <input id="byName" maxlength="20"></label></div></div><div class="xi-step"><h2><span>4</span> Share it</h2><p class="pg-note" id="countNote"></p><div class="pg-btns"><button class="btn gold" id="shareImg">Share as an image</button><button class="btn ghost" id="shareLink">Copy the "rate my XI" link</button><button class="btn ghost" id="resetXI">Start again</button></div><canvas id="card" width="1080" height="1350" class="xi-card" aria-label="Preview of your team card"></canvas></div>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/pick-your-xi.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/pick-your-xi.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/pick-your-xi.astro";
var $$url = "/pick-your-xi.html";
// \0virtual:astro:page:src/pages/pick-your-xi@_@astro
var page = () => pick_your_xi_exports;
export { page };
