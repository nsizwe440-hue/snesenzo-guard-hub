# Admin Dashboard & Backend Setup

## What I'll build

1. **Enable Lovable Cloud** (database, auth, file storage)

2. **Database tables**
   - `quote_requests` — name, email, phone, company, service, message, status (new/read/archived), created_at
   - `cv_submissions` — name, email, phone, role_interest, message, cv_file_path, status, created_at
   - `user_roles` — secure admin role table (separate from profiles, avoids privilege-escalation)
   - `has_role()` security-definer function

3. **Storage bucket** `cvs` (private) — CV files (PDF/DOC/DOCX, max 10 MB), admin-only download

4. **RLS policies**
   - Anyone (anon) can INSERT into both submission tables (so public forms work)
   - Only admins can SELECT / UPDATE / DELETE
   - CV bucket: anon insert, admin read

5. **Public forms updated** (mailto removed)
   - `src/routes/contact.tsx` → quote form saves to `quote_requests`, shows toast on success
   - `src/routes/careers.tsx` → new CV upload form (name, email, phone, role, message, file input) → uploads file to storage, inserts row in `cv_submissions`

6. **Admin auth + dashboard**
   - `/admin/login` — email + password sign-in
   - `/admin` (protected via `_authenticated` layout + admin role check) — mobile-responsive dashboard with:
     - Tabs: **Quote Requests** | **CV Submissions**
     - Card list (mobile) / table (desktop) with name, contact, date, status badge
     - Click a row → drawer/dialog with full details, mark as read/archived, download CV button
     - Unread count badges on tabs
   - Sign-out button

7. **Pre-created admin account**
   - I'll create one admin user via SQL after Cloud is enabled
   - Username (email) + password shown to you in chat after creation
   - You can change the password later from the dashboard

## Mobile responsiveness

- Dashboard uses card layout < md breakpoint, table ≥ md
- Sticky header with tab switcher and sign-out
- Drawer (not modal) for submission details on mobile
- All form inputs full-width on mobile, 2-col on desktop

## Out of scope (per your answers)

- No email notifications (dashboard only)
- No mailto fallback (forms post directly to backend)

Approve and I'll implement.
