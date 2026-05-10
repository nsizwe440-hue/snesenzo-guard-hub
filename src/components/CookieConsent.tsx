import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "ssg-cookie-consent-v1";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      const accepted = localStorage.getItem(STORAGE_KEY);
      if (!accepted) {
        // Small delay so it doesn't compete with first paint
        const t = setTimeout(() => setVisible(true), 600);
        return () => clearTimeout(t);
      }
    } catch {
      // ignore (private mode etc.)
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ accepted: true, at: Date.now() }));
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie notice"
      className="fixed inset-x-3 bottom-3 md:inset-x-auto md:left-6 md:bottom-6 md:max-w-md z-[100] animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="relative bg-brand-navy text-white rounded-2xl shadow-2xl border border-white/10 p-5 pr-10">
        <button
          onClick={accept}
          aria-label="Dismiss cookie notice"
          className="absolute top-2.5 right-2.5 inline-flex items-center justify-center w-8 h-8 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X size={16} />
        </button>
        <div className="flex items-start gap-3">
          <span className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand-red/15 text-brand-red">
            <Cookie size={18} />
          </span>
          <div className="min-w-0">
            <p className="font-display text-[16px] tracking-wide mb-1">We use cookies</p>
            <p className="text-white/75 text-[13px] leading-[1.55]">
              This site uses essential cookies to keep things working smoothly. By using
              our site you agree to our{" "}
              <Link to="/contact" className="underline underline-offset-2 hover:text-brand-red">
                terms
              </Link>
              .
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={accept}
                className="inline-flex h-10 px-5 items-center justify-center rounded-lg bg-brand-red text-white text-[12px] font-bold uppercase tracking-wide hover:opacity-90"
              >
                Accept
              </button>
              <a
                href="https://www.allaboutcookies.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 px-5 items-center justify-center rounded-lg border border-white/25 text-white/85 text-[12px] font-bold uppercase tracking-wide hover:bg-white/10"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
