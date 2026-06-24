import index from "./index.html";
import { buildAllExhibitPages, buildExhibitsIndexHtml } from "../scripts/build-exhibits";
import { loadBlogPosts, buildBlogIndexHtml, buildBlogPostHtml } from "../scripts/build-blog";
import { buildMarkdownPage } from "../scripts/build-pages";
import { exhibits } from "./data";

const port = Number(process.env.PORT ?? 3000);

const wikiMarkdown = await Bun.file("docs/hci-wiki.md").text();
const exhibitPages = new Map(buildAllExhibitPages(wikiMarkdown).map((p) => [p.slug, p.html]));
const exhibitsIndex = buildExhibitsIndexHtml(exhibits);
const blogPosts = await loadBlogPosts();
const blogIndex = buildBlogIndexHtml(blogPosts);
const blogBySlug = new Map(blogPosts.map((p) => [p.slug, buildBlogPostHtml(p)]));
const aboutPage = await buildMarkdownPage({ file: "docs/about.md", active: "about" });

const serve = (html: string) => new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });

const server = Bun.serve({
  port,
  routes: {
    "/": index,
    "/exhibits/": () => serve(exhibitsIndex),
    "/exhibits/:slug": (req) => {
      const slug = new URL(req.url).pathname.split("/").filter(Boolean).pop();
      const html = slug ? exhibitPages.get(slug) : undefined;
      return html ? serve(html) : new Response("exhibit not found", { status: 404 });
    },
    "/exhibits/:slug/": (req) => {
      const slug = new URL(req.url).pathname.split("/").filter(Boolean).pop();
      const html = slug ? exhibitPages.get(slug) : undefined;
      return html ? serve(html) : new Response("exhibit not found", { status: 404 });
    },
    "/blog/": () => serve(blogIndex),
    "/blog/:slug/": (req) => {
      const slug = new URL(req.url).pathname.split("/").filter(Boolean).pop();
      const html = slug && blogBySlug.get(slug);
      return html ? serve(html) : new Response("not found", { status: 404 });
    },
    "/about/": () => serve(aboutPage.html),
    "/styles.css": () =>
      new Response(Bun.file("src/styles.css"), { headers: { "Content-Type": "text/css" } }),
    "/assets/wiki/:file": (req) => {
      const file = new URL(req.url).pathname.split("/").pop();
      if (!file) return new Response("missing asset", { status: 404 });
      return new Response(Bun.file(`assets/wiki/${file}`));
    },
  },
  development: process.env.NODE_ENV !== "production",
});

console.log(`HCI Museum running at http://localhost:${server.port}`);
