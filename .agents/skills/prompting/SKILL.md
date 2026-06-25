---
name: prompting
version: 1.0.0
description: |
  Use when writing, editing, migrating, compressing, or reviewing prompts or full context windows for another model. The skill treats a prompt as the complete model world: system, developer, user, assistant, tool, code, retrieved documents, static prompt text, and any other context the downstream model will actually receive.
triggers:
  - "write a good prompt"
  - "improve this prompt"
  - "compress this context window"
  - "migrate this prompt"
  - "review this model prompt"
  - "turn this behavior into a prompt"
tools:
  - read
  - write
mutating: false
---

# Prompt World Reconstruction

## Contract

Create or revise prompts as standalone context artifacts. The final prompt must make sense to a downstream model that receives only the final context window and has no access to the conversation, editing history, hidden intent, prior prompt versions, or temporary correction instructions that produced it.

The core rule: a prompt is not just the system instruction or user instruction. A prompt is the complete context window sent to the model, including static prompt text, code snippets, examples, retrieved documents, tool outputs, message roles, and constraints.

## When To Use

Use this skill when the user asks to:

- Write a good prompt for another model.
- Improve, rewrite, migrate, shorten, or compress a prompt.
- Convert notes, docs, product requirements, code, examples, or behavior into model instructions.
- Review a prompt for contradictions, missing context, prompt drift, or ambiguity.
- Build a context window that includes both static prompting and dynamic inputs such as code, files, retrieved documents, or tool outputs.
- Remove or rename an old identity, product, policy, style, domain, or capability from a prompt.

Trigger examples:

- "Write a prompt for an agent that reviews PRs."
- "Improve this system prompt."
- "Compress this context window but keep behavior intact."
- "Migrate this prompt from Stacky to Aggy."
- "Review the whole prompt we send to the model, including code context."

## When Not To Use

Do not use this skill for:

- Ordinary user-facing copywriting where no model prompt or context window is being created.
- One-off answers to the current user that will not become reusable model context.
- UI design, frontend polish, or interaction critique unless the output is itself a model prompt.
- Backend implementation work where code, not model context, is the durable artifact.
- Prompt injection defense alone. Use this skill only if you are reconstructing the complete prompt or context window; otherwise handle the security review directly.

## Phases

### 1. Decide The Downstream World

Identify the model that will read the final prompt and the world it must inhabit.

Capture:

- Who the model is supposed to be.
- What task it must perform.
- What inputs it will receive at runtime.
- What tools, code, files, schemas, examples, or retrieved documents it can see.
- What outputs it must produce.
- What constraints, priorities, and refusal rules matter.
- What the model must not infer from missing context.

If the downstream model would need information that is only present in the current editing conversation, move that information into the final prompt or remove the dependency.

### 2. Inventory The Complete Context Window

List every part of the prompt the model will actually receive:

- System, developer, user, assistant, and tool messages.
- Static prompt files or templates.
- Runtime variables and where they are inserted.
- Code snippets, schemas, function signatures, tool descriptions, examples, and tests.
- Retrieved documents, memory, search results, or other injected context.
- Output format requirements.
- Any hidden or upstream instructions that may outrank later text.
- Provider-side prompt or context caching boundaries, if the model provider caches stable prefixes or reusable context blocks.

Do not optimize only the visible text the user pasted if other context will also be sent to the model. The complete picture determines behavior.

When provider caching is in play, distinguish stable cached context from request-specific context. A cached prefix can make prompts cheaper and faster, but it also makes stale instructions, old names, obsolete examples, and misplaced runtime inputs harder to notice. Do not assume editing a later message changes behavior controlled by an earlier cached block.

### 3. Separate Editing Instructions From Durable Instructions

Classify each user correction as either:

- An instruction to the prompt editor.
- A durable behavioral instruction for the downstream model.

Example:

```text
User says: "Remove the word Stacky."

Bad result: Add "Do not say Stacky" to the prompt.
Good result: Remove or replace Stacky references so the final prompt reads as if it was originally written without Stacky.
```

The editing process usually should not appear in the final prompt. Preserve the intended world, not the path taken to create it.

### 4. Reconstruct, Do Not Patch

Rewrite the prompt so it is coherent in isolation.

Prefer reconstruction over additive patches when:

- The prompt contains old product names, identities, policies, or domains.
- Corrections contradict prior text.
- The prompt depends on unstated editing history.
- Runtime context changes what the model should believe or do.
- A shorter prompt would be clearer than a layered prompt with exceptions.

Remove obsolete instructions instead of adding new instructions that merely forbid the old behavior. Resolve contradictions at the source.

For migrations from one prompt world to another, check:

- Identity, product, project, organization, and user-facing names.
- Tool names, tool descriptions, capabilities, and unavailable capabilities.
- Examples, few-shots, schemas, and output samples that imply the old world.
- Policies, constraints, tone, domain assumptions, and filing rules tied to the old world.
- Static prompt text, runtime templates, code comments, retrieved-doc labels, and variable names.
- Historical references that should remain only if they are explicitly marked as reference material, not current identity.

