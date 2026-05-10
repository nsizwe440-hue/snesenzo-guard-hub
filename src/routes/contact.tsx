import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, PhoneCall, ClipboardCheck, FileText } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/services";

type ContactSearch = { service?: string };

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => ({
    service: typeof search.service === "string" ? search.service : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contact Snesenzo Security Group | 24/7 Control Room" },
      { name: "description", content: "Reach Snesenzo Security Group 24/7. Call 061 169 0365, email info@snesenzo.co.za, or message us on WhatsApp." },
      { property: "og:title", content: "Contact Snesenzo Security Group" },
      { property: "og:description", content: "24/7 control room. Call, email or WhatsApp our team in KZN & Mpumalanga." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { service: preselectedSlug } = Route.useSearch();
  const matched = services.find((s) => s.slug === preselectedSlug);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [serviceSlug, setServiceSlug] = useState(matched?.slug ?? "");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceLabel = services.find((s) => s.slug === serviceSlug)?.label ?? "General enquiry";
    const subject = `Quote request  - ${serviceLabel}`;
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service: ${serviceLabel}`,
      "",
      "Message:",
      message,
    ].join("\n");
    window.location.href = `mailto:info@snesenzo.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="bg-brand-surface">
      <section className="bg-brand-navy text-white px-5 py-12 md:py-20">
        <div className="max-w-[1120px] mx-auto">
          <div className="w-10 h-[2px] bg-brand-red mb-3" />
          <p className="text-brand-red text-[10px] font-extrabold tracking-[0.2em] uppercase">Get in touch</p>
          <h1 className="font-display text-[36px] md:text-[56px] leading-[0.95] mt-2">CONTACT US</h1>
          <p className="text-white/75 text-[14px] max-w-[620px] mt-4">
            Our 24/7 control room is always on call. Reach us by phone, email or WhatsApp  - we'll respond promptly.
          </p>
        </div>
      </section>

      <main className="px-5 py-10 max-w-[1120px] mx-auto">
        <Reveal as="section" variant="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <a href="tel:0611690365" className="bg-white rounded-[14px] p-5 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)] hover:shadow-md transition-shadow flex flex-col items-start gap-2">
            <span className="inline-flex w-12 h-12 items-center justify-center rounded-full bg-brand-red text-white">
              <Phone size={20} />
            </span>
            <p className="text-[#6B7280] text-[11px] uppercase font-bold tracking-wider mt-1">Call 24/7</p>
            <p className="font-display text-brand-navy text-[20px]">061 169 0365</p>
            <p className="text-[#4B5563] text-[12px]">Tap to call our control room directly.</p>
          </a>

          <a href="mailto:info@snesenzo.co.za" className="bg-white rounded-[14px] p-5 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)] hover:shadow-md transition-shadow flex flex-col items-start gap-2">
            <span className="inline-flex w-12 h-12 items-center justify-center rounded-full bg-brand-red text-white">
              <Mail size={20} />
            </span>
            <p className="text-[#6B7280] text-[11px] uppercase font-bold tracking-wider mt-1">Email</p>
            <p className="font-display text-brand-navy text-[18px] break-all">info@snesenzo.co.za</p>
            <p className="text-[#4B5563] text-[12px]">For quotes, proposals and partnerships.</p>
          </a>

          <a href="https://wa.me/27611690365" target="_blank" rel="noopener noreferrer" className="bg-white rounded-[14px] p-5 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)] hover:shadow-md transition-shadow flex flex-col items-start gap-2">
            <span className="inline-flex w-12 h-12 items-center justify-center rounded-full bg-brand-red text-white">
              <MessageCircle size={20} />
            </span>
            <p className="text-[#6B7280] text-[11px] uppercase font-bold tracking-wider mt-1">WhatsApp</p>
            <p className="font-display text-brand-navy text-[20px]">Message us</p>
            <p className="text-[#4B5563] text-[12px]">Quick replies during business hours.</p>
          </a>
        </Reveal>

        {/* Quote request form */}
        <Reveal as="section" variant="fade-up" className="mt-5 bg-white rounded-[14px] p-5 md:p-7 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-2 mb-1">
            <span className="block w-[3px] h-[18px] bg-brand-red rounded-sm" />
            <h2 className="font-display text-brand-navy text-[20px] tracking-wide">REQUEST A QUOTE</h2>
          </div>
          <p className="text-[#4B5563] text-[13px] mb-5 ml-[14px]">
            Tell us what you need protected. We typically respond within one business hour.
          </p>

          {matched && (
            <div className="mb-5 rounded-lg bg-[#F8FAFC] border-l-4 border-brand-red px-4 py-3 text-[13px] text-brand-navy">
              Enquiring about <strong>{matched.label}</strong>  - preselected below.
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col gap-1.5">
              <span className="text-[12px] font-bold uppercase tracking-wider text-brand-navy">Full name *</span>
              <input
                type="text" required value={name} onChange={(e) => setName(e.target.value)}
                className="h-11 px-3 rounded-lg border border-[#E5E7EB] bg-white text-[14px] focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-[12px] font-bold uppercase tracking-wider text-brand-navy">Phone *</span>
              <input
                type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)}
                className="h-11 px-3 rounded-lg border border-[#E5E7EB] bg-white text-[14px] focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
              />
            </label>
            <label className="flex flex-col gap-1.5 md:col-span-2">
              <span className="text-[12px] font-bold uppercase tracking-wider text-brand-navy">Email *</span>
              <input
                type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                className="h-11 px-3 rounded-lg border border-[#E5E7EB] bg-white text-[14px] focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
              />
            </label>
            <label className="flex flex-col gap-1.5 md:col-span-2">
              <span className="text-[12px] font-bold uppercase tracking-wider text-brand-navy">Service *</span>
              <select
                required value={serviceSlug} onChange={(e) => setServiceSlug(e.target.value)}
                className="h-11 px-3 rounded-lg border border-[#E5E7EB] bg-white text-[14px] focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
              >
                <option value="" disabled>Select a service…</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>{s.label}</option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1.5 md:col-span-2">
              <span className="text-[12px] font-bold uppercase tracking-wider text-brand-navy">Tell us about your site or operation</span>
              <textarea
                rows={5} value={message} onChange={(e) => setMessage(e.target.value)}
                className="px-3 py-2 rounded-lg border border-[#E5E7EB] bg-white text-[14px] focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red resize-y"
              />
            </label>
            <div className="md:col-span-2">
              <button type="submit" className="inline-flex h-12 px-6 items-center justify-center gap-2 rounded-lg bg-brand-red text-white text-[13px] font-bold uppercase tracking-wide hover:opacity-90">
                Send request <ArrowRight size={16} />
              </button>
              <p className="text-[#6B7280] text-[11px] mt-3">
                Your request opens in your email app, addressed to info@snesenzo.co.za.
              </p>
            </div>
          </form>
        </Reveal>

        <Reveal as="section" variant="fade-up" className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white rounded-[14px] p-5 md:p-6 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-2 mb-3">
              <MapPin size={18} className="text-brand-red" />
              <h2 className="font-display text-brand-navy text-[18px] tracking-wide">HEAD OFFICE</h2>
            </div>
            <p className="text-[#374151] text-[13px] leading-[1.6]">
              45 Voor Street<br />
              Utrecht, 2980<br />
              KwaZulu-Natal, South Africa
            </p>
          </div>

          <div className="bg-white rounded-[14px] p-5 md:p-6 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-2 mb-3">
              <Clock size={18} className="text-brand-red" />
              <h2 className="font-display text-brand-navy text-[18px] tracking-wide">OPERATING HOURS</h2>
            </div>
            <ul className="text-[#374151] text-[13px] leading-[1.7]">
              <li><strong className="text-brand-navy">Control Room:</strong> 24 hours, 7 days a week</li>
              <li><strong className="text-brand-navy">Office:</strong> Mon–Fri, 08:00 – 17:00</li>
              <li><strong className="text-brand-navy">Armed Response:</strong> Always on standby</li>
            </ul>
          </div>
        </Reveal>

        {/* Map embed */}
        <Reveal as="section" variant="fade-up" className="mt-5 bg-white rounded-[14px] overflow-hidden shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)]">
          <iframe
            title="Snesenzo Security Group  - 45 Voor Street, Utrecht"
            src="https://www.google.com/maps?q=45+Voor+Street,+Utrecht,+2980,+KwaZulu-Natal,+South+Africa&output=embed"
            className="w-full h-[320px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>

        {/* What happens next */}
        <Reveal as="section" variant="fade-up" className="mt-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-[3px] h-[18px] bg-brand-red rounded-sm" />
            <h2 className="font-display text-brand-navy text-[18px] tracking-wide">WHAT HAPPENS NEXT</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { icon: PhoneCall, step: "01", title: "We call you back", body: "Usually within one business hour to understand your needs." },
              { icon: ClipboardCheck, step: "02", title: "Free site assessment", body: "An officer visits your site to assess risks and access points." },
              { icon: FileText, step: "03", title: "Tailored quote in 24h", body: "A clear, costed proposal  - no jargon, no surprises." },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-[14px] p-5 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)] border-t-4 border-brand-red">
                <div className="flex items-center justify-between mb-2">
                  <s.icon size={22} className="text-brand-red" />
                  <span className="font-display text-brand-navy/30 text-[28px] leading-none">{s.step}</span>
                </div>
                <p className="font-display text-brand-navy text-[16px] mb-1">{s.title}</p>
                <p className="text-[#4B5563] text-[12.5px] leading-[1.6]">{s.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </main>
    </div>
  );
}
