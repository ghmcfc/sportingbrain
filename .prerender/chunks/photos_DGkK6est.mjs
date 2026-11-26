import { n as VENUES, t as venues_default } from "./venues_BXNZD0GZ.mjs";
// src/scripts/photos.js
var BASE = "/".replace(/\/?$/, "/");
var slug = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
var V = VENUES.map((v) => ({
	k: slug(v[0]),
	name: v[1],
	alt: v[2],
	sport: v[3],
	place: v[4]
})).filter((v) => venues_default[v.k]).map((v) => ({
	...v,
	m: venues_default[v.k]
}));
var SPORT = (s) => ({
	"Women's football": "Football",
	Rugby: "Rugby union"
})[s] || s;
var hit = (text, n) => n.length >= 4 && new RegExp("(^|[^a-z])" + n.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "([^a-z]|$)", "i").test(text);
function photoFor(text, sport, seed = 0, venue = "") {
	const t = String(text || "");
	let file = false;
	let v = venue ? V.find((x) => x.name === venue || x.alt.includes(venue.toLowerCase())) : null;
	if (!v) v = V.find((x) => [x.name, ...x.alt].some((n) => hit(t, n)));
	if (!v) {
		const pool = V.filter((x) => x.sport === SPORT(sport));
		if (pool.length) {
			v = pool[Math.abs(seed) % pool.length];
			file = true;
		}
	}
	if (v) return {
		src: `${BASE}photos/venues-sm/${v.m.file}`,
		alt: `${file ? "File photo of " : ""}${v.name}, ${v.place}`,
		credit: `${file ? "File photo: " : ""}${v.name}. Photo: ${v.m.author}, ${v.m.licence}, Wikimedia Commons`
	};
	const u = globalThis.SB_PHOTO ? globalThis.SB_PHOTO(sport, 800) : null, c = globalThis.SB_CREDIT ? globalThis.SB_CREDIT(sport) : null;
	if (u && c) return {
		src: u,
		alt: `File photo: ${c.what}`,
		credit: `File photo: ${c.what}. Photo: ${c.by}, Wikimedia Commons`
	};
	return u ? {
		src: u,
		alt: `${sport} artwork`,
		credit: "SportingBrain artwork"
	} : null;
}
export { photoFor as t };
