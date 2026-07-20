#!/usr/bin/env bun
import path from "node:path";
import { chromium, type Page } from "@playwright/test";
import { exhibits, exhibitsByNewestAdded } from "../src/data";

const publicDir = path.resolve("public");
const port = Number(process.env.SMOKE_PORT ?? 4173);
const baseUrl = `http://127.0.0.1:${port}`;

const contentTypes: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/rss+xml; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
};

function localPath(urlPath: string): string {
  const decoded = decodeURIComponent(urlPath).replace(/^\/+/, "");
  const safe = decoded.split("/").filter((part) => part && part !== ".." && part !== ".").join("/");
  return path.join(publicDir, safe || "index.html");
}

const server = Bun.serve({
  port,
  async fetch(req) {
    const url = new URL(req.url);
    const candidates = url.pathname.endsWith("/")
      ? [path.join(localPath(url.pathname), "index.html"), localPath(`${url.pathname}index.html`)]
      : [localPath(url.pathname), localPath(`${url.pathname}/index.html`)];

    for (const candidate of candidates) {
      const file = Bun.file(candidate);
      if (await file.exists()) {
        const ext = path.extname(candidate).toLowerCase();
        return new Response(file, { headers: { "Content-Type": contentTypes[ext] ?? "application/octet-stream" } });
      }
    }
    return new Response("not found", { status: 404 });
  },
});

async function imageFailures(page: Page, label: string): Promise<string[]> {
  await page.$$eval("img", (imgs) => imgs.forEach((img) => {
    if (img instanceof HTMLImageElement) img.loading = "eager";
  }));
  await page.evaluate(async () => {
    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
    const step = Math.max(240, Math.floor(window.innerHeight * 0.75));
    const maxScroll = () => Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - window.innerHeight;

    for (let y = 0; y <= maxScroll(); y += step) {
      window.scrollTo(0, y);
      await delay(100);
    }
    window.scrollTo(0, maxScroll());
    await delay(300);
  });
  await page.waitForFunction(() => Array.from(document.images).every((img) => img.complete), undefined, { timeout: 10_000 }).catch(() => undefined);
  const broken = await page.$$eval("img", (imgs) =>
    imgs
      .filter((img) => !img.closest("[hidden]"))
      .map((img) => ({
        src: img.currentSrc || img.src,
        alt: img.alt,
        className: img.className,
        complete: img.complete,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
      }))
      .filter((img) => !img.complete || img.naturalWidth === 0 || img.naturalHeight === 0),
  );

  const remote = await page.$$eval(".hero__feature-image, .exhibit-card__image, .exhibit__hero-image, .exhibit__media img", (imgs) =>
    imgs
      .filter((img) => !img.closest("[hidden]"))
      .map((img) => (img instanceof HTMLImageElement ? img.currentSrc : "") || img.getAttribute("src") || "")
      .filter((src) => src && new URL(src, window.location.href).origin !== window.location.origin),
  );

  const failures: string[] = [];
  if (broken.length) failures.push(`${label}: broken images ${JSON.stringify(broken, null, 2)}`);
  if (remote.length) failures.push(`${label}: exhibit images must be local, found ${JSON.stringify(remote, null, 2)}`);
  return failures;
}

