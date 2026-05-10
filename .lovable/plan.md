## Redirect "Learn more" to /services + redesign services page with full details

### What changes

**1. Homepage "What We Do" cards — `Learn more` now links to `/services`**
On the home page, each photo card's "Learn more" link currently goes to `/services/{slug}` (a separate detail page). Change it to deep-link into the services page at `/services#{slug}` so the user lands on the right card on the all-in-one services page and can scroll/see context.

**2. Redesign `/services` — picture cards with full details + per-card Quote CTA**
Replace the current compact icon grid with a rich, scannable layout. Each service becomes its own block on the page:

- **Hero image** (for services that have one — 8 of 10 do; the two icon-only services use a branded icon block instead)
- Service title + short tagline
- Intro paragraph (`details.intro`)
- Two-column lists: "What's included" and "Who it's for" (already in `src/data/services.ts`)
- Outcome callout (red left border, light bg)
- **"Get a quote for this service →"** button that navigates to `/contact?service={slug}` — already wired to preselect on the contact form
- Each block gets `id={slug}` so the homepage `#slug` anchors land cleanly

Layout pattern:
- Alternating image-left / image-right on desktop for visual rhythm
- Stacked single-column on mobile
- Generous spacing between services

**3. Keep the existing dynamic detail page `/services/$slug`**
Still useful as a shareable, SEO-indexed deep link (e.g. from search results, social shares). No changes — homepage just stops linking to it directly.

**4. Smooth-scroll to anchor on `/services`**
When the page loads with a `#slug` hash, scroll that block into view smoothly with a small offset for the sticky header. Use a small `useEffect` on mount that reads `window.location.hash`.

### Files touched
- `src/routes/index.tsx` — change the homepage "Learn more" links from `to="/services/$slug"` to `to="/services" hash={s.slug}`
- `src/routes/services.tsx` — full redesign of the services list (rich blocks instead of compact grid), add hash-scroll on mount, add per-service "Get a quote" buttons that pass `?service={slug}`

### Out of scope
- No copy changes (uses existing `src/data/services.ts`)
- No changes to `/contact` form (already supports `?service=` preselect)
- No changes to `/services/$slug` detail page
- No changes to "In Action" image grid or final CTA on `/services`
