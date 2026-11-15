# Research run trace — 2026-11-15

## Orientation
- HEAD: merge of PR #462. Collection count: 320 exhibits (`grep -cE '^\s{4}id: "' src/data.ts`).
- Scanned `potential/*/info.json`: NO active (non-archived) info.json files. No ready backlog.
- Tail exhibits: houston-hipad, computervision-cadds3, tmi-2-control-room (latest).

## Plan
Pick three fresh angles that memory says are still uncovered/unproductive-but-untried, avoid
saturated sectors (keyboards, organizers, game pads, music, output displays, telephony modems,
chess boards, scanner/OCR, biofeedback, fax).
Candidate angles:
1. Analog/video special-effects & vision-mixing performance consoles (industrial broadcast —
   image usually blocked, but try: chroma key, Grass Valley already in; try "video synthesizer
   controller", "character generator", "Dubner", "Quantel Mirage").
2. Weird sports/training instrumentation with computer input (image-blocked per memory: Polar PE-2000).
3. Alternative: office/administrative hardware with unusual physical ritual (e.g. "electronic
   mailroom", "fax server", "mail cart"), or "elevator/logistics dispatch consoles".
4. Strong alternative not yet scouted per memory: **analog audio/video post-production "time code"
   editing**, **paper-tape/edge-punched-card input devices**, **plotter/pen-input** (covered),
   **pinball/arcade maintenance diag**, **timeclocks** (dropped 2026-11-12), **industrial
   label/ticket printers** (QuickFare in), **warehouse/route terminals** (image-blocked).

Chosen three angles to launch in parallel:
- A. Video/television production control surfaces: switchers, character generators, video
   synthesizer controllers, chroma-key / paint systems not in museum (avoid Grass Valley 1600,
   Quantel Paintbox, Harris, Sony BVE-600, AMS AudioFile, SSL).
- B. Computerized exercise/physiological training instruments (rowing/cycling in museum; try
   "cardio", "ergometer" already; try anthropometry/body composition, "skinfold", "spirometry",
   "computerized fitness test", "grip strength", "reaction time trainer").
- C. Paper/edge-punch/tab-card & office automation hardware with distinctive physical ritual
   (avoid punch-card knitting, IBM 6:5, Scantron, OMR).

## Subagent round 1 results
- Angle A (video production consoles): CMX-340 editing console (1976) — STRONG, CC0 console photo
  (File:CMX-IMG 9559.JPG + CMX-IMG 9561.JPG, 2847x1327). GIZMO detachable jog knob.
  Sandin Image Processor — pre-window artifact (1971-74), modern photo only. Fairlight CVI — ZERO images.
  Chyron IV/ADO/Quantel Mirage/Abekas — confirmed ZERO free images.
- Angle B (body-as-data instruments): ALL image-blocked (Cybex II, AMTI force plate, Kin-Com, Biodex,
  spirometers). Dead angle — record and do not re-scout.
- Angle C (paper/edge-punch office input): subagent returned EMPTY. Need to redo with a direct manager
  pass or a different third angle.

Decision: CMX-340 is candidate #1. Need two more. New angles to try (manager-side, free fetches +
remaining Octen ~5): (D) field/outdoor computing instruments with unusual physical form (surveying
covered, try: forest/fishery/agriculture field computers, mining, seismograph field boxes, weather
station field recorder, "data logger"), (E) access control / identification tokens of a different
kind than iButton/ID-3D (try: hand-key, retina, fingerprint 1976-92 that ISN'T EyeDentify — image
blocked per memory), (F) unusual POINTING devices with a physical lineage (avoid mice covered),
(G) "computer-controlled physical stores" — vending/ATM-adjacent: lottery terminal, bowling alley
scoring console, race-track totalisator terminal, "Telautograph"/teleautograph, restaurant ordering
system (e.g. "Server", "Remanco").

Prioritize totalisator/lottery/bowling-scoring/restaurant-ordering — genuinely unrepresented and
probably image-rich via museum collections.

## Budget exhausted
- Octen: 7/7 used by prior subagent rounds. No more Octen. Exa: 2/2 used.
- Remaining: direct webfetch (Wikipedia, Commons API with UA, archive.org) and subagents
  constrained to webfetch-only. One subagent slot for CMX verification, one for a fresh angle.

Strategy shift: work with what's fetchable directly.
1) Verify CMX-340 image on Commons (metadata: date/model) and pull the manual from archive.org.
2) Fresh angle via webfetch only: totalisator / bowling scoring / restaurant ordering terminals —
   Wikipedia + Commons category browsing + archive.org.

## CMX verification
- Commons File:CMX-IMG 9559.JPG — CC0, by Telecineguy, described simply "CMX Systems Console",
  categorised under "Video editing computer keyboards" / "Multicolor computer keyboards".
  Downloaded full 2847x1327. OCR (tesseract, after apt install) of the key legends:
  OPEN ATR | SAVE RESET END LAST REC RPLAY | MSTR D-SRC E-SRC F-SRC AUX BLK AUDIO
  | SPLIT RETURN COPY | CTRL | TAB PAGE START | SHIFT | "A-2 A-3 A-4" | MATCH
  → these are CMX EDL/online-editor legends. Not the 340 classic layout enough to pin a model
  (340/3400 share many legends). Usage: caption as "CMX Systems editing console" with date
  *ca. 1976–1983*, explicitly noting model is unconfirmed.
- Wikipedia CMX Systems article: CC BY-SA 4.0, confirms 340 (1976, GIZMO jog knob box w/ transport
  buttons, repositionable for left-handed editors, I2 intelligent interfaces), 3400 (1979),
  3400 Plus prototype (LED legend keys, voice activation — never shipped).
- archive.org manuals on CMX editing (brow_0, unse, schn) are lending-restricted → no text/images.
- DECISION: accept CMX editing console as exhibit, caption honestly, cite Wikipedia + Commons.

## Subagent round 2 (fetch-only, angles D/E/F) — FAILED
Returned a garbled/empty tool-call artifact, no report. No budget spent by it (it was told not to).
Lesson: research subagent is unreliable in this environment; do the fetches in the manager loop.
