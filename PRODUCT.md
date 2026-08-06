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
- **Cache TTL:** GitHub Pages serves `max-age=600`. Long-lived cache needs a CDN (e.g. Cloudflare) in front of the custom domain — not fixable in the Astro repo alone.

## Analytics
- **GTM:** `GTM-NW9SMKQV` (head + noscript; boots after `window.load` to protect LCP)
- **GA4:** `G-P8DWQEWLPE` via gtag (also after load; `anonymize_ip`)
- Custom events: `whatsapp_click` (placement: hero/contact/footer/social), `project_click` (project_name)
- **Important:** If GA4 is *also* configured as a tag inside GTM that sends page_view, you will double-count. Prefer one path: either GA4 only via GTM **or** keep the site gtag and do not add a duplicate GA4 Config tag in GTM.

## Anti-goals
- Generic SaaS portfolio chrome
- Infinite project lists / fake metrics
- Purple-AI / Inter defaults
- Homepage screenshots competing with personal photos
