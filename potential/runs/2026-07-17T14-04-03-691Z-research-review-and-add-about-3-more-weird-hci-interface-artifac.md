# Run trace: 2026-07-17T14-04-03-691Z

## Goal
Research, review, and add about 3 more weird HCI interface artifacts from 1976-1992.

## Setup
- Read beepy-memory.md: 107 artifacts in collection. Candidate well genuinely thin.
- Found 3 existing potential/ candidates from incomplete July 16 run:
  - `jhu-serial-code-keyboard` (1983) - Johns Hopkins Serial Code Keyboard - frequency-encoded pseudo-Morse with 3-position switch
  - `flute-playing-machine` (1979-1982) - Martin Riches' draw-to-play robot flute with photocell reader
  - `midi-dance-floor` (1989-1990) - 32-foot continuous-pressure dance floor with 128 FSRs
- All three have complete info.json + downloaded images. Evaluating alongside new search.
- Launching subagents for new candidate discovery.

## Initial evaluation of existing candidates

### Johns Hopkins Serial Code Keyboard (1983)
- PROS: Distinct interaction model (frequency-encoded pseudo-Morse, auditory-kinesthetic feedback loop). Accessibility angle. Creative Computing article gives good primary source. Published October 1983.
- CONS: Only 1 primary image (magazine scan). Thin visual documentation. No surviving hardware photos.
- VERDICT: Worthy but thin on images. Evaluate against new candidates.

### Flute Playing Machine (1979-1982)
- PROS: Extraordinary interaction model (drawing as composition, optical-to-acoustic machine). 4 good images from artist's own site. Berlinische Galerie collection. Distinct from UPIC (synthesizer vs acoustic instrument). Published works by composers.
- CONS: Artist's site images are CC BY-NC-ND (non-commercial, no-derivatives). More art installation than commercial HCI product.
- VERDICT: Very strong, images good but license restrictive. Evaluate against new candidates.

### MIDI Dance Floor (1989-1990)
- PROS: Genuinely novel interaction model. 128 FSRs = continuous analog pressure, not binary switches. Merce Cunningham dancers. Academic publication. Distinct from NES Power Pad and Stompin'.
- CONS: Only 2 small GIF images from Columbia University site. Image quality thin.
- VERDICT: Strong interaction model but thin images. Evaluate against new candidates.

## Research subagent launches

### Subagent: Early interactive exhibits/kiosks
Returned 14 candidates including PLATO Hotline (1977), WorldKey (1982), SF Net (1991), Legible City (1989 - already deferred), Electronic Café '84, Tsai Cybernetic Sculptures.
Most are installations/concepts rather than discrete hardware artifacts. None are strong enough to build info.json.

### Subagent: Early dedicated writing tools
Returned 17 candidates including Toshiba JW-10 (1978), Magnavox VideoWriter (1985), Franklin Spelling Ace (1986), Wang Freestyle (1988), Mountbatten Brailler (1991), BRAILLEX (1975).
Strongest: Toshiba JW-10 (first kana-to-kanji input method, Wikimedia image). But interaction model is software IME, not novel hardware. Defer.
Magnavox VideoWriter - interesting forever-help-panel design and Saramago provenance, but ultimately a dedicated word processor. Defer.

### Subagent: Early sensor/gesture interfaces
Returned 4 "new" candidates but ALL WERE ALREADY IN MUSEUM: Atari Mindlink, DataHand, Konami LaserScope, Brøderbund U-Force.
Subagent duplication problem confirmed again. Dead ends for 12+ sensor categories.

### Subagent: Early consumer telephony/phone interfaces
Returned candidates including AT&T Sceptre (1983), Pennywhistle Modem (1976), VMX/64 (1979), NABU (1982), X10 CP-290 (1985).
AT&T Sceptre is most promising — wireless IR keyboard + TV set-top box, 1983. But interaction model (keyboard + TV menu) is not novel enough for this museum. Defer.
VMX/64 — first voicemail system with telephone keypad as sole UI. Fascinating but rack-mounted chassis not a compelling physical artifact. Defer.

## Final evaluation of existing 3 candidates

