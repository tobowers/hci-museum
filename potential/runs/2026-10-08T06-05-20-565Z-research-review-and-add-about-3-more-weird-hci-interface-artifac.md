# Run 2026-10-08 — Research, review, add ~3 weird HCI artifacts (1976–1992)

Beepy curatorial run. Goal: find ~3 distinct-interface candidates, review, promote the strongest.

## Baseline (start)
- Build: 290 exhibits in src/data.ts (`grep -cE '^\s{4}id: "'`).
- Wiki ToC present.
- potential/ has 297 entries; 2 active (non-archived) info.json:
  - `sequential-prophet-vs` (Sequential Circuits Prophet VS, 1986) — vector synthesis, 2-axis joystick crossfades 4 waveforms across a 2D timbre plane.
  - `moog-liberation` (Moog Liberation, 1980) — keytar with neck-length ribbon controller.
  - Both have valid 1200px CC images downloaded. Both use the OLD info.json shape (top-level `images`/`blurb`, no `research` block) so promote-potentials.ts won't pick them up as-is.

## Decisions / plan
- Memory flags music-HCI as saturated (~11 exhibits + ~8 notes). Weigh Prophet VS's distinct interaction (joystick-as-timbre-plane) vs. saturation.
- Launch ≤3 hci-research-subagent angles that are NOT in memory's "exhausted" list.
- Track Octen budget (7 shared).

## Progress
(append as you go)
## Subagent results (3 parallel angles)
1. **Console controllers** (hci-research): Konix Speedking (1989, one-handed twist-grip torsional controller) — genuinely distinct principle BUT zero Commons images. Sega Handle Controller marginal. Not promotable per image requirement.
2. **Embodied data-capture handhelds** (hci-research): VIOLATED exclusion list — returned VPL DataGlove, VPL DataSuit, Polhemus 3SPACE, all ALREADY in museum. Discarded entirely.
3. **Office/trade appliances** (hci-research): ALSO violated exclusion list — returned DataHand and Microwriter, both ALREADY in museum. Discarded entirely.

Conclusion: fresh discovery yielded ZERO viable candidates. Two of three subagents ignored exclusion lists entirely (consistent with memory).

## Ready candidates in potential/ (from prior aborted runs), both with verified CC images
- **sequential-prophet-vs** (Sequential Circuits Prophet VS, 1986): 2-axis joystick continuously crossfades/mixes 4 digital wavetables across a 2D plane of timbre — joystick-as-timbre-plane, genuinely unique in collection. Images: CC0 + CC BY 4.0, verified valid PNG/JPEG 1200px.
- **moog-liberation** (Moog Liberation, 1980): keytar whose neck is a continuous ribbon controller for glissando/bend — wearable, continuous touching surface distinct from Synthi AKS flat touchplate. Images: CC BY 2.0 + CC BY-SA 3.0, verified valid JPEG 1200px.

Decision: promote both ready candidates (music-HCI saturation noted in memory, but each interaction model is genuine; both image-verified). Per "do not pad" guidance, 2 strong ready additions > forcing a weak 3rd. 
