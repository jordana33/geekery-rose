# Geekery Rose Planning Document

## Project Overview

A photo-heavy blog for documenting creative hobby projects (sewing, embroidery, crochet, beading, etc.) hosted on GitHub Pages using native web components, semantic HTML, and minimal dependencies.

#blog 

---
## Working with claude preferences
- do NOT jump ahead and make additional anticipated changes.
- I prefer to work in discrete steps.
- Do NOT use root-relative paths (e.g. `/js/foo.js`, `/styles/bar.css`). The site is deployed to GitHub Pages under a subpath (`/geekery-rose/`), so absolute paths break in production. Always use relative paths (e.g. `js/foo.js` from root, `../js/foo.js` from `posts/`).

## Local Development Server

To preview the site locally, use:

```bash
npx serve . -p 8080
```

Then open the Codespaces forwarded URL in the browser. The URL format is:
`https://<codespace-name>-8080.app.github.dev`

- The sample post is at: `https://<codespace-name>-8080.app.github.dev/posts/sample-post.html`
- Do NOT use `python3 -m http.server` — it has not been reliable in this environment.
- Do NOT use `http://localhost:8080` — this project runs in GitHub Codespaces where ports are forwarded via `*.app.github.dev`.
## Core Requirements

### v1 Features
-  Multi-craft type tagging (posts can have multiple types)
-  Multi-post project grouping with landing pages
- Chronological blog view (traditional date-based browsing)
-  Image lightbox/modal for full-size viewing
-  RSS feed generation
-  Markdown-based content authoring
-  Option to embed raw HTML in posts
-  Theme support via CSS custom properties
- Post update changelog (visible history of revisions with dates and notes)

### Future Features (Architecture Support)
-  Search functionality (data structured to support this)
- Comments system (space in UI/architecture)
- Image gallery component
- Additional metadata (materials, difficulty, time, etc.)

---

## File & Folder Structure

```
geekery-rose/
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ index.html                 # Homepage
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ blog.html                  # Chronological post list
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ projects.html              # All projects overview
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ about.html                 # About page
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ styles/
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ base.css              # Reset, typography, base styles
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ themes.css            # Theme custom properties
Ã¢â€â€š   Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ components.css        # Shared component styles
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ components/
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ blog-post.js          # Post display component
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ post-card.js          # Post preview card
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ project-header.js     # Project landing page header
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ image-lightbox.js     # Full-size image viewer
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ tag-filter.js         # Filter posts by craft type
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ post-list.js          # Paginated post listing
Ã¢â€â€š   Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ rss-feed.js           # RSS feed link component
â”‚   â””â”€â”€ comment-thread.js     # Comment display (future)
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ posts/
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ 2024-12-01-cozy-cardigan-part-1.html
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ 2024-12-15-cozy-cardigan-part-2.html
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ 2025-01-05-cozy-cardigan-finished.html
Ã¢â€â€š   Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ 2024-11-20-embroidered-tote.html
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ projects/
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ cozy-cardigan/
Ã¢â€â€š   Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ index.html        # Project landing page
Ã¢â€â€š   Ã¢â€â€š   Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ project.json      # Project metadata
Ã¢â€â€š   Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ embroidered-tote/
Ã¢â€â€š       Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ index.html
Ã¢â€â€š       Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ project.json
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ images/
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ posts/
Ã¢â€â€š   Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ 2024-12-01/       # Images for specific post
Ã¢â€â€š   Ã¢â€â€š   Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ 2024-12-15/
Ã¢â€â€š   Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ projects/
Ã¢â€â€š       Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ cozy-cardigan/    # Project hero images
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ data/
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ posts.json            # Generated post index
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ projects.json         # Generated project index
â”‚   â”œâ”€â”€ tags.json             # Generated tag index
â”‚   â””â”€â”€ comments/             # Exported comments (future)
â”‚       â””â”€â”€ post-slug.json    # Comments per post
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ feed.xml                  # Generated RSS feed
Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ scripts/
    â”œâ”€â”€ build.js              # Build script to generate indexes/RSS
    â””â”€â”€ export-comments.js    # Export comments from GitHub (future)
```

---

## Data Model

### Post Structure (HTML with Meta Tags)

Posts are HTML files with metadata in `<meta>` tags:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cozy Cardigan - Part 1: Planning & Swatching</title>
  
  <!-- Post metadata -->
  <meta property="post:slug" content="cozy-cardigan-part-1">
  <meta property="post:date" content="2024-12-01">
  <meta property="post:project" content="cozy-cardigan">
  <meta property="post:project-sequence" content="1">
  <meta property="post:craft-types" content="crochet,knitting">
  <meta property="post:summary" content="Starting my first cardigan project">
  <meta property="post:featured-image" content="/images/posts/2024-12-01/hero.jpg">
  
  <!-- Post update changelog: add one tag per update, oldest first -->
  <!-- Format: YYYY-MM-DD|Human readable description of what changed -->
  <!-- <meta property="post:update" content="2025-03-15|Added Bluesky and Mastodon accounts"> -->
  <!-- <meta property="post:update" content="2025-06-01|Removed Twitter, updated Tumblr link"> -->
  
  <link rel="stylesheet" href="/styles/base.css">
  <link rel="stylesheet" href="/styles/themes.css">
  <script type="module" src="/components/image-lightbox.js"></script>
</head>
<body>
  <article class="blog-post">
    <header>
      <h1>Cozy Cardigan - Part 1: Planning & Swatching</h1>
      <time datetime="2024-12-01">December 1, 2024</time>
    </header>
    
    <section>
      <h2>Materials</h2>
      <p>Content here in HTML...</p>
      
      <img src="/images/posts/2024-12-01/yarn.jpg" 
           alt="Yarn choices" 
           data-lightbox="true">
    </section>
    
    <footer class="post-footer">
      <section class="comments" id="comments">
        <!-- Comments will be added here in the future -->
        <!-- See Comments System section for implementation details -->
      </section>
    </footer>
  </article>
