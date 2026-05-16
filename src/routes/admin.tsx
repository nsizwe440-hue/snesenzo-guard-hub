import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { formatDistanceToNow, format, subDays } from "date-fns";
import {
  Loader2, LogOut, Download, Mail, Phone, FileText, Briefcase, Trash2,
  Search, Filter, X, CheckSquare, Square, Archive, Eye, Inbox, TrendingUp, Clock, AlertCircle,
} from "lucide-react";
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription,
} from "@/components/ui/sheet";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin Dashboard | Snesenzo" }, { name: "robots", content: "noindex" }] }),
  component: AdminPage,
});

type Quote = {
  id: string; name: string; email: string; phone: string | null; company: string | null;
  service: string | null; message: string; status: string; created_at: string;
};
type Cv = {
  id: string; name: string; email: string; phone: string | null; role_interest: string | null;
  message: string | null; cv_file_path: string | null; status: string; created_at: string;
};
type AnyRow = (Quote & { _kind: "quote" }) | (Cv & { _kind: "cv" });

function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [authed, setAuthed] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setAuthed(!!session);
      if (session) checkRole(session.user.id);
      else { setIsAdmin(false); setLoading(false); }
    });
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) { setAuthed(true); checkRole(data.session.user.id); }
      else setLoading(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  async function checkRole(uid: string) {
    const { data } = await supabase.from("user_roles").select("role").eq("user_id", uid).eq("role", "admin").maybeSingle();
    setIsAdmin(!!data);
    setLoading(false);
  }

  if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin" /></div>;
  if (!authed) return <LoginForm />;
  if (!isAdmin) return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center gap-4 bg-brand-surface">
      <h1 className="font-display text-2xl text-brand-navy">Not authorised</h1>
      <p className="text-sm text-[#4B5563]">This account doesn't have admin access.</p>
      <button onClick={() => supabase.auth.signOut()} className="h-10 px-4 rounded-lg bg-brand-navy text-white text-sm font-bold uppercase">Sign out</button>
    </div>
  );
  return <Dashboard />;
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setSubmitting(false);
    if (error) toast.error(error.message);
    else toast.success("Signed in");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-surface px-4">
      <form onSubmit={submit} className="w-full max-w-sm bg-white rounded-2xl p-6 md:p-8 shadow-lg">
        <div className="w-10 h-[2px] bg-brand-red mb-3" />
        <h1 className="font-display text-brand-navy text-2xl mb-1">ADMIN SIGN IN</h1>
        <p className="text-[#6B7280] text-[12px] mb-5">Snesenzo Security Group</p>
        <label className="block mb-3">
          <span className="text-[12px] font-bold uppercase tracking-wider text-brand-navy">Email</span>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
            className="mt-1 h-11 w-full px-3 rounded-lg border border-[#E5E7EB] text-[14px] focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red" />
        </label>
        <label className="block mb-5">
          <span className="text-[12px] font-bold uppercase tracking-wider text-brand-navy">Password</span>
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
            className="mt-1 h-11 w-full px-3 rounded-lg border border-[#E5E7EB] text-[14px] focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red" />
        </label>
        <button type="submit" disabled={submitting}
          className="w-full h-12 rounded-lg bg-brand-red text-white text-[13px] font-bold uppercase tracking-wide hover:opacity-90 disabled:opacity-60 inline-flex items-center justify-center gap-2">
          {submitting && <Loader2 size={16} className="animate-spin" />} Sign in
        </button>
      </form>
    </div>
  );
}

type TabKey = "quotes" | "cvs" | "all";
type StatusFilter = "all" | "new" | "read" | "archived";
type DateFilter = "all" | "today" | "week" | "month";
type SortKey = "newest" | "oldest" | "name";

