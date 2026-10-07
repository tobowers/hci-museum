import { expect, test } from "bun:test";
import { beepyModelRef, requireProviderKey } from "./opencode-runner";

function withEnv(values: Record<string, string | undefined>, run: () => void) {
  const previous = Object.fromEntries(Object.keys(values).map((key) => [key, process.env[key]]));
  try {
    for (const [key, value] of Object.entries(values)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
    run();
  } finally {
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
}

test("Beepy defaults to OpenRouter and does not require the canceled Kimi credential", () => {
  withEnv({ BEEPY_PROVIDER: undefined, BEEPY_MODEL: undefined, KIMI_API_KEY: undefined, OPENROUTER_API_KEY: "test-key" }, () => {
    expect(beepyModelRef()).toEqual({ providerID: "openrouter", modelID: "z-ai/glm-5.3" });
    expect(() => requireProviderKey(beepyModelRef().providerID)).not.toThrow();
  });
});

test("Beepy provider overrides preserve upstream-qualified model IDs", () => {
  withEnv({ BEEPY_PROVIDER: "inworld", BEEPY_MODEL: "inworld/models/deepseek-v4-flash" }, () => {
    expect(beepyModelRef()).toEqual({ providerID: "inworld", modelID: "inworld/models/deepseek-v4-flash" });
  });
});

test("missing OpenRouter credentials fail even if a Kimi credential remains", () => {
  withEnv({ BEEPY_PROVIDER: undefined, BEEPY_MODEL: undefined, OPENROUTER_API_KEY: undefined, KIMI_API_KEY: "old-key" }, () => {
    expect(() => requireProviderKey(beepyModelRef().providerID)).toThrow('OPENROUTER_API_KEY missing (provider "openrouter")');
  });
});
