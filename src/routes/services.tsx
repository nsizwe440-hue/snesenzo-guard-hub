import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/services";
import actionVip from "@/assets/action-vip.jpg";
import actionRetail from "@/assets/action-retail.jpg";
import actionConstruction from "@/assets/action-construction.jpg";
import actionFarm from "@/assets/action-farm.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Security Services in KZN & Mpumalanga | Snesenzo Security Group" },
      { name: "description", content: "VIP protection, armed response, CCTV, events, hospitality, industrial and farm security across KwaZulu-Natal & Mpumalanga." },
      { property: "og:title", content: "Our Security Services | Snesenzo Security Group" },
      { property: "og:description", content: "A full stack of PSIRA-registered security services for corporate, government and private clients." },
    ],
  }),
  component: ServicesPage,
});

const inAction = [
  { src: actionVip, label: "VIP Protection & Escort" },
  { src: actionRetail, label: "Retail & Commercial Security" },
  { src: actionConstruction, label: "Construction & Industrial Site Security" },
  { src: actionFarm, label: "Property & Farm Watch" },
];

function ServicesPage() {
  return (
    <div className="bg-brand-surface">
      <section className="bg-brand-navy text-white px-5 py-12 md:py-20">
        <div className="max-w-[1120px] mx-auto">
          <div className="w-10 h-[2px] bg-brand-red mb-3" />
          <p className="text-brand-red text-[10px] font-extrabold tracking-[0.2em] uppercase">What we do</p>
          <h1 className="font-display text-[36px] md:text-[56px] leading-[0.95] mt-2">OUR SERVICES</h1>
          <p className="text-white/75 text-[14px] max-w-[620px] mt-4">
            A complete, PSIRA-compliant security stack — from close protection and armed response to industrial site security and integrated fire solutions.
          </p>
        </div>
      </section>

      <main className="px-5 py-10 max-w-[1120px] mx-auto">
        <Reveal as="section" variant="fade-up" className="bg-white rounded-[14px] p-5 md:p-7 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((s, i) => (
              <Reveal key={s.label} variant="fade-up" delay={i * 50} className="rounded-lg border border-[#E5E7EB] p-4 bg-white hover:shadow-md transition-shadow flex flex-col">
                <s.icon size={28} className="text-brand-red mb-2" />
                <h3 className="font-display text-[15px] text-[#111827] tracking-wide">{s.label}</h3>
                <p className="text-[12px] text-[#4B5563] leading-[1.5] mt-1 flex-1">{s.desc}</p>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="mt-3 inline-flex items-center gap-1.5 text-brand-red text-[11px] font-extrabold uppercase tracking-[0.15em] hover:gap-2 transition-all self-start">
                  Learn more <ArrowRight size={12} />
                </Link>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" variant="fade-up" className="bg-brand-navy rounded-[14px] p-5 md:p-7 mt-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-[3px] h-[18px] bg-brand-red rounded-sm" />
            <h2 className="font-display text-white text-[18px] tracking-wide">SERVICES IN ACTION</h2>
          </div>
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

        <Reveal as="section" variant="fade-up" className="mt-5 bg-white rounded-[14px] p-6 md:p-8 text-center shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)]">
          <h2 className="font-display text-brand-navy text-[22px] md:text-[28px]">Ready to secure your site?</h2>
          <p className="text-[#4B5563] text-[13px] mt-2 max-w-[480px] mx-auto">
            Tell us what you need protected and we'll design a fit-for-purpose solution.
          </p>
          <Link to="/contact" className="mt-5 inline-flex h-12 px-6 items-center justify-center gap-2 rounded-lg bg-brand-red text-white text-[13px] font-bold uppercase tracking-wide hover:opacity-90">
            Request a Quote <ArrowRight size={16} />
          </Link>
        </Reveal>
      </main>
    </div>
  );
}
