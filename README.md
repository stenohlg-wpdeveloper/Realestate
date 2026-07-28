# Fieldstone Property Co. — Real Estate Landing Page

A single-page, responsive real estate website built with plain HTML, CSS, and JavaScript — no build step required.

**Live site:** https://stenohlg-wpdeveloper.github.io/Realestate/

## Structure

```
.
├── index.html      # Page markup
├── css/
│   └── style.css   # All styling (design tokens, layout, responsive rules)
├── js/
│   └── main.js     # Scroll-reveal animation + button interactions
└── README.md
```

## Sections

- **Hero** — headline, stats, and a location/type/budget search bar
- **Listings** — featured property cards with blueprint-style hover annotations
- **Process** — the buying process in three steps
- **Agents** — team roster
- **Testimonial**
- **Contact / CTA** and **footer** with newsletter signup

## Customizing

- Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces), [Inter](https://fonts.google.com/specimen/Inter), and [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono), loaded from Google Fonts in `index.html`.
- Colors and spacing are defined as CSS custom properties at the top of `css/style.css` (`:root { --ivory, --forest, --rust, ... }`) — change these to re-theme the whole site.
- Listing cards, agent cards, and copy are static HTML in `index.html` — replace with real data, or wire up a CMS/backend as needed.

## Deployment

This repo is deployed via **GitHub Pages** from the `main` branch, root folder. Any push to `main` updates the live site within a minute or two.
