# Hero, CTA & Coverage Update

## 1. Hero section redesign (`src/routes/index.tsx`, lines 139–199)

**Replace slogan block.** Drop "WE ARE / FASTER. STRONGER. SMARTER." and "FOR PEACE OF MIND / TO SNESENZO SECURITY" entirely. Replace with one focused headline:

> **STRENGTH & CONFIDENCE**
> in Protection Services

Headline uses `font-display`, white, with "STRENGTH &" in white and "CONFIDENCE" highlighted in `text-brand-red`. Smaller "in Protection Services" tagline below in white/80.

Keep the navy pill subheadline ("The undisputed leader in the security sector for over 35 years" — kept as-is, but updated to mention all three regions in step 3).

**Replace single CTA with two side-by-side action cards** (stacked on mobile, row on `sm`+):
- Card A — `Request a Quote` → `Link to="/contact"`, brand-red filled rounded button.
- Card B — `Call 063 910 2387` → `<a href="tel:+27639102387">`, navy/outline rounded button with phone icon.

This removes the overlap with the two officers in the background (the current "Get Protected" pill sits on their heads).

**Mobile sizing fixes** — current hero is too tall and the credentials cards below it are too thick on mobile:
- Reduce hero `min-h` from `min-h-[640px] lg:min-h-[760px]` to `min-h-[520px] md:min-h-[640px] lg:min-h-[760px]`.
- Reduce headline scale on mobile: `text-[34px]` (was 36px wasn't the issue, but tightening for narrower phones), keep `md:text-[64px] lg:text-[88px]`.
- Reduce `pt-20 pb-32 lg:pb-40` → `pt-16 pb-20 md:pb-32 lg:pb-40` so the inner content is more compact.
- Tighten the mobile credentials cards (lines 222–240): smaller padding (`p-3` instead of `p-4`), smaller icon circle (`w-9 h-9`), smaller gap (`gap-2.5`), and `rounded-xl` instead of `rounded-2xl`. Tighter shadow (`shadow-md`).

## 2. Save & wire new coverage map image

- Copy the uploaded map (KZN red, Mpumalanga navy, Gauteng amber) → `src/assets/coverage-map.png` (overwrite source).
- Run `node scripts/optimize-images.mjs` to regenerate `coverage-map-400.webp / -800.webp / -1448.webp` and the jpg fallback.
- No code change needed for the `<ResponsiveImage name="coverage-map" />` usages on `index.tsx` (line 470) and `coverage.tsx` (line 68) — they pick the new file automatically.
- Update legend chips on both pages to show three swatches: KwaZulu-Natal (red), Mpumalanga (navy), Gauteng Areas (amber/`#F59E0B`).
- Update the `alt` text on both pages to "Snesenzo Security coverage areas: KwaZulu-Natal, Mpumalanga and Gauteng".

## 3. Add Gauteng to all KZN/Mpumalanga copy

Change every "KZN & Mpumalanga" / "KwaZulu-Natal and Mpumalanga" reference to include Gauteng. Files & lines:

- `src/routes/index.tsx`
  - line 40 description: "...across KwaZulu-Natal, Mpumalanga & Gauteng."
  - line 45 og:description: "...across KZN, Mpumalanga & Gauteng."
  - line 82 credentials value: `"KZN, Mpumalanga & Gauteng"`
  - line 184 hero pill: "...in KZN, Mpumalanga &amp; Gauteng"
  - lines 266–267, 295: "KwaZulu-Natal, Mpumalanga and Gauteng"
- `src/routes/coverage.tsx`
  - line 13 title, 14 description, 50 hero copy, 57 alt text — all extended to include Gauteng.
  - Add a third town list column under "WHERE EXACTLY WE OPERATE" (lines 78–98): **Gauteng Areas** with `Johannesburg, Pretoria, Centurion, Midrand, Sandton`. Switch the grid from `md:grid-cols-2` to `md:grid-cols-3`.
- `src/routes/services.tsx` lines 12–13 — add Gauteng.
- `src/routes/careers.tsx` lines 10, 11, 42, 79 — add Gauteng.
- `src/routes/about.tsx` lines 16, 101, 140, 216 — add Gauteng (`"KZN, Mpumalanga & Gauteng"`).
- `src/routes/contact.tsx` line 34 — add Gauteng.
- `src/routes/__root.tsx` lines 79, 85, 86 — add Gauteng.
- `src/components/TrustedBy.tsx` line 24 — add Gauteng.

## 4. Out of scope
No changes to header, footer address (Utrecht is HQ), services list, pricing, or other visual sections.
