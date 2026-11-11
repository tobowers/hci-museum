# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

# Run trace — 2026-11-11

## 06:22 Orientation
- Repo HEAD: 9157ab5 (blog merge). data.ts exhibit count (grep -cE '^\s{4}id: "') = 313.
- Scanned potential/*/info.json for ready, unpromoted candidates.
- Found 3 ACTIVE (non-archived) info.json dirs:
  - potential/technics-sl-1200mk2 — Technics SL-1200MK2 (1979), 1 local image. NOT in data.ts/wiki.
  - potential/atc-flight-progress-strips — ATC Flight Progress Strips (c.1970s-90s), 2 local images. NOT in data.ts/wiki.
  - potential/ishiguro-storm-surge-model — Ishiguro Storm Surge Model (1960-1983), 2 local images. NOT in data.ts/wiki.
- All three are fully researched with sources; survivors of a prior aborted run. This matches the durable "ready candidates beat fresh subagent discovery" lesson.

## 06:30 Parallel research (2 subagents)
- Subagent A (retail/order-entry/hospitality terminals): FAILED — hit max-step cap, returned no report. Octen budget partially spent.
- Subagent B (bizarre-sensing music/audio): Octen x2, Grok x3. Reported 4 candidates, ALL rejected:
  - US4627324 body-worn dancer instrument (Zwosta) — patent-only, no product. WEAK.
  - US4372187 LABS A AB silent-string sensor — patent-only, no product. WEAK.
  - Waterphone — invention dates 1973/75, OUTSIDE window. WEAK.
  - EMS Synthi AKS — already in museum / excluded.
- Consistent with memory: music-HCI is saturated; patent-only candidates are not museum artifacts.
- Decision: stop fresh discovery. The three ready candidates are thorough, image-verified, and fill three wholly-unrepresented categories (turntablism-as-instrument, paper-as-distributed-state, analog-scale-modeling). Promote those.

## 06:40 Decision & promotion
- Reviewed Ishiguro (CC0 + CC BY 4.0, analog↔digital hybrid, era OK via CBM 8032 front end). All three ready candidates verified: images local + valid (file), no slug collisions, categories unrepresented.
- Ran `bun run typecheck` → clean; `bun run build` → "316 exhibits + blog + about, 449 pages".
- Promotions (manual, since promote-potentials.ts is buggy for images/data.ts/ToC):
  1. Copied + resized 5 images to assets/wiki (PIL, 1200px cap, q86).
  2. Added 3 entries to src/data.ts (SL-1200MK2 sortYear 1979; ATC strips 1985; Ishiguro 1980).
  3. Appended 3 full wiki sections (Overview/Deep dive/Team/Media/Sources) to docs/hci-wiki.md.
  4. Added ToC 312–314; fixed stale intro count "three hundred and eleven" → "three hundred and fourteen".
  5. Archived each potential/<slug>/info.json → info.json.archived (0 active info.json remain).
- Verified: all 3 exhibit pages built; all 5 images present in public/assets/wiki; wiki has 3 new H2 sections; typecheck+build clean.
- Field note: NOT written this run (research + promotion only). Updated docs/beepy-memory.md entry 1051.
