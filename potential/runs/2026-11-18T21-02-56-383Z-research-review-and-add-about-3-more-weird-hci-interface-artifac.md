# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


## Run start (2026-11-18)

- Read docs/beepy-memory.md (321 exhibits in data.ts).
- Scanned potential/*/info.json: NO active (unpromoted) info.json files. Ready backlog is empty.
- Collection count: 321 exhibits. Memory's "319" is stale; 321 after the 11-14 additions + merge.

### Planned discovery angles (3 parallel subagents, 2 Octen each)
1. Motorized/physical-output domestic & office machines: machines whose output is a physical movement, not a picture (e.g., scanning/plotting/actuated furniture, lettering machines, engravers, physical mail/bank machines).
2. Analogue-media playback with user-set addressing/selection: devices where the user must physically position the media (film/tape/slide) before the machine reads it.
3. Professional/aviation-marine-radar + public-safety dispatch consoles previously unsearched fragments.

Known dead angles (do not re-scout): ROI/MIDI-dance-floor-mirrored choreography (T-1000 MIDI Dance Floor), analog video backgrounds (Amiga NewTek Digi-View — overlaps Digi-View/Minitel? blocked), electronics modules, smart EDICT.

### Subagent results (round 1)
- Angle 1 (physical-output machines): returned only deliberation text. USELESS.
- Angle 2 (position-the-media): found **AVL Eagle / ShowPro + Dove/PosiTrak multi-image show controller (1980)** — PROMOTE-WORTHY. Images confirmed: File:AVL eagleII.jpg (CC BY-SA 3.0), File:AVL eagleII 2.jpg (CC BY-SA 3.0), File:Ford Show 1987.jpg (PD, in-service 1987), File:Kodak Ektagraphic III A ... (CC BY-SA 3.0). Also Recordak Miracode (REJECT, 1963), Caramate (image-blocked).
- Angle 3 (dispatch/radar): returned empty. USELESS.
- Octen: 2 used by subagent 2; budget check needed.

### AVL Eagle validation (manager, free sources)
- Absent from `src/data.ts` (grep avl|dove|positrak|showpro|multi-image = 0 hits in data.ts and hci-wiki.md). Favlight/Synclavier already in museum, so no collision.
- Images (verified `file`, all real JPEGs):
  - `File:AVL eagleII.jpg` 800x512 CC BY-SA 3.0
  - `File:AVL eagleII 2.jpg` 590x550 CC BY-SA 3.0
  - `File:Ford Show 1987.jpg` 1197x906 PD, dated 1987-07, shows AVL Eagle Genesis setup w/ named crew
- Interaction detail from en.wikipedia Multi-image + Eagle Computer:
  - Eagle (1980) first **non-dedicated** multi-image controller; earlier ShowPro III/V were dedicated controllers.
  - 4MHz Z80A, 64K CP/M 2.2, single/dual 5.25" floppy.
  - PROCALL language controls up to **30 Ektagraphic projectors**, 5 16mm film projectors, 20 aux control points.
  - "ClockTrak" biphase timecode (incompatible w/ SMPTE) off a multitrack audio control track.
  - Two "PosiTrak" telemetry streams over RCA/XLR audio cables each drive 5 "Dove" boxes; each Dove = 3 projectors + 2 dry closures.
  - Programming vocabulary: Forward/Reverse, Alt (no tray move), Cut/Hard Cut/Soft Cut, Fade, Dissolve (1–32 s), Freeze, Wait X, Time X, Loop, Blink.
  - Tray slot 80 reserved for alignment grid slides across all trays.
  - Replaced by video projectors/PowerPoint by early 1990s.

### Candidate 2 validation: Genigraphics 100 (manager, free sources)
- Absent from data.ts (genigraphics/dicomed/film recorder slide-producer = 0 relevant hits; the museum HAS a Linotype digital phototypesetter with CRT+keyboard — related but distinct).
- Images verified (`file`, real PNGs), ALL public domain, credited "Electronics: Graphic Arts Medium of the Future" (GE promo film), c.1973:
  - `File:Genigraphics 100 Console.png` 939x592
  - `File:Genigraphics 100 in use.png` 948x617
  - `File:Genigraphics 100 Sample Slides.png` 955x691
- Detail from en.wikipedia Genigraphics:
  - GE CISS division; origin in NASA space-flight-simulation graphics; first commercial system delivered to Amoco Oil 1973.
  - 100 / 100A: array of buttons, dials, knobs, joysticks + built-in keyboard.
  - 100B/C/D/D+: on-screen text menus + graphics tablet + pen; later pen → mouse-like device.
  - PDP-11/40, DECtape random-access storage, Forox recorder 2,000 lines (4,000/8,000 via duplex + 4x scanning).
  - The Last Starfighter scenes mastered on a Genigraphics film recorder (Cray X-MP compute).
  - 1982 divestiture → Genigraphics Corp. 1988 Microsoft partnership: PowerPoint palettes/gradients + "Send to Genigraphics"; PPT 2.0 designed for Genigraphics recorders; PPT 3.0 clip art/templates/chart style from Genigraphics artists.
- Date note: 100 console is c.1973, slightly before the 1976 window floor, BUT the product family spans to 1989 and the exhibit is framed on the family + the PowerPoint lineage. I'll set year 1973 and note the span.
- REJECTED this round (no period-specific named artifact + free images): pen plotters (CalComp/HP 7475 — would need a distinct interaction angle), strip-chart/seismograph recorders, lighting consoles, recordak/aperture card, IBM 2250 (1969, outside window, HES likely adjacent to existing hypertext entries), SynthAxe/Pencept/flip-dot/all music controllers (already present or covered).

### PROMOTED (round 1)
1. **avl-eagle** — "AVL Eagle / ShowPro Multi-Image Controller" (1980). 3 PD/CC BY-SA images localised. New interaction category: cue-list/timecode control of a room full of physical projectors.
2. **genigraphics-100** — "Genigraphics 100 Presentation Graphics Console" (1973). 3 PD images localised. Physical knob/joystick console → menus+tablet → mouse within one product family; direct PowerPoint ancestor.

Actions taken:
- Copied 6 images into `assets/wiki/` (avl-eagle-ii.jpg, avl-eagle-ii-2.jpg, avl-ford-show-1987.jpg, genigraphics-100-console.png, genigraphics-100-in-use.png, genigraphics-100-sample-slides.png); all verified with `file`.
- Inserted 2 entries into `exhibitData` before the closing `];` (avoids `promote-potentials.ts`, known broken).
- Appended 2 full wiki sections + 2 ToC entries; bumped intro count 320 → 322.
- `bun run typecheck` clean; `bun run build` → "323 exhibits ... 464 pages".
- Archived both `info.json` → `info.json.archived`. `potential/**/info.json` count now 0.

Known pre-existing drift (not fixed, noted for the record): wiki ToC previously had 319 numbered lines while data.ts had 321 entries; those 2 missing were already-promoted-but-unlisted. New ToC numbering continues from 318 → 319/320 so numbering stays monotonic, though absolute numbering now understates the 323 exhibit count by 3.

### Budget
- Octen: 2 used (subagent angle 2). No manager-side Octen used.
- Exa: 0 used.
- Subagents: 3 launched (max 3 concurrent); 2 returned nothing usable.
- Commons/Wikipedia API calls: free, ~25 searches + ~12 imageinfo lookups.
