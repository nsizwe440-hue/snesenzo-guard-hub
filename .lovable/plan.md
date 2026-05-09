## Founder section: full-width photo, quote below

In `src/routes/index.tsx`, restructure the CEO QUOTE section:

- Stack vertically instead of side-by-side. Replace the `flex items-center gap-3.5` row with a simple block layout.
- Show the founder photo as a full-width image at the top of the card:
  - `w-full h-auto` (natural aspect ratio, uncropped — fits the screen on mobile and the card width on larger screens)
  - `rounded-lg` corners, `object-cover` not needed since we keep natural ratio
  - Remove the fixed `120×140` sizing
- Below the image, add spacing (`mt-4`) and render the quote block:
  - Red Quote icon (unchanged)
  - Italic quote text (unchanged)
  - "Mr Senzo S Nkosi" in red, bold
  - "Chief Executive Officer" subtitle
- Keep the white card background, padding, and shadow.

No other sections change.
