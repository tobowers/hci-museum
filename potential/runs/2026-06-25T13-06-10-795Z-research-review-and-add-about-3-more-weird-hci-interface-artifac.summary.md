# Run Summary: 2026-06-25 — Research and Add ~3 Weird HCI Artifacts

## What Changed

The museum collection grew from 29 to 32 exhibits. Three new artifacts were researched, reviewed, sourced, and promoted into the live collection.

## Artifacts Added

### 1. Amiga Joyboard (1983)
**Interaction model:** Full-body balance/lean input via mechanical latches on a foot platform.
**Why it belongs:** The first commercial full-body input device for a home console — a balance board for the Atari 2600, 23 years before the Wii Balance Board. Its second life as the origin of the "Guru Meditation" AmigaOS error screen gives it an outsized cultural footprint far beyond its commercial failure. Only one game shipped with it (*Mogul Maniac*).
**Key sources:** Wikipedia, Computer History Museum catalog, COMPUTE! magazine (Sept 1983), InfoWorld (Aug 1983), RJ Mical in Info Magazine (1987), Ian Bogost (2007).
**Images:** 4 local images (Wikimedia CC BY 3.0, BBOAH hardware photos).

### 2. GROPE-III (1990)
**Interaction model:** 6-DOF force-feedback haptic display for feeling molecular docking forces. A nuclear-industry teleoperator arm repurposed as a haptic interface.
**Why it belongs:** The most dramatic early haptic system ever built. Chemists physically grasped a handle and felt electrostatic forces between drug molecules and protein receptors. Demonstrated a two-fold performance improvement and "radically improved situation awareness." Founded the entire field of haptic rendering. Landmark SIGGRAPH 1990 paper by Brooks, Ouh-Young, Batter, and Kilpatrick.
**Key sources:** ACM SIGGRAPH 1990 paper, SIGGRAPH History Archives, UNC tech reports (Ouh-Young PhD 1990, Kilpatrick PhD 1976), CISMM at UNC.
**Images:** 2 local images (SIGGRAPH History Archives, Rauterberg HCI History slides).

### 3. Nintendo Hands Free Controller (1989)
**Interaction model:** Chin-operated joystick for direction + sip-and-puff tube for buttons (sip=A, puff=B). Chest-strapped wearable.
**Why it belongs:** The first accessibility controller produced by a major gaming corporation — 29 years before the Xbox Adaptive Controller. Co-designed with Seattle Children's Hospital and the National Spinal Cord Injury Association. Sold at cost via mail-order with zero marketing; very few units survive. A case study in corporate accessibility efforts vanishing without institutional memory.
**Key sources:** The Strong National Museum of Play blog (2026), Engadget (2007), Kotaku (2009), Access-Ability UK (2022), Google Arts & Culture (Strong Museum collection).
**Images:** 3 local images (Strong Museum device photo, order form, press release).

## Files Written/Modified

### New files:
- `potential/amiga-joyboard/info.json` — 91 lines, full research dossier
- `potential/grope-iii/info.json` — 108 lines, full research dossier
- `potential/nintendo-hands-free/info.json` — 121 lines, full research dossier
- `assets/wiki/amiga-joyboard-1.jpg` through `amiga-joyboard-4.jpg`
- `assets/wiki/grope-iii-1.png`, `assets/wiki/grope-iii-2.gif`
- `assets/wiki/nintendo-hands-free-1.jpg` through `nintendo-hands-free-3.jpg`

### Modified files:
- `docs/hci-wiki.md` — added 3 wiki sections + updated ToC + count from 29→32
- `src/data.ts` — added 3 exhibit entries (manually, due to promote script regex bug)
- `potential/runs/2026-06-25T13-06-10-795Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — live trace
- `potential/runs/2026-06-25T13-06-10-795Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` — this file

## Verification

- `bun run typecheck`: passed (tsc --noEmit, zero errors)
- `bun run build`: passed (32 exhibits + blog + about, 36 pages)

## Bugs Identified

- **promote-potentials.ts regex mismatch:** The data.ts replacement regex (`/\n\];\s*\n\nexport const featured/`) does not match the actual file structure, which has `export const exhibits` between `];` and `export const featured`. The wiki gets updated but data.ts entries are silently dropped. Fixed manually this run. Should be patched: change pattern to match `\n];\n\nexport const exhibits`.

## Gaps Status

| Gap | Before | After |
|-----|--------|-------|
| Haptic/tactile feedback | Empty | Filled: GROPE-III |
| Puff/sip interfaces | Empty | Filled: Nintendo Hands Free |
| Eye-tracking interfaces | Empty | Still empty (strong candidates deferred) |
| Speech recognition | Empty | Still empty (strong candidates deferred) |

## Next Run Suggestions

- Promote EyeTyper (1983) to fill the eye-tracking gap
- Promote DragonDictate (1989-90) or Heuristics SpeechLab (1976) to fill the speech recognition gap
- Fix the promote-potentials.ts regex bug
- Consider the deferred candidates: Minsky Sandpaper, Hard Drivin', Buchla Thunder
