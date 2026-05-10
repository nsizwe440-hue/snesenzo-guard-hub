## Goal
Convert the current one-page site into a proper multi-page site with a shared header/footer and working navigation, and add an always-visible "Call 24/7" bar on mobile. Lead capture form is deferred for later.

## New route structure

```
src/routes/
  __root.tsx        → shared shell: Header + <Outlet /> + Footer + StickyCallBar
  index.tsx         → / (Home — trimmed: hero, who we are, pillars, services teaser, CEO quote, CTA)
  services.tsx      → /services (full 10-service grid + "services in action" gallery)
  about.tsx         → /about (CEO portrait + bio + four pillars + PSIRA accreditation + credentials strip)
  coverage.tsx      → /coverage (coverage map + client base + "people on the ground")
  contact.tsx       → /contact (phone, email, address, hours, map placeholder — form added later)
```

Each route gets its own unique `head()` with title, description, og:title, og:description for SEO. Home keeps the strongest brand metadata; subpages get topic-specific copy.

## Shared shell (in `__root.tsx`)

**Header** (replaces current inline header in index.tsx):
- Logo + brand mark on the left → links to `/`
- Desktop: horizontal nav (Home, Services, About, Coverage, Contact) with active state styling via `activeProps`
- Mobile: working hamburger that opens a `Sheet` (shadcn) drawer with the same links + a "Get Protected" CTA
- Right-side "Get Protected" button → `/contact`
- Header sits above the hero on `/` (transparent over hero); solid `bg-brand-navy` on subpages

**Footer** (new, shared):
- Three columns: brand + tagline | quick links (mirroring nav) | contact block (phone, email, address, hours "24/7 Control Room")
- Bottom bar: PSIRA reg number, CIPC reg number, © year, "POPIA compliant" note
- Replaces the current footer-CTA section that lives inside index.tsx

**StickyCallBar** (new component, mobile-only):
- Fixed bottom bar, `md:hidden`, `bg-brand-red`, ~56px tall
- Two equal halves: `Call 24/7 — 061 169 0365` (tel:) | `WhatsApp` (wa.me link)
- Visible on every page; add `pb-16 md:pb-0` to root layout to prevent content overlap
- Subtle slide-up entrance animation

## Content distribution

- **Home (`/`)**: hero, WHO WE ARE + credentials strip, FOUR PILLARS, condensed services preview (top 6 + "View all services" link to `/services`), CEO quote, footer CTA → contact link
- **Services (`/services`)**: page header, full 10-tile services grid, "Our Services in Action" image gallery, CTA strip to `/contact`
- **About (`/about`)**: page header, CEO portrait + extended bio paragraph, FOUR PILLARS, "Why Choose Snesenzo?" list, PSIRA accreditation card, credentials strip
- **Coverage (`/coverage`)**: coverage map (full-width on desktop), KZN/Mpumalanga legend, OUR CLIENT BASE grid, OUR PEOPLE ON THE GROUND gallery
- **Contact (`/contact`)**: large phone + email + WhatsApp cards, physical address (45 Voor Street, Utrecht), operating hours block, placeholder note "Online quote form coming soon — please call or email"

## Files touched

**New:**
- `src/components/SiteHeader.tsx` — desktop nav + mobile sheet drawer, uses `Link` with `activeProps`
- `src/components/SiteFooter.tsx` — three-column footer
- `src/components/StickyCallBar.tsx` — fixed mobile call/WhatsApp bar
- `src/routes/services.tsx`
- `src/routes/about.tsx`
- `src/routes/coverage.tsx`
- `src/routes/contact.tsx`

**Edited:**
- `src/routes/__root.tsx` — render Header, Outlet, Footer, StickyCallBar; add bottom padding on mobile
- `src/routes/index.tsx` — remove inline header + footer-CTA + sections that moved to subpages; keep hero, who-we-are, pillars, condensed services, CEO quote
- `src/styles.css` — add small `.sticky-bar-enter` keyframe (optional)

## SEO per route (technical)

Each `head()` returns route-specific meta. Examples:
- `/services` → "Security Services in KZN & Mpumalanga | Snesenzo Security Group"
- `/about` → "About Snesenzo Security Group | PSIRA-Registered, Youth Black-Owned"
- `/coverage` → "Our Coverage: KwaZulu-Natal & Mpumalanga | Snesenzo Security Group"
- `/contact` → "Contact Snesenzo Security Group | 24/7 Control Room"

## Out of scope (deferred per your answer)
- Lead capture / quote form + email delivery — revisit later
- Individual per-service detail pages (10 sub-pages)
- Testimonials, client logos, stats counter, case studies
- Structured data / JSON-LD (`LocalBusiness` schema) — recommended next step after this lands
- Privacy policy / POPIA page

Once you approve, I'll implement in one pass and verify the build.
