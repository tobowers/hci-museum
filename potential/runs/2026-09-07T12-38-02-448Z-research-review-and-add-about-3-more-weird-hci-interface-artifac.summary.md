# Run summary: research, review, and add ~3 more weird HCI interface artifacts

Date: 2026-09-07T12:38:02

## Outcome
**Two additions to the collection** (Luma LU-1000 Lumaphone, Honeywell Visicorder) plus one Field Note. The candidate well at 247 exhibits is dry enough that a third strong, image-verified, interaction-distinct candidate did not emerge this session; per Beepy memory ("add fewer if fewer are ready; do not pad"), two solid additions is the honest result.

## Artifacts added to the collection

| Candidate | Angle | Verdict |
|---|---|---|
| Luma LU-1000 Lumaphone (1986) | telephony / still-frame videophone | PROMOTED — museum's only still-frame videophone; snapshot cadence + sliding privacy shutter + Ataritel/Mitsubishi origin; CC BY 2.0 image |
| Honeywell Visicorder (fiber-optic CRT optical recorder, in-service 1970s-80s) | industrial output mechanism | PROMOTED — CRT-as-stylus writing directly onto photosensitive paper; PD HAER image |
| Chyron IV (1977) broadcast CG | broadcast/video | REJECTED — image-blocked (no CC images of the IV console) |
| AT&T Sceptre (1983) videotex box | telephony/videotex | REJECTED — image-blocked |
| Verifone ZON Jr (1984) | payment terminal | REJECTED — too canonical + no ZON-specific CC image |
| Gould Brush chart recorder | industrial recorder | REJECTED — near-duplicate of Visicorder (same HAER series) |

## What was written

- `potential/luma-lu1000-lumaphone/info.json` → archived as `info.json.archived` after promotion
- `potential/honeywell-visicorder/info.json` → archived as `info.json.archived` after promotion
- `potential/runs/2026-09-07T12-38-02-448Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` (this run's trace)
- `docs/hci-wiki.md` — 2 ToC entries (248-249), 2 wiki sections appended, intro count updated to "two hundred and forty-nine"
- `src/data.ts` — 2 exhibit entries (luma-lu1000-lumaphone, honeywell-visicorder)
- `assets/wiki/luma-lumaphone.jpg`, `assets/wiki/honeywell-visicorder.jpg` (local images, referenced by img())
- `docs/blog/the-phone-that-sent-you-a-photograph-at-a-time.md` (Luma Field Note)
- `docs/beepy-memory.md` — new additions/deferred/promotion-gotchas + Field Note lesson for 2026-09-07

## Research process
- Scanned potential/ for ready unpromoted candidates — none active (all info.json archived).
- Launched 3 parallel hci-research-subagents (broadcast/video, industrial chart recorders, telephone), plus a relaunched industrial-recorder subagent after the first returned empty, and a payment-terminal subagent. Each had ≤2 Octen.
- Manager verified all images directly via Wikimedia Commons API + curl (browser UA) — free, does not consume Octen. Downloaded Luma CC BY 2.0 image and Visicorder HAER thumbnail (via Commons thumbnail system; the 20MB source TIF was unsuitable as a hero).

## Verification
- `bun run typecheck` — PASS
- `bun run build` — PASS (249 exhibits, 332 pages incl. new Field Note)
- data.ts exhibit count (`grep -cE '^\s{4}id: "'`) = 249; wiki ToC = 249 entries; wiki sections = 254 (249 + 5 orphan research sections, pre-existing)

## What still needs review
- Honeywell Visicorder: unwritten as a Field Note — strong future candidate for the output-mechanism thread (flip-dot / Talaria / Polaroid Palette / Commodore 1520 family).
- Chyron IV (1977): promotable IF a freely-licensed period console photo surfaces (only rare schematic on archive.org; operator memoirs exist). Strong interaction story.
- AT&T Sceptre (1983): promotable IF a free photo surfaces.
- The well at 249 exhibits remains dry for automated discovery; image resolution for deferred candidates (Serial Code Keyboard, Touch-a-matic, HP 8566A, Chyron IV, Sceptre) is the primary expansion path.
