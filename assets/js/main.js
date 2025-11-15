// Theme Management
class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'light';
    this.init();
  }

  init() {
    this.setTheme(this.theme);
    this.bindEvents();
  }

  setTheme(theme) {
    this.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.updateToggleButton();
  }

  toggleTheme() {
    const newTheme = this.theme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  updateToggleButton() {
    const button = document.querySelector('.theme-toggle');
    if (button) {
      button.innerHTML = this.theme === 'light' ? '🌙' : '☀️';
      button.setAttribute('aria-label', `Switch to ${this.theme === 'light' ? 'dark' : 'light'} mode`);
    }
  }

  bindEvents() {
    const button = document.querySelector('.theme-toggle');
    if (button) {
      button.addEventListener('click', () => this.toggleTheme());
    }
  }
}

// Smooth Scroll
class SmoothScroll {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offset = 80; // Header height
          const targetPosition = target.offsetTop - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }
}

// Intersection Observer for Animations
class AnimationObserver {
  constructor() {
    this.init();
  }

  init() {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Observe all sections and cards
    document.querySelectorAll('section, .project-card, .about-card').forEach(el => {
      observer.observe(el);
    });
  }
}

// Header Scroll Effect
class HeaderScroll {
  constructor() {
    this.header = document.querySelector('header');
    this.init();
  }

  init() {
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        this.header.classList.remove('scroll-up');
        return;
      }

      if (currentScroll > lastScroll && !this.header.classList.contains('scroll-down')) {
        // Scrolling down
        this.header.classList.remove('scroll-up');
        this.header.classList.add('scroll-down');
      } else if (currentScroll < lastScroll && this.header.classList.contains('scroll-down')) {
        // Scrolling up
        this.header.classList.remove('scroll-down');
        this.header.classList.add('scroll-up');
      }

      lastScroll = currentScroll;
    });
  }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
  new SmoothScroll();
  new AnimationObserver();
  new HeaderScroll();
});

// Prevent FOUC (Flash of Unstyled Content)
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
