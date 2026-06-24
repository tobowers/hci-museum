import { renderShell, escapeHtml } from "../src/shell";
import { parseFrontmatter, renderMarkdown, formatDate, type Frontmatter } from "./render-markdown";

export type BlogPost = {
  slug: string;
  fm: Frontmatter;
  dateLabel: string;
  sortKey: number;
  bodyHtml: string;
  excerpt: string;
};

const BLOG_DIR = "docs/blog";

async function readExcerpt(body: string): Promise<string> {
  const stripped = body
    .replace(/^---[\s\S]*?---/, "")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/[#>*`-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return stripped.slice(0, 180).trim();
}

export async function loadBlogPosts(dir: string = BLOG_DIR): Promise<BlogPost[]> {
  const glob = new Bun.Glob("*.md");
  const files: string[] = [];
  for await (const path of glob.scan(dir)) files.push(path);

  const posts = await Promise.all(
    files.map(async (name) => {
      const full = `${dir}/${name}`;
      const md = await Bun.file(full).text();
      const { fm, body } = parseFrontmatter(md);
      const bodyHtml = renderMarkdown(body);
      const sortKey = fm.date ? new Date(fm.date).getTime() : 0;
      return {
        slug: fm.slug ?? name.replace(/\.md$/, ""),
        fm,
        dateLabel: formatDate(fm.date),
        sortKey: Number.isNaN(sortKey) ? 0 : sortKey,
        bodyHtml,
        excerpt: await readExcerpt(body),
      } satisfies BlogPost;
    }),
  );

  return posts.sort((a, b) => b.sortKey - a.sortKey);
}

function rewriteRelativePaths(html: string, basePath: string): string {
  return html
    .replace(/href="\.\.\//g, `href="${basePath}`)
    .replace(/src="\.\.\//g, `src="${basePath}`);
}

export function buildBlogPostHtml(post: BlogPost, basePath = "../../"): string {
  const body = rewriteRelativePaths(post.bodyHtml, basePath);
  const byline = `<p class="post__byline">By ${escapeHtml(post.fm.author ?? "Beepy")}${
    post.dateLabel ? ` &middot; ${escapeHtml(post.dateLabel)}` : ""
  }</p>`;

  const article = `
        <article class="post">
          <a href="${basePath}blog/" class="post__back">&larr; Field Notes</a>
          <header class="post__header">
            <h1 class="post__title">${escapeHtml(post.fm.title)}</h1>
            ${post.fm.description ? `<p class="post__lede">${escapeHtml(post.fm.description)}</p>` : ""}
            ${byline}
          </header>
          <div class="post__body">
${body}
          </div>
          <footer class="post__sign">— ${escapeHtml(post.fm.author ?? "Beepy")}, curator</footer>
        </article>`;

  return renderShell({
    title: post.fm.title,
    description: post.fm.description,
    body: article,
    basePath,
    active: "blog",
  });
}

export function buildBlogIndexHtml(posts: BlogPost[], basePath = "../"): string {
  const items = posts
    .map((post) => {
      return `
          <a class="post-card" href="${basePath}blog/${post.slug}/">
            <div class="post-card__meta">
              ${post.dateLabel ? `<span class="post-card__date">${escapeHtml(post.dateLabel)}</span>` : ""}
              <span class="post-card__author">${escapeHtml(post.fm.author ?? "Beepy")}</span>
            </div>
            <h2 class="post-card__title">${escapeHtml(post.fm.title)}</h2>
            ${post.fm.description ? `<p class="post-card__excerpt">${escapeHtml(post.fm.description)}</p>` : ""}
            <span class="post-card__more">Read &rarr;</span>
          </a>`;
    })
    .join("");

  const body = `
        <section class="page page--blog">
          <header class="page__head">
            <p class="page__kicker">From the curator</p>
            <h1 class="page__title">Field Notes</h1>
            <p class="page__lede">
              Dispatches from Beepy, the museum's curator, on the machines in the
              collection and the people who built them.
            </p>
          </header>
          <div class="blog-list">${items}</div>
        </section>`;

  return renderShell({
    title: "Field Notes",
    description: "Dispatches from Beepy, the museum's curator.",
    body,
    basePath,
    active: "blog",
  });
}

export async function buildAllBlogPages(): Promise<{ path: string; html: string }[]> {
  const posts = await loadBlogPosts();
  const pages: { path: string; html: string }[] = [
    { path: "blog/index.html", html: buildBlogIndexHtml(posts) },
  ];
  for (const post of posts) {
    pages.push({ path: `blog/${post.slug}/index.html`, html: buildBlogPostHtml(post) });
  }
  return pages;
}
