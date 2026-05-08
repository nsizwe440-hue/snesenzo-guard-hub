
# SNESENZO SECURITY GROUP — Mobile-First Landing Page

Build a single-page, mobile-first landing site (optimized for 390px) with full tablet/desktop responsiveness, matching the supplied spec and referencing the Blue Security mockup for layout feel only — fully rebranded in Snesenzo black/navy/red.

## Tech & setup

- TanStack Start route: replace placeholder in `src/routes/index.tsx` with the landing page.
- Add per-route `head()` with title, description, og:title/description/image for SEO.
- Define semantic design tokens in `src/styles.css` (oklch equivalents of the brand hex palette: `--brand-navy` #061016, `--brand-charcoal` #0B1820, `--brand-red` #E31B23, `--brand-surface` #F4F6F8, `--brand-muted` #667085). Map them via `@theme inline` so Tailwind utilities like `bg-brand-navy`, `text-brand-red` work.
- Typography: load Montserrat (body) + Bebas Neue (display) via Google Fonts `<link>` in root head; expose as `--font-display` / `--font-sans`.
- Icons: `lucide-react` (Shield, Phone, Mail, Menu, ArrowRight, Check, Camera, Users, Flame, Truck, Building2, Wheat, Sparkles, Fuel, Hotel, ShieldCheck, Quote, MapPin, etc.).
- Components: shadcn `Button` with a custom `brand` variant (red) and `ghost-dark` variant (translucent dark).

## Assets

- Generate hero image (`src/assets/hero-officers.jpg`, premium tier, 1536x1024): Snesenzo-style South African security officers in black/red tactical uniforms standing confidently in front of branded SUVs and a modern corporate building, cinematic dramatic lighting. No Blue Security branding.
- Generate SSG shield logo SVG/PNG (`src/assets/ssg-logo.png`, transparent, premium): stylized red+navy shield with "SSG" — closely inspired by uploaded logo, on solid white background.
- Generate CEO portrait placeholder (`src/assets/ceo-portrait.jpg`): professional headshot, South African businessman in suit.
- Coverage map: inline SVG of a simplified South Africa silhouette with KZN filled red and Mpumalanga filled navy (hand-authored simplified path, 150px tall).

## Page sections (in order, all inside `<main>`)

1. **Hero** (`<section>`, 430–460px mobile / 620px desktop)
   - Background: hero image with `linear-gradient(135deg, rgba(6,16,22,0.85), rgba(6,16,22,0.35))` overlay.
   - Sticky-style absolute header (72px): hamburger (left), SSG logo + "SNESENZO / SECURITY GROUP" + tagline + 3 red stars (center-left), red `GET PROTECTED` button (right).
   - Bottom-left content block: eyebrow "PROFESSIONAL. RELIABLE. ACCOUNTABLE.", H1 "STRENGTH & CONFIDENCE IN **PROTECTION** SERVICES" (PROTECTION in red), paragraph, two CTAs: red `REQUEST A QUOTE →` and dark translucent `📞 061 169 0365`.

2. **Main wrapper** — `bg-brand-surface`, `px-3.5 pb-5`, child cards `rounded-[14px]`. First card uses `-mt-[18px]` to overlap hero.

3. **Who We Are card** (white) — red 3px vertical bar + uppercase title + body paragraph.

4. **Credential strip** (nested inside Who We Are card) — `bg-brand-navy`, 4-col grid, each cell: red 34px circle icon (FileText / ShieldCheck / Award / MapPin) + tiny uppercase label + value.

5. **Our Services card** (white) — 2-col grid (mobile) / 3 (tablet) / 5 (desktop), 10 service tiles with red lucide icon + bold label.

6. **Our Four Pillars card** (`bg-brand-navy`) — 2-col grid (4 on tablet+), each: red icon + uppercase title + description.

7. **Coverage Areas + Client Base card** (white, stacked mobile / side-by-side desktop) — SA SVG map with legend + 2-col client grid (7 items, last spans full width).

8. **Why Choose Snesenzo card** (`bg-brand-navy`, faint shield watermark via absolutely-positioned low-opacity logo) — 6-item 2-col checklist with red check icons.

9. **CEO Quote card** (white) — circular portrait + large red Quote icon + italic quote + red name + role.

10. **Final CTA footer card** (`bg-brand-navy`) — logo + heading "LET'S PROTECT WHAT MATTERS MOST" + subtext + stacked phone & email buttons (mobile) / inline (desktop). Followed by tiny address/copyright line.

## Responsive rules

- Tailwind breakpoints: base (mobile 390px), `md:` tablet (720px max-width container), `lg:` desktop (1120px max-width container).
- Hero headline: `text-[34px] lg:text-[64px]`.
- Services: `grid-cols-2 md:grid-cols-3 lg:grid-cols-5`.
- Pillars: `grid-cols-2 md:grid-cols-4`.
- Coverage + Client Base: stacked mobile, `lg:grid-cols-2` desktop.
- Footer contact buttons: `flex-col md:flex-row`.

## Design tokens added to styles.css

```
--brand-navy, --brand-charcoal, --brand-red, --brand-surface, --brand-muted
--gradient-hero: linear-gradient(135deg, color-mix(in oklab, var(--brand-navy) 85%, transparent), color-mix(in oklab, var(--brand-navy) 35%, transparent))
--shadow-card: 0 4px 16px -4px rgb(0 0 0 / 0.08)
```

## QA before finishing

- Set preview viewport to mobile (390px) and verify against the mockup feel.
- Check tablet + desktop breakpoints render without overflow.
- Confirm no placeholder remains in `src/routes/index.tsx`.
- Verify build passes (no missing assets/imports).

No Lovable Cloud, forms, or backend needed — this is a static marketing page. The phone/email CTAs use plain `tel:` / `mailto:` links.
