export type NavKey = "exhibits" | "blog" | "about";

export const NAV: { key: NavKey; label: string; href: string }[] = [
  { key: "exhibits", label: "Exhibits", href: "exhibits/" },
  { key: "blog", label: "Field Notes", href: "blog/" },
  { key: "about", label: "About", href: "about/" },
];

export type ShellOptions = {
  title: string;
  description?: string;
  body: string;
  basePath?: string;
  active?: NavKey;
};

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function renderShell(opts: ShellOptions): string {
  const { title, description, body, basePath = "./", active } = opts;
  const fullTitle = title.includes("HCI Museum") ? title : `${title} — HCI Museum`;
  const desc = description ?? "A digital museum of strange, beautiful HCI from the late 1970s through the early 1990s. Curated by Beepy.";

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
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(desc)}" />
    <meta property="og:type" content="website" />
    <title>${escapeHtml(fullTitle)}</title>
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
  </body>
</html>`;
}
