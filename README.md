# Upper Amenfi Community Bank PLC — Website

Modern marketing site for UACB PLC, a Bank of Ghana–licensed community bank headquartered in Ankwaso (Wassa Amenfi), Ghana. Built with **Next.js 16 (App Router) + React 19**, CSS Modules, and lucide-react icons.

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve production build
```

## Project Structure

```
app/                    # App Router pages + layouts + global styles
  components/           # Shared components (Header, Footer, SearchModal,
                        #   BranchNetworkMap, RouteTransition, etc.)
  manifest.js           # PWA manifest (route: /manifest.webmanifest)
  offline/              # Offline fallback page for the service worker
  opengraph-image.js    # Dynamic OG image
  sitemap.js / robots.js
docs/
  imagery-guide.md      # AI image prompts + stock sourcing + asset pipeline
  extracts/             # Source PDFs & extracted AGM text used for content
public/
  images/               # Optimized WebP assets (kebab-case names)
    stock/              # Locally-hosted stock photography
  icons/                # PWA icons (192/512)
scripts/                # Python utilities used to extract AGM PDF content
```

## Key Features

- **Design system** — brand tokens (purple/green/gold/blue) in `app/globals.css`; fonts via `next/font` (Outfit, Inter, Caveat)
- **PWA** — installable, offline page, cache-first static assets (`public/sw.js`, registered in production only)
- **Site search** — `Ctrl/⌘+K` modal (`SearchModal.js`) over a static page index
- **Branch network map** — SVG overview with region filters synced to branch table + Google Maps embed
- **Calculators** — loan calculator with full amortization schedule; savings growth projector
- **Motion** — ScrollReveal component, CSS scroll-driven timeline reveals (progressive), reduced-motion support

## Image Pipeline

All images are WebP, kebab-case, ≤ ~350KB:

```powershell
ffmpeg -i input.png -c:v libwebp -quality 85 output.webp
```

Every `<Image>` should set an appropriate `sizes` prop. See `docs/imagery-guide.md` for sourcing new imagery.

## Deployment

Any Node host or Vercel. Set the production URL in `app/layout.js` (`siteUrl`) for metadata/OG.
