# PRODUCT.md — thiago.catiteo.com

## Product
Personal brand site for **Thiago Albuquerque de Paula** — full-stack developer in Brasília.

## Surface mode
**Persuade + Experience:** the visitor should trust the person and start a conversation. The portrait and voice carry the brand; the interface stays secondary.

## Audience
- Recruiters / hiring managers scanning for credibility
- Potential clients (sites, systems, profiles)
- People discovering Thiago via Instagram / WhatsApp / LinkedIn

## Primary goals
1. **Conversation** — WhatsApp is the main conversion path (“Vamos conversar”)
2. **Credibility** — critical systems + own products + clear values
3. **Identity** — faith, family, and craft are not footnotes

## CTAs
| Placement | Primary | Secondary |
| --- | --- | --- |
| Hero | WhatsApp | Instagram · About |
| Contact | WhatsApp | Instagram · Email |

## Languages
- PT-BR default (`/`)
- EN (`/en/`)

## Projects order
Featured highlight: **AZEN CO.** — then Perfil.id, Catiteo, Instituto IMAV.

## Content notes
- Hero CTA must name WhatsApp explicitly (PT + EN).
- Hero social strip: WhatsApp, Instagram, LinkedIn, GitHub only; full set lives in Contact.
- Optional future asset: drop a real AZEN product photo at `public/images/projects/azen-feature.jpg` and wire it into the featured media plate when available.

## Performance
- Fonts are **self-hosted** (`public/fonts/`, Newsreader + Sora variable woff2). No Google Fonts.
- CSS is **inlined** at build (`inlineStylesheets: 'always'`) to avoid a render-blocking stylesheet.
- Photos ship as responsive **WebP + JPEG** (`srcset`); regenerate with `npm run optimize:images` (keep masters in `public/images/source/` when re-exporting).
- `public/llms.txt` supports PageSpeed Agentic Browsing (optional third applicable audit).
- **Cache TTL:** GitHub Pages serves `max-age=600`. For long-lived cache, put **Cloudflare** (or similar CDN) in front of `thiago.catiteo.com` and set cache rules for `/_astro/*`, `/fonts/*`, `/images/*` (1 year + immutable where hashed).
- Hero mobile prefers `thiago-hero-640.webp` (preload + sizes) for LCP.
- Optional future asset: `public/images/projects/azen-feature.jpg` for AZEN featured media (logo remains until then).

## Analytics
- **GTM:** `GTM-NW9SMKQV` · **GA4:** `G-P8DWQEWLPE`
- Load only after cookie **Accept** (LGPD banner); then boot via `requestIdleCallback` (fallback timeout).
- Reject = essentials only (no GTM/GA scripts).
- Custom events (when analytics loaded): `whatsapp_click`, `project_click`
- Do **not** also fire GA4 page_view from a GTM tag while the site gtag is active (double-count). Unifying to GTM-only is deferred.

## Stack
Editorial curation (path A): six groups, ~6–8 chips each — core tools only. Broader LinkedIn inventory stays off the page; graduate themes live in Trajetória 2025.

## Anti-goals
- Generic SaaS portfolio chrome
- Infinite project lists / fake metrics
- Purple-AI / Inter defaults
- Homepage screenshots competing with personal photos
