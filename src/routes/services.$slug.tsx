import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return { meta: [{ title: "Service not found | Snesenzo Security Group" }] };
    const title = `${s.label} | Snesenzo Security Group`;
    const description = s.details.intro.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(s.image ? [
          { property: "og:image", content: s.image },
          { name: "twitter:image", content: s.image },
        ] : []),
      ],
    };
  },
  component: ServiceDetailPage,
  notFoundComponent: () => {
    const { slug } = Route.useParams();
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-5 text-center">
        <p className="text-brand-red text-[10px] font-extrabold tracking-[0.2em] uppercase">404</p>
        <h1 className="font-display text-[28px] md:text-[40px] text-brand-navy mt-2">Service not found</h1>
        <p className="text-[#4B5563] mt-3">We couldn't find a service called "{slug}".</p>
        <Link to="/services" className="mt-6 inline-flex h-11 px-5 items-center gap-2 rounded-lg bg-brand-red text-white text-[13px] font-bold uppercase tracking-wide hover:opacity-90">
          View all services <ArrowRight size={16} />
        </Link>
      </div>
    );
  },
  errorComponent: ({ error }) => (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-5 text-center">
      <h1 className="font-display text-[28px] text-brand-navy">Something went wrong</h1>
      <p className="text-[#4B5563] mt-3">{error.message}</p>
      <Link to="/services" className="mt-6 inline-flex h-11 px-5 items-center gap-2 rounded-lg bg-brand-red text-white text-[13px] font-bold uppercase tracking-wide hover:opacity-90">
        Back to services <ArrowRight size={16} />
      </Link>
    </div>
  ),
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const Icon = service.icon;

  return (
    <div className="bg-white">
      {/* Hero band */}
      <section className="bg-brand-navy text-white px-5 py-12 md:py-20">
        <div className="max-w-[1120px] mx-auto">
          <Link to="/services" className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-[12px] font-bold uppercase tracking-[0.15em] mb-6">
            <ArrowLeft size={14} /> All services
          </Link>
          <div className="w-10 h-[2px] bg-brand-red mb-3" />
          <p className="text-brand-red text-[10px] font-extrabold tracking-[0.2em] uppercase">What we do</p>
          <div className="flex items-start gap-4 mt-2">
            <Icon size={40} className="text-brand-red shrink-0 mt-2 hidden md:block" />
            <h1 className="font-display text-[32px] md:text-[52px] leading-[0.95]">{service.label}</h1>
          </div>
          <p className="text-white/80 text-[15px] md:text-[16px] leading-[1.6] max-w-[720px] mt-5">
            {service.details.intro}
          </p>
        </div>
      </section>

      {/* Hero image */}
      {service.image && (
        <section className="px-5 -mt-8 md:-mt-14">
          <div className="max-w-[1120px] mx-auto">
            <Reveal variant="fade-up">
              <img
                src={service.image}
                alt={service.label}
                className="w-full aspect-[16/7] object-cover rounded-2xl shadow-xl"
                loading="eager"
              />
            </Reveal>
          </div>
        </section>
      )}

      {/* Body */}
      <section className="px-5 py-14 md:py-20">
        <div className="max-w-[1120px] mx-auto grid md:grid-cols-2 gap-10 md:gap-14">
          <Reveal variant="fade-up">
            <h2 className="font-display text-brand-navy text-[13px] tracking-[0.18em] uppercase mb-4">
              <span className="inline-block w-6 h-[2px] bg-brand-red align-middle mr-2" />
              What's included
            </h2>
            <ul className="space-y-3">
              {service.details.whatsIncluded.map((item: string) => (
                <li key={item} className="flex gap-3 text-[14px] text-[#374151] leading-[1.6]">
                  <Check size={18} className="text-brand-red shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal variant="fade-up" delay={120}>
            <h2 className="font-display text-brand-navy text-[13px] tracking-[0.18em] uppercase mb-4">
              <span className="inline-block w-6 h-[2px] bg-brand-red align-middle mr-2" />
              Who it's for
            </h2>
            <ul className="space-y-3">
              {service.details.whoItsFor.map((item: string) => (
                <li key={item} className="flex gap-3 text-[14px] text-[#374151] leading-[1.6]">
                  <Check size={18} className="text-brand-red shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Outcome */}
      <section className="px-5 pb-14 md:pb-20">
        <div className="max-w-[1120px] mx-auto">
          <Reveal variant="fade-up" className="rounded-2xl bg-[#F8FAFC] border-l-4 border-brand-red p-6 md:p-8">
            <p className="text-brand-red text-[10px] font-extrabold tracking-[0.2em] uppercase mb-2">The outcome</p>
            <p className="text-brand-navy text-[18px] md:text-[22px] font-display leading-[1.4]">
              {service.details.outcome}
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy px-5 py-14 md:py-20 text-center">
        <div className="max-w-[720px] mx-auto">
          <h2 className="font-display text-white text-[26px] md:text-[36px] leading-tight">
            Need {service.label.toLowerCase()}?
          </h2>
          <p className="text-white/75 text-[14px] md:text-[15px] mt-3">
            Tell us about your site or operation and we'll design a fit-for-purpose plan.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" search={{ service: service.slug }} className="inline-flex h-12 px-6 items-center justify-center gap-2 rounded-lg bg-brand-red text-white text-[13px] font-bold uppercase tracking-wide hover:opacity-90">
              Request a Quote <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="inline-flex h-12 px-6 items-center justify-center gap-2 rounded-lg border border-white/30 text-white text-[13px] font-bold uppercase tracking-wide hover:bg-white/10">
              <ArrowLeft size={16} /> All services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
