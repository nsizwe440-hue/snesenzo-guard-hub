import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, LogOut, Download, Mail, Phone, FileText, Briefcase, Trash2 } from "lucide-react";

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

function Dashboard() {
  const [tab, setTab] = useState<"quotes" | "cvs">("quotes");
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [cvs, setCvs] = useState<Cv[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const [q, c] = await Promise.all([
      supabase.from("quote_requests").select("*").order("created_at", { ascending: false }),
      supabase.from("cv_submissions").select("*").order("created_at", { ascending: false }),
    ]);
    if (q.data) setQuotes(q.data as Quote[]);
    if (c.data) setCvs(c.data as Cv[]);
    setLoading(false);
  };
  useEffect(() => { load(); }, []);

  const newQuotes = quotes.filter((q) => q.status === "new").length;
  const newCvs = cvs.filter((c) => c.status === "new").length;

  return (
    <div className="min-h-screen bg-brand-surface">
      <header className="sticky top-0 z-10 bg-brand-navy text-white px-4 py-3 flex items-center justify-between shadow-md">
        <div>
          <p className="text-brand-red text-[10px] font-extrabold tracking-[0.2em] uppercase">Admin</p>
          <h1 className="font-display text-lg md:text-xl">SNESENZO DASHBOARD</h1>
        </div>
        <button onClick={() => supabase.auth.signOut()}
          className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-[12px] font-bold uppercase">
          <LogOut size={14} /> <span className="hidden sm:inline">Sign out</span>
        </button>
      </header>

      <div className="px-4 pt-4 max-w-[1200px] mx-auto">
        <div className="flex gap-2 mb-4 border-b border-[#E5E7EB]">
          <TabBtn active={tab === "quotes"} onClick={() => setTab("quotes")} icon={<Briefcase size={14} />} label="Quote Requests" badge={newQuotes} />
          <TabBtn active={tab === "cvs"} onClick={() => setTab("cvs")} icon={<FileText size={14} />} label="CV Applications" badge={newCvs} />
        </div>

        {loading ? (
          <div className="flex justify-center py-16"><Loader2 className="animate-spin text-brand-navy" /></div>
        ) : tab === "quotes" ? (
          <QuotesList items={quotes} onChange={load} />
        ) : (
          <CvList items={cvs} onChange={load} />
        )}
      </div>
    </div>
  );
}

function TabBtn({ active, onClick, icon, label, badge }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string; badge: number }) {
  return (
    <button onClick={onClick}
      className={`relative inline-flex items-center gap-2 px-3 md:px-4 h-11 text-[12px] md:text-[13px] font-bold uppercase tracking-wider border-b-2 transition-colors ${active ? "border-brand-red text-brand-navy" : "border-transparent text-[#6B7280] hover:text-brand-navy"}`}>
      {icon} {label}
      {badge > 0 && <span className="ml-1 inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-brand-red text-white text-[10px]">{badge}</span>}
    </button>
  );
}

