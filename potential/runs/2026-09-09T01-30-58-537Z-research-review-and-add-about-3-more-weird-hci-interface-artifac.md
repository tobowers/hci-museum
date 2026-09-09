# Run Trace — 2026-09-09 research/review/add ~3 weird HCI artifacts

Goal: research, review, add ~3 strong weird HCI interface artifacts (1976-1992).
Collection at 252 exhibits; well is thin but angle-dependent per Beepy memory.

## Plan
Launch 3 research subagents in parallel, each one focused angle, max 2 Octen each.
Verify against src/data.ts manually. Build potential/<slug>/info.json for good candidates.
Promote strongest to collection. Run typecheck + build.

## Angles chosen
- A: Embodied/gestural consumer toy/game peripherals with unusual sensing (IR/ultrasonic/capacitive/magnetic matrices) 1976-1992
- B: Dedicated office/industrial interactive input surfaces & custom function consoles
- C: Weird wearable/portable computing or sensing appliances with embodied interaction

(Trace continues below.)

## Progress
- 3 research subagents launched in parallel (angles: embodied/game peripherals, industrial function consoles, wearable sensing appliances).
- Subagent yield was poor: mostly already-in-museum duplicates (VPL DataGlove, Power Glove, Soundbeam, Speak & Spell), image-blocked candidates (Roll & Rocker, Cincinnati Milacron T3, Mazatrol), or redundant-with-existing (PUMA teach pendant family, Bell TSPS telecom keyshelf).
- Octen budget fully exhausted by subagents (6/7) + 1 manager call = 7/7. Exa used once (1/2) — returned museum's own pages, not useful.
- Manager verified via direct Wikimedia Commons API: Coleco Super Action Controller (CC BY-SA 3.0 image confirmed), Sega Menacer (CC images confirmed).
- DECISION: Promoted Coleco Super Action Controller (1983) — analog thumb-driven "speed roller" is the museum's only continuously-rotating proportional speed input in a game controller. Genuinely distinct interaction, verified image, sourced.
- DECISION: Did NOT promote Sega Menacer — it is fundamentally a light gun; museum already has LaserScope + Vectrex Light Pen point/aim devices; memory warns a third light-gun-ish entry dilutes the category.
- DECISION: Did NOT promote Roll & Rocker (image-blocked, extremely obscure), Bell TSPS keyshelf (telecom, era-boundary, weak computer-HCI fit), Cincinnati Milacron T3 (redundant with Unimation PUMA already in museum), Mazatrol (no image).

## Files written
- potential/super-action-controller/info.json (archived after promotion)
- assets/wiki/coleco-super-action-controller-1.jpg (downloaded, resized to 1200px)
- src/data.ts: added coleco-super-action-controller entry
- docs/hci-wiki.md: added ToC entry #253 + wiki section; intro count 252→253
- typecheck + build pass (253 exhibits)

## Outcome
Single verified addition this run (Coleco Super Action Controller). Well at 253 exhibits is genuinely thin; subagent yield remains ~80% duplicates/image-blocked. Accepting fewer than 3 is the honest outcome.
