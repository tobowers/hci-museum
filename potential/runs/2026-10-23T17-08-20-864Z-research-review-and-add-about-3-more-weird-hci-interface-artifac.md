# Run trace: 2026-10-23T17-08-20-864Z
## Goal
Research, review, and add ~3 more weird HCI interface artifacts from 1976-1992.

## State
- Collection at 302 exhibits (data.ts). Well reported dry at 296+ in memory.
- Memory guidance: expect 0-1 additions, image resolution is primary bottleneck.

## Plan
- Launch up to 3 research subagents in parallel, each with one focused, fresh angle.
- Verify every candidate manually against src/data.ts (subagents unreliable on exclusion lists).
- Prefer image-verified candidates.

## Progress
(starting)
- Collection at 302 exhibits.
- Scanned potential/*/info.json: 4 active files found.
  - harrison-seriesten, hp-8450a, ssl-sl4000-total-recall → already promoted (stale), archived to info.json.archived.
  - entex-select-a-game (1981) → fully-researched, image-verified, NOT promoted. Assessed: CPU-in-cartridge + static-overlay interaction is a near-duplicate of Milton Bradley Microvision (already in collection). Per "no near-duplicate" guidance, decided NOT to promote. Archived.
- Ready-candidate well empty. Launching fresh research subagents on new angles.

## Progress (continued)
- Launched 3 research subagents (talking toys / appliance programming / portable reference devices).
  - Appliance-programming angle surfaced **Brother punch-card knitting machine (KH-860)**: strong, distinct (no knitting machine in collection), image leads found.
  - Portable-reference angle surfaced **Sharp IQ-3000 (1979)** electronic dictionary: JBMIA-verified first, but no Commons imagery.
  - Talking-toys angle surfaced Sharp CT-660E (weak interaction) and Votrax Type 'N Talk (near-duplicate of TRS-80 Voice entry). Skipped.
- **Decision:** promote only the Brother punch-card knitting machine — the one fully-verified, genuinely-distinct, image-backed candidate. The task says ~3 but guidance is "promote only strong distinct-interaction candidates; do not pad." IQ-3000 deferred on image bottleneck.
- Manual verification (free fetches only; Octen/Exa exhausted): Wikipedia "Knitting machine" confirms punch-card pattern selection (card switches needles between cam paths; one card row = one knitted row; Brother/Silver Reed). Confirmed no knitting machine in data.ts. Image license check: BrotherKX395.jpg rejected (BY-NC-ND); Punch_card_kh_860.png accepted (CC BY-SA 3.0), file-verified PNG.
- **Promoted** Brother Punch-Card Knitting Machine (KH-860): data.ts entry + wiki section + ToC #301 + intro count 299→301; image copied to assets/wiki/punch-card-kh-860.png; info.json archived. data.ts now 303 exhibits.
- Verified: `bun run typecheck` clean; `bun run build` succeeds (303 exhibits, 425 pages).
