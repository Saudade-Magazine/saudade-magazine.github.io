# Saudade Magazine

Welcome to the **Saudade Magazine** repository. This is an open-source, digital magazine built with [Astro](https://astro.build) and a custom responsive flipbook engine (`page-flip`).

This documentation is intended for **Authors** (contributing content) and **Maintainers** (managing the codebase).

---

## 🚀 Getting Started for Authors

If you want to contribute an article or an entire issue, follow this standard Git workflow:

1.  **Fork this Repository**: Click the "Fork" button on the top right of this page to create your own copy.
2.  **Clone your Fork**:
    ```bash
    git clone [https://github.com/YOUR_USERNAME/saudade-magazine.git](https://github.com/YOUR_USERNAME/saudade-magazine.git)
    cd saudade-magazine
    ```
3.  **Install Dependencies**:
    ```bash
    npm install
    ```
4.  **Run the Development Server**:
    ```bash
    npm run dev
    ```
    Your site will be live at `http://localhost:4321`.

---

## 📂 Project Structure & Naming Conventions

The magazine uses a unique **"Folder-as-Issue"** architecture.

### Directory Layout
```text
src/content/
└── issues/                  <-- ALL Magazine content lives here
    ├── vol-01/              <-- This folder represents ONE complete issue
    │   ├── 01-intro.md      <-- Articles are sorted by filename
    │   ├── 02-feature.md
    │   └── 03-poetry.md
    └── vol-02/
        ├── 01-editorial.md
        └── ...

### ⚠️ Crucial Naming Rules
1.  **Issue Folders:** Must use a consistent naming scheme (e.g., `vol-01`, `issue-jan-2026`). The folder name becomes the URL slug (e.g., `/issues/vol-01`).
2.  **File Sorting:** The flipbook engine stitches articles together based on **filename order**.
    * **Correct:** `01-intro.md`, `02-story.md`, `03-conclusion.md`
    * **Incorrect:** `intro.md`, `story.md` (Ordering will be unpredictable)

---

## 📝 Writing & Formatting

We use standard Markdown (or `.mdx`) with specific frontmatter fields to control the flipbook layout.

### Standard Frontmatter
Every file must start with this block:

```yaml
---
title: "The Article Title"
description: "A short summary for SEO."
date: 2026-02-01
---

### Page Breaks
The website is responsive. Text flows automatically from page to page.
However, if you want to **force** a page turn (e.g., to end a chapter or isolate an image), use the horizontal rule:

```markdown
Here is the end of the intro text.

---
## Chapter 2


## 🎨 Customization Guide

This project supports **Granular Customization**, allowing you to style a single article, a whole issue, or the entire site independently.

### Level 1: Individual Article Customization
*Target:* Specific styling for just **one** story (e.g., a "Noir" theme for a detective story).

Add these fields to your article's frontmatter:

```yaml
---
title: "Noir Detective Story"
customClass: "noir-theme"       # 1. Define a class name
customCSS: |                    # 2. Write CSS for that class
  .noir-theme {
    background-color: #111;
    color: #ddd;
    font-family: 'Courier New', monospace;
  }
  .noir-theme h1 {
    color: #ff0000;
  }
---
*Note: The `customClass` is automatically applied to every page div that contains this article's content.*

### Level 2: Whole Issue Customization
*Target:* Styling that applies to the entire flipbook for a specific issue (e.g., changing the Hard Cover color or background).

Add `issueGlobalCSS` to the **first file** (e.g., `01-intro.md`) of that issue folder:

```yaml
---
title: "Issue Introduction"
issueGlobalCSS: |
  /* Change the background BEHIND the book */
  .book-viewport {
    background: radial-gradient(#2a2a2a, #000);
  }
  /* Change the Hard Cover style for this issue only */
  .page.hard {
    background-color: darkblue;
    border-color: #000088;
  }
---

### Level 3: Global Site Customization
*Target:* Permanent changes to the website design.

* **Global Variables:** `src/styles/vars.css` (Colors, basic fonts).
* **Tailwind Config:** `tailwind.config.mjs` (Utility classes).
* **Flipbook Logic:** `src/pages/issues/[slug].astro`
    * *Modify `CONFIG` object inside the `<script>` tag to adjust:*
        * `minFontSize` / `maxFontSize` (Fluid typography scaling)
        * `multiColumnThreshold` (When to switch to 2-column layout)

---

## 🛠 Maintainer Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Installs dependencies (ensure `page-flip` is installed). |
| `npm run dev` | Starts local dev server at `localhost:4321`. |
| `npm run build` | Builds your production site to `./dist/`. |
| `npm run preview` | Preview your build locally before deploying. |

### Deployment
This site is configured for GitHub Pages.
1.  Push changes to the `main` branch.
2.  The GitHub Action `deploy.yml` will automatically build and deploy the site.

### 📄 Template Issue File
Create a file named `01-template.md` (or similar) to start a new article.

```markdown
---
# === REQUIRED METADATA ===
title: "Article Title"
description: "A brief summary for SEO and previews."
date: 2026-03-15

# === LEVEL 1: ARTICLE CUSTOMIZATION (Optional) ===
# Assign a unique class to all pages containing this specific article.
# customClass: "theme-noir"

# Write CSS that applies ONLY to pages with the class above.
# customCSS: |
#   .theme-noir {
#     background-color: #1a1a1a;
#     color: #e0e0e0; 
#   }
#   .theme-noir h1 { font-family: 'Courier New', monospace; }

# === LEVEL 2: ISSUE GLOBAL CSS (Optional) ===
# NOTE: Only include this field in the FIRST file (e.g., 01-intro.md) of the issue folder.
# This CSS applies to the entire flipbook container and hard covers.
# issueGlobalCSS: |
#   .book-viewport { background: #111; }
#   .page.hard { background-color: #8b0000; }
---

# Section 1: Introduction

Write your article content here. The text will flow naturally across pages based on the reader's screen size.

## Typography
You can use standard Markdown:
* **Bold text** for emphasis.
* *Italic text* for voice.
* > Blockquotes for excerpts.

## Images
Images are responsive by default. 
![Description of image](./my-image.jpg)

---
# Section 2: A New Page

Everything after the horizontal rule (`---`) will start on a fresh page, regardless of how much space was left on the previous one.
