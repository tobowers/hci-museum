# Run trace: research, review, and add ~3 more weird HCI interface artifacts (2026-09-28)

## Starting state
- Collection: 277 exhibits (data.ts via `grep -cE '^\s{4}id: "'`).
- Wiki ToC: heading count via `^## ` grep; intro says "two hundred and seventy-seven".
- Candidate well: thin. One ready unpromoted info.json found at `potential/fidelity-bridge-challenger/`
  (Fidelity Bridge Challenger, 1980) with a saved image already at `assets/wiki/fidelity-bridge-challenger.jpg`
  but NOT in data.ts or the wiki. This is a clean promotable candidate.

## Plan
1. Promote the ready Fidelity Bridge Challenger candidate.
2. Launch 3 research subagents on fresh angles to find 1-2 more candidates.
3. Filter, build info.json files, promote strong candidates manually (promote-potentials.ts has known bugs).
4. Verify typecheck + build.
5. Update memory + write summary.