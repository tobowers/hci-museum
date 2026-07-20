# Run Summary: 2026-07-20 — Research, Review, and Add Weird HCI Artifacts

## Overview
- **Goal:** Research and add ~3 more weird HCI interface artifacts from 1976-1992
- **Result:** 3 artifacts added to the collection (112 total exhibits, up from 109)
- **Verification:** Typecheck ✅, Build ✅ (112 exhibits, 141 pages)

## What Changed

### Added to Collection (3)

**Worlds of Wonder Action Max (1987)** — A video game console that has no game cartridge and no on-screen graphics of its own. Game content lives entirely on ordinary VHS tapes; the jet-shaped "Sonic Fighter" light gun contains a lensed photocell that detects timed brightness flashes baked into the VHS video at moments a target is shootable. The base console only registers trigger pulls, increments a 2-digit LED score, and flashes a separate suction-cup "Score Signal" lamp on the TV bezel. Built on a 4-bit Hitachi HD401010 microcontroller. Five launch tapes shipped the same quarter parent company Worlds of Wonder (founded by ex-Atari sales president Don Kingsborough) filed for Chapter 11 in December 1987. Multiple public-domain photos by Evan-Amos on Wikimedia Commons. Distinct third corner of the museum's VHS-interaction triptych alongside Bandai Terebikko (audio+buttons) and the deferred View-Master Interactive Vision (sprite overlay+branching).

**Toby Churchill Lightwriter SL1 (c. 1985)** — A portable augmentative and alternative communication (AAC) device invented by Toby Churchill, a British engineer who lost his own speech to encephalitis at age 21. The defining feature is a pair of back-to-back LCD displays (user-facing + listener-facing) + QWERTY keyboard + speech synthesizer, so a conversation partner can read text appearing character-by-character as the user types — a speech prosthesis explicitly designed for face-to-face conversation. Toby Churchill Ltd founded 1973; the SL1 (~1985) was the first dual-LCD model. Descendants still in production under Abilia Ltd. Used the SL35 (1994) PD photo from Wikimedia Commons as a representative form-factor image with honest captioning — no freely-licensed SL1-specific photo exists. Distinct from VersaBraille, Tongue Touch Keypad, and Kay Visi-Pitch.

**Optacon II (1985)** — Telesensory Systems Inc. tactile reading machine for blind users, redesigned with Canon Inc. A handheld camera images a single letterspace of printed text; a 24×6 (144-pin) piezoelectric bimorph array maps that image 1:1 onto the user's index fingertip as vibrating dot patterns at ~250-300 Hz. The user reads by feeling letters flow across the finger — pure visual-to-tactile substitution with NO OCR, no speech, no text storage. Conceived at Stanford in 1962 by John Linvill for his blind daughter Candy; developed with Jim Bliss at SRI; commercialized by TSI from 1971. The Optacon II (1985) added computer/CRT-screen reading via lens modules. Multiple public-domain images by DrBliss (Jim Bliss, the co-inventor) on Wikimedia Commons.

