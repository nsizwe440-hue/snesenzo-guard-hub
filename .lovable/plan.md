# Plan: New hero image + phone number update

## 1. Hero image swap
- Copy uploaded image (`user-uploads://file_00000000ba4c722fbf082af43830e966.png`) to `src/assets/hero-ssg-vehicle.png`.
- Run `node scripts/optimize-images.mjs` to regenerate optimized variants (`hero-ssg-vehicle-400.webp`, `-800.webp`, `-1600.webp`, plus `.jpg` fallback) so the existing `getImage("hero-ssg-vehicle")` keeps working with no code changes in `src/routes/index.tsx`.
- Tweak hero overlay gradient in `src/routes/index.tsx` (line 113) so the two officers + vehicle on the right stay visible: shift dark gradient to weight the left side more (e.g. `rgba(6,16,22,0.85) 0%, rgba(6,16,22,0.55) 40%, rgba(6,16,22,0.15) 75%, transparent 100%`) so headline copy on left stays legible while the subjects on the right read clearly.
- Delete the old hero source files so only the new variants remain.

## 2. Phone number replacement
Replace `061 169 0365` / `0611690365` / `+27611690365` / `27611690365` with the new number `063 910 2378` (tel/WhatsApp: `0639102378`, intl `+27639102378`) in:
- `src/components/SiteHeader.tsx`
- `src/components/StickyCallBar.tsx`
- `src/components/SiteFooter.tsx`
- `src/routes/contact.tsx` (call card + mailto context)
- `src/routes/index.tsx`
- `src/routes/about.tsx`

Display format: `063 910 2378`. `tel:` links: `tel:0639102378`. WhatsApp links: `https://wa.me/27639102378`.

## Out of scope
No other copy, layout, or component changes.
