# philtremblay.github.io

Single-page personal site for **Philippe Tremblay** — Astro 5 on Deno, deployed to GitHub
Pages on every push to `master`. Its job is to make a small consulting practice credible
to someone who has already spoken to Phil. It is a reference card handed out after a
conversation, **not** a lead-generation page: outreach happens directly, and the site
exists so the person you spoke to finds something real when they look you up.

## Project map

- `src/pages/index.astro` — the only page. All copy lives in its frontmatter arrays:
  `lead`, `alsoPractice`, `credentials`, `elsewhere`.
- `src/layouts/BaseLayout.astro` — SEO, Open Graph, the Google Fonts links, the inline
  theme script, default `title` and `description`.
- `src/components/Header.astro` — sticky bar: wordmark and theme toggle. No navigation;
  it is one page.
- `src/components/Footer.astro` — colophon: name, location, LinkedIn, GitHub, year.
- `src/styles/global.css` — the whole design system. Tokens at the top, then primitives.
- `.github/workflows/deploy.yml` — builds with Deno and publishes to Pages.

```bash
deno task dev      # localhost:4321
deno task build    # -> dist/
deno task preview  # serve the built output
deno task check    # type-check; exits non-zero on error
```

<important if="you are writing or editing any copy on this page">

The site used to be deliberately credential-neutral and said nothing about current work.
**That rule was reversed on 2026-09-17** when the page became a consulting page. These
rules replace it — they are narrower, not absent.

- **Dravr appears as provenance, never as a product.** One paragraph explaining where the
  expertise comes from. Do not link it, do not name the fitness or endurance domain, do
  not describe features, do not add marketing copy for it. A prospect should read it and
  think "that is why he knows this", not "he is selling me a fitness app".
- **One lead offering carries the position.** `lead` is the headline; `alsoPractice` is a
  short list so a warm visitor can see the range. Do not promote an `also` item to equal
  weight — five equal offerings read as a directory, and the page stops saying anything.
- **State no credential that is not verifiable, and no title that is not held.** See the
  credentials block below; those constraints are legal, not stylistic.
- **Name no client without written permission.**
- **Coaching does not appear here.** It lives on a separate domain for a separate
  audience. Do not add a link, a section, or a navigation item for it.
- **No placeholder work, no invented projects, no "coming soon".** An earlier version
  listed six fabricated projects; they were deleted rather than restyled. Leave a section
  short instead of padding it.
- Keep it brief. Brevity is still the design.
</important>

<important if="you are about to write the words 'engineer', 'ingénieur', 'B.Eng.' or a certification on this page">

Two facts constrain this page, and both are checkable by a regulator or a client.

- **Phil is not a member of the OIQ** (Ordre des ingénieurs du Québec). The OIQ's own
  guidance quotes the statutory rule — *"nul ne peut, s'il n'est ingénieur, prendre le
  titre d'ingénieur seul ou avec qualificatifs"* — and gives **"ingénieur logiciel" /
  "software engineer"** as its worked example of a problematic title for a non-member,
  naming **websites and LinkedIn** specifically. Penalties reach $62,500 for an
  individual. So: **never use "ingénieur" in any form in French copy**, and do not use
  "software engineer" as a *title* for Phil. Describing the work — "distributed systems
  and cloud infrastructure" — is not a title claim and is what the page does instead.
  Whether the English word carries the same reservation as the French was never settled;
  the conservative form costs nothing, so use it.
- **The McGill degree is a B.Sc. through Science, not a B.Eng.** The page said B.Eng. for
  a year and it was wrong. A misstated credential on a page that sells services is a
  different order of problem from a typo on a personal page. **Do not "fix" it back.**
- **Certifications must be current or dated.** CKA and the two Google Cloud professional
  certifications carry expiry (GCP two years, CKA two to three). An expired certification
  listed flat on a consulting page is worse than no certification. If one has lapsed,
  either drop it or add the year it was earned — do not leave it ambiguous.
</important>

<important if="you are changing colours, type, or spacing">

The system is Danish minimalist: warm paper and ink, hairline rules, exactly one accent,
zero border radius. Everything is tokens at the top of `src/styles/global.css`; there are
no per-component colours, so changing a token changes the whole page.

- **Ground is `#f7f6f2`**, cards are pure `#ffffff` lifted by a hairline — never by a fill
  step. Hairlines lift; the system has no shadows.
- **Rules are translucent** (`rgba(155, 165, 159, …)`) so one value reads correctly on
  every surface tier. Do not replace them with a solid hex.
- **The accent is `--clay` `#9d4b33`, and there is exactly one.** It measures 5.24:1 on
  the ground — past AA, short of AAA, which is why clay is for links, state and emphasis
  and never for body text or decoration. Do not add a second accent.
- **Type is Newsreader (display) over Plus Jakarta Sans (body)**, loaded from Google
  Fonts, each with a real fallback stack. Newsreader is set at weight 500 with
  `font-optical-sizing: auto`; at 400 it goes thin at display sizes.
- **Dark is not an inversion.** `#141613` ground, `#e8e9e4` ink, clay warms to `#c9704f`.
  Both schemes must read as one product — if you pull warmth out of one, pull it out of
  the other.
- Design lineage: structural cues (mono eyebrows, rule-separated rows, grain over flat
  colour) adapted from hermes-agent.nousresearch.com; the palette, the hairline
  discipline and the type are drawn from Dravr's Boreal v2 system without taking Boreal's
  identity — Dravr's sage green and its mark appear nowhere here, deliberately.
</important>

<important if="you are changing the build, dependencies, deploy, or the theme script">

- **GitHub Pages must stay set to "GitHub Actions"**, not "Deploy from a branch". The
  workflow uploads a built artifact; branch-serving would publish raw source.
- **`typescript` is pinned to 6.0.3 and must stay on the 6.x line.** TypeScript 7's native
  compiler dropped the programmatic API `astro check` depends on, so bumping it breaks
  `deno task check` with a confusing error from inside `@astrojs/language-server`. See
  withastro/roadmap#1321.
- **The theme script in `BaseLayout.astro` must stay inline and blocking.** Move it, defer
  it, or bundle it and every page load flashes the wrong palette before correcting.
- **`deno.lock` is committed on purpose**, unlike most Deno templates. It pins the graph so
  CI matches local and makes the workflow's cache key meaningful. Do not re-ignore it.
- **Astro is two majors behind** — 5.15.8 pinned in `deno.json`, 7.x current. Fine for now.
- **Push to `master` publishes.** There is no staging. Work on a branch, review with
  `deno task preview`, then merge.
</important>

<important if="you are adding a blog, a writing section, or a second page">

`/blog` and `/projects` were removed deliberately, not left as stubs. If writing starts,
it comes back as **a single page at a real permalink with no index** — one essay with its
own URL is honest; a blog with one post advertises that you stopped. Add the index only
when a second and third piece exist.
</important>
