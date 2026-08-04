# philtremblay.github.io

Personal site for Philippe Tremblay — a single page, built with Astro and served
from GitHub Pages.

The design is Danish minimalist: warm paper, ink, hairline rules, mono labels, and
exactly one muted accent. Structural cues (mono eyebrows, rule-separated rows, grain
over flat colour, a strict token system) are adapted from
[hermes-agent.nousresearch.com](https://hermes-agent.nousresearch.com/); the palette
and typography are Danish rather than Hermes's electric blue.

## Scope

The site is a name anchor, not a portfolio. It states proven capability and nothing
about current work. That is deliberate — see the constraints in [`llms.txt`](llms.txt)
before changing copy.

## Structure

```
/
├── .github/workflows/       # GitHub Actions deploy
├── public/                  # robots.txt
├── src/
│   ├── components/
│   │   ├── Header.astro     # Sticky masthead: wordmark + theme toggle
│   │   └── Footer.astro     # Colophon
│   ├── layouts/
│   │   └── BaseLayout.astro # SEO, favicon, pre-paint theme script
│   ├── pages/
│   │   └── index.astro      # The only page
│   └── styles/
│       └── global.css       # Design system: tokens and primitives
├── astro.config.mjs
├── deno.json                # Tasks and npm import map
└── deno.lock                # Committed lockfile
```

## Getting started

Requires [Deno](https://deno.com/) 2.9.4 or higher. There is no install step — Deno
resolves and caches npm dependencies on the first task run.

```bash
git clone https://github.com/philtremblay/philtremblay.github.io.git
cd philtremblay.github.io
deno task dev
```

Serves at `http://localhost:4321`.

```bash
deno task dev       # Development server
deno task build     # Build to dist/
deno task preview   # Preview the production build
deno task check     # Type-check (installs @astrojs/check on first run)
```

## Design system

All tokens live at the top of `src/styles/global.css`. Never pure white, never pure
black — everything is warm.

| Token | Role |
| --- | --- |
| `--paper`, `--paper-raised`, `--paper-sunk` | Backgrounds. `#f2efe9` light, warm near-black `#17150f` dark |
| `--ink`, `--ink-soft`, `--ink-muted`, `--ink-faint` | Text hierarchy |
| `--rule`, `--rule-soft`, `--rule-strong` | Hairlines. The layout is built from these |
| `--clay`, `--clay-deep`, `--clay-wash` | The single accent. State and emphasis only, never decoration |

Three font stacks, three jobs, and no webfont requests: `--font-display` (serif) for
headings, `--font-sans` for body and UI, `--font-mono` for eyebrows, indices, tags,
and buttons.

Shared primitives: `.shell`, `.section`, `.section-head`, `.rows` / `.row`,
`.eyebrow`, `.index`, `.btn`, `.link`, `.tags`, `.status`.

Border radius is `0`. This system does not round corners.

### Editing content

Page content lives in the frontmatter of `src/pages/index.astro` — the `practice`,
`credentials`, and `elsewhere` arrays. Title and meta description are in
`src/layouts/BaseLayout.astro`.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds with a
pinned Deno 2.9.4 and publishes `dist/` to GitHub Pages.

GitHub Pages must be set to **GitHub Actions** as the build source, not "Deploy from
a branch" — the workflow uploads the built artifact rather than serving the repo.

For any other static host, run `deno task build` and deploy `dist/`.

## Tech

- [Astro](https://astro.build/) — static site generation
- [Deno](https://deno.com/) — runtime and dependency management
- Vanilla CSS with custom properties; no preprocessor, no framework
- Zero JavaScript beyond the theme toggle

## Contact

- LinkedIn — [philippe-tremblay-36219485](https://www.linkedin.com/in/philippe-tremblay-36219485/)
- GitHub — [@philtremblay](https://github.com/philtremblay)

---

© Philippe Tremblay
