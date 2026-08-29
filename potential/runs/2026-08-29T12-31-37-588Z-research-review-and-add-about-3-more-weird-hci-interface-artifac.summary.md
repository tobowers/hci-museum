# Run summary: research, review, add ~3 more weird HCI interface artifacts (1976-1992)

Date: 2026-08-29T12:31:37Z

## What happened this run
Scanned the collection and potential/ for ready candidates, launched 3 parallel research subagents on fresh angles (music/electronic instruments, office/info appliances, industrial/trade instruments), verified candidates via direct Wikimedia Commons API checks, and promoted the strongest clean candidate into the real collection.

## Artifacts added to the collection (1)
**IBM 6:5 Cartridge System (1975)** — IBM Office Products Division dictation/transcription system. A physical-token interface where the token is a *voice*: six-minute magnetic discs packed into floppy-shaped cartridges, five colors for sorting, discs/cartridges markable "urgent" and mailable. Paired with the whole-body transcription ritual (hands type, foot pedal drives playback, ears hear via headset). Sold 1975-1981. 3 CC BY-SA 4.0 images.

## Why only 1 (target was ~3)
The candidate well is genuinely dry at 226 exhibits. The 3 research subagents returned mostly already-in-museum or already-deferred candidates (Buchla Thunder, Lady's Glove, HP-01) plus a handful of genuinely new but non-promotable ones (military context, art-installation, image-blocked). Only 1 candidate met all four promotion criteria (distinct interaction, CC images, not in collection, in era). Per the museum's quality-first mandate, I added 1 rather than padding to 3.

## Files written
- `potential/ibm-65-cartridge-system/info.json` → archived to `info.json.archived` after promotion
- `src/data.ts` — added IBM 6:5 exhibit entry
- `docs/hci-wiki.md` — added wiki section + ToC entry #227 + updated intro count
- `assets/wiki/ibm-65-portable-recorder.jpg`, `assets/wiki/ibm-executary-range.jpg`, `assets/wiki/ibm-dictation-machine.jpg`
- `docs/blog/the-voice-that-became-a-thing-you-could-hold.md` — Field Note
- `docs/beepy-memory.md` — updated with addition, deferred candidates, gotchas, Field Note lesson
- This trace + summary under `potential/runs/`

## Verification results
- `bun run typecheck`: PASS
- `bun run build`: PASS — "227 exhibits + blog + about, 299 pages"
- Counts consistent: data.ts 227 exhibits, wiki ToC 227 entries, wiki sections 232 (5 orphan research sections + Appendix uncounted, consistent with pre-existing discrepancy)

## Still needs review
- **F-16 force-sensing sidestick (1978)**: Deferred this run (military/defense context per GreenMan precedent + weak diagram-only image). Genuine HCI force-input significance. Revisit if scope discussion with Tobowers supports military input devices or a clean sidestick photo surfaces.
- **Soundstair (1978)**: Deferred (interactive art-installation + zero usable Commons images). Revisit if an exhibition photo surfaces.
- **BodySynth (1992)**: Deferred (overlaps BioMuse; sparse images). Do not re-scout.
- **IBM 6:5 Field Note** is drafted; could be linked from the physical-token family wiki entries if desired.
- Unwritten Field Note candidates remain pending from prior batches (Amana Touchmatic, Polaroid Digital Palette, Ascom QuickFare, IBM 3614, Collins EFIS, Fairchild Channel F, Invicta Electronic Master Mind, Meade LX200, Nissan Voice Warning).

## Tool budget
- Octen: 7 shared. 6 used by the 3 research subagents (2 each); 1 reserved and unused for manager validation (image work done via direct Commons API, which does not consume Octen).
- Exa: 0 used (not needed; subagents found candidates without fallback).
