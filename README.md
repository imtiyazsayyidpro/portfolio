# imtiyazsayyid.in

One-page consultancy site for Imtiyaz Sayyid, built with Next.js (App Router), Tailwind CSS v4 and TypeScript.

- Design system: `docs/imtiyaz-design-system.md`
- Page content: `docs/imtiyaz-sayyid-website-content.md`
- Logo source files: `brand/` (not served by the site)

## Requirements

- Node.js 20.9 or newer
- npm

## Environment variables

Copy `.env.example` and fill in the values. Next.js reads `.env` and `.env.local` at build time, and `NEXT_PUBLIC_` values are built into the site, so **set them before running `npm run build`**.

| Variable | Purpose |
|----------|---------|
| `PORT` | Port for `npm start` (read from `.env` by dotenv-cli; Next.js itself ignores `PORT` in env files). Defaults to 3000. |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID. Analytics loads in production builds only, and only when this is set. |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Google Search Console verification code (optional). |

## Development

```bash
npm install
npm run dev
```

## Production

```bash
npm ci
npm run build
npm start
```

`npm start` runs `dotenv -- next start`, so `PORT` and other values in `.env` apply to the server.
