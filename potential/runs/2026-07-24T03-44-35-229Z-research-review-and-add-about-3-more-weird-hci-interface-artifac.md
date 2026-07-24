# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## 03:44 UTC — Start
- Read Beepy memory, wiki ToC, checked for active info.json files in potential/ (none — all archived)
- Collection stands at 114 listed + 3 unlisted = 117 exhibits
- Launched 5 parallel hci-research-subagents with diverse angles

## 03:48 UTC — Subagent assignments
1. **hci-research-subagent**: Early digital cameras as HCI input (Dycam, Kodak DCS, Canon Xapshot)
2. **hci-research-subagent**: Unusual arcade/mechanical controllers (ripcord, flipper hybrid, periscope)
3. **hci-research-subagent**: Early wearable/portable computing (Magellan GPS, HP-01 watch, Casio PB-1000)
4. **hci-research-subagent**: Bizarre input device physics (EOG, Hall effect, piezoelectric)
5. **hci-research-subagent**: Early public kiosks/terminals (Minitel, QUBE, Prestel)

## 03:55 UTC — Subagent results in
- **Digital cameras**: Dycam Model 1 (1990, $995) STRONG. Kodak DCS 100 (1991, $20-30K) moderate. Canon Xapshot (1988) transitional. Sony Mavica (1981) prototype only.
- **Arcade controllers**: Atari Skydiver ripcord (1978), Baby Pac-Man hybrid flippers (1982), Midway Sea Wolf periscope (1976). All have images (KLOV, Wikipedia) but may not be CC-licensed.
- **Wearable/portable**: Magellan NAV 1000 (1989, $3000) STRONG but image situation unclear. HP-01 Calculator Watch (1977) moderate. Casio PB-1000 (1987) touchscreen — overlaps with GRiDPad.
- **Bizarre physics**: EOG cursor control (1986-88, research only, scarce images). Hall Effect keyboard (1970s-80s, commercial but interaction model is still typing). PVDF piezo keyboard (1987, lab prototype).
- **Public kiosks**: Minitel (1982) EXCEPTIONAL — 9M terminals, abundant CC images, novel paradigm. QUBE (1977) good but remote is just buttons. Prestel (1979) good but Minitel is better exemplar.

## 03:58 UTC — Candidate evaluation
Top 3 candidates selected for deep research:
1. **Minitel (1982)** — STRONG: massive scale, novel paradigm, abundant CC images, fills public-kiosk gap
2. **Dycam Model 1 / Logitech Fotoman (1990)** — STRONG: one-button camera-as-peripheral, fake shutter sound, CC images for Fotoman variant
3. **Magellan NAV 1000 (1989)** — MODERATE: novel spatial computing paradigm but ZERO CC-licensed images on Wikimedia Commons

## 04:02 UTC — Deep research complete, images verified
- Minitel: All 3 Wikimedia Commons images accessible (HTTP 200). Excellent documentation.
- Fotoman: All 3 Wikimedia Commons images accessible (Musée Bolo, Rama, CC BY-SA 3.0). 
- Magellan NAV 1000: Wikimedia Commons search returned ZERO results. Confirmed image-blocked.

## 04:03 UTC — Decision: promote 2 artifacts
Accepting 2 additions instead of 3, per charter: "Accept fewer additions when quality is low; do not pad the collection." Magellan NAV 1000 has no CC images; other candidates from this run are too weak or overlap with collection.

## 04:05 UTC — Images downloaded
- 3 Minitel images → assets/wiki/minitel1.jpg, minitel-b1.jpg, minitel-radiotechnique.jpg
- 3 Fotoman images → assets/wiki/fotoman-black.jpg, fotoman-white.jpg, fotoman-crop.jpg

## 04:08 UTC — Promotion complete
- Added 2 exhibit entries to src/data.ts (minitel, dycam-model-1)
- Added 2 wiki sections to docs/hci-wiki.md (Minitel, Dycam Model 1 / Logitech Fotoman)
- Updated Table of Contents (entries 115, 116)
- Updated wiki intro count: 114 → 116 projects
- Typecheck: PASS
- Build: 119 exhibits, 152 pages — SUCCESS

## Durable lessons for Beepy memory
- Minitel and Dycam/Fotoman represent two entirely new categories for the museum: public-access kiosks/terminals and digital cameras as computer peripherals. Both were reachable through standard web research — they were missed in prior runs because subagent angles focused on different categories.
- The "early consumer digital cameras as computer input devices" angle was productive and should be revisited if the well goes dry again.
- The "public kiosks and terminals" angle was also productive — Minitel, QUBE, and Prestel are all well-documented with good image availability.
- Magellan NAV 1000 lacks CC images but is a strong candidate if image licensing can be resolved. The Smithsonian and Computer History Museum both reportedly hold units.
