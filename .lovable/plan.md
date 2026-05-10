## Plan: Add real photos to services + new "Caught in the Act" section

### 1. Copy uploaded photos into project
- `user-uploads://IMG-20260507-WA0130.jpg` → `src/assets/action-farm-real.jpg` (cows + SSG vehicle on patrol)
- `user-uploads://IMG-20260507-WA0122.jpg` → `src/assets/action-industrial-real.jpg` (SSG vehicle at construction/mining site with officer)
- `user-uploads://IMG-20260507-WA0132.jpg` → `src/assets/case-farm-arrest.jpg` (suspects detained on bakkie)

### 2. Update services array in `src/routes/index.tsx`
- **Property & Farm Watch**: add `image: actionFarmReal` so the card becomes a photo card (currently icon-only)
- **Commercial & Industrial Security**: add `image: actionIndustrialReal` (currently icon-only)

This uses the existing photo-card branch in the services grid — no new layout needed.

### 3. New section: "Real Results — Farm Theft Stopped"
Insert a new full-bleed section between **Services** and **Services in Action** (or right after Services). Two-column on desktop, stacked on mobile:
- **Left**: the detainment photo (`case-farm-arrest.jpg`), rounded, shadow
- **Right**: eyebrow `Real Results` / heading `Stock theft stopped on a client farm` / 2 short paragraphs in our voice (no names, no location, no police-procedure claims) emphasizing:
  - Routine farm-watch patrol detected suspicious activity
  - Suspects intercepted and detained on-site
  - Handed over to SAPS — livestock recovered, client protected
- Subtle disclaimer line: *"Faces and identifying details intentionally not disclosed."*
- Background: light gray (`#F8FAFC`) so it sits cleanly between the white Services and navy In Action sections.

### Suggested copy (draft)
> **Real Results**
> **Stock theft stopped on a client farm**
>
> During a routine Property & Farm Watch patrol, our officers detected unusual movement on a client's grazing land. The team moved in quickly, intercepted the suspects on-site and held them until SAPS arrived. The livestock stayed with the owner — exactly where it belonged.
>
> This is what fit-for-purpose rural security looks like: visible patrols, fast decisions, and officers who know the land they're protecting.

### Files touched
- `src/assets/action-farm-real.jpg` (new)
- `src/assets/action-industrial-real.jpg` (new)
- `src/assets/case-farm-arrest.jpg` (new)
- `src/routes/index.tsx` (3 imports, 2 service entries get `image:`, 1 new `<section>`)

No header/footer/other route changes.
