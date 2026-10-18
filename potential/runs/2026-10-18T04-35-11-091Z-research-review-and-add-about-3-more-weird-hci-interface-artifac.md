# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Start
- Collection at 296 exhibits (grep -cE '^\s{4}id: "' src/data.ts = 296).
- Scanned potential/*/info.json for ready candidates first (per memory guidance).
  - Found ONE non-archived info.json: `potential/scantron-888p/`. Verified via src/data.ts, docs/hci-wiki.md (16 hits), and assets/wiki/* (3 images) that the Scantron 888P+ was ALREADY fully promoted by the 2026-10-17 run. The leftover info.json was stale; archived it → info.json.archived (git shows D + ??).
  - No other ready candidates in potential/.
- Confirmed via memory: well at 296 is confirmed dry across MANY angles; zero-addition runs are the norm; do not pad.
- Note: hci-research-subagent is marked manual-only, so I am doing research directly with my bounded search tools (Octen/Exa) + Wikimedia Commons probes.

## Plan
- Probe 2-3 fresh, not-yet-exhausted angles with image availability as the primary filter:
  (1) early computer-controlled industrial/scientific lab instruments with distinctive physical interfaces (memory flags this "unexplored"),
  (2) early dedicated-purpose consumer information appliances with strong CC images,
  (3) fallback: any genuinely-new image-verified candidate from direct Commons search.
- For any viable candidate: verify against src/data.ts + beepy-memory exclusions, confirm 1976-1992 era + interaction distinctiveness + CC/PD image via Commons API/curl + `file` verify, then promote.

## Progress
(append as you go)

## Research findings
- Octen searches (2/7 used) on fresh angles (scientific-lab instrumentation, general unusual-HCI-ritual) returned only generic overview content (Springer/IOP/EDN/Wikipedia) — no distinctive, era-appropriate, image-available artifact surfaced. Matches memory: automated discovery is exhausted at 296 exhibits.
- hci-research-subagent is marked manual-only, so research was conducted directly with bounded Octen + Wikimedia Commons probes.
- Wikimedia Commons probes (free, no search budget) on priority image-blocked deferred candidates — Game Handler gyro NES, Tomy Verbot, Braille 'n Speak — STILL return ZERO images (`{"batchcomplete":""}`). Image resolution remains the unresolved bottleneck.
- Fresh artifact classes not in inventory (HP-01 calculator watch, Atari 2700 wireless joystick) also have ZERO Commons images.
- Full inventory review (296 wikiTitles) confirms the collection is comprehensively saturated across every HCI category (speech, haptics, VR, music HCI, pen computing, accessibility, telephony, fax, POS/ATM, videotex, automotive, aviation, industrial, output-mechanism displays, home automation, keyboards/chording, calculators/organizers, board games, game controllers, wearables/databanks).
- No staged-but-unpromoted work exists: every potential/*/info.json corresponds to an already-promoted exhibit (all archived except the Scantron leftover, which I archived).

## Cleanup
- potential/scantron-888p/info.json was a stale ACTIVE info.json left from the 2026-10-17 run whose promotion had already completed (entry in src/data.ts, 16 wiki hits, 3 assets/wiki images). Archived → info.json.archived. git shows D info.json + ?? info.json.archived.

## Conclusion: ZERO additions this run.
- Collection remains at 296 exhibits. No distinctive, era-appropriate, image-available artifact could be verified for promotion.
- This is the disciplined outcome per repeated memory guidance (well dry at 296+; accept zero-addition runs as normal; do not pad).
