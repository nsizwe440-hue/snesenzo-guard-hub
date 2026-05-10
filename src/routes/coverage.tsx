import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Briefcase, Landmark, Home, GraduationCap, Fuel, Wheat, User, ArrowRight,
  Headphones, Siren, MapPin,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { getImage } from "@/assets/optimized";

export const Route = createFileRoute("/coverage")({
  head: () => ({
    meta: [
      { title: "Our Coverage: KwaZulu-Natal & Mpumalanga | Snesenzo Security Group" },
      { name: "description", content: "Snesenzo Security Group operates across KZN and Mpumalanga, protecting corporate, government, agricultural and private clients." },
      { property: "og:title", content: "Coverage Areas | Snesenzo Security Group" },
      { property: "og:description", content: "Disciplined, deployed and accountable officers across two provinces." },
    ],
  }),
  component: CoveragePage,
});

const clients = [
  { icon: Briefcase, label: "Corporate" },
  { icon: Landmark, label: "Government" },
  { icon: Home, label: "Estates & Communities" },
  { icon: GraduationCap, label: "Schools" },
  { icon: Fuel, label: "Petroleum & Industrial" },
  { icon: Wheat, label: "Agriculture & Farms" },
  { icon: User, label: "Private Individuals" },
];

const people = [
  { name: "people-deployed", label: "Deployed" },
  { name: "people-disciplined", label: "Disciplined" },
  { name: "people-accountable", label: "Accountable" },
];

