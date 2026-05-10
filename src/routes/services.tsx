import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/services";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { getImage } from "@/assets/optimized";

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

function ServicesPage() {
  // Smooth-scroll to hash anchor on mount
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const el = document.getElementById(hash);
    if (!el) return;
    // small delay so layout settles + offset for sticky header
    const t = setTimeout(() => {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }, 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero band */}
      <section
        className="relative bg-brand-navy text-white px-5 py-12 md:py-20 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(90deg, rgba(6,16,22,0.92) 0%, rgba(6,16,22,0.7) 45%, rgba(6,16,22,0.35) 100%), url(${getImage("hero-ssg-vehicle").fallback.url})` }}
      >
        <div className="max-w-[1120px] mx-auto relative">
          <div className="w-10 h-[2px] bg-brand-red mb-3" />
          <p className="text-brand-red text-[10px] font-extrabold tracking-[0.2em] uppercase">What we do</p>
          <h1 className="font-display text-[36px] md:text-[56px] leading-[0.95] mt-2">OUR SERVICES</h1>
          <p className="text-white/75 text-[14px] md:text-[15px] max-w-[680px] mt-4 leading-[1.6]">
            A complete, PSIRA-compliant security stack - from close protection and armed response to industrial site security and integrated fire solutions. Tap "Get a quote" on any service below and we'll come back to you with a fit-for-purpose plan.
          </p>
        </div>
      </section>

      {/* Service blocks - core */}
      <main className="px-5 py-12 md:py-20">
        <div className="max-w-[1120px] mx-auto flex flex-col gap-16 md:gap-24">
          {services.filter((s) => !s.integrated).map((s, i) => renderServiceBlock(s, i))}
        </div>
      </main>

      {/* INTEGRATED SERVICES band */}
      <section className="bg-[#F8FAFC] px-5 py-14 md:py-20 border-t border-[#E5E7EB]">
        <div className="max-w-[1120px] mx-auto">
          <Reveal variant="fade-up">
            <div className="text-center max-w-[720px] mx-auto mb-12 md:mb-16">
              <div className="w-10 h-[2px] bg-brand-red mb-3 mx-auto" />
              <p className="text-brand-red text-[10px] font-extrabold tracking-[0.25em] uppercase">Integrated Services</p>
              <h2 className="font-display text-brand-navy text-[28px] md:text-[40px] leading-[1.05] mt-2">
                More than security - one accountable partner
              </h2>
              <p className="text-[#374151] text-[14px] md:text-[15px] leading-[1.65] mt-4">
                We bundle fire safety and specialised cleaning into our security operations so clients get one trusted team, one point of contact and one invoice across every service on site.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-16 md:gap-24">
            {services.filter((s) => s.integrated).map((s, i) => renderServiceBlock(s, i))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-navy px-5 py-14 md:py-20 text-center">
        <div className="max-w-[720px] mx-auto">
          <h2 className="font-display text-white text-[26px] md:text-[36px] leading-tight">
            Not sure which service you need?
          </h2>
          <p className="text-white/75 text-[14px] md:text-[15px] mt-3">
            Tell us what you need protected and we'll design a fit-for-purpose plan.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex h-12 px-6 items-center justify-center gap-2 rounded-lg bg-brand-red text-white text-[13px] font-bold uppercase tracking-wide hover:opacity-90"
          >
            Request a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
