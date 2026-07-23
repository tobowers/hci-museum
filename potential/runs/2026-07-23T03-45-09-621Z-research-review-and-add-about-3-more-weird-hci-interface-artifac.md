# Trace: Research run 2026-07-23

## Phase 0: Setup
- Read beepy-memory.md. Well confirmed thin at 117 exhibits. Previous 2 runs had zero additions.
- Active info.json files in potential/: technos-acxel (deferred), tickle-talker (deferred). Both archived as .archived.
- Exa credits exhausted (confirmed HTTP 402). Used Grok + web fetches exclusively.
- Goal: aim for 1-3 genuinely novel candidates, accept zero if nothing qualifies.

## Phase 1: Candidate Discovery
Launched 5 parallel subagents with diverse angles:

### Subagent 1: Grok broad ideation
- Returned mostly already-in-museum (Polhemus, KoalaPad, Summagraphics, Covox Voice Master)
- New candidates: Wang Freestyle (1988), Logitech CyberMan (1992), Spaceball (deferred)
- Grok quality: poor, returned ~60% duplicates

### Subagent 2: Arcade oddities
- Returned mostly already-in-museum (Mindlink, Hands Free Controller) or deferred (Konix Multisystem)
- New candidates: Exus Foot Craz (1987), Atari 720° rotating joystick (1986)
- Foot Craz overlaps with NES Power Pad/Stompin'
- Atari 720 is one-game arcade controller

### Subagent 3: Assistive tech
- Returned HandiVoice (1978), Mountbatten Brailler (1991), TSI VERT (1979), Audibraille (1979)
- All either overlap with existing speech/AAC exhibits or lack images
- None strong enough

### Subagent 4: Research lab
- Returned MIT Holographic Video, 3-Draw, Radio Drum (already in museum), SonicFinder, Grimes Glove (already in museum)
- Holographic Video: display tech not HCI hardware
- 3-Draw: overlaps with Drawing Prism
- None strong enough

### Subagent 5: European/Japanese oddities
- Sharp X68000 ultrasonic tablet: standard tablet with ultrasonic sensing
- Philips Voice Input: speech recognition overlap
- Currah µSpeech (1983): interesting (BASIC keyword injection) but core is speech synth
- Possum sip-puff: we have Nintendo Hands Free Controller
- GSR biofeedback: we have Synapse Relax
- None strong enough

## Phase 2: Deep Research

### Wang Freestyle (1988)
- Wikipedia section found in Wang Laboratories article
- Components: touch tablet + stylus for annotation, phone handset for voice annotation, Wang OFFICE email
- Commercial failure ($2,000 base, $12,000 with fax/voice)
- Novelty: multi-modal document annotation (handwriting + voice) bundled and emailed
- But: tablet/stylus is standard tech, hardware components individually not novel
- VERDICT: Borderline. Software concept innovative, hardware interaction model incremental.
- ZERO freely-licensed images on Wikimedia Commons. No dedicated Wikipedia page.

### Other candidates from Grok follow-ups
- All Grok responses returned 50-80% already-in-museum candidates
- Grok fabricated several obscure industrial devices (Foxboro, Kurta XGT, Luxor Bildplatta, etc.) with no verifiable sources
- Quality degraded dramatically after the first prompt

### Image resolution attempts for deferred candidates
- Braille 'n Speak: 0 results on Wikimedia Commons
- Tomy Verbot: 0 results on Wikimedia Commons  
- LEGO TC Logo: 0 results on Wikimedia Commons
- All three remain image-blocked

## Phase 3: Decision

**ZERO additions.** This is the third consecutive zero-addition run.

The well is confirmed structurally depleted at 117 exhibits. After 5 subagents, 5+ Grok prompts, multiple web fetches, and Wikimedia Commons searches:
- ~80% of all candidates returned were already in the museum or previously deferred
- All genuinely new candidates were either image-blocked, too narrow, or had incremental interaction models
- Exa credits remain exhausted, limiting search capabilities

No info.json files were created for this run. No changes were made to the collection.

## Phase 4: Cleanup
- Archived 2 stale info.json files (technos-acxel, tickle-talker)
- No promotion needed
- Updated beepy-memory.md
