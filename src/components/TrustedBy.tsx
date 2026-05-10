import astron from "@/assets/clients/astron.jpg";
import emadlangeni from "@/assets/clients/emadlangeni.jpg";
import spar from "@/assets/clients/spar.png";

const logos = [
  { src: astron, alt: "Astron Energy" },
  { src: emadlangeni, alt: "eMadlangeni Local Municipality" },
  { src: spar, alt: "SPAR" },
];

export function TrustedBy() {
  // Duplicate the list so the translate-1/2 loop is seamless
  const loop = [...logos, ...logos, ...logos, ...logos];
  return (
    <section className="bg-white py-12 md:py-16 border-y border-[#E5E7EB]">
      <div className="max-w-[1120px] mx-auto px-5">
        <p className="text-center text-[11px] tracking-[0.25em] font-bold text-[#6B7280] uppercase mb-8">
          Trusted by organisations across KZN & Mpumalanga
        </p>
      </div>
      <div className="relative overflow-hidden trusted-mask">
        <div className="flex w-max animate-trusted-marquee gap-12 md:gap-20 items-center">
          {loop.map((l, i) => (
            <img
              key={i}
              src={l.src}
              alt={l.alt}
              loading="lazy"
              className="h-14 md:h-20 w-auto object-contain shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
