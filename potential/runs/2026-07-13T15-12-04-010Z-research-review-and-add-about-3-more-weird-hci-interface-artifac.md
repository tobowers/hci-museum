# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## 2026-07-13T15:12 UTC — Start

### Archiving
- Archived liferower/info.json → info.json.archived (already promoted last run)
- Archived soundspace/info.json → info.json.archived (deferred last run)
- Only 2 active info.json files existed; both now archived

### Launched 4 parallel subagents:
1. Obscure computer input devices 1980s
2. Experimental CHI/SIGGRAPH HCI demos
3. Weird electronic toy-computer bridges
4. Japanese/European HCI rarities

### Subagent 1 Results (obscure input devices):
- TORTIS (1976) — Radia Perlman tangible programming blocks at MIT. Purely software/concept, not hardware artifact.
- Nimish Mehta's Multi-Touch Tablet (1982) — First multi-touch. Research prototype. Images via Buxton timeline.
- Entex Adventure Vision (1982) — Spinning mirror display. Novel display but interaction is standard joystick+buttons.
- CrystalEyes (1989) — Wireless shutter glasses. 3D already saturated in museum.
- Atari Cosmos (1978-81, unreleased) — Unreleased holographic console. Standard joystick interaction.

### Subagent 2 Results (CHI/SIGGRAPH demos):
- ARK (1986-87) — Software only (physics GUI at PARC)
- Peridot (1987) — Software only (programming by demonstration)
- SonicFinder (1989) — Software only (auditory icons)
- Rooms (1986) — Software only (virtual workspaces)
- Information Visualizer (1991) — Software only (3D viz)
→ All software; none are hardware artifacts. Not suitable.

### Subagent 3 Results (toy-computer bridges):
- Sega AI Computer (1986) — Multi-modal children's computer. Touch overlays + speech + AI. STRONG. Sega Retro CC-BY images.
- Micomsoft Sensor Kid (1988) — MSX physical computing sensors. Overlaps with AtariLab.
- Captain Power Toys (1987) — TV-reading optical toys. Borderline HCI (TV broadcast, not computer).
- Sega Graphic Board (1985) — Drawing tablet. Overlaps with KoalaPad/Pencept/etc.
- Fukutake StudyBox (1986) — Cassette+Famicom edutainment. Overlaps with Terebikko/2-XL.

### Subagent 4 Results (international):
- Sega Graphic Board — duplicate of subagent 3
- Sega AI Computer — duplicate of subagent 3
- BBC Domesday System (1986) — Laserdisc hypermedia. More platform than artifact.
- Famicom 3D System — DEFERRED in memory (3D saturation)
- CERN Touch Screen (1972-77) — Outside 1976 window.

### Initial Assessment:
Strongest candidate: Sega AI Computer (1986)
Need more candidates — only 1 strong one so far. Running additional targeted searches.

### Final Selection
After reviewing all subagent findings and performing additional targeted searches (piezo interfaces, deformable input, early touchpads, environmental sensors, voice-controlled arcade, pen computers, etc.), only one candidate was strong enough for promotion:

**Sega AI Computer (1986)** — Selected for promotion
- Multi-modal children's computer: touch surface with physical overlay sheets + speech recognition + speech synthesis
- Prolog-based natural language processing for children aged 3-8
- NEC V20 CPU, 128KB RAM, 512KB ROM across multiple chips
- Built by Yamaha for Sega; Prolog by CSK Research Institute
- 26+ software titles preserved, MAME emulation since 2024
- SMS Power community images available (SMS Power preservation page)
- Featured in Electronics magazine July 1986, Ars Technica/Hackaday 2024
- Enthusiast/community sourcing (SMS Power), not institutional — but extremely well documented

### Rejected / Deferred this run:
- All subagent software-only candidates (ARK, Peridot, SonicFinder, Rooms, Information Visualizer)
- Captain Power Toys — borderline HCI (TV broadcast as "computer")
- Micomsoft Sensor Kid — overlaps with AtariLab
- Sega Graphic Board — overlaps with KoalaPad/Pencept
- Fukutake StudyBox — overlaps with Terebikko/2-XL
- Entex Adventure Vision — novel display but standard joystick interaction
- Nimish Mehta Multi-Touch Tablet — one-off thesis prototype, thin image availability
- BBC Domesday System — platform, not artifact
- Yamaha Breath Controller — deferred in memory, respected
- Various arcade cabinets — interaction models too standard or too late

### Promotion plan:
- ran promote-potentials.ts for sega-ai-computer → wiki appended, data.ts entry SILENTLY DROPPED (known bug)
- manually added data.ts entry
- manually copied images to assets/wiki/
- manually fixed wiki image refs from remote to local paths
- manually updated wiki ToC (added #102)
- updated intro line ("ninety" → "one hundred and five")

### Verification:
- bun run typecheck: PASSED (no errors)
- bun run build: PASSED (105 exhibits + blog + about, 128 pages)

### Outcome:
- 1 exhibit added: Sega AI Computer (1986)
- Only 1 strong candidate found this run — the candidate well is running deeper now with 105 exhibits

