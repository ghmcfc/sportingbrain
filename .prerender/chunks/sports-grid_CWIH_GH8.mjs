import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { S as unescapeHTML, b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_HiHdV6xW.mjs";
import { t as renderScript } from "./editorial_yLEYGdBR.mjs";
import { t as $$AdSlot } from "./AdSlot_Bo3SLqIO.mjs";
// src/data/grid.js
var CLUBS = [
	[
		"Arsenal",
		["gunners"],
		"London",
		"Emirates Stadium",
		[
			"league",
			"facup",
			"lcup",
			"euro",
			"ever"
		]
	],
	[
		"Aston Villa",
		["villa"],
		"Midlands",
		"Villa Park",
		[
			"league",
			"facup",
			"lcup",
			"euro",
			"ucl",
			"park"
		]
	],
	[
		"Birmingham City",
		["birmingham", "blues"],
		"Midlands",
		"St Andrew's @ Knighthead Park",
		["lcup", "park"]
	],
	[
		"Blackburn Rovers",
		["blackburn"],
		"North West",
		"Ewood Park",
		[
			"league",
			"facup",
			"lcup",
			"park"
		]
	],
	[
		"Blackpool",
		[],
		"North West",
		"Bloomfield Road",
		["facup"]
	],
	[
		"Bolton Wanderers",
		["bolton"],
		"North West",
		"Toughsheet Community Stadium",
		["facup"]
	],
	[
		"Brentford",
		[],
		"London",
		"Gtech Community Stadium",
		[]
	],
	[
		"Brighton and Hove Albion",
		[
			"brighton",
			"brighton & hove albion",
			"seagulls"
		],
		"South",
		"Amex Stadium",
		["bird"]
	],
	[
		"Bristol City",
		[],
		"South West",
		"Ashton Gate",
		["bird"]
	],
	[
		"Burnley",
		[],
		"North West",
		"Turf Moor",
		["league", "facup"]
	],
	[
		"Cardiff City",
		["cardiff", "bluebirds"],
		"Wales",
		"Cardiff City Stadium",
		["facup", "bird"]
	],
	[
		"Charlton Athletic",
		["charlton"],
		"London",
		"The Valley",
		["facup"]
	],
	[
		"Chelsea",
		[],
		"London",
		"Stamford Bridge",
		[
			"league",
			"facup",
			"lcup",
			"euro",
			"ucl",
			"ever"
		]
	],
	[
		"Cheltenham Town",
		["cheltenham"],
		"South West",
		"Whaddon Road",
		["bird"]
	],
	[
		"Coventry City",
		["coventry"],
		"Midlands",
		"Coventry Building Society Arena",
		["facup"]
	],
	[
		"Crystal Palace",
		["palace", "eagles"],
		"London",
		"Selhurst Park",
		[
			"facup",
			"park",
			"bird"
		]
	],
	[
		"Derby County",
		["derby"],
		"Midlands",
		"Pride Park",
		[
			"league",
			"facup",
			"park"
		]
	],
	[
		"Everton",
		["toffees"],
		"North West",
		"Hill Dickinson Stadium",
		[
			"league",
			"facup",
			"euro",
			"ever"
		]
	],
	[
		"Fulham",
		[],
		"London",
		"Craven Cottage",
		[]
	],
	[
		"Grimsby Town",
		["grimsby"],
		"Lincolnshire",
		"Blundell Park",
		["park"]
	],
	[
		"Huddersfield Town",
		["huddersfield"],
		"Yorkshire",
		"Kirklees Stadium",
		["league", "facup"]
	],
	[
		"Ipswich Town",
		["ipswich"],
		"East",
		"Portman Road",
		[
			"league",
			"facup",
			"euro"
		]
	],
	[
		"Leeds United",
		["leeds"],
		"Yorkshire",
		"Elland Road",
		[
			"league",
			"facup",
			"lcup",
			"euro"
		]
	],
	[
		"Leicester City",
		["leicester", "foxes"],
		"Midlands",
		"King Power Stadium",
		[
			"league",
			"facup",
			"lcup"
		]
	],
	[
		"Liverpool",
		["reds"],
		"North West",
		"Anfield",
		[
			"league",
			"facup",
			"lcup",
			"euro",
			"ucl",
			"ever"
		]
	],
	[
		"Luton Town",
		["luton"],
		"East",
		"Kenilworth Road",
		["lcup"]
	],
	[
		"Manchester City",
		["man city"],
		"North West",
		"Etihad Stadium",
		[
			"league",
			"facup",
			"lcup",
			"euro",
			"ucl"
		]
	],
	[
		"Manchester United",
		["man utd", "man united"],
		"North West",
		"Old Trafford",
		[
			"league",
			"facup",
			"lcup",
			"euro",
			"ucl",
			"ever"
		]
	],
	[
		"Middlesbrough",
		["boro"],
		"North East",
		"Riverside Stadium",
		["lcup"]
	],
	[
		"Millwall",
		[],
		"London",
		"The Den",
		[]
	],
	[
		"Newcastle United",
		["newcastle", "magpies"],
		"North East",
		"St James' Park",
		[
			"league",
			"facup",
			"lcup",
			"euro",
			"park",
			"bird"
		]
	],
	[
		"Norwich City",
		["norwich", "canaries"],
		"East",
		"Carrow Road",
		["lcup", "bird"]
	],
	[
		"Nottingham Forest",
		["forest", "nottm forest"],
		"Midlands",
		"City Ground",
		[
			"league",
			"facup",
			"lcup",
			"euro",
			"ucl"
		]
	],
	[
		"Notts County",
		[],
		"Midlands",
		"Meadow Lane",
		["facup", "bird"]
	],
	[
		"Oldham Athletic",
		["oldham"],
		"North West",
		"Boundary Park",
		["park"]
	],
	[
		"Oxford United",
		["oxford"],
		"South",
		"Kassam Stadium",
		["lcup"]
	],
	[
		"Plymouth Argyle",
		["plymouth"],
		"South West",
		"Home Park",
		["park"]
	],
	[
		"Port Vale",
		[],
		"Midlands",
		"Vale Park",
		["park"]
	],
	[
		"Portsmouth",
		["pompey"],
		"South",
		"Fratton Park",
		[
			"league",
			"facup",
			"park"
		]
	],
	[
		"Preston North End",
		["preston"],
		"North West",
		"Deepdale",
		["league", "facup"]
	],
	[
		"Queens Park Rangers",
		["qpr"],
		"London",
		"Loftus Road",
		["lcup"]
	],
	[
		"Sheffield United",
		[
			"sheff utd",
			"sheffield utd",
			"blades"
		],
		"Yorkshire",
		"Bramall Lane",
		["league", "facup"]
	],
	[
		"Sheffield Wednesday",
		[
			"sheff wed",
			"wednesday",
			"owls"
		],
		"Yorkshire",
		"Hillsborough",
		[
			"league",
			"facup",
			"lcup",
			"bird"
		]
	],
	[
		"Southampton",
		["saints"],
		"South",
		"St Mary's Stadium",
		["facup"]
	],
	[
		"Stockport County",
		["stockport"],
		"North West",
		"Edgeley Park",
		["park"]
	],
	[
		"Stoke City",
		["stoke"],
		"Midlands",
		"bet365 Stadium",
		["lcup"]
	],
	[
		"Sunderland",
		[],
		"North East",
		"Stadium of Light",
		["league", "facup"]
	],
	[
		"Swansea City",
		["swansea", "swans"],
		"Wales",
		"Swansea.com Stadium",
		["lcup", "bird"]
	],
	[
		"Swindon Town",
		["swindon"],
		"South West",
		"County Ground",
		["lcup", "bird"]
	],
	[
		"Tottenham Hotspur",
		["tottenham", "spurs"],
		"London",
		"Tottenham Hotspur Stadium",
		[
			"league",
			"facup",
			"lcup",
			"euro",
			"ever"
		]
	],
	[
		"Tranmere Rovers",
		["tranmere"],
		"North West",
		"Prenton Park",
		["park"]
	],
	[
		"West Bromwich Albion",
		[
			"west brom",
			"wba",
			"albion"
		],
		"Midlands",
		"The Hawthorns",
		[
			"league",
			"facup",
			"lcup"
		]
	],
	[
		"West Ham United",
		["west ham", "hammers"],
		"London",
		"London Stadium",
		["facup", "euro"]
	],
	[
		"Wigan Athletic",
		["wigan"],
		"North West",
		"Brick Community Stadium",
		["facup"]
	],
	[
		"Wolverhampton Wanderers",
		["wolves", "wolverhampton"],
		"Midlands",
		"Molineux",
		[
			"league",
			"facup",
			"lcup"
		]
	],
	[
		"Wycombe Wanderers",
		["wycombe"],
		"South",
		"Adams Park",
		["park"]
	]
];
var CATS = {
	league: [
		"Champions of England",
		"Won the English top flight at least once (old First Division or Premier League)",
		"honour"
	],
	facup: [
		"FA Cup winners",
		"Won the FA Cup at least once",
		"honour"
	],
	lcup: [
		"League Cup winners",
		"Won the League Cup at least once",
		"honour"
	],
	euro: [
		"European trophy",
		"Won a major UEFA club competition",
		"honour"
	],
	ucl: [
		"Kings of Europe",
		"Won the European Cup or Champions League",
		"honour"
	],
	ever: [
		"Premier League ever-present",
		"In every Premier League season since 1992-93",
		"honour"
	],
	London: [
		"London club",
		"Based in London",
		"place"
	],
	"North West": [
		"North West club",
		"Based in the North West of England",
		"place"
	],
	Midlands: [
		"Midlands club",
		"Based in the Midlands",
		"place"
	],
	Yorkshire: [
		"Yorkshire club",
		"Based in Yorkshire",
		"place"
	],
	"North East": [
		"North East club",
		"Based in the North East",
		"place"
	],
	park: [
		"\"Park\" ground",
		"Home ground has \"Park\" in its name",
		"quirk"
	],
	bird: [
		"Bird nickname",
		"Main nickname is a bird: Magpies, Canaries, Owls, Swans and so on",
		"quirk"
	],
	founder: [
		"Football League founders",
		"One of the 12 founder members of the Football League in 1888",
		"honour"
	],
	plwin: [
		"Premier League winners",
		"Won the Premier League (from 1992-93)",
		"honour"
	],
	united: [
		"\"United\" in the name",
		"Club name includes United",
		"quirk"
	],
	city: [
		"\"City\" in the name",
		"Club name includes City",
		"quirk"
	],
	town: [
		"\"Town\" in the name",
		"Club name includes Town",
		"quirk"
	],
	roam: [
		"Wanderers or Rovers",
		"Club name includes Wanderers or Rovers",
		"quirk"
	],
	south: [
		"Southern club",
		"Based in the South or South West of England",
		"place"
	],
	stadium: [
		"\"Stadium\" ground",
		"Home ground (2025-26) has \"Stadium\" in its name",
		"quirk"
	]
};
var FOUNDERS = [
	"Aston Villa",
	"Blackburn Rovers",
	"Bolton Wanderers",
	"Burnley",
	"Derby County",
	"Everton",
	"Notts County",
	"Preston North End",
	"Stoke City",
	"West Bromwich Albion",
	"Wolverhampton Wanderers"
];
var PL_WINNERS = [
	"Manchester United",
	"Blackburn Rovers",
	"Arsenal",
	"Chelsea",
	"Manchester City",
	"Leicester City",
	"Liverpool"
];
for (const c of CLUBS) {
	if (PL_WINNERS.includes(c[0])) c[4].push("plwin");
	if (FOUNDERS.includes(c[0])) c[4].push("founder");
	if (/\bUnited\b/.test(c[0])) c[4].push("united");
	if (/\bCity\b/.test(c[0])) c[4].push("city");
	if (/\bTown\b/.test(c[0])) c[4].push("town");
	if (/\bStadium\b/.test(c[3])) c[4].push("stadium");
	if (/\b(Wanderers|Rovers)\b/.test(c[0])) c[4].push("roam");
	if (c[2] === "South" || c[2] === "South West") c[4].push("south");
}
// src/pages/sports-grid.astro
var sports_grid_exports = /* @__PURE__ */ __exportAll({
	default: () => $$SportsGrid,
	file: () => $$file,
	url: () => $$url
});
var $$SportsGrid = createComponent(($$result, $$props, $$slots) => {
	const has = (c, k) => c[2] === k || c[4].includes(k);
	const H = Object.keys(CATS).filter((k) => CATS[k][2] === "honour"), O = Object.keys(CATS).filter((k) => CATS[k][2] !== "honour");
	const combos = (a, n) => n === 0 ? [[]] : a.flatMap((x, i) => combos(a.slice(i + 1), n - 1).map((r) => [x, ...r]));
	const GRIDS = [];
	for (const r of combos(H, 3)) for (const c of combos(O, 3)) if (r.every((x) => c.every((y) => CLUBS.filter((cl) => has(cl, x) && has(cl, y)).length >= 2))) GRIDS.push([r, c]);
	const DATA = {
		clubs: CLUBS.map((c) => [
			c[0],
			c[1],
			c[2],
			c[4]
		]),
		cats: CATS,
		grids: GRIDS
	};
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Sports Grid: name the club that fits both | SportingBrain",
		"description": "Nine squares. Each one needs an English club that fits its row and its column. One club per square, nine guesses, a new grid every day.",
		"page": "sportsgrid"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pg-head"><h1>Sports Grid</h1><p>Tap a square and name a club that fits both its row and its column. Nine guesses, and each club can only be used once. Records run to the end of the 2024-25 season. A new grid every day.</p></header><div id="vs"></div><section class="sgrid-wrap" id="sg" aria-live="polite"></section><datalist id="sgNames">${CLUBS.map((c) => renderTemplate`<option${addAttribute(c[0], "value")}></option>`)}</datalist>${renderComponent($$result, "AdSlot", $$AdSlot, { "name": "game_result" })}<p class="pg-note">${GRIDS.length} possible grids from ${CLUBS.length} clubs. Every square has at least two right answers.</p><script id="sgData" type="application/json">${unescapeHTML(JSON.stringify(DATA))}<\/script>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/sports-grid.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/sports-grid.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/sports-grid.astro";
var $$url = "/sports-grid.html";
// \0virtual:astro:page:src/pages/sports-grid@_@astro
var page = () => sports_grid_exports;
export { page };
