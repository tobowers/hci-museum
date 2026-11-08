# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


## Run log (2026-11-08)

### Start state
- Recovered state from prior traces. `grep -cE '^\s{4}id: "' src/data.ts` = 313; wiki `^## ` headings = 318.
- potential/*/info.json: **zero active** (all `.archived`). Nothing ready to promote.
- HEAD `521eb0f`. Memory: well angle-dependent, dry across many families; held open: Casio CMD-40 (already promoted, has note) and VideoHarp (image unverified).

### Phase 1 — free Commons probing before spending Octen (deliberate reversal of prior-run order)
Memory (11-04 summary) says: require a verified Commons image BEFORE spinning up subagents (image availability is the real bottleneck, not discovery). So this run probed Commons first, with 3s spacing and a bot UA.
- Steadicam (walking camera stabiliser as a body-as-servo rig): rich free photos, but the strongest images are MODERN rigs; needs operator-attribution and era evidence — held, not pursued (film-workflow prior art for `jumbotron`/Digistar-adjacent performance angle is weak; and it's not obviously "computer-controlled").
- Galileo thermometer: many free photos, but no computing interface at all — rejected outright.
- Pen plotters / VFD / field-emission display: either already represented (Commodore 1520 plotter) or mostly refill-tool photo sets.
- **Famicom Disk System**: Commons has excellent free hardware photography (`Nintendo-Famicom-Disk-System.jpg`, Evan-Amos, **public domain**). Read the Wikipedia article in full — the **Disk Writer** in-store rewrite kiosks (¥500 to write a game onto your own floppy, 10,000 promised within a year) and the **Disk Fax** high-score fax/leaderboard (1987) are a distinctive, under-covered interaction model: retail-counter distribution and physical-media leaderboards, a decade before the Satellaview and two decades before digital storefronts.
- Duplicate check: `famicom-disk-writer` not in `src/data.ts`, not in wiki. Existing neighbours: `famicom-network-system`, `sega-ai-computer`, `barcode-battler` — none covers the kiosk rewrite transaction. No `docs/blog/` note covers it.

### Phase 2 — decision: one strong promotion rather than three padded ones
- Hard Commons rate limit hit mid-run ("You are making too many requests") — a ~60s cool-off restored service. Lesson: gradually back off rather than retry tightly.
- Octen/Exa not needed this run: the winning candidate came from free Wikipedia + Commons, so the 7-Octen/2-Exa budget is UNSPENT. Recorded as available for a future run only if the shared pool is per-session, otherwise treat as consumed.

### Phase 3 — promotion (manual, because `promote-potentials.ts` is broken)
1. Image: downloaded `File:Nintendo-Famicom-Disk-System.jpg` (PD) via browser UA → `assets/wiki/famicom-disk-writer.jpg` (3.4 MB, `file`-verified JPEG 3550×3150).
2. `docs/hci-wiki.md`: new `## Famicom Disk Writer & Disk Fax Kiosks (1986)` section (Overview / Deep dive / Media / Sources), ToC entry **312** with anchor `#famicom-disk-writer--disk-fax-kiosks-1986`, intro count 311→312, Appendix image-credit row appended.
3. `src/data.ts`: new `exhibitData` entry after Digistar, `sortYear: 1986`.
4. `bun run typecheck` clean. `bun run build` → "314 exhibits + blog + about, 446 pages".
5. `potential/famicom-disk-writer/info.json.archived` written (already-promoted → archived so it can never auto-promote).
6. Blog: NOTED that this is genuinely un-noted, but no Field Note was written this run (the note discipline allows zero); its story is recorded here and in memory as a strong future subject — the "shop counter as content delivery system" angle is unoccupied.

### Result
- 1 promotion: **Famicom Disk Writer & Disk Fax Kiosks (1986)**. Collection 313 → 314.
- Image caveat: no free photo of an actual kiosk cabinet exists (searched Commons); the promoted image is the Famicom+Disk System hardware that accepts the Disk Cards, and the caption says so.
