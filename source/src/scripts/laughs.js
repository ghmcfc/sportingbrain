// Laugh of the Day: one clip per day from the hand-picked playlist. Click-to-play keeps the page fast and sets no YouTube cookies until you press play.
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
export function lotdIndex(n) {
  const u = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/London' }));
  const day = Math.floor((Date.UTC(u.getFullYear(), u.getMonth(), u.getDate()) - Date.UTC(2026, 10, 23)) / 864e5);
  return ((day % n) + n) % n;
}
export function renderClip(el, v, big) {
  el.innerHTML = `<div class="lotd ${big ? 'big' : ''}"><button class="lotd-play" aria-label="Play: ${esc(v.title)}" style="background-image:url('https://i.ytimg.com/vi/${v.id}/hqdefault.jpg')"><span></span></button>
    <div class="lotd-cap"><b>${esc(v.title)}</b><small>Clip: ${esc(v.by)}</small>${big ? `<div class="lotd-vote" role="group" aria-label="Was it funny?"><span>Funny?</span><button data-v="1">Yes</button><button data-v="0">Not really</button></div>` : ''}</div></div>`;
  el.querySelector('.lotd-play').onclick = e => { const b = e.currentTarget; b.outerHTML = `<div class="lotd-frame"><iframe src="https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0" title="${esc(v.title)}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>`; };
  el.querySelectorAll('[data-v]').forEach(b => b.onclick = () => { try { localStorage.setItem('sb_lotd_' + v.id, b.dataset.v); } catch (_) {} b.parentElement.innerHTML = '<span>Thanks. Noted.</span>'; });
}
