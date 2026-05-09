## Add "Our People on the Ground" + update founder photo

### 1. New section after Coverage/Clients

Insert a new section between the COVERAGE + CLIENTS card and the WHY CHOOSE card in `src/routes/index.tsx`:

- Dark navy card matching the other dark sections (`bg-brand-navy rounded-[14px] p-[18px] mt-3.5`)
- Title: **OUR PEOPLE ON THE GROUND** (uses existing `SectionTitle dark`)
- Three real Snesenzo photos shown side-by-side on a 3-column grid (`grid grid-cols-3 gap-2`), each with a black caption bar underneath:
  - Photo 1 (single officer in front of branded vehicle, image `124661.jpg`) — label **Deployed**
  - Photo 2 (two officers in front of branded vehicle at construction site, image `124663.jpg`) — label **Disciplined**
  - Photo 3 (will generate a third matching photo of officers near a vehicle to fill the slot, since only two real ones were uploaded) — label **Accountable**
- Mobile-first: at 390–460px the 3 photos fit in one row using `aspect-[3/4]` `object-cover` with rounded corners; labels are small black bars below each image with white uppercase text + red accent line.

Asset steps:
- Copy `user-uploads://124661.jpg` → `src/assets/people-deployed.jpg`
- Copy `user-uploads://124663.jpg` → `src/assets/people-disciplined.jpg`
- Generate `src/assets/people-accountable.jpg` (Snesenzo officers near patrol vehicle, similar style) for the third tile

### 2. Replace founder photo + fix size and name

In the CEO QUOTE section:
- Copy `user-uploads://124473.jpg` → `src/assets/ceo-portrait.jpg` (overwrite existing)
- Increase the photo size from `74×74` rounded circle to a larger `w-28 h-32` (≈112×128) rounded rectangle with `object-cover` so the founder is clearly visible — still fits beside the quote on mobile
- Update the name from **Mr Senzo S Ndlovu** to **Mr Senzo S Nkosi** to match the mockup
- Keep the rest of the quote, role, and red accent unchanged

### 3. Quietly fix existing hydration mismatch in footer

The mailto `<a>` has whitespace between `<Mail />` and the email text causing a hydration warning. Tighten the JSX to remove the stray space (no visual change).

### Result

Mobile (≤460px) shows: Coverage + Clients card → **Our People on the Ground** (3 photos in a row, labelled Deployed / Disciplined / Accountable) → Why Choose Snesenzo → CEO quote with the new, larger founder portrait and the correct name. No other sections change.
