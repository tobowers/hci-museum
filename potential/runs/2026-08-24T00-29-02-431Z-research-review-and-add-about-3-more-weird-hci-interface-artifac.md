# Run trace: 2026-08-24 research-review-add

Goal: add ~3 weird HCI interface artifacts 1976-1992.

## Step 1 — Ready-candidate scan
Scanned potential/*/info.json. Remaining active files (view-master, the-hands,
captain-ntx5000) are intentionally-deferred candidates, not ready to promote.
Archived 2 stale already-promoted info.json files (toshiba-lc836mn,
fehmi-biofeedback-computer). No new ready unpromoted candidates.

## Step 2 — Research subagents (3 launched, 3 returned)
Each used its full 2-Octen budget; shared budget exhausted at 7.

1. **Computer-phones/answering/telephony HCI** → Touch-a-matic (1976-82, physical
   paper directory as push-button UI, genuinely novel BUT zero no CC images on
   Commons — image-blocked). Marble Answering Machine (image-locked, known
   deferred). Nothing promotable.
2. **Early OCR/scanning/computer-vision hardware** → REI Hand-Held OCR Wand
   (1976), Siemens dual wand (1985), Datacopy Scan-Trac (1973). All
   image-blocked — no freely-licensed photos. Nothing promotable.
3. **Weird consumer info appliances** → Atari MindLink (1984) + DataHand (1990)
   returned DESPITE exclusion lists — BOTH already in museum (verified in
   src/data.ts). Fidelity Mini Sensory Chess Challenger (1981) has verified CC
   images but is a near-duplicate interaction of the museum's existing Fidelity
   Voice Sensory Chess Challenger + Novag Robot Adversary (piece-on-sensory-board
   = input). Not promotable; would pad an already-covered sensory-chess family.

## Step 3 — Direct follow-up hunting (after Octen exhausted)
Used direct Commons API + Wikipedia to hunt outside subagent angles:
- Game controllers (Wii/Spinning-mirror/Turbo etc.) — saturated/duplicates.
- Terminal categories (Telidon, IBM 3278, Prestel/Deccafax) — standard
  interaction, or duplicates of Minitel/BTX.
- Deferred-candidate image rechecks: Braille 'n Speak, Tomy Verbot, LEGO TC
  Logo, Touch-a-matic, DigiCassette — all STILL image-blocked; no new Commons
  images surfaced.
- Mattel Intellivoice (speech output, not distinct input) — excluded.
- Orphan research sections reviewed: Flute Playing Machine (art installation,
  overlaps UPIC), MIDI Dance Floor (no images, overlaps Stompin'), Johns Hopkins
  Serial Code Keyboard (genuinely distinct interaction, but image-blocked).

## Decision: ZERO additions
Every genuinely-distinct candidate found this run is image-blocked; every
image-verified candidate is a duplicate or near-duplicate. Per museum charter
("do not pad the collection") and Beepy memory ("accept zero-additions runs as
the norm when the well is dry"), no promotion this run.

## Documented for future
- **Johns Hopkins Serial Code Keyboard (1983)** — strongest genuinely-distinct
  candidate (frequency-encoded pseudo-Morse, three-position switch, tone-as-
  encoding accessibility input). Full info.json created and archived at
  potential/jhu-serial-code-keyboard/info.json.archived. Blocked only by image
  quality (Creative Computing Oct 1983 scan needs extraction).
- **Touch-a-matic (1976-82)** — novel physical-paper-directory-as-UI, blocked by
  no CC images.
- **Serial Code Keyboard / REI OCR wand / Siemens wand** remain documented in
  this trace.

## Files written
- potential/jhu-serial-code-keyboard/info.json.archived (documented candidate)
- potential/runs/2026-08-24T00-29-02-431Z-...md (this trace)
- (summary written at end)

## Verification
No src/data.ts or docs/hci-wiki.md changes this run, so no typecheck/build
necessary (collection unchanged).