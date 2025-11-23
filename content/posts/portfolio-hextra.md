---
title: Portfolio Dev-Environment
---

## References

- Hextra docs: https://imfing.github.io/hextra/docs/guide/configuration/

## Install Dev Environment

### 1 — Install Hugo (Snap) on Linux

Snap provides an easy single-command installation. Hugo distributed through other package managers may not provide the newest version.

```bash
# install Hugo (extended) via snap
sudo snap install hugo

# verify
hugo version
```

### 2 — Clone this repo

Clone the repository with the hextra submodule as dependency.

```bash
git clone --recurse-submodules git@github.com:lr101/portfolio.git

cd portfolio
```

### 3 — Run the development server

Start Hugo's dev server (live reload enabled):

```bash
hugo server --buildDrafts --disableFastRender
```

Open [http://localhost:1313](http://localhost:1313) in your browser. Hugo will rebuild and reload when you change content, layouts, or assets.

## Hugo project structure

Typical Hugo site root layout (only key folders shown):

- `archetypes/` — content templates used by `hugo new`.
- `assets/` — source files for Hugo Pipes (SCSS, JS to be processed).
- `content/` — your site pages and posts (Markdown files).
- `data/` — arbitrary YAML/JSON/TOML data files accessible in templates.
- `i18n/` — translation files for multilingual sites.
- `layouts/` — custom site templates (override theme templates here).
- `static/` — static files copied as-is to the site root (images, robots.txt).
- `config.toml` (or `yaml`/`json`) — site configuration and theme params.

What Hugo does at build time:

- Content and layouts are combined to render pages.
- `assets/` processed through Hugo Pipes (e.g., SCSS compilation, minification).
- `static/` files are copied verbatim to the generated site.

## Hextra theme theme structure

Hextra is a full-featured theme with a clear layout. Key theme folders and their purposes:

- `themes/hextra/layouts/` — the theme's templates. Common files:
	- `baseof.html` — the base template that other templates inherit.
	- `single.html`, `list.html`, `home.html` — templates for pages, lists, and the homepage.
	- `_partials/` — partial templates (header, footer, navigation, etc.).
	- `_markup/` — custom Markdown render hooks and shortcodes.

- `themes/hextra/assets/` — theme source assets (SCSS, JS). These are processed by Hugo Pipes when you include them from your layouts.

- `themes/hextra/static/` — theme static files (icons, images, webmanifest) copied to the final site.

- `themes/hextra/exampleSite/` or `themes/hextra/docs/` — many themes bundle an example site with a full `config` and `content` to demonstrate features. Copy or inspect this to learn recommended configuration keys.

Editing tips:

- To override any theme template, create the same path under your site's `layouts/` folder. Hugo will prioritize site `layouts/` over theme `layouts/`.
- For small visual changes, prefer editing or extending partials rather than replacing entire templates.
- Use `assets/` (site-level) to include your own SCSS or JS and import theme variables when supported.
