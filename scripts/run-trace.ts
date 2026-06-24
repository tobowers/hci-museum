import fs from "node:fs";
import path from "node:path";

type TraceEvent = {
  time: string;
  phase: string;
  message: string;
  data?: unknown;
};

export class RunTrace {
  readonly jsonPath: string;
  readonly mdPath: string;
  private events: TraceEvent[] = [];

  constructor(dir: string, label: string) {
    fs.mkdirSync(dir, { recursive: true });
    const stamp = new Date().toISOString().replace(/[:.]/g, "-");
    const safeLabel = label
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 48);
    const base = `${stamp}-${safeLabel || "run"}`;
    this.jsonPath = path.join(dir, `${base}.json`);
    this.mdPath = path.join(dir, `${base}.md`);
    this.add("run", "trace initialized", { jsonPath: this.jsonPath, mdPath: this.mdPath });
  }

  add(phase: string, message: string, data?: unknown) {
    this.events.push({ time: new Date().toISOString(), phase, message, data });
    this.flush();
  }

  printRecent(count = 12) {
    console.error(`scout trace: ${this.jsonPath}`);
    console.error(`scout trace: ${this.mdPath}`);
    console.error(`scout trace: last ${Math.min(count, this.events.length)} events`);
    for (const event of this.events.slice(-count)) {
      console.error(`  ${event.time} [${event.phase}] ${event.message}`);
      if (event.data !== undefined) console.error(`    ${JSON.stringify(event.data).slice(0, 1000)}`);
    }
  }

  private flush() {
    fs.writeFileSync(this.jsonPath, JSON.stringify({ events: this.events }, null, 2));
    fs.writeFileSync(
      this.mdPath,
      `# Curator Scout Trace\n\n${this.events
        .map((event) => {
          const data = event.data === undefined ? "" : `\n\n\`\`\`json\n${JSON.stringify(event.data, null, 2)}\n\`\`\``;
          return `## ${event.time} [${event.phase}]\n\n${event.message}${data}`;
        })
        .join("\n\n")}`,
    );
  }
}

export function errorData(error: unknown): Record<string, unknown> {
  if (error instanceof Error) return { name: error.name, message: error.message, stack: error.stack };
  return { error: String(error) };
}
