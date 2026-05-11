import { Phone, MessageCircle } from "lucide-react";

export function StickyCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden grid grid-cols-2 shadow-[0_-4px_16px_rgba(0,0,0,0.25)]">
      <a
        href="tel:0639102378"
        className="h-14 flex items-center justify-center gap-2 bg-brand-red text-white text-[13px] font-bold uppercase tracking-wide active:opacity-90"
      >
        <Phone size={18} />
        <span>Call 24/7</span>
      </a>
      <a
        href="https://wa.me/27639102378"
        target="_blank"
        rel="noopener noreferrer"
        className="h-14 flex items-center justify-center gap-2 bg-brand-navy text-white text-[13px] font-bold uppercase tracking-wide active:opacity-90 border-l border-white/15"
      >
        <MessageCircle size={18} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
