## Add "Our Services in Action" section

Insert a new section in `src/routes/index.tsx` directly after the "OUR SERVICES" card and before "OUR FOUR PILLARS", using the four real Snesenzo photos you uploaded.

### Photo mapping (real, on-brand wording)

1. `user-uploads://124657.jpg` → **VIP Protection & Escort**
2. `user-uploads://124690.jpg` → **Retail & Commercial Security**
3. `user-uploads://124676.jpg` → **Construction & Industrial Site Security**
4. `user-uploads://124678.jpg` → **Property & Farm Watch**

### Steps

1. Copy the 4 uploads into `src/assets/` as:
   - `action-vip.jpg`
   - `action-retail.jpg`
   - `action-construction.jpg`
   - `action-farm.jpg`
2. Import them in `src/routes/index.tsx`.
3. Add a new `<section>` styled like the dark mockup card:
   - `bg-brand-navy rounded-[14px] p-[18px] mt-3.5`
   - Title row: red 3px bar + "OUR SERVICES IN ACTION" (white, display font), matching existing `SectionTitle dark`.
   - Mobile-first grid: `grid grid-cols-2 gap-2.5` (stacks 2x2 on 390px).
   - Tablet/desktop: `md:grid-cols-4` so all 4 sit in a row.
   - Each tile: rounded-lg, `aspect-[4/3]`, image with `object-cover w-full h-full`, dark gradient overlay (`from-black/85 via-black/20 to-transparent`), label pinned bottom-left in white uppercase bold (`text-[10.5px] leading-tight`), red 2px underline accent.
   - Use `loading="lazy"` and proper `alt` text for SEO/perf.
4. Also add the four images to the route `head()` as additional preview metadata is not needed — keep `og:image` as the hero.

### Result on 390px

A clean 2×2 photo grid of real Snesenzo operations sitting between Services and Four Pillars, matching the mockup's "Our Services in Action" block. On ≥768px it expands to a single row of 4.

No other sections, copy, or styles change.