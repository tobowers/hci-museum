# Run trace: 2026-08-16 — research, review, add ~3 weird HCI artifacts

Start: reading docs/beepy-memory.md, repo layout, src/data.ts, docs/hci-wiki.md.

## State at start
- Collection: ~191 exhibits in data.ts; wiki ToC 191 entries / 196 sections.
- Octen budget: 7 total for whole run (subagents ≤2 each). Exa: 2 total.
- Candidate well reported dry across many angles; productive fresh angles from memory:
  telephony HCI, barcode/OCR scanning hardware, network terminals, unusual game
  controllers, scientific instruments, information appliances, image-rich categories.


## Research plan
- Archived 2 already-promoted info.json files (invicta, dnd-labyrinth) so promote script won't re-add them.
- Collection: 197 exhibits in data.ts, 197 ToC entries, 202 wiki sections (5 orphan).
- Launching 3 hci-research-subagents (2 Octen each = 6 of 7 budget):
  A) Telephony-HCI devices (mobile phones, answering machines, phone-computer hybrids)
  B) Dedicated service/network terminals with custom keyboards (financial, videotex, POS)
  C) Biometric/identity devices + odd personal electronics (Identimat/Identix lead from memory)
- Each must verify against excluded list + Commons image availability.


## Candidate review (from 3 subagents)
A) Telephony: Luma LU-1000 (1 marginal box image), AT&T 510 (0 images), Mobira Cityman (interaction standard). NOT promoted.
B) Network terminals: CAPTAIN NTX-5000 (CC images), BTX terminal (CC images), Telidon (1 image), Quotron II (PD images). PROMOTED: Quotron II, CAPTAIN, BTX.
C) OCR/scanning: Saba Handscan, TransImage 1000, DataSweep PencilWand — all ZERO CC images. NOT promoted.

## Promotion decision
Three new exhibits, each a distinct interaction model in the "pre-Internet terminal" family:
1. Quotron II (1986) — professional market-data terminal, custom field-key keyboard, green phosphor. 4 PD/CC images.
2. CAPTAIN NTX-5000 (1984) — Japanese fax-style raster videotex, kana keypad. 3 CC images.
3. BTX terminal (1983) — German pay-per-page videotex with chip-card reader. 3 CC images.
All images downloaded to potential/<slug>/images and verified as real images via `file`.
All 7 Octen budget used (3 subagents x 2 + 1 self). Verification via direct Wikipedia fetches.


## Fatal Error

```json
{
  "name": "Error",
  "message": "opencode model error: {\"name\":\"MessageAbortedError\",\"data\":{\"message\":\"Aborted\"}}",
  "stack": "Error: opencode model error: {\"name\":\"MessageAbortedError\",\"data\":{\"message\":\"Aborted\"}}\n    at opencodeText (/home/runner/work/hci-museum/hci-museum/scripts/opencode-runner.ts:354:38)\n    at async main (/home/runner/work/hci-museum/hci-museum/scripts/agent-scout.ts:192:26)\n    at processTicksAndRejections (native:7:39)"
}
```

## Recovery Check: bun run typecheck

Result: PASS

```text
$ tsc --noEmit
```

## Recovery Check: bun run build

Result: PASS

```text
Built static site to /home/runner/work/hci-museum/hci-museum/public (197 exhibits + blog + about, 254 pages)
$ bun scripts/build-site.ts
```
