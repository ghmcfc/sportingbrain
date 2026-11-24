import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { S as unescapeHTML, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_HiHdV6xW.mjs";
import { t as renderScript } from "./editorial_yLEYGdBR.mjs";
import { t as $$AdSlot } from "./AdSlot_Bo3SLqIO.mjs";
// src/data/lists.js
var LISTS = [
	[
		"wc-winners",
		"Men's World Cup winners",
		"Name every country to win the men's World Cup, 1930 to 2022.",
		"https://www.fifa.com/en/tournaments/mens/worldcup",
		[
			[
				"Brazil",
				[],
				"5 titles"
			],
			[
				"Germany",
				["west germany"],
				"4 titles"
			],
			[
				"Italy",
				[],
				"4 titles"
			],
			[
				"Argentina",
				[],
				"3 titles"
			],
			[
				"France",
				[],
				"2 titles"
			],
			[
				"Uruguay",
				[],
				"2 titles"
			],
			[
				"England",
				[],
				"1966"
			],
			[
				"Spain",
				[],
				"2010"
			]
		]
	],
	[
		"wwc-winners",
		"Women's World Cup winners",
		"Name every country to win the Women's World Cup, 1991 to 2023.",
		"https://www.fifa.com/en/tournaments/womens/womensworldcup",
		[
			[
				"USA",
				[
					"united states",
					"america",
					"us"
				],
				"4 titles"
			],
			[
				"Germany",
				[],
				"2003, 2007"
			],
			[
				"Norway",
				[],
				"1995"
			],
			[
				"Japan",
				[],
				"2011"
			],
			[
				"Spain",
				[],
				"2023"
			]
		]
	],
	[
		"pl-champions",
		"Premier League champions",
		"Name every club to win the Premier League, 1992-93 to 2024-25.",
		"https://www.premierleague.com/history/season-reviews",
		[
			[
				"Manchester United",
				[
					"man utd",
					"man united",
					"united"
				],
				"13 titles"
			],
			[
				"Manchester City",
				["man city"],
				"8 titles"
			],
			[
				"Chelsea",
				[],
				"5 titles"
			],
			[
				"Arsenal",
				[],
				"3 titles"
			],
			[
				"Liverpool",
				[],
				"2019-20, 2024-25"
			],
			[
				"Blackburn Rovers",
				["blackburn"],
				"1994-95"
			],
			[
				"Leicester City",
				["leicester"],
				"2015-16"
			]
		]
	],
	[
		"pl-1992",
		"The first Premier League",
		"Name the 22 clubs in the first Premier League season, 1992-93.",
		"https://en.wikipedia.org/wiki/1992%E2%80%9393_FA_Premier_League",
		[
			[
				"Arsenal",
				[],
				""
			],
			[
				"Aston Villa",
				["villa"],
				"Runners-up"
			],
			[
				"Blackburn Rovers",
				["blackburn"],
				""
			],
			[
				"Chelsea",
				[],
				""
			],
			[
				"Coventry City",
				["coventry"],
				""
			],
			[
				"Crystal Palace",
				["palace"],
				"Relegated"
			],
			[
				"Everton",
				[],
				""
			],
			[
				"Ipswich Town",
				["ipswich"],
				""
			],
			[
				"Leeds United",
				["leeds"],
				"The reigning champions"
			],
			[
				"Liverpool",
				[],
				""
			],
			[
				"Manchester City",
				["man city"],
				""
			],
			[
				"Manchester United",
				["man utd", "man united"],
				"Champions"
			],
			[
				"Middlesbrough",
				["boro"],
				"Relegated"
			],
			[
				"Norwich City",
				["norwich"],
				"Third"
			],
			[
				"Nottingham Forest",
				["forest", "nottm forest"],
				"Relegated"
			],
			[
				"Oldham Athletic",
				["oldham"],
				""
			],
			[
				"Queens Park Rangers",
				["qpr"],
				""
			],
			[
				"Sheffield United",
				["sheff utd", "sheffield utd"],
				"Brian Deane scored the first goal"
			],
			[
				"Sheffield Wednesday",
				["sheff wed", "wednesday"],
				""
			],
			[
				"Southampton",
				[],
				""
			],
			[
				"Tottenham Hotspur",
				["tottenham", "spurs"],
				""
			],
			[
				"Wimbledon",
				[],
				"The Crazy Gang"
			]
		]
	],
	[
		"ballon-dor",
		"Ballon d'Or winners since 2000",
		"Name every man to win the Ballon d'Or, 2000 to 2025.",
		"https://www.francefootball.fr/ballon-d-or/",
		[
			[
				"Luís Figo",
				["figo", "luis figo"],
				"2000"
			],
			[
				"Michael Owen",
				["owen"],
				"2001"
			],
			[
				"Ronaldo Nazário",
				[
					"ronaldo nazario",
					"r9",
					"brazilian ronaldo",
					"ronaldo luis nazario de lima"
				],
				"2002"
			],
			[
				"Pavel Nedvěd",
				["nedved", "pavel nedved"],
				"2003"
			],
			[
				"Andriy Shevchenko",
				["shevchenko"],
				"2004"
			],
			[
				"Ronaldinho",
				[],
				"2005"
			],
			[
				"Fabio Cannavaro",
				["cannavaro"],
				"2006"
			],
			[
				"Kaká",
				["kaka"],
				"2007"
			],
			[
				"Cristiano Ronaldo",
				["cr7", "cristiano"],
				"5 times"
			],
			[
				"Lionel Messi",
				["messi"],
				"8 times"
			],
			[
				"Luka Modrić",
				["modric", "luka modric"],
				"2018"
			],
			[
				"Karim Benzema",
				["benzema"],
				"2022"
			],
			[
				"Rodri",
				["rodrigo hernandez"],
				"2024"
			],
			[
				"Ousmane Dembélé",
				["dembele", "ousmane dembele"],
				"2025"
			]
		]
	],
	[
		"f1-champions",
		"F1 champions since 2000",
		"Name every Formula 1 drivers' champion, 2000 to 2025.",
		"https://www.formula1.com/en/results",
		[
			[
				"Michael Schumacher",
				["schumacher"],
				"2000-04"
			],
			[
				"Fernando Alonso",
				["alonso"],
				"2005, 2006"
			],
			[
				"Kimi Räikkönen",
				["raikkonen", "kimi raikkonen"],
				"2007"
			],
			[
				"Lewis Hamilton",
				["hamilton"],
				"7 titles"
			],
			[
				"Jenson Button",
				["button"],
				"2009"
			],
			[
				"Sebastian Vettel",
				["vettel"],
				"2010-13"
			],
			[
				"Nico Rosberg",
				["rosberg"],
				"2016"
			],
			[
				"Max Verstappen",
				["verstappen"],
				"2021-24"
			],
			[
				"Lando Norris",
				["norris"],
				"2025"
			]
		]
	],
	[
		"wimbledon-men",
		"Wimbledon men's champions since 2000",
		"Name every man to win the Wimbledon singles, 2000 to 2025.",
		"https://www.wimbledon.com/en_GB/draws_archive/index.html",
		[
			[
				"Pete Sampras",
				["sampras"],
				"2000"
			],
			[
				"Goran Ivanišević",
				["ivanisevic", "goran ivanisevic"],
				"2001, as a wildcard"
			],
			[
				"Lleyton Hewitt",
				["hewitt"],
				"2002"
			],
			[
				"Roger Federer",
				["federer"],
				"8 titles"
			],
			[
				"Rafael Nadal",
				["nadal"],
				"2008, 2010"
			],
			[
				"Novak Djokovic",
				["djokovic"],
				"7 titles"
			],
			[
				"Andy Murray",
				["murray"],
				"2013, 2016"
			],
			[
				"Carlos Alcaraz",
				["alcaraz"],
				"2023, 2024"
			],
			[
				"Jannik Sinner",
				["sinner"],
				"2025"
			]
		]
	],
	[
		"wimbledon-women",
		"Wimbledon women's champions since 2000",
		"Name every woman to win the Wimbledon singles, 2000 to 2025.",
		"https://www.wimbledon.com/en_GB/draws_archive/index.html",
		[
			[
				"Venus Williams",
				["venus"],
				"5 titles"
			],
			[
				"Serena Williams",
				["serena"],
				"7 titles"
			],
			[
				"Maria Sharapova",
				["sharapova"],
				"2004, aged 17"
			],
			[
				"Amélie Mauresmo",
				["mauresmo", "amelie mauresmo"],
				"2006"
			],
			[
				"Petra Kvitová",
				["kvitova", "petra kvitova"],
				"2011, 2014"
			],
			[
				"Marion Bartoli",
				["bartoli"],
				"2013"
			],
			[
				"Garbiñe Muguruza",
				["muguruza", "garbine muguruza"],
				"2017"
			],
			[
				"Angelique Kerber",
				["kerber"],
				"2018"
			],
			[
				"Simona Halep",
				["halep"],
				"2019"
			],
			[
				"Ashleigh Barty",
				["barty", "ash barty"],
				"2021"
			],
			[
				"Elena Rybakina",
				["rybakina"],
				"2022"
			],
			[
				"Markéta Vondroušová",
				["vondrousova", "marketa vondrousova"],
				"2023, unseeded"
			],
			[
				"Barbora Krejčíková",
				["krejcikova", "barbora krejcikova"],
				"2024"
			],
			[
				"Iga Świątek",
				["swiatek", "iga swiatek"],
				"2025"
			]
		]
	],
	[
		"pdc-champions",
		"PDC world darts champions",
		"Name every PDC world champion, 1994 to 2025.",
		"https://www.pdc.tv/tournament/world-darts-championship",
		[
			[
				"Dennis Priestley",
				["priestley"],
				"1994"
			],
			[
				"Phil Taylor",
				["taylor"],
				"14 PDC titles"
			],
			[
				"John Part",
				["part"],
				"2003, 2008"
			],
			[
				"Raymond van Barneveld",
				["van barneveld", "barney"],
				"2007"
			],
			[
				"Adrian Lewis",
				["lewis"],
				"2011, 2012"
			],
			[
				"Michael van Gerwen",
				["van gerwen", "mvg"],
				"2014, 2017, 2019"
			],
			[
				"Gary Anderson",
				["anderson"],
				"2015, 2016"
			],
			[
				"Rob Cross",
				["cross"],
				"2018"
			],
			[
				"Peter Wright",
				["wright", "snakebite"],
				"2020, 2022"
			],
			[
				"Gerwyn Price",
				["price"],
				"2021"
			],
			[
				"Michael Smith",
				["smith"],
				"2023"
			],
			[
				"Luke Humphries",
				["humphries"],
				"2024"
			],
			[
				"Luke Littler",
				["littler"],
				"2025"
			]
		]
	],
	[
		"olympic-hosts",
		"Summer Olympic hosts since 1948",
		"Name every city to host the Summer Olympics, 1948 to 2024.",
		"https://www.olympics.com/en/olympic-games",
		[
			[
				"London",
				[],
				"1948, 2012"
			],
			[
				"Helsinki",
				[],
				"1952"
			],
			[
				"Melbourne",
				[],
				"1956 (equestrian in Stockholm)"
			],
			[
				"Rome",
				[],
				"1960"
			],
			[
				"Tokyo",
				[],
				"1964, 2021"
			],
			[
				"Mexico City",
				["mexico"],
				"1968"
			],
			[
				"Munich",
				[],
				"1972"
			],
			[
				"Montreal",
				[],
				"1976"
			],
			[
				"Moscow",
				[],
				"1980"
			],
			[
				"Los Angeles",
				["la"],
				"1984"
			],
			[
				"Seoul",
				[],
				"1988"
			],
			[
				"Barcelona",
				[],
				"1992"
			],
			[
				"Atlanta",
				[],
				"1996"
			],
			[
				"Sydney",
				[],
				"2000"
			],
			[
				"Athens",
				[],
				"2004"
			],
			[
				"Beijing",
				[],
				"2008"
			],
			[
				"Rio de Janeiro",
				["rio"],
				"2016"
			],
			[
				"Paris",
				[],
				"2024"
			]
		]
	],
	[
		"england-managers",
		"England managers since 1990",
		"Name every permanent England men's manager appointed from 1990 to 2025. Caretakers don't count.",
		"https://www.englandfootball.com/",
		[
			[
				"Graham Taylor",
				["taylor"],
				"1990-93"
			],
			[
				"Terry Venables",
				["venables"],
				"1994-96"
			],
			[
				"Glenn Hoddle",
				["hoddle"],
				"1996-99"
			],
			[
				"Kevin Keegan",
				["keegan"],
				"1999-2000"
			],
			[
				"Sven-Göran Eriksson",
				[
					"eriksson",
					"sven",
					"sven goran eriksson"
				],
				"2001-06"
			],
			[
				"Steve McClaren",
				["mcclaren"],
				"2006-07"
			],
			[
				"Fabio Capello",
				["capello"],
				"Appointed Dec 2007"
			],
			[
				"Roy Hodgson",
				["hodgson"],
				"2012-16"
			],
			[
				"Sam Allardyce",
				["allardyce", "big sam"],
				"One game, 2016"
			],
			[
				"Gareth Southgate",
				["southgate"],
				"2016-24"
			],
			[
				"Thomas Tuchel",
				["tuchel"],
				"From 2025"
			]
		]
	],
	[
		"grand-national",
		"Grand National winners since 2010",
		"Name every Grand National winner, 2010 to 2025. There was no race in 2020.",
		"https://www.thejockeyclub.co.uk/aintree/events-tickets/grand-national-festival/",
		[
			[
				"Don't Push It",
				["dont push it"],
				"2010, AP McCoy"
			],
			[
				"Ballabriggs",
				[],
				"2011"
			],
			[
				"Neptune Collonges",
				[],
				"2012"
			],
			[
				"Auroras Encore",
				["aurora's encore"],
				"2013"
			],
			[
				"Pineau de Re",
				[],
				"2014"
			],
			[
				"Many Clouds",
				[],
				"2015"
			],
			[
				"Rule The World",
				[],
				"2016"
			],
			[
				"One For Arthur",
				[],
				"2017"
			],
			[
				"Tiger Roll",
				[],
				"2018, 2019"
			],
			[
				"Minella Times",
				[],
				"2021, Rachael Blackmore"
			],
			[
				"Noble Yeats",
				[],
				"2022"
			],
			[
				"Corach Rambler",
				[],
				"2023"
			],
			[
				"I Am Maximus",
				[],
				"2024"
			],
			[
				"Nick Rockett",
				[],
				"2025"
			]
		]
	],
	[
		"tour-winners",
		"Tour de France winners since 2010",
		"Name every rider credited with winning the Tour de France, 2010 to 2025.",
		"https://www.letour.fr/en/history",
		[
			[
				"Andy Schleck",
				["schleck"],
				"2010, awarded after Contador was stripped"
			],
			[
				"Cadel Evans",
				["evans"],
				"2011"
			],
			[
				"Bradley Wiggins",
				["wiggins"],
				"2012"
			],
			[
				"Chris Froome",
				["froome"],
				"4 titles"
			],
			[
				"Vincenzo Nibali",
				["nibali"],
				"2014"
			],
			[
				"Geraint Thomas",
				["thomas"],
				"2018"
			],
			[
				"Egan Bernal",
				["bernal"],
				"2019"
			],
			[
				"Tadej Pogačar",
				["pogacar", "tadej pogacar"],
				"4 titles"
			],
			[
				"Jonas Vingegaard",
				["vingegaard"],
				"2022, 2023"
			]
		]
	],
	[
		"euro-winners",
		"Men's Euro winners",
		"Name every country to win the men's European Championship, 1960 to 2024.",
		"https://en.wikipedia.org/wiki/UEFA_European_Championship",
		[
			[
				"Spain",
				[],
				"4 titles"
			],
			[
				"Germany",
				["west germany"],
				"3 titles"
			],
			[
				"France",
				[],
				"1984, 2000"
			],
			[
				"Italy",
				[],
				"1968, 2021"
			],
			[
				"Soviet Union",
				["ussr"],
				"1960"
			],
			[
				"Czechoslovakia",
				[],
				"1976"
			],
			[
				"Netherlands",
				["holland"],
				"1988"
			],
			[
				"Denmark",
				[],
				"1992"
			],
			[
				"Greece",
				[],
				"2004"
			],
			[
				"Portugal",
				[],
				"2016"
			]
		]
	],
	[
		"weuro-winners",
		"Women's Euro winners",
		"Name every country to win the Women's European Championship, 1984 to 2025.",
		"https://en.wikipedia.org/wiki/UEFA_Women%27s_Championship",
		[
			[
				"Germany",
				["west germany"],
				"8 titles"
			],
			[
				"Norway",
				[],
				"1987, 1993"
			],
			[
				"Sweden",
				[],
				"1984"
			],
			[
				"Netherlands",
				["holland"],
				"2017"
			],
			[
				"England",
				[],
				"2022, 2025"
			]
		]
	],
	[
		"ucl-since-2000",
		"Champions League winners since 2000",
		"Name every club to win the Champions League, 2000 to 2025.",
		"https://en.wikipedia.org/wiki/List_of_European_Cup_and_UEFA_Champions_League_finals",
		[
			[
				"Real Madrid",
				[],
				"8 titles"
			],
			[
				"Barcelona",
				["barca"],
				"2006, 2009, 2011, 2015"
			],
			[
				"Bayern Munich",
				["bayern"],
				"2001, 2013, 2020"
			],
			[
				"AC Milan",
				["milan"],
				"2003, 2007"
			],
			[
				"Liverpool",
				[],
				"2005, 2019"
			],
			[
				"Chelsea",
				[],
				"2012, 2021"
			],
			[
				"Manchester United",
				["man utd", "man united"],
				"2008"
			],
			[
				"Inter Milan",
				["inter", "internazionale"],
				"2010"
			],
			[
				"Porto",
				["fc porto"],
				"2004"
			],
			[
				"Manchester City",
				["man city"],
				"2023"
			],
			[
				"Paris Saint-Germain",
				[
					"psg",
					"paris st germain",
					"paris"
				],
				"2025"
			]
		]
	],
	[
		"english-ec-winners",
		"English champions of Europe",
		"Name every English club to win the European Cup or Champions League, up to 2025.",
		"https://en.wikipedia.org/wiki/List_of_European_Cup_and_UEFA_Champions_League_finals",
		[
			[
				"Liverpool",
				[],
				"6 titles"
			],
			[
				"Manchester United",
				["man utd", "man united"],
				"1968, 1999, 2008"
			],
			[
				"Nottingham Forest",
				["forest"],
				"1979, 1980"
			],
			[
				"Aston Villa",
				["villa"],
				"1982"
			],
			[
				"Chelsea",
				[],
				"2012, 2021"
			],
			[
				"Manchester City",
				["man city"],
				"2023"
			]
		]
	],
	[
		"fa-cup-since-2000",
		"FA Cup winners since 2000",
		"Name every club to win the FA Cup, 2000 to 2025.",
		"https://en.wikipedia.org/wiki/List_of_FA_Cup_finals",
		[
			[
				"Arsenal",
				[],
				"7 wins"
			],
			[
				"Chelsea",
				[],
				"6 wins"
			],
			[
				"Manchester City",
				["man city"],
				"2011, 2019, 2023"
			],
			[
				"Liverpool",
				[],
				"2001, 2006, 2022"
			],
			[
				"Manchester United",
				["man utd", "man united"],
				"2004, 2016, 2024"
			],
			[
				"Portsmouth",
				["pompey"],
				"2008"
			],
			[
				"Wigan Athletic",
				["wigan"],
				"2013"
			],
			[
				"Leicester City",
				["leicester"],
				"2021"
			],
			[
				"Crystal Palace",
				["palace"],
				"2025"
			]
		]
	],
	[
		"league-cup-since-2000",
		"League Cup winners since 2000",
		"Name every club to win the League Cup, 2000 to 2025.",
		"https://en.wikipedia.org/wiki/List_of_EFL_Cup_finals",
		[
			[
				"Manchester City",
				["man city"],
				"6 wins"
			],
			[
				"Liverpool",
				[],
				"5 wins"
			],
			[
				"Manchester United",
				["man utd", "man united"],
				"5 wins"
			],
			[
				"Chelsea",
				[],
				"2005, 2007, 2015"
			],
			[
				"Leicester City",
				["leicester"],
				"2000"
			],
			[
				"Blackburn Rovers",
				["blackburn"],
				"2002"
			],
			[
				"Middlesbrough",
				["boro"],
				"2004"
			],
			[
				"Tottenham Hotspur",
				["tottenham", "spurs"],
				"2008"
			],
			[
				"Birmingham City",
				["birmingham"],
				"2011"
			],
			[
				"Swansea City",
				["swansea"],
				"2013"
			],
			[
				"Newcastle United",
				["newcastle"],
				"2025"
			]
		]
	],
	[
		"scottish-champions-1980",
		"Scottish champions since 1980",
		"Name every club to win the Scottish top flight, 1980 to 2024-25.",
		"https://en.wikipedia.org/wiki/List_of_Scottish_football_champions",
		[
			[
				"Celtic",
				[],
				"Most titles"
			],
			[
				"Rangers",
				[],
				"2020-21 the latest"
			],
			[
				"Aberdeen",
				[],
				"1980, 1984, 1985"
			],
			[
				"Dundee United",
				["dundee utd"],
				"1983"
			]
		]
	],
	[
		"wc-hosts",
		"Men's World Cup hosts",
		"Name every country to host the men's World Cup, 1930 to 2022.",
		"https://en.wikipedia.org/wiki/FIFA_World_Cup_hosts",
		[
			[
				"Uruguay",
				[],
				"1930"
			],
			[
				"Italy",
				[],
				"1934, 1990"
			],
			[
				"France",
				[],
				"1938, 1998"
			],
			[
				"Brazil",
				[],
				"1950, 2014"
			],
			[
				"Switzerland",
				[],
				"1954"
			],
			[
				"Sweden",
				[],
				"1958"
			],
			[
				"Chile",
				[],
				"1962"
			],
			[
				"England",
				[],
				"1966"
			],
			[
				"Mexico",
				[],
				"1970, 1986"
			],
			[
				"West Germany",
				["germany"],
				"1974, 2006"
			],
			[
				"Argentina",
				[],
				"1978"
			],
			[
				"Spain",
				[],
				"1982"
			],
			[
				"USA",
				["united states", "america"],
				"1994"
			],
			[
				"South Korea",
				["korea"],
				"2002, co-host"
			],
			[
				"Japan",
				[],
				"2002, co-host"
			],
			[
				"South Africa",
				[],
				"2010"
			],
			[
				"Russia",
				[],
				"2018"
			],
			[
				"Qatar",
				[],
				"2022"
			]
		]
	],
	[
		"wwc-hosts",
		"Women's World Cup hosts",
		"Name every country to host the Women's World Cup, 1991 to 2023.",
		"https://en.wikipedia.org/wiki/FIFA_Women%27s_World_Cup",
		[
			[
				"China",
				[],
				"1991, 2007"
			],
			[
				"Sweden",
				[],
				"1995"
			],
			[
				"USA",
				["united states", "america"],
				"1999, 2003"
			],
			[
				"Germany",
				[],
				"2011"
			],
			[
				"Canada",
				[],
				"2015"
			],
			[
				"France",
				[],
				"2019"
			],
			[
				"Australia",
				[],
				"2023, co-host"
			],
			[
				"New Zealand",
				[],
				"2023, co-host"
			]
		]
	],
	[
		"pl-ever-presents",
		"Premier League ever-presents",
		"Name the six clubs to play in every Premier League season from 1992-93 to 2025-26.",
		"https://en.wikipedia.org/wiki/Premier_League",
		[
			[
				"Arsenal",
				[],
				""
			],
			[
				"Chelsea",
				[],
				""
			],
			[
				"Everton",
				[],
				""
			],
			[
				"Liverpool",
				[],
				""
			],
			[
				"Manchester United",
				["man utd", "man united"],
				""
			],
			[
				"Tottenham Hotspur",
				["tottenham", "spurs"],
				""
			]
		]
	],
	[
		"wsl-champions",
		"WSL champions",
		"Name every club to win the Women's Super League, 2011 to 2024-25.",
		"https://en.wikipedia.org/wiki/Women%27s_Super_League",
		[
			[
				"Chelsea",
				[],
				"Most titles"
			],
			[
				"Arsenal",
				[],
				"2011, 2012, 2018-19"
			],
			[
				"Liverpool",
				[],
				"2013, 2014"
			],
			[
				"Manchester City",
				["man city"],
				"2016"
			]
		]
	],
	[
		"womens-ballon",
		"Women's Ballon d'Or winners",
		"Name every woman to win the Ballon d'Or Féminin, 2018 to 2025.",
		"https://en.wikipedia.org/wiki/Ballon_d%27Or_F%C3%A9minin",
		[
			[
				"Ada Hegerberg",
				["hegerberg"],
				"2018"
			],
			[
				"Megan Rapinoe",
				["rapinoe"],
				"2019"
			],
			[
				"Alexia Putellas",
				["putellas"],
				"2021, 2022"
			],
			[
				"Aitana Bonmatí",
				["bonmati", "aitana"],
				"2023, 2024, 2025"
			]
		]
	],
	[
		"england-1966",
		"England's 1966 final XI",
		"Name the 11 England players who started the 1966 World Cup final.",
		"https://en.wikipedia.org/wiki/1966_FIFA_World_Cup_final",
		[
			[
				"Gordon Banks",
				["banks"],
				"Goalkeeper"
			],
			[
				"George Cohen",
				["cohen"],
				"Right-back"
			],
			[
				"Ray Wilson",
				["wilson"],
				"Left-back"
			],
			[
				"Nobby Stiles",
				["stiles"],
				"Midfield"
			],
			[
				"Jack Charlton",
				["jack"],
				"Centre-back"
			],
			[
				"Bobby Moore",
				["moore"],
				"Captain"
			],
			[
				"Alan Ball",
				["ball"],
				"Midfield"
			],
			[
				"Roger Hunt",
				["hunt"],
				"Forward"
			],
			[
				"Bobby Charlton",
				["bobby"],
				"Midfield"
			],
			[
				"Geoff Hurst",
				["hurst"],
				"Hat-trick"
			],
			[
				"Martin Peters",
				["peters"],
				"Scored"
			]
		]
	],
	[
		"lionesses-2022",
		"England's Euro 2022 final XI",
		"Name the 11 Lionesses who started the Euro 2022 final against Germany.",
		"https://en.wikipedia.org/wiki/UEFA_Women%27s_Euro_2022_final",
		[
			[
				"Mary Earps",
				["earps"],
				"Goalkeeper"
			],
			[
				"Lucy Bronze",
				["bronze"],
				"Right-back"
			],
			[
				"Millie Bright",
				["bright"],
				"Centre-back"
			],
			[
				"Leah Williamson",
				["williamson"],
				"Captain"
			],
			[
				"Rachel Daly",
				["daly"],
				"Left-back"
			],
			[
				"Keira Walsh",
				["walsh"],
				"Midfield"
			],
			[
				"Georgia Stanway",
				["stanway"],
				"Midfield"
			],
			[
				"Fran Kirby",
				["kirby"],
				"Midfield"
			],
			[
				"Beth Mead",
				["mead"],
				"Right wing"
			],
			[
				"Lauren Hemp",
				["hemp"],
				"Left wing"
			],
			[
				"Ellen White",
				["white"],
				"Centre-forward"
			]
		]
	],
	[
		"pl-2025-26",
		"The 2025-26 Premier League",
		"Name the 20 clubs in the 2025-26 Premier League.",
		"https://en.wikipedia.org/wiki/2025%E2%80%9326_Premier_League",
		[
			[
				"Arsenal",
				[],
				""
			],
			[
				"Aston Villa",
				["villa"],
				""
			],
			[
				"Bournemouth",
				["afc bournemouth"],
				""
			],
			[
				"Brentford",
				[],
				""
			],
			[
				"Brighton and Hove Albion",
				["brighton"],
				""
			],
			[
				"Burnley",
				[],
				"Promoted"
			],
			[
				"Chelsea",
				[],
				""
			],
			[
				"Crystal Palace",
				["palace"],
				""
			],
			[
				"Everton",
				[],
				""
			],
			[
				"Fulham",
				[],
				""
			],
			[
				"Leeds United",
				["leeds"],
				"Promoted"
			],
			[
				"Liverpool",
				[],
				"Champions"
			],
			[
				"Manchester City",
				["man city"],
				""
			],
			[
				"Manchester United",
				["man utd", "man united"],
				""
			],
			[
				"Newcastle United",
				["newcastle"],
				""
			],
			[
				"Nottingham Forest",
				["forest"],
				""
			],
			[
				"Sunderland",
				[],
				"Promoted"
			],
			[
				"Tottenham Hotspur",
				["tottenham", "spurs"],
				""
			],
			[
				"West Ham United",
				["west ham"],
				""
			],
			[
				"Wolverhampton Wanderers",
				["wolves"],
				""
			]
		]
	],
	[
		"football-league-founders",
		"Football League founders",
		"Name the 12 founder members of the Football League in 1888.",
		"https://en.wikipedia.org/wiki/1888%E2%80%9389_Football_League",
		[
			[
				"Accrington",
				["accrington fc"],
				"Folded in 1896"
			],
			[
				"Aston Villa",
				["villa"],
				""
			],
			[
				"Blackburn Rovers",
				["blackburn"],
				""
			],
			[
				"Bolton Wanderers",
				["bolton"],
				""
			],
			[
				"Burnley",
				[],
				""
			],
			[
				"Derby County",
				["derby"],
				""
			],
			[
				"Everton",
				[],
				""
			],
			[
				"Notts County",
				[],
				""
			],
			[
				"Preston North End",
				["preston"],
				"First champions"
			],
			[
				"Stoke",
				["stoke city"],
				""
			],
			[
				"West Bromwich Albion",
				["west brom"],
				""
			],
			[
				"Wolverhampton Wanderers",
				["wolves"],
				""
			]
		]
	],
	[
		"london-pl-clubs",
		"London's Premier League clubs",
		"Name every London club to have played in the Premier League, up to 2025-26.",
		"https://en.wikipedia.org/wiki/List_of_Premier_League_clubs",
		[
			[
				"Arsenal",
				[],
				""
			],
			[
				"Chelsea",
				[],
				""
			],
			[
				"Tottenham Hotspur",
				["tottenham", "spurs"],
				""
			],
			[
				"West Ham United",
				["west ham"],
				""
			],
			[
				"Crystal Palace",
				["palace"],
				""
			],
			[
				"Fulham",
				[],
				""
			],
			[
				"Brentford",
				[],
				""
			],
			[
				"Queens Park Rangers",
				["qpr"],
				""
			],
			[
				"Charlton Athletic",
				["charlton"],
				""
			],
			[
				"Wimbledon",
				[],
				"1992 to 2000"
			]
		]
	],
	[
		"pl-title-managers",
		"Premier League-winning managers",
		"Name every manager to win the Premier League, 1992-93 to 2024-25.",
		"https://en.wikipedia.org/wiki/List_of_Premier_League_managers",
		[
			[
				"Alex Ferguson",
				["ferguson"],
				"13 titles"
			],
			[
				"Kenny Dalglish",
				["dalglish"],
				"Blackburn 1995"
			],
			[
				"Arsène Wenger",
				["wenger"],
				"3 titles"
			],
			[
				"José Mourinho",
				["mourinho"],
				"3 titles"
			],
			[
				"Carlo Ancelotti",
				["ancelotti"],
				"2010"
			],
			[
				"Roberto Mancini",
				["mancini"],
				"2012"
			],
			[
				"Manuel Pellegrini",
				["pellegrini"],
				"2014"
			],
			[
				"Claudio Ranieri",
				["ranieri"],
				"2016"
			],
			[
				"Antonio Conte",
				["conte"],
				"2017"
			],
			[
				"Pep Guardiola",
				["guardiola"],
				"6 titles"
			],
			[
				"Jürgen Klopp",
				["klopp"],
				"2020"
			],
			[
				"Arne Slot",
				["slot"],
				"2025"
			]
		]
	],
	[
		"ucl-managers-2010",
		"Champions League-winning managers since 2010",
		"Name every manager to win the Champions League, 2010 to 2025.",
		"https://en.wikipedia.org/wiki/List_of_UEFA_Champions_League_winning_managers",
		[
			[
				"José Mourinho",
				["mourinho"],
				"2010"
			],
			[
				"Pep Guardiola",
				["guardiola"],
				"2011, 2023"
			],
			[
				"Roberto Di Matteo",
				["di matteo"],
				"2012"
			],
			[
				"Jupp Heynckes",
				["heynckes"],
				"2013"
			],
			[
				"Carlo Ancelotti",
				["ancelotti"],
				"3 wins"
			],
			[
				"Luis Enrique",
				["enrique"],
				"2015, 2025"
			],
			[
				"Zinedine Zidane",
				["zidane"],
				"3 in a row"
			],
			[
				"Jürgen Klopp",
				["klopp"],
				"2019"
			],
			[
				"Hansi Flick",
				["flick"],
				"2020"
			],
			[
				"Thomas Tuchel",
				["tuchel"],
				"2021"
			]
		]
	],
	[
		"scot-prem-2025-26",
		"The 2025-26 Scottish Premiership",
		"Name the 12 clubs in the 2025-26 Scottish Premiership.",
		"https://en.wikipedia.org/wiki/2025%E2%80%9326_Scottish_Premiership",
		[
			[
				"Aberdeen",
				[],
				""
			],
			[
				"Celtic",
				[],
				"Champions"
			],
			[
				"Dundee",
				[],
				""
			],
			[
				"Dundee United",
				["dundee utd"],
				""
			],
			[
				"Falkirk",
				[],
				"Promoted"
			],
			[
				"Heart of Midlothian",
				["hearts"],
				""
			],
			[
				"Hibernian",
				["hibs"],
				""
			],
			[
				"Kilmarnock",
				["killie"],
				""
			],
			[
				"Livingston",
				[],
				"Promoted"
			],
			[
				"Motherwell",
				[],
				""
			],
			[
				"Rangers",
				[],
				""
			],
			[
				"St Mirren",
				[],
				""
			]
		]
	],
	[
		"wc-2022-semis",
		"2022 World Cup semi-finalists",
		"Name the four semi-finalists at the 2022 men's World Cup.",
		"https://en.wikipedia.org/wiki/2022_FIFA_World_Cup",
		[
			[
				"Argentina",
				[],
				"Champions"
			],
			[
				"France",
				[],
				"Runners-up"
			],
			[
				"Croatia",
				[],
				"Third"
			],
			[
				"Morocco",
				[],
				"First African semi-finalist"
			]
		]
	],
	[
		"euro-2024-semis",
		"Euro 2024 semi-finalists",
		"Name the four semi-finalists at Euro 2024.",
		"https://en.wikipedia.org/wiki/UEFA_Euro_2024",
		[
			[
				"Spain",
				[],
				"Champions"
			],
			[
				"England",
				[],
				"Runners-up"
			],
			[
				"France",
				[],
				""
			],
			[
				"Netherlands",
				["holland"],
				""
			]
		]
	],
	[
		"wwc-2023-semis",
		"2023 Women's World Cup semi-finalists",
		"Name the four semi-finalists at the 2023 Women's World Cup.",
		"https://en.wikipedia.org/wiki/2023_FIFA_Women%27s_World_Cup",
		[
			[
				"Spain",
				[],
				"Champions"
			],
			[
				"England",
				[],
				"Runners-up"
			],
			[
				"Sweden",
				[],
				"Third"
			],
			[
				"Australia",
				[],
				"Co-hosts"
			]
		]
	],
	[
		"weuro-2025-semis",
		"Women's Euro 2025 semi-finalists",
		"Name the four semi-finalists at Women's Euro 2025.",
		"https://en.wikipedia.org/wiki/UEFA_Women%27s_Euro_2025",
		[
			[
				"England",
				[],
				"Champions"
			],
			[
				"Spain",
				[],
				"Runners-up"
			],
			[
				"Germany",
				[],
				""
			],
			[
				"Italy",
				[],
				""
			]
		]
	],
	[
		"big-five",
		"Europe's big five leagues",
		"Name the top divisions of England, Spain, Italy, Germany and France.",
		"https://en.wikipedia.org/wiki/Big_Five_(association_football)",
		[
			[
				"Premier League",
				[],
				"England"
			],
			[
				"La Liga",
				["laliga"],
				"Spain"
			],
			[
				"Serie A",
				[],
				"Italy"
			],
			[
				"Bundesliga",
				[],
				"Germany"
			],
			[
				"Ligue 1",
				["ligue un"],
				"France"
			]
		]
	],
	[
		"cwc-winners",
		"Men's Cricket World Cup winners",
		"Name every country to win the men's Cricket World Cup, 1975 to 2023.",
		"https://en.wikipedia.org/wiki/Cricket_World_Cup",
		[
			[
				"Australia",
				[],
				"6 titles"
			],
			[
				"West Indies",
				["windies"],
				"1975, 1979"
			],
			[
				"India",
				[],
				"1983, 2011"
			],
			[
				"Pakistan",
				[],
				"1992"
			],
			[
				"Sri Lanka",
				[],
				"1996"
			],
			[
				"England",
				[],
				"2019"
			]
		]
	],
	[
		"wcwc-winners",
		"Women's Cricket World Cup winners",
		"Name every country to win the Women's Cricket World Cup, 1973 to 2025.",
		"https://en.wikipedia.org/wiki/Women%27s_Cricket_World_Cup",
		[
			[
				"Australia",
				[],
				"7 titles"
			],
			[
				"England",
				[],
				"4 titles"
			],
			[
				"New Zealand",
				[],
				"2000"
			],
			[
				"India",
				[],
				"2025"
			]
		]
	],
	[
		"t20wc-winners",
		"Men's T20 World Cup winners",
		"Name every country to win the men's T20 World Cup, 2007 to 2024.",
		"https://en.wikipedia.org/wiki/ICC_Men%27s_T20_World_Cup",
		[
			[
				"India",
				[],
				"2007, 2024"
			],
			[
				"Pakistan",
				[],
				"2009"
			],
			[
				"England",
				[],
				"2010, 2022"
			],
			[
				"West Indies",
				["windies"],
				"2012, 2016"
			],
			[
				"Sri Lanka",
				[],
				"2014"
			],
			[
				"Australia",
				[],
				"2021"
			]
		]
	],
	[
		"wt20wc-winners",
		"Women's T20 World Cup winners",
		"Name every country to win the Women's T20 World Cup, 2009 to 2024.",
		"https://en.wikipedia.org/wiki/ICC_Women%27s_T20_World_Cup",
		[
			[
				"Australia",
				[],
				"6 titles"
			],
			[
				"England",
				[],
				"2009"
			],
			[
				"West Indies",
				["windies"],
				"2016"
			],
			[
				"New Zealand",
				[],
				"2024"
			]
		]
	],
	[
		"test-nations",
		"Test-playing nations",
		"Name the 12 full members of the ICC that play Test cricket.",
		"https://en.wikipedia.org/wiki/Test_cricket",
		[
			[
				"England",
				[],
				""
			],
			[
				"Australia",
				[],
				""
			],
			[
				"South Africa",
				[],
				""
			],
			[
				"West Indies",
				["windies"],
				""
			],
			[
				"New Zealand",
				[],
				""
			],
			[
				"India",
				[],
				""
			],
			[
				"Pakistan",
				[],
				""
			],
			[
				"Sri Lanka",
				[],
				""
			],
			[
				"Zimbabwe",
				[],
				""
			],
			[
				"Bangladesh",
				[],
				""
			],
			[
				"Ireland",
				[],
				""
			],
			[
				"Afghanistan",
				[],
				""
			]
		]
	],
	[
		"english-test-grounds",
		"England's Test grounds",
		"Name every ground in England and Wales to have hosted a men's Test match, up to 2025.",
		"https://en.wikipedia.org/wiki/List_of_Test_cricket_grounds",
		[
			[
				"Lord's",
				["lords"],
				"London"
			],
			[
				"The Oval",
				["oval", "kennington oval"],
				"London"
			],
			[
				"Old Trafford",
				[],
				"Manchester"
			],
			[
				"Headingley",
				[],
				"Leeds"
			],
			[
				"Trent Bridge",
				[],
				"Nottingham"
			],
			[
				"Edgbaston",
				[],
				"Birmingham"
			],
			[
				"Sophia Gardens",
				["cardiff", "sophia gardens cardiff"],
				"Cardiff"
			],
			[
				"Rose Bowl",
				[
					"ageas bowl",
					"utilita bowl",
					"southampton"
				],
				"Southampton"
			],
			[
				"Riverside",
				[
					"chester-le-street",
					"durham",
					"riverside ground"
				],
				"Chester-le-Street"
			],
			[
				"Bramall Lane",
				["sheffield"],
				"One Test, in 1902"
			]
		]
	],
	[
		"ipl-winners",
		"IPL champions",
		"Name every team to win the Indian Premier League, 2008 to 2025.",
		"https://en.wikipedia.org/wiki/List_of_Indian_Premier_League_seasons_and_results",
		[
			[
				"Chennai Super Kings",
				["chennai", "csk"],
				"5 titles"
			],
			[
				"Mumbai Indians",
				["mumbai"],
				"5 titles"
			],
			[
				"Kolkata Knight Riders",
				["kolkata", "kkr"],
				"3 titles"
			],
			[
				"Rajasthan Royals",
				["rajasthan"],
				"2008"
			],
			[
				"Deccan Chargers",
				["deccan"],
				"2009"
			],
			[
				"Sunrisers Hyderabad",
				["sunrisers", "srh"],
				"2016"
			],
			[
				"Gujarat Titans",
				["gujarat"],
				"2022"
			],
			[
				"Royal Challengers Bengaluru",
				[
					"royal challengers",
					"rcb",
					"bangalore",
					"royal challengers bangalore"
				],
				"2025"
			]
		]
	],
	[
		"hundred-teams",
		"The Hundred teams",
		"Name the eight teams in The Hundred.",
		"https://en.wikipedia.org/wiki/The_Hundred_(cricket)",
		[
			[
				"Birmingham Phoenix",
				["phoenix"],
				""
			],
			[
				"London Spirit",
				["spirit"],
				""
			],
			[
				"Manchester Originals",
				["originals"],
				""
			],
			[
				"Northern Superchargers",
				["superchargers"],
				""
			],
			[
				"Oval Invincibles",
				["invincibles"],
				""
			],
			[
				"Southern Brave",
				["brave"],
				""
			],
			[
				"Trent Rockets",
				["rockets"],
				""
			],
			[
				"Welsh Fire",
				["fire"],
				""
			]
		]
	],
	[
		"first-class-counties",
		"First-class counties",
		"Name the 18 first-class counties in English cricket.",
		"https://en.wikipedia.org/wiki/County_Championship",
		[
			[
				"Derbyshire",
				[],
				""
			],
			[
				"Durham",
				[],
				""
			],
			[
				"Essex",
				[],
				""
			],
			[
				"Glamorgan",
				[],
				""
			],
			[
				"Gloucestershire",
				[],
				""
			],
			[
				"Hampshire",
				[],
				""
			],
			[
				"Kent",
				[],
				""
			],
			[
				"Lancashire",
				[],
				""
			],
			[
				"Leicestershire",
				[],
				""
			],
			[
				"Middlesex",
				[],
				""
			],
			[
				"Northamptonshire",
				[],
				""
			],
			[
				"Nottinghamshire",
				["notts"],
				""
			],
			[
				"Somerset",
				[],
				""
			],
			[
				"Surrey",
				[],
				""
			],
			[
				"Sussex",
				[],
				""
			],
			[
				"Warwickshire",
				[],
				""
			],
			[
				"Worcestershire",
				[],
				""
			],
			[
				"Yorkshire",
				[],
				""
			]
		]
	],
	[
		"cricket-dismissals",
		"Ways to be out",
		"Name the nine ways a batter can be out in cricket under the current Laws.",
		"https://en.wikipedia.org/wiki/Dismissal_(cricket)",
		[
			[
				"Bowled",
				[],
				""
			],
			[
				"Caught",
				[],
				""
			],
			[
				"Leg before wicket",
				["lbw", "leg before"],
				""
			],
			[
				"Run out",
				[],
				""
			],
			[
				"Stumped",
				[],
				""
			],
			[
				"Hit wicket",
				[],
				""
			],
			[
				"Hit the ball twice",
				[],
				""
			],
			[
				"Obstructing the field",
				[],
				""
			],
			[
				"Timed out",
				[],
				""
			]
		]
	],
	[
		"rwc-winners",
		"Men's Rugby World Cup winners",
		"Name every country to win the men's Rugby World Cup, 1987 to 2023.",
		"https://en.wikipedia.org/wiki/Rugby_World_Cup",
		[
			[
				"South Africa",
				[],
				"4 titles"
			],
			[
				"New Zealand",
				["all blacks"],
				"3 titles"
			],
			[
				"Australia",
				[],
				"1991, 1999"
			],
			[
				"England",
				[],
				"2003"
			]
		]
	],
	[
		"wrwc-winners",
		"Women's Rugby World Cup winners",
		"Name every country to win the Women's Rugby World Cup, 1991 to 2025.",
		"https://en.wikipedia.org/wiki/Women%27s_Rugby_World_Cup",
		[
			[
				"New Zealand",
				["black ferns"],
				"6 titles"
			],
			[
				"England",
				["red roses"],
				"1994, 2014, 2025"
			],
			[
				"USA",
				["united states", "america"],
				"1991"
			]
		]
	],
	[
		"six-nations-teams",
		"Six Nations teams",
		"Name the six teams in the Six Nations.",
		"https://en.wikipedia.org/wiki/Six_Nations_Championship",
		[
			[
				"England",
				[],
				""
			],
			[
				"France",
				[],
				""
			],
			[
				"Ireland",
				[],
				""
			],
			[
				"Italy",
				[],
				""
			],
			[
				"Scotland",
				[],
				""
			],
			[
				"Wales",
				[],
				""
			]
		]
	],
	[
		"grand-slams-2000",
		"Six Nations Grand Slams since 2000",
		"Name every country to win a Six Nations Grand Slam, 2000 to 2025.",
		"https://en.wikipedia.org/wiki/Grand_Slam_(rugby_union)",
		[
			[
				"Wales",
				[],
				"4 Grand Slams"
			],
			[
				"France",
				[],
				"4 Grand Slams"
			],
			[
				"Ireland",
				[],
				"2009, 2018, 2023"
			],
			[
				"England",
				[],
				"2003, 2016"
			]
		]
	],
	[
		"super-league-gf",
		"Super League Grand Final winners",
		"Name every club to win the Super League Grand Final, 1998 to 2024.",
		"https://en.wikipedia.org/wiki/Super_League_Grand_Final",
		[
			[
				"St Helens",
				["saints"],
				"9 wins"
			],
			[
				"Leeds Rhinos",
				["leeds"],
				"8 wins"
			],
			[
				"Wigan Warriors",
				["wigan"],
				"7 wins"
			],
			[
				"Bradford Bulls",
				["bradford"],
				"2001, 2003, 2005"
			]
		]
	],
	[
		"rlwc-winners",
		"Rugby League World Cup winners",
		"Name every country to win the Rugby League World Cup, 1954 to 2021.",
		"https://en.wikipedia.org/wiki/Rugby_League_World_Cup",
		[
			[
				"Australia",
				[],
				"12 titles"
			],
			[
				"Great Britain",
				["gb"],
				"1954, 1960, 1972"
			],
			[
				"New Zealand",
				[],
				"2008"
			]
		]
	],
	[
		"rugby-positions",
		"Rugby union positions",
		"Name the ten different position names in a rugby union team.",
		"https://en.wikipedia.org/wiki/Rugby_union_positions",
		[
			[
				"Prop",
				[],
				"Two in the front row"
			],
			[
				"Hooker",
				[],
				""
			],
			[
				"Lock",
				["second row"],
				""
			],
			[
				"Flanker",
				["wing forward"],
				""
			],
			[
				"Number 8",
				["number eight"],
				""
			],
			[
				"Scrum-half",
				["scrum half"],
				""
			],
			[
				"Fly-half",
				[
					"fly half",
					"outside half",
					"stand-off"
				],
				""
			],
			[
				"Centre",
				[],
				""
			],
			[
				"Wing",
				["winger"],
				""
			],
			[
				"Full-back",
				["full back", "fullback"],
				""
			]
		]
	],
	[
		"french-men-2000",
		"French Open men's champions since 2000",
		"Name every man to win the French Open singles, 2000 to 2025.",
		"https://en.wikipedia.org/wiki/List_of_French_Open_men%27s_singles_champions",
		[
			[
				"Gustavo Kuerten",
				["kuerten"],
				"2000, 2001"
			],
			[
				"Albert Costa",
				["costa"],
				"2002"
			],
			[
				"Juan Carlos Ferrero",
				["ferrero"],
				"2003"
			],
			[
				"Gastón Gaudio",
				["gaudio"],
				"2004"
			],
			[
				"Rafael Nadal",
				["nadal"],
				"14 titles"
			],
			[
				"Roger Federer",
				["federer"],
				"2009"
			],
			[
				"Stan Wawrinka",
				["wawrinka"],
				"2015"
			],
			[
				"Novak Djokovic",
				["djokovic"],
				"3 titles"
			],
			[
				"Carlos Alcaraz",
				["alcaraz"],
				"2024, 2025"
			]
		]
	],
	[
		"french-women-2000",
		"French Open women's champions since 2000",
		"Name every woman to win the French Open singles, 2000 to 2025.",
		"https://en.wikipedia.org/wiki/List_of_French_Open_women%27s_singles_champions",
		[
			[
				"Mary Pierce",
				["pierce"],
				"2000"
			],
			[
				"Jennifer Capriati",
				["capriati"],
				"2001"
			],
			[
				"Serena Williams",
				["serena"],
				"2002, 2013, 2015"
			],
			[
				"Justine Henin",
				["henin"],
				"4 titles"
			],
			[
				"Anastasia Myskina",
				["myskina"],
				"2004"
			],
			[
				"Ana Ivanovic",
				["ivanovic"],
				"2008"
			],
			[
				"Svetlana Kuznetsova",
				["kuznetsova"],
				"2009"
			],
			[
				"Francesca Schiavone",
				["schiavone"],
				"2010"
			],
			[
				"Li Na",
				[],
				"2011"
			],
			[
				"Maria Sharapova",
				["sharapova"],
				"2012, 2014"
			],
			[
				"Garbiñe Muguruza",
				["muguruza"],
				"2016"
			],
			[
				"Jeļena Ostapenko",
				["ostapenko"],
				"2017"
			],
			[
				"Simona Halep",
				["halep"],
				"2018"
			],
			[
				"Ashleigh Barty",
				["barty", "ash barty"],
				"2019"
			],
			[
				"Iga Świątek",
				["swiatek"],
				"4 titles"
			],
			[
				"Barbora Krejčíková",
				["krejcikova"],
				"2021"
			],
			[
				"Coco Gauff",
				["gauff"],
				"2025"
			]
		]
	],
	[
		"ao-men-2000",
		"Australian Open men's champions since 2000",
		"Name every man to win the Australian Open singles, 2000 to 2025.",
		"https://en.wikipedia.org/wiki/List_of_Australian_Open_men%27s_singles_champions",
		[
			[
				"Andre Agassi",
				["agassi"],
				"2000, 2001, 2003"
			],
			[
				"Thomas Johansson",
				["johansson"],
				"2002"
			],
			[
				"Roger Federer",
				["federer"],
				"6 titles"
			],
			[
				"Marat Safin",
				["safin"],
				"2005"
			],
			[
				"Rafael Nadal",
				["nadal"],
				"2009, 2022"
			],
			[
				"Novak Djokovic",
				["djokovic"],
				"10 titles"
			],
			[
				"Stan Wawrinka",
				["wawrinka"],
				"2014"
			],
			[
				"Jannik Sinner",
				["sinner"],
				"2024, 2025"
			]
		]
	],
	[
		"ao-women-2000",
		"Australian Open women's champions since 2000",
		"Name every woman to win the Australian Open singles, 2000 to 2025.",
		"https://en.wikipedia.org/wiki/List_of_Australian_Open_women%27s_singles_champions",
		[
			[
				"Lindsay Davenport",
				["davenport"],
				"2000"
			],
			[
				"Jennifer Capriati",
				["capriati"],
				"2001, 2002"
			],
			[
				"Serena Williams",
				["serena", "williams"],
				"7 titles"
			],
			[
				"Justine Henin",
				["henin"],
				"2004"
			],
			[
				"Amélie Mauresmo",
				["mauresmo"],
				"2006"
			],
			[
				"Maria Sharapova",
				["sharapova"],
				"2008"
			],
			[
				"Kim Clijsters",
				["clijsters"],
				"2011"
			],
			[
				"Victoria Azarenka",
				["azarenka"],
				"2012, 2013"
			],
			[
				"Li Na",
				[],
				"2014"
			],
			[
				"Angelique Kerber",
				["kerber"],
				"2016"
			],
			[
				"Caroline Wozniacki",
				["wozniacki"],
				"2018"
			],
			[
				"Naomi Osaka",
				["osaka"],
				"2019, 2021"
			],
			[
				"Sofia Kenin",
				["kenin"],
				"2020"
			],
			[
				"Ashleigh Barty",
				["barty", "ash barty"],
				"2022"
			],
			[
				"Aryna Sabalenka",
				["sabalenka"],
				"2023, 2024"
			],
			[
				"Madison Keys",
				["keys"],
				"2025"
			]
		]
	],
	[
		"uso-men-2000",
		"US Open men's champions since 2000",
		"Name every man to win the US Open singles, 2000 to 2025.",
		"https://en.wikipedia.org/wiki/List_of_US_Open_men%27s_singles_champions",
		[
			[
				"Marat Safin",
				["safin"],
				"2000"
			],
			[
				"Lleyton Hewitt",
				["hewitt"],
				"2001"
			],
			[
				"Pete Sampras",
				["sampras"],
				"2002"
			],
			[
				"Andy Roddick",
				["roddick"],
				"2003"
			],
			[
				"Roger Federer",
				["federer"],
				"5 in a row"
			],
			[
				"Juan Martín del Potro",
				["del potro"],
				"2009"
			],
			[
				"Rafael Nadal",
				["nadal"],
				"4 titles"
			],
			[
				"Novak Djokovic",
				["djokovic"],
				"4 titles"
			],
			[
				"Andy Murray",
				["murray"],
				"2012"
			],
			[
				"Marin Čilić",
				["cilic"],
				"2014"
			],
			[
				"Stan Wawrinka",
				["wawrinka"],
				"2016"
			],
			[
				"Dominic Thiem",
				["thiem"],
				"2020"
			],
			[
				"Daniil Medvedev",
				["medvedev"],
				"2021"
			],
			[
				"Carlos Alcaraz",
				["alcaraz"],
				"2022, 2025"
			],
			[
				"Jannik Sinner",
				["sinner"],
				"2024"
			]
		]
	],
	[
		"uso-women-2000",
		"US Open women's champions since 2000",
		"Name every woman to win the US Open singles, 2000 to 2025.",
		"https://en.wikipedia.org/wiki/List_of_US_Open_women%27s_singles_champions",
		[
			[
				"Venus Williams",
				["venus"],
				"2000, 2001"
			],
			[
				"Serena Williams",
				["serena"],
				"5 titles since 2000"
			],
			[
				"Justine Henin",
				["henin"],
				"2003, 2007"
			],
			[
				"Svetlana Kuznetsova",
				["kuznetsova"],
				"2004"
			],
			[
				"Kim Clijsters",
				["clijsters"],
				"3 titles"
			],
			[
				"Maria Sharapova",
				["sharapova"],
				"2006"
			],
			[
				"Sam Stosur",
				["stosur", "samantha stosur"],
				"2011"
			],
			[
				"Flavia Pennetta",
				["pennetta"],
				"2015"
			],
			[
				"Angelique Kerber",
				["kerber"],
				"2016"
			],
			[
				"Sloane Stephens",
				["stephens"],
				"2017"
			],
			[
				"Naomi Osaka",
				["osaka"],
				"2018, 2020"
			],
			[
				"Bianca Andreescu",
				["andreescu"],
				"2019"
			],
			[
				"Emma Raducanu",
				["raducanu"],
				"2021"
			],
			[
				"Iga Świątek",
				["swiatek"],
				"2022"
			],
			[
				"Coco Gauff",
				["gauff"],
				"2023"
			],
			[
				"Aryna Sabalenka",
				["sabalenka"],
				"2024, 2025"
			]
		]
	],
	[
		"british-slam-champs",
		"British Grand Slam singles champions",
		"Name every British player to win a Grand Slam singles title in the Open era, 1968 to 2025.",
		"https://en.wikipedia.org/wiki/List_of_Grand_Slam_singles_champions",
		[
			[
				"Virginia Wade",
				["wade"],
				"3 titles"
			],
			[
				"Ann Jones",
				["jones"],
				"Wimbledon 1969"
			],
			[
				"Sue Barker",
				["barker"],
				"French Open 1976"
			],
			[
				"Andy Murray",
				["murray"],
				"3 titles"
			],
			[
				"Emma Raducanu",
				["raducanu"],
				"US Open 2021"
			]
		]
	],
	[
		"masters-2000",
		"Masters champions since 2000",
		"Name every man to win the Masters, 2000 to 2025.",
		"https://en.wikipedia.org/wiki/List_of_Masters_Tournament_champions",
		[
			[
				"Vijay Singh",
				["singh"],
				"2000"
			],
			[
				"Tiger Woods",
				["woods", "tiger"],
				"4 wins"
			],
			[
				"Mike Weir",
				["weir"],
				"2003"
			],
			[
				"Phil Mickelson",
				["mickelson"],
				"3 wins"
			],
			[
				"Zach Johnson",
				["zach"],
				"2007"
			],
			[
				"Trevor Immelman",
				["immelman"],
				"2008"
			],
			[
				"Ángel Cabrera",
				["cabrera"],
				"2009"
			],
			[
				"Charl Schwartzel",
				["schwartzel"],
				"2011"
			],
			[
				"Bubba Watson",
				["watson", "bubba"],
				"2012, 2014"
			],
			[
				"Adam Scott",
				["scott"],
				"2013"
			],
			[
				"Jordan Spieth",
				["spieth"],
				"2015"
			],
			[
				"Danny Willett",
				["willett"],
				"2016"
			],
			[
				"Sergio García",
				["garcia", "sergio"],
				"2017"
			],
			[
				"Patrick Reed",
				["reed"],
				"2018"
			],
			[
				"Dustin Johnson",
				["dustin"],
				"2020"
			],
			[
				"Hideki Matsuyama",
				["matsuyama"],
				"2021"
			],
			[
				"Scottie Scheffler",
				["scheffler"],
				"2022, 2024"
			],
			[
				"Jon Rahm",
				["rahm"],
				"2023"
			],
			[
				"Rory McIlroy",
				["mcilroy", "rory"],
				"2025"
			]
		]
	],
	[
		"open-2000",
		"Open champions since 2000",
		"Name every man to win The Open, 2000 to 2025. There was no Open in 2020.",
		"https://en.wikipedia.org/wiki/List_of_Open_Championship_champions",
		[
			[
				"Tiger Woods",
				["woods", "tiger"],
				"3 wins"
			],
			[
				"David Duval",
				["duval"],
				"2001"
			],
			[
				"Ernie Els",
				["els"],
				"2002, 2012"
			],
			[
				"Ben Curtis",
				["curtis"],
				"2003"
			],
			[
				"Todd Hamilton",
				["hamilton"],
				"2004"
			],
			[
				"Pádraig Harrington",
				["harrington", "padraig harrington"],
				"2007, 2008"
			],
			[
				"Stewart Cink",
				["cink"],
				"2009"
			],
			[
				"Louis Oosthuizen",
				["oosthuizen"],
				"2010"
			],
			[
				"Darren Clarke",
				["clarke"],
				"2011"
			],
			[
				"Phil Mickelson",
				["mickelson"],
				"2013"
			],
			[
				"Rory McIlroy",
				["mcilroy"],
				"2014"
			],
			[
				"Zach Johnson",
				["johnson"],
				"2015"
			],
			[
				"Henrik Stenson",
				["stenson"],
				"2016"
			],
			[
				"Jordan Spieth",
				["spieth"],
				"2017"
			],
			[
				"Francesco Molinari",
				["molinari"],
				"2018"
			],
			[
				"Shane Lowry",
				["lowry"],
				"2019"
			],
			[
				"Collin Morikawa",
				["morikawa"],
				"2021"
			],
			[
				"Cameron Smith",
				["smith"],
				"2022"
			],
			[
				"Brian Harman",
				["harman"],
				"2023"
			],
			[
				"Xander Schauffele",
				["schauffele"],
				"2024"
			],
			[
				"Scottie Scheffler",
				["scheffler"],
				"2025"
			]
		]
	],
	[
		"ryder-captains",
		"European Ryder Cup captains since 1983",
		"Name every man to captain Europe at the Ryder Cup, 1983 to 2025.",
		"https://en.wikipedia.org/wiki/Ryder_Cup",
		[
			[
				"Tony Jacklin",
				["jacklin"],
				"4 times"
			],
			[
				"Bernard Gallacher",
				["gallacher"],
				"1991 to 1995"
			],
			[
				"Seve Ballesteros",
				["ballesteros", "seve"],
				"1997"
			],
			[
				"Mark James",
				["james"],
				"1999"
			],
			[
				"Sam Torrance",
				["torrance"],
				"2002"
			],
			[
				"Bernhard Langer",
				["langer"],
				"2004"
			],
			[
				"Ian Woosnam",
				["woosnam"],
				"2006"
			],
			[
				"Nick Faldo",
				["faldo"],
				"2008"
			],
			[
				"Colin Montgomerie",
				["montgomerie", "monty"],
				"2010"
			],
			[
				"José María Olazábal",
				["olazabal"],
				"2012"
			],
			[
				"Paul McGinley",
				["mcginley"],
				"2014"
			],
			[
				"Darren Clarke",
				["clarke"],
				"2016"
			],
			[
				"Thomas Bjørn",
				["bjorn"],
				"2018"
			],
			[
				"Pádraig Harrington",
				["harrington", "padraig harrington"],
				"2021"
			],
			[
				"Luke Donald",
				["donald"],
				"2023, 2025"
			]
		]
	],
	[
		"womens-majors",
		"Women's golf majors",
		"Name the five women's golf majors.",
		"https://en.wikipedia.org/wiki/Women%27s_major_golf_championships",
		[
			[
				"Chevron Championship",
				["chevron", "the chevron"],
				"Was the ANA Inspiration"
			],
			[
				"US Women's Open",
				["us open"],
				""
			],
			[
				"Women's PGA Championship",
				["kpmg womens pga", "pga championship"],
				""
			],
			[
				"Evian Championship",
				["evian", "the evian"],
				""
			],
			[
				"Women's British Open",
				[
					"british open",
					"womens open",
					"aig womens open"
				],
				""
			]
		]
	],
	[
		"british-f1-champs",
		"British F1 world champions",
		"Name every British Formula 1 world champion, 1950 to 2025.",
		"https://en.wikipedia.org/wiki/List_of_Formula_One_World_Drivers%27_Champions",
		[
			[
				"Mike Hawthorn",
				["hawthorn"],
				"1958"
			],
			[
				"Graham Hill",
				["graham"],
				"1962, 1968"
			],
			[
				"Jim Clark",
				["clark"],
				"1963, 1965"
			],
			[
				"John Surtees",
				["surtees"],
				"1964"
			],
			[
				"Jackie Stewart",
				["stewart"],
				"3 titles"
			],
			[
				"James Hunt",
				["hunt"],
				"1976"
			],
			[
				"Nigel Mansell",
				["mansell"],
				"1992"
			],
			[
				"Damon Hill",
				["damon"],
				"1996"
			],
			[
				"Jenson Button",
				["button"],
				"2009"
			],
			[
				"Lewis Hamilton",
				["hamilton"],
				"7 titles"
			],
			[
				"Lando Norris",
				["norris"],
				"2025"
			]
		]
	],
	[
		"f1-teams-2025",
		"The 2025 F1 grid",
		"Name the ten teams on the 2025 Formula 1 grid.",
		"https://en.wikipedia.org/wiki/2025_Formula_One_World_Championship",
		[
			[
				"McLaren",
				[],
				"Constructors' champions"
			],
			[
				"Ferrari",
				[],
				""
			],
			[
				"Mercedes",
				[],
				""
			],
			[
				"Red Bull",
				["red bull racing"],
				""
			],
			[
				"Williams",
				[],
				""
			],
			[
				"Aston Martin",
				[],
				""
			],
			[
				"Alpine",
				[],
				""
			],
			[
				"Haas",
				[],
				""
			],
			[
				"Racing Bulls",
				["rb", "visa cash app rb"],
				""
			],
			[
				"Sauber",
				["kick sauber", "stake"],
				""
			]
		]
	],
	[
		"f1-three-titles",
		"Three-time F1 champions",
		"Name every driver with three or more Formula 1 world titles, up to 2025.",
		"https://en.wikipedia.org/wiki/List_of_Formula_One_World_Drivers%27_Champions",
		[
			[
				"Lewis Hamilton",
				["hamilton"],
				"7"
			],
			[
				"Michael Schumacher",
				["schumacher"],
				"7"
			],
			[
				"Juan Manuel Fangio",
				["fangio"],
				"5"
			],
			[
				"Alain Prost",
				["prost"],
				"4"
			],
			[
				"Sebastian Vettel",
				["vettel"],
				"4"
			],
			[
				"Max Verstappen",
				["verstappen"],
				"4"
			],
			[
				"Jack Brabham",
				["brabham"],
				"3"
			],
			[
				"Jackie Stewart",
				["stewart"],
				"3"
			],
			[
				"Niki Lauda",
				["lauda"],
				"3"
			],
			[
				"Nelson Piquet",
				["piquet"],
				"3"
			],
			[
				"Ayrton Senna",
				["senna"],
				"3"
			]
		]
	],
	[
		"olympic-100m-men",
		"Olympic men's 100m champions since 1980",
		"Name every Olympic men's 100m champion, 1980 to 2024.",
		"https://en.wikipedia.org/wiki/100_metres_at_the_Olympics",
		[
			[
				"Allan Wells",
				["wells"],
				"1980"
			],
			[
				"Carl Lewis",
				["lewis"],
				"1984, 1988"
			],
			[
				"Linford Christie",
				["christie"],
				"1992"
			],
			[
				"Donovan Bailey",
				["bailey"],
				"1996"
			],
			[
				"Maurice Greene",
				["greene"],
				"2000"
			],
			[
				"Justin Gatlin",
				["gatlin"],
				"2004"
			],
			[
				"Usain Bolt",
				["bolt"],
				"3 titles"
			],
			[
				"Marcell Jacobs",
				["jacobs"],
				"2021"
			],
			[
				"Noah Lyles",
				["lyles"],
				"2024"
			]
		]
	],
	[
		"olympic-100m-women",
		"Olympic women's 100m champions since 1984",
		"Name every Olympic women's 100m champion, 1984 to 2024. No champion is recorded for 2000.",
		"https://en.wikipedia.org/wiki/100_metres_at_the_Olympics",
		[
			[
				"Evelyn Ashford",
				["ashford"],
				"1984"
			],
			[
				"Florence Griffith Joyner",
				[
					"griffith joyner",
					"flo-jo",
					"flojo"
				],
				"1988"
			],
			[
				"Gail Devers",
				["devers"],
				"1992, 1996"
			],
			[
				"Yuliya Nesterenko",
				["nesterenko"],
				"2004"
			],
			[
				"Shelly-Ann Fraser-Pryce",
				["fraser-pryce", "fraser pryce"],
				"2008, 2012"
			],
			[
				"Elaine Thompson-Herah",
				["thompson-herah", "thompson"],
				"2016, 2021"
			],
			[
				"Julien Alfred",
				["alfred"],
				"2024"
			]
		]
	],
	[
		"marathon-majors",
		"World Marathon Majors",
		"Name the seven World Marathon Majors cities.",
		"https://en.wikipedia.org/wiki/World_Marathon_Majors",
		[
			[
				"London",
				[],
				""
			],
			[
				"Berlin",
				[],
				""
			],
			[
				"Boston",
				[],
				""
			],
			[
				"Chicago",
				[],
				""
			],
			[
				"New York",
				["new york city", "nyc"],
				""
			],
			[
				"Tokyo",
				[],
				""
			],
			[
				"Sydney",
				[],
				"Added in 2025"
			]
		]
	],
	[
		"heptathlon-events",
		"Heptathlon events",
		"Name the seven events in the heptathlon.",
		"https://en.wikipedia.org/wiki/Heptathlon",
		[
			[
				"100m hurdles",
				["hurdles", "100 metres hurdles"],
				"Day 1"
			],
			[
				"High jump",
				[],
				"Day 1"
			],
			[
				"Shot put",
				["shot"],
				"Day 1"
			],
			[
				"200m",
				["200 metres", "200"],
				"Day 1"
			],
			[
				"Long jump",
				[],
				"Day 2"
			],
			[
				"Javelin",
				["javelin throw"],
				"Day 2"
			],
			[
				"800m",
				["800 metres", "800"],
				"Day 2"
			]
		]
	],
	[
		"decathlon-events",
		"Decathlon events",
		"Name the ten events in the decathlon.",
		"https://en.wikipedia.org/wiki/Decathlon",
		[
			[
				"100m",
				["100 metres", "100"],
				"Day 1"
			],
			[
				"Long jump",
				[],
				"Day 1"
			],
			[
				"Shot put",
				["shot"],
				"Day 1"
			],
			[
				"High jump",
				[],
				"Day 1"
			],
			[
				"400m",
				["400 metres", "400"],
				"Day 1"
			],
			[
				"110m hurdles",
				["hurdles", "110 metres hurdles"],
				"Day 2"
			],
			[
				"Discus",
				["discus throw"],
				"Day 2"
			],
			[
				"Pole vault",
				[],
				"Day 2"
			],
			[
				"Javelin",
				["javelin throw"],
				"Day 2"
			],
			[
				"1500m",
				["1500 metres", "1500"],
				"Day 2"
			]
		]
	],
	[
		"winter-hosts",
		"Winter Olympic hosts, 1980 to 2022",
		"Name every host city of the Winter Olympics, 1980 to 2022.",
		"https://en.wikipedia.org/wiki/Winter_Olympic_Games",
		[
			[
				"Lake Placid",
				[],
				"1980"
			],
			[
				"Sarajevo",
				[],
				"1984"
			],
			[
				"Calgary",
				[],
				"1988"
			],
			[
				"Albertville",
				[],
				"1992"
			],
			[
				"Lillehammer",
				[],
				"1994"
			],
			[
				"Nagano",
				[],
				"1998"
			],
			[
				"Salt Lake City",
				["salt lake"],
				"2002"
			],
			[
				"Turin",
				["torino"],
				"2006"
			],
			[
				"Vancouver",
				[],
				"2010"
			],
			[
				"Sochi",
				[],
				"2014"
			],
			[
				"Pyeongchang",
				["pyeongchang county"],
				"2018"
			],
			[
				"Beijing",
				[],
				"2022"
			]
		]
	],
	[
		"commonwealth-hosts",
		"Commonwealth Games hosts since 1970",
		"Name every host city of the Commonwealth Games, 1970 to 2022.",
		"https://en.wikipedia.org/wiki/Commonwealth_Games",
		[
			[
				"Edinburgh",
				[],
				"1970, 1986"
			],
			[
				"Christchurch",
				[],
				"1974"
			],
			[
				"Edmonton",
				[],
				"1978"
			],
			[
				"Brisbane",
				[],
				"1982"
			],
			[
				"Auckland",
				[],
				"1990"
			],
			[
				"Victoria",
				[],
				"1994"
			],
			[
				"Kuala Lumpur",
				[],
				"1998"
			],
			[
				"Manchester",
				[],
				"2002"
			],
			[
				"Melbourne",
				[],
				"2006"
			],
			[
				"Delhi",
				["new delhi"],
				"2010"
			],
			[
				"Glasgow",
				[],
				"2014"
			],
			[
				"Gold Coast",
				[],
				"2018"
			],
			[
				"Birmingham",
				[],
				"2022"
			]
		]
	],
	[
		"olympic-rings",
		"Olympic ring colours",
		"Name the five colours of the Olympic rings.",
		"https://en.wikipedia.org/wiki/Olympic_symbols",
		[
			[
				"Blue",
				[],
				""
			],
			[
				"Yellow",
				[],
				""
			],
			[
				"Black",
				[],
				""
			],
			[
				"Green",
				[],
				""
			],
			[
				"Red",
				[],
				""
			]
		]
	],
	[
		"swim-strokes",
		"Olympic swimming strokes",
		"Name the four strokes swum in an individual medley.",
		"https://en.wikipedia.org/wiki/Individual_medley",
		[
			[
				"Butterfly",
				["fly"],
				"First"
			],
			[
				"Backstroke",
				["back"],
				"Second"
			],
			[
				"Breaststroke",
				["breast"],
				"Third"
			],
			[
				"Freestyle",
				["free", "front crawl"],
				"Last"
			]
		]
	],
	[
		"monuments",
		"Cycling's five Monuments",
		"Name the five Monuments of men's road cycling.",
		"https://en.wikipedia.org/wiki/Cycling_monument",
		[
			[
				"Milan-San Remo",
				["milan san remo", "milano-sanremo"],
				"March"
			],
			[
				"Tour of Flanders",
				["ronde van vlaanderen", "flanders"],
				"April"
			],
			[
				"Paris-Roubaix",
				["paris roubaix"],
				"April"
			],
			[
				"Liège-Bastogne-Liège",
				["liege bastogne liege", "liege"],
				"April"
			],
			[
				"Il Lombardia",
				[
					"giro di lombardia",
					"tour of lombardy",
					"lombardia"
				],
				"October"
			]
		]
	],
	[
		"tour-jerseys",
		"Tour de France jerseys",
		"Name the four classification jerseys at the Tour de France.",
		"https://en.wikipedia.org/wiki/Tour_de_France",
		[
			[
				"Yellow",
				["maillot jaune"],
				"Overall leader"
			],
			[
				"Green",
				["maillot vert"],
				"Points"
			],
			[
				"Polka dot",
				["polka-dot", "king of the mountains"],
				"Mountains"
			],
			[
				"White",
				["maillot blanc"],
				"Best young rider"
			]
		]
	],
	[
		"snooker-world-2000",
		"World snooker champions since 2000",
		"Name every world snooker champion, 2000 to 2025.",
		"https://en.wikipedia.org/wiki/List_of_World_Snooker_Champions",
		[
			[
				"Mark Williams",
				["williams"],
				"2000, 2003, 2018"
			],
			[
				"Ronnie O'Sullivan",
				[
					"o'sullivan",
					"osullivan",
					"ronnie"
				],
				"7 titles"
			],
			[
				"Peter Ebdon",
				["ebdon"],
				"2002"
			],
			[
				"Shaun Murphy",
				["murphy"],
				"2005"
			],
			[
				"Graeme Dott",
				["dott"],
				"2006"
			],
			[
				"John Higgins",
				["higgins"],
				"3 titles"
			],
			[
				"Neil Robertson",
				["robertson"],
				"2010"
			],
			[
				"Mark Selby",
				["selby"],
				"4 titles"
			],
			[
				"Stuart Bingham",
				["bingham"],
				"2015"
			],
			[
				"Judd Trump",
				["trump"],
				"2019"
			],
			[
				"Luca Brecel",
				["brecel"],
				"2023"
			],
			[
				"Kyren Wilson",
				["wilson"],
				"2024"
			],
			[
				"Zhao Xintong",
				["zhao"],
				"2025"
			]
		]
	],
	[
		"snooker-balls",
		"Snooker balls",
		"Name the seven colours of ball in snooker.",
		"https://en.wikipedia.org/wiki/Snooker",
		[
			[
				"Red",
				[],
				"1 point"
			],
			[
				"Yellow",
				[],
				"2 points"
			],
			[
				"Green",
				[],
				"3 points"
			],
			[
				"Brown",
				[],
				"4 points"
			],
			[
				"Blue",
				[],
				"5 points"
			],
			[
				"Pink",
				[],
				"6 points"
			],
			[
				"Black",
				[],
				"7 points"
			]
		]
	],
	[
		"classics",
		"The British Classics",
		"Name the five British flat-racing Classics.",
		"https://en.wikipedia.org/wiki/British_Classic_Races",
		[
			[
				"2,000 Guineas",
				["2000 guineas", "two thousand guineas"],
				"Newmarket"
			],
			[
				"1,000 Guineas",
				["1000 guineas", "one thousand guineas"],
				"Newmarket"
			],
			[
				"Derby",
				["epsom derby", "the derby"],
				"Epsom"
			],
			[
				"Oaks",
				["epsom oaks", "the oaks"],
				"Epsom"
			],
			[
				"St Leger",
				["st. leger", "saint leger"],
				"Doncaster"
			]
		]
	],
	[
		"spoty-2010",
		"BBC Sports Personality since 2010",
		"Name every winner of BBC Sports Personality of the Year, 2010 to 2024.",
		"https://en.wikipedia.org/wiki/BBC_Sports_Personality_of_the_Year_Award",
		[
			[
				"AP McCoy",
				["mccoy", "tony mccoy"],
				"2010"
			],
			[
				"Mark Cavendish",
				["cavendish"],
				"2011"
			],
			[
				"Bradley Wiggins",
				["wiggins"],
				"2012"
			],
			[
				"Andy Murray",
				["murray"],
				"3 wins"
			],
			[
				"Lewis Hamilton",
				["hamilton"],
				"2014, 2020"
			],
			[
				"Mo Farah",
				["farah"],
				"2017"
			],
			[
				"Geraint Thomas",
				["thomas"],
				"2018"
			],
			[
				"Ben Stokes",
				["stokes"],
				"2019"
			],
			[
				"Emma Raducanu",
				["raducanu"],
				"2021"
			],
			[
				"Beth Mead",
				["mead"],
				"2022"
			],
			[
				"Mary Earps",
				["earps"],
				"2023"
			],
			[
				"Keely Hodgkinson",
				["hodgkinson"],
				"2024"
			]
		]
	],
	[
		"six-nations-stadiums",
		"Six Nations stadiums",
		"Name the six home grounds of the Six Nations teams.",
		"https://en.wikipedia.org/wiki/Six_Nations_Championship",
		[
			[
				"Twickenham",
				["allianz stadium"],
				"England"
			],
			[
				"Stade de France",
				[],
				"France"
			],
			[
				"Aviva Stadium",
				["aviva", "lansdowne road"],
				"Ireland"
			],
			[
				"Stadio Olimpico",
				["olimpico"],
				"Italy"
			],
			[
				"Murrayfield",
				["scottish gas murrayfield"],
				"Scotland"
			],
			[
				"Principality Stadium",
				["principality", "millennium stadium"],
				"Wales"
			]
		]
	],
	[
		"netball-positions",
		"Netball positions",
		"Name the seven positions in a netball team.",
		"https://en.wikipedia.org/wiki/Netball",
		[
			[
				"Goal Shooter",
				["gs"],
				""
			],
			[
				"Goal Attack",
				["ga"],
				""
			],
			[
				"Wing Attack",
				["wa"],
				""
			],
			[
				"Centre",
				[],
				""
			],
			[
				"Wing Defence",
				["wd"],
				""
			],
			[
				"Goal Defence",
				["gd"],
				""
			],
			[
				"Goal Keeper",
				["gk", "goalkeeper"],
				""
			]
		]
	],
	[
		"netball-wc-winners",
		"Netball World Cup winners",
		"Name every country to win the Netball World Cup, 1963 to 2023.",
		"https://en.wikipedia.org/wiki/Netball_World_Cup",
		[
			[
				"Australia",
				[],
				"12 titles"
			],
			[
				"New Zealand",
				[],
				"5 titles"
			],
			[
				"Trinidad and Tobago",
				["trinidad"],
				"1979, joint"
			]
		]
	],
	[
		"nba-california",
		"California's NBA teams",
		"Name the four NBA teams based in California.",
		"https://en.wikipedia.org/wiki/National_Basketball_Association",
		[
			[
				"Los Angeles Lakers",
				["lakers"],
				""
			],
			[
				"Los Angeles Clippers",
				["clippers"],
				""
			],
			[
				"Golden State Warriors",
				["warriors"],
				""
			],
			[
				"Sacramento Kings",
				["kings"],
				""
			]
		]
	],
	[
		"london-pl-grounds",
		"London's Premier League grounds",
		"Name the seven grounds of London's 2025-26 Premier League clubs.",
		"https://en.wikipedia.org/wiki/List_of_Premier_League_stadiums",
		[
			[
				"Emirates Stadium",
				["emirates"],
				"Arsenal"
			],
			[
				"Stamford Bridge",
				[],
				"Chelsea"
			],
			[
				"Tottenham Hotspur Stadium",
				[],
				"Tottenham"
			],
			[
				"London Stadium",
				["olympic stadium"],
				"West Ham"
			],
			[
				"Selhurst Park",
				[],
				"Crystal Palace"
			],
			[
				"Craven Cottage",
				[],
				"Fulham"
			],
			[
				"Gtech Community Stadium",
				["brentford community stadium", "gtech"],
				"Brentford"
			]
		]
	]
];
// src/pages/name-them-all.astro
var name_them_all_exports = /* @__PURE__ */ __exportAll({
	default: () => $$NameThemAll,
	file: () => $$file,
	url: () => $$url
});
var $$NameThemAll = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Name Them All: timed sport list quizzes | SportingBrain",
		"description": "Every Premier League champion, every Ballon d'Or winner, every PDC world champion. Type them all before the clock runs out.",
		"page": "lists"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pg-head"><h1>Name Them All</h1><p>Type every answer before the clock runs out. No options to pick from, and spelling doesn't need to be perfect. ${LISTS.length} lists, each checked against its official record.</p></header><div id="vs"></div><section id="nt" aria-live="polite"></section>${renderComponent($$result, "AdSlot", $$AdSlot, { "name": "game_result" })}<script id="ntData" type="application/json">${unescapeHTML(JSON.stringify(LISTS))}<\/script>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/name-them-all.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/name-them-all.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/name-them-all.astro";
var $$url = "/name-them-all.html";
// \0virtual:astro:page:src/pages/name-them-all@_@astro
var page = () => name_them_all_exports;
export { page };
