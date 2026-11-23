"""Data desk: famous finals, ball by ball, from Cricsheet (cricsheet.org).
Cricsheet data is licensed under the Open Data Commons Attribution License: commercial use allowed with credit.
Writes compact per-ball JSON into src/data/feeds/cricket/. Matches don't change, so each is fetched once."""
import io, json, os, time, urllib.request, zipfile
OUT = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'feeds', 'cricket')
os.makedirs(OUT, exist_ok=True)
MATCHES = [  # slug, zip, date, two teams
  ('wwc-2017-final', 'odis_female_json.zip', '2017-07-23', {'England', 'India'}),
  ('wwc-2022-final', 'odis_female_json.zip', '2022-04-03', {'Australia', 'England'}),
  ('wt20-2020-final', 't20s_female_json.zip', '2020-03-08', {'Australia', 'India'}),
  ('cwc-2019-final', 'odis_json.zip', '2019-07-14', {'England', 'New Zealand'}),
  ('cwc-2023-final', 'odis_json.zip', '2023-11-19', {'Australia', 'India'}),
  ('t20wc-2022-final', 't20s_json.zip', '2022-11-13', {'England', 'Pakistan'}),
]
todo = [m for m in MATCHES if not os.path.exists(f'{OUT}/{m[0]}.json')]
zips = {}
for slug, zname, date, teams in todo:
    if zname not in zips:
        req = urllib.request.Request('https://cricsheet.org/downloads/' + zname, headers={'User-Agent': 'SportingBrain data desk'})
        zips[zname] = zipfile.ZipFile(io.BytesIO(urllib.request.urlopen(req, timeout=300).read())); time.sleep(2)
    z = zips[zname]; found = None
    for n in z.namelist():
        if not n.endswith('.json'): continue
        d = json.loads(z.read(n))
        info = d['info']
        if date in info.get('dates', []) and set(info.get('teams', [])) == teams: found = d; break
    if not found: print('NOT FOUND', slug); continue
    info = found['info']; inns = []
    for inn in found['innings']:
        if inn.get('super_over'): continue
        balls = []
        for ov in inn['overs']:
            for i, dl in enumerate(ov['deliveries']):
                w = dl.get('wickets', [])
                balls.append([ov['over'], i + 1, dl['batter'], dl['bowler'], dl['runs']['batter'], dl['runs']['extras'], dl['runs']['total'],
                              (w[0]['player_out'] + ' (' + w[0]['kind'] + ')') if w else None,
                              'w' if 'wides' in dl.get('extras', {}) else ('n' if 'noballs' in dl.get('extras', {}) else '')])
        inns.append({'team': inn['team'], 'balls': balls, 'target': inn.get('target')})
    out = {'slug': slug, 'teams': info['teams'], 'date': date, 'venue': info.get('venue'), 'city': info.get('city'),
           'event': (info.get('event') or {}).get('name'), 'overs': info.get('overs'), 'gender': info.get('gender'),
           'outcome': info.get('outcome'), 'pom': info.get('player_of_match'), 'innings': inns,
           'source': 'Cricsheet (cricsheet.org), Open Data Commons Attribution License'}
    json.dump(out, open(f'{OUT}/{slug}.json', 'w'), separators=(',', ':'))
    print('saved', slug)
