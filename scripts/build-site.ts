const root = new URL("..", import.meta.url).pathname;
const outdir = `${root}public`;

await Bun.$`rm -rf ${outdir}`;

const result = await Bun.build({
  entrypoints: [`${root}src/index.html`],
  outdir,
  target: "browser",
  minify: true,
  splitting: true,
});

if (!result.success) {
  for (const log of result.logs) console.error(log);
  process.exit(1);
}

await Bun.$`mkdir -p ${outdir}/assets/wiki ${outdir}/research`;
await Bun.$`cp -R ${root}assets/wiki/. ${outdir}/assets/wiki/`;
await Bun.$`cp ${root}docs/hci-wiki.md ${outdir}/research/hci-wiki.md`;
await Bun.$`cp ${root}src/styles.css ${outdir}/styles.css`;

const { buildAllExhibitPages, buildExhibitsIndexHtml } = await import("./build-exhibits");
const { buildAllBlogPages } = await import("./build-blog");
const { buildMarkdownPage } = await import("./build-pages");
const { exhibits } = await import("../src/data");

const markdown = await Bun.file(`${root}docs/hci-wiki.md`).text();
const pages = buildAllExhibitPages(markdown);

await Bun.$`mkdir -p ${outdir}/exhibits`;
await Bun.write(`${outdir}/exhibits/index.html`, buildExhibitsIndexHtml(exhibits));

for (const page of pages) {
  const dir = `${outdir}/exhibits/${page.slug}`;
  await Bun.$`mkdir -p ${dir}`;
  await Bun.write(`${dir}/index.html`, page.html);
}

for (const blogPage of await buildAllBlogPages()) {
  const dir = `${outdir}/${blogPage.path}`.replace(/\/index\.html$/, "");
  await Bun.$`mkdir -p ${dir}`;
  await Bun.write(`${outdir}/${blogPage.path}`, blogPage.html);
}

const about = await buildMarkdownPage({ file: `${root}docs/about.md`, active: "about" });
{
  const dir = `${outdir}/${about.path}`.replace(/\/index\.html$/, "");
  await Bun.$`mkdir -p ${dir}`;
  await Bun.write(`${outdir}/${about.path}`, about.html);
}

await Bun.write(`${outdir}/.nojekyll`, "");

const counts = pages.length + (await buildAllBlogPages()).length + 2;
console.log(`Built static site to ${outdir} (${pages.length} exhibits + blog + about, ${counts} pages)`);
