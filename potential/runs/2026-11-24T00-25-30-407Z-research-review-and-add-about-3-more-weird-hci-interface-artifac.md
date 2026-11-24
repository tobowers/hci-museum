# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

# Run trace — 2026-11-24

## Start
- Collection count at start: 327 exhibits (`grep -cE '^\s{4}id: "' src/data.ts`).
- Scanned `potential/*/info.json`: **ZERO active (unpromoted) candidates**. All archived. No ready backlog.
- Fresh research required.

## Angles chosen (3 parallel subagents)
Deliberately chose three angles that prior memory has NOT exhausted or that open new sub-categories:
- **A: music/performance hardware with a non-obvious control topology** — prior runs saturated *gestural* music HCI (Theremin-family, MIDI guitars, glove controllers) but memory notes the "who programs the instrument / two-surface programming" lens is fresh, and wave/optical analysis instruments were never scouted.
- **B: computer-mediated public/consumer information retrieval that predates the web but isn't videotex** — CD-ROM/multimedia kiosks, tape-based audio information, museum/gallery guide hardware. Memory lists CD-ROM handhelds (Data Discman) but not *installation-level* museum/gallery guide devices or optical-media retrieval appliances.
- **C: physically awkward output/recording hardware where the machine moves the medium** — memory lists several, but not fax-output-family variations, microform readers with electromechanical retrieval, or continuous-form printers with exotic mechanisms.

## Research results — round 1
### Subagent A (music, non-obvious control)
- **SAL-MAR Construction** (Martirano, UIUC, built 1969-72, performed into 1980s) — STRONG. Touch-plate array where human and machine share the same switch bus; macro/micro "zoom lens" addressing model. Images: 3× CC BY 2.0 Commons. Note: the "light pen on painted highway" story is FALSE — do not use.
- Nicolas Collins trombone controller — medium; no artifact photo.
- STEIM Big Eye — weak, overlaps excluded camera-tracking family.

### Subagent B (pre-web public info retrieval)
- **Aspen Movie Map** — REJECTED: already in museum (`aspen-movie-map`, id at line 2428).
- Philips CD-i — images excellent (PD/CC0) but 1991 late-edge and "multimedia entertainment" more than info retrieval; weak framing.
- Musée d'Orsay DEC orientation system (1986) — fails image blocker entirely.
- Learner: public info-retrieval appliance category has essentially no free imagery on Commons. Manual-scan route only.

### Subagent C (exotic output mechanism)
- Returned EMPTY. Will re-run with tighter scope.

## Research results — round 2
### Subagent C retry (exotic output mechanism)
- **Kodak Komstar** (1977, computer-output-microfilm recorder) — STRONG. Laser-drawn 7x9 dot matrix onto dry-process microfiche/microfilm at ~120k char/s. Two CC BY 4.0 CERN PhotoLab 1981 photos. Wikipedia article exists. NOT a duplicate: DASA Mark 18 (already in museum) is the READER-printer; Komstar is the RECORDER — genuine counterpart. Downloaded `assets/wiki/kodak-komstar-cern-1981.jpg`.
- DatagraphiX, Kodak IMT, Dymo/embossers: no free machine images.

## Candidates staged with images (2 of 3)
1. `potential/sal-mar-construction` — Sal-Mar Construction (1972, performed into 1980s). CC BY 2.0. Image downloaded.
2. `potential/kodak-komstar` — Kodak Komstar (1977). CC BY 4.0. Image downloaded.
3. _Still needed: one more strong candidate, OR stop at 2._

## Promotion (2 artifacts)
Manually promoted both staged candidates — did NOT run `promote-potentials.ts` (known-buggy).

### Added to `src/data.ts` (before closing `];`)
- `kodak-komstar` — year "1977", sortYear 1977, image `kodak-komstar-cern-1981.jpg` (CC BY 4.0)
- `sal-mar-construction` — year "1969–1972", sortYear 1972, image `sal-mar-construction-crane.jpg` (CC BY 2.0)

### `docs/hci-wiki.md`
- Inserted full sections for both before "## Suncom Joy Sensor (1983)".
- ToC: added 324 (Komstar), 325 (SAL-MAR) after 323.
- Intro count was STALE at "three hundred and twenty-two" while data.ts already held 327. Corrected to "three hundred and twenty-nine" (327 + 2).
- Note drift: intro count had been out of sync by 5 before this run — the manual ToC/intro maintenance has slipped. Flag for a future quiet renumber/sync run.

### Images
- `assets/wiki/kodak-komstar-cern-1981.jpg` — 3185×3197, CERN PhotoLab 1981.
- `assets/wiki/sal-mar-construction-crane.jpg` — 2787×4571, Sousa Archives / C.E. Crane 2014.
- Both verified with `file` as real JPEGs; both copied by the build into `public/assets/wiki/` and referenced on their exhibit pages.

### Verification
- `bun run typecheck` — clean.
- `bun run build` — "329 exhibits + blog + about, 474 pages".
- Exhibit count `grep -cE '^\s{4}id: "' src/data.ts` = 329 (was 327).

## Third candidate — deliberately skipped
- Octen budget was already exhausted by the research subagents (hit `OctenBudgetExceededError`), and Exa is nearly gone. No reliable new third candidate could be sourced with remaining budget. Per the "do not pad" rule, stopped at two strong artifacts rather than promote a weak third.
- Aspen Movie Map (subagent B's top pick) turned out to already be exhibit in the museum — a reminder that subagent returns must be verified against `src/data.ts`.

## Budgets
- Octen: 7/7 used by subagents (exhausted). Exa: ≤2 used across subagents. Did not retry Octen after the exhaustion error.
- 3 research subagents launched in parallel; Supagent C's first run returned empty and was re-run once (successful on retry).

## Field Note
- Skipped. Neither artifact opened a fresh narrative thread beyond its own section; adding one would have been padding (142 existing notes).

## Final
- Start 327 → End 329 exhibits. Two added, both image-verified, both documented in the wiki.
