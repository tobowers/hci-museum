# Run Trace: Research Review and Add ~3 More Weird HCI Artifacts

**Started:** 2026-06-26T13:01Z
**Goal:** Find ~3 promising new artifacts from 1976-1992, create info.json files, and promote the strongest.

## 13:01 — Reading memory and initializing
- Read docs/beepy-memory.md
- Existing collection has 32 artifacts
- Key gaps from memory: all previously listed gaps are filled
- Deferred strong candidates: SynthAxe, Quantel Paintbox, Minsky Sandpaper, Buchla Thunder, Lyricon

## 13:03 — Prospecting candidates
Launching parallel subagents for:
- A: Nintendo R.O.B. (1985) — light-flash-controlled robot game companion
- B: BioMuse (1990) — biosignal (EMG/EOG/EEG) → MIDI controller, body-as-musical-instrument
- C: Intellivision Controller (1979) — overlay-based game controller with numeric keypad + disc
- D: Etak Navigator (1985) — first in-car navigation computer

## 13:06 — All four subagents returned

**Nintendo R.O.B. — Very strong.** Unique interaction model (CRT flashes → phototransistor → motor actuation). Gunpei Yokoi is already in the museum for the D-pad. Wikimedia Commons has excellent free-license photos. Rich commercial story (trojan horse strategy post-1983 crash). Only 2 games, discontinued by 1988. Perfect museum artifact.

**BioMuse — Very strong.** First commercial biosignal → MIDI controller. EMG/EOG/EEG electrodes → DSP → MIDI. $20,000 per unit, ~100 sold. Rich academic lineage (Stanford CCRMA, Knapp & Lusted). Atau Tanaka's concert performances. CNN coverage. Genuinely weird and embodied interaction model. Image sources adequate through biocontrol.com and Tanaka's documentation.

**Intellivision Controller — Weaker.** Interesting overlay concept (physical re-labeling of buttons per game) but it's a game controller among others. Risk of being "another game controller" when we already have the D-pad, Power Pad, Power Glove, LaserScope. Defer for now; the overlay concept alone isn't enough.

**Etak Navigator — Strongest.** First practical in-car navigation. $1,395-$1,595, heading-up rotating map, map-matching augmented dead reckoning, safety lockout. Invented the universal car-navigation arrow symbol. CHM + Smithsonian have artifacts. TIME, Popular Science cover. Nolan Bushnell seed funding. Distinctive new HCI paradigm (driving + computing).

## 13:10 — Decision
Promoting: Etak Navigator, Nintendo R.O.B., BioMuse
Deferring: Intellivision Controller (overlap with existing game controllers)

## 13:07–13:12 — Image acquisition
- BioMuse: Downloaded biomuse-system.jpg (38KB) and atau-tanaka-performing.jpg (113KB) directly
- R.O.B.: Wikimedia Commons direct access blocked (404). Eventually got rob-studio.jpg (2.1MB) via Wayback Machine and rob-with-cartridge.jpg (212KB) from Computing History UK
- Etak: Multiple sources blocked. Eventually got etak-popsci.jpg (905KB), etak-equipment.jpg (647KB), etak-install.jpg (455KB), etak-team.jpg (1.8MB) all via Wayback Machine from honeynav.com

Key lesson: Wikimedia Commons CDN blocks direct image downloads from this runner environment. Wayback Machine archives are a reliable fallback for images from defunct or blocking CDNs.

## 13:12–13:15 — Promotion
- Ran `bun scripts/promote-potentials.ts -- --slugs etak-navigator nintendo-rob biomuse` — wiki sections appended, data.ts entries silently dropped (known bug confirmed again)
- Manually added 3 entries to src/data.ts before `];` 
- Manually updated docs/hci-wiki.md: replaced remote image URLs with local assets/wiki paths, added 3 entries to Table of Contents, updated intro count from 32 to 35

## 13:15 — Verification
- `bun run typecheck` — passed
- `bun run build` — passed (38 exhibits + blog + about, 43 pages)

