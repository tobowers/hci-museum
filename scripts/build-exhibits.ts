import { exhibits, exhibitsByNewestAdded, type Exhibit } from "../src/data";
import { parseWiki, type ParsedExhibit } from "./parse-wiki";
import { renderShell } from "../src/shell";

export type EnrichedExhibit = Exhibit & {
  wiki: ParsedExhibit;
  prev?: Exhibit;
  next?: Exhibit;
};

export function enrichExhibits(wikiMarkdown: string): EnrichedExhibit[] {
  const wiki = parseWiki(wikiMarkdown);
  const byTitle = new Map(wiki.map((e) => [e.title, e]));

  return exhibits
    .map((exhibit, index) => {
      const wikiEntry = byTitle.get(exhibit.wikiTitle);
      if (!wikiEntry) {
        console.warn(`No wiki entry found for ${exhibit.wikiTitle}`);
        return null;
      }
      return {
        ...exhibit,
        wiki: wikiEntry,
        prev: index > 0 ? exhibits[index - 1] : undefined,
        next: index < exhibits.length - 1 ? exhibits[index + 1] : undefined,
      } as EnrichedExhibit;
    })
    .filter((e): e is EnrichedExhibit => e !== null);
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function mdInline(text: string): string {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
}

function mdParagraphs(text: string): string {
  return text
    .split(/\n\n+/)
    .map((p) => `<p>${mdInline(p).replace(/\n/g, " ")}</p>`)
    .join("\n");
}

export function buildExhibitHtml(
  exhibit: EnrichedExhibit,
  basePath = "../../",
  assetPrefix = "../../assets/wiki/",
): string {
  const { wiki } = exhibit;
  const heroImage = exhibit.image.startsWith("assets/wiki/")
    ? assetPrefix + exhibit.image.replace("assets/wiki/", "")
    : exhibit.image;

  const tags = exhibit.tags
    .map((tag) => `<span class="exhibit__tag">${escapeHtml(tag)}</span>`)
    .join("");

  const facts = wiki.deepDive
    .map((fact) => {
      const heading = fact.heading ? `<strong>${mdInline(fact.heading)}</strong>` : "";
      const text = mdInline(fact.text);
      return `
        <div class="exhibit__fact">
          ${heading ? `<div class="exhibit__fact-heading">${heading}</div>` : ""}
          <p>${text}</p>
        </div>
      `;
    })
    .join("");

  const media = wiki.media
    .map((m) => {
      const src = m.src.replace(/^\.\.\/assets\/wiki\//, assetPrefix);
      return `
        <figure class="exhibit__media-item">
          <div class="exhibit__media-frame">
            <img src="${escapeHtml(src)}" alt="${escapeHtml(m.alt || exhibit.title)}" loading="lazy" />
            <div class="exhibit__media-scanlines" aria-hidden="true"></div>
          </div>
          <figcaption>${mdInline(m.caption)}</figcaption>
        </figure>
      `;
    })
    .join("");

  const sources = wiki.sources
    .map(
      (s) => `
        <li>
          <a href="${escapeHtml(s.url)}" target="_blank" rel="noopener">${mdInline(s.text)}</a>
        </li>
      `,
    )
    .join("");

  const prevLink = exhibit.prev
    ? `<a href="../${exhibit.prev.slug}/" class="exhibit__nav-link exhibit__nav-link--prev">
        <span class="exhibit__nav-dir">← Previous</span>
        <span class="exhibit__nav-title">${escapeHtml(exhibit.prev.title)}</span>
      </a>`
    : `<span class="exhibit__nav-link exhibit__nav-link--disabled"></span>`;

  const nextLink = exhibit.next
    ? `<a href="../${exhibit.next.slug}/" class="exhibit__nav-link exhibit__nav-link--next">
        <span class="exhibit__nav-dir">Next →</span>
        <span class="exhibit__nav-title">${escapeHtml(exhibit.next.title)}</span>
      </a>`
    : `<span class="exhibit__nav-link exhibit__nav-link--disabled"></span>`;

  const teamMembers = wiki.team
    .map((m) => {
      const note = m.note ? mdInline(m.note) : "";
      return `
            <li class="exhibit__team-item">
              <span class="exhibit__team-name">${mdInline(m.name)}</span>
              ${note ? `<span class="exhibit__team-note"> ${note}</span>` : ""}
            </li>`;
    })
    .join("");

  const body = `
        <article class="exhibit">
          <header class="exhibit__hero">
            <div class="exhibit__hero-text">
              <div class="exhibit__eyebrow">
                <span class="exhibit__year">${escapeHtml(exhibit.year)}</span>
                ${wiki.by ? `<span class="exhibit__by">${mdInline(wiki.by)}</span>` : ""}
              </div>
              <h1 class="exhibit__title">${escapeHtml(exhibit.title)}</h1>
              <p class="exhibit__subtitle">${escapeHtml(exhibit.subtitle)}</p>
              <div class="exhibit__tags">${tags}</div>
            </div>

            <div class="exhibit__hero-image-wrap">
              <img
                class="exhibit__hero-image"
                src="${escapeHtml(heroImage)}"
                alt="${escapeHtml(exhibit.title)} archival photograph"
              />
              <div class="exhibit__hero-scanlines" aria-hidden="true"></div>
            </div>
          </header>

          <section class="exhibit__section exhibit__overview">
            <h2 class="exhibit__section-title">Overview</h2>
            <div class="exhibit__prose">${mdParagraphs(wiki.overview)}</div>
          </section>

          <section class="exhibit__section exhibit__deep-dive">
            <h2 class="exhibit__section-title">Deep dive</h2>
            <div class="exhibit__facts">${facts}</div>
          </section>

          ${teamMembers ? `
          <section class="exhibit__section exhibit__team">
            <h2 class="exhibit__section-title">Team &amp; pioneers</h2>
            <ul class="exhibit__team-list">${teamMembers}
            </ul>
          </section>` : ""}

          ${media ? `
          <section class="exhibit__section exhibit__media">
            <h2 class="exhibit__section-title">Media</h2>
            <div class="exhibit__media-grid">${media}</div>
          </section>
          ` : ""}

          ${sources ? `
          <section class="exhibit__section exhibit__sources">
            <h2 class="exhibit__section-title">Sources</h2>
            <ol class="exhibit__source-list">${sources}</ol>
          </section>
          ` : ""}

          <nav class="exhibit__nav" aria-label="Exhibit navigation">
            ${prevLink}
            <a href="${basePath}exhibits/" class="exhibit__nav-link exhibit__nav-link--index">All exhibits</a>
            ${nextLink}
          </nav>
        </article>`;

  return renderShell({
    title: `${exhibit.title} — HCI Museum`,
    description: exhibit.blurb,
    body,
    basePath,
    active: "exhibits",
    url: `/exhibits/${exhibit.slug}/`,
    ogType: "article",
    socialImage: `/og/exhibits/${exhibit.slug}.jpg`,
    socialImageType: "image/jpeg",
    socialImageAlt: `${exhibit.title} archival photograph`,
  });
}

export function buildAllExhibitPages(markdown: string): { slug: string; html: string }[] {
  return enrichExhibits(markdown).map((exhibit) => ({
    slug: exhibit.slug,
    html: buildExhibitHtml(exhibit),
  }));
}

export function buildExhibitsIndexHtml(exhibitList: readonly Exhibit[], basePath = "../"): string {
  const renderCards = (items: readonly Exhibit[]) => items
    .map((exhibit) => {
      const heroImage = exhibit.image.startsWith("assets/wiki/")
        ? `${basePath}${exhibit.image}`
        : exhibit.image;
      const classes = ["exhibit-card"];
      if (exhibit.span === 2) classes.push("exhibit-card--wide");
      const tags = exhibit.tags.map((t) => `<span class="exhibit-card__tag">${escapeHtml(t)}</span>`).join("");
      return `
          <a class="${classes.join(" ")}" href="${basePath}exhibits/${exhibit.slug}/">
            <div class="exhibit-card__media">
              <img class="exhibit-card__image" src="${escapeHtml(heroImage)}" alt="${escapeHtml(exhibit.title)} archival photograph" loading="lazy" />
              <div class="exhibit-card__image-glitch" aria-hidden="true"></div>
              <span class="exhibit-card__year">${escapeHtml(exhibit.year)}</span>
            </div>
            <div class="exhibit-card__body">
              <h3 class="exhibit-card__title">${escapeHtml(exhibit.title)}</h3>
              <p class="exhibit-card__subtitle">${escapeHtml(exhibit.subtitle)}</p>
              <div class="exhibit-card__tags">${tags}</div>
            </div>
          </a>`;
    })
    .join("");
  const timelineCards = renderCards(exhibitList);
  const newestCards = renderCards(exhibitsByNewestAdded);

  const body = `
        <section class="page page--collection" aria-labelledby="collection-title">
          <header class="page__head">
            <p class="page__kicker">Permanent collection</p>
            <h1 id="collection-title" class="page__title">All exhibits</h1>
            <p class="page__lede">${exhibitList.length} artifacts recovered, 1976–1992.</p>
          </header>
          <div class="gallery__header gallery__header--collection">
            <span class="gallery__count">Sort collection signal</span>
            <div class="gallery__sort" role="group" aria-label="Sort exhibits">
              <button class="gallery__sort-button active" type="button" data-sort="timeline" aria-pressed="true">Timeline</button>
              <button class="gallery__sort-button" type="button" data-sort="newest" aria-pressed="false">Newest added</button>
            </div>
          </div>
          <div class="gallery__grid gallery__grid--full" data-sort-panel="timeline">${timelineCards}</div>
          <div class="gallery__grid gallery__grid--full" data-sort-panel="newest" hidden>${newestCards}</div>
          <script>
            document.querySelectorAll(".gallery__sort-button").forEach((button) => {
              button.addEventListener("click", () => {
                const mode = button.dataset.sort === "newest" ? "newest" : "timeline";
                document.querySelectorAll(".gallery__sort-button").forEach((item) => {
                  const active = item === button;
                  item.classList.toggle("active", active);
                  item.setAttribute("aria-pressed", String(active));
                });
                document.querySelectorAll("[data-sort-panel]").forEach((panel) => {
                  panel.hidden = panel.getAttribute("data-sort-panel") !== mode;
                });
              });
            });
          </script>
        </section>`;

  return renderShell({
    title: "All Exhibits",
    description: "Every artifact in the HCI Museum collection.",
    body,
    basePath,
    active: "exhibits",
  });
}
