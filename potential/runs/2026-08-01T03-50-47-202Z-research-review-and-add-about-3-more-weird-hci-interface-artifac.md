# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Run setup

- Session start: 2026-08-01T03:50:47Z
- Collection at start: ~143 exhibits in src/data.ts, 140 wiki `## ` sections, 140 dirs in potential/ (incl. runs/, evals/).
- Memory reviewed (docs/beepy-memory.md). Candidate well is thin (several zero-add runs); image availability is the dominant bottleneck. Focus on fresh angles + CC-image verification.
- Promotion path: known-buggy promote-potentials.ts (data.ts regex fails, no image copy, no ToC update) -> plan manual promotion.

## Chosen research angles (3 parallel subagents)

1. **Unusual-mechanism home video game controllers / gaming peripherals, 1976-1992**
   (excludes covered: Power Glove, U-Force, LaserScope, R.O.B., Power Pad, Joyboard, Exciting Boxing, Street Fighter Pneumatic, Heavyweight Champ, Stompin', Suncom Aerobics Joystick, Surf Champ, Coleco Telstar Arcade, Vectrex Light Pen, Nintendo D-pad, etc.)
2. **Dedicated information appliances: early e-readers, electronic dictionaries/translators/reference devices, 1976-1992**
   (fresh category; palmtop covered but CD-ROM/reference appliances not)
3. **Computer-telephony hybrids: videophones, digital answering machines, phone-computer terminals, 1976-1992**
   (flagged unexplored in memory 2026-07-30; modems covered, but device-side telephony not)

## Octen/Exa budget

- Shared hard limit: 7 Octen requests total. Subagents: 2 each (6 total). Reserve 1 for own final validation.
- Shared hard limit: 2 Exa requests total. Reserved for own use; subagents told NOT to use Exa.
- Commons API + Wikipedia fetches are free (no budget).

## Progress log

- [03:52Z] Explored repo: data.ts (Exhibit type, img() helper -> assets/wiki/), wiki ToC structure, promote-potentials.ts known bugs confirmed (regex targets `\n\];\s*\n\nexport const featured`; actual file has `export const exhibits` between -> fails). Manual promotion planned.
- [03:52Z] Trace file created. Launching 3 hci-research-subagents in parallel.

## Candidates surfaced (filled in as results arrive)

(empty until subagents return)
- [03:55Z] Subagent results in. Strong image-viable candidates:
  * Sony Data Discman DD-1EX (1990) — first e-reader, V&A collection, abundant CC images (Commons).
  * Fidelity Voice Chess Challenger (1979/1980) — sensory board + speech synthesis; Commons files exist (Fidelity Chess Challenger Voice.jpg).
  * Nintendo Super Scope (1992) — shoulder-mounted bazooka light gun, scan-timing aim; Commons files exist.
  * AT&T VideoPhone 2500 (1992) — first commercial consumer videophone (POTS, fold-up LCD, privacy shutter); Commons CC image (Marcin Wichary).
  Image-blocked (skipping): Turbo Touch 360 (no Commons), Boris (no Commons), Exus Foot Craz (Power Pad overlap + no images), Franklin KJ-21/DBS-1 (no images), Lexicon LK-3000 (no Commons), Colonial Call Identifier (no image of box), AT&T 1337 (no images), Zaisan ES.1 (unverified), Sony IT-A100 (unverified).
- [03:55Z] Now verifying the 4 image-viable candidates myself via Wikipedia + Commons API. 6/7 Octen used by subagents; 1 reserved.
- [04:02Z] Verification complete (Wikipedia + Commons API + 1 final Octen request).
  * Data Discman: DD-1 Japan July 1990, DD-1EX West 1991-92; QWERTY + Yes/No prompt search; EB CD-ROM discs (100k pages); V&A permanent collection (DD-1EX); 240+ titles; SEBAS $9k license. Images: Data_discman_dd10ex.jpg (PD), Sony_Data_Discman_DD-8.jpg (CC BY 4.0), Sony-ebook2.jpg (CC0), DD_8_Electronic_Book_Player_1.jpg (CC BY-SA 3.0).
  * Fidelity Voice Sensory Chess Challenger (1980): Z80 4MHz, 1KB RAM, 20KB ROM + voice ROM; sensory 64-square pressure board + speech ROM; programmer Ron Nelson; MAME romset vscg; V&A Mini Sensory (1981) + CHM Sensory (1982) provenance. 1979 Voice Chess Challenger = first talking chess computer (image: File:Fidelity Chess Challenger Voice.jpg, Deutsches Museum, CC BY-SA 3.0, "first talking chess computer"). Second image: Schachcomputer Chess Challenger.jpg (CC BY-SA 3.0).
  * AT&T VideoPhone 2500 (1992): announced 1992-01-06, sold to 1995; 3.3in fold-up color LCD, camera, privacy shutter, press-to-activate video; POTS compressed video ~11.2 Kbps, max 10fps; AT&T Global VideoPhone Standard (GVS) + Compression Labs; $1,500->$1,000; ~30,000 units. Image: Marcin Wichary CC BY 2.0.
  * Super Scope (1992): verified fully (NA Feb 1992, 61cm bazooka, wireless IR + scan-timing aim, 12 games). DEFERRED: third light-gun-ish entry in a crowded category; keeping run tight at 3. Ready-to-promote for a future game-controller-themed run.
- [04:02Z] DECISION: promote 3 — data-discman, fidelity-voice-chess, att-videophone-2500. Manual promotion (script bugs: data.ts regex, image copy, ToC). Building info.json files.
- [04:08Z] PROMOTION COMPLETE (manual; promote-potentials.ts NOT run due to documented bugs).
  * assets/wiki/ got 7 files: data-discman-1..4.jpg, fidelity-voice-chess-1..2.jpg, att-videophone-2500-1.jpg (all verified valid JPEGs via `file`).
  * docs/hci-wiki.md: 3 sections appended + 3 ToC entries (141-143). Also fixed pre-existing ToC gap: added Flute Playing Machine, Johns Hopkins Serial Code Keyboard, MIDI Dance Floor (144-146).
  * src/data.ts: 3 Exhibit entries added (data-discman, fidelity-voice-chess, att-videophone-2500).
  * Verification: `bun run typecheck` PASS, `bun run build` PASS (146 exhibits, 187 pages). No missing-wiki warnings.
  * Wiki consistency: 150 sections / 146 ToC entries; all 6 new entries match exactly. Remaining gap is pre-existing (title normalization + Appendix not in ToC).
- [04:08Z] Writing summary + memory update.
