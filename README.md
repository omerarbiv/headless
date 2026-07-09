[README.md](https://github.com/user-attachments/files/29841630/README.md)
# Sonder One — Wix Headless

A single-page product site for **Sonder One** reference over-ear headphones, deployed on **Wix Managed Headless** with **Wix Stores** for catalog + checkout.

**Live site:** https://headless-7a0153bf-omera41.wix-site-host.com

## What's here

- `sonder-one.html` — the full site source (self-contained HTML/CSS/JS).
- `dist/index.html` — the built output that gets released (a copy of `sonder-one.html`).
- `wix.config.json` — Wix CLI project config (site id + headless app/client id; `outputDirectory: ./dist`).
- `serve.mjs` — tiny dependency-free static server for local preview (`node serve.mjs` → http://localhost:4599).
- `bootstrap.mjs` — Wix Headless bootstrap helper (CLI check + login).

## Features

- **Cinematic hero** — the headphone in an animated champagne field (rotating aurora, sound-wave pulses, orbiting sparks, drifting dust, cursor parallax).
- **Finish configurator** — Midnight / Champagne / Silver / Sage, recoloring a shared SVG headphone via CSS variables (default: Silver).
- **Wix Stores catalog** — each finish is a real product; prices in USD.
- **Custom Sonder checkout modal** — order summary + email, then a secure hand-off to Wix's PCI-compliant payment page (Wix Payments; orders/inventory tracked).
- **Interactive particle wordmark** — champagne dots that morph between words and scatter from the cursor.

All effects are reduced-motion aware and responsive.

## Develop

```bash
# preview locally
node serve.mjs        # serves ./dist at http://localhost:4599

# edit sonder-one.html, then sync into the build output
cp sonder-one.html dist/index.html

# release to Wix (requires Wix CLI login)
CI=1 npx @wix/cli@latest release
```