### Files Written
- `potential/optacon-ii/info.json` (+ images) — promoted and archived
- `potential/action-max/info.json` (+ images) — promoted and archived
- `potential/lightwriter/info.json` (+ images) — promoted and archived
- `assets/wiki/` — 8 new local images (optacon-ii.jpg, optacon-original.jpg, optacon-tactile-array.jpg, action-max-set.jpg, action-max-gun.jpg, action-max-red-light.jpg, lightwriter-sl35.jpg, toby-churchill.jpg)
- `src/data.ts` — 3 new exhibit entries appended (action-max, lightwriter-sl1, optacon-ii)
- `docs/hci-wiki.md` — 3 new exhibit sections appended; ToC entries 107-109; all 7 remote Wikimedia URLs replaced with local ../assets/wiki/ paths
- `docs/beepy-memory.md` — updated with 3 new additions, 3 new deferred candidates, and 2026-07-20 promotion gotchas
- `potential/runs/2026-07-20T04-35-53-185Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — live trace

### Deferred Candidates (image-blocked)
- **LEGO TC Logo / LEGO Technic Control Center (1986)** — Tangible programming with LEGO motors/sensors on Apple II. Seymour Papert + Mitchel Resnick + Stephen Ocko (MIT Media Lab) + LEGO Dacta. STRONG on HCI significance (canonical ancestor of LEGO Mindstorms/Scratch) but DEFERRED: no freely-licensed in-window photo of the 1986 commercial hardware found on Wikimedia Commons or open archives. The only CC0 image on Commons is the 1996 Red Brick (out of window). Revisit if MIT Media Lab / LEGO Education archival outreach resolves image sourcing.
- **Braille 'n Speak (1987, Blazie Engineering)** — Pocket-sized braille notetaker: 6-key Braille input + speech output, no display. Deane Blazie; debut at NFB convention July 1987. STRONG on HCI distinctness from VersaBraille (braille-in/speech-out vs braille-in/refreshable-braille-out) but DEFERRED: zero freely-licensed images of the original 1987 unit. Revisit if photo of surviving unit can be commissioned or Vispero media relations provides one.
- **Tomy Verbot (1984)** — Voice-controlled consumer toy robot (Tomy model 5401, also KI·KU·ZO in Japan). Speaker-dependent, vocabulary-free — user trains 8 custom "secret code words" for Stop, Smile, Forward, Reverse, Turn Right, Turn Left, Pick Up, Set Down. Templates in volatile RAM (retrain every session). Distinct from Hubot (synthesis not recognition), HERO 1 (keypad), R.O.B. (optical), Big Trak (keypad), and Butler in a Box (stationary appliance control vs moving robot). STRONG on HCI distinctness but DEFERRED: no freely-licensed image on Commons. Revisit if a museum-quality photo surfaces.

## Verification Results
- `bun run typecheck` — PASS (no errors)
- `bun run build` — PASS: "Built static site to public/ (112 exhibits + blog + about, 141 pages)"
- `public/exhibits/` contains action-max, lightwriter-sl1, optacon-ii directories (113 total)

## What Still Needs Review
- **LEGO TC Logo (1986)** — Image-blocked. Future image sourcing options: MIT Media Lab archives, Mitchel Resnick directly, Fred Martin's 1988 MIT master's thesis (MIT DSpace) likely contains photos, or commission/s photograph a surviving unit (Bricklink lists in $100-300 range). Outstanding HCI significance — likely future promotion.
- **Braille 'n Speak (1987)** — Image-blocked. Future image sourcing options: Vispero/Freedom Scientific media relations (owns Blazie heritage), commission photo of eBay-survivor ($30-80 for BnS 640), or upload to Commons under CC-BY-SA. Outstanding HCI significance — likely future promotion.
- **Tomy Verbot (1984)** — Image-blocked. Patent scans exist on theoldrobots.com (PD-eligible) but product photos are collector-site copyrighted. Revisit if a museum-quality photo surfaces.

## Research Yield Analysis
6 parallel hci-research-subagents launched in one round. Yield:
- 3 promoted (all with freely-licensed images): Action Max, Lightwriter SL1, Optacon II
- 3 deferred (all HCI-strong but image-blocked): LEGO TC Logo, Braille 'n Speak, Tomy Verbot

Per memory: "Image availability is now the dominant bottleneck, not candidate quality." This run was the cleanest demonstration yet — every subagent returned STRONG, but half had to be deferred purely on image grounds.

Promotion mechanics: `bun scripts/promote-potentials.ts` reported "Promoted 3" and appended wiki sections but did NOT (per documented bugs) copy images to assets/wiki/, update src/data.ts, or update the wiki ToC. All three post-script steps were done manually: 8 images copied, 3 data.ts entries added, 3 ToC entries added, 7 remote URLs replaced with local paths. The 3 promoted info.json files were archived to info.json.archived after promotion to prevent re-promotion in future runs.
