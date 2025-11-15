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
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20 LTS or higher
- pnpm 9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/philtremblay/philtremblay.github.io.git
cd philtremblay.github.io

# Install pnpm if you don't have it
npm install -g pnpm

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

The site will be available at `http://localhost:4321`

### Available Scripts

```bash
pnpm run dev       # Start development server
pnpm run build     # Build for production
pnpm run preview   # Preview production build locally
```

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

This site is configured for GitHub Pages deployment:

1. **Build the site**:
   ```bash
   pnpm run build
   ```

2. **The `dist/` folder contains your static site**

3. **For GitHub Pages**:
   - Push your code to GitHub
   - Enable GitHub Pages in repository settings
   - Set source to the branch containing your built site
   - Your site will be live at `https://philtremblay.github.io`

### GitHub Actions (Automated)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys on push to `main`:

- Uses Node.js 20 LTS
- Uses pnpm for fast, efficient installs
- Includes pnpm store caching for faster builds
- Deploys to GitHub Pages automatically

### Other Hosting Options

**Vercel**:
```bash
pnpm i -g vercel
vercel
```

**Netlify**:
```bash
pnpm run build
# Deploy the dist/ folder via Netlify UI or CLI
```

**Self-Hosting**:
```bash
pnpm run build
# Copy dist/ folder to your web server
```

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - The web framework for content-driven websites
- **Package Manager**: [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager
- **Runtime**: Node.js 20 LTS
- **Styling**: Vanilla CSS with CSS Variables (no preprocessors needed!)
- **Icons**: Inline SVG for performance
- **Typography**: System font stack for fast loading
- **Deployment**: GitHub Pages / Vercel / Netlify

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
