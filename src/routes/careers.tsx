import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, MapPin, TrendingUp, ArrowRight, Briefcase, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { getImage } from "@/assets/optimized";
const bannerOfficers = getImage("hero-ssg-vehicle").fallback.url;

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers  - Join Snesenzo Security Group | KZN & Mpumalanga" },
      { name: "description", content: "Build a career in protection with Snesenzo Security Group. PSIRA-registered roles across KwaZulu-Natal and Mpumalanga  - officers, armed response, control room and supervisors." },
      { property: "og:title", content: "Careers at Snesenzo Security Group" },
      { property: "og:description", content: "PSIRA-registered training, local deployment, real growth path. Apply today." },
      { property: "og:image", content: bannerOfficers },
      { name: "twitter:image", content: bannerOfficers },
    ],
  }),
  component: CareersPage,
});

const CAREERS_EMAIL = "careers@snesenzo.co.za";

const why = [
  { icon: ShieldCheck, title: "PSIRA-Registered Training", body: "Work for a compliant operator that invests in proper grading, refreshers and on-site coaching." },
  { icon: MapPin, title: "Local Deployment", body: "We hire from the communities we protect. Less travel, more hours where you live." },
  { icon: TrendingUp, title: "Real Growth Path", body: "From officer to supervisor to control room  - promotions go to those who show up and lead." },
];


function CareersPage() {
  return (
    <div className="bg-brand-surface">
      {/* Hero */}
      <section className="relative bg-brand-navy text-white px-5 py-16 md:py-24 overflow-hidden">
        <img src={bannerOfficers} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/40" />
        <div className="relative max-w-[1120px] mx-auto">
          <div className="w-10 h-[2px] bg-brand-red mb-3" />
          <p className="text-brand-red text-[10px] font-extrabold tracking-[0.2em] uppercase">Join the team</p>
          <h1 className="font-display text-[36px] md:text-[56px] leading-[0.95] mt-2">BUILD A CAREER IN PROTECTION.</h1>
          <p className="text-white/80 text-[14px] md:text-[15px] max-w-[620px] mt-4">
            We're hiring across KwaZulu-Natal and Mpumalanga. If you take pride in your post and answer to your community, we want to meet you.
          </p>
        </div>
      </section>

      <main className="px-5 py-10 max-w-[1120px] mx-auto">
        {/* Why work with us */}
        <Reveal as="section" variant="fade-up">
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-[3px] h-[18px] bg-brand-red rounded-sm" />
            <h2 className="font-display text-brand-navy text-[18px] tracking-wide">WHY WORK WITH US</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {why.map((w) => (
              <div key={w.title} className="bg-white rounded-[14px] p-5 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)] border-t-4 border-brand-red">
                <w.icon size={24} className="text-brand-red mb-2" />
                <p className="font-display text-brand-navy text-[16px] mb-1">{w.title}</p>
                <p className="text-[#4B5563] text-[13px] leading-[1.65]">{w.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Open roles  - none currently */}
        <Reveal as="section" variant="fade-up" className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-[3px] h-[18px] bg-brand-red rounded-sm" />
            <h2 className="font-display text-brand-navy text-[18px] tracking-wide">OPEN ROLES</h2>
          </div>
          <div className="bg-white rounded-[14px] p-6 md:p-8 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)] border-t-4 border-brand-red text-center">
            <span className="inline-flex w-12 h-12 items-center justify-center rounded-full bg-brand-red/10 text-brand-red mb-3">
              <Briefcase size={22} />
            </span>
            <h3 className="font-display text-brand-navy text-[22px] md:text-[26px] leading-tight">
              No open positions right now.
            </h3>
            <p className="text-[#4B5563] text-[14px] mt-2 max-w-[520px] mx-auto">
              We're not actively recruiting at the moment  - please check back soon. New roles across KZN and Mpumalanga are posted here as they open.
            </p>
            <p className="text-[#374151] text-[13px] mt-4">
              In the meantime, you can still send us your CV below and we'll keep it on file.
            </p>
          </div>
        </Reveal>

        {/* Requirements band */}
        <Reveal as="section" variant="fade-up" className="mt-8 bg-brand-navy rounded-[14px] p-5 md:p-7 text-white">
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-[3px] h-[18px] bg-brand-red rounded-sm" />
            <h2 className="font-display text-white text-[18px] tracking-wide">GENERAL REQUIREMENTS</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[13px]">
            {[
              "Valid PSIRA grade",
              "South African ID",
              "Clear criminal record",
              "Own transport (advantage)",
            ].map((r) => (
              <div key={r} className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-brand-red mt-0.5 shrink-0" />
                <span className="text-white/85">{r}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal as="section" variant="fade-up" className="mt-8 bg-white rounded-[14px] p-6 md:p-8 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)] text-center">
          <h2 className="font-display text-brand-navy text-[24px] md:text-[30px] leading-tight">
            Don't see your role? <span className="text-brand-red">Send us your CV.</span>
          </h2>
          <p className="text-[#4B5563] text-[14px] mt-2 max-w-[560px] mx-auto">
            We're always interested in disciplined, accountable people. Email your CV and PSIRA certificate and we'll be in touch when something opens.
          </p>
          <div className="mt-5 flex flex-row gap-3 flex-wrap justify-center">
            <a
              href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent("General application  - CV submission")}`}
              className="inline-flex h-12 px-6 items-center justify-center gap-2 rounded-lg bg-brand-red text-white text-[13px] font-bold uppercase tracking-wide hover:opacity-90"
            >
              Email your CV <ArrowRight size={16} />
            </a>
            <Link
              to="/contact"
              className="inline-flex h-12 px-6 items-center justify-center gap-2 rounded-lg border border-brand-navy/20 text-brand-navy text-[13px] font-bold uppercase tracking-wide hover:bg-brand-navy/5"
            >
              Other enquiries
            </Link>
          </div>
        </Reveal>
      </main>
    </div>
  );
}
