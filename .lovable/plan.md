## Add PSIRA Accreditation Section

Insert a new section in `src/routes/index.tsx` directly after the CEO Quote section (after line 325) and before the Footer CTA.

### Assets
- Copy `user-uploads://126309.png` → `src/assets/psira-logo.png`
- Import as `psiraLogo` in `src/routes/index.tsx`

### New section markup
A white card matching the surrounding card style (`bg-white rounded-[14px] p-[18px] mt-3.5 shadow-...`):

- Small red eyebrow label: "ACCREDITATION"
- Heading: "Fully Accredited by PSIRA"
- PSIRA logo centered, `max-h-20 w-auto` on a soft neutral background block
- Short body copy (rewritten in our own words), e.g.:
  > "Snesenzo Security Group is fully registered and accredited by the Private Security Industry Regulatory Authority (PSIRA) — the official body that governs the private security industry in South Africa. This accreditation confirms that our officers, operations and training meet the strict legal and professional standards required to protect our clients with integrity."
- Subtle red 2px divider bar above the heading to match the existing visual language

No other sections change.