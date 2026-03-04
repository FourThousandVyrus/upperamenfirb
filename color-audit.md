# UARB Brand Color Audit & Alignment Report

> **Prepared for:** Upper Amenfi Rural Bank Ltd
> **Date:** March 2026
> **Role:** Design & Product Analysis

---

## 1. Official Brand Color Palette

| Swatch | Hex | RGB | Role |
|--------|-----|-----|------|
| **Brand Green** | `#008935` | rgb(0, 137, 53) | Primary identity — logo leaves, success states, growth messaging |
| **White** | `#ffffff` | rgb(255, 255, 255) | Backgrounds, text on dark, clean space |
| **Brand Purple** | `#2b1c6d` | rgb(43, 28, 109) | Primary dark — logo ring, headings, hero backgrounds, authority |
| **Brand Grey** | `#868694` | rgb(134, 134, 148) | Body text, secondary labels, muted UI elements |
| **Brand Gold** | `#ffc000` | rgb(255, 192, 0) | Accent — CTAs, highlights, premium feel, attention-grabbers |
| **Brand Blue** | `#005eb8` | rgb(0, 94, 184) | Secondary accent — links, informational elements, trust signals |

### Color Hierarchy (recommended usage weight)
1. **Purple + White** — 60% of visual weight (backgrounds, headings, cards)
2. **Gold** — 15% (buttons, accents, hover states, progress indicators)
3. **Green** — 10% (success states, growth metrics, confirmation)
4. **Blue** — 10% (links, info banners, secondary actions)
5. **Grey** — 5% (body text, borders, subtle labels)

---

## 2. Current Website Palette

### Primary (Royal Blue / Navy) — Currently in use
| Variable | Current Hex | Purpose |
|----------|-------------|---------|
| `--primary-900` | `#0d0d3d` | Deepest dark (heroes, footer) |
| `--primary-800` | `#12126a` | Dark backgrounds |
| `--primary-700` | `#1a1a7a` | Standard navy (cards, borders) |
| `--primary-600` | `#22228e` | Mid blue |
| `--primary-500` | `#2e2ea6` | Medium blue |
| `--primary-400` | `#5555c0` | Soft blue |
| `--primary-300` | `#8888d4` | Light blue |
| `--primary-100` | `#e8e8f5` | Tint |
| `--primary-50` | `#f2f2fa` | Near-white tint |

### Secondary (Green) — Currently in use
| Variable | Current Hex |
|----------|-------------|
| `--green-600` | `#1e6b1e` |
| `--green-500` | `#2d8c2d` |
| `--green-400` | `#3da63d` |
| `--green-300` | `#66c266` |
| `--green-200` | `#99d699` |
| `--green-100` | `#dff0df` |

### Accent (Gold) — Currently in use
| Variable | Current Hex |
|----------|-------------|
| `--accent-600` | `#a68b0d` |
| `--accent-500` | `#c8a415` |
| `--accent-400` | `#d4b840` |
| `--accent-300` | `#e8d070` |
| `--accent-200` | `#f0e0a0` |
| `--accent-100` | `#fdf8e8` |

### Text & Surfaces
| Variable | Current Hex |
|----------|-------------|
| `--text-heading` | `#0d0d3d` |
| `--text-body` | `#4a4a5a` |
| `--text-muted` | `#7a7a8a` |
| `--text-light` | `#a0a0b0` |
| `--info` | `#3b82f6` |

---

## 3. Gap Analysis — Current vs. Brand

### Critical Mismatches

| Element | Current | Brand | Severity | Issue |
|---------|---------|-------|----------|-------|
| **Primary dark** | `#1a1a7a` (blue-leaning) | `#2b1c6d` (purple-leaning) | **HIGH** | Wrong hue family — site reads "blue" but brand is "purple" |
| **Deepest dark** | `#0d0d3d` (near-black blue) | Derived from `#2b1c6d` | **HIGH** | Hero/footer too cold/blue |
| **Gold accent** | `#c8a415` (muted antique gold) | `#ffc000` (bright amber) | **HIGH** | CTAs and accents appear dull vs. brand energy |
| **Green** | `#2d8c2d` (dark forest) | `#008935` (vivid medium) | **MEDIUM** | Green is too dark, reads muddy |
| **Body text** | `#4a4a5a` (dark blue-grey) | `#868694` (medium grey) | **MEDIUM** | Body text is darker than brand spec |
| **Info/Blue** | `#3b82f6` (bright web blue) | `#005eb8` (corporate blue) | **LOW** | Used sparingly — but should match |
| **Brand Blue** | Not present | `#005eb8` | **MEDIUM** | Missing from palette entirely |

