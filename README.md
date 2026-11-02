# Pokémon Tragic Black — The Creepy Pasta Expansion (Website)

The official site for **Pokémon Tragic Black**, a fan-made Game Boy ROM hack that
expands the classic "Creepy Black" creepypasta into a full mystery/horror story.

> ⚠️ **Unofficial fan project.** Not affiliated with Nintendo, Game Freak, or The
> Pokémon Company. The site distributes a **patch only** — never a copyrighted ROM.

## Project structure

```
.
├── index.html          # Home: hero, info, screenshots, download, FAQ, field notes, comments
├── guide.html          # Walkthrough / guide page (spoiler-light)
├── css/
│   └── styles.css      # All styles, organized by section, with theme tokens
├── js/
│   ├── main.js         # Nav active-state + scroll spy
│   └── comments.js     # giscus (GitHub Discussions) comment loader
├── assets/
│   ├── favicon.svg     # Pixel-ghost favicon
│   ├── og-image.png    # 1200×630 social-share image (rendered from the SVG)
│   ├── og-image.svg    # Editable source for the OG image
│   └── img/            # Ghost hero art + real screenshots
├── .nojekyll           # Tell GitHub Pages to serve files as-is (no Jekyll)
└── README.md
```

## Local preview

The site uses relative links and works when opened over a local web server.
From the project root:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

(Opening `index.html` directly with `file://` mostly works too, but a server is
recommended so the comments widget and all relative paths behave correctly.)

## Deploy with GitHub Pages

1. Push these files to the default branch (`main`) of
   [`Gh0stDigital/PokemonTragicBlackSite`](https://github.com/Gh0stDigital/PokemonTragicBlackSite).
2. In the repo: **Settings → Pages**.
3. Under **Build and deployment**, set **Source = Deploy from a branch**,
   **Branch = `main`**, folder = `/ (root)`, then **Save**.
4. The site publishes at:
   `https://gh0stdigital.github.io/PokemonTragicBlackSite/`

The Open Graph URLs in the HTML already point at this address. If you use a custom
domain, update the `og:url` / `og:image` / `twitter:image` meta tags in
`index.html` and `guide.html`.

## Enable comments (giscus)

Comments are powered by **giscus**, which stores discussion in your repo's GitHub
Discussions — no server or database required. A friendly placeholder shows until
you complete this one-time setup:

1. **Enable Discussions:** repo **Settings → General → Features → Discussions**.
2. **Install the giscus app:** <https://github.com/apps/giscus> → grant it access
   to this repository.
3. **Get your IDs:** go to <https://giscus.app>, enter the repo
   `Gh0stDigital/PokemonTragicBlackSite`, choose a Discussion **category**
   (e.g. *General* or *Announcements*), and copy the generated
   `data-repo-id` and `data-category-id`.
4. **Paste them in** `index.html` on the `#giscus-container` element:
   - `data-repo-id` is already set to `R_kgDOVfw5nw` (this repo).
   - Replace `data-category-id="REPLACE_WITH_CATEGORY_ID"` with your real value,
     and update `data-category` if you picked a different category name.

The widget uses a dark theme to match the site.

## Customizing

- **Colors:** edit the `:root` theme tokens at the top of `css/styles.css` to
  recolor the whole site from one place.
- **Hero ghost:** replace `assets/img/ghost.png` (a transparent PNG shown at the
  top of the home page).
- **Screenshots:** replace the inline placeholder SVGs in the Screenshots section
  of `index.html` with real captures (drop images in `assets/img/`).
- **Social image:** edit `assets/og-image.svg`, then re-render `assets/og-image.png`
  at 1200×630 (any SVG-to-PNG tool works).
- **Guide:** flesh out `guide.html`. Keep spoilers inside the `REVEAL` dropdowns.

## License / legal

This repository contains website code and assets only. It does **not** contain,
link to, or distribute any copyrighted Pokémon ROM. All Pokémon names and imagery
are trademarks of their respective owners; this is a non-commercial fan work.
