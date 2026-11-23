"""Click-through test for Connections, Who Am I? and Ground Guesser. Serve the repo parent on :8811 first."""
from playwright.sync_api import sync_playwright
B = 'http://localhost:8811/sportingbrain/'
with sync_playwright() as p:
    br = p.chromium.launch(); pg = br.new_page(viewport={'width': 390, 'height': 844}); errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto(B + 'connections.html'); pg.wait_for_selector('.cx-t')
    tiles = [b.get_attribute('data-w') for b in pg.query_selector_all('.cx-t')]
    print('tiles', len(tiles))
    for t in tiles[:4]: pg.click(f'.cx-t[data-w="{t}"]')
    pg.click('#cxGo'); print('msg:', pg.inner_text('#cxMsg'))
    pg.screenshot(path='/tmp/cx.png', full_page=True)
    pg.goto(B + 'who-am-i.html'); pg.wait_for_selector('#waG')
    pg.fill('#waG', 'nobody'); pg.click('.wa-form .btn.gold'); print('wa step:', pg.inner_text('.pg-step'))
    for _ in range(3): pg.click('#waNext')
    pg.click('#waGive'); print('wa ans:', pg.inner_text('.wa-ans'))
    pg.screenshot(path='/tmp/wa.png', full_page=True)
    pg.goto(B + 'ground-guesser.html'); pg.wait_for_selector('.gg-photo')
    print('gg bg:', pg.eval_on_selector('.gg-photo', 'e=>e.style.backgroundImage')[:90])
    pg.click('#ggOut'); print('gg step:', pg.inner_text('.pg-step'))
    pg.click('.pg-opts button:not([disabled])'); print('gg after:', pg.inner_text('.pg-step'))
    pg.screenshot(path='/tmp/gg.png', full_page=True)
    r = pg.goto(B + 'manifest.webmanifest'); print('manifest', r.status, r.text()[:60])
    print('errors', errs); br.close()
