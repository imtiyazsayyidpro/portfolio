# Brand files

Source logo files for Imtiyaz Sayyid. This folder is for design work (proposals, invoices, print, social) and is **not shipped with the website**. The website's own icons live in `app/` and `public/` (listed at the end).

Colours: navy `#1b2a4a`, off-white `#f8f8f6`, gold `#c9a14a`. Typeface: Fraunces, weight 400. All text in these files is converted to vector paths, so nothing depends on the font being installed.

## Logos

| File | What it is | Use it for |
|------|------------|------------|
| `logo-a.svg` | **Logo A (main).** Navy rounded square, off-white "IS", gold bar. | The default mark: website, social profile pictures, app icons, anywhere on a light background. |
| `logo-d.svg` | **Logo D (light).** Off-white rounded square with an 8px navy border, navy "IS", gold bar. | Documents and print, and on dark or busy backgrounds where the navy square would disappear. |

Both are 512 × 512 with rounded corners (radius 111px, about 22%). They match the designs in `reference/` exactly: letters at 239px with the baseline at 333 (65%), and the gold bar 188 × 13px at y 375 (73%).

## Lockups (mark + name)

| File | What it is | Use it for |
|------|------------|------------|
| `lockup-a.svg` | Logo A beside "Imtiyaz Sayyid" in navy Fraunces. | Proposals, invoices, letterheads and email signatures on white or light backgrounds. |
| `lockup-a-light.svg` | Same, with the name in off-white `#f8f8f6`. | Dark backgrounds (slides, dark email themes). On a navy background the square blends in, leaving the letters and gold bar. |

## PNG exports (`png/`)

`logo-a-{size}.png` and `logo-d-{size}.png` at 16, 32, 48, 180, 192, 512 and 1024px, with transparent corners.

| Size | Typical use |
|------|-------------|
| 16, 32, 48 | Favicons and small UI icons. **The 16px versions leave out the gold bar**, because at that size it blurs into a smudge. |
| 180 | Apple touch icon size. |
| 192, 512 | Android and web app icons. |
| 1024 | Large uses: social profile pictures, app stores, print mock-ups. |

## Reference (`reference/`)

`logo-a-reference.svg` and `logo-d-reference.svg` are the original designs with live Fraunces text. They are the visual source of truth; use the path-based files above for actual work.

## Website icons (built from logo A)

| File | Purpose |
|------|---------|
| `app/favicon.ico` | Browser tab icon. Holds 16 (no gold bar), 32 and 48px. |
| `app/icon.svg` | Scalable browser icon (same as `logo-a.svg`). |
| `app/apple-icon.png` | 180px iPhone/iPad home-screen icon. Full-bleed navy square, because iOS rounds the corners itself. |
| `public/icon-192.png`, `public/icon-512.png` | Web app manifest icons. |
| `public/icon-maskable-512.png` | Maskable manifest icon: full-bleed navy with the mark at 76% size, so Android's circle and squircle masks don't crop it. |
| `app/opengraph-image.png` | 1200 × 630 link-preview image (WhatsApp, LinkedIn, etc.). |
| `app/manifest.ts` | Web manifest (name, theme colour `#1b2a4a`, icons). |
