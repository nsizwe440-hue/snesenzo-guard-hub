import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, ArrowRight, Check,
  ShieldCheck, FileText, Award, MapPin,
  Fuel,
  Ear, Brain, Users, BadgeCheck,
  Briefcase, Landmark, Home, GraduationCap, Wheat, User,
} from "lucide-react";
import { services, type Service } from "@/data/services";
import { ServiceDetailDialog } from "@/components/ServiceDetailDialog";
import heroImg from "@/assets/hero-ssg-vehicle.jpg";
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
import caseFarmArrest from "@/assets/case-farm-arrest.jpg";
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

function SectionTitle({ children, dark = false, eyebrow }: { children: React.ReactNode; dark?: boolean; eyebrow?: string }) {
  return (
    <div className="mb-8 lg:mb-12">
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-[4px] h-6 bg-brand-red rounded-sm" />
        {eyebrow && (
          <span className={`text-[11px] font-extrabold tracking-[0.18em] uppercase ${dark ? "text-brand-red" : "text-brand-red"}`}>
            {eyebrow}
          </span>
        )}
      </div>
      <h2 className={`font-display text-[28px] md:text-[36px] lg:text-[44px] leading-[1.05] tracking-tight ${dark ? "text-white" : "text-[#0F172A]"}`}>
        {children}
      </h2>
    </div>
  );
}

// Container: full-bleed bg, inner content max-w-7xl
const container = "max-w-7xl mx-auto px-6 lg:px-8";
const sectionPad = "py-16 lg:py-24";

