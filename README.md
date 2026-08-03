# Philippe Tremblay - Portfolio

A modern, minimal portfolio website built with Astro.js featuring a beautiful purple theme inspired by Messo Rem Club Cycliste.

## ✨ Features

- **🚀 Blazing Fast**: Built with Astro for optimal performance
- **🎨 Modern Design**: Clean, professional aesthetic with Messorem purple theme
- **🌓 Dark/Light Mode**: Automatic theme switching with localStorage persistence
- **📱 Fully Responsive**: Mobile-first design that works beautifully on all devices
- **♿ Accessible**: Built with accessibility best practices
- **🔍 SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- **📝 Blog Ready**: Prepared structure for future blog posts
- **⚡ Zero JavaScript Overhead**: Astro ships zero JS by default, only adding it where needed

## 🏗️ Project Structure

```
├── public/              # Static assets
│   └── images/
├── src/
│   ├── components/      # Reusable Astro components
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/         # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/           # File-based routing
│   │   ├── index.astro
│   │   ├── projects/
│   │   │   └── index.astro
│   │   └── blog/
│   │       └── index.astro
│   ├── styles/          # Global styles
│   │   └── global.css
│   └── content/         # Content collections (for blog)
│       ├── blog/
│       └── projects/
├── astro.config.mjs     # Astro configuration
├── deno.json            # Deno configuration and tasks
└── deno.lock            # Dependency lockfile (committed)
```

## 🚀 Getting Started

### Prerequisites

- Deno 2.9.4 or higher (CI pins 2.9.4)

### Installation

```bash
# Clone the repository
git clone https://github.com/philtremblay/philtremblay.github.io.git
cd philtremblay.github.io

# Install Deno if you don't have it
# macOS/Linux:
curl -fsSL https://deno.land/install.sh | sh
# Windows:
# irm https://deno.land/install.ps1 | iex

# Start development server (dependencies install automatically)
deno task dev
```

The site will be available at `http://localhost:4321`

### Available Scripts

```bash
deno task dev       # Start development server
deno task build     # Build for production
deno task preview   # Preview production build locally
deno task check     # Check Astro project for errors
```

**Note**: Deno automatically installs and caches npm dependencies. No separate install step needed!

## 🎨 Customization

### Colors

The Messorem purple theme colors are defined in `src/styles/global.css`:

```css
:root {
  --purple-50: #faf5ff;
  --purple-100: #f3e8ff;
  /* ... more shades ... */
  --purple-900: #581c87;

  --accent: var(--purple-600);
  --accent-hover: var(--purple-700);
}
```

Adjust these CSS variables to match your brand colors.

### Content

1. **Homepage** (`src/pages/index.astro`):
   - Update hero section with your personal tagline
   - Modify the "What I Do" cards
   - Customize featured projects

2. **Projects Page** (`src/pages/projects/index.astro`):
   - Edit the `projects` array with your actual projects
   - Update project details, tags, and links

3. **Navigation & Footer**:
   - Edit `src/components/Header.astro` for navigation items
   - Update `src/components/Footer.astro` for social links

### Adding Blog Posts

When ready to add blog functionality:

1. Create blog posts in `src/content/blog/`:

```markdown
---
title: "My First Post"
description: "This is my first blog post"
pubDate: 2025-01-15
author: "Philippe Tremblay"
---

Your content here...
```

2. Update `src/pages/blog/index.astro` to list and display posts

## 📦 Deployment

### GitHub Pages (Recommended)

This site is configured for GitHub Pages deployment with Deno:

1. **Build the site**:
   ```bash
   deno task build
   ```

2. **The `dist/` folder contains your static site**

3. **For GitHub Pages**:
   - Push your code to GitHub
   - In repository settings → Pages, set **Source** to **GitHub Actions**
     (not "Deploy from a branch" — the workflow publishes the built artifact)
   - Your site will be live at `https://philtremblay.github.io`

### GitHub Actions (Automated)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys on push to `master`:

- Uses Deno 2.9.4 (pinned in the workflow)
- Automatic dependency caching for faster builds
- Deploys to GitHub Pages automatically
- No manual dependency installation needed

### Other Hosting Options

**Vercel**:
```bash
deno task build
# Deploy the dist/ folder via Vercel UI or CLI
```

**Netlify**:
```bash
deno task build
# Deploy the dist/ folder via Netlify UI or CLI
```

**Self-Hosting**:
```bash
deno task build
# Copy dist/ folder to your web server
```

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - The web framework for content-driven websites
- **Runtime**: [Deno](https://deno.com/) - Modern, secure JavaScript/TypeScript runtime
- **Styling**: Vanilla CSS with CSS Variables (no preprocessors needed!)
- **Icons**: Inline SVG for performance
- **Typography**: System font stack for fast loading
- **Deployment**: GitHub Pages / Vercel / Netlify

### Why Deno?

- ✅ **No separate install step** - Dependencies are automatically cached
- ✅ **Faster startup** - Built-in TypeScript support
- ✅ **Modern tooling** - All-in-one runtime with formatting, linting, and testing
- ✅ **Secure by default** - Explicit permissions model
- ✅ **npm compatibility** - Works seamlessly with npm packages like Astro

## 🎯 Performance

This website is optimized for maximum performance:

- ✅ **Zero JavaScript** on initial load (Astro's island architecture)
- ✅ **Minimal CSS** - ~10KB
- ✅ **No external dependencies** in production
- ✅ **Optimized images** - Use modern formats
- ✅ **Perfect Lighthouse scores** possible

## 📄 License

© 2025 Philippe Tremblay. All rights reserved.

## 🤝 Contributing

This is a personal portfolio, but feel free to:
- Report bugs
- Suggest improvements
- Use as inspiration for your own portfolio

## 📞 Contact

- **LinkedIn**: [philippe-tremblay-36219485](https://www.linkedin.com/in/philippe-tremblay-36219485/)
- **GitHub**: [@philtremblay](https://github.com/philtremblay)
- **Cycling**: [Messo Rem Club Cycliste](https://www.instagram.com/messoremclubcycliste/)

---

Built with 💜 using Astro