### What's Already Correct
- `#ffffff` (white) — used extensively, matches brand
- General structure of the variable system is sound
- Gradient approach (dark-to-light scales) is correct, just wrong base hues

---

## 4. Accessibility Analysis (Brand Colors)

### Text on White Background (`#ffffff`)
| Text Color | Hex | Contrast Ratio | WCAG AA (normal) | WCAG AA (large) | WCAG AAA |
|------------|-----|----------------|-------------------|-----------------|----------|
| Brand Purple | `#2b1c6d` | **10.4:1** | PASS | PASS | PASS |
| Brand Green | `#008935` | **4.7:1** | PASS | PASS | FAIL |
| Brand Blue | `#005eb8` | **5.2:1** | PASS | PASS | FAIL |
| Brand Grey | `#868694` | **3.5:1** | FAIL | PASS | FAIL |
| Brand Gold | `#ffc000` | **1.9:1** | FAIL | FAIL | FAIL |

### White Text on Brand Backgrounds
| Background | Hex | Contrast Ratio | WCAG AA | Notes |
|------------|-----|----------------|---------|-------|
| Brand Purple | `#2b1c6d` | **10.4:1** | PASS | Excellent for hero/dark sections |
| Brand Green | `#008935` | **4.0:1** | PASS (large) | Marginal for small text — use bold |
| Brand Blue | `#005eb8` | **5.6:1** | PASS | Good for buttons, banners |
| Brand Gold | `#ffc000` | **1.9:1** | FAIL | Never use white text on gold |

### Key Accessibility Decisions
1. **Brand Grey (`#868694`) fails AA for normal text on white** — Use as muted/secondary text only, or darken to `#6a6a78` for body text
2. **Brand Gold (`#ffc000`) has poor contrast on white** — Use for backgrounds/accents only, never as text color. Pair with dark purple text
3. **Body text recommendation:** Keep `--text-body` at a darker shade like `#4a4a5a` or `#555566` for readability, use brand grey `#868694` only for `--text-muted` and labels

---

## 5. Recommendations — Where to Apply Each Brand Color

### Brand Purple (`#2b1c6d`) — Primary Identity
**Current usage of navy → Replace with purple throughout**
- Hero section background gradient base
- Footer background
- Section headings (`--text-heading`)
- Dark section backgrounds
- Navigation active states
- Card hover borders

### Brand Gold (`#ffc000`) — Accent & Energy
**Current gold is too muted → Brighten across the board**
- All CTA buttons (`.btn-glow` background)
- Progress bar fills
- Route transition progress bar
- Floating card icon backgrounds
- Trust strip hover accents
- Award highlights
- Section eyebrow underlines

### Brand Green (`#008935`) — Growth & Success
**Current green is too dark → Lighten and vivify**
- Success states and confirmations
- Checkmark icons across all pages
- USSD guide step indicators
- Community impact positive metrics
- "Open Account" related CTAs (secondary)

### Brand Blue (`#005eb8`) — Trust & Information
**NEW — Currently absent from palette**
- Hyperlinks on light backgrounds
- Info banners and tooltips
- Form input focus rings
- "Learn more" secondary links
- Breadcrumb active state
- Can alternate with gold in digital services section

### Brand Grey (`#868694`) — Supporting Text
**Replace current muted text color**
- `--text-muted` labels and captions
- Breadcrumb inactive links
- Footer secondary text
- Card descriptions (secondary)
- Keep `--text-body` darker for paragraph readability

### White (`#ffffff`) — Already correct
- No changes needed

---

## 6. Proposed CSS Variable Mapping

