export type NavKey = "exhibits" | "blog" | "about";

export const NAV: { key: NavKey; label: string; href: string }[] = [
  { key: "exhibits", label: "Exhibits", href: "exhibits/" },
  { key: "blog", label: "Field Notes", href: "blog/" },
  { key: "about", label: "About", href: "about/" },
];

const SITE_NAME = "HCI Museum";
const SITE_URL = "https://interfacemuseum.com/";
const SOCIAL_IMAGE = `${SITE_URL}og-image.png`;
const SOCIAL_IMAGE_ALT = "HCI Museum CRT-style artifact wall with archival interface experiments";

export type ShellOptions = {
  title: string;
  description?: string;
  body: string;
  basePath?: string;
  active?: NavKey;
  url?: string;
  ogType?: string;
  socialImage?: string;
  socialImageType?: string;
  socialImageAlt?: string;
  socialImageWidth?: number;
  socialImageHeight?: number;
};

function absoluteSiteUrl(pathOrUrl: string): string {
  return new URL(pathOrUrl, SITE_URL).toString();
}

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function renderAnalyticsScript(): string {
  return `
    <!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "8dcb1e0fcb41470b8769c87691688807"}'></script><!-- End Cloudflare Web Analytics -->`;
}

export function renderShell(opts: ShellOptions): string {
  const { title, description, body, basePath = "./", active } = opts;
  const fullTitle = title.includes("HCI Museum") ? title : `${title} — HCI Museum`;
  const desc = description ?? "A digital museum of strange, beautiful HCI from the late 1970s through the early 1990s. Curated by Beepy.";
  const pageUrl = absoluteSiteUrl(opts.url ?? "");
  const socialImage = opts.socialImage ? absoluteSiteUrl(opts.socialImage) : SOCIAL_IMAGE;
  const socialImageAlt = opts.socialImageAlt ?? SOCIAL_IMAGE_ALT;
  const socialImageType = opts.socialImageType ?? "image/png";
  const socialImageWidth = opts.socialImageWidth ?? 1200;
  const socialImageHeight = opts.socialImageHeight ?? 630;
  const ogType = opts.ogType ?? "website";

  const nav = NAV.map((item) => {
    const cls = item.key === active ? ' class="active"' : "";
    return `<a href="${basePath}${item.href}"${cls}>${item.label}</a>`;
  }).join("\n          ");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="description" content="${escapeHtml(desc)}" />
    <meta property="og:title" content="${escapeHtml(fullTitle)}" />
    <meta property="og:description" content="${escapeHtml(desc)}" />
    <meta property="og:site_name" content="${SITE_NAME}" />
    <meta property="og:type" content="${escapeHtml(ogType)}" />
    <meta property="og:url" content="${escapeHtml(pageUrl)}" />
    <meta property="og:image" content="${escapeHtml(socialImage)}" />
    <meta property="og:image:secure_url" content="${escapeHtml(socialImage)}" />
    <meta property="og:image:type" content="${escapeHtml(socialImageType)}" />
    <meta property="og:image:width" content="${socialImageWidth}" />
    <meta property="og:image:height" content="${socialImageHeight}" />
    <meta property="og:image:alt" content="${escapeHtml(socialImageAlt)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(fullTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(desc)}" />
    <meta name="twitter:image" content="${escapeHtml(socialImage)}" />
    <meta name="twitter:image:alt" content="${escapeHtml(socialImageAlt)}" />
    <title>${escapeHtml(fullTitle)}</title>
    <link rel="icon" type="image/gif" href="/favicon.gif" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="alternate" type="application/rss+xml" title="HCI Museum Collection" href="/feeds/collection.xml" />
    <link rel="alternate" type="application/rss+xml" title="HCI Museum Field Notes" href="/feeds/blog.xml" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="${basePath}styles.css" />
  </head>
  <body>
    <div class="atmosphere" aria-hidden="true">
      <div class="atmosphere__grid"></div>
      <div class="atmosphere__scanlines"></div>
      <div class="atmosphere__vignette"></div>
    </div>

    <div class="page-shell">
      <header class="site-header">
        <a href="${basePath}" class="brand">
          <span class="brand__mark" aria-hidden="true"></span>
          <span>HCI Museum</span>
        </a>
        <nav class="nav-primary" aria-label="Primary">
          ${nav}
        </nav>
        <div class="header-meta">
          <span class="header-meta__item">SYS_OK</span>
          <span class="header-meta__pulse" aria-hidden="true"></span>
        </div>
      </header>

      <main>
${body}
      </main>

      <footer class="site-footer">
        <span>HCI Museum // Curated by Beepy</span>
        <span class="site-footer__signal">SIGNAL_STABLE</span>
      </footer>
    </div>
${renderAnalyticsScript()}
  </body>
</html>`;
}
