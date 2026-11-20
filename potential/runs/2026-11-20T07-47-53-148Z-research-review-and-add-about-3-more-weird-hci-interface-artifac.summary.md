# Research, review, and add ~3 weird HCI interface artifacts

**Date:** 2026-11-20
**Base:** `bd881a8`
**Trace:** `potential/runs/2026-11-20T07-47-53-148Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md`

## Outcome

Added **3 exhibits** (323 → **326**), each with a freely-licensed local image, a full wiki section, a ToC entry, and a `src/data.ts` record.

| Exhibit | Years | ID / slug | Image (Commons) | Licence |
|---|---|---|---|---|
| Wrigley Field Hand-Turned Scoreboard | 1937–present | `wrigley-hand-turned-scoreboard` | `Wrigley Field Scoreboard operation.jpg` (4000×2248) | CC0 |
| Addressograph Cassette Addressing System | 1960s–1980s | `addressograph-cassette-system` | `Graphotype machine (43024769245).jpg` (5472×3648) | CC BY 2.0 |
| DASA Mark 18 Microfilm Reader-Printer | c.1968–78 | `dasa-mark-18-reader-printer` | `Reader-printer.jpg` (1512×2016) | CC BY-SA 4.0 |

All three are "paper-as-state" / human-in-the-loop machines: a worker inside a display slotting steel numerals, a database made of steel plates in slide-projector cassettes worked by foot pedal, and an archive console that read three film formats and printed on demand. None duplicates an existing exhibit.

## Process

1. **Backlog audit.** The blog Field Notes backlog (124 "unlinked" slugs) is known-noisy and fully covered under poetic slugs; not the productive path.
2. **Three parallel research subagents** on fresh angles: venue/public-event hardware, classroom/group-response hardware, institutional document machinery.
   - Venue: returned a verified, in-window, image-backed candidate (Wrigley) plus several image-blocked ones.
   - Classroom: **failed** — exhausted its step budget with no candidates. Angle still unharvested.
   - Documents: returned two strong image-backed candidates (Addressograph/Graphotype, DASA Mark 18) plus date-caveated or image-blocked ones.
3. **Independent verification.** Re-fetched Wikipedia raw text and every Commons `imageinfo` myself; did not trust subagent dates. Framed the DASA dates conservatively.
4. **Manual promotion.** Appended to `src/data.ts`, appended wiki sections + ToC, downloaded originals to `assets/wiki/`, archived `info.json.archived`.
5. **Checks.** `bun run typecheck` clean; `bun run build` → **326 exhibits, 469 pages**; rendered pages reference the right images; ToC anchors match GitHub slugs; zero active `info.json` remain.

## Rejected / deferred

- **Electro-Mech scoreboard console + pendant**, **Calgary Saddledome animation operator**, **Ticketron box-office terminal** — interaction-rich, but **no free image on Commons** (Getty/editorial only). Deferred as image-blocked.
- **Francotyp/postage meter** — good image, but production dates not pinned to the window.
- **Protectograph cheque-writer** — excellent interaction story, **no Commons image**.
- **Stenotype** — best Commons hits were pre-window advertisements; licences of better candidates not pulled.
- **Data Card embosser** — no Commons image.

## Notes for future runs

- Commons API 429s under rapid requests; use a descriptive User-Agent with a contact URL and ~3–4 s spacing.
- The **classroom / group-response** angle remains unharvested; re-run it with a narrower one-device-class brief.
- No active `potential/*/info.json` remain at end of run.
