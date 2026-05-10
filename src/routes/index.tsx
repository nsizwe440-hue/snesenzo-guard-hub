import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone, ArrowRight, Quote,
  ShieldCheck, FileText, Award, MapPin,
  UserCheck, CalendarDays, Camera, Building2, Hotel, Trees,
  Ear, Brain, Users, BadgeCheck,
} from "lucide-react";
import heroImg from "@/assets/hero-officers.jpg";
import ceo from "@/assets/ceo-portrait.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Snesenzo Security Group | Strength & Confidence in Protection Services" },
      { name: "description", content: "PSIRA-registered, 100% youth black-owned private security across KwaZulu-Natal & Mpumalanga. VIP, armed response, CCTV, events, industrial." },
      { property: "og:title", content: "Snesenzo Security Group" },
      { property: "og:description", content: "Strength & Confidence in Protection Services. PSIRA-registered security across KZN & Mpumalanga." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: LandingPage,
});

const topServices = [
  { icon: UserCheck, label: "VIP Protection" },
  { icon: CalendarDays, label: "Events Security" },
  { icon: Camera, label: "CCTV & Armed Response" },
  { icon: Building2, label: "Commercial & Industrial" },
  { icon: Hotel, label: "Hospitality" },
  { icon: Trees, label: "Property & Farm Watch" },
];

const pillars = [
  { icon: Ear, title: "Listen First", body: "We understand your needs and risks." },
  { icon: Brain, title: "Expert Knowledge", body: "We design smart, effective solutions." },
  { icon: Users, title: "Trained Personnel", body: "We deploy skilled, disciplined professionals." },
  { icon: BadgeCheck, title: "Quality Assurance", body: "We measure, monitor and continuously improve." },
];

