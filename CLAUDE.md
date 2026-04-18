# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**El Poder del VFX** — Landing page de ventas para un curso de efectos visuales (After Effects + Blender). Distribuido via Hotmart. Precio: 12,97€. Idioma: español (España).

## Architecture

Single-file static site: everything lives in `index.html` — HTML structure, CSS (inline `<style>`), and JavaScript (inline `<script>` at the bottom). No build tool, no framework, no dependencies except Google Fonts loaded via CDN.

## Design System

CSS custom properties defined in `:root`:

```css
--red: #E63022        /* primary CTA / accent */
--red-light: #FF6B5B  /* hover states */
--black: #0A0A0A      /* page background */
--black-2: #111111    /* alternate section background */
--black-3: #1A1A1A    /* card backgrounds */
--white: #FFFFFF
--gray: #999999
--gray-light: #CCCCCC
```

Fonts: `Bebas Neue` (headings, buttons, numbers) + `Inter` (body text) — both from Google Fonts.

## Page Sections (in order)

| ID | Section |
|----|---------|
| `#hero` | Hero with title, subtitle, CTA, and includes card |
| `#para-quien` | Target audience — 4 profile cards |
| `#curriculum` | 6 lesson cards (Aula 01–06) |
| `#proyectos` | 2 practical projects (After Effects + Blender AR) |
| `#bonus` | 5 bonus packs |
| `#precio` | Pricing box with Hotmart CTA button |
| `#faq` | Accordion FAQ (5 items) |
| `#footer-cta` | Final CTA section |

## Key Integration Point

The Hotmart purchase link is a placeholder in two places — search for `LINK_HOTMART_AQUI` to find them:

```html
<a href="LINK_HOTMART_AQUI" class="btn">Quiero empezar ahora — 12,97€</a>
```

## Tone & Content Rules

- **No aggressive income claims** — avoid "gana X€ en Y días" style promises. The course PDF had this tone and the owner explicitly rejected it as dangerous.
- Target market: Spain. Language: Spanish (not Portuguese, not Latin American Spanish).
- Softwares taught: After Effects and Blender only.
- Practical section: exactly 2 projects — one After Effects project, one Blender augmented reality project.
