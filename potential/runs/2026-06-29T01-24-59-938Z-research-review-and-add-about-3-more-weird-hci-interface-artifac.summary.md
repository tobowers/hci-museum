# Agent Scout Summary

**Run:** 2026-06-29T01-24-59-938Z
**Topic:** Research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Outcome: 3 artifacts promoted to collection

### 1. Minsky Sandpaper (1990)
- **What:** 2-DOF force-feedback joystick that synthesized virtual textures (sandpaper, rubber, velvet, corduroy) through programmable lateral forces
- **Who:** Margaret Minsky at MIT Media Lab, with Frederick P. Brooks Jr. (UNC), Ming Ouh-young, Oliver Steele, Michael Behensky
- **Why:** Origin of computational haptics. Wooden box with DC motors, optical encoders, and metal linkages. Every haptic device since descends from its lateral-force algorithm.
- **Images:** 4 local images (Margaret with joystick by Peter Menzel, hardware closeups, KCL archival shots)
- **Sources:** MIT PhD thesis (1995), SIGGRAPH 1990 paper (880+ citations), mminsky.com, KCL research collection, ACM SIGGRAPH History Archive

### 2. Quantel Paintbox (1981)
- **What:** $250,000 broadcast graphics workstation with the first pressure-sensitive stylus, pop-up menus, and hardware-accelerated painting for TV
- **Who:** Quantel Ltd. (Peter Michael, Richard Taylor, Paul Kellar, Martin Holbrook)
- **Why:** The missing link between consumer tablets (KoalaPad, Summagraphics) and professional creative workstations. Defined 1980s TV visual culture. Used for weather maps, news graphics, album covers (Nirvana's Nevermind, Queen's The Miracle), and David Hockney's first digital art.
- **Images:** 4 local images from Wikimedia Commons (full workstation, interior hardware, tablet+stylus, interface screens)
- **Sources:** Wikipedia, TV Technology 40th anniversary piece, Tedium, Powerhouse Museum collection, Computer Arts Society exhibition catalogue

### 3. Tongue Touch Keypad (1991)
- **What:** Custom-fitted intraoral dental retainer with nine-key membrane keypad, digital encoder, and magnetic-flux radio transmitter — worn on the palate, operated by tongue
- **Who:** Zofcom Inc. / Daniel Fortune (Palo Alto, CA), later New Abilities Systems
- **Why:** First multi-channel tongue-operated computer interface. Received FDA 510(k) clearance in 1991. Served ~70 quadriplegic users. Established the intraoral paradigm for every modern tongue interface (Georgia Tech Tongue Drive, Augmental MouthPad, MIT MouthIO).
- **Images:** 2 local images (US Patent figures — system diagram and dental appliance schematic). Device photos unavailable due to Cloudflare/MDPI access restriction on the small production-run intraoral device.
- **Sources:** SBIR.gov (3 phases), FDA 510(k) database, US Patent 5,523,745, Mountain Shadows CCR user story, NBC News, MDPI Sensors journal

## Files Modified

- `docs/hci-wiki.md`: Overview count updated (50→53), ToC entries added (51-53), 3 full wiki sections appended by promote script
- `src/data.ts`: 3 new exhibit entries added manually (promote script regex bug bypassed — `export const exhibits` between `];` and `export const featured` prevents automatic insertion)
- `docs/beepy-memory.md`: Collection gaps updated, new deferred candidates added (Aesthedes, Hotz MIDI Translator, DataSoft Le Stick, Laser Harp), promoted candidates marked
- `assets/wiki/`: 10 new image files copied (4 Minsky, 4 Quantel, 2 TTK)
- `potential/minsky-sandpaper/info.json`: Created with full research
- `potential/runs/2026-06-29T01-24-59-938Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md`: Trace updated
- `potential/runs/2026-06-29T01-24-59-938Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md`: This file

## Verification

- `bun run typecheck`: PASS (no errors)
- `bun run build`: PASS (53 exhibits + blog + about, 61 pages)

## New Deferred Candidates for Future Runs

- **Aesthedes (1984):** Dutch 6-screen design workstation. 2 working units at HomeComputerMuseum Netherlands. Radical no-overlap UI philosophy. Highest priority for next run.
- **Hotz MIDI Translator (1990):** Flat touch-pad grid MIDI controller with dynamic reconfiguration. Used by Fleetwood Mac. Overlaps with existing music HCI entries but distinctive interaction model.
- **DataSoft Le Stick (1981):** First commercial tilt controller (mercury-filled). Simple interaction model but genuine historic novelty.
- **Laser Harp (1980–81):** Optical beam interruption instrument. More art installation than HCI artifact per museum criteria.

## Known Issues

- promote-potentials.ts regex bug (line 180): `/\n\];\s*\n\nexport const featured/` does not match due to `export const exhibits` between `];` and `export const featured`. Data.ts entries must be added manually after each promotion.
- Tongue Touch Keypad device photos: ResearchGate and MDPI both block direct image access. Two high-quality patent drawings serve as primary media. If a device photo becomes available, it should be added retroactively.
