# SoundWave Festival

A colorful, interactive website for a fictional one-day music festival in Los Angeles. Built for an educational workshop with vanilla HTML, CSS, and JavaScript. This is a demo: there is no real event, ticket sale, or payment flow.

## Features

- Festival homepage with a View Lineup link that smoothly scrolls to the artists.
- Four fictional artists, local SVG illustrations, performance times, and expandable descriptions.
- Instant ticket calculator: General Admission costs $75 and VIP costs $125, with quantities from 1 to 4. Total = ticket price × quantity, with no fees, taxes, or discounts.
- Responsive layouts, keyboard controls, visible focus indicators, and reduced-motion support.

## Run locally

No installation, package manager, or build step is required. Open `index.html` directly in a browser.

Alternatively, from the repository directory, serve the files with Python:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser. Stop the server with Ctrl+C.

## Publish with GitHub Pages

After merging the site into `main`, open the repository's **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose **main** and **/ (root)**, and save. GitHub Pages publishes the site at:

https://ai-problem-solving-lab.github.io/debugging-challenge/

All local asset paths are relative so the site works under this repository subpath. No custom build workflow is needed.

## Source files

| File | Purpose |
| --- | --- |
| `index.html` | Page content, artist cards, navigation, and ticket controls |
| `styles.css` | Colors, layout, responsive rules, and focus styles |
| `script.js` | Artist detail toggles and ticket calculations |
| `assets/` | Local SVG festival artwork, artist illustrations, and icon |

## Check the site

- Use View Lineup and confirm the lineup section comes into view.
- Open and close each artist description with a mouse and keyboard.
- Try every ticket type and quantity: General Admission totals are $75, $150, $225, and $300; VIP totals are $125, $250, $375, and $500.
- Resize the browser to check mobile and desktop layouts, and confirm all artwork loads.