function SectionTitle({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="block w-[3px] h-[18px] bg-brand-red rounded-sm" />
      <h2 className={`font-display text-[18px] tracking-wide ${dark ? "text-white" : "text-[#111827]"}`}>
        {children}
      </h2>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="bg-brand-surface">
      {/* HERO */}
      <section
        className="relative w-full min-h-[520px] lg:min-h-[680px] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(6,16,22,0.88) 0%, rgba(6,16,22,0.55) 55%, rgba(6,16,22,0.35) 100%), url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute left-0 right-0 bottom-0 p-[22px] md:p-10 max-w-[330px] md:max-w-[640px]">
          <p className="text-white text-[10px] font-bold tracking-[1px] mb-2.5 uppercase">
            Professional. Reliable. Accountable.
          </p>
          <h1 className="font-display text-white text-[34px] md:text-[56px] lg:text-[72px] leading-[0.95] -tracking-[1px] mb-4">
            STRENGTH &amp;<br />
            CONFIDENCE IN<br />
            <span className="text-brand-red">PROTECTION</span> SERVICES
          </h1>
          <p className="text-white text-[14px] md:text-[16px] leading-[1.55] max-w-[360px] mb-5">
            Professional, PSIRA-registered security solutions for corporate, government, commercial and private clients.
          </p>
          <div className="flex flex-row gap-2.5 flex-wrap">
            <Link
              to="/contact"
              className="inline-flex h-12 px-5 items-center justify-center gap-2 rounded-lg bg-brand-red text-white text-[13px] font-bold uppercase tracking-wide hover:opacity-90"
            >
              Request a Quote <ArrowRight size={16} />
            </Link>
            <a
              href="tel:0611690365"
              className="inline-flex h-12 px-5 items-center justify-center gap-2 rounded-lg text-white text-[13px] font-bold border"
              style={{ background: "rgba(0,0,0,0.55)", borderColor: "rgba(255,255,255,0.45)" }}
            >
              <Phone size={16} /> 061 169 0365
            </a>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <main className="px-3.5 pb-5 max-w-[430px] md:max-w-[760px] lg:max-w-[1120px] mx-auto">
        {/* WHO WE ARE */}
        <Reveal as="section" variant="fade-up" className="bg-white rounded-[14px] p-[18px] -mt-[18px] relative shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)]">
          <SectionTitle>WHO WE ARE</SectionTitle>
          <p className="text-[13px] leading-[1.55] text-[#1F2937]">
            Snesenzo Security Group (Pty) Ltd is 100% youth black-owned and provides expert, risk-based security solutions across KwaZulu-Natal &amp; Mpumalanga with professional integrity, trained personnel and 24/7 readiness — ensuring safety, compliance and peace of mind.
          </p>

          {/* Credential strip */}
          <div className="bg-brand-navy rounded-xl p-[14px] mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              { icon: FileText, label: "CIPC", value: "2024/620995/07" },
              { icon: ShieldCheck, label: "PSIRA Company", value: "4972817" },
              { icon: Award, label: "CEO Grade A", value: "4821072" },
              { icon: MapPin, label: "Operating", value: "KZN & Mpumalanga" },
            ].map((c, i) => (
              <Reveal key={c.label} variant="fade-up" delay={i * 80} className="flex items-center gap-2">
                <span className="shrink-0 inline-flex items-center justify-center w-[34px] h-[34px] rounded-full bg-brand-red text-white">
                  <c.icon size={16} />
                </span>
                <div className="leading-tight min-w-0">
                  <div className="text-white/70 text-[9px] uppercase tracking-wider font-semibold">{c.label}</div>
                  <div className="text-white text-[10px] font-bold truncate">{c.value}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-4">
            <Link to="/about" className="inline-flex items-center gap-1 text-brand-red text-[12px] font-bold uppercase tracking-wide hover:underline">
              More about us <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>

        {/* PILLARS */}
        <Reveal as="section" variant="fade-up" className="bg-brand-navy rounded-[14px] p-[18px] mt-3.5">
          <SectionTitle dark>OUR FOUR PILLARS</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mt-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} variant="fade-up" delay={i * 80}>
                <p.icon size={28} className="text-brand-red mb-2" />
                <h3 className="text-white text-[11px] uppercase font-bold mb-1 tracking-wide">{p.title}</h3>
                <p className="text-[#D1D5DB] text-[10.5px] leading-[1.35]">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* SERVICES preview */}
        <Reveal as="section" variant="fade-up" className="bg-white rounded-[14px] p-[18px] mt-3.5 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)]">
          <SectionTitle>WHAT WE DO</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {topServices.map((s, i) => (
              <Reveal
                key={s.label}
                variant="fade-up"
                delay={i * 60}
                className="min-h-[66px] rounded-lg border border-[#E5E7EB] p-2.5 flex items-center gap-2 bg-white"
              >
                <s.icon size={24} className="text-brand-red shrink-0" />
                <span className="text-[10.5px] font-bold leading-[1.15] text-[#111827]">{s.label}</span>
              </Reveal>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/services" className="inline-flex items-center gap-1 text-brand-red text-[12px] font-bold uppercase tracking-wide hover:underline">
              View all services <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>

        {/* CEO QUOTE */}
        <Reveal as="section" variant="fade-up" className="bg-white rounded-[14px] p-[18px] mt-3.5 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)]">
          <img src={ceo} alt="Mr Senzo S Nkosi" className="w-full h-auto rounded-lg block" loading="lazy" />
          <div className="mt-4">
            <Quote size={28} className="text-brand-red mb-1" />
            <p className="text-[15px] leading-[1.35] italic text-[#111827]">
              "We will hold ourselves accountable to the highest standards of professional integrity and service."
            </p>
            <p className="text-brand-red text-[12px] font-extrabold mt-2">Mr Senzo S Nkosi</p>
            <p className="text-[#374151] text-[11px]">Chief Executive Officer</p>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal as="section" variant="fade-up" className="bg-brand-navy rounded-[14px] p-6 mt-3.5 mb-5 text-center">
          <h2 className="font-display text-white text-[22px] md:text-[28px] uppercase">Let's protect what matters most</h2>
          <p className="text-white/75 text-[12.5px] mt-2 max-w-[460px] mx-auto">
            Partner with Snesenzo Security Group for professional, reliable and scalable security solutions.
          </p>
          <Link to="/contact" className="mt-5 inline-flex h-12 px-6 items-center justify-center gap-2 rounded-lg bg-brand-red text-white text-[13px] font-bold uppercase tracking-wide hover:opacity-90">
            Get Protected <ArrowRight size={16} />
          </Link>
        </Reveal>
      </main>
    </div>
  );
}
