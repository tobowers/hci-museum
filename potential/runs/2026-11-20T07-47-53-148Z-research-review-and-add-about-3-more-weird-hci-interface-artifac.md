# Run trace — 2026-11-20T07-47-53-148Z

Goal: research/review/add ~3 weird HCI artifacts, 1976–1992.

## Start state
- `git log`: HEAD = bd881a8 (blog merge).
- `src/data.ts` exhibit count: 323.
- `find potential -name info.json`: ZERO active info.json — no ready candidates staged from prior runs.
  (All previously promoted/abandoned candidates are `info.json.archived`.)

## Plan
1. Check whether any recent exhibits lack Field Notes (cheap option).
2. Launch up to 3 research subagents on fresh angles not exhausted per memory.
   Memory says exhausted: music/expressional controllers, marine/nav, industrial PLC, drafting/digitizer
   (Summagraphics rebadge trap), home-appliance physical cards, surveying, time-and-attendance,
   portable data terminals, body-interface (broadly noted), output-mechanism family (well noted).
3. Prefer angles with Commons-image density.

## Step 1 — Field Note backlog audit
Ran a mechanical "unlinked exhibit" scan: 124 of 323 IDs have no direct `exhibits/<slug>` link in docs/blog.
This list is KNOWN-NOISY (memory 11-04) because most are covered under poetic slugs. Spot-greps
(Avl, Genigraphics, TMI, Ishiguro, SelectaVision, Aesthedes) all confirmed noted.
Conclusion: blog backlog is not the productive path today — goal is 3 NEW artifacts. Proceeding to research.

## Step 2 — Research angles chosen
Avoiding memory-marked exhausted angles (music/expressional controllers, marine, industrial PLC,
drafting/digitizers incl. Summagraphics rebadges, home-appliance cards, surveying, portable data terminals,
body-interface, output-mechanism). Three fresh angles:
A) Cinema/theatre/venue ticketing & seat-selection hardware + stadium scoreboards (env-display/venue HCI).
B) Educational classroom response / student interrogation systems + language-lab consoles.
C) Office/institutional "form-completion" and cheque/statement machines — procedural document machines
   (embossing, addressing, franking, cheque-writing) where the PAPER is the state machine.

## Step 3 — Research returns (3 subagents launched, 2 usable)
- Subagent A (venue/ticketing/scoreboards): step-limited but returned verified findings. Best: Wrigley Field hand-turned scoreboard
  (CC0 image, 4000x2248, operator-in-board). Electro-Mech console, Saddledome, Ticketron = image-blocked on Commons.
- Subagent B (classroom response): BROKEN — hit step limit, produced no candidates. Angle unharvested.
- Subagent C (institutional paper machines): good. Best: Addressograph/Graphotype (multiple CC images),
  DASA Mark 18 microfilm reader-printer (CC BY-SA 4.0, 1512x2016, explicitly captioned w/ model).
  Franking/stenotype have date caveats; Protectograph image-blocked.

## Step 4 — My own verification pass (do not trust subagent dates blindly)

## Step 5 — My own verification (subagent claims checked)
- Wrigley: fetched en.wikipedia raw. Confirmed installed 1937, clock 1941, 5th/6th rows 1961/1969, lights 1988,
  12-game/24-team grid = MLB 1969-1976, trap-door entry, "number turner watches the score changes on a computer
  and updates the scoreboard by manually replacing the numbers from within." Image File:Wrigley Field Scoreboard
  operation.jpg = CC0, 4000x2248, D. Benjamin Miller. ✅
- Addressograph: fetched en.wikipedia raw. Confirmed 1932 merger, HQ move 1978, AM International 1979, Chapter 11
  1982, and the full cassette/foot-pedal/sliding-flag mechanism text. Graphotype article confirms deboss + 1940s-80s
  dog tags. Image File:Graphotype machine (43024769245).jpg = CC BY 2.0, 5472x3648, Thomas Quine. ✅
- DASA Mark 18: Commons description is an explicit caption of a 1971 DDC survey report ("DASA Corporation Mark 18
  Reader-Printer (Roll Film, Aperture Cards, and Microfilm Fiche)"). Image CC BY-SA 4.0, 1512x2016 (file metadata says
  2016x1512 landscape; description image is rotated upright). Framed dates conservatively as c.1968-78; did NOT
  publish an unverified precise production range. ✅

## Step 6 — Promotion (manual, per audit-notes gotchas)
- src/data.ts: appended 3 entries after genigraphics-100. sortYear 1937 / 1968 / 1968.
- docs/hci-wiki.md: appended 3 full sections + ToC items 321-323.
- assets/wiki/: downloaded the 3 originals from Commons upload.wikimedia.org (preserved original resolution,
  consistent with existing 10-13 MB shipped images).
- potential/<slug>/: archived as info.json.archived with status:promoted.

## Step 7 — Verification
- bun run typecheck -> clean.
- bun run build -> "326 exhibits + blog + about, 469 pages" (was 323 exhibits). +3 ✅
- public/exhibits/<slug>/index.html all exist and reference the correct assets/wiki filenames.
- ToC anchors match GitHub heading slugs (en-dash stripped: c.1968-78 -> c196878; 1960s-1980s -> 1960s1980s). ✅
- No active potential/*/info.json remain.

## Curatorial note for memory
Subagent C's lesson: Commons API 429s under rapid fire; use a descriptive UA with contact + 3-4s spacing.
Subagent B (classroom response) burned its step budget without returning candidates — that angle is still UNHARVESTED
and should be re-run with a narrower brief (one device class) if attempted again.