function Dashboard() {
  const [tab, setTab] = useState<TabKey>("quotes");
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [cvs, setCvs] = useState<Cv[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [dateFilter, setDateFilter] = useState<DateFilter>("all");
  const [sort, setSort] = useState<SortKey>("newest");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [detail, setDetail] = useState<AnyRow | null>(null);

  const load = async () => {
    const [q, c] = await Promise.all([
      supabase.from("quote_requests").select("*").order("created_at", { ascending: false }),
      supabase.from("cv_submissions").select("*").order("created_at", { ascending: false }),
    ]);
    if (q.data) setQuotes(q.data as Quote[]);
    if (c.data) setCvs(c.data as Cv[]);
    setLoading(false);
  };
  useEffect(() => { load(); }, []);

  // Realtime
  const initialized = useRef(false);
  useEffect(() => {
    const ch = supabase
      .channel("admin-feed")
      .on("postgres_changes", { event: "*", schema: "public", table: "quote_requests" }, (payload) => {
        if (payload.eventType === "INSERT" && initialized.current) toast.success(`New quote from ${(payload.new as Quote).name}`);
        load();
      })
      .on("postgres_changes", { event: "*", schema: "public", table: "cv_submissions" }, (payload) => {
        if (payload.eventType === "INSERT" && initialized.current) toast.success(`New CV from ${(payload.new as Cv).name}`);
        load();
      })
      .subscribe();
    const t = setTimeout(() => { initialized.current = true; }, 1500);
    return () => { clearTimeout(t); supabase.removeChannel(ch); };
  }, []);

  const newQuotes = quotes.filter((q) => q.status === "new").length;
  const newCvs = cvs.filter((c) => c.status === "new").length;
  const totalUnread = newQuotes + newCvs;

  // Tab title unread count
  useEffect(() => {
    const base = "Admin Dashboard | Snesenzo";
    document.title = totalUnread > 0 ? `(${totalUnread}) ${base}` : base;
  }, [totalUnread]);

  // Build dataset for active tab
  const allRows: AnyRow[] = useMemo(() => {
    const qs: AnyRow[] = quotes.map((q) => ({ ...q, _kind: "quote" as const }));
    const cs: AnyRow[] = cvs.map((c) => ({ ...c, _kind: "cv" as const }));
    return [...qs, ...cs];
  }, [quotes, cvs]);

  const baseRows: AnyRow[] = useMemo(() => {
    if (tab === "quotes") return quotes.map((q) => ({ ...q, _kind: "quote" as const }));
    if (tab === "cvs") return cvs.map((c) => ({ ...c, _kind: "cv" as const }));
    return allRows;
  }, [tab, quotes, cvs, allRows]);

  const filtered = useMemo(() => {
    const now = new Date();
    const cutoff = dateFilter === "today" ? subDays(now, 1) : dateFilter === "week" ? subDays(now, 7) : dateFilter === "month" ? subDays(now, 30) : null;
    const s = search.trim().toLowerCase();
    let rows = baseRows.filter((r) => {
      if (statusFilter !== "all" && r.status !== statusFilter) return false;
      if (cutoff && new Date(r.created_at) < cutoff) return false;
      if (s) {
        const hay = `${r.name} ${r.email} ${r.phone ?? ""} ${"message" in r ? r.message ?? "" : ""} ${"service" in r ? r.service ?? "" : ""} ${"company" in r ? r.company ?? "" : ""} ${"role_interest" in r ? r.role_interest ?? "" : ""}`.toLowerCase();
        if (!hay.includes(s)) return false;
      }
      return true;
    });
    if (sort === "oldest") rows = rows.sort((a, b) => +new Date(a.created_at) - +new Date(b.created_at));
    else if (sort === "name") rows = rows.sort((a, b) => a.name.localeCompare(b.name));
    else rows = rows.sort((a, b) => +new Date(b.created_at) - +new Date(a.created_at));
    return rows;
  }, [baseRows, search, statusFilter, dateFilter, sort]);

  // Stats
  const stats = useMemo(() => {
    const now = new Date();
    const day = subDays(now, 1);
    const week = subDays(now, 7);
    const yesterday = subDays(now, 2);
    const todayCount = allRows.filter((r) => new Date(r.created_at) >= day).length;
    const yesterdayCount = allRows.filter((r) => { const d = new Date(r.created_at); return d >= yesterday && d < day; }).length;
    const weekCount = allRows.filter((r) => new Date(r.created_at) >= week).length;
    return {
      today: todayCount,
      todayDelta: todayCount - yesterdayCount,
      week: weekCount,
      pending: totalUnread,
      total: allRows.length,
    };
  }, [allRows, totalUnread]);

  const clearFilters = () => { setSearch(""); setStatusFilter("all"); setDateFilter("all"); setSort("newest"); };
  const activeFilterCount = (statusFilter !== "all" ? 1 : 0) + (dateFilter !== "all" ? 1 : 0) + (sort !== "newest" ? 1 : 0);

  const toggleSelect = (id: string) => setSelected((p) => { const n = new Set(p); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const selectAll = () => setSelected(new Set(filtered.map((r) => r.id)));
  const clearSelection = () => setSelected(new Set());

  const bulkUpdate = async (status: string) => {
    const ids = [...selected];
    if (!ids.length) return;
    const qIds = ids.filter((id) => quotes.some((q) => q.id === id));
    const cIds = ids.filter((id) => cvs.some((c) => c.id === id));
    await Promise.all([
      qIds.length ? supabase.from("quote_requests").update({ status }).in("id", qIds) : null,
      cIds.length ? supabase.from("cv_submissions").update({ status }).in("id", cIds) : null,
    ]);
    toast.success(`${ids.length} updated`);
    clearSelection(); load();
  };
  const bulkDelete = async () => {
    if (!selected.size) return;
    if (!confirm(`Delete ${selected.size} item(s)? This cannot be undone.`)) return;
    const ids = [...selected];
    const qIds = ids.filter((id) => quotes.some((q) => q.id === id));
    const cIds = ids.filter((id) => cvs.some((c) => c.id === id));
    const cvPaths = cvs.filter((c) => cIds.includes(c.id) && c.cv_file_path).map((c) => c.cv_file_path!);
    if (cvPaths.length) await supabase.storage.from("cvs").remove(cvPaths);
    await Promise.all([
      qIds.length ? supabase.from("quote_requests").delete().in("id", qIds) : null,
      cIds.length ? supabase.from("cv_submissions").delete().in("id", cIds) : null,
    ]);
    toast.success(`${ids.length} deleted`);
    clearSelection(); load();
  };

  const exportCsv = () => {
    if (!filtered.length) { toast.error("Nothing to export"); return; }
    const headers = ["Type", "Date", "Status", "Name", "Email", "Phone", "Service/Role", "Company", "Message", "CV File"];
    const rows = filtered.map((r) => [
      r._kind === "quote" ? "Quote" : "CV",
      format(new Date(r.created_at), "yyyy-MM-dd HH:mm"),
      r.status, r.name, r.email, r.phone ?? "",
      r._kind === "quote" ? r.service ?? "" : r.role_interest ?? "",
      r._kind === "quote" ? r.company ?? "" : "",
      "message" in r ? (r.message ?? "").replace(/\n/g, " ") : "",
      r._kind === "cv" ? r.cv_file_path ?? "" : "",
    ]);
    const csv = [headers, ...rows].map((row) => row.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `snesenzo-${tab}-${format(new Date(), "yyyy-MM-dd")}.csv`;
    a.click(); URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-brand-surface">
      <header className="sticky top-0 z-20 bg-brand-navy text-white px-4 py-3 flex items-center justify-between shadow-md">
        <div>
          <p className="text-brand-red text-[10px] font-extrabold tracking-[0.2em] uppercase">Admin</p>
          <h1 className="font-display text-lg md:text-xl">SNESENZO DASHBOARD</h1>
        </div>
        <button onClick={() => supabase.auth.signOut()}
          className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-[12px] font-bold uppercase">
          <LogOut size={14} /> <span className="hidden sm:inline">Sign out</span>
        </button>
      </header>

      <div className="px-4 pt-4 max-w-[1200px] mx-auto pb-24">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-4">
          <StatCard icon={<Clock size={14} />} label="New today" value={stats.today} sub={stats.todayDelta === 0 ? "Same as yesterday" : stats.todayDelta > 0 ? `+${stats.todayDelta} vs yesterday` : `${stats.todayDelta} vs yesterday`} accent />
          <StatCard icon={<TrendingUp size={14} />} label="This week" value={stats.week} sub="Last 7 days" />
          <StatCard icon={<AlertCircle size={14} />} label="Pending" value={stats.pending} sub="Unread items" highlight={stats.pending > 0} />
          <StatCard icon={<Inbox size={14} />} label="All-time" value={stats.total} sub="Total submissions" />
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-3 border-b border-[#E5E7EB] overflow-x-auto -mx-1 px-1">
          <TabBtn active={tab === "quotes"} onClick={() => { setTab("quotes"); clearSelection(); }} icon={<Briefcase size={14} />} label="Quotes" badge={newQuotes} />
          <TabBtn active={tab === "cvs"} onClick={() => { setTab("cvs"); clearSelection(); }} icon={<FileText size={14} />} label="CVs" badge={newCvs} />
          <TabBtn active={tab === "all"} onClick={() => { setTab("all"); clearSelection(); }} icon={<Inbox size={14} />} label="All" badge={totalUnread} />
        </div>

        {/* Toolbar */}
        <div className="sticky top-[60px] z-10 bg-brand-surface py-2 mb-3 space-y-2">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search name, email, message…"
                className="h-10 w-full pl-9 pr-9 rounded-lg border border-[#E5E7EB] bg-white text-[13px] focus:outline-none focus:border-brand-red" />
              {search && <button onClick={() => setSearch("")} className="absolute right-2 top-1/2 -translate-y-1/2 p-1"><X size={14} className="text-[#9CA3AF]" /></button>}
            </div>
            <button onClick={() => setFiltersOpen((v) => !v)}
              className="relative h-10 px-3 rounded-lg border border-[#E5E7EB] bg-white text-[12px] font-bold uppercase inline-flex items-center gap-1.5 text-brand-navy">
              <Filter size={14} /> <span className="hidden sm:inline">Filters</span>
              {activeFilterCount > 0 && <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-brand-red text-white text-[10px] inline-flex items-center justify-center">{activeFilterCount}</span>}
            </button>
            <button onClick={exportCsv} className="h-10 px-3 rounded-lg border border-[#E5E7EB] bg-white text-[12px] font-bold uppercase inline-flex items-center gap-1.5 text-brand-navy">
              <Download size={14} /> <span className="hidden md:inline">Export</span>
            </button>
          </div>

          {filtersOpen && (
            <div className="bg-white rounded-lg border border-[#E5E7EB] p-3 space-y-2.5">
              <FilterGroup label="Status" value={statusFilter} onChange={(v) => setStatusFilter(v as StatusFilter)}
                options={[["all", "All"], ["new", "New"], ["read", "Read"], ["archived", "Archived"]]} />
              <FilterGroup label="Date" value={dateFilter} onChange={(v) => setDateFilter(v as DateFilter)}
                options={[["all", "All time"], ["today", "Today"], ["week", "7 days"], ["month", "30 days"]]} />
              <FilterGroup label="Sort" value={sort} onChange={(v) => setSort(v as SortKey)}
                options={[["newest", "Newest"], ["oldest", "Oldest"], ["name", "Name A–Z"]]} />
              {activeFilterCount > 0 && (
                <button onClick={clearFilters} className="text-[11px] font-bold uppercase text-brand-red">Clear filters</button>
              )}
            </div>
          )}

          <div className="flex items-center justify-between text-[11px] text-[#6B7280]">
            <span>Showing {filtered.length} of {baseRows.length}</span>
            {filtered.length > 0 && (
              <button onClick={selected.size === filtered.length ? clearSelection : selectAll}
                className="inline-flex items-center gap-1 font-bold uppercase text-brand-navy">
                {selected.size === filtered.length ? <CheckSquare size={12} /> : <Square size={12} />}
                {selected.size === filtered.length ? "Unselect all" : "Select all"}
              </button>
            )}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-16"><Loader2 className="animate-spin text-brand-navy" /></div>
        ) : !filtered.length ? (
          <Empty label={search || activeFilterCount ? "No matches for current filters." : "No submissions yet."} />
        ) : (
          <div className="space-y-3">
            {filtered.map((r) => (
              <RowCard key={`${r._kind}-${r.id}`} row={r} selected={selected.has(r.id)} onToggle={() => toggleSelect(r.id)} onOpen={() => setDetail(r)} />
            ))}
          </div>
        )}
      </div>

      {/* Bulk action bar */}
      {selected.size > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-30 bg-brand-navy text-white px-4 py-3 shadow-2xl">
          <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-2">
            <span className="text-[13px] font-bold">{selected.size} selected</span>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => bulkUpdate("read")} className="h-9 px-3 rounded-md bg-white/10 hover:bg-white/20 text-[11px] font-bold uppercase inline-flex items-center gap-1"><Eye size={12} /> Mark read</button>
              <button onClick={() => bulkUpdate("archived")} className="h-9 px-3 rounded-md bg-white/10 hover:bg-white/20 text-[11px] font-bold uppercase inline-flex items-center gap-1"><Archive size={12} /> Archive</button>
              <button onClick={bulkDelete} className="h-9 px-3 rounded-md bg-brand-red hover:opacity-90 text-[11px] font-bold uppercase inline-flex items-center gap-1"><Trash2 size={12} /> Delete</button>
              <button onClick={clearSelection} className="h-9 px-3 rounded-md text-[11px] font-bold uppercase">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Detail sheet */}
      <Sheet open={!!detail} onOpenChange={(o) => !o && setDetail(null)}>
        <SheetContent side="right" className="w-full sm:max-w-md overflow-y-auto">
          {detail && <DetailView row={detail} onChange={() => { load(); }} onClose={() => setDetail(null)} />}
        </SheetContent>
      </Sheet>
    </div>
  );
}

function StatCard({ icon, label, value, sub, accent, highlight }: { icon: React.ReactNode; label: string; value: number; sub: string; accent?: boolean; highlight?: boolean }) {
  return (
    <div className={`bg-white rounded-xl p-3 md:p-4 border ${highlight ? "border-brand-red/40" : "border-[#E5E7EB]"}`}>
      <div className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider ${accent ? "text-brand-red" : "text-[#6B7280]"}`}>{icon} {label}</div>
      <div className="font-display text-2xl md:text-3xl text-brand-navy mt-1">{value}</div>
      <p className="text-[10px] md:text-[11px] text-[#6B7280] mt-0.5">{sub}</p>
    </div>
  );
}

function FilterGroup({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: [string, string][] }) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280] mb-1.5">{label}</p>
      <div className="flex flex-wrap gap-1.5">
        {options.map(([val, lab]) => (
          <button key={val} onClick={() => onChange(val)}
            className={`h-7 px-2.5 rounded-md text-[11px] font-bold uppercase border ${value === val ? "bg-brand-navy text-white border-brand-navy" : "bg-white text-brand-navy border-[#E5E7EB]"}`}>
            {lab}
          </button>
        ))}
      </div>
    </div>
  );
}

function TabBtn({ active, onClick, icon, label, badge }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string; badge: number }) {
  return (
    <button onClick={onClick}
      className={`relative inline-flex items-center gap-2 px-3 md:px-4 h-11 text-[12px] md:text-[13px] font-bold uppercase tracking-wider border-b-2 transition-colors whitespace-nowrap ${active ? "border-brand-red text-brand-navy" : "border-transparent text-[#6B7280] hover:text-brand-navy"}`}>
      {icon} {label}
      {badge > 0 && <span className="ml-1 inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-brand-red text-white text-[10px]">{badge}</span>}
    </button>
  );
}

function StatusBadge({ status }: { status: string }) {
  const cls = status === "new" ? "bg-brand-red/10 text-brand-red" : status === "read" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-600";
  return <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${cls}`}>{status}</span>;
}

function KindBadge({ kind }: { kind: "quote" | "cv" }) {
  return (
    <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold uppercase ${kind === "quote" ? "bg-brand-navy/10 text-brand-navy" : "bg-amber-100 text-amber-800"}`}>
      {kind === "quote" ? <Briefcase size={10} /> : <FileText size={10} />}
      {kind === "quote" ? "Quote" : "CV"}
    </span>
  );
}

function RowCard({ row, selected, onToggle, onOpen }: { row: AnyRow; selected: boolean; onToggle: () => void; onOpen: () => void }) {
  const created = new Date(row.created_at);
  const isNew24h = row.status === "new" && Date.now() - created.getTime() < 24 * 60 * 60 * 1000;
  const message = "message" in row ? row.message : null;
  return (
    <article className={`bg-white rounded-xl p-3.5 shadow-sm border transition-colors ${selected ? "border-brand-red ring-1 ring-brand-red" : "border-[#E5E7EB]"}`}>
      <div className="flex items-start gap-2.5">
        <button onClick={onToggle} className="mt-0.5 flex-shrink-0" aria-label="Select">
          {selected ? <CheckSquare size={18} className="text-brand-red" /> : <Square size={18} className="text-[#D1D5DB]" />}
        </button>
        <div className="flex-1 min-w-0 cursor-pointer" onClick={onOpen}>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <KindBadge kind={row._kind} />
            {isNew24h && <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase text-brand-red"><span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" /> New</span>}
            <StatusBadge status={row.status} />
            <span className="text-[11px] text-[#6B7280] ml-auto" title={format(created, "PPpp")}>{formatDistanceToNow(created, { addSuffix: true })}</span>
          </div>
          <p className="font-display text-brand-navy text-[15px] truncate">{row.name}</p>
          <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-[12px] text-[#4B5563] mt-0.5">
            <span className="truncate inline-flex items-center gap-1"><Mail size={11} /> {row.email}</span>
            {row.phone && <span className="inline-flex items-center gap-1"><Phone size={11} /> {row.phone}</span>}
          </div>
          {row._kind === "quote" && row.service && <p className="text-[11px] text-[#6B7280] mt-1"><strong>Service:</strong> {row.service}</p>}
          {row._kind === "cv" && row.role_interest && <p className="text-[11px] text-[#6B7280] mt-1"><strong>Role:</strong> {row.role_interest}</p>}
          {message && <p className="text-[12px] text-[#374151] mt-1.5 line-clamp-2">{message}</p>}
        </div>
      </div>
    </article>
  );
}

function DetailView({ row, onChange, onClose }: { row: AnyRow; onChange: () => void; onClose: () => void }) {
  const created = new Date(row.created_at);
  const table = row._kind === "quote" ? "quote_requests" : "cv_submissions";

  const setStatus = async (status: string) => {
    await supabase.from(table).update({ status }).eq("id", row.id);
    toast.success(`Marked ${status}`); onChange(); onClose();
  };
  const del = async () => {
    if (!confirm("Delete this submission?")) return;
    if (row._kind === "cv" && row.cv_file_path) await supabase.storage.from("cvs").remove([row.cv_file_path]);
    await supabase.from(table).delete().eq("id", row.id);
    toast.success("Deleted"); onChange(); onClose();
  };
  const downloadCv = async () => {
    if (row._kind !== "cv" || !row.cv_file_path) return;
    const { data, error } = await supabase.storage.from("cvs").createSignedUrl(row.cv_file_path, 60);
    if (error || !data) { toast.error("Could not generate link"); return; }
    window.open(data.signedUrl, "_blank");
  };

  // Auto-mark as read on open
  useEffect(() => {
    if (row.status === "new") {
      supabase.from(table).update({ status: "read" }).eq("id", row.id).then(() => onChange());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [row.id]);

  return (
    <>
      <SheetHeader>
        <div className="flex items-center gap-2 mb-1">
          <KindBadge kind={row._kind} />
          <StatusBadge status={row.status} />
        </div>
        <SheetTitle className="font-display text-brand-navy text-xl">{row.name}</SheetTitle>
        <SheetDescription className="text-[12px]">{format(created, "PPPPp")} · {formatDistanceToNow(created, { addSuffix: true })}</SheetDescription>
      </SheetHeader>
      <div className="mt-5 space-y-3 text-[13px]">
        <Field label="Email"><a href={`mailto:${row.email}`} className="text-brand-red break-all">{row.email}</a></Field>
        {row.phone && <Field label="Phone"><a href={`tel:${row.phone}`} className="text-brand-red">{row.phone}</a></Field>}
        {row._kind === "quote" && (
          <>
            {row.company && <Field label="Company">{row.company}</Field>}
            {row.service && <Field label="Service">{row.service}</Field>}
            <Field label="Message"><p className="whitespace-pre-wrap bg-[#F9FAFB] rounded-md p-3">{row.message}</p></Field>
          </>
        )}
        {row._kind === "cv" && (
          <>
            {row.role_interest && <Field label="Role">{row.role_interest}</Field>}
            {row.message && <Field label="Message"><p className="whitespace-pre-wrap bg-[#F9FAFB] rounded-md p-3">{row.message}</p></Field>}
            {row.cv_file_path && (
              <Field label="CV File">
                <button onClick={downloadCv} className="inline-flex items-center gap-1.5 h-9 px-3 rounded-md bg-brand-red text-white text-[11px] font-bold uppercase">
                  <Download size={12} /> Download
                </button>
              </Field>
            )}
          </>
        )}
      </div>
      <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-[#E5E7EB]">
        {row.status !== "read" && <button onClick={() => setStatus("read")} className="h-9 px-3 rounded-md bg-brand-navy text-white text-[11px] font-bold uppercase">Mark read</button>}
        {row.status !== "archived" && <button onClick={() => setStatus("archived")} className="h-9 px-3 rounded-md border border-[#E5E7EB] text-[11px] font-bold uppercase">Archive</button>}
        {row.status !== "new" && <button onClick={() => setStatus("new")} className="h-9 px-3 rounded-md border border-[#E5E7EB] text-[11px] font-bold uppercase">Mark new</button>}
        <button onClick={del} className="h-9 px-3 rounded-md border border-red-200 text-red-600 text-[11px] font-bold uppercase inline-flex items-center gap-1 ml-auto"><Trash2 size={12} /> Delete</button>
      </div>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280] mb-1">{label}</p>
      <div className="text-[13px] text-[#1F2937]">{children}</div>
    </div>
  );
}

function Empty({ label }: { label: string }) {
  return <div className="bg-white rounded-xl p-10 text-center text-[#6B7280] text-sm border border-dashed border-[#E5E7EB]">{label}</div>;
}