function StatusBadge({ status }: { status: string }) {
  const cls = status === "new" ? "bg-brand-red/10 text-brand-red" : status === "read" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-600";
  return <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${cls}`}>{status}</span>;
}

function QuotesList({ items, onChange }: { items: Quote[]; onChange: () => void }) {
  const setStatus = async (id: string, status: string) => {
    await supabase.from("quote_requests").update({ status }).eq("id", id);
    onChange();
  };
  const del = async (id: string) => {
    if (!confirm("Delete this quote?")) return;
    await supabase.from("quote_requests").delete().eq("id", id);
    toast.success("Deleted"); onChange();
  };
  if (!items.length) return <Empty label="No quote requests yet." />;
  return (
    <div className="space-y-3 pb-8">
      {items.map((q) => (
        <article key={q.id} className="bg-white rounded-xl p-4 shadow-sm border border-[#E5E7EB]">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
            <div>
              <p className="font-display text-brand-navy text-base">{q.name}</p>
              <p className="text-[11px] text-[#6B7280]">{new Date(q.created_at).toLocaleString()}</p>
            </div>
            <StatusBadge status={q.status} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[13px] text-[#374151] mb-2">
            <a href={`mailto:${q.email}`} className="inline-flex items-center gap-1.5 hover:text-brand-red break-all"><Mail size={13} /> {q.email}</a>
            {q.phone && <a href={`tel:${q.phone}`} className="inline-flex items-center gap-1.5 hover:text-brand-red"><Phone size={13} /> {q.phone}</a>}
            {q.service && <span className="text-[12px]"><strong>Service:</strong> {q.service}</span>}
            {q.company && <span className="text-[12px]"><strong>Company:</strong> {q.company}</span>}
          </div>
          <p className="text-[13px] text-[#374151] whitespace-pre-wrap bg-[#F9FAFB] rounded-md p-3 mb-3">{q.message}</p>
          <div className="flex flex-wrap gap-2">
            {q.status !== "read" && <button onClick={() => setStatus(q.id, "read")} className="h-8 px-3 rounded-md bg-brand-navy text-white text-[11px] font-bold uppercase">Mark read</button>}
            {q.status !== "archived" && <button onClick={() => setStatus(q.id, "archived")} className="h-8 px-3 rounded-md border border-[#E5E7EB] text-[11px] font-bold uppercase">Archive</button>}
            <button onClick={() => del(q.id)} className="h-8 px-3 rounded-md border border-red-200 text-red-600 text-[11px] font-bold uppercase inline-flex items-center gap-1"><Trash2 size={12} /> Delete</button>
          </div>
        </article>
      ))}
    </div>
  );
}

function CvList({ items, onChange }: { items: Cv[]; onChange: () => void }) {
  const setStatus = async (id: string, status: string) => {
    await supabase.from("cv_submissions").update({ status }).eq("id", id);
    onChange();
  };
  const del = async (id: string, path: string | null) => {
    if (!confirm("Delete this application?")) return;
    if (path) await supabase.storage.from("cvs").remove([path]);
    await supabase.from("cv_submissions").delete().eq("id", id);
    toast.success("Deleted"); onChange();
  };
  const downloadCv = async (path: string) => {
    const { data, error } = await supabase.storage.from("cvs").createSignedUrl(path, 60);
    if (error || !data) { toast.error("Could not generate download link"); return; }
    window.open(data.signedUrl, "_blank");
  };
  if (!items.length) return <Empty label="No CV applications yet." />;
  return (
    <div className="space-y-3 pb-8">
      {items.map((c) => (
        <article key={c.id} className="bg-white rounded-xl p-4 shadow-sm border border-[#E5E7EB]">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
            <div>
              <p className="font-display text-brand-navy text-base">{c.name}</p>
              <p className="text-[11px] text-[#6B7280]">{new Date(c.created_at).toLocaleString()}</p>
            </div>
            <StatusBadge status={c.status} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[13px] text-[#374151] mb-2">
            <a href={`mailto:${c.email}`} className="inline-flex items-center gap-1.5 hover:text-brand-red break-all"><Mail size={13} /> {c.email}</a>
            {c.phone && <a href={`tel:${c.phone}`} className="inline-flex items-center gap-1.5 hover:text-brand-red"><Phone size={13} /> {c.phone}</a>}
            {c.role_interest && <span className="text-[12px]"><strong>Role:</strong> {c.role_interest}</span>}
          </div>
          {c.message && <p className="text-[13px] text-[#374151] whitespace-pre-wrap bg-[#F9FAFB] rounded-md p-3 mb-3">{c.message}</p>}
          <div className="flex flex-wrap gap-2">
            {c.cv_file_path && (
              <button onClick={() => downloadCv(c.cv_file_path!)} className="h-8 px-3 rounded-md bg-brand-red text-white text-[11px] font-bold uppercase inline-flex items-center gap-1"><Download size={12} /> Download CV</button>
            )}
            {c.status !== "read" && <button onClick={() => setStatus(c.id, "read")} className="h-8 px-3 rounded-md bg-brand-navy text-white text-[11px] font-bold uppercase">Mark read</button>}
            {c.status !== "archived" && <button onClick={() => setStatus(c.id, "archived")} className="h-8 px-3 rounded-md border border-[#E5E7EB] text-[11px] font-bold uppercase">Archive</button>}
            <button onClick={() => del(c.id, c.cv_file_path)} className="h-8 px-3 rounded-md border border-red-200 text-red-600 text-[11px] font-bold uppercase inline-flex items-center gap-1"><Trash2 size={12} /> Delete</button>
          </div>
        </article>
      ))}
    </div>
  );
}

function Empty({ label }: { label: string }) {
  return <div className="bg-white rounded-xl p-10 text-center text-[#6B7280] text-sm border border-dashed border-[#E5E7EB]">{label}</div>;
}