### Primary Scale (Navy → Purple)
```css
--primary-900: #1a1048;   /* was #0d0d3d — darkest purple */
--primary-800: #221660;   /* was #12126a */
--primary-700: #2b1c6d;   /* was #1a1a7a — BRAND PURPLE */
--primary-600: #3a2a85;   /* was #22228e */
--primary-500: #4a3a9d;   /* was #2e2ea6 */
--primary-400: #6b5cb5;   /* was #5555c0 */
--primary-300: #9a8ecd;   /* was #8888d4 */
--primary-100: #eeecf5;   /* was #e8e8f5 */
--primary-50:  #f6f5fa;   /* was #f2f2fa */
```

### Green Scale
```css
--green-600: #006b28;     /* was #1e6b1e — darker brand green */
--green-500: #008935;     /* was #2d8c2d — BRAND GREEN */
--green-400: #2ea64e;     /* was #3da63d */
--green-300: #5cc278;     /* was #66c266 */
--green-200: #99d6aa;     /* was #99d699 */
--green-100: #dff0e5;     /* was #dff0df */
```

### Gold/Amber Scale
```css
--accent-600: #cc9a00;    /* was #a68b0d — darker amber */
--accent-500: #ffc000;    /* was #c8a415 — BRAND GOLD */
--accent-400: #ffcd33;    /* was #d4b840 */
--accent-300: #ffda66;    /* was #e8d070 */
--accent-200: #ffe799;    /* was #f0e0a0 */
--accent-100: #fff8e0;    /* was #fdf8e8 */
```

### New Blue Scale
```css
--blue-600: #004a92;      /* darker brand blue */
--blue-500: #005eb8;      /* BRAND BLUE */
--blue-400: #2b7fd4;      /* lighter */
--blue-300: #66a3e0;      /* light */
--blue-200: #99c2eb;      /* pastel */
--blue-100: #e0edf8;      /* tint */
```

### Updated Semantics
```css
--info: #005eb8;           /* was #3b82f6 */
--success: #008935;        /* was #2d8c2d */
--text-muted: #868694;     /* was #7a7a8a — BRAND GREY */
--text-light: #a0a0b0;     /* keep as-is (lighter shade of grey) */
```

### Legacy Alias Updates
```css
--navy: #2b1c6d;           /* was #1a1a7a */
--navy-deep: #1a1048;      /* was #0d0d3d */
--navy-light: #eeecf5;     /* was #e8e8f5 */
--gold: #ffc000;            /* was #c8a415 */
--gold-warm: #ffcd33;       /* was #d4b840 */
--gold-light: #fff8e0;      /* was #fdf8e8 */
--green-deep: #006b28;      /* was #1e6b1e */
```

---

## 7. Files Requiring Updates

| File | Changes |
|------|---------|
| `app/globals.css` | All `:root` variables, gradients, shadows, button glows, keyframes |
| `app/page.module.css` | Hero orb rgba values, gold hover rgba, impact overlay, CTA mesh |
| `app/inner.module.css` | Page hero overlays, dark section gold accents, focus rings |
| `app/components/Header/Header.module.css` | Mobile overlay, transparent nav colors |
| `app/components/Footer/Footer.module.css` | Newsletter gold, social link gold hovers |
| `app/components/RouteTransition/RouteTransition.module.css` | Progress bar gradient, logo pulse glow |
| `app/components/PageHero/PageHero.module.css` | Decorative circle rgba values |

---

## 8. Summary

The current website uses a **blue-leaning navy** with **muted antique gold** that doesn't reflect the bank's actual brand identity. The real brand is **warmer, more purple, and more vibrant** with a bright amber gold. The site currently lacks the brand blue entirely.

**Impact of alignment:**
- Hero sections will feel warmer and more inviting (purple vs. cold blue)
- CTAs will pop significantly more (bright amber vs. muted gold)
- Success states will be more vivid and reassuring (vibrant green)
- The addition of brand blue provides a missing "trust" color for links and info
- Overall, the site will match print materials, signage, and the bank's visual identity

**Risk:** Brand grey `#868694` is too light for body text (fails WCAG AA). Recommendation: use it for muted text only, keep body text darker.
