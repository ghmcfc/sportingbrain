"""Ground Guesser: for each venue in src/data/venues.js, find the lead photo of its Wikipedia article,
keep it only if it is a free-licence photo on Wikimedia Commons, save a 1600px copy to public/photos/venues,
and record author, licence and opening year (from Wikidata) in src/data/venues.json.
Already-saved venues are skipped, so it only does new work. Runs in the nightly Action."""
import json, re, time, html, pathlib, urllib.request, urllib.parse
ROOT = pathlib.Path(__file__).resolve().parent.parent
src = (ROOT / 'src/data/venues.js').read_text(encoding='utf-8')
titles = re.findall(r"^\s*\['((?:[^'\\]|\\')+)',", src, re.M)
titles = [t.replace("\\'", "'") for t in titles]
OUT = ROOT / 'src/data/venues.json'; DIR = ROOT / 'public/photos/venues'; DIR.mkdir(parents=True, exist_ok=True)
data = json.loads(OUT.read_text()) if OUT.exists() else {}
UA = {'User-Agent': 'SportingBrainDataDesk/1.0 (https://ghmcfc.github.io/sportingbrain/; gavin@continuityprojects.com)'}
FREE = re.compile(r'^(cc[- ]by|cc0|public domain|pd)', re.I)
def get(url, raw=False):
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
        b = r.read(); return b if raw else json.loads(b)
def slug(t): return re.sub(r'[^a-z0-9]+', '-', t.lower()).strip('-')[:60]
def strip(h): return html.unescape(re.sub(r'<[^>]+>', '', h or '')).strip()
done = 0
for t in titles:
    k = slug(t)
    if k in data and (DIR / data[k]['file']).exists(): continue
    try:
        s = get('https://en.wikipedia.org/api/rest_v1/page/summary/' + urllib.parse.quote(t.replace(' ', '_'), safe=''))
        if s.get('type') == 'disambiguation': print('disambiguation page', t); continue
        qid = s.get('wikibase_item'); claims = {}
        if qid:
            try: claims = get(f'https://www.wikidata.org/wiki/Special:EntityData/{qid}.json')['entities'][qid]['claims']
            except Exception as ex: print('wikidata', t, ex)
        cands = []
        for c in claims.get('P18', []):
            v = c['mainsnak'].get('datavalue', {}).get('value')
            if v: cands.append(v)
        img = (s.get('originalimage') or {}).get('source', '')
        if img:
            path = urllib.parse.urlparse(img).path.split('/')
            cands.append(urllib.parse.unquote(path[-2] if 'thumb' in path else path[-1]).replace('_', ' '))
        cands = [c for c in cands if re.search(r'\.(jpe?g)$', c, re.I)]
        if not cands: print('no photo', t); continue
        fname = cands[0]
        q = get('https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url|extmetadata|size&iiurlwidth=1600&titles=' + urllib.parse.quote('File:' + fname))
        page = next(iter(q['query']['pages'].values()))
        if 'missing' in page or 'imageinfo' not in page: print('not on Commons', t); continue
        ii = page['imageinfo'][0]; md = ii.get('extmetadata', {})
        lic = strip(md.get('LicenseShortName', {}).get('value'))
        if not FREE.match(lic): print('not free', t, lic); continue
        if ii.get('width', 0) < 1000: print('too small', t); continue
        b = get(ii.get('thumburl') or ii['url'], raw=True)
        if b[:3] != b'\xff\xd8\xff': print('bad jpeg', t); continue
        (DIR / (k + '.jpg')).write_bytes(b)
        opened = None
        for p in ('P1619', 'P571'):
            if p in claims:
                v = claims[p][0]['mainsnak'].get('datavalue', {}).get('value', {}).get('time', '')
                m = re.match(r'\+(\d{4})', v)
                if m: opened = int(m.group(1)); break
        data[k] = {'title': t, 'file': k + '.jpg', 'commons': fname, 'author': strip(md.get('Artist', {}).get('value'))[:120] or 'Unknown',
                   'licence': lic, 'opened': opened, 'source': 'https://commons.wikimedia.org/wiki/File:' + urllib.parse.quote(fname.replace(' ', '_'))}
        done += 1; print('saved', t, lic, opened)
        time.sleep(0.5)
    except Exception as ex:
        print('failed', t, ex)
OUT.write_text(json.dumps(data, indent=1, sort_keys=True, ensure_ascii=False))
print('venues with photos:', len(data), 'new:', done)
