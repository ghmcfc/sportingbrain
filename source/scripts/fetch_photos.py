"""Download the Commons photos named in SB_PHOTOS into public/photos so the site serves its own copies
(faster, no third-party request). Writes src/data/photos.json mapping Commons file -> local file.
Keeps existing copies; only fetches what is missing. Licences stay with the authors (see /credits)."""
import json, re, hashlib, pathlib, urllib.request, urllib.parse, time
ROOT = pathlib.Path(__file__).resolve().parent.parent
content = (ROOT / 'src/data/content.js').read_text(encoding='utf-8')
block = content.split('globalThis.SB_PHOTOS = {', 1)[1].split('};', 1)[0]
files = sorted(set(re.findall(r'\[\s*"([^"]+)"', block)))
out_dir = ROOT / 'public/photos'; out_dir.mkdir(parents=True, exist_ok=True)
man_path = ROOT / 'src/data/photos.json'
manifest = json.loads(man_path.read_text()) if man_path.exists() else {}
UA = {'User-Agent': 'SportingBrainDataDesk/1.0 (gavin@continuityprojects.com)'}
for f in files:
    local = hashlib.sha1(f.encode()).hexdigest()[:12] + '.jpg'
    if manifest.get(f) == local and (out_dir / local).exists():
        continue
    url = 'https://commons.wikimedia.org/wiki/Special:FilePath/' + urllib.parse.quote(f) + '?width=1600'
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
            data = r.read()
        if len(data) < 5000 or not data[:3] == b'\xff\xd8\xff':
            print('skip (not a JPEG):', f); continue
        (out_dir / local).write_bytes(data); manifest[f] = local; print('saved', f, len(data))
        time.sleep(1)
    except Exception as e:
        print('failed', f, e)
man_path.write_text(json.dumps(manifest, indent=1, sort_keys=True))
