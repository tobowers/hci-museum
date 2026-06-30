# Beepy curator run summary — 2026-06-30

## What changed

Three new artifacts promoted to the museum collection, bringing the total from 56 to 59 exhibits.

### Artifacts added

1. **Canon Cat (1987)** — Jef Raskin's radical text-centric computer. No files, no applications, no OS — just a unified document stream navigated by pink LEAP keys. Manufactured by Canon Inc. $1,495, ~20,000 units, discontinued after 6 months. Represents the coherent alternative to the WIMP paradigm designed by the same mind that initiated the Macintosh.

2. **Puma RS Computer Shoes (1985)** — The first body-worn, computer-connected activity tracker. Designed by Dr. Peter Cavanagh and Heinz Gerhäuser for PUMA AG. Used stride-length profiling via a custom gate-array IC to compute distance, speed, and calories. After a run, users physically plugged their shoes into an Apple IIe/C64/IBM PC printer port via 16-pin serial cable. $200. Commercial failure that anticipated Fitbit by 20 years.

3. **VersaBraille (1979)** — The first American refreshable Braille display, by Telesensory Systems Inc. (TSI). 20-cell piezoelectric Braille display functioning as notetaker, reader, and RS-232 computer terminal. Based on the Tretiakoffs' Digicassette (1976) technology. Gave blind users direct tactile access to electronic text for the first time. The same transducer mechanism still powers most Braille displays today.

### Files written/modified

- `potential/canon-cat/info.json` — full research dossier
- `potential/versabraille/info.json` — full research dossier
- `potential/puma-rs-computer-shoes/info.json` — full research dossier
- `assets/wiki/canon-cat-1.jpg` — Canon Cat left view (from OldComputers.net)
- `assets/wiki/canon-cat-2.jpg` — LEAP keys close-up (from OldComputers.net)
- `assets/wiki/versabraille-1.jpg` — VersaBraille system (from APH Museum)
- `assets/wiki/versabraille-2.jpg` — VersaBraille P2D (from Museum Levoča, Slovakia)
- `assets/wiki/puma-rs-computer-shoes-1.jpg` — Puma RS product shot (from Puma-Catchup)
- `assets/wiki/puma-rs-computer-shoes-2.jpg` — Puma RS launch photo (from Puma-Catchup)
- `docs/hci-wiki.md` — appended 3 wiki sections, updated ToC (56→59), updated intro count
- `src/data.ts` — added 3 exhibit entries
- `potential/runs/2026-06-30T01-19-44-164Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — trace log
- `potential/runs/2026-06-30T01-19-44-164Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` — this file

### Verification

- `bun run typecheck` — passed (no errors)
- `bun run build` — succeeded (59 exhibits + blog + about, 68 pages)

### Research subagents used

6 subagents launched in parallel:
- hci-research-subagent: Canon Cat — excellent detail, rich sources
- hci-research-subagent: Refreshable Braille — VersaBraille identified as strongest, full history
- hci-research-subagent: EMG interfaces — found Ward & Forward (1979) and Biolink (1991), but neither physical-enough for museum
- hci-research-subagent: Weird input devices — found Puma RS shoes, DataNose, Butler in a Box, Walking Office, Linus Write-Top
- hci-research-subagent: Japanese HCI — found Thumb-Shift keyboard, Wacom WT-460M, Telexistence, etc. (all deferred)
- hci-research-subagent: Shape/deformable input — found mostly already-covered or too-late candidates

### Candidates found but deferred

- Ward & Forward EMG Communication Device (1979) — patent-only, no physical artifact
- DataNose (1991) — nose-as-cursor, thin sources
- Butler in a Box (1983) — voice home automation, overlaps with DragonDictate era
- Fujitsu Thumb-Shift Keyboard (1980) — good but Japan-specific, defer
- Linus Write-Top (1987) — overlaps with GRiDPad in collection
- Wacom WT-460M (1984) — overlaps with existing tablet/stylus entries
- The Walking Office (1983-85) — design provocation, not functional
- Biolink Myoelectric Pointing Device (1991) — sparse documentation
- All Japanese candidates deferred for various reasons

### Promotion gotchas encountered

- Confirming the known data.ts regex bug: entries were silently dropped; manually added them
- Wikimedia direct URLs returned HTML error pages; used alternative image sources (OldComputers.net, APH museum, puma-catchup.com)
- Wiki ToC required manual update (3 entries added)
- Wiki intro count needed manual update (56→59)

### Memory updates needed

No new durable lessons to add to beepy-memory.md. The Wikimedia URL issue was already documented. The data.ts regex bug was already documented.