async function assertCollectionOrder(page: Page) {
  await page.goto(`${baseUrl}/exhibits/`, { waitUntil: "networkidle" });
  const cards = await page.$$eval(".gallery__grid:not([hidden]) .exhibit-card", (items) =>
    items.map((item) => ({ title: item.querySelector(".exhibit-card__title")?.textContent?.trim() ?? "", href: (item as HTMLAnchorElement).href })),
  );
  if (cards.length !== exhibits.length) throw new Error(`Expected ${exhibits.length} exhibit cards, found ${cards.length}`);

  const expectedTitles = exhibits.map((exhibit) => exhibit.title);
  const actualTitles = cards.map((card) => card.title);
  const mismatch = actualTitles.findIndex((title, index) => title !== expectedTitles[index]);
  if (mismatch !== -1) {
    throw new Error(`Collection order mismatch at ${mismatch}: expected ${expectedTitles[mismatch]}, got ${actualTitles[mismatch]}`);
  }

  await page.getByRole("button", { name: "Newest added" }).click();
  const newestTitles = await page.$$eval(".gallery__grid:not([hidden]) .exhibit-card__title", (items) => items.map((item) => item.textContent?.trim() ?? ""));
  const expectedNewestTitles = exhibitsByNewestAdded.map((exhibit) => exhibit.title);
  const newestMismatch = newestTitles.findIndex((title, index) => title !== expectedNewestTitles[index]);
  if (newestMismatch !== -1) {
    throw new Error(`Newest-added order mismatch at ${newestMismatch}: expected ${expectedNewestTitles[newestMismatch]}, got ${newestTitles[newestMismatch]}`);
  }

  await page.getByRole("button", { name: "Timeline" }).click();
  return { cards, failures: await imageFailures(page, "/exhibits/") };
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const failures: string[] = [];
  try {
    for (const feed of ["/feeds/collection.xml", "/feeds/blog.xml"]) {
      const response = await page.goto(`${baseUrl}${feed}`);
      if (!response?.ok()) throw new Error(`${feed}: HTTP ${response?.status() ?? "unknown"}`);
      const text = await page.textContent("body");
      if (!text?.includes("<rss") || !text.includes("<channel>")) throw new Error(`${feed}: missing RSS channel markup`);
    }

    for (const file of ["/llms.txt", "/llm.txt", "/robots.txt", "/sitemap.xml"]) {
      const response = await page.goto(`${baseUrl}${file}`);
      if (!response?.ok()) throw new Error(`${file}: HTTP ${response?.status() ?? "unknown"}`);
    }

    await page.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
    await page.waitForSelector(".exhibit-card");

    const homeTimelineTitles = await page.$$eval("#gallery-grid .exhibit-card__title", (items) => items.map((item) => item.textContent?.trim() ?? ""));
    const expectedTimelineTitles = exhibits.map((exhibit) => exhibit.title);
    const homeTimelineMismatch = homeTimelineTitles.findIndex((title, index) => title !== expectedTimelineTitles[index]);
    if (homeTimelineMismatch !== -1) {
      throw new Error(`Homepage timeline order mismatch at ${homeTimelineMismatch}: expected ${expectedTimelineTitles[homeTimelineMismatch]}, got ${homeTimelineTitles[homeTimelineMismatch]}`);
    }

    await page.getByRole("button", { name: "Newest added" }).click();
    const homeNewestTitles = await page.$$eval("#gallery-grid .exhibit-card__title", (items) => items.map((item) => item.textContent?.trim() ?? ""));
    const expectedNewestTitles = exhibitsByNewestAdded.map((exhibit) => exhibit.title);
    const homeNewestMismatch = homeNewestTitles.findIndex((title, index) => title !== expectedNewestTitles[index]);
    if (homeNewestMismatch !== -1) {
      throw new Error(`Homepage newest-added order mismatch at ${homeNewestMismatch}: expected ${expectedNewestTitles[homeNewestMismatch]}, got ${homeNewestTitles[homeNewestMismatch]}`);
    }
    if ((await page.getByRole("button", { name: "Newest added" }).getAttribute("aria-pressed")) !== "true") {
      throw new Error("Homepage newest-added button did not become active");
    }

    await page.getByRole("button", { name: "Timeline" }).click();
    failures.push(...(await imageFailures(page, "/")));

    const { cards, failures: collectionFailures } = await assertCollectionOrder(page);
    failures.push(...collectionFailures);
    for (const card of cards) {
      const url = new URL(card.href);
      const response = await page.goto(`${baseUrl}${url.pathname}`, { waitUntil: "networkidle" });
      if (!response?.ok()) throw new Error(`${url.pathname}: HTTP ${response?.status() ?? "unknown"}`);
      await page.waitForSelector(".exhibit__title");
      failures.push(...(await imageFailures(page, url.pathname)));
    }

    if (failures.length) throw new Error(`browser-smoke image failures:\n\n${failures.join("\n\n")}`);

    console.log(`browser-smoke: checked ${cards.length} exhibit pages and images`);
  } finally {
    await browser.close();
    server.stop(true);
  }
}

main().catch((error) => {
  console.error(error);
  server.stop(true);
  process.exit(1);
});
