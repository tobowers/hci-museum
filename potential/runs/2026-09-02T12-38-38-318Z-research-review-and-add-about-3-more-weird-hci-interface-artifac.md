# Run 2026-09-02T12-38-38-318Z — Research, review, add ~3 weird HCI interface artifacts

## Goal
Find ~3 promising new HCI hardware/interface artifacts from 1976-1992, review them,
and promote the strongest to the real collection. Favor strange, embodied,
commercially odd, or interaction-model-rich artifacts.

## Collection state
- Exhibit count (grep -cE '^\s{4}id: "' src/data.ts): 236
- Wiki ToC: 236 entries
- First action: scan potential/*/info.json for ready unpromoted candidates.

## Scan of potential/*/info.json (start)
Found 3 active info.json files:
- potential/cmx-340/info.json — CMX-340 (1976) — already in collection (confirmed in data.ts)
- potential/movement-mcs-drum-computer/info.json — Movement Systems Drum Computer (1981) — already in collection
- potential/sony-bve-600/info.json — Sony BVE-600 (1985) — already in collection

All three are ALREADY-PROMOTED exhibits. Archived as info.json.archived to prevent
auto-promotion. No ready unpromoted candidates existed; fresh research required.

## Next
Launch up to 3 research subagents with focused, unexplored angles.

## Research subagents launched (3 parallel, each 2 Octen max)
Recap of recent angles (avoid): broadcast/video editing, medical/clinical, hybrid
analog/digital instruments, tabletop games, CAD/drafting, weather/appliances,
marine/aquatic, portable data terminals, retail POS, aviation glass cockpit,
ATM/banking, office dictation, music/wind instruments, scanning/OCR, telephony,
keyboards, palmtops, databanks, biofeedback.

Three genuinely fresh, unrepresented angles chosen:
1. **Non-Latin / alternate-script computer input hardware** (Cyrillic, Arabic,
   Hebrew, Korean word-processor keyboards and dedicated computers, 1976-1992).
   Unexplored; typewriter/computer museum collections likely have CC images.
2. **Early digital audio mixing consoles / DAW automation control surfaces**
   (late 70s-early 90s, motorized fader automation, jog/scrub, computer-linked).
   No audio console in collection.
3. **Early non-contact / proximity-gesture input devices** (theremin-style
   proximity, capacitive proximity, IR gesture, virtual-keyboard projection)
   1976-1992, excluding VR gloves/glasses already covered.

## Subagent results (all completed; ~6 Octen used, 1 reserved)

### Angle 1 — Non-Latin script input
Returned: Pravetz 82 (Cyrillic, 1982), Sakhr AX150 (Arabic MSX, 1985-88),
Agat (Soviet Cyrillic, 1983-86), Triumph Gabriele 25 (Hebrew typewriter),
Iskra 1030. Sakhr is the most distinctive (Arabic cursive shaping in firmware
+ RTL). Pravetz/Agat are dual-language-keyboard clones (more incremental).

### Angle 2 — Audio mixing consoles / DAW control surfaces
Returned: SSL SL 4000 E/G Series Total Recall (1979/1987), Yamaha DMP7 (1987),
Neve NECAM (1975-77). SSL Total Recall is the standout: computer saves every
rotary setting to floppy, then a color-coded display guides the engineer to
MANUALLY re-turn each knob (recall didn't move knobs automatically). Fills a
wholly unrepresented category (audio mixing console). CC BY 2.0 image confirmed.

### Angle 3 — Non-contact / proximity gesture input
Returned: Big Briar Model 500 Theremin Controller (1982). Distinctive
capacitive-proximity non-contact input, controller-only, computer-compatible.
BUT no confirmed freely-licensed photo of the specific Model 500 (only sibling
Series-91 proxies). Image-blocked for promotion this run.

## Image verification (direct Commons API, does not consume Octen)
- SSL_SL4000G+.jpg — CC BY 2.0, valid JPEG 785x250 (Townhouse Studios SL4000G+)
- SonicRanchAStudio.jpg — CC BY-SA 3.0 (SSL 4000 E/G)
- Yamaha_msx_ax120_1.jpg — PD (Sakhr AX150, correct: AX150 is the Sakhr)
- KB_Arabic_Sakhr.svg — CC BY-SA 3.0 (Sakhr Arabic keyboard layout)
- Agat-9_Black.jpg — PD; Pravetz_8d_with_manual.png — CC0

## Decision
Promote **2 artifacts** (do not pad to 3 at 236 exhibits):
1. **SSL SL 4000 Total Recall** (1979/1987) — novel "computer guides the
   human hand" recall interaction; unrepresented category; CC image.
2. **Sakhr AX150** (1985-88) — first Arabic home computer; firmware cursive
   shaping + RTL; fills non-Latin-script-beyond-Japanese gap; image-rich.
Skip Pravetz/Agat (interaction incremental, redundant framing with Sakhr in
same run). Skip Big Briar Model 500 (image-blocked).