</body>
</html>
```

### Writing Workflow

1. **Write in markdown** using Obsidian
2. **Export to HTML** using editor's conversion feature
3. **Add meta tags** to the `<head>` for post metadata
4. **Enhance HTML** by adding web components as needed
5. **Save** as `posts/YYYY-MM-DD-slug.html`
```

### Project Metadata (JSON)

```json
{
  "id": "cozy-cardigan",
  "title": "Cozy Cardigan",
  "description": "A long-form project creating my first cardigan from scratch",
  "craft-types": ["crochet", "knitting"],
  "start-date": "2024-12-01",
  "status": "in-progress",
  "hero-image": "/images/projects/cozy-cardigan/hero.jpg",
  "posts": [
    {
      "slug": "cozy-cardigan-part-1",
      "title": "Part 1: Planning & Swatching",
      "date": "2024-12-01"
    },
    {
      "slug": "cozy-cardigan-part-2",
      "title": "Part 2: Starting the Back Panel",
      "date": "2024-12-15"
    }
  ]
}
```

### Generated Posts Index (JSON)

```json
{
  "posts": [
    {
      "title": "Cozy Cardigan - Part 1",
      "slug": "cozy-cardigan-part-1",
      "date": "2024-12-01",
      "project": "cozy-cardigan",
      "project-sequence": 1,
      "craft-types": ["crochet", "knitting"],
      "summary": "Starting my first cardigan project...",
      "featured-image": "/images/posts/2024-12-01/hero.jpg"
    }
  ]
}
```

---

## Web Components Architecture

### 1. `<blog-post>` Component
**Purpose:** Loads and displays a complete HTML blog post

**Attributes:**
- `slug` - Post identifier (loads `/posts/{slug}.html`)
- `data-layout` - Optional layout override (default, wide, custom)

**Features:**
- Fetches HTML file from `/posts/` directory
- Extracts and displays metadata from meta tags
- Initializes any web components within the post content
- Shows project breadcrumb if part of a project
- Displays craft type badges from metadata
- Related posts section based on tags
- Renders update changelog if `post:update` tags are present (shown below the post header)
- Shows "Published [date] · Last updated [date]" in the byline when updates exist

**Shadow DOM:** No (allows post content to inherit global styles)

**Usage:**
```html
<blog-post slug="cozy-cardigan-part-1"></blog-post>
```

**Implementation Note:** 
Component fetches the HTML file and can either:
- Insert the entire `<body>` content directly
- Or extract just the `<article>` element for cleaner integration

```html
<blog-post slug="cozy-cardigan-part-1"></blog-post>
```

### 2. `<post-card>` Component
**Purpose:** Preview card for post lists

**Attributes:**
- `title` - Post title
- `date` - Publication date
- `last-updated` - Date of most recent update (optional; shown as small "Updated" badge on card)
- `summary` - Brief description
- `image` - Featured image URL
- `href` - Link to full post
- `craft-types` - Comma-separated list

**Features:**
- Lazy load images
- Responsive card layout
- Hover effects
- Craft type badges

**Shadow DOM:** Yes (self-contained styling)

```html
<post-card 
  title="Cozy Cardigan - Part 1"
  date="2024-12-01"
  summary="Starting my first cardigan..."
  image="/images/posts/2024-12-01/hero.jpg"
  href="/posts/cozy-cardigan-part-1.html"
  craft-types="crochet,knitting">
</post-card>
```

### 3. `<project-header>` Component
**Purpose:** Header for project landing pages

**Attributes:**
- `project-id` - Project identifier
- `title` - Project name
- `description` - Project description
- `status` - in-progress, completed, paused

**Features:**
- Hero image display
- Status badge
- Project timeline
- Craft type badges
- Link to first post

**Shadow DOM:** No (allow theme styling)

```html
<project-header 
  project-id="cozy-cardigan"
  title="Cozy Cardigan"
  status="in-progress">
</project-header>
```

### 4. `<image-lightbox>` Component
**Purpose:** Full-screen image viewer with navigation

**Features:**
- Click any post image to open lightbox
- Keyboard navigation (arrow keys, ESC)
- Touch/swipe support for mobile
- Close button
- Image counter (3 of 12)
- Optional captions from alt text

**Shadow DOM:** Yes (overlay needs isolation)

**Usage:**
```javascript
// Automatically activated by clicking images with data-lightbox attribute
<img src="small.jpg" data-lightbox="large.jpg" alt="My project">
```

### 5. `<tag-filter>` Component
**Purpose:** Filter posts by craft type

**Attributes:**
- `tags` - Available tags (from data/tags.json)
- `active` - Currently selected tag(s)

**Features:**
- Multi-select support
- Shows post count per tag
- Updates URL params
- Emits custom events for filtering

**Shadow DOM:** No (allow theme styling)

```html
<tag-filter tags='["crochet","embroidery","sewing","beading"]'></tag-filter>
```

### 6. `<post-list>` Component
**Purpose:** Paginated, filterable list of posts

**Attributes:**
- `source` - JSON data source URL
- `filter-tags` - Active tag filters
- `sort` - Sort order (date-desc, date-asc)
- `per-page` - Posts per page (default 10)

**Features:**
- Lazy load posts as user scrolls
- Filter by tags
- Responsive grid/list layout
- Loading states

**Shadow DOM:** No (uses <post-card> components)

