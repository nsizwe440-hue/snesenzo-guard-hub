## Goal

Fix the founder's name on the About page, make About / Coverage / Contact feel less empty, and add a dedicated Careers page (linked from the header and footer).

---

## 1. About page (`src/routes/about.tsx`)

**Fix the name (high priority):**
- The quote block currently credits "Mr Senzo S Nkosi · Chief Executive Officer · PSIRA Grade A". Replace with **Ntabazwe Shemeni Wegidi Ndlovu — Founder & CEO**. (The bio paragraph already has the correct name.)

**Make it feel fuller** (currently: navy hero → portrait+bio → quote → CTA — only one image):
- Add a **"Why Snesenzo" pillars** section above the quote: 3 cards (Locally Rooted · Youth-Led & 100% Black-Owned · Personally Accountable) with icons (`MapPin`, `Users`, `ShieldCheck`).
- Add a **"Our People" image strip** reusing `people-deployed.jpg`, `people-disciplined.jpg`, `people-accountable.jpg` so the page has real photography beyond the portrait.
- Add a small **company facts band** (PSIRA 4972817 · CIPC 2024/620995/07 · Founded in Amajuba · Operating across KZN & Mpumalanga).

## 2. Coverage page (`src/routes/coverage.tsx`)

Currently has the map, client icons, and the 3-image people strip. To fill it out:
- Add a **"Where exactly we operate" town list** card under the map: two columns — KZN (Utrecht, Newcastle, Dundee, Vryheid, Ladysmith, Madadeni, Osizweni) and Mpumalanga (Volksrust, Wakkerstroom, Piet Retief, Ermelo, Standerton).
- Add a **"Response promise"** band (3 stat-style tiles): 24/7 Control Room · Armed Response on standby · Local officers, local knowledge.
- Add an `action-*` hero image (e.g. `action-farm-real.jpg`) at the top of the main content as a wide banner to break the all-white feel.

## 3. Contact page (`src/routes/contact.tsx`)

Currently: navy hero → 3 contact cards → quote form → office/hours. To round it out:
- Add an **embedded Google Map iframe** for 45 Voor Street, Utrecht under the Head Office card (no API key needed — standard `maps.google.com/maps?...&output=embed`).
- Add a **"What happens next" 3-step strip** under the form (1. We call you back · 2. Free site assessment · 3. Tailored quote within 24h).
- Add an `action-*` photo banner at the very top of the main content for visual weight.

## 4. New Careers page (`src/routes/careers.tsx`)

Clean, single-page route in the same brand style:

```text
[Navy hero]   "JOIN THE TEAM" · "Build a career in protection."
[Why work with us]   3 cards: PSIRA-registered training · Local deployment · Real growth path
[Open roles]   List of role cards: Security Officer (Grade C) · Armed Response Officer (Grade B) · Control Room Operator · Site Supervisor · Cleaner / Hygiene Operator
   each card: title · location (KZN / Mpumalanga) · requirements bullets · "Apply" button → mailto:careers@snesenzo.co.za with prefilled subject
[Requirements band]   PSIRA grade · valid ID · clear criminal record · own transport (advantage)
[CTA]   "Don't see your role? Send us your CV." → mailto
```

- Add `head()` meta (title, description, og:title, og:description).
- Reuse `Reveal`, `container`, brand colours, and `action-*` imagery for the hero.

## 5. Navigation

- Add **Careers** link to `SiteHeader` `navItems` (between Coverage and Contact) and to the `SiteFooter` Quick Links list.

---

### Technical notes

- All new sections use existing tokens: `bg-brand-navy`, `bg-brand-surface`, `text-brand-red`, `font-display`, and the `Reveal` component for animations.
- No new dependencies, no new assets — reuse existing images in `src/assets/`.
- The `mailto:careers@snesenzo.co.za` address is used for applications; if you'd prefer a different address, say so and I'll swap it.

### Out of scope

- No backend / form submission changes (apply links use mailto, like the existing quote form).
- No new images generated.
- Services page is unchanged.