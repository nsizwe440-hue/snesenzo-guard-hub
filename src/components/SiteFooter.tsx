import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import logo from "@/assets/ssg-logo.png";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-navy text-white mt-6">
      <div className="max-w-[1120px] mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={logo} alt="SSG" width={48} height={48} className="h-12 w-auto" />
            <div className="leading-none">
              <div className="font-display text-white text-[20px]">SNESENZO</div>
              <div className="text-white/70 text-[8px] tracking-[0.2em] font-bold">SECURITY GROUP</div>
            </div>
          </div>
          <p className="text-white/70 text-[12px] leading-[1.6] max-w-[280px]">
            Strength &amp; confidence in protection services. PSIRA-registered, 100% youth black-owned.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-display text-[15px] tracking-wide mb-4 text-white">QUICK LINKS</h3>
          <ul className="space-y-2 text-[13px]">
            {[
              { to: "/" as const, label: "Home" },
              { to: "/services" as const, label: "Services" },
              { to: "/about" as const, label: "About Us" },
              { to: "/coverage" as const, label: "Coverage" },
              { to: "/contact" as const, label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/75 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-[15px] tracking-wide mb-4 text-white">CONTACT</h3>
          <ul className="space-y-3 text-[12.5px] text-white/80">
            <li className="flex items-start gap-2">
              <Phone size={14} className="mt-0.5 text-brand-red shrink-0" />
              <a href="tel:0611690365" className="hover:text-white">061 169 0365</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={14} className="mt-0.5 text-brand-red shrink-0" />
              <a href="mailto:info@snesenzo.co.za" className="hover:text-white break-all">info@snesenzo.co.za</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 text-brand-red shrink-0" />
              <span>45 Voor Street, Utrecht, 2980, KwaZulu-Natal</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock size={14} className="mt-0.5 text-brand-red shrink-0" />
              <span>24/7 Control Room — always on call</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1120px] mx-auto px-5 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-[10.5px] text-white/55">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="inline-flex items-center gap-1">
              <ShieldCheck size={12} className="text-brand-red" /> PSIRA 4972817
            </span>
            <span>·</span>
            <span>CIPC 2024/620995/07</span>
            <span>·</span>
            <span>POPIA Compliant</span>
          </div>
          <div>© {year} Snesenzo Security Group (Pty) Ltd. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
