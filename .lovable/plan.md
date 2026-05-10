## Add "Learn more" to services + detailed explanations

### Approach
Add a **"Learn more"** link to every service card on the home page "What We Do" section. Clicking it opens a **modal dialog** (shadcn `Dialog`) showing a full, professionally written explanation of that service — no new routes, no page reloads, works on mobile.

The same treatment will be applied on `/services` so the cards there match.

### Why a modal (not separate routes)
- 10 services would mean 10 new route files + 10 SEO pages of thin content
- Keeps the user on the page they came to
- Fast to implement, easy to edit copy in one place

### What changes

**1. New data file: `src/data/services.ts`**
Single source of truth for all 10 services — `slug`, `icon`, `label`, `shortDesc`, `image?`, and a new `details` object with:
- `intro` — 1 short paragraph
- `whatsIncluded` — bullet list (4–6 items)
- `whoItsFor` — bullet list (3–4 items)
- `outcome` — closing line

Home page (`src/routes/index.tsx`) and `/services` page both import from here so copy stays in sync.

**2. New component: `src/components/ServiceDetailDialog.tsx`**
Wraps shadcn `Dialog` with a branded layout: hero image (if available), eyebrow, title, intro, two-column "What's included / Who it's for" lists, outcome banner, and a "Request a Quote" CTA linking to `/contact`.

**3. Card updates (home + services page)**
- **Photo cards**: add a "Learn more →" button pinned bottom-right of the gradient overlay
- **Icon-only cards**: add a "Learn more →" text link below the description
- Whole card also clickable as a fallback
- Buttons styled with `text-brand-red` + `ArrowRight` icon, hover underline

**4. Detailed copy (drafted by me, ~120–180 words each)**
Covering all 10 services: VIP Protection, Events Security, CCTV & Armed Response, Commercial & Industrial, Hospitality, Petroleum/Oil/Gas, Highway Patrol, Property & Farm Watch, Integrated Fire, Specialised Cleaning. Tone matches existing site (professional, plain English, PSIRA-aware, no fluff). User can edit any after.

### Files touched
- `src/data/services.ts` (new — services array + details)
- `src/components/ServiceDetailDialog.tsx` (new)
- `src/routes/index.tsx` (import from new data file, add dialog trigger to cards)
- `src/routes/services.tsx` (same)

### Out of scope
- No new routes, no SEO pages per service, no CMS, no backend.
