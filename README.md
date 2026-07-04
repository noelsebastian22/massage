# Cloud 3 Massage Therapy

A single-page marketing website for **Cloud 3 Massage Therapy** — a remedial massage practice in Blackheath, Blue Mountains NSW. Built from a provided design mock (`design.webp`) with content adapted from the practice's existing site.

**Live goal:** visitors feel the calm of the clinic before they arrive, then book by text/call or the enquiry form.

## Tech Stack

- [Astro](https://astro.build) ^5.10 — static site, zero client framework
- [Tailwind CSS](https://tailwindcss.com) ^4.1 via `@tailwindcss/vite` — design tokens defined in `@theme` in `src/styles/global.css`
- **Fonts:** Lora Variable (display serif) + Figtree Variable (sans) via `@fontsource-variable`
- Vanilla JS only — header scroll state, reveal-on-scroll animations (IntersectionObserver), treatment tabs

## Getting Started

```bash
npm install
npm run dev      # dev server on http://localhost:4322
npm run build    # production build to dist/
npm run preview  # preview the production build
```

> The dev server runs on port **4322** (4321 is often occupied by a sibling project).

## Project Structure

```
src/
  pages/index.astro        # single page, anchor navigation
  layouts/Layout.astro     # base layout, reveal animation script
  components/              # Header, Hero, About, Treatments,
                           # Experiences, Practitioner, Contact, Footer
  styles/global.css        # Tailwind v4 @theme design tokens
public/images/             # hero, treatment, experience & portrait photos
PRODUCT.md                 # product framing & design principles
design.webp                # the design reference — layout/palette contract
```

## Design Principles

1. **The mock is the contract** — structure, palette and rhythm follow `design.webp` faithfully
2. **Stillness through pacing** — generous whitespace, slow easings, nothing bounces
3. **One human, honestly presented** — solo-practitioner section with real qualifications
4. **Booking is a conversation** — every CTA leads to text/call or the enquiry form
5. **Photography carries the warmth** — the UI stays quiet around it

## Accessibility

Targets WCAG 2.1 AA: ≥4.5:1 body-text contrast, keyboard-operable interactions, `prefers-reduced-motion` honoured (content renders without JS), semantic landmarks, `tel:`/`sms:` links for phone numbers.

## Notes

- The contact form composes a `mailto:` link — there is no form backend
- `public/images/gerhard.jpg` is a stock stand-in and must be replaced with a real photo of the practitioner before launch
