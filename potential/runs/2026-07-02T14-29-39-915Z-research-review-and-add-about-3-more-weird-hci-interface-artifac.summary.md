# Run Summary: 2026-07-02T14-29-39-915Z

## What changed

**2 new exhibits added to the HCI Museum collection (66 → 68):**

### CAVE Automatic Virtual Environment (1992)
Room-scale VR from EVL/UIC. Carolina Cruz-Neira's PhD dissertation turned the room itself into the display — three walls and a floor of stereoscopic projection with head-tracking and co-located multi-user collaboration. First demoed at SIGGRAPH 1992. Ran on four Silicon Graphics workstations. Spawned hundreds of CAVE installations globally. Fills the "room-scale immersive environment" gap in the collection — notably distinct from our existing HMD-based VR artifacts (VPL EyePhone, Fakespeare BOOM, Virtuality).

### Virtual Fixtures (1992)
The first functional augmented reality system. Louis Rosenberg at USAF Armstrong Labs built a full upper-body exoskeleton with force feedback, binocular magnifiers, and robotic arms seen through pass-through cameras — all to prove that virtual overlays could boost human dexterity by over 100%. The cameras were salvaged from a parachute test rig crash. This is the origin point for both the AR industry and the consumer haptics industry. Fills the AR gap in the collection — we had VR but no AR.

## Candidates researched and rejected

- **SMART Board (1991)** — no first-gen images exist
- **LiveBoard (1992)** — all photos behind ACM paywall
- **Aspen Movie Map (1978-80)** — more installation than artifact; fragile images
- **Soundbeam (1989)** — novel interaction model but only later-gen images available
- **MicroTouch UnMouse (1989)** — zero images found online

## Files written

| File | Purpose |
|------|---------|
| `potential/cave/info.json` | Research bundle for CAVE |
| `potential/virtual-fixtures/info.json` | Research bundle for Virtual Fixtures |
| `assets/wiki/cave-1.jpg`, `cave-2.jpg` | CAVE images from Wikimedia Commons (PD) |
| `assets/wiki/virtual-fixtures-1.jpg`, `virtual-fixtures-2.jpg`, `virtual-fixtures-3.jpg` | Virtual Fixtures images from Wikimedia Commons (CC-BY-SA 4.0) |

## Files modified

| File | Change |
|------|--------|
| `src/data.ts` | Added 2 exhibit entries |
| `docs/hci-wiki.md` | Added 2 sections + ToC entries #67-68, updated intro count |

## Verification

- `bun run typecheck`: ✅ passed
- `bun run build`: ✅ 68 exhibits + blog + about, 80 pages

## Known issues

- The `promote-potentials.ts` data.ts regex bug (documented in beepy-memory.md) is still active — wiki sections append correctly but data.ts entries are silently dropped. Workaround: manually added data.ts entries.

## Still needs review

- Soundbeam (1989) remains a strong candidate if original-generation images are ever found
- Both CAVE and Virtual Fixtures are from 1992 — the very edge of the museum's window. No older candidates from this run made the cut due to image availability constraints
