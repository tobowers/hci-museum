# Beepy Memory

This file is Beepy's working curatorial memory for the HCI Museum.

Use it to keep the museum stable across scout runs:
- Record curatorial preferences, recurring standards, and lessons learned.
- Record rejected or risky candidates so future runs do not repeat avoidable work.
- Record source-quality notes, image-source caveats, and promotion gotchas.
- Keep it concise and factual. Update it when a run teaches something durable.

Current standing guidance:
- North star: make the HCI Museum a beautiful, exacting, artifact-forward museum and help the world discover it.
- Operate GitHub-first. Treat GitHub Issues as Beepy's product backlog, planning room, and conversation channel with Tobowers.
- Once a day, choose one small useful improvement to the site, collection, writing, QA, or outreach surface and open a PR with it.
- Ask Tobowers through GitHub Issues when blocked by human ownership decisions, external setup, policy decisions, or ambiguous taste calls.
- Prefer artifacts where the interaction model is the point, not just historically important computers.
- Strong candidates need sourced team/organization detail, concrete interaction mechanics, and usable image/source leads.
- Add fewer artifacts when quality is low; do not pad the collection.
- Field Notes are optional and should not block adding a well-sourced exhibit.
- Promoted collection exhibits must use local images under `assets/wiki/`; do not leave exhibit hero/media images as remote hotlinks.
- Social/outreach goal: Beepy should help the world discover the museum by planning, drafting, measuring, and improving public-facing outreach from the GitHub backlog.
- Coding/site management work should use the Kimi For Coding subscription (`kimi-for-coding/k2p7`) when available. Curation and prose loops may use their own model choices.

GitHub operating loop:
- Keep a small product backlog in GitHub Issues using clear labels such as `beepy`, `backlog`, `curation`, `blog`, `outreach`, `design`, `blocked`, and `needs-human`.
- Prefer one focused PR per daily manager run. Do not batch unrelated work.
- Comment on issues when work starts, when a PR is opened, and when human action is needed.
- Use real multiline Markdown for issue bodies and comments. Prefer `gh issue create/edit/comment --body-file` over inline escaped strings, so GitHub renders line breaks and lists correctly.
- Close issues only when the corresponding PR is merged or the task is genuinely no longer relevant.
- If no safe code/content change is ready, do backlog grooming: clarify issues, add acceptance criteria, or open a `needs-human` issue.

Known collection gaps (2026-06-25):
- ~~Haptic/tactile feedback devices~~ — Filled: GROPE-III (1990), 6-DOF force-feedback molecular docking
- Eye-tracking interfaces from the era — Strong candidates: EyeTyper (1983), Eyegaze (1988), Erica (1987)
- ~~Puff/sip or breath-based interfaces~~ — Filled: Nintendo Hands Free Controller (1989), chin joystick + sip-and-puff
- Early speech recognition-only systems — Strong candidates: Heuristics SpeechLab (1976), DragonDictate (1989), Covox Voice Master (1984)

Deferred strong candidates:
- SynthAxe (1985): <100 units, $13K MIDI guitar controller, CHM "curator's wish." Rich sources via Allan Holdsworth community, MusicRadar, CHM blog. Revisit when adding another music HCI artifact.
- Quantel Paintbox (1981): $250K broadcast graphics system with pressure-sensitive stylus. Overlaps with existing tablet/stylus devices but distinct in professional/broadcast context. Rich sources.
- EyeTyper (1983): First commercial camera-based eye-typing device; CMU spinoff. Camera pointed at one eyeball, oversized illuminated characters, dwell-time selection. DynaVox ancestor. Rich sources via UPI, patent US4648052A.
- Minsky Sandpaper (1990): Computational haptics origin. 2-DOF force-feedback joystick synthesizing surface textures. MIT/UNC. Rich intellectual lineage.
- DragonDictate (1989-90): First large-vocabulary speech-to-text. $9K DSP board + Shure headset. 30,000 words. Defined the speech dictation interaction model.
- Heuristics SpeechLab (1976): First commercial speech recognition for personal computers. S-100 bus board. Byte magazine 1978.
- Buchla Thunder (1989): Multi-touch pressure+position capacitive MIDI controller by Don Buchla. <100 units. Defer until another music HCI artifact is added.

Promotion gotchas:
- The `promote-potentials.ts` script appends wiki sections and updates data.ts but does NOT update the wiki Table of Contents. The ToC must be manually edited after each promotion batch.
- The `promote-potentials.ts` script falls back to remote image URLs when `savedImages` is empty. For collection promotion, download/copy images into `assets/wiki/` and update `src/data.ts` plus `docs/hci-wiki.md` to local `assets/wiki` paths before finishing.
- BUG (2026-06-25): The `promote-potentials.ts` data.ts replacement regex (`/\n\];\s*\n\nexport const featured/`) does not match the actual file structure, which has `export const exhibits` between `];` and `export const featured`. Wiki gets updated but data.ts entries are silently dropped. Workaround: manually edit data.ts until the script is fixed.
