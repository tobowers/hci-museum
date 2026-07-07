# Run trace: 2026-07-07T15-15-47-964Z

Goal: Research, review, and add about 3 more weird HCI interface artifacts from 1976-1992.

## Phase 1: Planning

Read beepy-memory.md and current wiki. Collection stands at 87 exhibits.

## Phase 2: Subagent research

Launched 5 subagents in parallel:
1. Foot/pedal devices → Versatron Footmouse (1985), Meico MIDI Commander, Thrustmaster Rudder, Pearson & Weiser CHI '86
2. Light pen / CRT → Gibson LPS II (1981), HP 9845C (1980), Flexidraw (1984), Thomson TO7 (1982), Holborn 9100 (1981)
3. Force-feedback / haptics → Mostly overlaps with existing/deferred. Iwata Desktop Force Display (1990) only novel find.
4. Wearable computing → Polar PE 2000/3000 (1982), Seiko UC-2000 (1984), WristMac (1988), CMU VuMan 1 (1991)
5. Consumer gadgets → Butler in a Box (1983), PXL-2000 (1987), AT&T Sceptre (1983), LJN Video Art (1987), Captain Power (1987)

## Phase 3: Candidate selection

Top 4 candidates selected for deep-dive:
1. Versatron Footmouse (1985) - First commercial foot-operated mouse. CHM specimen.
2. Gibson Light Pen System / LPS II (1981) - Professional light pen for Apple II by Steve Gibson. CHM specimen.
3. Butler in a Box (1983) - First voice-controlled home automation. Smithsonian specimen.
4. Polar Sport Tester PE 2000/3000 (1982-83) - First wireless heart rate monitor with PC interface.

Polar deferred due to difficulty finding working image URLs (CPHR 403, ccapitalia 403).

## Phase 4: Deep research on 3 candidates

Launched 3 deep-dive subagents:
- Versatron Footmouse: Confirmed keyboard-wedge design (not serial mouse), sliding pedal, defense contractor origin
- Gibson LPS II: Confirmed Steve Gibson career arc, Slot 7 Apple II card, $250 price, Atari/Koala history
- Butler in a Box: Confirmed wake-word paradigm, 4 voice profiles, X10 control, 26K units claimed, Smithsonian collection

## Phase 5: Info.json creation

Created potential/versatron-footmouse/info.json
Created potential/gibson-light-pen/info.json
Created potential/butler-in-a-box/info.json

## Phase 6: Image sourcing and download

Footmouse: Preterhuman wiki images (verified working, 200 OK)
Gibson: GRC.com ad images (158x164, verified working), PenNewRare sealed box (250x250, verified working)
Butler: thecharm.info product photo and curator photo (verified working, 200 OK)

Downloaded to:
- assets/wiki/versatron-footmouse-1.jpg (1365x1600)
- assets/wiki/versatron-footmouse-2.jpg (1486x728)
- assets/wiki/gibson-light-pen-1.jpg (158x164)
- assets/wiki/gibson-light-pen-2.jpg (158x164)
- assets/wiki/gibson-light-pen-3.jpg (250x250)
- assets/wiki/butler-in-a-box-1.jpg (780x1073)
- assets/wiki/butler-in-a-box-2.jpg (780x587)

## Phase 7: Promotion

Ran `bun scripts/promote-potentials.ts` — promoted 3 artifacts to wiki.
- Wiki updated automatically (appended sections)
- data.ts NOT updated (known regex bug — manual fix required)

Manual edits:
1. Updated wiki ToC: added entries 88-90
2. Updated wiki intro count: "eighty-one" → "ninety"
3. Updated wiki image paths: all 6 remote URLs → local assets/wiki/ paths
4. Added 3 data.ts entries (butler-in-a-box, gibson-light-pen, versatron-footmouse)
5. Fixed wikiTitle mismatch: "Gibson Light Pen System / LPS II" → "Gibson Light Pen System (LPS II)"

## Phase 8: Verification

- `bun run typecheck`: PASSED (no errors)
- `bun run build`: PASSED (90 exhibits, 107 pages, no warnings)

## Notes for future runs

- Gibson light pen ad images from GRC.com are very small (158x164). The PenNewRare sealed-box image (250x250) was downloaded but not used in the wiki/data.ts media sections (limited to 2 per exhibit). The third Gibson image (gibson-light-pen-3.jpg) is in assets/wiki but unreferenced — usable if needed.
- Polar PE 3000 remains a strong candidate but needs working image sources. CPHR and ccapitalia both return 403. Wikimedia Commons has no product photos. The Bike-Magazin article may have embedded images worth investigating.
- CHM image URLs continue to be unreliable (S3 403, revonline redirects to homepage).
