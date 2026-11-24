import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { S as unescapeHTML, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_HiHdV6xW.mjs";
import { t as renderScript } from "./editorial_yLEYGdBR.mjs";
// src/data/footcall.js
var FINALS = [
	{
		id: "wc1966",
		title: "Men's World Cup final 1966",
		teams: ["England", "West Germany"],
		when: "30 July 1966",
		where: "Wembley, London",
		goals: [
			[
				"12",
				1,
				"Helmut Haller"
			],
			[
				"18",
				0,
				"Geoff Hurst"
			],
			[
				"78",
				0,
				"Martin Peters"
			],
			[
				"89",
				1,
				"Wolfgang Weber"
			],
			[
				"101",
				0,
				"Geoff Hurst"
			],
			[
				"120",
				0,
				"Geoff Hurst"
			]
		],
		end: "England won 4-2 after extra time."
	},
	{
		id: "wc1970",
		title: "Men's World Cup final 1970",
		teams: ["Brazil", "Italy"],
		when: "21 June 1970",
		where: "Estadio Azteca, Mexico City",
		goals: [
			[
				"18",
				0,
				"Pelé"
			],
			[
				"37",
				1,
				"Roberto Boninsegna"
			],
			[
				"66",
				0,
				"Gérson"
			],
			[
				"71",
				0,
				"Jairzinho"
			],
			[
				"86",
				0,
				"Carlos Alberto"
			]
		],
		end: "Brazil won 4-1."
	},
	{
		id: "wc1986",
		title: "Men's World Cup final 1986",
		teams: ["Argentina", "West Germany"],
		when: "29 June 1986",
		where: "Estadio Azteca, Mexico City",
		goals: [
			[
				"23",
				0,
				"José Luis Brown"
			],
			[
				"56",
				0,
				"Jorge Valdano"
			],
			[
				"74",
				1,
				"Karl-Heinz Rummenigge"
			],
			[
				"81",
				1,
				"Rudi Völler"
			],
			[
				"84",
				0,
				"Jorge Burruchaga"
			]
		],
		end: "Argentina won 3-2."
	},
	{
		id: "wc1998",
		title: "Men's World Cup final 1998",
		teams: ["France", "Brazil"],
		when: "12 July 1998",
		where: "Stade de France, Saint-Denis",
		goals: [
			[
				"27",
				0,
				"Zinedine Zidane"
			],
			[
				"45+1",
				0,
				"Zinedine Zidane"
			],
			[
				"90+3",
				0,
				"Emmanuel Petit"
			]
		],
		end: "France won 3-0."
	},
	{
		id: "wc2006",
		title: "Men's World Cup final 2006",
		teams: ["Italy", "France"],
		when: "9 July 2006",
		where: "Olympiastadion, Berlin",
		goals: [[
			"7",
			1,
			"Zinedine Zidane (pen)"
		], [
			"19",
			0,
			"Marco Materazzi"
		]],
		end: "1-1 after extra time. Italy won 5-3 on penalties."
	},
	{
		id: "wc2010",
		title: "Men's World Cup final 2010",
		teams: ["Spain", "Netherlands"],
		when: "11 July 2010",
		where: "Soccer City, Johannesburg",
		goals: [[
			"116",
			0,
			"Andrés Iniesta"
		]],
		end: "Spain won 1-0 after extra time."
	},
	{
		id: "wc2014",
		title: "Men's World Cup final 2014",
		teams: ["Germany", "Argentina"],
		when: "13 July 2014",
		where: "Maracanã, Rio de Janeiro",
		goals: [[
			"113",
			0,
			"Mario Götze"
		]],
		end: "Germany won 1-0 after extra time."
	},
	{
		id: "wc2018",
		title: "Men's World Cup final 2018",
		teams: ["France", "Croatia"],
		when: "15 July 2018",
		where: "Luzhniki Stadium, Moscow",
		goals: [
			[
				"18",
				0,
				"Mario Mandžukić (own goal)"
			],
			[
				"28",
				1,
				"Ivan Perišić"
			],
			[
				"38",
				0,
				"Antoine Griezmann (pen)"
			],
			[
				"59",
				0,
				"Paul Pogba"
			],
			[
				"65",
				0,
				"Kylian Mbappé"
			],
			[
				"69",
				1,
				"Mario Mandžukić"
			]
		],
		end: "France won 4-2."
	},
	{
		id: "wc2022",
		title: "Men's World Cup final 2022",
		teams: ["Argentina", "France"],
		when: "18 December 2022",
		where: "Lusail Stadium, Qatar",
		goals: [
			[
				"23",
				0,
				"Lionel Messi (pen)"
			],
			[
				"36",
				0,
				"Ángel Di María"
			],
			[
				"80",
				1,
				"Kylian Mbappé (pen)"
			],
			[
				"81",
				1,
				"Kylian Mbappé"
			],
			[
				"108",
				0,
				"Lionel Messi"
			],
			[
				"118",
				1,
				"Kylian Mbappé (pen)"
			]
		],
		end: "3-3 after extra time. Argentina won 4-2 on penalties."
	},
	{
		id: "wwc1999",
		title: "Women's World Cup final 1999",
		teams: ["USA", "China"],
		when: "10 July 1999",
		where: "Rose Bowl, Pasadena",
		goals: [],
		end: "0-0 after extra time. USA won 5-4 on penalties, Brandi Chastain scoring the winner."
	},
	{
		id: "wwc2011",
		title: "Women's World Cup final 2011",
		teams: ["Japan", "USA"],
		when: "17 July 2011",
		where: "Waldstadion, Frankfurt",
		goals: [
			[
				"69",
				1,
				"Alex Morgan"
			],
			[
				"81",
				0,
				"Aya Miyama"
			],
			[
				"104",
				1,
				"Abby Wambach"
			],
			[
				"117",
				0,
				"Homare Sawa"
			]
		],
		end: "2-2 after extra time. Japan won 3-1 on penalties."
	},
	{
		id: "wwc2015",
		title: "Women's World Cup final 2015",
		teams: ["USA", "Japan"],
		when: "5 July 2015",
		where: "BC Place, Vancouver",
		goals: [
			[
				"3",
				0,
				"Carli Lloyd"
			],
			[
				"5",
				0,
				"Carli Lloyd"
			],
			[
				"14",
				0,
				"Lauren Holiday"
			],
			[
				"16",
				0,
				"Carli Lloyd"
			],
			[
				"27",
				1,
				"Yūki Ōgimi"
			],
			[
				"52",
				1,
				"Julie Johnston (own goal)"
			],
			[
				"54",
				0,
				"Tobin Heath"
			]
		],
		end: "USA won 5-2."
	},
	{
		id: "wwc2019",
		title: "Women's World Cup final 2019",
		teams: ["USA", "Netherlands"],
		when: "7 July 2019",
		where: "Parc Olympique Lyonnais, Lyon",
		goals: [[
			"61",
			0,
			"Megan Rapinoe (pen)"
		], [
			"69",
			0,
			"Rose Lavelle"
		]],
		end: "USA won 2-0."
	},
	{
		id: "wwc2023",
		title: "Women's World Cup final 2023",
		teams: ["Spain", "England"],
		when: "20 August 2023",
		where: "Stadium Australia, Sydney",
		goals: [[
			"29",
			0,
			"Olga Carmona"
		]],
		end: "Spain won 1-0. Mary Earps saved a penalty in the second half."
	},
	{
		id: "weuro2022",
		title: "Women's Euro final 2022",
		teams: ["England", "Germany"],
		when: "31 July 2022",
		where: "Wembley, London",
		goals: [
			[
				"62",
				0,
				"Ella Toone"
			],
			[
				"79",
				1,
				"Lina Magull"
			],
			[
				"110",
				0,
				"Chloe Kelly"
			]
		],
		end: "England won 2-1 after extra time."
	},
	{
		id: "weuro2025",
		title: "Women's Euro final 2025",
		teams: ["England", "Spain"],
		when: "27 July 2025",
		where: "St. Jakob-Park, Basel",
		goals: [[
			"25",
			1,
			"Mariona Caldentey"
		], [
			"57",
			0,
			"Alessia Russo"
		]],
		end: "1-1 after extra time. England won 3-1 on penalties."
	},
	{
		id: "euro2020",
		title: "Men's Euro final 2020",
		teams: ["Italy", "England"],
		when: "11 July 2021",
		where: "Wembley, London",
		goals: [[
			"2",
			1,
			"Luke Shaw"
		], [
			"67",
			0,
			"Leonardo Bonucci"
		]],
		end: "1-1 after extra time. Italy won 3-2 on penalties."
	},
	{
		id: "euro2024",
		title: "Men's Euro final 2024",
		teams: ["Spain", "England"],
		when: "14 July 2024",
		where: "Olympiastadion, Berlin",
		goals: [
			[
				"47",
				0,
				"Nico Williams"
			],
			[
				"73",
				1,
				"Cole Palmer"
			],
			[
				"86",
				0,
				"Mikel Oyarzabal"
			]
		],
		end: "Spain won 2-1."
	},
	{
		id: "ucl1999",
		title: "Champions League final 1999",
		teams: ["Manchester United", "Bayern Munich"],
		when: "26 May 1999",
		where: "Camp Nou, Barcelona",
		goals: [
			[
				"6",
				1,
				"Mario Basler"
			],
			[
				"90+1",
				0,
				"Teddy Sheringham"
			],
			[
				"90+3",
				0,
				"Ole Gunnar Solskjær"
			]
		],
		end: "Manchester United won 2-1."
	},
	{
		id: "ucl2005",
		title: "Champions League final 2005",
		teams: ["Liverpool", "AC Milan"],
		when: "25 May 2005",
		where: "Atatürk Olympic Stadium, Istanbul",
		goals: [
			[
				"1",
				1,
				"Paolo Maldini"
			],
			[
				"39",
				1,
				"Hernán Crespo"
			],
			[
				"44",
				1,
				"Hernán Crespo"
			],
			[
				"54",
				0,
				"Steven Gerrard"
			],
			[
				"56",
				0,
				"Vladimír Šmicer"
			],
			[
				"60",
				0,
				"Xabi Alonso"
			]
		],
		end: "3-3 after extra time. Liverpool won 3-2 on penalties."
	}
];
var mins = (l) => {
	const [a, b] = String(l).split("+");
	return +a + (b ? +b / 10 : 0);
};
function buildFootMoments() {
	const out = [];
	for (const f of FINALS) {
		const pts = [0, ...f.goals.slice(0, -1).map((g) => mins(g[0]))];
		if (!f.goals.length) pts.push(45, 90);
		for (const at of pts) {
			const before = f.goals.filter((g) => mins(g[0]) <= at), after = f.goals.filter((g) => mins(g[0]) > at);
			const score = [0, 1].map((t) => before.filter((g) => g[1] === t).length);
			const clock = at === 0 ? "Kick-off" : at === 45 && !f.goals.length ? "Half-time" : at === 90 && !f.goals.length ? "90 minutes, extra time to come" : `Straight after the goal in minute ${before[before.length - 1][0]}`;
			out.push({
				f: f.id,
				at,
				clock,
				score,
				next: after.length ? after[0][1] : 2,
				more: Math.min(after.length, 3)
			});
		}
	}
	return out;
}
// src/pages/call-it-football.astro
var call_it_football_exports = /* @__PURE__ */ __exportAll({
	default: () => $$CallItFootball,
	file: () => $$file,
	url: () => $$url
});
var $$CallItFootball = createComponent(($$result, $$props, $$slots) => {
	const M = buildFootMoments();
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Call It: Football. Great finals, minute by minute | SportingBrain",
		"description": "A moment from a great World Cup, Euro or Champions League final, men's and women's. Call who scores next and how many more goals there will be.",
		"page": "callitfoot"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pg-head"><h1>Call It: Football</h1><p>A real moment from a great final. You know the score and the minute, nothing else. Make two calls, lock them in, then watch the rest of the match play out. No spoilers until it happens. A new moment every day, and practice moments whenever you want.</p></header><section class="card ci-board fc-board" id="board" aria-live="polite"></section><div class="pg-btns"><button class="btn ghost" id="practice">Practice moment</button><a class="btn ghost" href="call-it.html">Call It: Cricket</a></div><p class="pg-note">Goal times from the official match records. Extra time counts; penalty shoot-outs don't. Finals included: ${FINALS.length}, from 1966 to 2025.</p><script id="fcData" type="application/json">${unescapeHTML(JSON.stringify({
		F: FINALS,
		M
	}))}<\/script>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/call-it-football.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/call-it-football.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/call-it-football.astro";
var $$url = "/call-it-football.html";
// \0virtual:astro:page:src/pages/call-it-football@_@astro
var page = () => call_it_football_exports;
export { page };