function LandingPage() {
  return (
    <div className="bg-white">
      {/* HERO — full bleed */}
      <section
        className="relative w-full min-h-[560px] lg:min-h-[760px] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(6,16,22,0.92) 0%, rgba(6,16,22,0.7) 45%, rgba(6,16,22,0.25) 100%), url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      >
        <div className={`${container} relative h-full min-h-[560px] lg:min-h-[760px] flex items-end pb-20 lg:pb-32`}>
          <div className="max-w-2xl">
            <p className="text-white text-[11px] font-bold tracking-[1.5px] mb-3 uppercase">
              Professional. Reliable. Accountable.
            </p>
            <h1 className="font-display text-white text-[40px] md:text-[64px] lg:text-[88px] leading-[0.95] -tracking-[1px] mb-5">
              STRENGTH &amp;<br />
              CONFIDENCE IN<br />
              <span className="text-brand-red">PROTECTION</span> SERVICES
            </h1>
            <p className="text-white/90 text-[15px] md:text-[17px] leading-[1.55] max-w-[480px] mb-6">
              Professional, PSIRA-registered security solutions for corporate, government, commercial and private clients.
            </p>
            <div className="flex flex-row gap-3 flex-wrap">
              <Link
                to="/contact"
                className="inline-flex h-12 px-6 items-center justify-center gap-2 rounded-lg bg-brand-red text-white text-[13px] font-bold uppercase tracking-wide hover:opacity-90"
              >
                Request a Quote <ArrowRight size={16} />
              </Link>
              <a
                href="tel:0611690365"
                className="inline-flex h-12 px-6 items-center justify-center gap-2 rounded-lg text-white text-[13px] font-bold border"
                style={{ background: "rgba(0,0,0,0.55)", borderColor: "rgba(255,255,255,0.45)" }}
              >
                <Phone size={16} /> 061 169 0365
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials strip — overlaps bottom of hero */}
      <div className={`${container} relative z-10 -mt-12 lg:-mt-20`}>
        {/* Desktop dark bar */}
        <Reveal variant="fade-up" delay={120} className="hidden lg:grid grid-cols-4 gap-6 p-6 rounded-xl bg-brand-navy shadow-2xl border border-white/10">
          {credentials.map((c) => (
            <div key={c.label} className="flex items-center gap-4 min-w-0">
              <span className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-red text-white">
                <c.icon size={20} />
              </span>
              <div className="leading-tight min-w-0">
                <div className="text-white/60 text-[10px] uppercase tracking-wider font-semibold">{c.label}</div>
                <div className="text-white text-[15px] font-bold">{c.value}</div>
              </div>
            </div>
          ))}
        </Reveal>

        {/* Mobile 2x2 light cards */}
        <div className="grid grid-cols-2 lg:hidden gap-3">
          {credentials.map((c, i) => (
            <Reveal key={c.label} variant="fade-up" delay={i * 80} className="flex items-center gap-3 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] shadow-lg">
              <span className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-full bg-brand-red text-white">
                <c.icon size={18} />
              </span>
              <div className="leading-tight min-w-0">
                <div className="text-[#6B7280] text-[10px] uppercase tracking-wider font-semibold">{c.label}</div>
                <div className="text-brand-navy text-[12px] font-bold break-words">{c.value}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* WHO WE ARE — white, 2-column */}
      <section className={`bg-white ${sectionPad}`}>
        <div className={container}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal variant="fade-up">
                <SectionTitle eyebrow="Who We Are">A trusted security partner across two provinces</SectionTitle>
              </Reveal>
              <Reveal variant="fade-up" delay={80}>
                <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#374151]">
                  Snesenzo Security Group (Pty) Ltd is 100% youth black-owned and provides expert, risk-based security solutions across KwaZulu-Natal &amp; Mpumalanga with professional integrity, trained personnel and 24/7 readiness — ensuring safety, compliance and peace of mind.
                </p>
              </Reveal>
            </div>
            <Reveal variant="fade-up" delay={120}>
              <img
                src={peopleDeployed}
                alt="Snesenzo Security officers deployed on duty"
                className="w-full aspect-[4/5] object-cover rounded-2xl shadow-lg"
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* MEET THE FOUNDER — light gray full bleed */}
      <section className={`bg-[#F8FAFC] ${sectionPad}`}>
        <div className={container}>
          <Reveal variant="fade-up">
            <SectionTitle eyebrow="Meet the Founder">Ntabazwe Ndlovu</SectionTitle>
            <p className="text-brand-red text-[14px] font-extrabold uppercase tracking-wide -mt-4 mb-10">
              Founder &amp; CEO, Snesenzo Security Group
            </p>
          </Reveal>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal variant="fade-up">
              <img
                src={ceo}
                alt="Ntabazwe Ndlovu, Founder & CEO of Snesenzo Security Group"
                className="w-full aspect-[4/5] object-cover object-top rounded-2xl shadow-lg"
                loading="lazy"
              />
            </Reveal>
            <Reveal variant="fade-up" delay={120}>
              <p className="text-[#374151] text-[16px] leading-[1.7]">
                Not your typical security company CEO. An Amajuba-born entrepreneur and community leader who runs multiple businesses across the district — and chose to put his name, his standards, and his reputation behind a youth-led, 100% black-owned security company built to serve the people of KwaZulu-Natal and Mpumalanga.
              </p>
              <p className="text-[#374151] text-[16px] leading-[1.7] mt-4">
                When you partner with Snesenzo, you're not hiring a logo. You're standing alongside a founder who backs his own community.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-6 h-12 px-6 rounded-lg bg-brand-red text-white text-[13px] font-bold uppercase tracking-wide hover:opacity-90"
              >
                Read More About Ntabazwe <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PILLARS — navy with photo background */}
      <section
        className={`relative ${sectionPad}`}
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(6,16,22,0.93) 0%, rgba(6,16,22,0.82) 100%), url(${peopleDisciplined})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={container}>
          <Reveal variant="fade-up">
            <SectionTitle dark eyebrow="Our Approach">Built on four pillars</SectionTitle>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <Reveal key={p.title} variant="fade-up" delay={i * 80} className="rounded-xl border border-white/10 p-6 bg-white/[0.06] backdrop-blur-sm hover:bg-white/[0.1] transition-colors">
                <p.icon size={36} className="text-brand-red mb-4" />
                <h3 className="text-white text-[15px] uppercase font-bold mb-2 tracking-wide">{p.title}</h3>
                <p className="text-[#D1D5DB] text-[14px] leading-[1.55]">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — white */}
      <section className={`bg-white ${sectionPad}`}>
        <div className={container}>
          <Reveal variant="fade-up">
            <SectionTitle eyebrow="What We Do">Comprehensive security services</SectionTitle>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((s, i) =>
              s.image ? (
                <Reveal key={s.label} variant="zoom-in" delay={i * 50} className="group relative rounded-xl overflow-hidden bg-black aspect-[4/5]">
                  <img src={s.image} alt={s.label} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute left-5 right-5 bottom-5">
                    <div className="w-8 h-[2px] bg-brand-red mb-2" />
                    <h3 className="font-display text-white text-[17px] tracking-wide leading-tight">{s.label}</h3>
                    <p className="text-[12px] text-white/80 leading-[1.5] mt-1.5">{s.desc}</p>
                  </div>
                </Reveal>
              ) : (
                <Reveal key={s.label} variant="fade-up" delay={i * 50} className="rounded-xl border border-[#E5E7EB] p-6 bg-white hover:shadow-lg hover:border-brand-red/30 transition-all">
                  <s.icon size={32} className="text-brand-red mb-3" />
                  <h3 className="font-display text-[17px] text-[#0F172A] tracking-wide leading-tight">{s.label}</h3>
                  <p className="text-[13px] text-[#4B5563] leading-[1.55] mt-2">{s.desc}</p>
                </Reveal>
              )
            )}
          </div>
        </div>
      </section>

      {/* REAL RESULTS — case study */}
      <section className={`bg-[#F8FAFC] ${sectionPad}`}>
        <div className={container}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal variant="fade-up">
              <img
                src={caseFarmArrest}
                alt="Suspects intercepted and detained during a Snesenzo Security farm-watch patrol"
                className="w-full aspect-[4/5] object-cover rounded-2xl shadow-lg"
                loading="lazy"
              />
            </Reveal>
            <Reveal variant="fade-up" delay={120}>
              <SectionTitle eyebrow="Real Results">Stock theft stopped on a client farm</SectionTitle>
              <p className="text-[#374151] text-[16px] leading-[1.7]">
                During a routine Property &amp; Farm Watch patrol, our officers picked up unusual movement on a client's grazing land. The team moved in quickly, intercepted the suspects on-site and held them until SAPS arrived. The livestock stayed with the owner — exactly where it belonged.
              </p>
              <p className="text-[#374151] text-[16px] leading-[1.7] mt-4">
                This is what fit-for-purpose rural security looks like: visible patrols, fast decisions, and officers who know the land they're protecting.
              </p>
              <p className="text-[#6B7280] text-[12px] italic mt-6">
                Faces and identifying details intentionally not disclosed.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES IN ACTION — navy with image grid */}
      <section className={`bg-brand-navy ${sectionPad}`}>
        <div className={container}>
          <Reveal variant="fade-up">
            <SectionTitle dark eyebrow="In Action">Our services on the ground</SectionTitle>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {inAction.map((item, i) => (
              <Reveal key={item.label} variant="zoom-in" delay={i * 80} className="group relative rounded-xl overflow-hidden bg-black aspect-[4/5]">
                <img src={item.src} alt={item.label} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute left-4 right-4 bottom-4">
                  <div className="w-8 h-[2px] bg-brand-red mb-2" />
                  <p className="text-white text-[13px] font-extrabold uppercase leading-[1.2] tracking-wide">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE — white */}
      <section className={`bg-white ${sectionPad}`}>
        <div className={container}>
          <Reveal variant="fade-up">
            <SectionTitle eyebrow="Where We Operate">Coverage areas</SectionTitle>
          </Reveal>
          <Reveal variant="fade-up" delay={80}>
            <img src={coverageMap} alt="Snesenzo Security coverage areas: KwaZulu-Natal and Mpumalanga" className="w-full max-w-3xl mx-auto h-auto" loading="lazy" />
            <div className="flex items-center justify-center gap-8 mt-6 text-[14px] text-[#374151] font-semibold">
              <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-brand-red" /> KwaZulu-Natal</span>
              <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-brand-navy" /> Mpumalanga</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLIENTS — light gray */}
      <section className={`bg-[#F8FAFC] ${sectionPad}`}>
        <div className={container}>
          <Reveal variant="fade-up">
            <SectionTitle eyebrow="Who We Serve">Our client base</SectionTitle>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {clients.map((c, i) => (
              <Reveal key={c.label} variant="fade-up" delay={i * 60} className="rounded-xl border border-[#E5E7EB] bg-white p-5 flex flex-col items-center justify-center gap-3 text-center min-h-[120px]">
                <c.icon size={30} className="text-brand-red" />
                <span className="text-[12px] font-bold text-[#0F172A]">{c.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PEOPLE — navy */}
      <section className={`bg-brand-navy ${sectionPad}`}>
        <div className={container}>
          <Reveal variant="fade-up">
            <SectionTitle dark eyebrow="Our Team">Our people on the ground</SectionTitle>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {people.map((p, i) => (
              <Reveal key={p.label} variant="zoom-in" delay={i * 100} className="group rounded-xl overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  <img src={p.src} alt={p.label} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute left-5 bottom-5">
                    <div className="w-8 h-[2px] bg-brand-red mb-2" />
                    <p className="text-white text-[16px] font-extrabold uppercase tracking-wide">{p.label}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE — white */}
      <section className={`bg-white ${sectionPad}`}>
        <div className={container}>
          <Reveal variant="fade-up">
            <SectionTitle eyebrow="Why Snesenzo">Why clients choose us</SectionTitle>
          </Reveal>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
            {whyChoose.map((item, i) => (
              <Reveal as="li" key={item} variant="fade-up" delay={i * 60} className="flex items-start gap-3">
                <span className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-brand-red/10 text-brand-red mt-0.5">
                  <Check size={16} />
                </span>
                <span className="text-[#0F172A] text-[15px] leading-[1.5] font-semibold">{item}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* PSIRA — light gray */}
      <section className={`bg-[#F8FAFC] ${sectionPad}`}>
        <div className={`${container} grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`}>
          <Reveal variant="fade-up">
            <SectionTitle eyebrow="Accreditation">Fully accredited by PSIRA</SectionTitle>
            <p className="text-[#374151] text-[15px] leading-[1.7]">
              Snesenzo Security Group is fully registered and accredited by the Private Security Industry Regulatory Authority (PSIRA) — the official body governing the private security industry in South Africa. This accreditation confirms that our officers, operations and training meet the strict legal and professional standards required to protect our clients with integrity.
            </p>
          </Reveal>
          <Reveal variant="fade-up" delay={120} className="bg-white rounded-2xl p-12 flex items-center justify-center shadow-sm border border-[#E5E7EB]">
            <img src={psiraLogo} alt="PSIRA — Private Security Industry Regulatory Authority" className="max-h-32 w-auto" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA — navy full bleed */}
      <section className={`bg-brand-navy ${sectionPad}`}>
        <div className={`${container} text-center`}>
          <Reveal variant="fade-up">
            <h2 className="font-display text-white text-[32px] md:text-[44px] lg:text-[56px] uppercase leading-[1.05] tracking-tight">
              Let's protect what matters most
            </h2>
            <p className="text-white/75 text-[15px] md:text-[17px] mt-4 max-w-2xl mx-auto leading-[1.6]">
              Partner with Snesenzo Security Group for professional, reliable and scalable security solutions.
            </p>
            <Link to="/contact" className="mt-8 inline-flex h-14 px-8 items-center justify-center gap-2 rounded-lg bg-brand-red text-white text-[14px] font-bold uppercase tracking-wide hover:opacity-90">
              Get Protected <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