### 5. Make Context Boundaries Explicit

The downstream model must know what different context blocks mean.

Specify:

- Which text is instruction versus reference material.
- Which examples are normative and which are illustrative.
- Which code is source of truth and which code is partial context.
- Which runtime inputs may be missing, stale, user-provided, or untrusted.
- Which priority order applies when instructions conflict.
- Which parts are cache-stable versus request-specific, and what must invalidate or bypass the cache when changed.

If code or documents are included, explain how the model should use them. Do not assume the model will infer whether a block is policy, sample data, implementation detail, or task input.

### 6. Simulate The Downstream Model

Before finalizing, read the full prompt as if you are the downstream model with no memory of the current conversation.

Ask:

- Do I know who I am and what I am trying to accomplish?
- Do I know what inputs I will receive and what to do with each one?
- Do I know what output shape is required?
- Do I know which instructions outrank which context?
- Do I know which context may be cached by the provider and therefore stable across requests?
- Are there contradictions, old names, dead references, or unexplained assumptions?
- Would I accidentally follow an editing instruction that should not have survived?
- Would I overfit to examples or treat reference material as commands?

If the answer is no, do not add another instruction on top. Reconstruct the prompt.

### 7. Compress Only After Reconstruction

When shortening a prompt or context window:

- First decide the intended world and behavior.
- Remove duplication, obsolete history, and local patches.
- Preserve constraints that change outputs.
- Preserve examples only when they teach behavior that prose cannot state more clearly.
- Preserve runtime variable definitions and context boundaries.
- Preserve cache boundaries when they are semantically important; do not move volatile runtime inputs into cached context just to improve cache hits.
- Drop rationale that the downstream model does not need to act correctly.

Compression is successful when the smaller context still reconstructs the same downstream world.

If the user requests a percentage reduction, measure against the context budget that matters for the target model. Default to approximate tokens. If token counting is unavailable, use words or characters and say which measurement was used.

Report compression as:

```text
Compression: [baseline measurement] -> [final measurement], [percent reduction], measured by [tokens | words | characters]
```

## Verification

A prompt is ready when:

- It stands alone without the conversation that produced it.
- The complete context window, not just one message, has been considered.
- Provider-side cache boundaries and invalidation risks have been considered when relevant.
- Temporary editing instructions are not accidentally preserved as future behavior.
- Old identities, names, constraints, and examples are removed or replaced at the source.
- Instruction, reference, code, example, tool, and runtime-input boundaries are explicit.
- The model has enough context to know what to do and what not to infer.
- The output format is explicit enough to test against.
- There are no unresolved contradictions or hidden dependencies on prior prompt versions.

## Quality Eval

For substantial prompt work, evaluate the final prompt against this rubric before shipping:

```text
Goal fit: Does the context window produce the user's intended model behavior?
Specificity: Are roles, inputs, constraints, and outputs concrete enough to execute?
Completeness: Are all runtime context sources and priority rules represented?
Simplicity: Is the prompt reconstructed cleanly instead of layered with patches?
Resolvability: Would the trigger and scope clearly route to this skill?
Testability: Can the behavior be checked with realistic model inputs or eval cases?
```

Use a 1-10 score for each dimension. Revise if any dimension is below 7 or if a critical ambiguity remains.

Representative eval cases:

- Migrate a prompt from one product identity to another, remove old-world references, and verify the final prompt reads as originally written for the new identity.
- Compress a multi-message context window by a requested percentage while preserving system/developer/user priority, tool descriptions, code context, retrieved docs, static prompt text, and output format.
- Analyze a provider-cached prompt prefix and verify that stable cached instructions, volatile runtime inputs, and cache invalidation expectations are correctly separated.
- Review a prompt that contains both instructions and reference documents, then clarify which blocks are commands versus background material.

## Output Format

When producing a final prompt, return:

```text
Prompt: [the complete prompt or context-window specification]
Context inventory: [messages, code, docs, tools, variables, and other context considered]
Cache notes: [provider caching boundaries or "not applicable"]
Assumptions: [only assumptions that remain relevant to the final prompt]
Verification: [how the prompt was checked or how it should be tested]
```

When reviewing or revising an existing prompt, return:

```text
Result: [revised prompt or concrete change list]
World reconstruction notes: [what changed so the prompt stands alone]
Removed editing artifacts: [temporary instructions, old names, obsolete patches]
Remaining risks: [only unresolved ambiguity or missing context]
```

## Filing Rules

This skill is text-only by default. It does not write durable artifacts unless the user asks to update a prompt file, documentation file, test fixture, or application code.

If writing files is requested, state the target path, whether the file is new or updated, and what verification proves the written prompt matches the intended downstream context window.
