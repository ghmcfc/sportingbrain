import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { t as ads_default } from "./ads_T340unvE.mjs";
// src/pages/ads.txt.ts
var ads_txt_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
function GET() {
	const pub = (ads_default.client || "").replace(/^ca-/, "");
	return new Response(pub ? `google.com, ${pub}, DIRECT, f08c47fec0942fa0\n` : "# Advertising not switched on yet\n", { headers: { "Content-Type": "text/plain" } });
}
// \0virtual:astro:page:src/pages/ads.txt@_@ts
var page = () => ads_txt_exports;
export { page };
