
# Admin Dashboard Upgrade

Goal: make `/admin` a real operations cockpit — see what's new, what's pending, what's old, search quickly, and act fast.

## What you'll get

### 1. Overview header (top of dashboard)
Four stat cards (responsive: 2x2 on mobile, 4-up on desktop):
- **New today** — quotes + CVs received in last 24h
- **New this week** — last 7 days
- **Pending (unread)** — total `status = new` across both tables
- **Total all-time** — combined submissions

Each card shows count + a tiny trend line ("3 more than yesterday").

### 2. Smarter tabs
- **Quote Requests** `(badge: new count)`
- **CV Applications** `(badge: new count)`
- **All Activity** *(new)* — combined chronological feed of both types, useful when you just want "what came in today?"

### 3. Toolbar per tab (sticky under tabs)
- **Search** — by name, email, phone, or message content
- **Status filter** — All / New / Read / Archived
- **Date filter** — Today / Last 7 days / Last 30 days / All time
- **Sort** — Newest first (default) / Oldest first / Name A–Z
- **Results count** — "Showing 12 of 47"

### 4. Better submission cards
Each card shows:
- Name + status badge
- **Relative time** ("2 hours ago") with full date on hover/tap
- **"NEW" pulse indicator** for unread items < 24h old
- Contact info (clickable email/phone)
- Quote-specific: service requested, company
- CV-specific: role applied for, file size, file type icon
- Message preview (2 lines, expand on tap)
- Action row: Mark read / Archive / Delete / (CV: Download)

### 5. Bulk actions
- Checkbox on each card
- Bulk bar appears when ≥1 selected: "Mark X as read", "Archive X", "Delete X"
- "Select all visible" toggle

### 6. Detail drawer
Tap any card → side drawer (mobile: bottom sheet) showing full record, all fields, formatted timestamp, and quick-action buttons. Easier than scrolling cramped cards.

### 7. Auto-refresh + realtime
- Supabase realtime subscription on both tables → new submissions appear instantly with a toast notification ("New quote from John Doe")
- Browser tab title shows unread count: `(3) Snesenzo Dashboard`

### 8. Export
- Button per tab: **Export CSV** (current filtered view) — for record-keeping or sharing with your team

### 9. Mobile polish
- Sticky header with tab switcher
- Filters collapse into a "Filters" button that opens a sheet (saves space)
- Cards full-width with proper tap targets
- Swipe actions on cards (swipe left → archive, right → mark read) — optional, native feel

## Out of scope (ask if you want any)
- Email/SMS notifications when a new submission arrives
- Multi-admin accounts with assignment ("assigned to John")
- Notes/comments on each submission
- Reply-from-dashboard (would need email setup)

## Technical notes
- All client-side filtering/search (data already loaded) — instant, no extra queries
- Realtime via Supabase channels on `quote_requests` and `cv_submissions`
- `date-fns` for relative timestamps (already available via shadcn deps)
- CSV export done in-browser, no server function needed
- Drawer uses existing shadcn `Sheet` component
- No schema changes required — all built on current tables

Approve and I'll build it.
