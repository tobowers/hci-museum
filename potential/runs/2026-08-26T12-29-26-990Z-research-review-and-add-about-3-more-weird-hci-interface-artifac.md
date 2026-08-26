# Trace — 2026-08-26T12-29-26-990Z research run

Goal: research, review, add ~3 weird HCI artifacts from 1976-1992.

## State check
- Collection at build: 214-215 exhibits. Well is thin; expect 0-3 additions.
- No active (non-archived) info.json in potential/ at start — all archived.
- Prior aborted run (00:29) only archived le-stick info.json; no new additions.

## Angles planned (3 subagents, parallel)
TBD after initial scan.

## Angles (3 research subagents, parallel)
1. Retail/POS computer terminals with unusual HCI → **ViewTouch (1986)** — first commercial graphical touchscreen POS (Gene Mosher, Atari ST + MicroTouch overlay). CC BY-SA 3.0 Comdex photo on Commons. STRONG.
2. Aviation/cockpit/flight HCI → Boeing 767 FMS/CDU (1982) line-select-key soft-key terminal. Interaction overlaps existing soft-key exhibits (Displayphone, ROLM, PB-1000, Buick GCC). Image is later Honeywell unit. PASSED (redundant).
3. Electronic scales/body-measurement HCI → National Controls Computing Postal Scale (1976, Intel 4004, light-board tariff keypad). Genuinely novel interaction (physical mass→digital data) but ZERO CC images — only patent line-drawings on flaky host, can't visually verify. PASSED (image-blocked).

## Octen budget usage
3 research subagents × 2 = 6 of 7 shared budget used. 1 held in reserve. No image subagent needed. No Exa used by manager.

## Image work
- Commons API verified File:Comdex 1986.png = CC BY-SA 3.0 (Artist GeneMosher, photo by Barbara Mosher at Comdex 17 Nov 1986). Direct-downloaded full-res PNG (1570×1060) to assets/wiki/viewtouch-comdex-1986.png. Verified with `file` (valid PNG).
- Postal scale Commons search returned only mechanical/analog scales + "Computing Scale Co." building signs — confirmed NO CC image of the 1976 device. Image-blocked. Confirmed not promotable.

## Promotion (manual — promote-potentials.ts NOT run, known bugs)
- Built potential/viewtouch/info.json → archived as info.json.archived after promotion.
- data.ts: added ViewTouch entry (wikiTitle "ViewTouch", sortYear 1986, image img("viewtouch-comdex-1986.png")).
- wiki: appended `## ViewTouch (1986)` section + ToC #215 + intro count → "two hundred and fourteen".
- HIT A WIKITITLE BUG: wikiTitle was initially "ViewTouch (1986)" (with year). parse-wiki strips the `(year)` from headings, so wikiTitle must be "ViewTouch" WITHOUT the year. Build failed to match ("No wiki entry found", count stuck at 214). Fixed wikiTitle → "ViewTouch". Rebuild → 215 exhibits.
- assets/wiki/viewtouch-comdex-1986.png copied to public/assets/wiki/ in build.

## Verification
- `bun run typecheck` → PASS (no errors)
- `bun run build` → PASS, 215 exhibits + blog + about, 283 pages, no wiki-missing warnings.
- public/exhibits/viewtouch/index.html built; hero + media both reference ../../assets/wiki/viewtouch-comdex-1986.png.

## Decisions
- Promoted ViewTouch only (1 addition). Postal scale image-blocked; CDU interaction-redundant. Per museum discipline, do not pad. On a dry ~215-exhibit well, 1 strong clean addition is an acceptable result.
- Most-promising angle this run: retail/hospitality POS touchscreen — a genuinely new category, no near-neighbor note/exhibit.
