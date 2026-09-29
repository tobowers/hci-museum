# Run: research-review-and-add ~3 weird HCI artifacts (2026-09-29, run 2)

Started Tue Sep 29 12:42 UTC 2026

## Setup
- Collection: 283 exhibits (grep -cE '^\s{4}id: "' src/data.ts = 283).
- Prior run (01:37) promoted Scanset XL, HP 64000, Tektronix 11401.
- 3 active info.json files in potential/ (tektronix-11401, scanset-xl, hp-64000) are ALREADY promoted — archive as info.json.archived to prevent auto-promotion.

## Plan
1. Archive stale info.json files.
2. Launch 3 hci-research-subagents on fresh, unexplored angles (each <=2 Octen).
3. Filter candidates, verify images, build info.json, promote strong ones manually.
4. Verify typecheck + build.
5. Update memory + summary.

## Log (appended as work proceeds)
