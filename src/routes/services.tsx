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
            A complete, PSIRA-compliant security stack — from close protection and armed response to industrial site security and integrated fire solutions. Tap "Get a quote" on any service below and we'll come back to you with a fit-for-purpose plan.
          </p>
        </div>
      </section>

      {/* Service blocks */}
      <main className="px-5 py-12 md:py-20">
        <div className="max-w-[1120px] mx-auto flex flex-col gap-16 md:gap-24">
          {services.map((s, i) => {
            const Icon = s.icon;
            const imageRight = i % 2 === 1;
            return (
              <section
                key={s.slug}
                id={s.slug}
                className="scroll-mt-24"
              >
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${imageRight ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  {/* Visual */}
                  <Reveal variant="fade-up">
                    {s.image ? (
                      <ResponsiveImage
                        name={s.image}
                        alt={s.label}
                        sizes="(min-width: 1024px) 540px, 100vw"
                        className="block w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
                        imgClassName="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-brand-navy to-[#1e293b] shadow-xl flex items-center justify-center">
                        <Icon size={96} className="text-brand-red" strokeWidth={1.5} />
                      </div>
                    )}
                  </Reveal>

                  {/* Content */}
                  <Reveal variant="fade-up" delay={120}>
                    <div className="flex items-center gap-2 mb-3">
                      <Icon size={22} className="text-brand-red" />
                      <p className="text-brand-red text-[10px] font-extrabold tracking-[0.2em] uppercase">Service</p>
                    </div>
                    <h2 className="font-display text-brand-navy text-[26px] md:text-[34px] leading-[1.1] tracking-wide">
                      {s.label}
                    </h2>
                    <p className="text-[#374151] text-[15px] md:text-[16px] leading-[1.65] mt-4">
                      {s.details.intro}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-5 mt-6">
                      <div>
                        <h3 className="text-brand-navy font-display text-[12px] tracking-[0.18em] uppercase mb-2">
                          What's included
                        </h3>
                        <ul className="space-y-1.5">
                          {s.details.whatsIncluded.map((item) => (
                            <li key={item} className="flex gap-2 text-[13px] text-[#374151] leading-[1.55]">
                              <Check size={15} className="text-brand-red shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-brand-navy font-display text-[12px] tracking-[0.18em] uppercase mb-2">
                          Who it's for
                        </h3>
                        <ul className="space-y-1.5">
                          {s.details.whoItsFor.map((item) => (
                            <li key={item} className="flex gap-2 text-[13px] text-[#374151] leading-[1.55]">
                              <Check size={15} className="text-brand-red shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-5 rounded-lg bg-[#F8FAFC] border-l-4 border-brand-red p-4">
                      <p className="text-[13px] md:text-[14px] text-brand-navy font-medium leading-[1.55]">
                        {s.details.outcome}
                      </p>
                    </div>

                    <Link
                      to="/contact"
                      search={{ service: s.slug }}
                      className="mt-6 inline-flex h-12 px-6 items-center justify-center gap-2 rounded-lg bg-brand-red text-white text-[13px] font-bold uppercase tracking-wide hover:opacity-90"
                    >
                      Get a quote for this service <ArrowRight size={16} />
                    </Link>
                  </Reveal>
                </div>
              </section>
            );
          })}
        </div>
      </main>

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
