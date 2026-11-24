import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_HiHdV6xW.mjs";
// src/pages/app.astro
var app_exports = /* @__PURE__ */ __exportAll({
	default: () => $$App,
	file: () => $$file,
	url: () => $$url
});
var $$App = createComponent(($$result, $$props, $$slots) => {
	const base = "/".replace(/\/?$/, "/");
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Get the SportingBrain app | SportingBrain",
		"description": "Put SportingBrain on your phone or computer in ten seconds. Free, no app store, no sign-up. One tap to today's games.",
		"page": "app"
	}, { "default": async ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="app-hero"><img${addAttribute(`${base}assets/icon-192.png`, "src")} alt="" width="96" height="96"><div><p class="gg-kicker">Free. No app store. Ten seconds.</p><h1>Get the SportingBrain app</h1><p class="app-stand">One tap from your home screen to today's games. It opens full screen, like any other app, and takes almost no space.</p><button class="tt-go app-btn" id="appInstall" hidden data-track="app-install-click">Add it to my home screen</button><p class="app-doubt">Free. No sign-up. Takes no space. Remove it any time.</p><p class="app-done" id="appDone" hidden>You're using the app. Nice.</p></div></header><section class="app-steps" aria-labelledby="app-h"><h2 id="app-h">How to install it</h2><div class="app-grid"><article id="ios"><h3>iPhone and iPad</h3><ol><li>Open <b>sportingbrain.com</b> in <b>Safari</b>.</li><li>Tap the <b>Share</b> button (the square with an arrow).</li><li>Tap <b>Add to Home Screen</b>, then <b>Add</b>.</li></ol></article><article id="android"><h3>Android</h3><ol><li>Open <b>sportingbrain.com</b> in <b>Chrome</b>.</li><li>Tap <b>Add it to my home screen</b> above, or the <b>⋮</b> menu, then <b>Install app</b> (or <b>Add to Home screen</b>).</li><li>Tap <b>Install</b>.</li></ol></article><article id="desktop"><h3>Windows, Mac or Chromebook</h3><ol><li>Open <b>sportingbrain.com</b> in <b>Chrome</b> or <b>Edge</b>.</li><li>Click <b>Add it to my home screen</b> above, or the install icon at the right of the address bar.</li><li>On a Mac with Safari: <b>File</b>, then <b>Add to Dock</b>.</li></ol></article></div><p class="app-note">Why no App Store link? SportingBrain is a web app: the same site, installed straight from your browser. That means no download to wait for, no updates to install, and it's always the latest version.</p></section><script>(function(){var b=document.getElementById('appInstall'),dp=null;
  if(matchMedia('(display-mode: standalone)').matches||navigator.standalone===true){document.getElementById('appDone').hidden=false;return;}
  addEventListener('beforeinstallprompt',function(e){e.preventDefault();dp=e;b.hidden=false;if(window.sbTrack)sbTrack('app-install-offered');});
  b.onclick=async function(){if(!dp)return;dp.prompt();var r=await dp.userChoice;if(window.sbTrack)sbTrack('app-install-'+r.outcome);if(r.outcome==='accepted'){b.hidden=true;document.getElementById('appDone').hidden=false;document.getElementById('appDone').textContent="Installed. Look for the SB icon on your home screen.";}dp=null;};
  var ua=navigator.userAgent;var id=/iPhone|iPad|iPod/.test(ua)?'ios':/Android/.test(ua)?'android':'desktop';var el=document.getElementById(id);if(el){el.classList.add('mine');el.parentNode.prepend(el);}})();<\/script>` })}`;
}, "/home/claude/sportingbrain/source/src/pages/app.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/app.astro";
var $$url = "/app.html";
// \0virtual:astro:page:src/pages/app@_@astro
var page = () => app_exports;
export { page };
