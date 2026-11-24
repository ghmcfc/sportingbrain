import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { S as unescapeHTML, b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { n as amz, t as $$Base } from "./Base_HiHdV6xW.mjs";
// src/data/giftguide.js
var CATS = [
	["all", "Everything"],
	["football", "Football"],
	["cricket", "Cricket"],
	["darts", "Darts and snooker"],
	["quiz", "Quiz lovers"],
	["books", "Books"],
	["garden", "Garden and park"],
	["stocking", "Stocking fillers"]
];
var TOP = [
	[
		"Winmau Blade 6 dartboard",
		"Winmau Blade 6 dartboard",
		"the darts fan",
		"A proper bristle board, the kind used in pubs and leagues. If they've only ever thrown at a cheap paper board, this is the gift they'll use every week.",
		"darts",
		"dartboard"
	],
	[
		"Subbuteo",
		"Subbuteo",
		"Boxing Day",
		"Flick-to-kick table football, played since the 1940s. Still the best way to settle a family argument about who is better at football.",
		"football",
		"pitch"
	],
	[
		"Wisden Cricketers' Almanack",
		"Wisden Cricketers Almanack",
		"the cricket obsessive",
		"The yellow almanack published every year since 1864. A whole season of scores, records and essays in one book.",
		"cricket",
		"book"
	],
	[
		"Quiz buzzers",
		"quiz buzzer set",
		"hosting Christmas",
		"Game-show buzzers with lights and sounds, so nobody can argue about who answered first. Pair them with our free Pub and Club Quiz.",
		"quiz",
		"buzzer"
	],
	[
		"Inverting the Pyramid",
		"Inverting the Pyramid Jonathan Wilson",
		"the tactics nerd",
		"Jonathan Wilson's history of football tactics. The book that made a generation of fans talk about formations.",
		"books",
		"book"
	]
];
var SECTIONS = [
	{
		id: "football",
		title: "For the football fan",
		icon: "ball",
		items: [
			[
				"Football tactics board",
				"football tactics board magnetic",
				"armchair managers",
				"Magnetic pieces and a pitch to draw on. For picking teams and arguing about the back four.",
				"football"
			],
			[
				"Table football",
				"table football",
				"games rooms",
				"A bar-style table with rods and spinning players. Fast, loud and good for all ages.",
				"football"
			],
			[
				"Pop-up goals",
				"pop up football goals garden",
				"kids and the park",
				"Two goals that spring open and fold flat into a bag.",
				"football garden"
			],
			[
				"Size 5 football",
				"size 5 football",
				"everyone",
				"A full-size match ball for adults and over-12s.",
				"football garden"
			],
			[
				"Football ground guide books",
				"football grounds guide book",
				"groundhoppers",
				"Every stadium in the leagues, with how to get there and what it is like inside.",
				"football books"
			],
			[
				"Football stadium jigsaws",
				"football stadium jigsaw",
				"quiet afternoons",
				"Famous grounds as 1000-piece puzzles.",
				"football"
			],
			[
				"Referee kit",
				"referee whistle cards set",
				"the one who knows the rules",
				"Whistle, cards and notebook for park games and five-a-side.",
				"football stocking"
			]
		]
	},
	{
		id: "cricket",
		title: "For the cricket fan",
		icon: "bat",
		items: [
			[
				"Kwik Cricket set",
				"Kwik Cricket set",
				"garden Tests",
				"Plastic bat, ball and stumps. Safe for gardens, beaches and windows.",
				"cricket garden"
			],
			[
				"Wooden garden cricket set",
				"garden cricket set wooden",
				"summer barbecues",
				"A wooden bat and stumps for back-garden cricket.",
				"cricket garden"
			],
			[
				"Cricket books",
				"cricket book",
				"long winter evenings",
				"Histories and memoirs to fill the gap until the new season.",
				"cricket books"
			],
			[
				"Cricket ball",
				"cricket ball leather",
				"the player",
				"A leather ball for nets practice.",
				"cricket stocking"
			]
		]
	},
	{
		id: "darts",
		title: "For darts and snooker fans",
		icon: "board",
		items: [
			[
				"Dartboard cabinet",
				"dartboard cabinet",
				"a smart home setup",
				"Holds the board, keeps score on a board inside the doors and protects the wallpaper.",
				"darts"
			],
			[
				"Tungsten darts",
				"tungsten darts set",
				"improving players",
				"Slimmer and heavier than brass darts, so they group more tightly.",
				"darts"
			],
			[
				"Oche mat",
				"darts oche mat",
				"home practice",
				"Marks the throwing line at the correct distance and saves the carpet.",
				"darts"
			],
			[
				"Darts flights and stems",
				"darts flights stems set",
				"stocking filler",
				"Spares they'll always need. Cheap and genuinely useful.",
				"darts stocking"
			],
			[
				"Mini snooker table",
				"mini snooker table",
				"the kitchen table",
				"A table-top snooker set with balls, cues and triangle.",
				"darts"
			]
		]
	},
	{
		id: "quiz",
		title: "For quiz lovers",
		icon: "buzzer",
		items: [
			[
				"Sports quiz books",
				"sports quiz book",
				"car journeys",
				"Thousands of questions, from easy to impossible.",
				"quiz books stocking"
			],
			[
				"Mini whiteboards and pens",
				"mini whiteboards for quiz",
				"quiz nights",
				"Teams write answers and hold them up. No paper to collect or mark.",
				"quiz"
			],
			[
				"Guinness World Records",
				"Guinness World Records book",
				"record nerds",
				"The yearly book of records, with a big sport section.",
				"quiz books"
			],
			[
				"Trivial Pursuit",
				"Trivial Pursuit",
				"family night",
				"The classic general knowledge board game, sport included.",
				"quiz"
			]
		]
	},
	{
		id: "books",
		title: "Sports books worth reading",
		icon: "book",
		items: [
			[
				"Open, by Andre Agassi",
				"Open Andre Agassi",
				"anyone, sport fan or not",
				"One of the most honest sports memoirs ever written.",
				"books"
			],
			[
				"The Numbers Game",
				"The Numbers Game Chris Anderson David Sally",
				"the stats fan",
				"What football data really tells us, and what it does not.",
				"books football"
			],
			[
				"Moneyball, by Michael Lewis",
				"Moneyball Michael Lewis",
				"business-minded fans",
				"How a baseball team used numbers to beat richer rivals.",
				"books"
			],
			[
				"Fever Pitch, by Nick Hornby",
				"Fever Pitch Nick Hornby",
				"lifelong supporters",
				"What it feels like to follow a team for life.",
				"books football"
			],
			[
				"Brilliant Orange, by David Winner",
				"Brilliant Orange David Winner",
				"football thinkers",
				"Dutch football, and the way the Dutch think about space.",
				"books football"
			],
			[
				"The Mixer, by Michael Cox",
				"The Mixer Michael Cox",
				"Premier League fans",
				"How Premier League tactics changed from 1992.",
				"books football"
			],
			[
				"Bounce, by Matthew Syed",
				"Bounce Matthew Syed",
				"parents of young players",
				"Talent, practice and what really makes a champion.",
				"books"
			]
		]
	},
	{
		id: "garden",
		title: "For the garden and the park",
		icon: "grass",
		items: [
			[
				"Swingball",
				"Swingball",
				"all ages",
				"Garden tennis on a pole. Easy to set up, hard to put down.",
				"garden"
			],
			[
				"Sports day set",
				"sports day race set egg and spoon sack race",
				"family parties",
				"Sacks, eggs and spoons. Use it with our free Sports Day at Home.",
				"garden"
			],
			[
				"Cones and bibs",
				"training cones and bibs",
				"organised kickabouts",
				"Mark out pitches and pick teams in seconds.",
				"garden football"
			],
			[
				"Putting mat",
				"golf putting mat",
				"golfers in winter",
				"Practise putting indoors until the clocks go forward.",
				"garden"
			],
			[
				"Gilbert rugby ball",
				"Gilbert rugby ball",
				"rugby families",
				"A name rugby players know. Pick the size for the player.",
				"garden"
			]
		]
	},
	{
		id: "stocking",
		title: "Stocking fillers",
		icon: "gift",
		items: [
			[
				"Panini sticker album and packs",
				"Panini sticker album",
				"collectors",
				"The swapping, the doubles and the one you can never find.",
				"stocking football"
			],
			[
				"Tennis balls",
				"tennis balls tube",
				"anyone with a racket",
				"A fresh tube makes all the difference.",
				"stocking garden"
			],
			[
				"Football advent calendar",
				"football advent calendar",
				"before the big day",
				"A door a day until Christmas.",
				"stocking football"
			],
			[
				"Golf balls",
				"golf balls pack",
				"the golfer",
				"They lose them, you replace them.",
				"stocking"
			]
		]
	}
];
// src/pages/gift-guide.astro
var gift_guide_exports = /* @__PURE__ */ __exportAll({
	default: () => $$GiftGuide,
	file: () => $$file,
	url: () => $$url
});
var $$GiftGuide = createComponent(($$result, $$props, $$slots) => {
	const base = "/".replace(/\/?$/, "/");
	const ICON = {
		dartboard: "<circle cx=\"24\" cy=\"24\" r=\"18\"/><circle cx=\"24\" cy=\"24\" r=\"12\"/><circle cx=\"24\" cy=\"24\" r=\"6\"/><circle cx=\"24\" cy=\"24\" r=\"1.6\" fill=\"currentColor\"/><path d=\"M24 6v36M6 24h36M11.3 11.3l25.4 25.4M36.7 11.3 11.3 36.7\"/>",
		board: "<circle cx=\"24\" cy=\"24\" r=\"17\"/><circle cx=\"24\" cy=\"24\" r=\"8\"/><path d=\"M34 8 26 22\"/><path d=\"M33 5l5 1-1 5\"/>",
		pitch: "<rect x=\"5\" y=\"10\" width=\"38\" height=\"28\" rx=\"2\"/><path d=\"M24 10v28\"/><circle cx=\"24\" cy=\"24\" r=\"5\"/><path d=\"M5 18h6v12H5M43 18h-6v12h6\"/>",
		book: "<path d=\"M8 9h13a5 5 0 0 1 5 5v26a4 4 0 0 0-4-4H8z\"/><path d=\"M40 9H29a5 5 0 0 0-5 5v26a4 4 0 0 1 4-4h12z\"/>",
		buzzer: "<path d=\"M10 36h28v5H10z\"/><path d=\"M14 36a10 10 0 0 1 20 0\"/><path d=\"M24 14v6M14 18l3 4M34 18l-3 4M24 8v2\"/>",
		ball: "<circle cx=\"24\" cy=\"24\" r=\"17\"/><path d=\"M24 15l7 5-3 8h-8l-3-8z\"/><path d=\"M24 7v8M31 20l9-3M28 28l5 8M20 28l-5 8M17 20l-9-3\"/>",
		bat: "<path d=\"M30 6l6 6-17 17-6-6z\"/><path d=\"M13 23l-6 6 6 6 6-6\"/><circle cx=\"36\" cy=\"36\" r=\"5\"/>",
		grass: "<path d=\"M4 40h40\"/><path d=\"M10 40c0-8 2-14 6-18M18 40c0-10 1-18 4-24M26 40c0-9 3-16 8-20M34 40c0-6 2-10 5-13\"/>",
		gift: "<rect x=\"7\" y=\"18\" width=\"34\" height=\"22\" rx=\"2\"/><path d=\"M5 12h38v6H5zM24 12v28\"/><path d=\"M24 12c-4-6-11-6-11-1s7 1 11 1c4 0 11 4 11-1s-7-5-11 1z\"/>"
	};
	const svg = (k) => `<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[k] || ICON.gift}</svg>`;
	const all = [...TOP.map((t) => t[0]), ...SECTIONS.flatMap((s) => s.items.map((i) => i[0]))];
	const ld = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: "Gifts for sports fans",
		itemListElement: all.map((n, i) => ({
			"@type": "ListItem",
			position: i + 1,
			name: n
		}))
	};
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Gifts for Sports Fans 2026: The Christmas Gift Guide | SportingBrain",
		"description": "The best Christmas gifts for sports fans in 2026: darts boards, Subbuteo, Wisden, quiz buzzers, sports books and stocking fillers, picked by SportingBrain.",
		"page": "gifts",
		"wide": true
	}, { "default": ($$result) => renderTemplate`<script type="application/ld+json">${unescapeHTML(JSON.stringify(ld))}<\/script>${maybeRenderHead($$result)}<header class="gg-hero"><p class="gg-kicker">Christmas 2026</p><h1>Gifts for sports fans</h1><p class="gg-stand">${all.length} presents we'd be happy to unwrap, from the dartboard they'll use every week to the book they'll still be talking about in March. Pick the fan, then pick the gift.</p><p class="gg-aff">As an Amazon Associate SportingBrain earns from qualifying purchases. It costs you nothing extra and keeps the games free. Prices change daily, so we show Amazon's live price, not ours.</p></header><nav class="gg-filter" aria-label="Show gifts for">${CATS.map(([k, t], i) => renderTemplate`<button type="button"${addAttribute(k, "data-f")}${addAttribute(i === 0 ? "true" : "false", "aria-pressed")}>${t}</button>`)}</nav><section class="gg-top" aria-labelledby="gg-top-h"><h2 id="gg-top-h">Our five favourites</h2><div class="gg-top-grid">${TOP.map(([n, q, best, why, tags, ic]) => renderTemplate`<article class="gg-card big"${addAttribute(tags, "data-tags")}><div${addAttribute(`gg-ic c-${tags.split(" ")[0]}`, "class")}>${unescapeHTML(svg(ic))}</div><div class="gg-body"><p class="gg-best">Best for ${best}</p><h3>${n}</h3><p>${why}</p><a class="gg-buy"${addAttribute(amz(q), "href")} target="_blank" rel="sponsored nofollow noopener">See it on Amazon</a></div></article>`)}</div></section>${SECTIONS.map((s) => renderTemplate`<section class="gg-sec"${addAttribute(s.id, "id")}${addAttribute(`h-${s.id}`, "aria-labelledby")}><h2${addAttribute(`h-${s.id}`, "id")}>${s.title}</h2><div class="gg-grid">${s.items.map(([n, q, best, why, tags]) => renderTemplate`<article class="gg-card"${addAttribute(tags, "data-tags")}><div${addAttribute(`gg-ic sm c-${s.id}`, "class")}>${unescapeHTML(svg(s.icon))}</div><div class="gg-body"><p class="gg-best">Best for ${best}</p><h3>${n}</h3><p>${why}</p><a class="gg-buy"${addAttribute(amz(q), "href")} target="_blank" rel="sponsored nofollow noopener">See it on Amazon</a></div></article>`)}</div></section>`)}<section class="gg-free" aria-labelledby="gg-free-h"><h2 id="gg-free-h">The free gift</h2><p>Send them today's five hardest questions and see who wins. Or host Christmas Day with our printable <a${addAttribute(`${base}pub-quiz.html`, "href")}>Pub and Club Quiz</a> and <a${addAttribute(`${base}sports-day.html`, "href")}>Sports Day at Home</a>.</p><a class="gg-buy alt"${addAttribute(`${base}daily.html`, "href")}>Play Beat the Brain</a></section><section class="gg-faq" aria-labelledby="gg-faq-h"><h2 id="gg-faq-h">Good to know</h2><details><summary>How did we choose these?</summary><p>We picked things sports fans actually use or read: the kit that gets played with all year, the books that changed how people watch the game, and games the whole family can join in. Nobody paid to be on this list.</p></details><details><summary>Why don't you show prices?</summary><p>Amazon prices change every day, especially before Christmas. Each button opens Amazon with the live price and the latest reviews, so you can compare before you buy.</p></details><details><summary>Do you make money from this page?</summary><p>Yes, a small commission from Amazon if you buy, at no extra cost to you. It helps keep SportingBrain free. We never link to betting, and there are no shop links in the Kids Zone.</p></details></section><script>
  (()=>{const bs=[...document.querySelectorAll('.gg-filter button')],cards=[...document.querySelectorAll('.gg-card')],secs=[...document.querySelectorAll('.gg-top,.gg-sec')];
  bs.forEach(b=>b.addEventListener('click',()=>{const f=b.dataset.f;bs.forEach(x=>x.setAttribute('aria-pressed',x===b?'true':'false'));
  cards.forEach(c=>c.hidden=f!=='all'&&!c.dataset.tags.split(' ').includes(f));
  secs.forEach(s=>s.hidden=![...s.querySelectorAll('.gg-card')].some(c=>!c.hidden));}));})();
  <\/script>` })}`;
}, "/home/claude/sportingbrain/source/src/pages/gift-guide.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/gift-guide.astro";
var $$url = "/gift-guide.html";
// \0virtual:astro:page:src/pages/gift-guide@_@astro
var page = () => gift_guide_exports;
export { page };
