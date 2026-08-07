# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Plan (2026-08-07)

Collection is at 165 exhibits (data.ts). Memory confirms the well is thin for automated
discovery but that fresh *angles* with Commons-heavy device classes still pay off
(e.g. telephony devices, lab instruments, e-readers).

Three fresh angles chosen, all interaction-model-first, all plausibly Commons-covered:

1. **Radical physical keyboard redesigns** — target Maltron (1977, Lillian Malt, concave keywells).
   Fills "ergonomics-as-HCI / physical layout as interface" gap. Must avoid in-museum
   BAT, DataHand, Twiddler, Microwriter, WriteHander.
2. **Free-air / inertial pointing devices** — target Gyration GyroPoint (1990) and AMI
   AirMouse (1991). Pointing without a surface. Avoid DLR Control Ball / Spaceball
   (isometric) and existing mice/trackballs.
3. **Still-video cameras (analog electronic still cameras)** — target Canon RC-701 (1986)
   and Sony ProMavica MVC-C1 (1986). Complements Sony Mavica (1981 prototype, in museum)
   and Dycam (1990, digital). Bridge artifact between film and digital.

Budget: 7 Octen shared. 3 subagents x 2 each = 6, 1 reserved for my own validation.

Subagent assignments:
- hci-research-subagent A: ergonomic keyboards (Maltron)
- hci-research-subagent B: free-air/inertial pointing (GyroPoint / AirMouse)
- hci-research-subagent C: still-video cameras (RC-701 / MVC-C1)

## Log

### Research phase (3 parallel hci-research-subagents, 2 Octen searches each = 6/7 budget)

All three subagents completed. Results:

1. **Maltron keyboard (1977)** — PROMOTE. Two concave keywells, hand separation, thumb
   clusters. Lillian Malt (designer) + Stephen Hobday/PCD. Debut News Tec exhibition
   Dec 1976, company 1977. Science Museum holds serial 529; CHM holds one. Images:
   2x CC0 photos on Commons (incl. Bill Buxton collection) + CC BY-SA layout SVG.
   Sources: Wikipedia, maltron.com history, Science Museum, CHM, Hackaday, patents.
2. **Gyration GyroPoint (1991)** — PROMOTE. First gyroscopic mouse; brushless-DC motor
   gyro in gimbals, electro-optical shaft encoders measure pitch/roll of the housing;
   wrist orientation → cursor, no surface. Patent priority 1990-03-21 (US 5,898,421),
   first RF wireless pointer shipped 1991. Gyration Inc founded June 1989 (Tom Quinn,
   Steve Hotelling). PD patent drawings available; NO Commons images. Interaction model:
   inertial gestural pointing, inverts the mouse paradigm.
3. **Canon RC-701 (1986)** — PROMOTE. First commercially sold still-video camera
   (July 1986, 390,000 yen). Analog video fields FM-recorded on 2-inch video floppy
   (EIAJ CP-3901, 50 fields), played back on TV; not computer-mountable. USA Today
   used it at 1986 World Series. Distinct from Mavica prototype (demo→product) and
   Dycam (analog/TV-centric vs digital/PC-centric). 3 CC BY-SA images on Commons.
   Subagent corrected brief: Sony ProMavica MVC-C1 is actually 1988, not 1986.

Decisions: promote all three. Distinct interaction models, no overlap with collection.
All have freely-licensed or public-domain image sources. Octen remaining: 1 (reserve).

### Image acquisition

All images verified and downloaded:

- **Maltron**: 3 files via Commons API (maltron-dual-hand.jpg CC0, maltron-one-handed.jpg CC0 from
  Bill Buxton collection, maltron-layout.svg CC BY-SA 3.0).
- **GyroPoint**: 3 patent drawing pages of US 5,898,421 from patentimages.storage.googleapis.com
  (public domain). Full-size variants selected by content-length check (7b/db/7a family = 83KB,
  thumbnail family = 4KB). Pages 2 (FIGS 1-2), 4 (FIGS 3-5), 7 (FIGS 6-8).
- **RC-701**: 3 files via Commons API (rc701-cp2011.jpg CC BY-SA 3.0 Morio, rc701-0828/0829 CC BY-SA 2.0 fr Rama).

All 9 verified with `file` as valid images.

### Promotion (manual, per precedent; promote-potentials.ts NOT run)

info.json written for all three: potential/maltron-keyboard/, potential/gyration-gyropoint/,
potential/canon-rc-701/. JSON validated.

Manual promotion steps completed:
1. Copied 9 images to assets/wiki/ (maltron-keyboard-1..3, gyration-gyropoint-1..3, canon-rc-701-1..3).
2. Appended 3 wiki sections to docs/hci-wiki.md (museum rich format, local image paths). Wiki now 172 `## ` sections.
3. Added ToC entries 165-167 with GitHub-slugified anchors.
4. Added 3 entries to src/data.ts (id/slug/wikiTitle/year/sortYear/title/subtitle/blurb/tags/image).
5. bun run typecheck: PASS.
6. bun run build: PASS — 167 exhibits, 214 pages. MISSING wiki matches: [] (all 167 data.ts exhibits resolve).
7. Verified built pages and local assets/wiki image references in public/exhibits/.

### Verification notes

- data.ts actual exhibit count: 167 (165 before + 3). grep "slug:" counts 168 because the type
  definition line also matches.
- parse-wiki title extraction worked for all three headings (`## Title (Year)` format).
- No other active info.json files in potential/ (0 before this run) — no stale promotion risk.
