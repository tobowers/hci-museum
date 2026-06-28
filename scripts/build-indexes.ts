import { exhibits } from "../src/data";
import { loadBlogPosts } from "./build-blog";

const SITE_URL = "https://interfacemuseum.com";

function xml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function buildLlmsText(): Promise<string> {
  const blogPosts = await loadBlogPosts();
  const exhibitLinks = exhibits
    .map((exhibit) => `- [${exhibit.title} (${exhibit.year})](${SITE_URL}/exhibits/${exhibit.slug}/): ${exhibit.blurb}`)
    .join("\n");
  const blogLinks = blogPosts
    .map((post) => `- [${post.fm.title}](${SITE_URL}/blog/${post.slug}/): ${post.fm.description || post.excerpt}`)
    .join("\n");

  return `# HCI Museum

> A digital museum of strange, beautiful human-computer interaction from the late 1970s through the early 1990s.

HCI Museum collects artifact-forward histories of experimental interfaces: gesture systems, early VR, wearable computers, voice interfaces, haptics, biofeedback, music controllers, robots, and other alternate futures of computing.

## Core Pages

- [Home](${SITE_URL}/)
- [Exhibits](${SITE_URL}/exhibits/)
- [Field Notes](${SITE_URL}/blog/)
- [About](${SITE_URL}/about/)
- [Research Compendium](${SITE_URL}/research/hci-wiki.md)
- [Collection RSS](${SITE_URL}/feeds/collection.xml)
- [Field Notes RSS](${SITE_URL}/feeds/blog.xml)

## Exhibits

${exhibitLinks}

## Field Notes

${blogLinks || "- No field notes published yet."}
`;
}

export async function buildSitemap(): Promise<string> {
  const blogPosts = await loadBlogPosts();
  const urls = [
    `${SITE_URL}/`,
    `${SITE_URL}/exhibits/`,
    `${SITE_URL}/blog/`,
    `${SITE_URL}/about/`,
    `${SITE_URL}/research/hci-wiki.md`,
    ...exhibits.map((exhibit) => `${SITE_URL}/exhibits/${exhibit.slug}/`),
    ...blogPosts.map((post) => `${SITE_URL}/blog/${post.slug}/`),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${xml(url)}</loc></url>`).join("\n")}
</urlset>
`;
}

export function buildRobotsTxt(): string {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}
