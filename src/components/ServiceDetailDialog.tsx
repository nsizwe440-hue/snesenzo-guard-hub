import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import type { Service } from "@/data/services";

type Props = {
  service: Service | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ServiceDetailDialog({ service, open, onOpenChange }: Props) {
  if (!service) return null;
  const Icon = service.icon;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 gap-0">
        {service.image && (
          <div className="relative h-48 md:h-56 w-full overflow-hidden rounded-t-lg">
            <img src={service.image} alt={service.label} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute left-6 bottom-5 right-6">
              <div className="w-8 h-[2px] bg-brand-red mb-2" />
              <p className="text-brand-red text-[10px] font-extrabold tracking-[0.2em] uppercase">What we do</p>
            </div>
          </div>
        )}

        <div className="p-6 md:p-8">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <Icon size={26} className="text-brand-red" />
              <DialogTitle className="font-display text-[22px] md:text-[26px] text-brand-navy tracking-wide leading-tight">
                {service.label}
              </DialogTitle>
            </div>
            <DialogDescription className="text-[14px] md:text-[15px] text-[#374151] leading-[1.65]">
              {service.details.intro}
            </DialogDescription>
          </DialogHeader>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="text-brand-navy font-display text-[13px] tracking-[0.15em] uppercase mb-3">What's included</h4>
              <ul className="space-y-2">
                {service.details.whatsIncluded.map((item) => (
                  <li key={item} className="flex gap-2 text-[13px] text-[#374151] leading-[1.5]">
                    <Check size={16} className="text-brand-red shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-brand-navy font-display text-[13px] tracking-[0.15em] uppercase mb-3">Who it's for</h4>
              <ul className="space-y-2">
                {service.details.whoItsFor.map((item) => (
                  <li key={item} className="flex gap-2 text-[13px] text-[#374151] leading-[1.5]">
                    <Check size={16} className="text-brand-red shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-[#F8FAFC] border-l-4 border-brand-red p-4">
            <p className="text-[13px] md:text-[14px] text-brand-navy font-medium leading-[1.55]">
              {service.details.outcome}
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              onClick={() => onOpenChange(false)}
              className="inline-flex h-11 px-5 items-center justify-center gap-2 rounded-lg bg-brand-red text-white text-[13px] font-bold uppercase tracking-wide hover:opacity-90"
            >
              Request a Quote <ArrowRight size={16} />
            </Link>
            <button
              onClick={() => onOpenChange(false)}
              className="inline-flex h-11 px-5 items-center justify-center rounded-lg border border-[#E5E7EB] text-brand-navy text-[13px] font-bold uppercase tracking-wide hover:bg-[#F8FAFC]"
            >
              Close
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
