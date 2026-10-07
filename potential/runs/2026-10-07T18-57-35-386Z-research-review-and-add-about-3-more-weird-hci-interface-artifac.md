# Run trace: research-review-and-add-about-3-more-weird-hci-interface-artifac (2026-10-07)

## Goal
Find ~3 new weird HCI interface artifacts from 1976-1992, review, add strongest to collection.

## State at start
- data.ts exhibit count: 290 (grep -cE '^\s{4}id: "' src/data.ts)
- No active (non-archived) info.json candidates in potential/ — all previously-deferred candidates are archived.
- The well is thin per memory; zero-addition runs are the norm. Image availability is the dominant bottleneck.

## Plan
1. Scan potential/ for ready candidates (done — none active).
2. Launch 3 parallel hci-research-subagents on fresh, image-rich angles.
3. Review candidates, build info.json for strongest.
4. Promote, verify (typecheck + build), write summary.

