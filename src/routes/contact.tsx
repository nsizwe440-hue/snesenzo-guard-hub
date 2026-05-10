import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
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
  return (
    <div className="bg-brand-surface">
      <section className="bg-brand-navy text-white px-5 py-12 md:py-20">
        <div className="max-w-[1120px] mx-auto">
          <div className="w-10 h-[2px] bg-brand-red mb-3" />
          <p className="text-brand-red text-[10px] font-extrabold tracking-[0.2em] uppercase">Get in touch</p>
          <h1 className="font-display text-[36px] md:text-[56px] leading-[0.95] mt-2">CONTACT US</h1>
          <p className="text-white/75 text-[14px] max-w-[620px] mt-4">
            Our 24/7 control room is always on call. Reach us by phone, email or WhatsApp — we'll respond promptly.
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

        <Reveal as="section" variant="fade-up" className="mt-5 bg-brand-navy rounded-[14px] p-5 md:p-7 text-center">
          <p className="text-white/80 text-[13px] leading-[1.6] max-w-[560px] mx-auto">
            An online quote request form is coming soon. In the meantime, please call or email us — we typically respond within one business hour.
          </p>
        </Reveal>
      </main>
    </div>
  );
}
