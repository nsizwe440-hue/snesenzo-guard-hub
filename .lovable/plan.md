# Make logos fully fill the cards

The whitespace inside each card comes from two things:
1. The logo images themselves have built-in white padding (especially the JPGs).
2. We're using `object-contain`, which preserves the logo's own empty space.

## Fix

Switch the logos to `object-cover` so each image scales up and fully fills its card (no internal gaps), and tighten the card so the logo dominates.

Changes in `src/components/TrustedBy.tsx`:

- Card classes: remove inner padding, keep border + rounded corners, give a fixed size that matches a typical logo aspect ratio.
  - Mobile: `h-20 w-32`
  - Desktop: `h-24 w-40`
- Image classes: `w-full h-full object-cover` (no padding) so the logo zooms to fill the card edge-to-edge.
- Add `overflow-hidden` on the card so the rounded corners crop cleanly.

## Trade-off the user should know

`object-cover` zooms the logo until the card is fully filled, which can crop a few pixels off the longest edge of each logo. Given the user's explicit instruction ("no space in cards, zoom in pictures, I don't [mind cropping]"), this is the right call.

If any single logo crops too aggressively after the change, the follow-up fix is per-logo: re-export that source file with its built-in whitespace trimmed, rather than changing the layout again.

## Files touched

- `src/components/TrustedBy.tsx` only. No CSS, data, or other components.
