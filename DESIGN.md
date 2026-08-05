# DESIGN.md — thiago.catiteo.com

## Visual theme & atmosphere
Editorial warm-dark personal brand. Intimate portrait photography, amber accent, serif display + geometric sans. Quiet confidence — not startup flash.

Mode: **Experience + Persuade**. Density: medium-low. Motion: purposeful, sparse.

## Color palette & roles
| Token | Dark | Light | Role |
| --- | --- | --- | --- |
| `--bg` | `#0b0b0c` | `#f7f2ea` | Canvas |
| `--bg-elevated` | `#121214` | `#fffdf9` | Panels |
| `--text` | `#f4efe6` | `#1a1814` | Primary ink |
| `--text-muted` | `#a39e94` | `#6b645a` | Secondary |
| `--accent` | `#e0a84a` | `#b8791f` | CTA / labels |
| `--border` | warm white @ 10% | warm ink @ 10% | Hairlines |

Logo plates for marks with white ink stay near `#0c0c0e` even in light theme when needed for legibility; prefer theme-tinted plates when the logo is dark/colorful.

## Typography
- Display: **Newsreader** (serif, self-hosted variable woff2) — hero name, section titles, project names
- Body: **Sora** (self-hosted variable woff2) — UI, paragraphs, labels
- Labels: uppercase, tracked (`~0.14–0.2em`), accent color
- Display tracking: slightly negative on large titles
- Body measure: keep about copy under ~65ch where possible
- Do not load Google Fonts — keep latin (+ latin-ext) files under `public/fonts/`

## Components
- **Buttons:** primary = solid accent on dark ink text; ghost = hairline border. Min height 48px. Soft radius `2px` (not pills). Hover: slight lift + stronger accent.
- **Social icons:** min 44×44 hit target, hairline border, lift on hover.
- **Project rows:** editorial list — **AZEN CO.** featured/full-bleed plate; others as horizontal editorial rows (not a 3-equal card grid). Unified dark logo plates in light mode. Interaction container, not decorative card clutter.
- **About:** pull quote + short uppercase subheads; full copy always visible (no collapse that creates empty gaps).
- **Hero socials:** 4 icons in a stable grid; no orphan wrap.
- **Nav:** sticky, frosted; active section uses accent underline/color.

## Layout principles
- Content max ~72rem
- Hero full-bleed photo; copy left; face right on desktop (`picture` landscape crop)
- Section rhythm: label → title → lead → content, with breathing space (`clamp`)
- Prefer asymmetry over equal 3-column feature grids

## Depth & elevation
- Hairline borders over heavy shadows
- Soft radial amber washes on canvas
- Timeline uses transform/opacity, never layout-property animation

## Motion
- Entrance: short rise/fade (`cubic-bezier(0.22, 1, 0.36, 1)`)
- Respect `prefers-reduced-motion`
- Cap presence to 2–3 intentional moments (hero, CTA hover, section reveal)

## Do's
- Keep personal photography dominant
- One accent family (amber/gold)
- WhatsApp as conversation CTA
- PT/EN parity in meaning, not word-for-word stiffness

## Don'ts
- Inter / Roboto / purple gradients / nested cards / bounce easing
- Homepage screenshots as project media
- Skill-pill clouds without context
- Infinite polish on hero crop once framing is acceptable

## Agent prompt guide
Refine, do not replace the visual world. Preserve Newsreader + Sora + amber + portraits. Prefer Resend-like editorial restraint over Linear SaaS chrome.
