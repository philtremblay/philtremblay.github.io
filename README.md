# Philippe Tremblay - Portfolio Website

A modern, minimal, and blazingly fast portfolio website built with vanilla HTML, CSS, and JavaScript.

## Features

- **Zero Dependencies**: Pure HTML/CSS/JavaScript for maximum performance
- **Modern Design**: Clean, sleek interface with smooth animations
- **Dark/Light Mode**: Automatic theme switching with localStorage persistence
- **Fully Responsive**: Mobile-first design that works on all devices
- **Fast Loading**: Optimized for performance and SEO
- **Accessible**: Built with accessibility best practices

## Structure

```
├── index.html              # Homepage
├── projects/
│   └── index.html         # Projects showcase
├── blog/
│   └── index.html         # Blog (coming soon)
├── assets/
│   ├── css/
│   │   └── main.css       # All styles
│   ├── js/
│   │   └── main.js        # All JavaScript
│   └── images/            # Image assets
├── .nojekyll              # GitHub Pages config
└── README.md
```

## Customization

### Update Personal Information

1. **Homepage** (`index.html`):
   - Edit the hero section with your tagline
   - Update the about cards with your skills
   - Modify social links in the footer

2. **Projects Page** (`projects/index.html`):
   - Replace placeholder projects with your actual work
   - Update project titles, descriptions, and tags
   - Add project links or GitHub repositories

3. **Theme Colors** (`assets/css/main.css`):
   - Modify CSS custom properties in `:root`
   - Change `--accent` for your brand color
   - Customize spacing, fonts, etc.

### Adding Projects

Projects are cards in `projects/index.html`. Add new ones using this template:

```html
<div class="project-card">
  <div class="project-image">🎯</div>
  <div class="project-content">
    <h3 class="project-title">Your Project</h3>
    <p class="project-description">
      Description of your project.
    </p>
    <div class="project-tags">
      <span class="tag">Tech 1</span>
      <span class="tag">Tech 2</span>
    </div>
  </div>
</div>
```

### Adding Blog Posts (Future)

The blog structure is ready for implementation. To add blogging:

1. Create individual post HTML files in `/blog/posts/`
2. Add a blog post list to `/blog/index.html`
3. Consider using a static site generator like 11ty or Hugo for easier management

## Deployment

### GitHub Pages (Recommended)

This site is configured for GitHub Pages:

1. Push to the `main` branch (or your configured branch)
2. Enable GitHub Pages in repository settings
3. Select the branch and root folder
4. Your site will be live at `https://philtremblay.github.io`

The `.nojekyll` file ensures GitHub Pages serves your files correctly.

### Self-Hosting

For self-hosting on your own server:

1. **Simple HTTP Server**:
   ```bash
   # Python
   python -m http.server 8000

   # Node.js
   npx serve
   ```

2. **Nginx**:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /path/to/philtremblay.github.io;
       index index.html;

       location / {
           try_files $uri $uri/ =404;
       }
   }
   ```

3. **Apache**:
   - Simply copy files to your web root
   - Ensure `.htaccess` is configured if needed

## Performance

This website is optimized for performance:

- **No build step required** - pure static files
- **Minimal CSS/JS** - under 10KB combined (before gzip)
- **No external dependencies** - no CDN requests
- **Lazy loading** - images and animations load on demand
- **Perfect Lighthouse scores** - 100/100 possible

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development

To work on this site locally:

```bash
# Clone the repository
git clone https://github.com/philtremblay/philtremblay.github.io.git
cd philtremblay.github.io

# Serve locally
python -m http.server 8000
# or
npx serve

# Open http://localhost:8000
```

## License

© 2025 Philippe Tremblay. All rights reserved.

## Contact

- LinkedIn: [philippe-tremblay-36219485](https://www.linkedin.com/in/philippe-tremblay-36219485/)
- GitHub: [@philtremblay](https://github.com/philtremblay)
- Cycling: [Messo Rem Club Cycliste](https://www.instagram.com/messoremclubcycliste/)
