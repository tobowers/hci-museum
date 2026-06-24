# hci-museum

A digital museum of strange, beautiful, late-70s-through-early-90s HCI experiments.

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run dev
```

Open http://localhost:3000. If another local app is using 3000, run with a custom port:

```bash
PORT=4175 bun run dev
```

To build the static GitHub Pages site:

```bash
bun run build
```

The build emits static files to `public/`. GitHub Pages deployment is configured in `.github/workflows/pages.yml` and publishes `public/` on pushes to `main`.

## Analytics

Basic analytics use Cloudflare Web Analytics because it is free, cookie-free, and only needs a small script tag.

This project was created using `bun init` in bun v1.3.14. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
