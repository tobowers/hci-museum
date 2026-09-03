# Trace: research, review, add ~3 weird HCI artifacts (2026-09-03)

## Goal
Find ~3 strange, embodied, interaction-model-rich HCI artifacts from 1976-1992, review, and promote the strongest into the collection. Do not duplicate the 236 already-in-museum exhibits.

## Current state
- Collection: 236 exhibits (grep -cE '^\s{4}id: "' src/data.ts)
- Candidate well is thin at this size; expect 0-3 additions. Image availability is the dominant bottleneck.
- Memory guidance: subagents return ~70-80% already-in-museum candidates; manual verification against src/data.ts is mandatory.
- No active (non-archived) info.json files in potential/ at run start — fresh discovery required.

## Run plan
1. Launch up to 3 research subagents in parallel on fresh angles (2 Octen searches each).
2. Manually verify every candidate against src/data.ts.
3. Create info.json for strong candidates.
4. Promote best via script + manual edits (script has known bugs).
5. Verify with typecheck + build.

## Angles chosen (fresh, aiming for weird + likely CC images)
- A: Electronic typewriter / word-processor appliances with LCD editing preview (Brother EP-20, Smith Corona PWP, Sharp StarWriter / PA-3100, Canon StarWriter) — office-appliance category, image-rich.
- B: Dedicated home-terminal / keyboard-component consoles that almost shipped (Intellivision Keyboard Component 1983, AT&T Sceptre 1983) — embodied, commercially odd.
- C: Early computerized home appliances / environment controls with visible computer UI (X10 CP290, GE HomeMinder, early programmable VCRs/thermostats).

## Trace log
(append as you work)

## Research findings

### Subagent A (word-processor appliances)
- Brother EP-20 (1982): earliest edit-before-print portable (single-line 16-char LCD buffer; type → see → edit → then print). STRONG interaction but ZERO free image on Commons (only Science Museum's non-commercial image). Image-blocked.
- Brother WP1: multi-line LCD word-processor typewriter, 12 CC BY-SA 2.0 FR images on Commons (Musée Bolo). Image-solvable; fills edit-before-print gap. Mainstream office-appliance category.
- Decision: EP-20 image-blocked; WP1 promotable.

### Subagent B (home terminal / keyboard-component consoles)
- Mattel Intellivision Keyboard Component (1983, code "Blue Whale"/"Intelliputer"): console nests in a huge full-width keyboard+tape-drive module; adds 6502 (dual CPU with CP1610); 16K shared RAM; built-in cassette tape drive (2 digital + 2 analog tracks); 40x24 text overlay; microphone + 2 expansion ports; Microsoft BASIC. ~4000 units, released $600 (Seattle/New Orleans only), cancelled Aug 1982, FTC false-advertising probe, full buyback, Jay Leno gag, GameSpy #11 "dumbest moments." Two CC BY 2.0 images on Commons (Video Game History Museum + studio shot). STRONG, weird, embodied, image-solvable. PROMOTE.
- AT&T Sceptre (1983): Intel 8088 home terminal. ZERO Commons images. Not promotable.

### Subagent C (smart home appliances)
- GE HomeMinder (1985-86): TV-as-GUI home automation (16-key IR remote, on-screen pictorial room/appliance menus, X10 power-line, telephone control, 96 on/off times). STRONG interaction, but ZERO free images on Commons. Image-blocked.
- X10 CP290 (1985): also ZERO free images. Image-blocked.

## Decisions
- PROMOTE: Intellivision Keyboard Component (weird/embodied/commercially-odd, CC images)
- PROMOTE: Brother WP1 (edit-before-print LCD word-processor typewriter, CC images)
- DEFER (image-blocked): GE HomeMinder, Brother EP-20, AT&T Sceptre
- Octen budget exhausted (7/7 by subagents); Exa exhausted (2/2).
