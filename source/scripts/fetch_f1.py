"""Data desk: pull F1 data from OpenF1 (free historical, 2023+) and Jolpica (results since 1950).
Writes compact JSON into src/data/feeds/ for the site build. Runs on GitHub Actions nightly."""
import json, time, urllib.request, urllib.error, os, sys
OUT = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'feeds')
def get(url, tries=4):
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'SportingBrain data desk (+https://sportingbrain.com/)'})
            with urllib.request.urlopen(req, timeout=60) as r: return json.load(r)
        except urllib.error.HTTPError as e:
            if e.code == 404: return None
            print('retry', url, e); time.sleep(3 * (i + 1))
        except Exception as e:
            print('retry', url, e); time.sleep(3 * (i + 1))
    return None
def pause(): time.sleep(2.5)  # stay well under 30 requests a minute

# Season standings and calendar (Jolpica)
year = time.gmtime().tm_year
drv = get(f'https://api.jolpi.ca/ergast/f1/{year}/driverstandings.json'); pause()
if not drv: raise SystemExit('standings unavailable')
con = get(f'https://api.jolpi.ca/ergast/f1/{year}/constructorstandings.json'); pause()
cal = get(f'https://api.jolpi.ca/ergast/f1/{year}.json'); pause()
calp = get(f'https://api.jolpi.ca/ergast/f1/{year - 1}.json') or {'MRData': {'RaceTable': {'Races': []}}}; pause()
def lst(d, key):
    t = d['MRData'][key]['StandingsLists']; return t[0] if t else {}
ds = lst(drv, 'StandingsTable'); cs = lst(con, 'StandingsTable')
season = {
  'year': year, 'round': ds.get('round'),
  'drivers': [{'pos': int(x['position']), 'name': x['Driver']['givenName'] + ' ' + x['Driver']['familyName'], 'code': x['Driver'].get('code'), 'team': x['Constructors'][0]['name'] if x['Constructors'] else '', 'points': float(x['points']), 'wins': int(x['wins'])} for x in ds.get('DriverStandings', [])],
  'teams': [{'pos': int(x['position']), 'name': x['Constructor']['name'], 'points': float(x['points']), 'wins': int(x['wins'])} for x in cs.get('ConstructorStandings', [])],
  'calendar': [{'round': int(r['round']), 'name': r['raceName'], 'circuit': r['Circuit']['circuitName'], 'country': r['Circuit']['Location']['country'], 'date': r['date']} for r in cal['MRData']['RaceTable']['Races']],
  'calendar_prev': [{'name': r['raceName'], 'date': r['date']} for r in calp['MRData']['RaceTable']['Races']],
  'source': 'Jolpica F1 API (Ergast-compatible)', 'fetched': time.strftime('%Y-%m-%dT%H:%MZ', time.gmtime())}

# Race replays (OpenF1): every completed race this season and last, lap-by-lap positions from lap times
races = []
for y in (year - 1, year):
    sess = get(f'https://api.openf1.org/v1/sessions?year={y}&session_name=Race') or []; pause()
    for s in sess:
        if s['date_end'] > time.strftime('%Y-%m-%dT%H:%M:%S', time.gmtime()): continue
        races.append(s)
os.makedirs(OUT + '/f1', exist_ok=True)
index = []
for s in races:
    key = s['session_key']; fn = f'{OUT}/f1/{key}.json'
    index.append({'key': key, 'year': s['year'], 'name': s.get('country_name', '') + ' Grand Prix', 'circuit': s.get('circuit_short_name', ''), 'date': s['date_start'][:10]})
    if os.path.exists(fn) and 'pos' in json.load(open(fn)): continue   # races don't change once finished
    drivers = get(f'https://api.openf1.org/v1/drivers?session_key={key}'); pause()
    laps = get(f'https://api.openf1.org/v1/laps?session_key={key}'); pause()
    if not drivers or not laps: index.pop(); print('skip', key); continue
    pits = get(f'https://api.openf1.org/v1/pit?session_key={key}') or []; pause()
    stints = get(f'https://api.openf1.org/v1/stints?session_key={key}') or []; pause()
    res = get(f'https://api.openf1.org/v1/session_result?session_key={key}') or []; pause()
    posn = get(f'https://api.openf1.org/v1/position?session_key={key}') or []; pause()
    D = {d['driver_number']: {'n': d['driver_number'], 'code': d.get('name_acronym'), 'name': d.get('full_name'), 'team': d.get('team_name'), 'colour': '#' + (d.get('team_colour') or '888888')} for d in drivers}
    lt = {}
    for l in laps:
        if l.get('lap_duration') is None and l.get('lap_number') != 1: continue
        lt.setdefault(l['driver_number'], {})[l['lap_number']] = [l.get('lap_duration'), (l.get('date_start') or '')[:19]]
    json.dump({'key': key, 'name': index[-1]['name'], 'year': s['year'], 'date': s['date_start'][:10], 'circuit': s.get('circuit_short_name'),
               'drivers': list(D.values()), 'laps': {str(k): v for k, v in lt.items()},
               'pits': [{'n': p['driver_number'], 'lap': p['lap_number'], 'dur': p.get('pit_duration')} for p in pits],
               'stints': [{'n': x['driver_number'], 'from': x.get('lap_start'), 'to': x.get('lap_end'), 'tyre': x.get('compound')} for x in stints],
               'result': [{'n': r['driver_number'], 'pos': r.get('position'), 'dnf': r.get('dnf'), 'dsq': r.get('dsq')} for r in res],
               'pos': [[p['driver_number'], p['position'], p['date'][:19]] for p in posn],
               'source': 'OpenF1 (openf1.org)'}, open(fn, 'w'), separators=(',', ':'))
    print('race', key, index[-1]['name'])
season['races'] = sorted(index, key=lambda r: r['date'], reverse=True)
json.dump(season, open(f'{OUT}/f1_season.json', 'w'), separators=(',', ':'))
print('done', len(index), 'races')
