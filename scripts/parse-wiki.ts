export type TeamMember = { name: string; note: string };

export type ParsedExhibit = {
  id: string;
  slug: string;
  title: string;
  year: string;
  by?: string;
  tags: string[];
  overview: string;
  deepDive: { heading: string; text: string }[];
  team: TeamMember[];
  media: { alt: string; src: string; caption: string }[];
  sources: { text: string; url: string }[];
};

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export function parseWiki(markdown: string): ParsedExhibit[] {
  const sections = markdown.split(/\n(?=## )/g).filter((s) => s.trim().startsWith("## "));
  return sections.map((section) => parseSection(section));
}

function parseSection(section: string): ParsedExhibit {
  const lines = section.split("\n");
  const firstLine = lines[0] ?? "";
  const titleMatch = firstLine.match(/^##\s+(.+?)\s+\(([^)]+)\)\s*$/);
  const title = titleMatch ? (titleMatch[1] ?? firstLine.replace(/^##\s+/, "").trim()) : firstLine.replace(/^##\s+/, "").trim();
  const year = titleMatch ? (titleMatch[2] ?? "") : "";

  let current = "";
  const overview: string[] = [];
  const deepDive: { heading: string; text: string }[] = [];
  const team: TeamMember[] = [];
  const media: { alt: string; src: string; caption: string }[] = [];
  const sources: { text: string; url: string }[] = [];

  let by: string | undefined;
  const tags: string[] = [];

  const flush = () => {
    if (current.trim()) {
      if (sectionMode === "overview") overview.push(current.trim());
      else if (sectionMode === "dive") deepDive.push({ heading: "", text: current.trim() });
      current = "";
    }
  };

  let sectionMode: "none" | "overview" | "dive" | "team" | "media" | "sources" = "none";
  let pendingMedia: { alt: string; src: string } | null = null;

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i] ?? "";

    if (line.startsWith("### Overview")) {
      flush();
      sectionMode = "overview";
      continue;
    }
    if (line.startsWith("### Deep dive")) {
      flush();
      sectionMode = "dive";
      continue;
    }
    if (line.startsWith("### Team")) {
      flush();
      sectionMode = "team";
      continue;
    }
    if (line.startsWith("### Media")) {
      flush();
      sectionMode = "media";
      continue;
    }
    if (line.startsWith("### Sources")) {
      flush();
      sectionMode = "sources";
      continue;
    }

    if (sectionMode === "none") {
      const byMatch = line.match(/^\*\*By:\*\*\s*(.+)$/);
      if (byMatch && byMatch[1]) by = byMatch[1].trim();

      const tagMatch = line.match(/^\*\*Tags:\*\*\s*(.+)$/);
      if (tagMatch && tagMatch[1]) {
        const tagText = tagMatch[1];
        const matches = tagText.match(/`[^`]+`/g);
        if (matches) tags.push(...matches.map((t) => t.replace(/`/g, "")));
      }
      continue;
    }

    if (sectionMode === "overview") {
      if (line.trim() || current) current += line + "\n";
      continue;
    }

    if (sectionMode === "dive") {
      const bullet = line.match(/^\*\s+\*\*(.+?)\*\*\s*(.*)$/);
      if (bullet) {
        if (current.trim()) {
          deepDive.push({ heading: "", text: current.trim() });
          current = "";
        }
        current += `**${bullet[1]!.trim()}** ${bullet[2]!.trim()}\n`;
      } else if (line.startsWith("* ") && line.length > 2) {
        if (current.trim()) {
          deepDive.push({ heading: "", text: current.trim() });
          current = "";
        }
        current += line.slice(2).trim() + "\n";
      } else {
        current += line + "\n";
      }
      continue;
    }

    if (sectionMode === "team") {
      const m = line.match(/^\*\s+\*\*(.+?)\*\*\s*(?:[—–-]|\s)\s*(.*)$/);
      if (m && m[1]) {
        const name = m[1].trim();
        const note = (m[2] ?? "").trim();
        if (name) team.push({ name, note });
      } else {
        const plain = line.match(/^\*\s+(.+)$/);
        if (plain && plain[1]) {
          const last = team[team.length - 1];
          if (last && !last.note) last.note = plain[1].trim();
          else team.push({ name: plain[1].trim(), note: "" });
        }
      }
      continue;
    }

    if (sectionMode === "media") {
      const imgMatch = line.match(/!\[([^\]]*)\]\(([^)]+)\)/);
      if (imgMatch) {
        pendingMedia = { alt: imgMatch[1]!.trim(), src: imgMatch[2]!.trim() };
        continue;
      }
      const caption = line.match(/^\*([^*]+)\*$/);
      if (caption && pendingMedia && caption[1]) {
        media.push({ ...pendingMedia, caption: caption[1].trim() });
        pendingMedia = null;
        continue;
      }
      if (line.trim() && pendingMedia) {
        const cap = line.replace(/^\*+|\*+$/g, "").trim();
        if (cap) {
          media.push({ ...pendingMedia, caption: cap });
          pendingMedia = null;
        }
      }
      continue;
    }

    if (sectionMode === "sources") {
      const sourceMatch = line.match(/^\d+\.\s+(.+?)\s*—\s*(https?:\/\/\S+)$/);
      if (sourceMatch && sourceMatch[1] && sourceMatch[2]) {
        sources.push({ text: sourceMatch[1].trim(), url: sourceMatch[2].trim() });
      } else {
        const loose = line.match(/^\d+\.\s+(.+?)(?:\s+—\s+|\s+–\s+|\s+-\s+|\s+)(https?:\/\/\S+)$/);
        if (loose && loose[1] && loose[2]) sources.push({ text: loose[1].trim(), url: loose[2].trim() });
      }
      continue;
    }
  }

  flush();

  const finalDeepDive: { heading: string; text: string }[] = [];
  for (const item of deepDive) {
    const headingMatch = item.text.match(/^\*\*(.+?)\*\*/);
    let heading = "";
    let bodyText = item.text;

    if (headingMatch && headingMatch[1]) {
      heading = headingMatch[1].trim();
      bodyText = item.text.replace(headingMatch[0], "").trim();
    }

    const cleanText = bodyText.replace(/\*\*/g, "").replace(/\n+/g, " ").trim();
    if (!cleanText) continue;

    finalDeepDive.push({ heading, text: cleanText });
  }

  return {
    id: slugify(title),
    slug: slugify(title),
    title,
    year,
    by,
    tags,
    overview: overview.join("\n\n").trim(),
    deepDive: finalDeepDive,
    team,
    media,
    sources,
  };
}
