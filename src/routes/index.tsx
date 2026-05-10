import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone, ArrowRight, Quote, Check,
  ShieldCheck, FileText, Award, MapPin,
  UserCheck, CalendarDays, Camera, Building2, Hotel, Fuel,
  Truck, Trees, Flame, Sparkles,
  Ear, Brain, Users, BadgeCheck,
  Briefcase, Landmark, Home, GraduationCap, Wheat, User,
  Mail, Clock, MessageCircle,
} from "lucide-react";
import heroImg from "@/assets/hero-officers.jpg";
import ceo from "@/assets/ceo-portrait.jpg";
import psiraLogo from "@/assets/psira-logo.png";
import coverageMap from "@/assets/coverage-map.png";
import peopleDeployed from "@/assets/people-deployed.jpg";
import peopleDisciplined from "@/assets/people-disciplined.jpg";
import peopleAccountable from "@/assets/people-accountable.jpg";
import actionVip from "@/assets/action-vip.jpg";
import actionRetail from "@/assets/action-retail.jpg";
import actionConstruction from "@/assets/action-construction.jpg";
import actionFarm from "@/assets/action-farm.jpg";
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

const services = [
  { icon: UserCheck, label: "VIP Protection", desc: "Discreet close protection for executives and high-profile clients." },
  { icon: CalendarDays, label: "Events Security Management", desc: "Crowd management, access control and incident response for events." },
  { icon: Camera, label: "CCTV & 24/7 Armed Response", desc: "Monitored surveillance backed by rapid armed response teams." },
  { icon: Building2, label: "Commercial & Industrial Security", desc: "Site protection, access control and patrols for facilities." },
  { icon: Hotel, label: "Hospitality Security", desc: "Guest-facing security for hotels, lodges and resorts." },
  { icon: Fuel, label: "Petroleum, Oil & Gas Security", desc: "Specialised security for high-risk fuel and energy sites." },
  { icon: Truck, label: "Highway Patrol & Road Assistance", desc: "Routine patrols and roadside support along key routes." },
  { icon: Trees, label: "Property & Farm Watch", desc: "Rural and estate protection tailored to remote properties." },
  { icon: Flame, label: "Integrated Fire Security Solutions", desc: "Fire detection, prevention and emergency coordination." },
  { icon: Sparkles, label: "Specialised Cleaning & Hygiene", desc: "Professional cleaning bundled with security operations." },
];

