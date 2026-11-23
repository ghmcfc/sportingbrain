"""Laugh of the Day: reads Gavin's hand-picked YouTube playlist from its public feed (no API key needed)
and adds any new clips to src/data/feeds/videos.json in the order they were added. Nothing is uploaded or copied:
the site plays each clip in YouTube's own privacy-enhanced player."""
import json, os, urllib.request, xml.etree.ElementTree as ET
HERE = os.path.dirname(__file__)
cfg = json.load(open(os.path.join(HERE, '..', 'src', 'data', 'video-config.json')))
OUT = os.path.join(HERE, '..', 'src', 'data', 'feeds', 'videos.json')
data = json.load(open(OUT)) if os.path.exists(OUT) else {'videos': []}
pl = (cfg.get('playlist') or '').strip()
if not pl:
    print('No playlist set yet'); raise SystemExit(0)
req = urllib.request.Request(f'https://www.youtube.com/feeds/videos.xml?playlist_id={pl}', headers={'User-Agent': 'SportingBrain'})
root = ET.fromstring(urllib.request.urlopen(req, timeout=60).read())
ns = {'a': 'http://www.w3.org/2005/Atom', 'yt': 'http://www.youtube.com/xml/schemas/2015', 'media': 'http://search.yahoo.com/mrss/'}
have = {v['id'] for v in data['videos']}
new = []
for e in root.findall('a:entry', ns):
    vid = e.find('yt:videoId', ns).text
    if vid in have: continue
    new.append({'id': vid, 'title': e.find('a:title', ns).text, 'by': e.find('a:author/a:name', ns).text})
# The feed lists the newest additions first; keep the order they were added.
data['videos'] += list(reversed(new))
json.dump(data, open(OUT, 'w'), indent=1, ensure_ascii=False)
print(f'{len(new)} new clips, {len(data["videos"])} in total')
