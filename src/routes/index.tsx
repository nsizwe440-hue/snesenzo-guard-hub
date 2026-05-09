import { createFileRoute } from "@tanstack/react-router";
import {
  Menu, Phone, Mail, ArrowRight, Star, Check, Quote,
  ShieldCheck, FileText, Award, MapPin,
  UserCheck, CalendarDays, Camera, Building2, Hotel, Fuel,
  Truck, Trees, Flame, Sparkles,
  Ear, Brain, Users, BadgeCheck,
  Briefcase, Landmark, Home, GraduationCap, Wheat, User,
} from "lucide-react";
import heroImg from "@/assets/hero-officers.jpg";
import logo from "@/assets/ssg-logo.png";
import ceo from "@/assets/ceo-portrait.jpg";
import actionVip from "@/assets/action-vip.jpg";
import actionRetail from "@/assets/action-retail.jpg";
import actionConstruction from "@/assets/action-construction.jpg";
import actionFarm from "@/assets/action-farm.jpg";
import coverageMap from "@/assets/coverage-map.png";
import peopleDeployed from "@/assets/people-deployed.jpg";
import peopleDisciplined from "@/assets/people-disciplined.jpg";
import peopleAccountable from "@/assets/people-accountable.jpg";

const peopleOnGround = [
  { src: peopleDeployed, label: "Deployed" },
  { src: peopleDisciplined, label: "Disciplined" },
  { src: peopleAccountable, label: "Accountable" },
];

const servicesInAction = [
  { src: actionVip, label: "VIP Protection & Escort" },
  { src: actionRetail, label: "Retail & Commercial Security" },
  { src: actionConstruction, label: "Construction & Industrial Site Security" },
  { src: actionFarm, label: "Property & Farm Watch" },
];

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
  { icon: UserCheck, label: "VIP Protection" },
  { icon: CalendarDays, label: "Events Security Management" },
  { icon: Camera, label: "CCTV & 24/7 Armed Response" },
  { icon: Building2, label: "Commercial & Industrial Security" },
  { icon: Hotel, label: "Hospitality Security" },
  { icon: Fuel, label: "Petroleum, Oil & Gas Security" },
  { icon: Truck, label: "Highway Patrol & Road Assistance" },
  { icon: Trees, label: "Property & Farm Watch" },
  { icon: Flame, label: "Integrated Fire Security Solutions" },
  { icon: Sparkles, label: "Specialised Cleaning & Hygiene" },
];