```html
<post-list 
  source="/data/posts.json"
  filter-tags="crochet"
  sort="date-desc">
</post-list>
```

---

## CSS Custom Properties Architecture

### Theme Structure

- implemented see code for details

### Decorative Content

- Unicode symbols used for decoration (e.g. `--flourish-content: "✦  ✦  ✦"`) are defined as custom properties in `:root` in `base.css` and injected via `::after` pseudo-elements — no icon fonts or images


### Component Usage Example

```css
/* components/post-card.js internal styles */

:host {
  display: block;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: var(--space-md);
  transition: transform var(--transition-base),
              box-shadow var(--transition-base);
}

:host(:hover) {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.title {
  color: var(--color-text-primary);
  font-family: var(--font-family-heading);
  margin-bottom: var(--space-sm);
}
```

---

## Build Process

### Purpose
Generate static JSON indexes and RSS feed by scanning HTML post files.

### Build Script (`scripts/build.js`)

**Approach:** HTML-first with editor-based markdown conversion
- Posts are written as HTML files (converted from markdown using external editors)
- Build script extracts metadata from `<meta>` tags
- No markdown parsing needed
- Zero external dependencies required

**Responsibilities:**
1. Scan all HTML files in `/posts/`
2. Extract metadata from `<meta>` tags in each file
3. Generate `/data/posts.json` (all posts index)
4. Generate `/data/projects.json` (project groupings)
5. Generate `/data/tags.json` (tag usage counts with post counts)
6. Generate `/feed.xml` (RSS 2.0 feed)
7. Extract and collate `post:update` tags into a changelog array per post

**Dependencies:**
- **NONE** - Uses only built-in Node.js APIs:
  - `fs` - File system operations
  - `path` - Path manipulation
  - Built-in string parsing for HTML meta tags
  - `JSON.stringify()` for generating JSON files
  - Template strings for generating XML

**Example Build Script Logic:**

```javascript
// scripts/build.js (simplified example)
import fs from 'fs';
import path from 'path';

// Read all HTML files from /posts
const postsDir = './posts';
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.html'));

const posts = files.map(filename => {
  const content = fs.readFileSync(path.join(postsDir, filename), 'utf-8');
  
  // Extract meta tags (simple regex parsing)
  const getMeta = (name) => {
    const match = content.match(new RegExp(`<meta property="post:${name}" content="([^"]+)"`));
    return match ? match[1] : null;
  };
  
  return {
    slug: getMeta('slug'),
    title: content.match(/<title>([^<]+)<\/title>/)?.[1],
    date: getMeta('date'),
    project: getMeta('project'),
    craftTypes: getMeta('craft-types')?.split(',') || [],
    summary: getMeta('summary'),
    featuredImage: getMeta('featured-image'),
    // Extract all post:update tags (there may be multiple)
    updates: [...content.matchAll(/<meta property="post:update" content="([^"]+)"/g)]
      .map(m => {
        const [date, ...rest] = m[1].split('|');
        return { date: date.trim(), note: rest.join('|').trim() };
      })
      .sort((a, b) => new Date(a.date) - new Date(b.date))
  };
});

// Sort by date (newest first)
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

// Generate posts.json
fs.writeFileSync('./data/posts.json', JSON.stringify({ posts }, null, 2));

// Generate tags.json (count craft types)
const tagCounts = {};
posts.forEach(post => {
  post.craftTypes.forEach(tag => {
    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
  });
});

const tags = Object.entries(tagCounts).map(([name, count]) => ({ name, count }));
fs.writeFileSync('./data/tags.json', JSON.stringify({ tags }, null, 2));

// Generate RSS feed (feed.xml)
const rssItems = posts.map(post => `
  <item>
    <title>${post.title}</title>
    <link>https://username.github.io/posts/${post.slug}.html</link>
    <description>${post.summary}</description>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <guid>https://username.github.io/posts/${post.slug}.html</guid>
    ${post.craftTypes.map(tag => `<category>${tag}</category>`).join('\n    ')}
  </item>
`).join('');

const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>My Geekery Rose</title>
    <link>https://username.github.io/</link>
    <description>Creative hobby projects</description>
    ${rssItems}
  </channel>
</rss>`;

fs.writeFileSync('./feed.xml', rssFeed);

console.log(`Built: ${posts.length} posts, ${tags.length} tags`);
```

**Run Options:**
```bash
# Manual build
node scripts/build.js

# Watch mode during development
node scripts/build.js --watch

# GitHub Actions on push
# (configured in .github/workflows/deploy.yml)
```

### Example Build Output

**posts.json:**
```json
{
  "posts": [...],
  "generated": "2024-12-11T10:30:00Z",
  "count": 24
}
```

**projects.json:**
```json
{
  "projects": [
    {
      "id": "cozy-cardigan",
      "title": "Cozy Cardigan",
      "post-count": 3,
      "posts": [...]
    }
  ]
}
```

**tags.json:**
```json
{
  "tags": [
    {"name": "crochet", "count": 12},
    {"name": "embroidery", "count": 8},
    {"name": "sewing", "count": 6}
  ]
}
```

---

## Routing & Navigation

### URL Structure

```
/                              # Homepage (recent posts)
/blog.html                     # All posts chronologically
/projects.html                 # All projects overview
/posts/cozy-cardigan-part-1.html  # Individual post
/projects/cozy-cardigan/       # Project landing page
/tags/crochet.html             # Posts filtered by tag
/about.html                    # About page
/feed.xml                      # RSS feed
```

### Navigation Implementation

**Client-side routing:** Not needed (GitHub Pages serves static HTML)

