"""Checks: Start again on Call It and Connections, kids games render inside the Kids Zone, redirects."""
from playwright.sync_api import sync_playwright
B = 'http://localhost:8811/'
with sync_playwright() as p:
    br = p.chromium.launch(); pg = br.new_page(viewport={'width': 390, 'height': 844}); errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto(B + 'connections.html'); pg.wait_for_selector('.cx-t')
    tiles = [b.get_attribute('data-w') for b in pg.query_selector_all('.cx-t')]
    for t in tiles[:4]: pg.click(f'.cx-t[data-w="{t}"]')
    pg.click('#cxGo'); print('cx saved keys', pg.evaluate("Object.keys(localStorage).filter(k=>k.startsWith('sb_cx_'))"))
    pg.click('.reset-btn'); print('btn now:', pg.inner_text('.reset-btn')); pg.click('.reset-btn'); pg.wait_for_selector('.cx-t')
    print('after reset keys', pg.evaluate("Object.keys(localStorage).filter(k=>k.startsWith('sb_cx_'))"), pg.inner_text('.cx-miss'))
    pg.goto(B + 'call-it.html'); pg.wait_for_timeout(800); print('call-it reset btn', pg.query_selector('.reset-btn') is not None)
    for k in ['kids/guess-the-sport', 'kids/the-grid', 'kids/guess-the-player', 'kids/true-or-false', 'kids/which-sport', 'kids/9-12']:
        pg.goto(B + k + '.html'); pg.wait_for_timeout(600)
        print(k, 'nav', pg.query_selector('.kz-nav') is not None, 'game', len(pg.inner_text('#main')) > 300, 'reset', pg.query_selector('.reset-btn') is not None, 'adult links', len(pg.query_selector_all('#main a[href*="higher-or-lower"]')))
    pg.screenshot(path='/tmp/k912.png', full_page=False)
    pg.goto(B + 'kids/true-or-false.html'); pg.wait_for_timeout(500); print('kids tf q:', pg.inner_text('#qt'))
    pg.goto(B + 'true-or-false.html'); pg.wait_for_timeout(500); print('adult tf q:', pg.inner_text('#qt'))
    pg.goto(B + 'the-grid.html'); pg.wait_for_timeout(800); print('redirect ->', pg.url)
    pg.goto(B + 'challenge.html'); pg.wait_for_timeout(500); print('challenge:', pg.inner_text('#q')[:120])
    print('errors', errs); br.close()
