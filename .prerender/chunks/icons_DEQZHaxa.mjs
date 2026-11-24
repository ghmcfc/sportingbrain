// src/scripts/icons.js
var P = {
	"call-it": "<path d=\"M14 40V14M24 40V14M34 40V14M12 13h24\"/><path d=\"M30 24l8 5-8 5z\" fill=\"currentColor\"/>",
	"call-it-football": "<circle cx=\"21\" cy=\"25\" r=\"13\"/><path d=\"M21 17l6 4-2 7h-8l-2-7z\"/><path d=\"M36 8v8h8\"/><path d=\"M44 16a10 10 0 0 0-8-8\"/>",
	"connections": "<rect x=\"6\" y=\"6\" width=\"16\" height=\"16\" rx=\"2\"/><rect x=\"26\" y=\"6\" width=\"16\" height=\"16\" rx=\"2\"/><rect x=\"6\" y=\"26\" width=\"16\" height=\"16\" rx=\"2\"/><rect x=\"26\" y=\"26\" width=\"16\" height=\"16\" rx=\"2\" fill=\"currentColor\"/>",
	"who-am-i": "<circle cx=\"24\" cy=\"16\" r=\"8\"/><path d=\"M8 42c2-9 8-14 16-14s14 5 16 14\"/><path d=\"M21 13a3 3 0 1 1 4 3c-1 .6-1 1.4-1 2.5\"/>",
	"ground-guesser": "<ellipse cx=\"24\" cy=\"30\" rx=\"19\" ry=\"9\"/><ellipse cx=\"24\" cy=\"30\" rx=\"10\" ry=\"4.5\"/><path d=\"M5 30V20c0-5 8.5-9 19-9s19 4 19 9v10\"/><path d=\"M13 8V4M35 8V4\"/>",
	"daily": "<path d=\"M24 6c-8 0-13 5-13 12 0 4 2 6 2 9v6h22v-6c0-3 2-5 2-9 0-7-5-12-13-12z\"/><path d=\"M18 39h12M20 44h8M24 12v14M18 19h12\"/>",
	"weekly-expert": "<path d=\"M24 5l5.5 11.5 12.5 1.7-9 8.8 2.2 12.5L24 33.6l-11.2 5.9L15 27l-9-8.8 12.5-1.7z\"/>",
	"pub-quiz": "<path d=\"M12 10h20l-2 32H14z\"/><path d=\"M32 16h4a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-5\"/><path d=\"M13 18h18\"/>",
	"name-them-all": "<path d=\"M8 12h4M8 22h4M8 32h4M17 12h12M17 22h10M17 32h8\"/><circle cx=\"37\" cy=\"33\" r=\"7\"/><path d=\"M37 29v4l2 2M35 22h4\"/>",
	"is-it-a-foul": "<path d=\"M6 22h20a10 10 0 1 1-10 10\"/><circle cx=\"16\" cy=\"32\" r=\"3\"/><path d=\"M26 22l12-8M30 30l12 0M26 14l4-8\"/>",
	"stat-attack": "<rect x=\"6\" y=\"10\" width=\"22\" height=\"30\" rx=\"3\"/><rect x=\"20\" y=\"6\" width=\"22\" height=\"30\" rx=\"3\" fill=\"currentColor\" fill-opacity=\".25\"/><path d=\"M26 16h10M26 22h7M26 28h10\"/>",
	"stats-detective": "<circle cx=\"20\" cy=\"20\" r=\"12\"/><path d=\"M29 29l13 13\"/><path d=\"M14 24v-6M20 24V14M26 24v-4\"/>",
	"pick-your-xi": "<rect x=\"6\" y=\"5\" width=\"36\" height=\"38\" rx=\"3\"/><path d=\"M6 24h36\"/><circle cx=\"24\" cy=\"24\" r=\"6\"/><circle cx=\"15\" cy=\"13\" r=\"2\" fill=\"currentColor\"/><circle cx=\"33\" cy=\"13\" r=\"2\" fill=\"currentColor\"/><circle cx=\"24\" cy=\"35\" r=\"2\" fill=\"currentColor\"/>",
	"rewind": "<path d=\"M24 14L8 24l16 10zM40 14L24 24l16 10z\"/>",
	"bingo": "<rect x=\"6\" y=\"6\" width=\"36\" height=\"36\" rx=\"3\"/><path d=\"M18 6v36M30 6v36M6 18h36M6 30h36\"/><circle cx=\"24\" cy=\"24\" r=\"3.5\" fill=\"currentColor\"/><circle cx=\"12\" cy=\"36\" r=\"3.5\" fill=\"currentColor\"/>",
	"advent": "<rect x=\"8\" y=\"6\" width=\"32\" height=\"38\" rx=\"2\"/><path d=\"M24 6v38\"/><circle cx=\"20\" cy=\"26\" r=\"1.5\" fill=\"currentColor\"/><path d=\"M28 14h6M28 20h6\"/>",
	"higher-or-lower": "<path d=\"M16 38V10M8 18l8-8 8 8M32 10v28M24 30l8 8 8-8\"/>",
	"true-or-false": "<path d=\"M6 25l6 6 12-14\"/><path d=\"M30 17l12 12M42 17L30 29\"/>",
	"speed-round": "<circle cx=\"24\" cy=\"27\" r=\"15\"/><path d=\"M24 27l7-6M20 6h8M24 6v6M38 12l3-3\"/>",
	"countdown": "<rect x=\"6\" y=\"10\" width=\"36\" height=\"32\" rx=\"3\"/><path d=\"M6 19h36M16 5v9M32 5v9\"/><path d=\"M17 29h5v8M28 29h4v8\"/>",
	"archive": "<rect x=\"6\" y=\"8\" width=\"36\" height=\"9\" rx=\"2\"/><path d=\"M9 17v23h30V17M19 25h10\"/>",
	"passport": "<rect x=\"10\" y=\"5\" width=\"28\" height=\"38\" rx=\"3\"/><circle cx=\"24\" cy=\"20\" r=\"7\"/><path d=\"M17 20h14M24 13c-3 4-3 10 0 14M24 13c3 4 3 10 0 14M17 34h14\"/>",
	"sports-day": "<circle cx=\"24\" cy=\"31\" r=\"10\"/><path d=\"M17 5l7 15 7-15M24 26v10M21 28l3-2\"/>",
	"challenge": "<circle cx=\"16\" cy=\"15\" r=\"6\"/><circle cx=\"33\" cy=\"17\" r=\"5\"/><path d=\"M5 41c1-8 5-13 11-13s10 5 11 13M27 41c1-6 3-10 6-10s6 4 7 10\"/>",
	"laughs": "<circle cx=\"24\" cy=\"24\" r=\"18\"/><path d=\"M15 27c2 6 5 8 9 8s7-2 9-8z\" fill=\"currentColor\"/><path d=\"M16 18l4 2-4 2M32 18l-4 2 4 2\"/>",
	"sports-grid": "<rect x=\"6\" y=\"6\" width=\"36\" height=\"36\" rx=\"3\"/><path d=\"M18 6v36M30 6v36M6 18h36M6 30h36\"/><path d=\"M20 24l3 3 5-6\"/>",
	"kids": "<circle cx=\"24\" cy=\"24\" r=\"17\"/><path d=\"M24 7l5 8-5 6-5-6zM7.5 20l9 1 2 8M40.5 20l-9 1-2 8M15 38l5-8h8l5 8\"/>"
};
function icon(slug, size = 40) {
	return `<svg class="gi" viewBox="0 0 48 48" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[slug] || P["daily"]}</svg>`;
}
Object.keys(P);
export { icon as t };
