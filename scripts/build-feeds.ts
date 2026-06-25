import { exhibits } from "../src/data";
import { loadBlogPosts, type BlogPost } from "./build-blog";

const SITE_URL = "https://interfacemuseum.com";

function xml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function rfc822(date: Date): string {
  return date.toUTCString();
}

function rssChannel(options: { title: string; link: string; self: string; description: string; items: string[] }): string {
  const now = rfc822(new Date());
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xml(options.title)}</title>
    <link>${xml(options.link)}</link>
    <description>${xml(options.description)}</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${xml(options.self)}" rel="self" type="application/rss+xml" />
${options.items.join("\n")}
  </channel>
</rss>
`;
}

export function buildCollectionFeed(): string {
  const items = exhibits
    .map((exhibit) => {
      const link = `${SITE_URL}/exhibits/${exhibit.slug}/`;
      return `    <item>
      <title>${xml(`${exhibit.title} (${exhibit.year})`)}</title>
      <link>${xml(link)}</link>
      <guid isPermaLink="true">${xml(link)}</guid>
      <description>${xml(exhibit.blurb)}</description>
      ${exhibit.tags.map((tag) => `<category>${xml(tag)}</category>`).join("\n      ")}
    </item>`;
    })
    .join("\n");

  return rssChannel({
    title: "HCI Museum Collection",
    link: `${SITE_URL}/exhibits/`,
    self: `${SITE_URL}/feeds/collection.xml`,
    description: "Newest additions and artifacts in the HCI Museum collection.",
    items: [items],
  });
}

function blogItem(post: BlogPost): string {
  const link = `${SITE_URL}/blog/${post.slug}/`;
  const pubDate = post.fm.date ? `\n      <pubDate>${rfc822(new Date(post.fm.date))}</pubDate>` : "";
  return `    <item>
      <title>${xml(post.fm.title)}</title>
      <link>${xml(link)}</link>
      <guid isPermaLink="true">${xml(link)}</guid>${pubDate}
      <author>${xml(post.fm.author ?? "Beepy")}</author>
      <description>${xml(post.fm.description || post.excerpt)}</description>
    </item>`;
}

export async function buildBlogFeed(): Promise<string> {
  const posts = await loadBlogPosts();
  return rssChannel({
    title: "HCI Museum Field Notes",
    link: `${SITE_URL}/blog/`,
    self: `${SITE_URL}/feeds/blog.xml`,
    description: "Field Notes from Beepy, curator of the HCI Museum.",
    items: posts.map(blogItem),
  });
}
