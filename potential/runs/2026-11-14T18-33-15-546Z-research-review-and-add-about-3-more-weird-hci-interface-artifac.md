# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


## Session log (2026-11-14)

- Collection baseline: 319 exhibits (`grep -cE '^\s{4}id: "' src/data.ts`). HEAD = 909a89a.
- Scanned `potential/` for ACTIVE `info.json` files: **zero** (317 dirs all `info.json.archived`). No ready candidates waiting.
- Memory notes from 11-11/11-14 runs: promotion is manual (promote-potentials.ts still lacks image-copy + data.ts + ToC edits).
- Planned angles (max 3 research subagents, 2 Octen each):
  1. Embodied whole-body / exertion input devices not yet covered (post-Stompin'/LifeRower/Amiga Joyboard space).
  2. Retail/banking/public-service ritual interfaces beyond IBM 5265/3614/ViewTouch/QuickFare (e.g. library, parking, ticketing).
  3. Unusual sensing transductions (magnetic, piezo, strain, chemical) in commercial/research interfaces.

### Subagent results (3 launched, 2 Octen each = 6/7 used)

**A. Exertion/whole-body input** — concluded the "stand-on-it exergame" space is empty beyond excluded list; steered to BREATH transducers:
- Variophon Breath Controller (1980, Realton, W. Germany) — breath-pressure + lip vibration as control voltage, no MIDI, sold commercially. PD + CC BY-SA 4.0 Commons images (`File:Variophon.jpg`, blow-converter, accordion variant, Martinetta prototype). STRONG.
- Yamaha BC1/BC2 (1982-83) — no clean product photo.
- Computone Wind Synthesizer (= Lyricon II without synth) — CC BY-SA 2.0 images, but Lyricon already in museum (1977) → near-duplicate.
- Possum chin control — no free images.

**B. Public-service ritual terminals** — hit step cap; ticket validators only:
- DDR/USSR Lochentwerter punch validator — punch pattern as machine-readable binary record. No image.
- SNCF composteur (1980 model) — CC BY-SA 2.5 image exists but the interaction (punch a ticket) is thin for a museum artifact.
- NS Stempelautomaat — PD image, in-period provenance unconfirmed.
Rejected: 3M library self-check (Grok fabricated patent + filenames; unverifiable).

**C. Unusual transduction** — hit step cap:
- Scriptel electrostatic pen tablet (1984) — best physics story, ZERO Commons images.
- Wacom EMR SD-series (1987) — no in-period image.
- IBM TrackPoint (1992) — ALREADY IN MUSEUM, subagent missed exclusion list.
- U-Force (1989) — ALREADY IN MUSEUM.
- CH Mach joysticks — potentiometers, weak physics.

### Verification passes (manager-side, free sources only)
- Commons API rate-limited (HTTP 429) after burst; solved by 20-45s backoff + single batched `titles=` query + `maxlag=5`. Workflow APIs returned concatenated JSON docs -> parse with `JSONDecoder().raw_decode`.
- Variophon confirmed via de.wikipedia "Variophon": built 1981 by Realton (Euskirchen), developed at Univ. Cologne musicology institute; impulse-forming synthesis; Talk Talk used it on *The Colour of Spring* ("Chameleon Day").
- Both Commons photos verified CC BY-SA 4.0, (c) Christoph Reuter & Holger Schefczik, 2024; downloaded to assets/wiki/ (2602x3469 and 2531x3375).

### Selection decision
- Variophon ACCEPTED (breath pressure as the signal, driving a different synthesis principle).
- Scriptel REJECTED (no free image; cannot meet local-image rule).
- AAC/ticket-machine angles: nothing promotable with in-period free imagery AND a clean exclusion-list gap (EyeTyper, Talking Glove, DynaVox already covered; Keystroke/Tongue-Touch "keyboard" imagery is Apple II hardware, wrong artifact; 1980s ticombo punchers have no free photos). Concluded: promote 1 this run rather than pad with a weak third.

### Promotion (manual, per memory: promote-potentials.ts is buggy)
- assets/wiki/variophon-blow-converter.jpg, variophon-breath-controller-accordion.jpg downloaded from upload.wikimedia.org.
- src/data.ts: added `variophon` entry after `lyricon` (sortYear 1981, 6 tags, local img).
- docs/hci-wiki.md: new section "Variophon Breath Controller (1981)" inserted before the Lyricon section, plus ToC line `278b.` next to the Lyricon line (numbering block deliberately kept adjacent; ToC is already non-sequential per memory).
- Verified: `bun run typecheck` clean; `bun run build` -> 320 exhibits, 457 pages. Exhibit count 319 -> 320.
- No `potential/<slug>` dir existed for variophon (zero active info.json), so nothing to archive.
- No blog Field Note written (single artifact; story is well covered by the exhibit text; zero Field Notes is acceptable).
- Not committed — working tree left dirty for review.
