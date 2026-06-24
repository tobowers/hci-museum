export type Frontmatter = {
  title: string;
  date?: string;
  description?: string;
  slug?: string;
  author?: string;
  raw: Record<string, string>;
};

export type ParsedDoc = { fm: Frontmatter; body: string };

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export function parseFrontmatter(markdown: string): ParsedDoc {
  const match = markdown.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!match) {
    return { fm: { title: "Untitled", raw: {} }, body: markdown };
  }
  const block = match[1] ?? "";
  const body = match[2] ?? "";
  const raw: Record<string, string> = {};
  for (const line of block.split("\n")) {
    const m = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/);
    if (m && m[1]) raw[m[1]] = (m[2] ?? "").trim();
  }
  const fm: Frontmatter = {
    title: raw.title ?? "Untitled",
    date: raw.date,
    description: raw.description,
    slug: raw.slug ? slugify(raw.slug) : slugify(raw.title ?? "untitled"),
    author: raw.author ?? "Beepy",
    raw,
  };
  return { fm, body };
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function inline(text: string): string {
  let out = escapeHtml(text);
  const codes: string[] = [];
  out = out.replace(/`([^`]+)`/g, (_, c) => {
    codes.push(`<code>${c}</code>`);
    return `\u0000${codes.length - 1}\u0000`;
  });
  out = out.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, url) => {
    const src = String(url).trim();
    const a = String(alt).trim();
    return `<img src="${src}" alt="${a}" />`;
  });
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, url) => {
    return `<a href="${String(url).trim()}" target="_blank" rel="noopener">${label}</a>`;
  });
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/(^|[^*])\*([^*]+)\*(?!\*)/g, "$1<em>$2</em>");
  out = out.replace(/\u0000(\d+)\u0000/g, (_, i) => codes[Number(i)] ?? "");
  return out;
}

function listItem(line: string, ordered: boolean): string {
  const re = ordered ? /^\s*\d+\.\s+(.*)$/ : /^\s*[-*]\s+(.*)$/;
  const m = line.match(re);
  return inline((m?.[1] ?? line).trim());
}

export function renderMarkdown(markdown: string): string {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const out: string[] = [];
  let i = 0;

  const flushParagraph = (buf: string[]) => {
    if (buf.length) {
      out.push(`<p>${inline(buf.join(" "))}</p>`);
      buf.length = 0;
    }
  };

  while (i < lines.length) {
    const line = lines[i] ?? "";

    if (!line.trim()) {
      i++;
      continue;
    }

    if (line.trim() === "---" || line.trim() === "***") {
      out.push('<hr class="rule" />');
      i++;
      continue;
    }

    if (line.startsWith("```")) {
      const code: string[] = [];
      i++;
      while (i < lines.length && !(lines[i] ?? "").startsWith("```")) {
        code.push(lines[i] ?? "");
        i++;
      }
      i++;
      out.push(`<pre class="code"><code>${escapeHtml(code.join("\n"))}</code></pre>`);
      continue;
    }

    const heading = line.match(/^(#{1,4})\s+(.*)$/);
    if (heading) {
      const level = (heading[1] ?? "#").length + 1;
      out.push(`<h${level}>${inline(heading[2] ?? "")}</h${level}>`);
      i++;
      continue;
    }

    if (/^\s*[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i] ?? "")) {
        items.push(`<li>${listItem(lines[i] ?? "", false)}</li>`);
        i++;
      }
      out.push(`<ul>${items.join("")}</ul>`);
      continue;
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i] ?? "")) {
        items.push(`<li>${listItem(lines[i] ?? "", true)}</li>`);
        i++;
      }
      out.push(`<ol>${items.join("")}</ol>`);
      continue;
    }

    if (/^\s*>\s?/.test(line)) {
      const quote: string[] = [];
      while (i < lines.length && /^\s*>\s?/.test(lines[i] ?? "")) {
        quote.push((lines[i] ?? "").replace(/^\s*>\s?/, ""));
        i++;
      }
      out.push(`<blockquote>${inline(quote.join(" "))}</blockquote>`);
      continue;
    }

    const img = line.match(/^!\[([^\]]*)\]\(([^)]+)\)\s*$/);
    if (img) {
      const alt = String(img[1] ?? "").trim();
      const src = String(img[2] ?? "").trim();
      let caption = "";
      if (i + 1 < lines.length && /^\s*\*[^*]/.test(lines[i + 1] ?? "")) {
        caption = (lines[i + 1] ?? "").replace(/^\*+|\*+$/g, "").trim();
        i += 2;
      } else {
        i++;
      }
      out.push(
        `<figure class="figure"><div class="figure__frame"><img src="${src}" alt="${escapeHtml(alt || caption)}" loading="lazy" /></div>${caption ? `<figcaption>${inline(caption)}</figcaption>` : ""}</figure>`,
      );
      continue;
    }

    const para: string[] = [];
    while (
      i < lines.length &&
      (lines[i] ?? "").trim() &&
      !/^(#{1,4})\s/.test(lines[i] ?? "") &&
      !/^\s*[-*]\s+/.test(lines[i] ?? "") &&
      !/^\s*\d+\.\s+/.test(lines[i] ?? "") &&
      !/^\s*>\s?/.test(lines[i] ?? "") &&
      (lines[i] ?? "").trim() !== "---" &&
      !(lines[i] ?? "").startsWith("```") &&
      !/^!\[([^\]]*)\]\(([^)]+)\)\s*$/.test(lines[i] ?? "")
    ) {
      para.push(lines[i] ?? "");
      i++;
    }
    flushParagraph(para);
  }

  return out.join("\n");
}

export function formatDate(iso?: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
