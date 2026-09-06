# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Setup
- Collection at 243 exhibits (src/data.ts grep `^\s{4}id: "` = 243). Wiki ToC should be 243.
- Read docs/beepy-memory.md. Well is angle-dependent; pick fresh, image-rich angles.
- Selected 3 fresh angles likely to have Commons image availability:
  1. Novel/oddball pointing devices (unusual sensing principles in mice/trackballs)
  2. Early computer-controlled home/environmental automation interfaces
  3. Novel commercial displays/output with unusual physical mechanisms

## Launching 3 hci-research-subagents in parallel (shared Octen budget of 7 total).

## Subagent results (all 3 returned)
**Angle 1 (oddball pointing devices):** Tektronix Inertial Mouse (US4787051A, accelerometer/free-space, patent-only), Field-Coupled Pointing Device (patent-only), Orientational Mouse (patent-only). All patent-only, no physical product, weak on artifact criterion.

**Angle 2 (home/environmental automation):** Unity Systems Home Manager (1985, whole-house touchscreen floor-plan + DTMF, STRONG interaction but ZERO Commons images), Honeywell Chronotherm III (embodied slider, electromechanical analog, weak as HCI), Magic Stat (teach-mode, needs validation). Unity is the strongest interaction candidate but image-blocked.

**Angle 3 (novel displays/output):** GE Talaria (1983, oil-film light-valve projector, PD Commons image confirmed), Ferranti-Packard Flip-Disc display (1976, bistable electromechanical flip-dot, free images confirmed), IBM 3290 plasma (weaker image lead).

## Decision
Chose 2 image-verified, genuinely weird, in-window artifacts:
1. **GE Talaria (1983)** — oil-film light-valve, output mechanism is the story. PD image.
2. **Ferranti-Packard Flip-Disc (1976)** — bistable electromechanical flip-dot, Family Feud board. PD + CC BY-SA images.

Deferred (documented): Unity Systems Home Manager (1985) — strongest interaction story of run but zero usable images; Tektronix Inertial Mouse (1988) — patent-only.

Images verified via Commons API (free, not Octen). Downloaded and `file`-verified:
- potential/ge-talaria/ge-talaria.png (PNG, 368x334, PD)
- potential/ferranti-packard-flipdot/family-feud-1976.jpg (JPEG, 611x896, PD)
- potential/ferranti-packard-flipdot/flipdot-closeup.jpg (JPEG, 1794x942, CC BY-SA 3.0)

info.json created for both candidates.

## Promotion
Will run bun scripts/promote-potentials.ts, then manually complete (script has known bugs: doesn't copy images, doesn't update data.ts regex, doesn't update ToC).

## Promotion (manual, script NOT run due to known bugs)
- Copied 3 images to assets/wiki/: ge-talaria.png (PD), ferranti-packard-family-feud.jpg (PD), flipdot-closeup.jpg (CC BY-SA 3.0). All `file`-verified.
- Added 2 entries to src/data.ts (ge-talaria, ferranti-packard-flipdot).
- Appended 2 wiki sections to docs/hci-wiki.md.
- Added ToC entries #244, #245.
- Updated wiki intro count 243 → 245.
- Archived both info.json → info.json.archived.

## Verification
- bun run typecheck — PASS.
- bun run build — PASS (245 exhibits, 324 pages).
- data.ts count via grep = 245 (matches build).
- Both new exhibit pages generated (public/exhibits/ge-talaria, public/exhibits/ferranti-packard-flipdot), reference local assets.

## Files written
- potential/ge-talaria/info.json (→ archived)
- potential/ferranti-packard-flipdot/info.json (→ archived)
- src/data.ts, docs/hci-wiki.md, assets/wiki/* (3 images)
- docs/beepy-memory.md (durable lessons)
- this trace + summary


