import { renderShell, escapeHtml, type NavKey } from "../src/shell";
import { parseFrontmatter, renderMarkdown } from "./render-markdown";

export type MarkdownPageOptions = {
  file: string;
  active?: NavKey;
  basePath?: string;
};

export async function buildMarkdownPage(opts: MarkdownPageOptions): Promise<{ path: string; html: string }> {
  const { file, active, basePath = "../" } = opts;
  const md = await Bun.file(file).text();
  const { fm, body } = parseFrontmatter(md);
  const slug = fm.slug ?? file.split("/").pop()!.replace(/\.md$/, "");
  let bodyHtml = renderMarkdown(body)
    .replace(/href="\.\.\//g, `href="${basePath}`)
    .replace(/src="\.\.\//g, `src="${basePath}`);

  const inner = `
        <section class="page page--prose">
          <header class="page__head">
            <p class="page__kicker">${escapeHtml(fm.raw.kicker ?? "The Museum")}</p>
            <h1 class="page__title">${escapeHtml(fm.title)}</h1>
            ${fm.description ? `<p class="page__lede">${escapeHtml(fm.description)}</p>` : ""}
          </header>
          <div class="prose">
${bodyHtml}
          </div>
        </section>`;

  return {
    path: `${slug}/index.html`,
    html: renderShell({
      title: fm.title,
      description: fm.description,
      body: inner,
      basePath,
      active,
    }),
  };
}
