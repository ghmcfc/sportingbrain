"""Generates SportingBrain's sport artwork: each sport drawn from its own field, court or table markings, in house colours."""
import os, math
OUT = os.path.join(os.path.dirname(__file__), '..', 'public', 'art'); os.makedirs(OUT, exist_ok=True)
W, H = 1600, 900
L = 'stroke="#FFFFFF" stroke-opacity=".55" fill="none" stroke-width="6"'
A = 'stroke="#F2A900" fill="none" stroke-width="10"'
def grain(bg):  # subtle stripes like a mown surface
    return ''.join(f'<rect x="{x}" y="0" width="100" height="{H}" fill="#000" fill-opacity=".06"/>' for x in range(0, W, 200))
def svg(name, bg, body, mow=False):
    s = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" preserveAspectRatio="xMidYMid slice"><rect width="{W}" height="{H}" fill="{bg}"/>{grain(bg) if mow else ""}{body}</svg>'
    open(os.path.join(OUT, name + '.svg'), 'w').write(s)
# Football: half pitch from above, the centre spot in amber
foot = f'<rect x="80" y="70" width="1440" height="760" {L}/><line x1="800" y1="70" x2="800" y2="830" {L}/><circle cx="800" cy="450" r="150" {L}/><circle cx="800" cy="450" r="12" fill="#F2A900"/><rect x="80" y="230" width="230" height="440" {L}/><rect x="80" y="350" width="80" height="200" {L}/><path d="M310 370 A120 120 0 0 1 310 530" {L}/><rect x="1290" y="230" width="230" height="440" {L}/><rect x="1440" y="350" width="80" height="200" {L}/><path d="M1290 370 A120 120 0 0 0 1290 530" {L}/><path d="M1000 450 A200 200 0 0 0 800 250" {A}/>'
svg('football', '#0B6E4F', foot, True)
# Cricket: the square, a strip, creases and stumps; the boundary arc
cr = f'<ellipse cx="800" cy="450" rx="1100" ry="620" {L}/><ellipse cx="800" cy="450" rx="520" ry="300" {L} stroke-dasharray="18 18"/><rect x="740" y="150" width="120" height="600" fill="#C9B27A" fill-opacity=".55"/><line x1="700" y1="230" x2="900" y2="230" {L}/><line x1="700" y1="670" x2="900" y2="670" {L}/>' + ''.join(f'<line x1="{780+i*20}" y1="195" x2="{780+i*20}" y2="230" stroke="#F2A900" stroke-width="8"/><line x1="{780+i*20}" y1="670" x2="{780+i*20}" y2="705" stroke="#F2A900" stroke-width="8"/>' for i in range(3))
svg('cricket', '#1E5B3A', cr, True)
# Rugby: try line, 22, halfway, posts
rg = f'<line x1="200" y1="0" x2="200" y2="900" {L}/><line x1="560" y1="0" x2="560" y2="900" {L}/><line x1="1100" y1="0" x2="1100" y2="900" {L}/>' + ''.join(f'<line x1="{x}" y1="{y}" x2="{x+40}" y2="{y}" {L}/>' for x in (360, 860, 1320) for y in (150, 450, 750)) + f'<path d="M140 250 L140 650 M260 250 L260 650 M140 520 L260 520" {A}/>'
svg('rugby', '#14532D', rg, True)
# Tennis: full court in perspective-free plan
tn = f'<rect x="200" y="150" width="1200" height="600" {L}/><line x1="200" y1="225" x2="1400" y2="225" {L}/><line x1="200" y1="675" x2="1400" y2="675" {L}/><line x1="500" y1="225" x2="500" y2="675" {L}/><line x1="1100" y1="225" x2="1100" y2="675" {L}/><line x1="500" y1="450" x2="1100" y2="450" {L}/><line x1="800" y1="120" x2="800" y2="780" stroke="#FFFFFF" stroke-width="10"/><circle cx="1180" cy="330" r="26" fill="#F2A900"/>'
svg('tennis', '#1F5FA8', tn)
# Golf: contour lines around a pin
gf = ''.join(f'<ellipse cx="{900+i*12}" cy="{460-i*6}" rx="{120+i*90}" ry="{70+i*55}" {L} stroke-opacity="{.6-i*.05:.2f}"/>' for i in range(10)) + f'<line x1="900" y1="460" x2="900" y2="250" stroke="#FFFFFF" stroke-width="8"/><path d="M900 250 L1010 285 L900 320 Z" fill="#F2A900"/><circle cx="900" cy="460" r="14" fill="#0F1E36"/>'
svg('golf', '#2F6B3F', gf)
# Athletics: curved lanes
at = ''.join(f'<path d="M-50 {200+i*80} L700 {200+i*80} A{400+i*80} {400+i*80} 0 0 1 700 {1000+i*80+ (0)}" {L}/>' for i in range(0)) 
at = ''.join(f'<path d="M0 {120+i*85} L760 {120+i*85} A{330-i*0} {330} 0 0 1 760 {120+i*85+660}" {L} transform="translate(0,0)"/>' for i in range(0))
at = ''.join(f'<path d="M0 {110+i*80} H900 A{340+ (8-i)*0} {340} 0 0 1 900 {110+i*80+680} H0" {L}/>' for i in range(0))
at = ''.join(f'<path d="M0 {100+i*70} H1000 A{350-i*70} {350-i*70} 0 0 1 1000 {800-i*70} H0" {L}/>' for i in range(5)) + f'<path d="M0 100 H1000 A350 350 0 0 1 1350 450" {A}/>' + ''.join(f'<text x="{1060}" y="{142+i*70}" fill="#FFFFFF" fill-opacity=".6" font-family="Arial Narrow,Arial" font-weight="700" font-size="44">{i+1}</text>' for i in range(5))
svg('athletics', '#B23A2E', at)
# Formula 1: chequers and a racing line
f1 = ''.join(f'<rect x="{1200+c*50}" y="{r*50}" width="50" height="50" fill="#FFFFFF" fill-opacity="{.75 if (r+c)%2 else .08}"/>' for r in range(18) for c in range(8)) + f'<path d="M-40 760 C300 760 380 300 700 300 S1050 640 1180 520" {L} stroke-width="70" stroke-opacity=".14"/><path d="M-40 760 C300 760 380 300 700 300 S1050 640 1180 520" {A}/>'
svg('formula-1', '#0F1E36', f1)
# Darts: the board
cx, cy = 800, 450
dt = ''.join(f'<circle cx="{cx}" cy="{cy}" r="{r}" {L}/>' for r in (40, 90, 250, 280, 400, 430)) + ''.join(f'<line x1="{cx+90*math.cos(math.radians(9+k*18)):.0f}" y1="{cy+90*math.sin(math.radians(9+k*18)):.0f}" x2="{cx+430*math.cos(math.radians(9+k*18)):.0f}" y2="{cy+430*math.sin(math.radians(9+k*18)):.0f}" {L} stroke-width="4"/>' for k in range(20)) + f'<circle cx="{cx}" cy="{cy}" r="16" fill="#F2A900"/><path d="M{cx-265} {cy-20} A265 265 0 0 1 {cx-250} {cy-95}" {A} stroke-width="26"/>'
svg('darts', '#141B2B', dt)
# Snooker: table, pockets, the pack
sn = f'<rect x="150" y="150" width="1300" height="600" rx="24" {L}/>' + ''.join(f'<circle cx="{x}" cy="{y}" r="30" fill="#0F1E36" fill-opacity=".6"/>' for x in (150, 800, 1450) for y in (150, 750)) + f'<line x1="420" y1="150" x2="420" y2="750" {L}/><path d="M420 330 A120 120 0 0 0 420 570" {L}/>' + ''.join(f'<circle cx="{1050+row*26}" cy="{450+(k-row/2)*30:.0f}" r="14" fill="#C8102E"/>' for row in range(5) for k in range(row+1)) + '<circle cx="1000" cy="450" r="14" fill="#F06CB5"/><circle cx="620" cy="520" r="14" fill="#FFFFFF"/>'
svg('snooker', '#0B6E4F', sn)
# Boxing: ring from above, ropes
bx = ''.join(f'<rect x="{350-i*40}" y="{100-i*40}" width="{900+i*80}" height="{700+i*80}" {L} stroke-opacity="{.5-i*.1:.1f}"/>' for i in range(3)) + '<rect x="320" y="70" width="60" height="60" fill="#F2A900"/><rect x="1220" y="770" width="60" height="60" fill="#FFFFFF"/>'
svg('boxing', '#A3122B', bx)
# Cycling: velodrome banking
cy_ = ''.join(f'<rect x="{150+i*45}" y="{150+i*45}" width="{1300-i*90}" height="{600-i*90}" rx="{300-i*45}" {L} stroke-opacity="{.55-i*.08:.2f}"/>' for i in range(5)) + f'<rect x="150" y="150" width="1300" height="600" rx="300" {A} stroke-dasharray="60 1400"/>'
svg('cycling', '#2A3A55', cy_)
# Netball: court in thirds with shooting circles
nb = f'<rect x="150" y="150" width="1300" height="600" {L}/><line x1="583" y1="150" x2="583" y2="750" {L}/><line x1="1017" y1="150" x2="1017" y2="750" {L}/><circle cx="800" cy="450" r="45" {L}/><path d="M150 210 A240 240 0 0 1 150 690" {L}/><path d="M1450 210 A240 240 0 0 0 1450 690" {L}/><circle cx="190" cy="450" r="22" fill="#F2A900"/>'
svg('netball', '#5B2C83', nb)
# Swimming: lanes
sw = ''.join(f'<line x1="0" y1="{100+i*100}" x2="1600" y2="{100+i*100}" stroke="#FFFFFF" stroke-opacity=".5" stroke-width="8" stroke-dasharray="22 14"/>' for i in range(8)) + ''.join(f'<rect x="{1500}" y="{130+i*100}" width="40" height="40" fill="#FFFFFF" fill-opacity=".25"/>' for i in range(7)) + '<line x1="1440" y1="0" x2="1440" y2="900" stroke="#F2A900" stroke-width="10"/>'
svg('swimming', '#1565A8', sw)
# Basketball: half court key and arc
bk = f'<rect x="100" y="100" width="1400" height="700" {L}/><rect x="100" y="300" width="380" height="300" {L}/><circle cx="480" cy="450" r="150" {L}/><path d="M100 150 H260 A400 400 0 0 1 260 750 H100" {L}/><line x1="1500" y1="100" x2="1500" y2="800" {L}/><circle cx="1500" cy="450" r="150" {L}/><circle cx="160" cy="450" r="30" {A}/>'
svg('basketball', '#B5651D', bk)
# Hockey: the D and the dotted D
hk = f'<rect x="100" y="80" width="1400" height="740" {L}/><path d="M100 230 A220 220 0 0 1 320 450 A220 220 0 0 1 100 670" {L}/><path d="M100 160 A290 290 0 0 1 390 450 A290 290 0 0 1 100 740" {L} stroke-dasharray="16 16"/><line x1="800" y1="80" x2="800" y2="820" {L}/><circle cx="220" cy="450" r="14" fill="#F2A900"/>'
svg('hockey', '#1B5E8A', hk)
# Horse racing: the rail
hr = ''.join(f'<path d="M-100 {820-i*60} C400 {820-i*60} 600 {200+i*40} 1700 {200+i*40}" {L} stroke-opacity="{.6-i*.1:.1f}"/>' for i in range(5)) + '<circle cx="1180" cy="235" r="16" fill="#F2A900"/>'
svg('horse-racing', '#3B5B2E', hr)
# Squash: front wall lines
sq = f'<rect x="200" y="100" width="1200" height="700" {L}/><line x1="200" y1="560" x2="1400" y2="560" {L}/><line x1="800" y1="560" x2="800" y2="800" {L}/><rect x="200" y="560" width="300" height="240" {L}/><rect x="1100" y="560" width="300" height="240" {L}/><circle cx="960" cy="300" r="18" fill="#F2A900"/>'
svg('squash', '#3D4A63', sq)
# American football: yard lines
af = ''.join(f'<line x1="{100+i*140}" y1="60" x2="{100+i*140}" y2="840" {L}/>' for i in range(11)) + ''.join(f'<text x="{100+i*140}" y="140" text-anchor="middle" fill="#FFFFFF" fill-opacity=".55" font-family="Arial Narrow,Arial" font-weight="700" font-size="52">{min(i,10-i)*10 if 0<i<10 else ""}</text>' for i in range(11)) + '<line x1="100" y1="60" x2="100" y2="840" stroke="#F2A900" stroke-width="12"/>'
svg('american-football', '#24613A', af, True)
# Gymnastics: arcs of a floor routine
gy = f'<rect x="250" y="100" width="1100" height="700" {L}/>' + f'<path d="M300 760 C500 300 800 760 1000 260 S1300 500 1320 140" {A}/><path d="M300 760 C500 300 800 760 1000 260 S1300 500 1320 140" {L} stroke-width="40" stroke-opacity=".12"/>'
svg('gymnastics', '#6D2E46', gy)
# Generic: a stadium bowl
gen = ''.join(f'<ellipse cx="800" cy="450" rx="{700-i*70}" ry="{380-i*38}" {L} stroke-opacity="{.55-i*.05:.2f}"/>' for i in range(8)) + f'<ellipse cx="800" cy="450" rx="210" ry="114" {A}/>'
svg('sport', '#0F1E36', gen)
print('art written to', OUT)