**Navigation patterns:**
- Main nav: Home, Blog, Projects, About
- Post nav: Previous/Next in chronological order
- Project nav: All posts in project sequence
- Tag nav: Filter by craft type
- Breadcrumbs: Home > Projects > Cozy Cardigan > Part 1

---

## Search Architecture (Future)

### Preparation Now
Structure data to support client-side search later:

**Search Index (future generation):**
```json
{
  "posts": [
    {
      "slug": "cozy-cardigan-part-1",
      "title": "Cozy Cardigan - Part 1",
      "content": "Full text of post...",
      "tags": ["crochet"],
      "searchable": "cozy cardigan part planning swatching..."
    }
  ]
}
```

**Search Implementation (future):**
- Client-side library: Lunr.js or Fuse.js
- Search component: `<blog-search>`
- Index loaded on demand (not on every page)

---

## RSS Feed

### Feed Structure (RSS 2.0)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>My Geekery Rose</title>
    <link>https://username.github.io/geekery-rose/</link>
    <description>Documenting my creative hobby projects</description>
    <atom:link href="https://username.github.io/geekery-rose/feed.xml" 
               rel="self" type="application/rss+xml" />
    
    <item>
      <title>Cozy Cardigan - Part 1: Planning &amp; Swatching</title>
      <link>https://username.github.io/geekery-rose/posts/cozy-cardigan-part-1.html</link>
      <description>Starting my first cardigan project...</description>
      <pubDate>Fri, 01 Dec 2024 00:00:00 GMT</pubDate>
      <guid>https://username.github.io/geekery-rose/posts/cozy-cardigan-part-1.html</guid>
      <category>crochet</category>
      <category>knitting</category>
      <enclosure url="https://username.github.io/geekery-rose/images/posts/2024-12-01/hero.jpg" 
                 type="image/jpeg" />
    </item>
    
  </channel>
</rss>
```

### RSS Component

```html
<!-- In site header -->
<link rel="alternate" type="application/rss+xml" 
      title="My Geekery Rose" href="/feed.xml">

<!-- Visual RSS link -->
<a href="/feed.xml" class="rss-link">
  <svg><!-- RSS icon --></svg>
  Subscribe via RSS
</a>
```

---


## Comments System (Future Implementation)

### Chosen Approach: Giscus + GitHub Discussions

When ready to add comments, the blog will use [Giscus](https://giscus.app/), which leverages GitHub Discussions as a backend. This maintains the zero-dependency, static-site philosophy while enabling community interaction.

### Why Giscus?

Ã¢Å“â€¦ **Zero maintenance** - GitHub handles all the backend infrastructure  
Ã¢Å“â€¦ **Data ownership** - Comments stored in your GitHub repository  
Ã¢Å“â€¦ **Free forever** - No hosting costs or service fees  
Ã¢Å“â€¦ **Privacy-respecting** - No tracking or advertisements  
Ã¢Å“â€¦ **Markdown support** - Perfect for technical/craft discussions  
Ã¢Å“â€¦ **Easy removal** - Just remove a `<script>` tag if you change your mind  
Ã¢Å“â€¦ **Exportable** - Full access via GitHub GraphQL API  

### Implementation Steps (When Ready)

**1. Enable GitHub Discussions**
- Turn on Discussions in repository settings
- Create a "Comments" category

**2. Set up Giscus**
- Visit [giscus.app](https://giscus.app/)
- Configure settings (repo, category, theme)
- Copy generated `<script>` tag

**3. Add to Post Template**
```html
<article class="blog-post">
  <!-- Post content -->
  
  <footer class="post-footer">
    <section class="comments" id="comments">
      <script src="https://giscus.app/client.js"
              data-repo="username/geekery-rose"
              data-repo-id="..."
              data-category="Comments"
              data-category-id="..."
              data-mapping="pathname"
              data-strict="0"
              data-reactions-enabled="1"
              data-emit-metadata="0"
              data-input-position="bottom"
              data-theme="light"
              data-lang="en"
              crossorigin="anonymous"
              async>
      </script>
    </section>
  </footer>
</article>
```

**4. Style the Comments Section**
```css
.comments {
  margin-top: var(--space-xl);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--color-border);
}

.comments h3 {
  font-family: var(--font-family-heading);
  margin-bottom: var(--space-md);
}

/* Dark theme support */
[data-theme="dark"] .giscus {
  color-scheme: dark;
}
```

### Future: Export and Self-Host Comments

If you ever want to migrate away from Giscus, all comments can be exported and displayed locally:

**1. Create Export Script** (`scripts/export-comments.js`)
```javascript
// Fetch comments via GitHub GraphQL API
import fs from 'fs';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const OWNER = 'your-username';
const REPO = 'geekery-rose';

