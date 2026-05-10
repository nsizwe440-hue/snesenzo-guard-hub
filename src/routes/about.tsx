import { createFileRoute, Link } from "@tanstack/react-router";
import { Quote, ArrowRight, Phone, MapPin, Users, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { getImage } from "@/assets/optimized";
const ceo = getImage("ceo-portrait").fallback.url;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Meet the Founder — Ntabazwe Ndlovu | Snesenzo Security Group" },
      { name: "description", content: "Meet Ntabazwe Shemeni Wegidi Ndlovu, the Amajuba-born entrepreneur and founder of Snesenzo Security Group — a youth-led, 100% black-owned security company serving KZN & Mpumalanga." },
      { property: "og:title", content: "Meet the Founder — Ntabazwe Ndlovu" },
      { property: "og:description", content: "Founder & CEO of Snesenzo Security Group. Locally rooted, professionally run, personally accountable." },
      { property: "og:image", content: ceo },
      { name: "twitter:image", content: ceo },
    ],
  }),
  component: AboutPage,
});

const container = "max-w-7xl mx-auto px-6 lg:px-8";

function SectionTitle({ children, dark = false, eyebrow }: { children: React.ReactNode; dark?: boolean; eyebrow?: string }) {
  return (
    <div className="mb-8 lg:mb-10">
      <div className="flex items-center gap-3 mb-3">
        <span className="block w-[4px] h-6 bg-brand-red rounded-sm" />
        {eyebrow && (
          <span className="text-brand-red text-[11px] font-extrabold tracking-[0.18em] uppercase">
            {eyebrow}
          </span>
        )}
      </div>
      <h1 className={`font-display text-[32px] md:text-[44px] lg:text-[56px] leading-[1.05] tracking-tight ${dark ? "text-white" : "text-[#0F172A]"}`}>
        {children}
      </h1>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="bg-white">
      {/* HERO HEADER — navy */}
      <section className="bg-brand-navy py-16 lg:py-24">
        <div className={container}>
          <Reveal variant="fade-up">
            <SectionTitle dark eyebrow="Meet the Founder">Ntabazwe Ndlovu</SectionTitle>
          </Reveal>
          <Reveal variant="fade-up" delay={80}>
            <p className="text-brand-red text-[14px] md:text-[16px] font-extrabold uppercase tracking-wide">
              Founder &amp; CEO, Snesenzo Security Group
            </p>
          </Reveal>
        </div>
      </section>

      {/* PORTRAIT + BIO */}
      <section className="py-16 lg:py-24 bg-white">
        <div className={`${container} grid lg:grid-cols-2 gap-12 lg:gap-16 items-start`}>
          <Reveal variant="fade-up">
            <img
              src={ceo}
              alt="Ntabazwe Ndlovu, Founder & CEO of Snesenzo Security Group"
              className="w-full aspect-[4/5] object-cover object-top rounded-2xl shadow-xl"
              loading="lazy"
            />
          </Reveal>
          <Reveal variant="fade-up" delay={120}>
            <div className="space-y-5 text-[#374151] text-[16px] md:text-[17px] leading-[1.75]">
              <p>
                <span className="font-bold text-[#0F172A]">Ntabazwe Shemeni Wegidi Ndlovu</span> is not your typical security company CEO. He's an Amajuba-born entrepreneur and community leader who runs multiple businesses across the district — and Snesenzo Security Group is the venture closest to home, born out of a simple conviction: the people, businesses, and families of KwaZulu-Natal and Mpumalanga deserve a security partner who actually knows them, lives among them, and answers to them.
              </p>
              <p>
                Operating from Utrecht in the Amajuba District, Ntabazwe brings the instincts of a businessman and the standards of a leader to an industry too often run from a distance. He built Snesenzo as a youth-led, 100% black-owned company because he believes the next generation of security in this region must be locally rooted, professionally run, and personally accountable — not faceless, not outsourced, not detached.
              </p>
              <p>
                When you partner with Snesenzo, you're not hiring a logo. You're standing alongside a founder who has chosen to back his own community with his name, his businesses, and his reputation — and who expects every guard, every patrol, and every response to reflect that.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY SNESENZO — pillars */}
      <section className="bg-[#F8FAFC] py-16 lg:py-20">
        <div className={container}>
          <Reveal variant="fade-up">
            <p className="text-brand-red text-[11px] font-extrabold tracking-[0.18em] uppercase mb-2">Why Snesenzo</p>
            <h2 className="font-display text-[#0F172A] text-[28px] md:text-[40px] leading-tight mb-10">Three things we refuse to compromise on.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: MapPin, title: "Locally Rooted", body: "Headquartered in Utrecht, Amajuba — we live, hire and answer to the communities we protect." },
              { icon: Users, title: "Youth-Led, 100% Black-Owned", body: "A new generation of operators raising the standard for security in KZN and Mpumalanga." },
              { icon: ShieldCheck, title: "Personally Accountable", body: "The founder's name is on the door. Every guard, every patrol, every response reflects that." },
            ].map((p, i) => (
              <Reveal key={p.title} variant="fade-up" delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 h-full shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)] border-t-4 border-brand-red">
                  <p.icon size={28} className="text-brand-red mb-3" />
                  <h3 className="font-display text-brand-navy text-[20px] mb-2">{p.title}</h3>
                  <p className="text-[#374151] text-[14px] leading-[1.65]">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PEOPLE — image strip */}
      <section className="bg-brand-navy py-16 lg:py-20">
        <div className={container}>
          <Reveal variant="fade-up">
            <p className="text-brand-red text-[11px] font-extrabold tracking-[0.18em] uppercase mb-2">Our People</p>
            <h2 className="font-display text-white text-[28px] md:text-[40px] leading-tight mb-10">Deployed. Disciplined. Accountable.</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: peopleDeployed, label: "Deployed" },
              { src: peopleDisciplined, label: "Disciplined" },
              { src: peopleAccountable, label: "Accountable" },
            ].map((p, i) => (
              <Reveal key={p.label} variant="zoom-in" delay={i * 100}>
                <div className="rounded-xl overflow-hidden bg-black">
                  <img src={p.src} alt={p.label} loading="lazy" className="w-full aspect-[3/4] object-cover" />
                  <div className="bg-black px-4 py-3">
                    <div className="w-6 h-[2px] bg-brand-red mb-1" />
                    <p className="text-white text-[12px] font-extrabold uppercase tracking-wide">{p.label}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-[#F8FAFC] py-16 lg:py-20">
        <div className={`${container} max-w-4xl`}>
          <Reveal variant="fade-up">
            <Quote size={44} className="text-brand-red mb-4" />
            <p className="text-[22px] md:text-[30px] leading-[1.35] italic text-[#0F172A] font-light">
              "We will hold ourselves accountable to the highest standards of professional integrity and service."
            </p>
            <p className="text-brand-red text-[14px] font-extrabold mt-6">Ntabazwe Shemeni Wegidi Ndlovu</p>
            <p className="text-[#374151] text-[13px]">Founder &amp; CEO, Snesenzo Security Group</p>
          </Reveal>
        </div>
      </section>

      {/* COMPANY FACTS BAND */}
      <section className="bg-white py-10 border-y border-[#E5E7EB]">
        <div className={`${container} grid grid-cols-2 md:grid-cols-4 gap-6 text-center`}>
          {[
            { k: "PSIRA", v: "4972817" },
            { k: "CIPC", v: "2024/620995/07" },
            { k: "Founded in", v: "Amajuba, KZN" },
            { k: "Operating", v: "KZN & Mpumalanga" },
          ].map((f) => (
            <div key={f.k}>
              <p className="text-brand-red text-[10px] font-extrabold tracking-[0.2em] uppercase mb-1">{f.k}</p>
              <p className="font-display text-brand-navy text-[18px] md:text-[20px]">{f.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA — navy */}
      <section className="bg-brand-navy py-16 lg:py-20">
        <div className={`${container} text-center`}>
          <Reveal variant="fade-up">
            <h2 className="font-display text-white text-[28px] md:text-[40px] leading-tight mb-6">
              Ready to work with a team that <span className="text-brand-red">stands behind its name?</span>
            </h2>
          </Reveal>
          <Reveal variant="fade-up" delay={100}>
            <div className="flex flex-row gap-3 flex-wrap justify-center">
              <Link
                to="/contact"
                className="inline-flex h-12 px-6 items-center justify-center gap-2 rounded-lg bg-brand-red text-white text-[13px] font-bold uppercase tracking-wide hover:opacity-90"
              >
                Request a Quote <ArrowRight size={16} />
              </Link>
              <a
                href="tel:0611690365"
                className="inline-flex h-12 px-6 items-center justify-center gap-2 rounded-lg text-white text-[13px] font-bold border border-white/45 bg-black/40 hover:bg-black/60"
              >
                <Phone size={16} /> Call 24/7 — 061 169 0365
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
