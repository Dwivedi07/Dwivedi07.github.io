# Arpit Dwivedi — Personal Website

Academic and project portfolio site, published via [GitHub Pages](https://pages.github.com/). The site is served from the repository root; **`index.html`** is the main page (as required by GitHub Pages).

## Repository structure

```
Dwivedi07.github.io-main/
├── index.html          # Main page (home, about, research, projects, etc.)
├── about.html          # Legacy about page (optional)
├── projects.html       # Optional projects listing
├── publications.html   # Optional publications listing
├── README.md
├── css/
│   ├── main.css        # Styles for index.html
│   └── stylesheet.css  # Legacy Lato/utility styles (e.g. for about.html)
├── js/
│   └── main.js         # Mobile preview toggle and other scripts
└── images/             # Put site assets here (photo, logos, favicon, etc.)
    └── favicon/        # Favicon: favicon.ico
```

- **Assets:** Place images (e.g. `ArpitDwivedi.jpg`, logos, thumbnails) in **`images/`**. Favicon: `images/favicon/favicon.ico`.
- **Styles:** Main site styling is in **`css/main.css`**. Link it from any new page with `<link rel="stylesheet" href="css/main.css">`.
- **Scripts:** Shared JS (e.g. mobile preview) lives in **`js/main.js`**.

## Local development

Open `index.html` in a browser, or use a simple static server (e.g. `npx serve .` or `python3 -m http.server`) so that paths like `css/main.css` and `images/` resolve correctly.

## Credits

Layout and design inspired by [Jon Barron's academic site](https://jonbarron.info/).
