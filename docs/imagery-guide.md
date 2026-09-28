# UACB Imagery Guide

Brand palette for all generated/selected imagery: **Purple `#2b1c6d` · Green `#008935` · Gold `#ffc000` · Blue `#005eb8`**, warm off-white backgrounds (`#F5F3EE`).

Tone: warm, dignified, community-rooted — NOT corporate stock clichés (no handshakes-in-suits, no floating currency).

---

## 1. AI Generation Prompts

Run in Midjourney v6+/DALL-E/Flux. Add `--ar` ratios as noted; for DALL-E use landscape/portrait sizes instead.

### A. Hero — "Banking Local is Banking Better" (replaces `best_rural_bank_branded`)
```
Warm documentary-style photograph of a Ghanaian bank teller in a modern
community bank branch, assisting a smiling middle-aged cocoa farmer wearing
a worn shirt, natural window light, purple and gold interior accents,
shallow depth of field, authentic rural Ghanaian setting, photorealistic,
editorial photography --ar 6:7 --style raw
```

### B. Community Partnership section ("Not Just a Bank")
```
Golden-hour photograph of a vibrant Ghanaian market scene, women traders
with colorful fabrics arranging produce, mobile money kiosk in background,
warm amber light, dust in the air, candid documentary style, Western Ghana,
photorealistic --ar 4:5 --style raw
```

### C. Digital Banking / USSD
```
Close-up photograph of a Ghanaian market woman's hands holding a simple
feature phone showing a USSD menu, colorful wax-print dress sleeve visible,
blurred market stall background, soft daylight, shallow depth of field,
photorealistic editorial style --ar 3:4 --style raw
```

### D. Susu Savings Culture
```
Photograph of a susu collector's ledger book with handwritten entries and
stacked coins on a wooden table, Ghanaian cloth underneath, morning light
through a window, warm tones with gold highlights, macro detail,
photorealistic --ar 1:1 --style raw
```

### E. Youth & Education (CSR)
```
Photograph of Ghanaian schoolchildren in uniform walking together on a red-earth
path toward a rural school, backpacks, lush green cocoa trees lining the path,
bright optimistic morning light, documentary style, photorealistic
--ar 16:9 --style raw
```

### F. Branch Network strip image
```
Exterior photograph of a small modern Ghanaian community bank building with
purple signage at dusk, warm light glowing from windows, few customers at the
door, motorbike parked outside, red-earth foreground, photorealistic
--ar 3:2 --style raw
```

### G. Cocoa Heritage (About page)
```
Macro photograph of fresh cocoa pods cut open showing white beans, held by
weathered farmer hands, deep purple and green pod colors, dark natural
background, dramatic soft lighting, photorealistic --ar 1:1 --style raw
```

**Consistency suffix** (append to any prompt): `consistent brand color grading, muted purples and warm golds, no text, no watermarks`

---

## 2. Curated Free Stock (Unsplash/Pexels — free license)

Download → convert to WebP (`ffmpeg -i in.jpg -c:v libwebp -quality 85 out.webp`) → place in `public/images/stock/`.

| Use | Link | Notes |
|---|---|---|
| Market/trading | https://unsplash.com/photos/KdeXnAuRQWk | search "ghana market" |
| Mobile money agent | https://www.pexels.com/search/mobile%20money%20africa/ | pick storefront shots |
| Cocoa farming | https://unsplash.com/s/photos/cocoa-farmer | hands + pods preferred |
| Classroom | https://unsplash.com/s/photos/african-school-children | uniform shots |
| Bank hall | https://unsplash.com/s/photos/bank-teller-africa | service counters |
| Boda/motorbike delivery | https://unsplash.com/s/photos/motorbike-ghana | branch access stories |

Search-first approach (better than stale direct links): Unsplash `ghana community`, `africa banking`, `mobile money`, `cocoa ghana`.

---

## 3. Current Local Asset Map

| Asset | Used In |
|---|---|
| `logo-new.webp` | Header, Footer, RouteTransition |
| `best_rural_bank_branded.webp` | Homepage hero |
| `avatar_*.webp` (6) | Homepage testimonials |
| `*_strip.webp` (5) | Homepage photo strip |
| `board/*.png` (15 named) | Governance page |
| `stock-*.webp` (17) | Heroes, splits, news, CSR across site |
| `agency_banking.webp`, `ussd_banking.webp` etc. | Products page |
| `kente_pattern.webp` | Decorative backgrounds |

## 4. Pipeline

```powershell
# Convert any new image to optimized WebP (~q85)
ffmpeg -i input.png -c:v libwebp -quality 85 output.webp
```
Rules: WebP only · kebab-case names · ≤300KB target · always set `sizes` prop on `<Image>`.
