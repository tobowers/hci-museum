# Live Trace: 2026-07-20 — Research, Review, and Add Weird HCI Artifacts

## Goal
Research ~3 more weird HCI interface artifacts from 1976-1992. Per memory, candidate well is thin at 109 exhibits. Accept fewer than 3 if quality is low.

## Initial brainstorm (no subagent yet)
Looking at gaps and angles not covered:
- Tactile pin reading machine for blind — Optacon (1969/71, mostly before window, but commercial variants ran through 1990s; check 1976+ era variants)
- Tangible programming — LEGO TC Logo Dacta Control Lab (1986, Papert + LEGO Dacta). Distinct paradigm.
- Refreshable Braille + portable notetaker — Braille 'n Speak (1987, Freedom Scientific)
- AAC text-to-speech with dual displays — Toby Churchill Lightwriter SL1 (1988)
- VHS-based light gun — Worlds of Wonder Action Max (1987)
- Voice-controlled toy robot — Tomy Verbot (1986)
- Static keyboard AAC — Prentke Romich Touch Talker (1984) / Liberator (1991)

## Subagent dispatch plan
Launch 6 hci-research-subagents in parallel, each assigned one candidate to verify era window, interaction model novelty, team/org detail, and image source availability.


## Subagent dispatch (round 1)
Launched 6 hci-research-subagents in parallel:
1. Optacon (Telesensory Systems) — tactile pin reading machine for blind. Goal: find 1976+ variant. Result: STRONG. Optacon II (1985) co-developed with Canon. Multiple PD images on Wikimedia Commons (OptaconII.jpg by DrBliss/Jim Bliss).
2. LEGO TC Logo Dacta Control Lab (1986) — tangible programming. Result: STRONG on significance but MARGINAL on images. No freely-licensed in-window photo of the 1986 commercial hardware found.
3. Braille 'n Speak (1987, Blazie Engineering) — pocket braille notetaker. Result: STRONG on HCI distinctness from VersaBraille but WEAK on images. Zero freely-licensed images on Commons.
4. Toby Churchill Lightwriter SL1 (c. 1985) — dual-display AAC. Result: STRONG. PD SL35 photo (1994) on Commons used to represent the dual-display form factor. PD portrait of Toby Churchill available.
5. Worlds of Wonder Action Max (1987) — VHS light-gun console. Result: STRONG. 16 high-quality PD/CC-BY-SA photos by Evan-Amos on Commons. Distinct from Bandai Terebikko (audio+buttons) and deferred View-Master Interactive Vision (sprite overlay+branching).
6. Tomy Verbot (1984) — voice-controlled toy robot. Result: STRONG on HCI distinctness but WEAK on images. No freely-licensed image on Commons (Category:Omnibot empty). Patent scans exist on theoldrobots.com.

## Decisions
PROMOTED (3, all with freely-licensed images):
- Action Max (1987) — VHS + light gun
- Lightwriter SL1 (c. 1985) — dual-display AAC
- Optacon II (1985) — tactile sensory substitution reading machine

DEFERRED (3, all image-blocked):
- LEGO TC Logo (1986) — needs MIT Media Lab / LEGO Education archival outreach
- Braille 'n Speak (1987) — needs photo of surviving unit or Vispero contact
- Tomy Verbot (1984) — only patent scans; needs museum-quality photo

## Files written
- potential/optacon-ii/info.json (then archived to info.json.archived after promotion)
- potential/action-max/info.json (then archived)
- potential/lightwriter/info.json (then archived)
- potential/optacon-ii/images/{optaconII.jpg, optacon-original.jpg, tactile-array.jpg}
- potential/action-max/images/{action-max-set.jpg, action-max-gun.jpg, action-max-red-light.jpg}
- potential/lightwriter/images/{sl35-lightwriter.jpg, toby-churchill.jpg}
- assets/wiki/{optacon-ii.jpg, optacon-original.jpg, optacon-tactile-array.jpg, action-max-set.jpg, action-max-gun.jpg, action-max-red-light.jpg, lightwriter-sl35.jpg, toby-churchill.jpg}
- src/data.ts — 3 new entries appended
- docs/hci-wiki.md — 3 new exhibit sections, ToC entries 107-109, all image refs replaced with local ../assets/wiki paths
- docs/beepy-memory.md — updated with new additions, deferred candidates, and 2026-07-20 promotion gotchas

## Promotion script + manual fixes
- `bun scripts/promote-potentials.ts` reported "Promoted 3" and appended 3 wiki sections but did NOT (per known bugs): copy images to assets/wiki/, add data.ts entries, or update the wiki ToC. All three done manually:
  1. Copied 8 images from potential/*/images/ to assets/wiki/
  2. Appended 3 entries to src/data.ts (exhibitData array, before `];`)
  3. Appended ToC entries 107-109
  4. Replaced 7 remote Wikimedia URLs in wiki with local ../assets/wiki/ paths via Python script
- Archived 3 promoted info.json files → info.json.archived to prevent re-promotion
- Archived potential/electroglottograph/info.json → info.json.archived (was already promoted in prior run, stale)

## Verification
- `bun run typecheck` — PASS (no errors)
- `bun run build` — PASS ("Built static site to public/ (112 exhibits + blog + about, 141 pages)")
- public/exhibits/ contains action-max, lightwriter-sl1, optacon-ii directories (113 total dirs)

