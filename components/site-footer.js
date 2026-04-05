class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer">
        <div class="container site-footer__inner">
          <p>Geekery Rose &copy; 2026 &mdash; Made with yarn, stitches, and native web components</p>
          <a href="https://github.com/jordana33/geekery-rose" class="site-footer__source">View source on GitHub</a>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);
