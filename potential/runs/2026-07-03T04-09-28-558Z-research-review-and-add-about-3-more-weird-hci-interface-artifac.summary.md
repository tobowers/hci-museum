# Run Summary: 2026-07-03 — Add 3 Weird HCI Interface Artifacts

## What changed

Added **3 new exhibits** to the HCI Museum collection (68 → 71):

### 1. Vectrex 3D Imager (1983)
- **What it is:** First commercially released stereoscopic 3D gaming peripheral. A motorized spinning filter disk (half black, half RGB wedges) synced via PWM to the Vectrex vector CRT, producing color 3D from a monochrome screen.
- **Why it matters:** Electromechanical approach to 3D — no LCD shutters, no electronics in the headset beyond a DC motor. Sega had to retract "world's first 3D gaming" claims in 1987 because this thing already existed. Only ~2,000-3,000 units produced.
- **By:** John Ross / Smith Engineering / GCE / Milton Bradley
- **Images:** 2 (Commons: headset, console set)

### 2. Soundbeam (1984)
- **What it is:** Ultrasonic sonar-based touch-free MIDI controller. Projects 50 kHz beams into space; body movement within the beam translates to MIDI data. No wearables, no contact required.
- **Why it matters:** Unique sonar sensing modality not represented in the museum. Built by EMS (VCS3 synthesizer company). Designed for dancers, but found its real calling in disability music therapy — enabling children with profound disabilities to make music independently. Still in production in 2025.
- **By:** Edward Williams / Robin Wood / EMS (Electronic Music Studios)
- **Images:** 2 (Commons: Edward Williams portrait; Sound on Sound: Soundbeam 2 system)

### 3. Hard Drivin' (1989)
- **What it is:** First commercial arcade game with continuous force-feedback steering — a 60-90V DC motor that actively resists the player based on simulated road forces. Full manual transmission (H-pattern shifter, clutch, ignition key). Real vehicle dynamics by Doug Milliken of the Milliken racing dynamics family, secretly credited as "test driver."
- **Why it matters:** Every modern force-feedback racing wheel traces its commercial lineage here. True physics-based haptics in a mass-produced consumer product, not a research prototype. 3,318 cabinets manufactured. Jed Margolin's engineering tricks (fake "34012" chip, memory architecture hack) are extraordinary.
- **By:** Atari Games (Rick Moncrief, Max Behensky, Jed Margolin, Doug Milliken)
- **Images:** 2 (Wikimedia: arcade flyer, in-game screenshot)

## Deferred

- **Canon Communicator (~1974):** Researched but not promoted. Year falls outside 1976 window. Interaction model (keyboard → thermal tape printer) is essentially a portable typewriter — the HCI novelty is in wearability/portability rather than a new input paradigm. One good Wikimedia photo. FC (facilitated communication) controversy baggage. Added to deferred list.

## Files written/edited

### New files:
- `potential/vectrex-3d-imager/info.json`
- `potential/soundbeam/info.json`
- `potential/hard-drivin/info.json`
- `assets/wiki/vectrex-3d-imager.jpg`
- `assets/wiki/vectrex-console-set.jpg`
- `assets/wiki/soundbeam-edward-williams.jpg`
- `assets/wiki/soundbeam-system.jpg`
- `assets/wiki/hard-drivin-flyer.jpg`
- `assets/wiki/hard-drivin-screenshot.png`

### Modified files:
- `docs/hci-wiki.md` — Added 3 wiki sections + ToC entries; updated count from 68 to 71
- `src/data.ts` — Added 3 exhibit entries
- `docs/beepy-memory.md` — Updated gaps date, added Canon Communicator to deferred list
- `potential/runs/2026-07-03T04-09-28-558Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md`

## Verification

- `bun run typecheck` — PASSED (0 errors)
- `bun run build` — PASSED (71 exhibits + blog + about, 83 pages)

## What still needs review

- Wiki ToC manually edited — format verified consistent with existing entries
- Soundbeam heading simplified to `## Soundbeam` (no year) to avoid parser mismatch — data.ts wikiTitle set to "Soundbeam" to match
- All images are local under `assets/wiki/`
- No remote hotlinks remain in promoted exhibits

## Research credits

Four parallel hci-research-subagents used for discovery phase:
1. Strange consumer game controllers
2. Early accessibility interfaces
3. Unusual embodied interfaces
4. Grok + Exa category brainstorming

Four parallel hci-research-subagents used for deep research phase:
1. Vectrex 3D Imager
2. Soundbeam
3. Canon Communicator
4. Hard Drivin'
