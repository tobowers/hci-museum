# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


# Run trace: 2026-11-19 research + promote

## Start
- Collection: 321 exhibits (`grep -cE '^\s{4}id: "' src/data.ts`).
- `potential/*/info.json` scan: ZERO active info.json (no ready leftovers).
- Blog: 139 files; backlog of "strong un-noted" list is empty per 11-18 memory.
- Plan: 3 parallel research subagents on fresh angles, then promote by hand.

## Subagent results
- A (retail/service kiosks): returned Frama variable-value stamp machine (1976, Switzerland) with PD stamp images verified via Commons API; USPS Autopost (1989-90) image-blocked. Noted a prompt-injection-style "max steps" message in its transcript.
- B (industrial/field): returned NOTHING (empty result).
- C (consumer rituals): step-capped; verified Singer COMPUTER 7900DX (CC BY-SA 4.0) + Omron HEM-7000 (CC BY-SA 3.0); leads Singer Athena 2000, Arachnid darts.
- Manager re-verified both Commons files directly (Commons API): Singer 3840x2160 CC BY-SA 4.0; Omron 3400x2550 CC BY-SA 3.0.
- Octen budget: 4/7 used by subagents. Exa 0/2.

## Manager triage (Commons API re-verified, paced 8-10s)
- Frama variable-value stamps: Frama's own Swiss machines (1976, per en-wiki "Variable value stamp") had no machine photo on Commons; only Frama *labels* (stamps 1982+ Finland, etc.) and later PTT Etzel machine (2014 photo, CC BY-SA 4.0). Weak artifact-vs-stamp fit for a HCI exhibit. DROPPED (stamp-as-objects, not an interface).
- Omron HEM-7000: image CC BY-SA 3.0 confirmed, but intro year unverified and collection already rich in health/monitoring gear; low novelty. DEFERRED.
- The strong shared discovery across all angles: **1977-1981 autofocus cameras** — a machine that took over the last manual sensing loop of photography, felt through the viewfinder.
  - Konica C35 AF (Nov 1977) first mass-produced AF camera (en-wiki). Image: File:Konica C35 AF (3852684227).jpg, CC BY 2.0, 1290x948 (small).
  - Polaroid SX-70 Sonar OneStep (1978) first consumer AF SLR, sonar. Image: File:Polaroid SX-70 Sonar OneStep 01.jpg, CC BY 2.0, 3000x2008.
  - Pentax ME-F (1981) first AF 35mm SLR with in-body sensors + motorized lens. Image: File:Pentax ME-F autofocus.jpg, CC BY-SA 3.0, 4272x2848.
- Chosen picks: (1) Polaroid SX-70 Sonar OneStep, (2) Pentax ME-F, (3) Konica C35 AF as "first mass-produced" (smaller image acceptable). All CC-licensed, in-period (1977-81).
- Exa 0/2 used; Octen not used this phase (relying on free Wikipedia/Commons).

## Promotion (manual)
Promoted 3 autofocus cameras (theme: the machine closing the last manual sensing loop of photography, 1977–1981):
- konica-c35-af (1977) — first mass-produced AF camera; image CC BY 2.0, 1290x948.
- polaroid-sx70-sonar-onestep (1978) — first consumer AF SLR (sonar); image CC BY 2.0, 3000x2008.
- pentax-me-f (1981) — first AF 35mm SLR; image CC BY-SA 3.0, 4272x2848.

Steps performed:
- Wrote potential/<slug>/info.json for each; downloaded images to assets/wiki/ (file-verified JPEGs, correct dimensions).
- Added 3 entries to src/data.ts before closing ]; no slug conflicts (polaroid-digital-palette is distinct).
- docs/hci-wiki.md: intro count 320 -> 324 ("three hundred and twenty-four"); ToC entries 319-321 appended after 318; 3 full sections appended at EOF (Overview/Deep dive/Team/Media/Sources).
- bun run typecheck: PASS. bun run build: PASS -> "324 exhibits + blog + about, 466 pages".
- Verified public/exhibits/{konica-c35-af,pentax-me-f,polaroid-sx70-sonar-onestep}/ generated and images present in public/assets/wiki/.
- Archived info.json -> info.json.archived (0 active remaining). data.ts now 324 exhibits.

Dropped: Frama variable-value stamps (only stamps/late machine photos on Commons; weak interface-object fit). Deferred: Omron HEM-7000 (year unverified, low novelty).
Budget used: Octen 4/7 (subagents), Exa 0/2. Image verification done free via Commons API (paced 8–10s after a rate-limit burst).
