# Portfolio

A retro, terminal-inspired developer portfolio built with Astro + Tailwind.

Features a black-and-white VCR aesthetic, an auto-generated Projects section
(pulled from your GitHub repos at build time), a Markdown/MDX blog with RSS, and
a sitemap.

## Make it yours

Edit `src/consts.ts`:

- `SITE_TITLE` — your name/handle (shown as `<SITE_TITLE />` in the hero + logo)
- `GITHUB_USERNAME` — drives the Projects section and GitHub link
- `QUOTE` — tagline under your name
- `ABOUT_ME` — short bio for the About section
- `KNOWN_TECH` — the stack shown in the Tech section
- `NAV_LINKS` — navigation links

Blog posts live in `src/content/blog/` as `.md` / `.mdx` files.

## Commands

| Command           | Action                                   |
| ----------------- | ---------------------------------------- |
| `npm install`     | Install dependencies                     |
| `npm run dev`     | Start the dev server at `localhost:4321` |
| `npm run build`   | Build the production site to `./dist/`   |
| `npm run preview` | Preview the build locally                |
