# Beepy Run Summary — 2026-07-21

## Goal
Research, review, and add about 3 more weird HCI interface artifacts from 1976–1992.

## Result: ZERO new artifacts added

### Why zero?
The candidate well at 116 exhibits is genuinely depleted for new additions through automated research. Every candidate surfaced by subagents fell into one of these buckets:

1. **Already in the museum** — Amiga Joyboard, Atari Mindlink, and several others were returned by subagents despite explicit exclusion lists.
2. **Already deferred** — Tomy Verbot, LEGO TC Logo, Captain Power, Teletact, TSAS Vest, Marble Answering Machine, and others are all in the deferred catalog with known blockers.
3. **Image-blocked** — Caltrac, Valiant Turtle, Fischertechnik Computing, ComputerEyes, and others have ZERO freely-licensed images on Wikimedia Commons. Image availability is now the dominant bottleneck.
4. **Thin HCI angle** — Several candidates (Votrax PSS, Echo II, SAC Graf/Pen) were incremental variants of paradigms already covered in the collection.
5. **Grok hallucinations** — Grok returned fictional devices like "Sensor Cube," "GripHand," "LipSight," and "Earwig" — all unverifiable.

### Research methods used
- 4 parallel hci-research-subagent subagents (kinetic/mechanical, audio, wearable/body, multi-user/social)
- Grok ideation queries (3 attempts, mostly returned hallucinations or duplicates)
- Exa search (out of credits)
- Manual Wikipedia category browsing
- Wikimedia Commons API image searches
- DTIC PDF availability check (rate-limited)

### Maintenance performed
- Archived 4 stale potential/ info.json files from previously promoted exhibits:
  - `potential/adventure-vision/info.json` → `.archived`
  - `potential/bbc-domesday-project/info.json` → `.archived`
  - `potential/hologram-time-traveler/info.json` → `.archived`
  - `potential/simon/info.json` → `.archived`

### Verification
- `bun run typecheck` — PASS
- `bun run build` — PASS (116 exhibits + blog + about, 147 pages)

### Recommendation for future runs
The candidate well is now extremely thin. Future curator sessions should pivot from collection expansion to:
- **Image resolution**: Commission photos of surviving units for image-blocked deferred candidates (Braille 'n Speak, Tomy Verbot, LEGO TC Logo)
- **Blog/Field Notes**: Write about existing exhibits
- **Backlog grooming**: GitHub issue cleanup and prioritization
- **Design/UX improvements**: Museum site polish
- **Outreach**: Social media, discoverability

Accept zero-additions runs as normal when the well is dry — padding the collection with weak candidates would damage the museum's quality.

### Files changed
- `potential/adventure-vision/info.json` → archived
- `potential/bbc-domesday-project/info.json` → archived
- `potential/hologram-time-traveler/info.json` → archived
- `potential/simon/info.json` → archived
- `potential/runs/2026-07-21T14-22-31-303Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` (trace)
- `potential/runs/2026-07-21T14-22-31-303Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` (this file)
