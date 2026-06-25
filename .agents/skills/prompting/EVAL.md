# Prompting Skill Eval

## Representative Input

```text
Migrate this agent prompt from Stacky to Aggy, compress it by 40%, and make sure the downstream model understands the full context window including system/developer/user messages, code snippets, tool descriptions, retrieved docs, and static prompt text.

Also account for provider-side caching: stable cached prefixes must not contain volatile runtime inputs, and old-world references in cached blocks must be treated as behaviorally active until the cache is invalidated or bypassed.
```

## Criteria

Score each dimension 1-10. The skill passes when every score is at least 7 and no critical ambiguity remains.

- Goal fit: Does the context window produce the user's intended model behavior?
- Specificity: Are roles, inputs, constraints, and outputs concrete enough to execute?
- Completeness: Are all runtime context sources and priority rules represented?
- Cache awareness: Are provider-side cache boundaries, stable prefixes, volatile inputs, and invalidation risks represented when relevant?
- Simplicity: Is the prompt reconstructed cleanly instead of layered with patches?
- Resolvability: Would the trigger and scope clearly route to this skill?
- Testability: Can the behavior be checked with realistic model inputs or eval cases?

## Latest Review

```text
Goal fit: 9
Specificity: 8
Completeness: 8
Simplicity: 9
Resolvability: 9
Testability: 7
Cache awareness: 8

Result: Passed. No critical ambiguity remains.
Improvements applied: added percentage-compression measurement, before/after compression reporting, migration checklist, provider cache-boundary guidance, and representative eval cases.
```

## Routing Smoke Cases

These user phrases should route to this skill:

- "write a good prompt"
- "improve this prompt"
- "compress this context window"
- "migrate this prompt from Stacky to Aggy"
- "review the whole prompt we send to the model, including code context"
- "analyze this cached prompt prefix"

These user phrases should not route here unless the requested output is a model prompt or context window:

- "write landing page copy"
- "review this backend implementation"
- "design a better dashboard"
- "fix this prompt injection bug in application code"
