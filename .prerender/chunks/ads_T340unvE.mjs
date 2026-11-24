var ads_default = {
	_help: "Advertising switch. Leave client empty for no ads. When Gavin sends the AdSense publisher id (ca-pub-...) and slot ids, fill them in and publish. Kids Zone never shows ads.",
	client: "ca-pub-7183895569917347",
	slots: {
		"home_leaderboard": "",
		"home_infeed": "",
		"article_mid": "",
		"article_end": "",
		"game_result": ""
	},
	heights: {
		"home_leaderboard": 100,
		"home_infeed": 280,
		"article_mid": 280,
		"article_end": 280,
		"game_result": 100
	}
};
export { ads_default as t };