async function fetchAllDiscussions() {
  const query = `
    query($owner: String!, $repo: String!) {
      repository(owner: $owner, name: $repo) {
        discussions(first: 100, categoryId: "...") {
          nodes {
            title
            body
            createdAt
            author { login avatarUrl }
            comments(first: 100) {
              nodes {
                body
                createdAt
                author { login avatarUrl }
                replies(first: 10) {
                  nodes {
                    body
                    createdAt
                    author { login avatarUrl }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
  
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables: { owner: OWNER, repo: REPO } })
  });
  
  return await response.json();
}

async function exportToJSON() {
  const data = await fetchAllDiscussions();
  
  data.repository.discussions.nodes.forEach(discussion => {
    // Extract post slug from discussion title
    const match = discussion.title.match(/\/posts\/(.+)\.html/);
    if (!match) return;
    
    const slug = match[1];
    const comments = discussion.comments.nodes.map(comment => ({
      id: comment.id,
      author: comment.author.login,
      avatar: comment.author.avatarUrl,
      body: comment.body,
      date: comment.createdAt,
      replies: comment.replies.nodes
    }));
    
    fs.writeFileSync(
      `./data/comments/${slug}.json`,
      JSON.stringify({ comments }, null, 2)
    );
  });
  
  console.log('Comments exported successfully');
}

exportToJSON();
```

**2. Create Comment Display Component** (`components/comment-thread.js`)
```javascript
class CommentThread extends HTMLElement {
  connectedCallback() {
    const slug = this.getAttribute('post-slug');
    this.loadComments(slug);
  }
  
  async loadComments(slug) {
    try {
      const response = await fetch(`/data/comments/${slug}.json`);
      const { comments } = await response.json();
      this.renderComments(comments);
    } catch (error) {
      // No comments yet
      this.innerHTML = '<p>No comments yet.</p>';
    }
  }
  
  renderComments(comments) {
    this.innerHTML = `
      <h3>Comments (${comments.length})</h3>
      ${comments.map(c => `
        <div class="comment">
          <div class="comment-header">
            <img src="${c.avatar}" alt="${c.author}" class="avatar">
            <strong>${c.author}</strong>
            <time datetime="${c.date}">${new Date(c.date).toLocaleDateString()}</time>
          </div>
          <div class="comment-body">${c.body}</div>
          ${c.replies.length ? `
            <div class="replies">
              ${c.replies.map(r => `
                <div class="comment reply">
                  <div class="comment-header">
                    <img src="${r.avatar}" alt="${r.author}" class="avatar">
                    <strong>${r.author}</strong>
                    <time datetime="${r.date}">${new Date(r.date).toLocaleDateString()}</time>
                  </div>
                  <div class="comment-body">${r.body}</div>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>
      `).join('')}
    `;
  }
}

customElements.define('comment-thread', CommentThread);
```

**3. Usage**
```html
<!-- In post HTML -->
<comment-thread post-slug="cozy-cardigan-part-1"></comment-thread>
```

### Comment Data Structure

```json
{
  "comments": [
    {
      "id": "DC_abc123",
      "author": "jane_crafter",
      "avatar": "https://avatars.githubusercontent.com/u/...",
      "body": "Love this project! What yarn weight did you use?",
      "date": "2024-12-15T10:30:00Z",
      "replies": [
        {
          "id": "DC_def456",
          "author": "blog_author",
          "avatar": "https://avatars.githubusercontent.com/u/...",
          "body": "Thanks! I used worsted weight (4).",
          "date": "2024-12-15T14:20:00Z"
        }
      ]
    }
  ]
}
```

### Running the Export

```bash
# Set your GitHub token
export GITHUB_TOKEN="ghp_your_token_here"

# Export all comments
node scripts/export-comments.js

# Or integrate with build script
node scripts/build.js --export-comments
```

### Migration Path

1. **Phase 1:** Start with Giscus (zero setup, works immediately)
2. **Phase 2:** Periodically export comments as backup (optional)
3. **Phase 3:** If ever needed, switch to self-hosted display using exported data

This approach gives you all the benefits of a hosted solution while maintaining full data ownership and the ability to migrate away at any time.

### Alternative Comment Options (Not Chosen)

**Utterances**
- Similar to Giscus but uses GitHub Issues instead of Discussions
- Issues feel less appropriate for comments than Discussions

**Disqus**
- Most popular third-party solution
- Free tier has ads and tracking
- No data ownership

**Commento**
- Privacy-focused, self-hosted option
- Requires backend server ($10/month)
- Against zero-dependency philosophy

**Static Forms â†’ Email**
- Use Formspree/Netlify Forms to collect comments via email
- Manually approve and add to HTML
- Very low engagement, high friction for commenters

---

## GitHub Actions Automation (Optional)

### Overview

GitHub Actions can automate the build process, eliminating the need to manually run `node scripts/build.js` after adding posts. This is especially useful when editing from mobile devices, GitHub.dev, or any environment where running terminal commands is inconvenient.

### Why Automate the Build?

**Benefits:**
- âœ… Never forget to run the build script
- âœ… Edit from GitHub.dev (web editor) without terminal access
- âœ… Simplify iPad/mobile workflow
- âœ… Automatic on every push
- âœ… No local Node.js required

**Tradeoffs:**
- Adds ~30 second delay after pushing (for Action to run)
- Uses GitHub Actions minutes (but well within free tier)
- Slightly more complex troubleshooting if build fails

### Implementation

Create `.github/workflows/build-and-deploy.yml`:

```yaml
name: Build and Deploy

on:
  push:
    branches: [main]
    paths:
      - 'posts/**'
      - 'scripts/build.js'

jobs:
  build:
    runs-on: ubuntu-latest
    
    permissions:
      contents: write
    
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Run build script
        run: node scripts/build.js
      
      - name: Check for changes
        id: check_changes
        run: |
          if git diff --quiet; then
            echo "changes=false" >> $GITHUB_OUTPUT
          else
            echo "changes=true" >> $GITHUB_OUTPUT
          fi
      
      - name: Commit and push if changed
        if: steps.check_changes.outputs.changes == 'true'
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git add data/ feed.xml
          git commit -m "Auto-build: Update data files and RSS feed"
          git push
```

### How It Works

1. **Trigger:** Runs automatically when you push to `main` branch
2. **Filter:** Only runs if files in `posts/` or `build.js` changed (saves Actions minutes)
3. **Build:** Runs `node scripts/build.js` to generate data files and RSS
4. **Commit:** If files changed, commits them back to the repository
5. **Deploy:** GitHub Pages automatically deploys the updated site

### Workflow With Actions Enabled

**Your simplified workflow:**
```
1. Write markdown in Obsidian
2. Export to HTML
3. Add template structure and metadata
4. Commit and push (via git, Working Copy, or GitHub.dev)
5. âœ¨ Build happens automatically!
6. Wait ~1 minute, site is updated
```

**No need to:**
- Run `node scripts/build.js` manually
- Have Node.js installed locally
- Use terminal at all

### Setup Instructions

1. **Create the workflow file:**
   ```bash
   mkdir -p .github/workflows
   # Create build-and-deploy.yml with the content above
   ```

2. **Commit and push:**
   ```bash
   git add .github/workflows/build-and-deploy.yml
   git commit -m "Add GitHub Actions auto-build"
   git push
   ```

3. **Verify it works:**
   - Go to your repository â†’ "Actions" tab
   - You should see a workflow run
   - Check that data files were updated

### Troubleshooting

**Action fails with "permission denied":**
- Go to Settings â†’ Actions â†’ General
- Under "Workflow permissions", select "Read and write permissions"
- Save

**Build succeeds but no commit:**
- This is normal if data files didn't change
- Check the Action logs to see "changes=false"

**Want to skip the Action for a commit:**
```bash
git commit -m "Update about page [skip ci]"
```

The `[skip ci]` in the commit message tells GitHub Actions not to run.

### Cost Consideration

**GitHub Actions Free Tier:**
- 2,000 minutes/month for private repos
- Unlimited for public repos
- Each build takes ~30 seconds

**For a blog:** Even pushing 100 times/month = 50 minutes used. You'll stay well within the free tier.

### Alternative: Manual Build Script

If you prefer manual control or want to avoid Actions, you can continue running the build script locally as originally designed. This is perfectly valid and keeps things simpler.

The choice is yours:
- **Manual:** More control, instant feedback, simpler
- **Automated:** More convenient, works from any device, no terminal needed

---

## Implementation Phases

### Phase 1: Foundation (Week 1-2) #next-action 
- [x] Set up GitHub Pages repository
- [x] Create base HTML structure
- [x] Implement CSS custom properties system
- [ ] Add sample post summary card to index.html (recent posts) and blog.html (full list)
- [x] Build `<site-header>` and `<site-footer>` components to eliminate HTML duplication across pages (active nav link set dynamically via `location.pathname`; absorbs `js/theme-toggle.js`)
- [ ] Add theme persistence via `localStorage` in `site-header.js` (restore saved theme on load, save on toggle)
- [ ] Build core components: `<post-card>`, `<post-list>`
- [ ] Create basic homepage and blog list
- [x] styles are in-lined in sample blog post
- [ ] research should I import fonts in css or on each page
- [x] multiple spacing type/ spacing systems in themes vs base - do I want to use clamp?
- [x] classes on index page don't use BEM - (is bem specified in plan?)
- [x] sample-post-2 do I want the remaining inlined style items?  If so add to base.css
- [X] reduce spacing on sections (do I want it to and bottom?)

### Phase 2: Content System (Week 3)
- [ ] Write build script for JSON generation
- [ ] Test markdown post creation workflow
- [ ] Implement RSS feed generation
- [ ] Create first few test posts

### Phase 3: Projects (Week 4)
- [ ] Add post list to index page
- [ ] Implement `<project-header>` component
- [ ] Create project landing page template
- [ ] Test multi-post project grouping
- [ ] Add project navigation

### Phase 4: Images (Week 5)
- [ ] Build `<image-lightbox>` component
- [ ] Implement lazy loading
- [ ] Test with photo-heavy posts
- [ ] Optimize image delivery

### Phase 5: Filtering & Tags (Week 6)
- [ ] Build `<tag-filter>` component
- [ ] Implement tag-based filtering
- [ ] Create tag archive pages
- [ ] Test multi-tag selection

### Phase 6: Polish (Week 7)
- [ ] Responsive design testing
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Cross-browser testing

### Phase 7: Launch Prep (Week 8)
- [ ] Write real content
- [ ] Custom domain setup (optional)
- [ ] Analytics setup (optional)
- [ ] Final QA

---

## Development Guidelines

### Content Creation
- Write posts in markdown using external editor for pleasant authoring
- Export to HTML and add metadata via `<meta>` tags
- Enhance HTML with web components as needed
- Keep post HTML semantic and well-structured
- Use consistent metadata format across all posts

### HTML Practices
- Always use semantic HTML5 elements
- Validate HTML with W3C validator
- Include proper meta tags (description, OG tags for sharing)
- Use ARIA labels where needed for accessibility

### CSS Practices
- Use CSS custom properties for all themeable values
- Mobile-first responsive design
- Avoid !important declarations
- Use logical properties (margin-inline, padding-block)
- Single-direction spacing: prefer `margin-block-start` over `margin-block-end` — spacing always comes from the top so there is only one place to look when debugging layout

### JavaScript Practices
- Use modern ES modules (`import`/`export`)
- Keep components focused and single-purpose
- Use Custom Elements v1 API
- Emit custom events for component communication
- Avoid framework dependencies

### Performance
- Lazy load images below the fold
- Use appropriate image formats (WebP with JPEG fallback)
- Minimize CSS/JS bundle size
- Consider CSS containment for components

### Accessibility
- Keyboard navigation for all interactive elements
- Proper focus management (especially in lightbox)
- Alt text for all images
- Color contrast ratio 4.5:1 minimum
- Test with screen readers

---

## Example Post Creation Workflow

### Method 1: Using Markdown Editor (Recommended)

1. **Write in your markdown editor**
   ```markdown
   # Embroidered Pillowcase Set
   
   ## Materials
   
   - White linen fabric
   - DMC embroidery floss in blues and greens
   - Transfer paper
   
   ![Fabric laid out](../images/posts/2024-12-11/fabric.jpg)
   
   ## Process
   
   I started by transferring the pattern...
   ```

2. **Export to HTML** using your editor's export function

3. **Add metadata to `<head>`**:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Embroidered Pillowcase Set</title>
     
     <!-- Add these metadata tags -->
     <meta property="post:slug" content="embroidered-pillowcase">
     <meta property="post:date" content="2024-12-11">
     <meta property="post:craft-types" content="embroidery">
     <meta property="post:summary" content="Hand-embroidered wildflower design on linen">
     <meta property="post:featured-image" content="/images/posts/2024-12-11/hero.jpg">
     
     <link rel="stylesheet" href="/styles/base.css">
     <link rel="stylesheet" href="/styles/themes.css">
   </head>
   <body>
     <!-- Exported markdown content here -->
   </body>
   </html>
   ```

4. **Enhance with web components** (optional):
   ```html
   <!-- Replace a regular image with lightbox functionality -->
   <img src="/images/posts/2024-12-11/fabric.jpg" 
        alt="Fabric laid out" 
        data-lightbox="true">
   ```

5. **Save as** `posts/2024-12-11-embroidered-pillowcase.html`

6. **Add images** to `/images/posts/2024-12-11/`

7. **Run build script**:
   ```bash
   node scripts/build.js
   ```
   This generates:
   - `data/posts.json` (updated with new post)
   - `data/tags.json` (updated tag counts)
   - `feed.xml` (updated RSS feed)

8. **Preview locally**:
   ```bash
   python -m http.server 8000
   # Visit http://localhost:8000/posts/2024-12-11-embroidered-pillowcase.html
   ```

9. **Deploy**:
   ```bash
   git add .
   git commit -m "Add embroidered pillowcase post"
   git push origin main
   ```

### Method 2: Write HTML Directly

If you prefer to write HTML from scratch, skip the markdown step and create the HTML file directly with proper structure and metadata tags.

### Metadata Template

Use this template for consistent metadata across posts:

```html
<meta property="post:slug" content="url-friendly-slug">
<meta property="post:date" content="YYYY-MM-DD">
<meta property="post:craft-types" content="tag1,tag2,tag3">
<meta property="post:summary" content="Brief description for previews">
<meta property="post:featured-image" content="/images/posts/YYYY-MM-DD/hero.jpg">

<!-- Optional: add one tag per update, oldest first -->
<!-- Format: YYYY-MM-DD|Human-readable description of what changed -->
<!-- <meta property="post:update" content="2025-03-15|Added Bluesky and Mastodon accounts"> -->
<!-- <meta property="post:update" content="2025-06-01|Removed Twitter, updated Tumblr link"> -->

<!-- Optional for multi-post projects -->
<meta property="post:project" content="project-slug">
<meta property="post:project-sequence" content="1">
```

---

## Future Enhancements

### Short Term
- [ ] GitHub Actions automation (see [GitHub Actions Automation](#github-actions-automation-optional) section for detailed plan)
- [ ] Dark mode toggle button
- [ ] Print stylesheet
- [ ] Post sharing buttons
- [ ] Related posts algorithm

### Medium Term
- [ ] Search functionality
- [ ] Comments system (see [Comments System](#comments-system-future-implementation) section for detailed plan)
- [ ] Image gallery component
- [ ] Draft post preview system

### Long Term
- [ ] Progressive Web App features
- [ ] Offline support
- [ ] Advanced metadata (materials, difficulty, time)
- [ ] Project progress tracking
- [ ] Integration with pattern libraries

---

## Resources & References

### Markdown Editors
- [VS Code](https://code.visualstudio.com/) - Free, with markdown extensions
- [Typora](https://typora.io/) - WYSIWYG markdown editor ($14.99)
- [MarkText](https://marktext.app/) - Free, open-source alternative
- [Dillinger](https://dillinger.io/) - Free online converter
- [StackEdit](https://stackedit.io/) - Online markdown editor

**iPad-Specific Editors:**
- [iA Writer](https://ia.net/writer) - Premium markdown editor for iOS ($50)
- [Drafts](https://getdrafts.com/) - Quick capture with automation (Free/$19.99/year)
- [Ulysses](https://ulysses.app/) - Long-form writing and organization ($5.99/month)
- [1Writer](https://1writerapp.com/) - Markdown with JavaScript extensions ($5.99)

### Development Environments
- [GitHub Codespaces](https://github.com/features/codespaces) - Cloud-based VS Code (Free tier available)
- [GitHub.dev](https://github.dev) - Web-based VS Code (Free, press "." on any repo)
- [Working Copy](https://workingcopy.app/) - Git client for iOS with terminal ($19.99)

### Web Components
- [MDN: Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Custom Elements v1 Spec](https://html.spec.whatwg.org/multipage/custom-elements.html)

### GitHub Pages
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

### GitHub Actions
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [GitHub Actions for GitHub Pages](https://github.com/marketplace/actions/github-pages-action)

### RSS
- [RSS 2.0 Specification](https://www.rssboard.org/rss-specification)
- [RSS Best Practices](https://www.rssboard.org/rss-profile)

### Comments
- [Giscus](https://giscus.app/) - GitHub Discussions-powered comments
- [GitHub GraphQL API](https://docs.github.com/en/graphql) - For exporting comments
- [Utterances](https://utteranc.es/) - Alternative using GitHub Issues

### Accessibility
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [A11y Project](https://www.a11yproject.com/)

### Tools
- [Prettier](https://prettier.io/) - Code formatter
- [HTML Validator](https://validator.w3.org/) - Check HTML validity

---
## workflow commands and links

github pages URL
https://jordana33.github.io/geekery-rose/

repository -

### codespaces - 
https://github.com/codespaces
npx live-server

---

## Notes & Decisions Log

### Why No Framework?
- **Learning goal:** Deep understanding of web platform APIs
- **Performance:** Zero framework overhead
- **Longevity:** Standards-based code won't break with framework updates
- **Simplicity:** No build complexity for the runtime code

### Why No Build Dependencies?
- **Simplicity:** Build script uses only Node.js built-ins
- **Reliability:** No dependency updates or security vulnerabilities
- **Educational:** Understanding the full process without abstractions
- **Maintenance:** No package.json maintenance burden
- **Speed:** Faster build times without dependency resolution

### Why Build Script?
- **Markdown to HTML conversion:** Pre-generate HTML for better performance and SEO
- **Convenience:** Easier to work with markdown than manually writing HTML
- **RSS generation:** Can't be done purely client-side
- **Index generation:** Creates searchable JSON indexes
- **Future-proofing:** Can extend with search indexing, sitemap generation, image optimization

### Why Separate Projects and Posts?
- **User experience:** Some people want to follow a project story, others want chronological updates
- **Flexibility:** A post can stand alone or be part of a larger narrative
- **Discovery:** Multiple entry points to content

### Why HTML-First with Editor Conversion?
- **Zero dependencies:** No build-time dependencies for markdown parsing
- **Pleasant authoring:** Still get markdown writing experience via editors
- **Full control:** Manual HTML editing when needed for custom layouts
- **Performance:** HTML served directly, no conversion overhead
- **SEO:** Complete, valid HTML from the start
- **Simplicity:** Build script only handles metadata extraction and index generation
- **Flexibility:** Can embed web components exactly where needed

### Why Giscus for Comments (When Ready)?
- **Zero backend:** Leverages GitHub Discussions - no server to maintain
- **Data ownership:** All comments stored in your GitHub repository
- **Free forever:** No hosting costs or service fees
- **Exportable:** Full access via GitHub GraphQL API - can migrate anytime
- **Privacy-respecting:** No tracking, no ads, open source
- **Markdown support:** Perfect for technical craft discussions
- **Reversible:** Just remove a script tag if you change your mind
- **Static-friendly:** Aligns with zero-dependency philosophy (runtime-only dependency)

### Why Optional GitHub Actions Automation?
- **iPad/mobile-friendly:** Build without needing terminal access
- **Simplicity:** Never forget to run the build script
- **Flexibility:** Works with GitHub.dev, Working Copy, or any git client
- **Free tier sufficient:** ~30 seconds per build, unlimited for public repos
- **Optional:** Can always run build script manually if preferred
- **No vendor lock-in:** Just a workflow file, easy to remove
- **Supports varied workflows:** Desktop developers, mobile-first, or hybrid approaches

### Why a Changelog Array for Post Updates (vs. a Single Updated Date)?
- **Transparency:** Readers see exactly what changed and when, not just that something changed
- **Trust:** Living documents (e.g., resource lists, social follows) benefit from visible edit history
- **Reader UX:** A returning reader can see at a glance if anything is new since their last visit
- **Feed reader friendly:** Using `<lastBuildDate>` on updated RSS items resurfaces posts to subscribers
- **Minimal authoring overhead:** Adding one `<meta>` tag per update is very low friction
- **No external dependency:** Pure metadata approach, consistent with the rest of the system
### Which Markdown editor?
- Obsidian

---

## Questions to Revisit

- [ ] Should project landing pages be auto-generated or hand-crafted?
- [ ] How many posts per page in blog list?
- [ ] Should tags support hierarchies (e.g., "embroidery > cross-stitch")?
- [ ] Image optimization strategy (WebP conversion, responsive images)?
- [ ] Analytics needs (privacy-friendly options)?


---

## Content Storage Decision

**CHOSEN APPROACH:** HTML-first with editor-based markdown conversion

### How It Works:
1. Write posts in markdown using external editor (VS Code, Typora, MarkText)
2. Export/convert to HTML using editor's built-in functionality
3. Add metadata via `<meta>` tags in the HTML `<head>`
4. Manually enhance HTML with web components as needed
5. Save as `.html` file in `/posts/` directory
6. Build script extracts metadata from HTML files (no parsing dependencies)

### Why This Approach:
Ã¢Å“â€¦ **Zero dependencies** - Build script uses only Node.js built-ins
Ã¢Å“â€¦ **Pleasant authoring** - Markdown writing experience via editors
Ã¢Å“â€¦ **Full control** - Direct HTML editing when needed
Ã¢Å“â€¦ **Performance** - HTML served directly
Ã¢Å“â€¦ **Flexibility** - Can add web components anywhere
Ã¢Å“â€¦ **Simple build** - Just metadata extraction, no conversion

### Alternative Approaches (Not Chosen):

**Markdown with Build Dependencies:**
- Pros: Automated conversion, standard approach
- Cons: Requires external packages (marked, gray-matter)
- Why not: Want zero dependencies

**Direct HTML Authoring:**
- Pros: No conversion step needed
- Cons: Verbose, less pleasant to write
- Why not: Editor conversion gives best of both worlds

**SQLite Database:**
- Pros: Structured data, query capabilities
- Cons: Requires backend server, can't use GitHub Pages
- Why not: You don't enjoy backend work, want static hosting

**Custom Markdown Parser:**
- Pros: Zero dependencies, full control
- Cons: Significant development effort
- Why not: Editor conversion is simpler and works now

---

*This is a living document. Update as decisions are made and the project evolves.*
