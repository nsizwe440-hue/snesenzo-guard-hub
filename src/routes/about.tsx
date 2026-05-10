import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Quote, Ear, Brain, Users, BadgeCheck, Check,
  ShieldCheck, FileText, Award, MapPin, ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import ceo from "@/assets/ceo-portrait.jpg";
import psiraLogo from "@/assets/psira-logo.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Snesenzo Security Group | PSIRA-Registered, Youth Black-Owned" },
      { name: "description", content: "100% youth black-owned, PSIRA-registered private security across KZN & Mpumalanga. Meet our CEO and our four pillars of service." },
      { property: "og:title", content: "About Snesenzo Security Group" },
      { property: "og:description", content: "Locally rooted, nationally committed — leadership accountability and trained professionals." },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  { icon: Ear, title: "Listen First", body: "We understand your needs and risks before recommending solutions." },
  { icon: Brain, title: "Expert Knowledge", body: "We design smart, effective, fit-for-purpose security plans." },
  { icon: Users, title: "Trained Personnel", body: "We deploy disciplined, PSIRA-graded professionals." },
  { icon: BadgeCheck, title: "Quality Assurance", body: "We measure, monitor and continuously improve." },
];

const whyChoose = [
  "PSIRA-Compliant & Fully Registered",
  "Locally Rooted, Nationally Committed",
  "100% Youth Black-Owned",
  "Fit-for-Purpose Pricing",
  "Integrated Service Stack",
  "Leadership Accountability",
];

const credentials = [
  { icon: FileText, label: "CIPC", value: "2024/620995/07" },
  { icon: ShieldCheck, label: "PSIRA Company", value: "4972817" },
  { icon: Award, label: "CEO Grade A", value: "4821072" },
  { icon: MapPin, label: "Operating", value: "KZN & Mpumalanga" },
];

function AboutPage() {
  return (
    <div className="bg-brand-surface">
      <section className="bg-brand-navy text-white px-5 py-12 md:py-20">
        <div className="max-w-[1120px] mx-auto">
          <div className="w-10 h-[2px] bg-brand-red mb-3" />
          <p className="text-brand-red text-[10px] font-extrabold tracking-[0.2em] uppercase">About Us</p>
          <h1 className="font-display text-[36px] md:text-[56px] leading-[0.95] mt-2">WHO WE ARE</h1>
          <p className="text-white/75 text-[14px] max-w-[620px] mt-4">
            Snesenzo Security Group (Pty) Ltd is a 100% youth black-owned private security company providing risk-based protection across KwaZulu-Natal and Mpumalanga.
          </p>
        </div>
      </section>

      <main className="px-5 py-10 max-w-[1120px] mx-auto">
        {/* CEO */}
        <Reveal as="section" variant="fade-up" className="bg-white rounded-[14px] p-5 md:p-7 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)] grid md:grid-cols-2 gap-6 items-center">
          <img src={ceo} alt="Mr Senzo S Nkosi, CEO" className="w-full h-auto rounded-lg" loading="lazy" />
          <div>
            <Quote size={28} className="text-brand-red mb-2" />
            <p className="text-[16px] md:text-[18px] leading-[1.4] italic text-[#111827]">
              "We will hold ourselves accountable to the highest standards of professional integrity and service."
            </p>
            <p className="text-brand-red text-[13px] font-extrabold mt-3">Mr Senzo S Nkosi</p>
            <p className="text-[#374151] text-[12px]">Chief Executive Officer · PSIRA Grade A</p>
            <p className="text-[#4B5563] text-[13px] leading-[1.6] mt-4">
              Under the leadership of CEO Senzo Nkosi, Snesenzo Security Group has grown into a trusted partner for corporate, government and private clients — delivering professional integrity, trained personnel and 24/7 readiness across two provinces.
            </p>
          </div>
        </Reveal>

        {/* Credentials */}
        <Reveal as="section" variant="fade-up" className="mt-5 bg-brand-navy rounded-[14px] p-5 md:p-7">
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-[3px] h-[18px] bg-brand-red rounded-sm" />
            <h2 className="font-display text-white text-[18px] tracking-wide">CREDENTIALS</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {credentials.map((c, i) => (
              <Reveal key={c.label} variant="fade-up" delay={i * 80} className="flex items-center gap-2">
                <span className="shrink-0 inline-flex items-center justify-center w-[34px] h-[34px] rounded-full bg-brand-red text-white">
                  <c.icon size={16} />
                </span>
                <div className="leading-tight min-w-0">
                  <div className="text-white/70 text-[9px] uppercase tracking-wider font-semibold">{c.label}</div>
                  <div className="text-white text-[11px] font-bold truncate">{c.value}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* Pillars */}
        <Reveal as="section" variant="fade-up" className="mt-5 bg-white rounded-[14px] p-5 md:p-7 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-[3px] h-[18px] bg-brand-red rounded-sm" />
            <h2 className="font-display text-[#111827] text-[18px] tracking-wide">OUR FOUR PILLARS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} variant="fade-up" delay={i * 80} className="rounded-lg border border-[#E5E7EB] p-4">
                <p.icon size={28} className="text-brand-red mb-2" />
                <h3 className="font-display text-[14px] text-[#111827] tracking-wide">{p.title}</h3>
                <p className="text-[12px] text-[#4B5563] leading-[1.5] mt-1">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* Why choose */}
        <Reveal as="section" variant="fade-up" className="mt-5 bg-brand-navy rounded-[14px] p-5 md:p-7">
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-[3px] h-[18px] bg-brand-red rounded-sm" />
            <h2 className="font-display text-white text-[18px] tracking-wide">WHY CHOOSE SNESENZO?</h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
            {whyChoose.map((item, i) => (
              <Reveal as="li" key={item} variant="fade-up" delay={i * 60} className="flex items-start gap-2">
                <Check size={18} className="text-brand-red shrink-0 mt-0.5" />
                <span className="text-white text-[13px] leading-[1.4] font-semibold">{item}</span>
              </Reveal>
            ))}
          </ul>
        </Reveal>

        {/* PSIRA */}
        <Reveal as="section" variant="fade-up" className="mt-5 bg-white rounded-[14px] p-5 md:p-7 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)]">
          <div className="w-10 h-[2px] bg-brand-red mb-2" />
          <p className="text-brand-red text-[10px] font-extrabold tracking-[0.18em] uppercase">Accreditation</p>
          <h2 className="font-display text-brand-navy text-[20px] md:text-[26px] uppercase leading-tight mt-1">
            Fully Accredited by PSIRA
          </h2>
          <div className="bg-[#F5F5F4] rounded-lg py-5 px-3 mt-3 flex items-center justify-center">
            <img src={psiraLogo} alt="PSIRA — Private Security Industry Regulatory Authority" className="max-h-20 w-auto" loading="lazy" />
          </div>
          <p className="text-[#374151] text-[13px] leading-[1.6] mt-3">
            Snesenzo Security Group is fully registered and accredited by the Private Security Industry Regulatory Authority (PSIRA) — the official body governing the private security industry in South Africa. This accreditation confirms that our officers, operations and training meet the strict legal and professional standards required to protect our clients with integrity.
          </p>
        </Reveal>

        <Reveal as="section" variant="fade-up" className="mt-5 text-center">
          <Link to="/contact" className="inline-flex h-12 px-6 items-center justify-center gap-2 rounded-lg bg-brand-red text-white text-[13px] font-bold uppercase tracking-wide hover:opacity-90">
            Work with us <ArrowRight size={16} />
          </Link>
        </Reveal>
      </main>
    </div>
  );
}
