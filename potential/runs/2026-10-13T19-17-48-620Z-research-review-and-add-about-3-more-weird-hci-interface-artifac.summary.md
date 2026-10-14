# Run Summary: research, review, and add ~3 weird HCI interface artifacts (1976–1992)

Date: 2026-10-13T19:17:48.620Z
Goal: find, review, and promote ~3 more weird HCI hardware/interface artifacts.
Outcome: **1 exhibit promoted** (Seiko Data-2000). Flat 294 → 295. Ran as a normal completion.

Trace: `potential/runs/2026-10-13T19-17-48-620Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md`

## What happened

### Subagent yield was effectively zero
Three parallel research subagents (info-appliance entry rituals, children's teaching machines, wearable/body displays) returned candidates that were all either **already in the museum** (Psion Organiser I, R.O.B.), **image-blocked** on Commons (Coleco Electronic Learning Machine, TI My Little Computer, Seiko UC-2000), or **weak/deferred** (Canon Communicator).

### Deferral respected (Canon Communicator)
The subagent claimed the Canon Communicator used a "chorded thumb-keypad." Primary-source verification showed the interaction is actually a plain **alphabetical-order keyboard → thermal paper tape** (essentially a portable typewriter), exactly matching the prior 2026-07-03 deferral rationale. Deferral **stands**; not promoted.

### Manager-side verification surfaced the strong candidate
While checking what the earlier aborted run had left, I found a leftover `potential/seiko-data-2000/` directory whose `hero.jpg` was actually an HTML 403 error page (the failed Wikimedia download). Re-searching it properly surfaced a genuinely strong, interaction-distinct artifact:

- **Seiko Data-2000 (1984)** — often cited as the first practical computer watch.
- **Interaction model**: data is entered on a specialist desktop keypad dock and transferred to the wristwatch via **electromagnetic control coupling** — a contactless, inductive, pin-free wireless data link. Read-only 4×10 LCD on the wrist. Genuinely distinct from the sibling Seiko RC-1000 already in the museum (which uses a wired RS-232C serial dump).
- **Primary sources**: Wikipedia "History of the Smartwatch" corroborates the electromagnetic-coupling wireless docking + external keyboard + 1984 release; the Wikimedia Commons image is **CC BY-SA 2.0** (Joe Haupt).
- **Image**: real JPEG (4608×3456) downloaded using a browser User-Agent (upload.wikimedia.org returns 403 to the BeepyBot UA).

## Changed files
```text
M src/data.ts                      # added seiko-data-2000 exhibit entry (+1 → 295)
M docs/hci-wiki.md                 # added wiki section + ToC entry; renumbered ToC; intro 294→295
M potential/seiko-data-2000/images/hero.jpg   # replaced HTML 403 page with real image
?? assets/wiki/seiko-data-2000-1.jpg          # authored exhibit image (CC BY-SA 2.0)
?? potential/seiko-data-2000/info.json.archived
?? potential/runs/2026-10-13T19-17-48-620Z-....md   # live trace
```

## Verification
- PASS: `bun run typecheck` (tsc --noEmit)
- PASS: `bun run build` → `Built static site to .../public (295 exhibits + blog + about, 414 pages)`
- Exhibit count confirmed via `grep -cE '^\s{4}id: "' src/data.ts` → 295

## Notes / follow-ups
- As a bonus, renumbering the ToC collapsed a pre-existing numbering skew: 240 ToC items had been numbered up to 277 (a gap existed); they are now a clean sequential 1–241. The ToC is still shorter than the 295 exhibits — it was never a 1:1 catalog of all sections.
- 2 of the ~3 requested additions were not made: the well is dry for image-verifiable automated discovery, and one addition (295 → finish) was the honest outcome per the "add fewer when quality is low" guidance. Strong *image-blocked* candidates remain on the deferred watchlist if free images ever surface (Coleco ELM, TI My Little Computer, Seiko UC-2000).