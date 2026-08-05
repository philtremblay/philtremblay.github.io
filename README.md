# philtremblay.github.io

Single-page personal site. Astro + Deno, deployed to GitHub Pages on every push to
`master`.

Live: <https://philtremblay.github.io>

## Run it

```bash
deno task dev      # localhost:4321
deno task build    # -> dist/
deno task preview  # serve the built output
```

Needs Deno 2.9.4 or newer. There is no install step — Deno resolves and caches npm
dependencies on the first task run.

## Before you change anything

- **Copy rules live in [`llms.txt`](llms.txt).** The site is deliberately
  credential-neutral and says nothing about current work. Read that first — the
  constraints there are intentional, not gaps to fill.
- **Design tokens** are at the top of `src/styles/global.css`. Warm paper and ink,
  hairline rules, one clay accent, no border radius. Changing a token changes the
  whole page; there are no per-component colours.
- **Page content** is the `practice`, `credentials`, and `elsewhere` arrays in the
  frontmatter of `src/pages/index.astro`. Title and meta description are in
  `src/layouts/BaseLayout.astro`.

Design lineage: structural cues — mono eyebrow labels, rule-separated rows, grain over
flat colour — are adapted from [hermes-agent.nousresearch.com](https://hermes-agent.nousresearch.com/).
The palette and typography are Danish minimalist rather than Hermes's electric blue.

## Things that will bite you

- **GitHub Pages must be set to "GitHub Actions"**, not "Deploy from a branch". The
  workflow uploads a built artifact; branch-serving would publish raw source. Switching
  it back breaks the site.
- **`deno task check` does not type-check on a fresh checkout.** It stops at an
  interactive prompt to install `@astrojs/check` and waits, so it will stall any
  non-interactive run. Install them once up front: `deno add npm:@astrojs/check npm:typescript`.
- **The theme script in `BaseLayout.astro` must stay inline and blocking.** Move it,
  defer it, or bundle it and every page load flashes the wrong palette before
  correcting.
- **`deno.lock` is committed on purpose**, unlike most Deno templates. It pins the
  dependency graph so CI matches local, and it makes the workflow's cache key
  meaningful. Do not re-add it to `.gitignore`.
- **Astro is two majors behind** — 5.15.8 pinned in `deno.json`, 7.1.6 current. Fine
  for now; expect breaking changes whenever it gets upgraded.
