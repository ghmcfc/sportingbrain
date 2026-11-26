// src/data/week.js
var WEEK = {
	edition: "Monday 23 November 2026",
	quiz: [
		{
			q: "How many minutes did Leny Yoro last at Anfield before he was sent off?",
			opts: [
				"8",
				"18",
				"38",
				"58"
			],
			ans: 0,
			story: 1,
			fact: "Leny Yoro was sent off for a professional foul after eight minutes of Pochettino's first game, which United lost 4-0 at Anfield."
		},
		{
			q: "Who scored twice as Ireland beat South Africa 20-17 in Dublin?",
			opts: [
				"James Lowe",
				"Robert Baloucoune",
				"Mack Hansen",
				"Dan Sheehan"
			],
			ans: 1,
			story: 2,
			fact: "Robert Baloucoune scored twice as Ireland beat the world champions 20-17 in Dublin."
		},
		{
			q: "Which team beat Manchester City 3-1 at City's home ground in the WSL?",
			opts: [
				"Arsenal",
				"Chelsea",
				"Tottenham",
				"Aston Villa"
			],
			ans: 2,
			story: 0,
			fact: "Tottenham won 3-1 at Manchester City's home ground on Sunday."
		},
		{
			q: "Who won the Las Vegas Grand Prix on Saturday night?",
			opts: [
				"Kimi Antonelli",
				"Lando Norris",
				"Charles Leclerc",
				"Max Verstappen"
			],
			ans: 3,
			story: 3,
			fact: "Max Verstappen won in Las Vegas on Saturday night, three weeks after the title had been settled."
		},
		{
			q: "How old was Kimi Antonelli when he became the youngest Formula 1 world champion?",
			opts: [
				"19",
				"20",
				"21",
				"22"
			],
			ans: 1,
			story: 3,
			fact: "Antonelli was 20 years and 68 days old when he clinched the title in Mexico City on 1 November, the youngest champion in F1 history."
		}
	],
	stories: [
		{
			sport: "Football",
			venue: "Joie Stadium",
			title: "Spurs win 3-1 at Manchester City in the WSL",
			body: "Tottenham beat Manchester City 3-1 on Sunday at City's home ground. A day earlier, London City Lionesses beat Crystal Palace 6-2, equalling Chelsea's 6-2 win over Spurs in October as the highest-scoring WSL game of the season.",
			src: ["Sky Sports", "https://www.skysports.com/football/manchester-city-women-vs-tottenham-hotspur-women/live/575831"]
		},
		{
			sport: "Football",
			title: "Pochettino's first game ends 4-0 at Anfield",
			body: "Manchester United's new manager could hardly have had a worse start. Leny Yoro was sent off for a professional foul after eight minutes, Dominik Szoboszlai scored from the free kick, and Florian Wirtz, Rio Ngumoha and Víctor Muñoz added the rest. United stay in the relegation zone.",
			src: ["FotMob", "https://www.fotmob.com/matches/liverpool-vs-manchester-united/2ygkcb"]
		},
		{
			sport: "Rugby union",
			venue: "Aviva Stadium",
			title: "Ireland beat the world champions, who still reach the final",
			body: "Robert Baloucoune scored twice as Ireland held on to beat South Africa 20-17 in Dublin. It was the Springboks' second defeat in a row, the first time that has happened since 2022, and they were without coach Rassie Erasmus, who is serving a six-match ban. They still go through to the first Nations Championship final, at Twickenham on Sunday.",
			src: ["Sky Sports", "https://www.skysports.com/rugby-union/news/13614348/ireland-20-17-south-africa-springboks-downed-as-andy-farrells-side-hold-on-for-big-victory-in-nations-championship"]
		},
		{
			sport: "Formula 1",
			title: "Verstappen wins in Las Vegas, three weeks after the title was settled",
			body: "Max Verstappen won the Las Vegas Grand Prix on Saturday night. The championship itself was decided on 1 November in Mexico City, where Kimi Antonelli became the youngest world champion in Formula 1 history, aged 20 years and 68 days.",
			src: ["Al Jazeera", "https://www.aljazeera.com/sports/2026/11/2/kimi-antonelli-becomes-formula-ones-youngest-world-champion-in-mexico-city"]
		},
		{
			sport: "Rugby union",
			title: "The All Blacks face their worst year of the professional era",
			body: "New Zealand lost again at the weekend. Their national broadcaster says they are now on the brink of the worst year in the professional era.",
			src: ["RNZ", "https://www.rnz.co.nz/news/sport"]
		}
	],
	numbers: [
		["8", "minutes Leny Yoro lasted at Anfield before he was sent off."],
		["81,953", "at Twickenham for England v New Zealand on Saturday, the biggest crowd of the Nations Championship so far."],
		["20-17", "Ireland's winning score against South Africa, the Springboks' first back-to-back defeats since 2022."],
		["6-2", "London City Lionesses against Crystal Palace, equalling the highest-scoring WSL game of the season."],
		["3-1", "Tottenham's win at Manchester City in the WSL."],
		["20y 68d", "Kimi Antonelli's age when he clinched the F1 title, the youngest champion ever."]
	],
	numbersSrc: [["Wikipedia: 2026 Nations Championship", "https://en.wikipedia.org/wiki/2026_Nations_Championship"], ["Wikipedia: 2026-27 Women's Super League", "https://en.wikipedia.org/wiki/2026%E2%80%9327_Women%27s_Super_League"]],
	talking: [
		{
			id: "poch",
			q: "Can Mauricio Pochettino keep Manchester United up?",
			opts: [
				"Yes, comfortably",
				"Yes, just",
				"No, they're going down"
			],
			why: "United are in the relegation zone after Sunday's 4-0 defeat, and pundits are calling their defence a shambles."
		},
		{
			id: "rassie",
			q: "Should a coach serving a ban be allowed anywhere near a final?",
			opts: [
				"Rules are rules: keep him away",
				"It's the players who play",
				"The ban should cover the final too"
			],
			why: "Rassie Erasmus is banned for six matches. South Africa reached the final without him."
		},
		{
			id: "nations",
			q: "Has the new Nations Championship worked?",
			opts: [
				"Yes, it gives November meaning",
				"Too early to say",
				"No, nobody understands it"
			],
			why: "It's the first edition. Twickenham drew 81,953 for England v New Zealand, and the finals weekend is this weekend."
		},
		{
			id: "title",
			q: "Arsenal v Man City on Sunday: who wins?",
			opts: [
				"Arsenal",
				"Draw",
				"Man City"
			],
			why: "Arsenal, the champions, were top after ten games with nine wins. City were third."
		}
	],
	watch: [
		{
			when: "Fri 27 Nov, 8pm",
			sport: "Football",
			what: "Nottingham Forest v Chelsea",
			why: "Friday night Premier League to open the weekend."
		},
		{
			when: "Fri 27 to Sun 29 Nov",
			sport: "Rugby union",
			what: "Nations Championship finals weekend, Twickenham",
			why: "Three days of double-headers, ending with the first ever final on Sunday. South Africa are in it."
		},
		{
			when: "Fri 27 Nov",
			sport: "Cricket",
			what: "Australia v England, third T20, Brisbane",
			why: "Then Sydney on Sunday and Canberra on Wednesday 2 December."
		},
		{
			when: "Sat 28 Nov to Sun 6 Dec",
			sport: "Snooker",
			what: "UK Championship, York Barbican",
			why: "The first Triple Crown event of the season, with a £1.5m prize fund. Mark Selby is the defending champion."
		},
		{
			when: "Sun 29 Nov, 4.30pm",
			sport: "Football",
			what: "Arsenal v Manchester City",
			why: "The champions and league leaders against last season's runners-up."
		},
		{
			when: "Sun 29 Nov",
			sport: "Formula 1",
			what: "Qatar Grand Prix",
			why: "The penultimate round. The season finishes in Abu Dhabi on 6 December."
		}
	],
	watchSrc: [
		["Flashscore: Nations Championship explained", "https://www.flashscore.com/news/the-2026-nations-championship-explained/p6s8EqVA/"],
		["Wikipedia: 2026 UK Championship", "https://en.wikipedia.org/wiki/2026_UK_Championship"],
		["Wisden: England tour of Australia", "https://wisden.com/cricket-news/fixtures-announced-for-england-tour-of-australia-three-odis-five-t20is-set-for-late-2026"],
		["Pain in the Arsenal: kick-off times", "https://paininthearsenal.com/date-and-kick-off-times-confirmed-for-arsenals-november-clashes-with-newcastle-and-manchester-city"],
		["Football Web Pages", "https://www.footballwebpages.co.uk/premier-league/20261127"]
	],
	spotlight: {
		id: "snooker",
		why: "The UK Championship starts on Saturday in York. Here's how snooker really works, and what the experts watch for."
	}
};
export { WEEK as t };
