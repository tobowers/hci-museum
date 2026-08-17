#!/usr/bin/env bun
import fs from "node:fs";
import path from "node:path";
import { closeOpencode, deepseekModelRef, opencodeText, requireProviderKey } from "./opencode-runner";
import { errorData } from "./run-trace";
import { exhibits } from "../src/data";

const BLOG_DIR = "docs/blog";
const RUN_DIR = "potential/runs";
const BEEPY_CHARTER = "docs/beepy.md";
const BEEPY_MEMORY = "docs/beepy-memory.md";
const MODEL = deepseekModelRef();

function die(message: string): never {
  console.error(`blog-agent: ${message}`);
  process.exit(1);
}

function requireEnv() {
  try {
    requireProviderKey(MODEL.providerID);
  } catch (error) {
    die((error as Error).message);
  }
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 64);
}

function readIfExists(file: string): string {
  return fs.existsSync(file) ? fs.readFileSync(file, "utf-8") : "";
}

function latestRunSummaries(): string {
  if (!fs.existsSync(RUN_DIR)) return "No run traces yet.";
  return fs
    .readdirSync(RUN_DIR)
    .filter((file) => file.endsWith(".summary.md"))
    .sort()
    .slice(-5)
    .map((file) => `# ${file}\n\n${readIfExists(path.join(RUN_DIR, file)).slice(0, 6000)}`)
    .join("\n\n---\n\n");
}

function existingPosts(): string {
  if (!fs.existsSync(BLOG_DIR)) return "No Field Notes yet.";
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .sort()
    .map((file) => `- ${file}`)
    .join("\n");
}

async function main() {
  const topic = process.argv.slice(2).join(" ").trim() || "write one Field Note if there is a worthwhile story from recent collection activity";
  requireEnv();
  fs.mkdirSync(BLOG_DIR, { recursive: true });
  fs.mkdirSync(RUN_DIR, { recursive: true });

  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const tracePath = path.join(RUN_DIR, `${stamp}-${slugify(topic) || "blog-agent"}.blog.md`);
  fs.writeFileSync(tracePath, `# Blog Agent Trace\n\nTopic: ${topic}\n\n`);

  const collection = exhibits.map((exhibit) => `- ${exhibit.title} (${exhibit.year}) — ${exhibit.slug}: ${exhibit.blurb}`).join("\n");
  const prompt = `You are Beepy's Field Notes writing loop for the HCI Museum.

${readIfExists(BEEPY_CHARTER)}

Beepy memory:
${readIfExists(BEEPY_MEMORY)}

Goal: ${topic}

Important separation of duties:
- You are only the blog-posting agent.
- Do not add, remove, or promote collection exhibits.
- Do not edit docs/hci-wiki.md or src/data.ts.
- You may update docs/beepy-memory.md only with concise durable writing/curation lessons.

Collection snapshot:
${collection}

Existing Field Notes:
${existingPosts()}

Recent curation run summaries:
${latestRunSummaries()}

Task:
- Decide whether there is one worthwhile Field Note to write today.
- If yes, write exactly one markdown file under docs/blog/<slug>.md.
- If no, write no blog post and explain why in the trace.
- Append progress notes to ${tracePath} as you work.

Post requirements:
- Use frontmatter:
  ---
  title: "Post title"
  date: "${new Date().toISOString().slice(0, 10)}"
  description: "Short deck"
  author: "Beepy"
  slug: "post-slug"
  ---
- Use Beepy's authentic AI-curator voice.
- Prefer a specific story from the collection or recent additions over generic commentary.
- Link to exhibits with relative links like [Fairlight CMI](../exhibits/fairlight-cmi/).
- If you include images, only use local assets under ../assets/wiki/.
- Keep it 500-900 words.

Verification:
- Run bun run typecheck.
- Run bun run build.
- Fix your own blog markdown if either fails.

Final response: concise summary of whether a post was written, file path, verification results, and trace path.`;

  console.log(`blog-agent: topic = "${topic}"`);
  console.log(`blog-agent: model = ${MODEL.providerID}/${MODEL.modelID}`);
  console.log(`blog-agent: trace = ${tracePath}`);

  try {
    const result = await opencodeText({
      title: `Beepy blog: ${topic}`,
      model: MODEL,
      agent: "beepy-blogger",
      system: "You are Beepy's HCI Museum Field Notes writer. Write at most one blog post and do not edit collection data.",
      prompt,
    });
    console.log(result);
    await closeOpencode();
  } catch (error) {
    fs.appendFileSync(tracePath, `\n## Fatal Error\n\n\`\`\`json\n${JSON.stringify(errorData(error), null, 2)}\n\`\`\`\n`);
    console.error(`blog-agent: failed; trace so far: ${tracePath}`);
    console.error(error);
    await closeOpencode();
    process.exit(1);
  }
}

main();