### Johns Hopkins Serial Code Keyboard (1983)
PROS: Genuinely novel interaction model. Frequency-encoded pseudo-Morse where timing is abandoned entirely. User HEARS their own keystrokes as musical pitches — auditory-kinesthetic feedback loop. Accessibility device designed for quadriplegics and upper-limb amputees. Published in Creative Computing Oct 1983. VA-funded, JH APL developed. Unique in collection — nothing else uses frequency-as-encoding.
CONS: Only 1 primary image (Creative Computing magazine scan, 800×1038 JPEG). No surviving hardware photos. No commercial production.
DECISION: PROMOTE. The interaction model is too distinctive to pass up. Single image is adequate for a conceptual/prototype device.

### Flute Playing Machine (1979-1982)
PROS: Extraordinary interaction model — drawing-as-composition for a physical acoustic instrument. Felt-tip pens on transparent scroll → 15 photocells → 12 electromagnetic keys on an alto flute. Distinct from UPIC (synthesizer) — this drives a REAL FLUTE with solenoids and compressed air. Berlinische Galerie permanent collection. Published works by Tom Johnson and others. 4 good images from artist's own site.
CONS: Images licensed CC BY-NC-ND (non-commercial, no-derivatives). More art installation than commercial HCI product.
DECISION: PROMOTE. The interaction model is one of the most beautiful and unusual in the museum. CC BY-NC-ND is acceptable for museum educational use (display with attribution). This is exactly the kind of artifact the museum exists for.

### MIDI Dance Floor (1989-1990)
PROS: Genuinely novel — 128 Force Sensing Resistors under a Marley dance surface, arranged 8×8 grid, each 2-foot-square zone transmits CONTINUOUS analog pressure (not binary). Motorola MC68HC11-based Voltage/MIDI Interface. Used with Merce Cunningham Dance Studio dancers. Academic paper in JASA (1990). Distinct from Power Pad (binary) and Stompin' (3×3 arcade grid, also analog but different scale/context).
CONS: Only 2 small GIF images (501×329 and 400×447). Research prototype, not commercial. Thin visual documentation compared to physical devices.
DECISION: PROMOTE. The interaction model is sufficiently distinct (continuous analog pressure floor, dance-as-MIDI-controller). The GIF images are real documentation from Columbia University. Accept thinner images for this research artifact.

## Promotion plan
All 3 existing candidates will be promoted via promote-potentials.ts script.
No new info.json files need to be built — all 3 are complete with downloaded images.
After script run, manually verify wiki ToC and data.ts.

## Promotion execution

### Step 1: Run promote-potentials.ts
Result: "No new potential candidates to promote."
Reason: All 3 wiki sections already exist in hci-wiki.md (promoted in partial July 16 run).
Script correctly detected duplicates and skipped.

### Step 2: Manual image management
- Flute Playing Machine: Images already in assets/wiki/ (4 JPEGs)
- JHU Serial Code Keyboard: Copied `potential/jhu-serial-code-keyboard/images/cc-oct83-p222-iiif.jpg` → `assets/wiki/jhu-serial-code-keyboard-1.jpg`
- MIDI Dance Floor: Copied `potential/midi-dance-floor/images/midifloor1.gif` → `assets/wiki/midi-dance-floor-1.gif`, `midifloor2.gif` → `assets/wiki/midi-dance-floor-2.gif`

### Step 3: Update wiki image references
- JHU Serial Code Keyboard: Replaced remote archive.org URL with local `assets/wiki/jhu-serial-code-keyboard-1.jpg`
- MIDI Dance Floor: Replaced remote columbia.edu URLs with local `assets/wiki/midi-dance-floor-1.gif` and `assets/wiki/midi-dance-floor-2.gif`

### Step 4: Add data.ts entries
Added 3 new exhibit entries before closing `];`:
- `flute-playing-machine` (1979, sortYear 1979)
- `jhu-serial-code-keyboard` (1983, sortYear 1983)
- `midi-dance-floor` (1989-1990, sortYear 1989)

### Step 5: Update wiki ToC
Added entries 106-108. Updated intro count from "one hundred and eight" → "one hundred and eleven."

### Step 6: Archive promoted info.json
Archived all 3 info.json → info.json.archived to prevent re-promotion.

## Verification
- `bun run typecheck`: PASSED, no errors
- `bun run build`: PASSED — "Built static site (111 exhibits + blog + about, 138 pages)"

## Done
All 3 artifacts promoted, verified, and archived. Run complete.

