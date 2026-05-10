## Replace hero image with SSG-branded vehicle photo

**What changes**
1. Copy `user-uploads://IMG-20260507-WA0152.jpg` → `src/assets/hero-ssg-vehicle.jpg` (overwrite existing `hero-officers.jpg` import target by swapping the import in `src/routes/index.tsx`).
2. Update the hero `<section>` background in `src/routes/index.tsx` to use the new image.
3. Update `og:image` / `twitter:image` meta to the new hero.

**Suggestions to make the new hero land harder**

The new photo is shot front-left, vehicle on the right side of the frame, with the bright red "tops!" sign behind. That means:

- **Shift the headline block to the LEFT** (it already is) and **darken the left side more aggressively** so the white text stays legible against the busy background. Change the gradient to:
  `linear-gradient(90deg, rgba(6,16,22,0.92) 0%, rgba(6,16,22,0.7) 45%, rgba(6,16,22,0.25) 100%)`
  (left-to-right instead of diagonal — protects the text column, lets the branded vehicle breathe on the right).
- **Background position**: `center right` on desktop so the vehicle + SSG logo on the door stay visible; on mobile the existing `center` is fine.
- Optional: add a subtle bottom-to-top dark fade so the credentials strip sits cleanly over the image.

**Files touched**
- `src/assets/hero-ssg-vehicle.jpg` (new)
- `src/routes/index.tsx` (import + hero `style` + meta `og:image`/`twitter:image`)

No other sections change.