const pillars = [
  { icon: Ear, title: "Listen First", body: "We understand your needs and risks." },
  { icon: Brain, title: "Expert Knowledge", body: "We design smart, effective solutions." },
  { icon: Users, title: "Trained Personnel", body: "We deploy skilled, disciplined professionals." },
  { icon: BadgeCheck, title: "Quality Assurance", body: "We measure, monitor and continuously improve." },
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

const whyChoose = [
  "PSIRA-Compliant & Fully Registered",
  "Locally Rooted, Nationally Committed",
  "100% Youth Black-Owned",
  "Fit-for-Purpose Pricing",
  "Integrated Service Stack",
  "Leadership Accountability",
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
    <div className="bg-brand-surface min-h-screen">
      {/* HERO */}
      <section
        className="relative w-full min-h-[460px] lg:min-h-[620px] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(6,16,22,0.88) 0%, rgba(6,16,22,0.55) 55%, rgba(6,16,22,0.35) 100%), url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Header */}
        <header className="absolute top-0 left-0 right-0 h-[72px] px-5 flex items-center justify-between z-10">
          <button aria-label="Menu" className="text-white">
            <Menu size={28} />
          </button>
          <div className="flex items-center gap-2">
            <img src={logo} alt="SSG" width={42} height={42} className="h-[42px] w-auto" />
            <div className="leading-none">
              <div className="font-display text-white text-[20px]">SNESENZO</div>
              <div className="text-white/80 text-[8px] tracking-[0.2em] font-bold">SECURITY GROUP</div>
            </div>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex h-[42px] w-[128px] items-center justify-center rounded-lg bg-brand-red text-white text-[13px] font-bold uppercase tracking-wide hover:opacity-90"
          >
            Get Protected
          </a>
        </header>

        {/* Bottom-left content */}
        <div className="absolute left-0 right-0 bottom-0 p-[22px] max-w-[330px] lg:max-w-[560px]">
          <p className="text-white text-[10px] font-bold tracking-[1px] mb-2.5 uppercase">
            Professional. Reliable. Accountable.
          </p>
          <h1 className="font-display text-white text-[34px] lg:text-[64px] leading-[0.95] -tracking-[1px] mb-4">
            STRENGTH &amp;<br />
            CONFIDENCE IN<br />
            <span className="text-brand-red">PROTECTION</span> SERVICES
          </h1>
          <p className="text-white text-[14px] leading-[1.55] max-w-[280px] mb-5">
            Professional, PSIRA-registered security solutions for corporate, government, commercial and private clients.
          </p>
          <div className="flex flex-row gap-2.5 flex-wrap">
            <a
              href="#contact"
              className="inline-flex h-12 w-[170px] items-center justify-center gap-2 rounded-lg bg-brand-red text-white text-[13px] font-bold uppercase tracking-wide hover:opacity-90"
            >
              Request a Quote <ArrowRight size={16} />
            </a>
            <a
              href="tel:0611690365"
              className="inline-flex h-12 w-[150px] items-center justify-center gap-2 rounded-lg text-white text-[13px] font-bold border"
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
        <section className="bg-white rounded-[14px] p-[18px] -mt-[18px] relative shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)]">
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
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-2">
                <span className="shrink-0 inline-flex items-center justify-center w-[34px] h-[34px] rounded-full bg-brand-red text-white">
                  <c.icon size={16} />
                </span>
                <div className="leading-tight min-w-0">
                  <div className="text-white/70 text-[9px] uppercase tracking-wider font-semibold">{c.label}</div>
                  <div className="text-white text-[10px] font-bold truncate">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-white rounded-[14px] p-[18px] mt-3.5 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)]">
          <SectionTitle>OUR SERVICES</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {services.map((s) => (
              <div
                key={s.label}
                className="min-h-[66px] rounded-lg border border-[#E5E7EB] p-2.5 flex items-center gap-2 bg-white"
              >
                <s.icon size={24} className="text-brand-red shrink-0" />
                <span className="text-[10.5px] font-bold leading-[1.15] text-[#111827]">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES IN ACTION */}
        <section className="bg-brand-navy rounded-[14px] p-[18px] mt-3.5">
          <SectionTitle dark>OUR SERVICES IN ACTION</SectionTitle>
          <div className="flex flex-col gap-3 mt-2">
            {servicesInAction.map((item) => (
              <div
                key={item.label}
                className="relative rounded-lg overflow-hidden bg-black"
              >
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  className="block w-full h-auto"
                />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute left-3 right-3 bottom-3">
                  <div className="w-7 h-[2px] bg-brand-red mb-1.5" />
                  <p className="text-white text-[12px] font-extrabold uppercase leading-[1.15] tracking-wide drop-shadow">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PILLARS */}
        <section className="bg-brand-navy rounded-[14px] p-[18px] mt-3.5">
          <SectionTitle dark>OUR FOUR PILLARS</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mt-2">
            {pillars.map((p) => (
              <div key={p.title}>
                <p.icon size={28} className="text-brand-red mb-2" />
                <h3 className="text-white text-[11px] uppercase font-bold mb-1 tracking-wide">{p.title}</h3>
                <p className="text-[#D1D5DB] text-[10.5px] leading-[1.35]">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COVERAGE + CLIENTS */}
        <section className="bg-white rounded-[14px] p-[18px] mt-3.5 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)] lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <SectionTitle>COVERAGE AREAS</SectionTitle>
            <img src={coverageMap} alt="Snesenzo Security coverage areas: KwaZulu-Natal and Mpumalanga" className="w-full h-auto" loading="lazy" />
            <div className="flex items-center gap-4 mt-2 text-[10px] text-[#374151] font-semibold">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-brand-red" /> KwaZulu-Natal</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-brand-navy" /> Mpumalanga</span>
            </div>
          </div>

          <div className="mt-5 lg:mt-0">
            <SectionTitle>OUR CLIENT BASE</SectionTitle>
            <div className="grid grid-cols-2 gap-2">
              {clients.map((c, i) => (
                <div
                  key={c.label}
                  className={`min-h-[68px] rounded-lg border border-[#E5E7EB] p-2.5 flex flex-col items-center justify-center gap-1 text-center ${i === clients.length - 1 ? "col-span-2" : ""}`}
                >
                  <c.icon size={24} className="text-brand-red" />
                  <span className="text-[10.5px] font-bold text-[#111827]">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PEOPLE ON THE GROUND */}
        <section className="bg-brand-navy rounded-[14px] p-[18px] mt-3.5">
          <SectionTitle dark>OUR PEOPLE ON THE GROUND</SectionTitle>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {peopleOnGround.map((p) => (
              <div key={p.label} className="rounded-lg overflow-hidden bg-black">
                <img src={p.src} alt={p.label} loading="lazy" className="w-full aspect-[3/4] object-cover" />
                <div className="bg-black px-2 py-2">
                  <div className="w-5 h-[2px] bg-brand-red mb-1" />
                  <p className="text-white text-[10px] font-extrabold uppercase tracking-wide leading-tight">{p.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-brand-navy rounded-[14px] p-[18px] mt-3.5 relative overflow-hidden">
          <img
            src={logo}
            alt=""
            aria-hidden
            className="pointer-events-none absolute -right-6 -bottom-6 w-[180px] opacity-[0.06]"
          />
          <SectionTitle dark>WHY CHOOSE SNESENZO?</SectionTitle>
          <ul className="grid grid-cols-2 gap-x-2.5 gap-y-3 mt-3.5 relative">
            {whyChoose.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check size={16} className="text-brand-red shrink-0 mt-0.5" />
                <span className="text-white text-[10.5px] leading-[1.25] font-semibold">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CEO QUOTE */}
        <section className="bg-white rounded-[14px] p-[18px] mt-3.5 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)]">
          <img
            src={ceo}
            alt="Mr Senzo S Nkosi"
            className="w-full h-auto rounded-lg block"
            loading="lazy"
          />
          <div className="mt-4">
            <Quote size={28} className="text-brand-red mb-1" />
            <p className="text-[15px] leading-[1.35] italic text-[#111827]">
              “We will hold ourselves accountable to the highest standards of professional integrity and service.”
            </p>
            <p className="text-brand-red text-[12px] font-extrabold mt-2">Mr Senzo S Nkosi</p>
            <p className="text-[#374151] text-[11px]">Chief Executive Officer</p>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section id="contact" className="bg-brand-navy rounded-[14px] p-[18px] mt-3.5 mb-5">
          <div className="flex items-center gap-3 mb-3">
            <img src={logo} alt="SSG" width={56} height={56} className="w-14 h-14" />
            <h2 className="font-display text-white text-[18px] uppercase leading-tight">
              Let's protect what matters most
            </h2>
          </div>
          <p className="text-[#D1D5DB] text-[11px] leading-[1.4]">
            Partner with Snesenzo Security Group for professional, reliable and scalable security solutions.
          </p>
          <div className="flex items-center gap-1 mt-2">
            {[0, 1, 2].map((i) => (
              <Star key={i} size={10} className="fill-brand-red text-brand-red" />
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-2 mt-3.5">
            <a
              href="tel:0611690365"
              className="h-[42px] flex-1 inline-flex items-center justify-center gap-2 rounded-lg border text-white text-[13px] font-semibold"
              style={{ borderColor: "rgba(255,255,255,0.35)" }}
            >
              <Phone size={16} /> 061 169 0365
            </a>
            <a
              href="mailto:info@snesenzo.co.za"
              className="h-[42px] flex-1 inline-flex items-center justify-center gap-2 rounded-lg border text-white text-[13px] font-semibold"
              style={{ borderColor: "rgba(255,255,255,0.35)" }}
            >
              <Mail size={16} /> <span>info@snesenzo.co.za</span>
            </a>
          </div>
          <p className="text-white/60 text-[10px] mt-4 text-center">
            45 Voor Street, Utrecht, 2980, KwaZulu-Natal · © {new Date().getFullYear()} Snesenzo Security Group
          </p>
        </section>
      </main>
    </div>
  );
}
