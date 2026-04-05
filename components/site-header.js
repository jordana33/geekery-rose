// Resolve site root as one level up from components/ — update if this file moves.
const root = new URL('../', import.meta.url).href;

class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="site-header">
        <div class="container site-header__inner">

          <a href="${root}index.html" class="site-logo">Geekery <em>Rose</em></a>

          <nav aria-label="Main navigation" class="site-nav">
            <a href="${root}blog.html"              class="site-nav__link">Blog</a>
            <a href="${root}projects.html"         class="site-nav__link">Projects</a>
            <a href="${root}about.html"             class="site-nav__link">About</a>
            <a href="${root}posts/sample-post.html" class="site-nav__link">Sample Post</a>
            <a href="${root}feed.xml" class="nav-rss" aria-label="RSS feed">
              <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M2 2a1 1 0 0 0 0 2 9 9 0 0 1 9 9 1 1 0 0 0 2 0A11 11 0 0 0 2 2zm0 4a1 1 0 0 0 0 2 5 5 0 0 1 5 5 1 1 0 0 0 2 0A7 7 0 0 0 2 6zm0 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
              </svg>
            </a>
          </nav>

          <button class="theme-toggle" aria-label="Toggle dark mode">☾ Dark</button>

        </div>
      </header>
    `;

    const currentPath = window.location.pathname.replace(/\.html$/, '');
    this.querySelectorAll('.site-nav__link').forEach(link => {
      const linkPath = new URL(link.href).pathname.replace(/\.html$/, '');
      if (linkPath === currentPath) {
        link.setAttribute('aria-current', 'page');
      }
    });

    this.querySelector('.theme-toggle').addEventListener('click', () => {
      const html = document.documentElement;
      const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      this.querySelector('.theme-toggle').textContent = next === 'dark' ? '☀ Light' : '☾ Dark';
    });
  }
}

customElements.define('site-header', SiteHeader);
