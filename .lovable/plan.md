# Hero Redesign Plan

## 1. New hero images
- Copy `user-uploads://file_00000000611071f59193c3d872e3805a.png` → `src/assets/hero-team-mobile.png` (portrait, mobile bg).
- Copy `user-uploads://file_00000000c25471f79f20625d92d52a42_2.png` → `src/assets/hero-team-desktop.png` (landscape, desktop bg).
- Run `node scripts/optimize-images.mjs` to produce `-400.webp`, `-800.webp`, `-1600.webp`, plus jpg fallbacks for both.
- Old `hero-ssg-vehicle-*` files: leave in place (still used as `og:image` preload). Switch hero usage only.

## 2. Hero markup rewrite (`src/routes/index.tsx`, ~lines 110–148)
Replace the current hero section with a new layout that mirrors the Blue Security reference:

```
[Eyebrow gone]
WE ARE
FASTER. STRONGER. SMARTER.       (STRONGER in gold/brand accent)
────────────────────────────────
| The undisputed leader in the |  (colored banner pill)
|  security sector in KZN &    |
|  Mpumalanga                  |
────────────────────────────────
        [ Get Protected ]          (rounded outline gold button)

(bottom of hero, smaller)
FOR PEACE OF MIND
TO SNESENZO SECURITY
```

Implementation details:
- Two `<picture>`-style backgrounds via CSS: use mobile image up to `md`, desktop image from `md` upward. Implemented with two absolutely-positioned `<img>` elements (`md:hidden` + `hidden md:block`) using `object-cover`, plus an overlay div for contrast.
- Overlay: dark gradient bottom-up (`linear-gradient(to top, rgba(6,16,22,0.85) 0%, rgba(6,16,22,0.35) 45%, rgba(6,16,22,0.15) 100%)`) so officers stay visible but text is legible.
- Headline: `font-display`, white, sizes `text-[44px] md:text-[72px] lg:text-[96px]`, centered. "WE ARE" smaller (`text-[18px] md:text-[24px]` tracking-wide). "STRONGER" wrapped in `<span className="text-brand-red">` (brand red = the existing gold-ish accent already used site-wide; matches design tokens — no new color needed).
- Subheadline banner: pill with `bg-brand-navy/85 text-white` rounded, padding `px-5 py-2`, max-width centered, single line on desktop, 2 lines on mobile.
- CTA: `Link to="/contact"` styled as rounded-full outline button — `border-2 border-brand-red text-white px-8 h-12` with subtle hover fill.
- Bottom strap line: absolutely positioned near bottom of hero (above credentials strip), `font-display text-white text-[18px] md:text-[28px] tracking-wide text-center`, two lines: "FOR PEACE OF MIND" / "TO SNESENZO SECURITY".
- Remove the existing eyebrow, paragraph, "Request a Quote" red button, and tel button — per request: "No other text on the hero image itself."
- Hero min-height: keep `min-h-[640px] lg:min-h-[760px]` so credentials strip still overlaps cleanly.

## 3. Preserve below-hero
- Credentials strip and all subsequent sections untouched.
- `og:image` and preload link continue to use `hero-ssg-vehicle` fallback (or switch to new desktop hero — will switch to new desktop image so social share matches).

## Out of scope
No changes to header, footer, other pages, copy elsewhere, phone number, or color tokens.
