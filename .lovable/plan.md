## Update "Our Services in Action" — full-size stacked photos

Change the section in `src/routes/index.tsx` from a 2×2 cropped grid to a single-column stack where each photo displays at its **natural aspect ratio**, full width, with the label overlaid in the bottom-left corner.

### Changes

In the `OUR SERVICES IN ACTION` section:

1. Replace `grid grid-cols-2 md:grid-cols-4 gap-2.5` with `flex flex-col gap-3`.
2. On each tile:
   - Remove `aspect-[4/3]` (which forced cropping).
   - Remove `object-cover` and `absolute inset-0` from the `<img>`.
   - Use a normal flow `<img>` with `className="w-full h-auto block"` so the photo shows in full, uncropped.
   - Keep the rounded-lg + overflow-hidden wrapper (`relative`) so the overlay clips correctly.
   - Keep the bottom gradient + red bar + white uppercase label, but make it `absolute bottom-0 left-0 right-0` with a taller gradient (`h-1/3 from-black/85 to-transparent`) so the label remains readable on tall portrait photos and short landscape ones.
3. Bump the label readability slightly: `text-[12px]` on mobile, with a stronger gradient.
4. On `md:` and up, keep it single-column (no 4-across) so photos always show in full — large screens just see a centered, narrower stack via the existing `max-w-` on `main`.

### Result

On 390px mobile and all larger screens, each of the four real Snesenzo photos (VIP escort, Retail/SPAR, Construction, Farm) renders one after the other, fully visible, with the service name overlaid clearly at the bottom of each image. No cropping, no cut-off content.

No other sections change.