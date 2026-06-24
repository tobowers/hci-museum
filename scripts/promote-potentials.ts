#!/usr/bin/env bun
import fs from "node:fs";
import path from "node:path";

const potentialDir = "potential";
const assetsDir = "assets/wiki";
const wikiPath = "docs/hci-wiki.md";
const dataPath = "src/data.ts";

type Info = {
  slug: string;
  title: string;
  year?: string;
  subtitle?: string;
  why_scout_cares?: string;
  research?: {
    title?: string;
    year?: string;
    by?: string;
    tags?: string[];
    overview?: string;
    deepDive?: { heading?: string; text?: string }[];
    team?: { name?: string; note?: string }[];
    media?: { src?: string; alt?: string; caption?: string }[];
    sources?: { text?: string; url?: string }[];
    imageUrls?: string[];
  };
  savedImages?: string[];
};

function readJson<T>(file: string): T | undefined {
  try {
    return JSON.parse(fs.readFileSync(file, "utf-8")) as T;
  } catch {
    return undefined;
  }
}

function sortYear(year: string): number {
  const m = year.match(/\d{4}/);
  return m ? Number(m[0]) : 1990;
}

function quote(s: string): string {
  return JSON.stringify(s);
}

function clean(s = ""): string {
  return s.replace(/\r\n/g, "\n").trim();
}

function copyImages(info: Info): { local: string; source: string; alt: string; caption: string }[] {
  const media = info.research?.media ?? [];
  const saved = info.savedImages ?? [];
  const copied: { local: string; source: string; alt: string; caption: string }[] = [];

  fs.mkdirSync(assetsDir, { recursive: true });

  for (let i = 0; i < saved.length; i++) {
    const src = saved[i]!;
    if (!fs.existsSync(src)) continue;
    const ext = path.extname(src) || ".jpg";
    const filename = `${info.slug}-${i + 1}${ext}`;
    const dest = path.join(assetsDir, filename);
    fs.copyFileSync(src, dest);
    const m = media[i];
    copied.push({
      local: `../assets/wiki/${filename}`,
      source: m?.src ?? src,
      alt: m?.alt ?? info.title,
      caption: m?.caption ?? `${info.title} archival image.`,
    });
  }

  if (!copied.length) {
    for (const m of media.slice(0, 2)) {
      if (!m.src) continue;
      copied.push({
        local: m.src,
        source: m.src,
        alt: m.alt ?? info.title,
        caption: m.caption ?? `${info.title} archival image.`,
      });
    }
  }

  return copied;
}

function wikiSection(info: Info, copied: ReturnType<typeof copyImages>): string {
  const r = info.research ?? {};
  const title = r.title ?? info.title;
  const year = r.year ?? info.year ?? "c.1980s";
  const tags = r.tags?.length ? r.tags : ["HCI", "Hardware"];
  const deepDive = r.deepDive?.length ? r.deepDive : [];
  const team = r.team?.length ? r.team : [];
  const sources = r.sources?.length ? r.sources : [];

  return `---

## ${title} (${year})

**By:** ${r.by ?? "Unknown / research pending"}  
**Tags:** ${tags.map((t) => `\`${t}\``).join(" ")}

### Overview

${clean(r.overview ?? info.why_scout_cares ?? "Research pending.")}

### Deep dive

${deepDive.map((d) => `* **${clean(d.heading ?? "Detail")}.** ${clean(d.text ?? "")}`).join("\n") || "* **Research pending.** This candidate was promoted from the potential queue and needs a fuller manual pass."}

### Team

${team.map((m) => `* **${clean(m.name ?? "Unknown")}.** ${clean(m.note ?? "")}`).join("\n") || "* **Research pending.** People and organizations need a fuller source pass."}

### Media

${copied.map((m) => `![${clean(m.alt)}](${m.local})\n*${clean(m.caption)}*`).join("\n\n") || ""}

### Sources

${sources.map((s, i) => `${i + 1}. ${clean(s.text ?? "Source")} — ${clean(s.url ?? "")}`).join("\n") || "1. Research bundle in potential directory — local"}
`;
}

function dataEntry(info: Info, copied: ReturnType<typeof copyImages>): string {
  const r = info.research ?? {};
  const title = r.title ?? info.title;
  const year = r.year ?? info.year ?? "c.1980s";
  const tags = (r.tags?.length ? r.tags : ["HCI", "Hardware"]).slice(0, 3);
  const hero = copied[0]?.local?.startsWith("../assets/wiki/")
    ? `img(${quote(copied[0].local.replace("../assets/wiki/", ""))})`
    : quote(copied[0]?.local ?? r.media?.[0]?.src ?? "assets/wiki/hubot-hardware.webp");

  return `  {
    id: ${quote(info.slug)},
    slug: ${quote(info.slug)},
    wikiTitle: ${quote(title)},
    year: ${quote(year)},
    sortYear: ${sortYear(year)},
    title: ${quote(title)},
    subtitle: ${quote(info.subtitle ?? info.why_scout_cares ?? "Promoted from the curator scout queue")},
    blurb: ${quote(info.why_scout_cares ?? clean(r.overview ?? "Promoted from the curator scout queue").slice(0, 220))},
    tags: [${tags.map(quote).join(", ")}],
    image: ${hero},
  },`;
}

function main() {
  const wiki = fs.readFileSync(wikiPath, "utf-8");
  let data = fs.readFileSync(dataPath, "utf-8");
  const dirs = fs
    .readdirSync(potentialDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name !== "evals")
    .map((d) => d.name)
    .sort();

  const sections: string[] = [];
  const entries: string[] = [];
  const promoted: string[] = [];

  for (const dir of dirs) {
    const info = readJson<Info>(path.join(potentialDir, dir, "info.json"));
    if (!info?.research) continue;
    if (wiki.includes(`## ${info.research.title ?? info.title} (`) || data.includes(`slug: ${quote(info.slug)}`)) continue;
    const copied = copyImages(info);
    sections.push(wikiSection(info, copied));
    entries.push(dataEntry(info, copied));
    promoted.push(info.slug);
  }

  if (!promoted.length) {
    console.log("No new potential candidates to promote.");
    return;
  }

  fs.appendFileSync(wikiPath, `\n${sections.join("\n")}`);
  data = data.replace(/\n\];\s*\n\nexport const featured/, `\n${entries.join("\n")}\n];\n\nexport const featured`);
  fs.writeFileSync(dataPath, data);
  console.log(`Promoted ${promoted.length}: ${promoted.join(", ")}`);
}

main();