const inAction = [
  { src: actionVip, label: "VIP Protection & Escort" },
  { src: actionRetail, label: "Retail & Commercial Security" },
  { src: actionConstruction, label: "Construction & Industrial Site Security" },
  { src: actionFarm, label: "Property & Farm Watch" },
];

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
  { src: peopleDeployed, label: "Deployed" },
  { src: peopleDisciplined, label: "Disciplined" },
  { src: peopleAccountable, label: "Accountable" },
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

      <main className="px-3.5 pb-5 max-w-[430px] md:max-w-[760px] lg:max-w-[1120px] mx-auto">
        {/* WHO WE ARE */}
        <Reveal as="section" variant="fade-up" className="bg-white rounded-[14px] p-[18px] md:p-7 -mt-[18px] relative shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)]">
          <SectionTitle>WHO WE ARE</SectionTitle>
          <p className="text-[13px] md:text-[14px] leading-[1.6] text-[#1F2937]">
            Snesenzo Security Group (Pty) Ltd is 100% youth black-owned and provides expert, risk-based security solutions across KwaZulu-Natal &amp; Mpumalanga with professional integrity, trained personnel and 24/7 readiness — ensuring safety, compliance and peace of mind.
          </p>

          <div className="bg-brand-navy rounded-xl p-[14px] mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
            {credentials.map((c, i) => (
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
        </Reveal>

        {/* CEO */}
        <Reveal as="section" variant="fade-up" className="bg-white rounded-[14px] p-5 md:p-7 mt-3.5 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)] grid md:grid-cols-2 gap-6 items-center">
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

        {/* PILLARS */}
        <Reveal as="section" variant="fade-up" className="bg-brand-navy rounded-[14px] p-[18px] md:p-7 mt-3.5">
          <SectionTitle dark>OUR FOUR PILLARS</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} variant="fade-up" delay={i * 80} className="rounded-lg border border-white/10 p-3">
                <p.icon size={28} className="text-brand-red mb-2" />
                <h3 className="text-white text-[12px] uppercase font-bold mb-1 tracking-wide">{p.title}</h3>
                <p className="text-[#D1D5DB] text-[11px] leading-[1.45]">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* SERVICES — full grid */}
        <Reveal as="section" variant="fade-up" className="bg-white rounded-[14px] p-[18px] md:p-7 mt-3.5 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)]">
          <SectionTitle>OUR SERVICES</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((s, i) => (
              <Reveal key={s.label} variant="fade-up" delay={i * 50} className="rounded-lg border border-[#E5E7EB] p-4 bg-white hover:shadow-md transition-shadow">
                <s.icon size={28} className="text-brand-red mb-2" />
                <h3 className="font-display text-[15px] text-[#111827] tracking-wide">{s.label}</h3>
                <p className="text-[12px] text-[#4B5563] leading-[1.5] mt-1">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* SERVICES IN ACTION */}
        <Reveal as="section" variant="fade-up" className="bg-brand-navy rounded-[14px] p-[18px] md:p-7 mt-3.5">
          <SectionTitle dark>SERVICES IN ACTION</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {inAction.map((item, i) => (
              <Reveal key={item.label} variant="zoom-in" delay={i * 80} className="relative rounded-lg overflow-hidden bg-black">
                <img src={item.src} alt={item.label} loading="lazy" className="block w-full h-auto" />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute left-3 right-3 bottom-3">
                  <div className="w-7 h-[2px] bg-brand-red mb-1.5" />
                  <p className="text-white text-[12px] font-extrabold uppercase leading-[1.15] tracking-wide drop-shadow">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* COVERAGE */}
        <Reveal as="section" variant="fade-up" className="bg-white rounded-[14px] p-[18px] md:p-7 mt-3.5 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)]">
          <SectionTitle>COVERAGE AREAS</SectionTitle>
          <img src={coverageMap} alt="Snesenzo Security coverage areas: KwaZulu-Natal and Mpumalanga" className="w-full max-w-[720px] mx-auto h-auto" loading="lazy" />
          <div className="flex items-center justify-center gap-6 mt-3 text-[12px] text-[#374151] font-semibold">
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-brand-red" /> KwaZulu-Natal</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-brand-navy" /> Mpumalanga</span>
          </div>
        </Reveal>

        {/* CLIENTS */}
        <Reveal as="section" variant="fade-up" className="bg-white rounded-[14px] p-[18px] md:p-7 mt-3.5 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)]">
          <SectionTitle>OUR CLIENT BASE</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {clients.map((c, i) => (
              <Reveal key={c.label} variant="fade-up" delay={i * 60} className="rounded-lg border border-[#E5E7EB] p-3 flex flex-col items-center justify-center gap-2 text-center min-h-[88px]">
                <c.icon size={26} className="text-brand-red" />
                <span className="text-[11px] font-bold text-[#111827]">{c.label}</span>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* PEOPLE */}
        <Reveal as="section" variant="fade-up" className="bg-brand-navy rounded-[14px] p-[18px] md:p-7 mt-3.5">
          <SectionTitle dark>OUR PEOPLE ON THE GROUND</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {people.map((p, i) => (
              <Reveal key={p.label} variant="zoom-in" delay={i * 100} className="rounded-lg overflow-hidden bg-black">
                <img src={p.src} alt={p.label} loading="lazy" className="w-full aspect-[3/4] object-cover" />
                <div className="bg-black px-3 py-2.5">
                  <div className="w-6 h-[2px] bg-brand-red mb-1" />
                  <p className="text-white text-[12px] font-extrabold uppercase tracking-wide leading-tight">{p.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* WHY CHOOSE */}
        <Reveal as="section" variant="fade-up" className="bg-brand-navy rounded-[14px] p-[18px] md:p-7 mt-3.5">
          <SectionTitle dark>WHY CHOOSE SNESENZO?</SectionTitle>
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
        <Reveal as="section" variant="fade-up" className="bg-white rounded-[14px] p-[18px] md:p-7 mt-3.5 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)]">
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

        {/* CONTACT */}
        <Reveal as="section" variant="fade-up" className="mt-3.5 grid grid-cols-1 md:grid-cols-3 gap-3">
          <a href="tel:0611690365" className="bg-white rounded-[14px] p-5 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)] hover:shadow-md transition-shadow flex flex-col items-start gap-2">
            <span className="inline-flex w-12 h-12 items-center justify-center rounded-full bg-brand-red text-white">
              <Phone size={20} />
            </span>
            <p className="text-[#6B7280] text-[11px] uppercase font-bold tracking-wider mt-1">Call 24/7</p>
            <p className="font-display text-brand-navy text-[20px]">061 169 0365</p>
          </a>
          <a href="mailto:info@snesenzo.co.za" className="bg-white rounded-[14px] p-5 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)] hover:shadow-md transition-shadow flex flex-col items-start gap-2">
            <span className="inline-flex w-12 h-12 items-center justify-center rounded-full bg-brand-red text-white">
              <Mail size={20} />
            </span>
            <p className="text-[#6B7280] text-[11px] uppercase font-bold tracking-wider mt-1">Email</p>
            <p className="font-display text-brand-navy text-[16px] break-all">info@snesenzo.co.za</p>
          </a>
          <a href="https://wa.me/27611690365" target="_blank" rel="noopener noreferrer" className="bg-white rounded-[14px] p-5 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)] hover:shadow-md transition-shadow flex flex-col items-start gap-2">
            <span className="inline-flex w-12 h-12 items-center justify-center rounded-full bg-brand-red text-white">
              <MessageCircle size={20} />
            </span>
            <p className="text-[#6B7280] text-[11px] uppercase font-bold tracking-wider mt-1">WhatsApp</p>
            <p className="font-display text-brand-navy text-[20px]">Message us</p>
          </a>
        </Reveal>

        <Reveal as="section" variant="fade-up" className="mt-3.5 grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white rounded-[14px] p-5 md:p-6 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-2 mb-3">
              <MapPin size={18} className="text-brand-red" />
              <h3 className="font-display text-brand-navy text-[16px] tracking-wide">HEAD OFFICE</h3>
            </div>
            <p className="text-[#374151] text-[13px] leading-[1.6]">
              45 Voor Street<br />Utrecht, 2980<br />KwaZulu-Natal, South Africa
            </p>
          </div>
          <div className="bg-white rounded-[14px] p-5 md:p-6 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-2 mb-3">
              <Clock size={18} className="text-brand-red" />
              <h3 className="font-display text-brand-navy text-[16px] tracking-wide">OPERATING HOURS</h3>
            </div>
            <ul className="text-[#374151] text-[13px] leading-[1.7]">
              <li><strong className="text-brand-navy">Control Room:</strong> 24/7</li>
              <li><strong className="text-brand-navy">Office:</strong> Mon–Fri, 08:00 – 17:00</li>
              <li><strong className="text-brand-navy">Armed Response:</strong> Always on standby</li>
            </ul>
          </div>
        </Reveal>

        {/* FINAL CTA */}
        <Reveal as="section" variant="fade-up" className="bg-brand-navy rounded-[14px] p-6 md:p-8 mt-3.5 mb-5 text-center">
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
