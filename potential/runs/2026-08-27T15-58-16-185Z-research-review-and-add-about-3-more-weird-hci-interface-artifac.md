# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


## Run log
- Preflight: read docs/beepy-memory.md (loaded in system prompt). Collection at 216 exhibits (grep -cE '^\s{4}id: "' src/data.ts).
- Scanned potential/*/info.json: no active unpromoted candidates (all archived). Starting fresh research, expecting 0-3 additions.
- Launching 3 research subagents in parallel, distinct angles:
  - Angle A: Portable/handheld barcode + data-capture terminals 1976-1992 (embodied handheld computers; unusual form/input).
  - Angle B: Aviation "glass cockpit" EFIS electronic flight instruments in production aircraft 1978-1992.
  - Angle C: Early automated teller machines (ATM) / bank terminals 1976-1992 with distinctive physical interaction.

### Subagent results
- Angle A (portable data terminals): Telxon PTC-912, MSI Data pocket terminal, Datalogic ND2-8120 (1982). All interaction-model-rich but ZERO free images on Commons. IMAGE-BLOCKED this run.
- Angle B (glass cockpit EFIS): Rockwell Collins EFIS for Boeing 757/767 (1982) — first CRT glass cockpit, embodied color-state semantics, "rising runway" cue, EFIS Control Panel keyshow. PD image of a 747-400 PFD/ND exists on Commons (representative reading interface). STRONG, image-ready with honest captioning.
- Angle C (ATMs): IBM 3614 Consumer Transaction Facility (1973-81) — self-closing face shutter, stripe-up card, card retention. VERIFIED public-domain photo on Commons (File:IBM_3614_(I19760708).jpg). NCR 5080 smoked-perspex (weak images). STRONG.
- Decision: promote IBM 3614 + Collins EFIS 757. Seeking third image-ready candidate.

### Decision & promotion
- Octen/Exa budgets exhausted (Octen 7/7, Exa 2/2). Search angles: ATMs (IBM 3614 - image-verified PD), glass cockpit (Collins EFIS - PD 747-400 PFD image), portable data terminals (image-blocked). Promoted the 2 image-verified strong candidates; skipped image-blocked PDTs (quality-over-quantity).
- Promoted: IBM 3614 Consumer Transaction Facility (1973-81) + Rockwell Collins EFIS / Boeing 757 Glass Cockpit (1982-83).
- Images: downloaded to assets/wiki/ via Commons API (upload.wikimedia.org), verified with `file` (valid JPEGs): ibm-3614-atm.jpg (PD), b747-400-pfd-nd.jpg (PD).
- Manual promotion (promote-potentials.ts NOT run due to known regex/image-copy/ToC bugs):
  - src/data.ts: +2 Exhibit entries (id/slug/wikiTitle/year/sortYear/title/subtitle/blurb/tags/image).
  - docs/hci-wiki.md: +2 sections (Overview/Deep dive/Media/Sources), +2 ToC entries (217, 218), intro count 217->219.
  - info.json files archived to info.json.archived to prevent auto-promotion.
- Verification: bun run typecheck PASS; bun run build PASS (218 exhibits + blog + about, 287 pages). data.ts id count = 218.
