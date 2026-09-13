# Summary: 2026-09-13 — Research, Review, and Add ~3 Weird HCI Interface Artifacts

**Run date:** 2026-09-13  
**Collection before:** 258 exhibits  
**Collection after:** 259 exhibits (+1)  
**Blog pages:** 349 (unchanged)

## Artifacts added

### 1. NED Synclavier (1977)
- **slug:** `synclavier`
- **Interaction model:** Light pen as creative waveform drawing tool on CRT (direct-manipulation audio editing before mouse-driven DAWs), plus Velocity/Pressure Keyboard (VPK) with continuous aftertouch sensing — both novel HCI paradigms not represented in the museum
- **Why it belongs:** Distinct from Fairlight CMI (already in museum, used light pen for menu selection/sampling) — the Synclavier used the light pen as a drawing tool for constructing additive synthesis timbres and envelope shapes directly on screen. The VPK's continuous key-pressure sensing is a richer input channel than any other keyboard in the collection.
- **Images:** 5 CC-licensed images downloaded to assets/wiki/ (1 public domain Synclavier I, 2 CC BY 2.0 PSMT/VPK, 2 CC BY-SA 2.0 Synclavier II/VPK close-up)
- **Sources:** Wikipedia, TECnology Hall of Fame, Synclavier Digital, Vintage Synth Explorer

## Files written/changed

| File | Change |
|------|--------|
| `potential/synclavier/info.json` | Created (then archived as info.json.archived) |
| `docs/hci-wiki.md` | Added Synclavier section + ToC entry #259, updated intro count to 259 |
| `src/data.ts` | Added Synclavier entry with id, slug, wikiTitle, year, sortYear, title, subtitle, blurb, tags, image |
| `assets/wiki/synclavier1-jb.jpg` | Hero image (public domain) |
| `assets/wiki/synclavier-psmt.jpg` | PSMT with VPK (CC BY 2.0) |
| `assets/wiki/synclavier-vpk-display.jpg` | VPK display (CC BY 2.0) |
| `assets/wiki/synclavier-ii-with-floppy.jpg` | Synclavier II (CC BY-SA 2.0) |
| `assets/wiki/synclavier-vpk-closeup.jpg` | VPK close-up (CC BY-SA 2.0) |
| `potential/runs/2026-09-13T12-33-01-432Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` | Run trace |

## Verification

- `bun run typecheck` — passes with no errors
- `bun run build` — passes, built 259 exhibits + blog + about (349 pages)
- All images verified as valid JPEGs via `file` command

## What still needs review

- This was a single-addition run, not 3. At 258+ exhibits, the well is genuinely thin. The Synclavier is a strong candidate — genuinely novel interaction model (light pen waveform editing + continuous aftertouch), well-sourced, well-imaged — but only one candidate met all criteria.
- The 3 subagent angles returned ~80% already-in-museum candidates despite explicit exclusion lists. Only one fresh, promotable candidate emerged across all research.
- Future runs should consider: (a) the SynthAxe is already in the museum — this is its natural complement; (b) there's still no specific Field Note for the Synclavier, though one could be written (`the-pen-that-drew-sound`);
- Memory update: the Synclavier (1977) fills a light-pen-as-creative-tool gap in the music HCI section — distinct from Fairlight CMI (menu selection) and the VPK's continuous aftertouch is unique in the collection.