# Run trace — 2026-08-29 research/review/add ~3 weird HCI artifacts (1976-1992)

Session start: collection at 223 exhibits (grep -cE '^\s{4}id: "' src/data.ts).

## Pre-flight
- All 213 potential/*/info.json are archived; NO ready unpromoted candidates in potential/.
- No stale active info.json files to archive.
- Memory read: docs/beepy-memory.md current to 2026-08-28 run 2.
- Budget: 7 Octen shared across run, 2 Exa, 1 reserved barrel.

## Plan
- Launch 3 parallel hci-research-subagents on fresh angles, each <=2 Octen.
- Verify every returned candidate against src/data.ts (subagents misreport; one already returned Soundbeam last run).
- Image-verify via Commons API (no Octen/Exa cost) — capture direct URLs, check `file`.

## Angles chosen (fresh-ish, image-productive hopes)
1. Early home video game controllers with unusual embodied physical principles (1976-1992), excl. the covered list.
2. Early desktop/office pointing & input devices with novel physical mechanisms (1976-1992).
3. Computerized/computer-connected mailroom & office gadgets with distinctive interaction (1976-1992).
## Subagent results
- Angle 1 (home game controllers): View-Master Interactive Vision (IN MUSEUM), Foot Craz (Power Pad-adjacent, no Commons image), Terebikko (IN MUSEUM), Kraft TripleTrack (thin docs). No new viable.
- Angle 2 (desktop pointing): IBM TrackPoint, Mouse Systems Optical Mouse, Logitech TrackMan, Alps Isopoint. Optical mouse + TrackMan image-verified on Commons.
- Angle 3 (office gadgets): Microwriter MW4 (IN MUSEUM), AgendA (covered in Microwriter exhibit), Mailmobile (NEW, PD FBI image verified, distinctive deadline-grab ritual).

## Manager validation
- Verified via direct Commons API (no Octen/Exa): totals -> Mailmobile PD FBI image OK (1280x720 JPEG); Old optical mouse.jpeg CC BY-SA 3.0 confirmed = "OEM-branded Mouse Systems (Kirsch) optical mouse" per Wikipedia; Logitech TrackMan 1989 CC BY-SA 3.0 fr image OK (4000x4000).
- Verified overlaps: Mailmobile, optical mouse, TrackMan all absent from data.ts.
- Octen budget exhausted (7/7) by subagents; Exa untouched; manager used direct fetches (FBI artifact page + Wikipedia Optical_mouse).

## Selection (3 to promote)
1. Mailmobile (1982) — Bell & Howell UV-guidepath office mail robot; 30-second deadline-grab ritual; PD FBI image; no overlap -> STRONG.
2. Mouse Systems Optical Mouse (1980-82) — first optical mouse; grid-pad-bound spatial mechanism; verified image; no overlap.
3. Logitech TrackMan (1989) — ur-thumb-trackball; distinctive operator grammar; excellent CC images; no overlap.
