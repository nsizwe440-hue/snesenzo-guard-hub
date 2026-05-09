## Add Smooth Scroll Animations

Add subtle, polished on-scroll reveal animations to the landing page sections so content fades and lifts into view as the user scrolls.

### Approach
- Create a tiny reusable `Reveal` wrapper component (`src/components/Reveal.tsx`) that uses `IntersectionObserver` to toggle a visibility class once the element enters the viewport.
- No new dependencies — pure CSS + native browser API. Lightweight, SSR-safe.
- Respect `prefers-reduced-motion`: skip animation and show content instantly.

### Animation styles
Three clean variants, all ~600ms with a soft `cubic-bezier(0.22, 1, 0.36, 1)` easing:
- `fade-up` (default) — opacity 0→1, translateY 24px→0
- `fade-in` — opacity only (for hero text)
- `zoom-in` — opacity 0→1 + scale 0.96→1 (for images/cards)

Once revealed, elements stay in place (no re-trigger on scroll up). Stagger child items in grids by 60–80ms for a cascading feel.

### Where animations apply (in `src/routes/index.tsx`)
- Hero headline + subcopy + CTAs: `fade-in` with small stagger
- WHO WE ARE card: `fade-up`
- Credential strip items: staggered `fade-up`
- OUR SERVICES grid tiles: staggered `fade-up`
- OUR SERVICES IN ACTION images: `zoom-in`
- FOUR PILLARS: staggered `fade-up`
- COVERAGE map + CLIENTS grid: `fade-up`
- PEOPLE ON THE GROUND tiles: staggered `zoom-in`
- WHY CHOOSE list items: staggered `fade-up`
- CEO QUOTE (image + quote): `fade-up`
- PSIRA accreditation card: `fade-up`
- Footer CTA: `fade-up`

### Files touched
- `src/components/Reveal.tsx` — new wrapper component
- `src/styles.css` — add the three keyframes + `.reveal` / `.reveal.is-visible` classes + reduced-motion guard
- `src/routes/index.tsx` — wrap sections/items with `<Reveal variant="..." delay={n}>`

No design tokens, layout, or copy change — purely additive motion.
