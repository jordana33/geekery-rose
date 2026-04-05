# Geekery Rose — Claude Code directives

## Pathing
- Do NOT use root-relative paths (e.g. `/js/foo.js`, `/styles/bar.css`).
- The site deploys to GitHub Pages under a subpath (`/geekery-rose/`), so paths starting with `/` break in production.
- Always use relative paths: `js/foo.js` from the root, `../js/foo.js` from `posts/`, `../../js/foo.js` from deeper nesting.

## Working preferences
- Do NOT jump ahead and make additional anticipated changes.
- Work in discrete steps.

## Local dev server
```bash
npx serve . -p 8080
```
Access via the Codespaces forwarded URL: `https://<codespace-name>-8080.app.github.dev`
- Do NOT use `python3 -m http.server`
- Do NOT use `http://localhost:8080`
