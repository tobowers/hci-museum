# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


## Progress

- Found leftover partial promotion: `potential/tomy-digital-derby/` has a fully-built info.json with a local image, the wiki ToC entry (position 233) already exists, and `assets/wiki/tomy-digital-derby-1978.jpg` is already copied — but the wiki section body and src/data.ts entry are MISSING.
- Decision: complete the Tomy Digital Derby promotion (museum's first continuous rotary steering-wheel handheld controller, electro-mechanical scrolling raceway, distinct from Mattel Auto Race's slide levers).
- Will research 2-3 additional candidates via subagents.

### COMPLETED: Tomy Digital Derby (1978) promotion
- Appended wiki section to docs/hci-wiki.md (the ToC entry at 233 already existed from the prior aborted run).
- Added data.ts entry (id tomy-digital-derby), using existing assets/wiki/tomy-digital-derby-1978.jpg (verified identical bytes to potential image).
- Archived potential/tomy-digital-derby/info.json -> info.json.archived.
- typecheck + build pass. Build reports 233 exhibits.

### Research subagents (3 parallel)
- Subagent 1 (tabletop games): returned 2-XL (ALREADY IN MUSEUM — rejected), Dark Tower 1981 (image-blocked), Electronic Battleship 1977 (image-blocked). No viable new candidate.
- Subagent 2 (CAD/drafting): returned Spaceball 1003/2003 (6-DOF isometric force ball — DEFERRED per memory, overlaps DLR Control Ball already in museum), MicroScribe 3DX (no images). No viable candidate.
- Subagent 3 (AV/production): returned Sony BVE-600 (1985, dual independent jog dials, CC BY-SA 2.0 confirmed) and CMX-340 (1976, broadcast edit console + GIZMO repositionable jog knob, CC0 confirmed). BOTH verified with freely-licensed Commons images.

### DECISION: promote Sony BVE-600 + CMX-340
- Both fill a completely unrepresented collection category: video editing control surfaces.
- CMX-340 = industry-standard broadcast edit console (function-keyboard + repositionable GIZMO jog knob), CC0 images (Telecineguy).
- BVE-600 = desktop two-handed dual jog-dial scrubbing of source+record decks, CC BY-SA 2.0 images (Richard Ash, MOSI Manchester).
- Distinct interaction philosophies; no near-neighbor notes. Verified not in museum (no existing edit controller).
- Created potential/cmx-340/info.json and potential/sony-bve-600/info.json.
- Downloaded 4 local images to assets/wiki/: cmx-340-console.jpg, cmx-340-keyboard.jpg, bve-600-controller.jpg, bve-600-jogdial.jpg (all file-verified JPEGs). One retry needed on the BVE-600 controller URL due to special characters in filename.
