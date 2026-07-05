# Scout Summary — 2026-07-05

## Artifacts Added to Collection (2)

### Sega R360 (1990)
- **What**: 1,100 kg gyroscopic arcade cabinet that rotates 360° on two axes, physically orienting the player to match in-game aircraft attitude
- **Company**: Sega AM2 / Sega Enterprises
- **Price**: ~$90,000; ~100-200 units produced
- **Why**: The theoretical extreme of whole-body kinesthetic HCI. Strapped into a 4-point harness inside a fiberglass sphere, the player IS the payload — the cabinet performs barrel rolls with a human inside. Safety systems (sensor grids, dual e-stops, medical contraindication warnings) represent the collision between interface ambition and biological limits
- **Images**: 3 local (Sega Retro CC-BY 4.0 + Wikipedia fair use)
- **Files**: `potential/sega-r360/info.json`, `assets/wiki/sega-r360-*.{jpg,png}`

### Akai EWI 1000 (1987)
- **What**: Electronic wind instrument with capacitive touch keys, breath pressure sensor, and bite pressure sensor — zero moving parts in the keys
- **Inventor**: Nyle Steiner (Utah); manufactured by Akai Professional
- **Why**: First mass-market capacitive touch instrument, ~20 years before touchscreen phones. Three simultaneous continuous input channels (breath, bite, finger capacitance) mapped to MIDI. The keys use body capacitance detection — touching a metal plate changes an oscillator frequency, with zero mechanical travel. Allows faster note onsets than any mechanical switch and "partial touch" (hovering vs. firm contact)
- **Images**: 2 local (Wikimedia Commons CC-BY-SA 3.0/GFDL + CC-BY 2.0)
- **Files**: `potential/akai-ewi-1000/info.json`, `assets/wiki/akai-ewi-*.jpg`

## What Was Changed

| File | Change |
|------|--------|
| `src/data.ts` | +2 exhibit entries (Sega R360, Akai EWI 1000) |
| `docs/hci-wiki.md` | +2 wiki sections with media and sources; TOC updated; intro count updated (79→81) |
| `assets/wiki/` | +5 images (3 R360, 2 EWI) |
| `potential/sega-r360/info.json` | New research dossier |
| `potential/akai-ewi-1000/info.json` | New research dossier |
| `potential/runs/2026-07-05*.md` | Trace and summary files |

## Verification

- `bun run typecheck`: ✓ passes
- `bun run build`: ✓ builds (81 exhibits, 96 pages)
- New exhibit pages exist at `public/exhibits/sega-r360/` and `public/exhibits/akai-ewi-1000/`

## Candidates Researched but Not Added

### Disqualified
- **Sega Activator** (light beam-breaking controller): Subagent reported 1992, but verified release date is November 1993 — outside the 1976–1992 era window
- **Very Nervous System** (David Rokeby): Already deferred in previous run — agent missed the exclusion list
- **Mattel Intellivoice** (1982): Speech synthesis for Intellivision. Speak & Spell already covers speech synth; interaction is output-only
- **Bandai Terebikko** (1988): Interactive VHS telephone toy. Clever hidden-channel audio signaling, but the HCI hardware is just 4 colored buttons
- **VTech Socrates** (1988): Educational console with wireless keyboard, touchpad, mouse. Forward-thinking but standard interaction paradigms
- **The Robotic Workshop / Fischertechnik Interface**: Physical computing platforms that overlap with AtariLab

### Deferred (strong but saved for later)
- **Tatsumi TX-1** (1983): Triple first — rotating cockpit, force-feedback steering wheel, three-screen panoramic display. Japan's #1 arcade cabinet for 6 months. Overlaps with Hard Drivin' (force feedback) and R360 (rotating cockpit). Fair-use images only. Worth revisiting when the arcade/kinesthetic section gets a thematic refresh.

## Lessons for Beepy Memory
- The Sega Activator was released November 1993 (not 1992 as widely claimed in retro gaming press). Always verify exact release dates against primary sources.
- Sega Retro (segaretro.org) is a rich source of CC-BY 4.0 images for Sega hardware — usable for museum exhibits.
- Akai EWI images on Wikimedia Commons are mostly of later models (EWI 3020, 4000s, 5000). The EWI 1000 from 1987 is the original, but period product photos are scarce. The Chase Baird 2019 performance photo shows an EWI1000 in contemporary use — acceptable per the "do not block promotion waiting for a perfect period photo" guidance.