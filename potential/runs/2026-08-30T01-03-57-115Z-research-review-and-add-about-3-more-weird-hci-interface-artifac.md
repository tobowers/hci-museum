# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Start state
- Build count: 227 exhibits (grep -cE '^\s{4}id: "' src/data.ts).
- Wiki sections: 232. Wiki ToC: 227 entries. Wiki intro: "two hundred and twenty-seven."
- Scanned potential/*/ for active info.json: NONE found (all archived). No ready unpromoted candidates.
- Dirs with images but no info.json (famicom-network-system, graphical-marionette, little-professor, microvision-1979, seiko-receptor, videoface) are all ALREADY-PROMOTED exhibits (verified in src/data.ts). Not new candidates.

## Research subagents launched (3 parallel, hci-research-subagent)
1. Fax machine HCI (facsimile as document-transmission interface) — 2 Octen searches.
2. Novel pointing/cursor devices with unusual mechanical principles — 2 Octen + 1 Exa.
3. Odd embodied-input home computer peripherals — 2 Octen + 1 Exa.

### Subagent 1 findings (fax)
- Panasonic KX-F90 (1990): ONLY in-window desktop fax with confirmed Commons image (CC BY-SA 4.0). But a generic thermal fax — moderate/weak interaction model. Not promoted.
- Mufax Courier (1975): confirmed Commons images but year outside window + transmitter-only half. Not promoted.
- Exxon Qwip, Xerox Telecopier 400, Sharp FO-2000: distinctive acoustic-coupler + coupling rituals but NO Commons image (verified myself via Commons API: 0 hits). Image-blocked → defer.
- 3M/Canon/Pitney Bowes fax leads: Grok-unverified, no images.

### Subagent 2 findings (pointing)
- Zenith J-Mouse (~1990-92): genuinely weird — the J keycap itself becomes a force-sensing pointing stick, mouse buttons under spacebar. NO Commons image (verified). FOLDED into TrackPoint exhibit as the "weird sibling."
- IBM TrackPoint (1992): isometric force-sensing pointing stick (read strain not displacement), clean CC/PD images on Commons. PROMOTED.
- MicroTouch/Appoint "Thumbelina": thumb micro-trackball, no Commons image. Not promoted.

### Subagent 3 findings (embodied)
- Amiga Joyboard (1983): ALREADY IN MUSEUM (exclusion list). Not considered.
- Covox Voice Master (1984): ALREADY IN MUSEUM. Not considered.
- BodyLog (1985): unverifiable (Grok lead; Google/web search returned nothing). Discarded as unverified.

## Octen/Exa budget status
- Octen exhausted 7/7 (subagents consumed).
- Exa exhausted 2/2 (subagents consumed).
- All subsequent source/image work done via direct Commons API + webfetch + curl (no budget needed).

## Direct verification (manager)
- Verified TrackPoint images on Commons API: Pointing_stick.JPG (PD), Pointing_stick_of_a_Lenovo_ThinkPad_keyboard-4488.jpg (CC BY-SA 4.0, strain gauges), Mouse_pointing_stick.jpeg (CC BY 3.0). Downloaded + `file`-verified all 4 JPEGs.
- Verified Qwip, J-Mouse, Lexicon LK-3000, Xerox Telecopier have ZERO Commons images (0 hits) → image-blocked.
- Fetched Wikipedia "Pointing stick" article to ground TrackPoint/J-Mouse facts (isometric, strain gauges, home-row, 0.75s PARC study, IBM ThinkPad 700 1992, Zenith J-Mouse).

## Decision
- The well is dry (as memory repeatedly predicted). No genuinely-weird second/third image-secure candidate found.
- PROMOTED 1 artifact: IBM TrackPoint (1992) — fills the force-sensing isometric keycap pointing gap (all other pointing exhibits translate gross movement). Clean images. Well-sourced. J-Mouse captured as its weird sibling inside the exhibit.
- Per museum discipline, do NOT pad to 3 with weak/image-blocked candidates.

## Files written/changed
- potential/trackpoint/info.json (then archived to info.json.archived after manual promotion).
- src/data.ts: added trackpoint entry (228 exhibits).
- docs/hci-wiki.md: added ToC #228, wiki section ## IBM TrackPoint (1992), updated intro count to 228.
- assets/wiki/: copied pointing-stick-hero.jpg, trackpoint-strain-gauges.jpg, pointing-stick-mouse.jpg (+ trackpoint-keyboard-closeup.jpg not referenced in final wiki).
- potential/trackpoint/images/: local copies.

## Verification
- bun run typecheck: PASS.
- bun run build: PASS (228 exhibits, 300 pages).
- public/exhibits/trackpoint/index.html generated, content spot-checked.
- Final counts: 228 exhibit ids, 228 ToC entries, 233 wiki sections (228 + orphan research sections + Appendix).

## Notes for memory
- Fax/facsimile HCI, weird embodied-input, and novel-pointing angles all returned image-blocked candidates this round. Only the canonical TrackPoint was image-secure.
- The J-Mouse (Zenith, early-1990s) is a documented image-blocked candidate — its story is captured inside the TrackPoint exhibit.