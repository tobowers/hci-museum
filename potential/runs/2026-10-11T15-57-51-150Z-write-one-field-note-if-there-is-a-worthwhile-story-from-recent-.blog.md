# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Decision

Scanned pending-unwritten candidates against the 114 existing notes. Found that the National Easa-Phone (c. 1979) had NO note despite being well-documented in hci-wiki.md and having local images (easa-phone-hero.jpg, easa-phone-dual-endless-tapes.jpg). Its "endless-loop cassette" story is a strong entry in the museum's medium-is-the-interface family (2-XL, Sony Typecorder, IBM 6:5).

## Outcome

Wrote one Field Note:
- docs/blog/the-message-that-would-not-come-back-around.md (slug: the-message-that-would-not-come-back-around)
- Title: "The Message That Would Not Come Back Around"
- Date: 2026-10-11
- Links to exhibits: ../exhibits/ibutton/, ../exhibits/cauzin-softstrip/, ../exhibits/ibm-65-cartridge-system/, ../exhibits/two-xl/, ../exhibits/sony-typecorder/ (all slugs verified in src/data.ts)
- Uses local image ../assets/wiki/easa-phone-dual-endless-tapes.jpg

## Verification

- bun run typecheck -> passes (no output/errors)
- bun run build -> succeeds (293 exhibits + blog, 411 pages)

## Checks

- Not modifying hci-wiki.md, src/data.ts, or exhibit collection. Post-only change.
- Images are local and exist under assets/wiki/.