function CoveragePage() {
  return (
    <div className="bg-brand-surface">
      <section
        className="relative bg-brand-navy text-white px-5 py-12 md:py-20 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(90deg, rgba(6,16,22,0.92) 0%, rgba(6,16,22,0.7) 45%, rgba(6,16,22,0.35) 100%), url(${getImage("hero-ssg-vehicle").fallback.url})` }}
      >
        <div className="max-w-[1120px] mx-auto relative">
          <div className="w-10 h-[2px] bg-brand-red mb-3" />
          <p className="text-brand-red text-[10px] font-extrabold tracking-[0.2em] uppercase">Where we operate</p>
          <h1 className="font-display text-[36px] md:text-[56px] leading-[0.95] mt-2">COVERAGE AREAS</h1>
          <p className="text-white/75 text-[14px] max-w-[620px] mt-4">
            We deliver protection services across KwaZulu-Natal and Mpumalanga — from coastal cities to inland farms.
          </p>
        </div>
      </section>

      <main className="px-5 py-10 max-w-[1120px] mx-auto">
        <Reveal as="div" variant="fade-up" className="rounded-[14px] overflow-hidden mb-5 relative h-[180px] md:h-[240px]">
          <ResponsiveImage name="action-farm-real" alt="Officers on patrol across KZN & Mpumalanga" sizes="100vw" className="absolute inset-0 w-full h-full" imgClassName="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/85 via-brand-navy/55 to-transparent" />
          <div className="relative h-full flex items-center px-6 md:px-10">
            <div>
              <p className="text-brand-red text-[10px] font-extrabold tracking-[0.2em] uppercase mb-1">Two provinces. One standard.</p>
              <h2 className="font-display text-white text-[22px] md:text-[32px] leading-tight max-w-[520px]">From coastal cities to inland farms — local boots on the ground.</h2>
            </div>
          </div>
        </Reveal>

        <Reveal as="section" variant="fade-up" className="bg-white rounded-[14px] p-5 md:p-7 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)]">
          <ResponsiveImage name="coverage-map" alt="Snesenzo Security coverage areas: KwaZulu-Natal and Mpumalanga" sizes="(min-width: 768px) 720px, 100vw" className="block w-full max-w-[720px] mx-auto" imgClassName="w-full h-auto" />
          <div className="flex items-center justify-center gap-6 mt-3 text-[12px] text-[#374151] font-semibold">
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-brand-red" /> KwaZulu-Natal</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-brand-navy" /> Mpumalanga</span>
          </div>
        </Reveal>

        {/* Town list */}
        <Reveal as="section" variant="fade-up" className="mt-5 bg-white rounded-[14px] p-5 md:p-7 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-[3px] h-[18px] bg-brand-red rounded-sm" />
            <h2 className="font-display text-[#111827] text-[18px] tracking-wide">WHERE EXACTLY WE OPERATE</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-brand-red text-[11px] font-extrabold tracking-[0.18em] uppercase mb-3">KwaZulu-Natal</p>
              <ul className="grid grid-cols-2 gap-y-2 text-[13px] text-[#374151]">
                {["Utrecht","Newcastle","Dundee","Vryheid","Ladysmith","Madadeni","Osizweni"].map((t) => (
                  <li key={t} className="flex items-center gap-2"><MapPin size={14} className="text-brand-red shrink-0" />{t}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-brand-red text-[11px] font-extrabold tracking-[0.18em] uppercase mb-3">Mpumalanga</p>
              <ul className="grid grid-cols-2 gap-y-2 text-[13px] text-[#374151]">
                {["Volksrust","Wakkerstroom","Piet Retief","Ermelo","Standerton"].map((t) => (
                  <li key={t} className="flex items-center gap-2"><MapPin size={14} className="text-brand-red shrink-0" />{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Response promise */}
        <Reveal as="section" variant="fade-up" className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { icon: Headphones, title: "24/7 Control Room", body: "Always staffed. Always reachable. Always logging." },
            { icon: Siren, title: "Armed Response on Standby", body: "Trained officers, rapid dispatch across our coverage." },
            { icon: User, title: "Local Officers, Local Knowledge", body: "Recruited from the communities we protect." },
          ].map((s) => (
            <div key={s.title} className="bg-white rounded-[14px] p-5 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)] border-t-4 border-brand-red">
              <s.icon size={22} className="text-brand-red mb-2" />
              <p className="font-display text-brand-navy text-[16px] mb-1">{s.title}</p>
              <p className="text-[#4B5563] text-[12.5px] leading-[1.6]">{s.body}</p>
            </div>
          ))}
        </Reveal>

        {/* Clients */}
        <Reveal as="section" variant="fade-up" className="mt-5 bg-white rounded-[14px] p-5 md:p-7 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-[3px] h-[18px] bg-brand-red rounded-sm" />
            <h2 className="font-display text-[#111827] text-[18px] tracking-wide">OUR CLIENT BASE</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {clients.map((c, i) => (
              <Reveal key={c.label} variant="fade-up" delay={i * 60} className="rounded-lg border border-[#E5E7EB] p-3 flex flex-col items-center justify-center gap-2 text-center min-h-[88px]">
                <c.icon size={26} className="text-brand-red" />
                <span className="text-[11px] font-bold text-[#111827]">{c.label}</span>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* People */}
        <Reveal as="section" variant="fade-up" className="mt-5 bg-brand-navy rounded-[14px] p-5 md:p-7">
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-[3px] h-[18px] bg-brand-red rounded-sm" />
            <h2 className="font-display text-white text-[18px] tracking-wide">OUR PEOPLE ON THE GROUND</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {people.map((p, i) => (
              <Reveal key={p.label} variant="zoom-in" delay={i * 100} className="rounded-lg overflow-hidden bg-black">
                <ResponsiveImage name={p.name} alt={p.label} sizes="(min-width: 768px) 33vw, 100vw" className="block w-full aspect-[3/4] overflow-hidden" imgClassName="w-full h-full object-cover" />
                <div className="bg-black px-3 py-2.5">
                  <div className="w-6 h-[2px] bg-brand-red mb-1" />
                  <p className="text-white text-[12px] font-extrabold uppercase tracking-wide leading-tight">{p.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" variant="fade-up" className="mt-5 text-center">
          <Link to="/contact" className="inline-flex h-12 px-6 items-center justify-center gap-2 rounded-lg bg-brand-red text-white text-[13px] font-bold uppercase tracking-wide hover:opacity-90">
            Get protected in your area <ArrowRight size={16} />
          </Link>
        </Reveal>
      </main>
    </div>
  );
}
