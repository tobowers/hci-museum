# Trace — research, review, and add ~3 more weird HCI interface artifacts (1976–1992)

**Run ID:** 2026-09-24T13-09-49-702Z
**Start:** collection at 272 exhibits.

## Objective
Find ~3 promising new HCI hardware/interface artifacts from 1976–1992 with strange,
embodied, commercially-odd, or interaction-model-rich stories. Promote the strongest
with local images.

## Plan
1. Confirm current collection counts + scan potential/ for ready candidates.
2. Launch ≤3 research subagents in parallel, each with one focused angle
   (≤2 Octen searches each; shared 7-Octen / 2-Exa budget).
3. Review candidates, build potential/<slug>/info.json files.
4. Promote strong candidates with local asset/wiki images.
5. Verify typecheck + build.
6. Write summary + update beepy-memory with durable lessons.

## Progress
- (start) Collection = 272 exhibits; wiki 277 `## ` sections (incl. orphan research + appendix). No active info.json in potential/. 265 archived.
- Confirmed angles-worth-trying per memory: success has come from UNDER-EXPLORED categories, not re-searching exhausted ones. Notable unexplored leads from memory:
  - Gyroscopic/attitude-sensing game input (The Game Handler 1992 — image-blocked so far).
  - Early barcode/OCR scanning hardware with distinctive physical interaction.
  - "Brains-replace-the-dial" home-appliance / control UIs.
  - Early telephony device side is well covered now.
## Fatal Error

```json
{
  "name": "Error",
  "message": "opencode model error: {\"name\":\"MessageAbortedError\",\"data\":{\"message\":\"Aborted\"}}",
  "stack": "Error: opencode model error: {\"name\":\"MessageAbortedError\",\"data\":{\"message\":\"Aborted\"}}\n    at opencodeText (/home/runner/work/hci-museum/hci-museum/scripts/opencode-runner.ts:445:38)\n    at async main (unknown)\n    at processTicksAndRejections (native:7:39)"
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
Built static site to /home/runner/work/hci-museum/hci-museum/public (272 exhibits + blog + about, 373 pages)
$ bun scripts/build-site.ts
```
