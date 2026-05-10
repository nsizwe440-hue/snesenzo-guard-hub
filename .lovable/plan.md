## Switch "Learn more" to per-service pages + slim the homepage

### 1. New dynamic route: `/services/$slug`
Create `src/routes/services.$slug.tsx` — one route file that renders the detailed page for any service by slug (we already have slugs in `src/data/services.ts`).

Page layout:
- **Hero band** (brand-navy): eyebrow "What we do", H1 = service name, short intro
- **Hero image** (if the service has one) below the band, full-width rounded
- **Two-column body**: "What's included" and "Who it's for" lists (already in data)
- **Outcome banner** (red-bordered callout)
- **CTA row**: "Request a Quote" → `/contact`, "Back to all services" → `/services`
- **`head()`** with per-service `title` / `description` / `og:title` / `og:description` / `og:image` for SEO

Includes `notFoundComponent` if slug doesn't match any service.

### 2. Replace modal with real navigation
- Delete `src/components/ServiceDetailDialog.tsx` (no longer needed).
- **Home page (`src/routes/index.tsx`)**: remove `useState` + `<ServiceDetailDialog>`. Wrap each service card in `<Link to="/services/$slug" params={{ slug: s.slug }}>` so the whole card — and the "Learn more" — navigates.
- **Services list page (`src/routes/services.tsx`)**: same — replace `onClick={() => setActiveService(s)}` button with a `<Link>` to `/services/$slug`. Remove dialog state.

### 3. Slim the homepage services grid
Show only the **8 image-backed services** on the home page (current grid is 4-up so 8 = two clean rows on desktop). Remove the two icon-only cards from the home page:
- Integrated Fire Security Solutions
- Specialised Cleaning & Hygiene

These remain fully visible on `/services` (which lists all 10) and are reachable directly via `/services/fire-security` and `/services/cleaning-hygiene`.

Implementation: filter on home — `services.filter(s => s.image)` — so the home stays in sync if more services are added later. No data changes needed; `src/data/services.ts` continues to hold all 10.

### 4. Add a clear "View all services" link
Below the homepage services grid, add a small `<Link to="/services">View all services →</Link>` so users discover the full list (including Fire and Cleaning).

### Files touched
- `src/routes/services.$slug.tsx` (new — detail page)
- `src/components/ServiceDetailDialog.tsx` (deleted)
- `src/routes/index.tsx` (drop modal, switch to `<Link>`, filter to image services, add "View all" link)
- `src/routes/services.tsx` (drop modal, switch to `<Link>`)

### Out of scope
- No copy changes — uses existing details from `src/data/services.ts`
- No changes to `/services` list ordering or content (still shows all 10)
