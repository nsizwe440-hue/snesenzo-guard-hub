import astron from "@/assets/clients/astron.jpg";
import emadlangeni from "@/assets/clients/emadlangeni.jpg";
import spar from "@/assets/clients/spar.png";

const logos = [
  { src: astron, alt: "Astron Energy" },
  { src: emadlangeni, alt: "eMadlangeni Local Municipality" },
  { src: spar, alt: "SPAR" },
];

export function TrustedBy() {
  // Duplicate the list so the marquee loop is seamless
  const loop = [...logos, ...logos, ...logos, ...logos];
  return (
    <section className="bg-white py-16 md:py-20 border-y border-[#E5E7EB]">
      <div className="max-w-[1120px] mx-auto px-5 text-center mb-10 md:mb-14">
        <p className="text-[11px] tracking-[0.25em] font-bold text-[#6B7280] uppercase mb-4">
          Proven in the field
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-[#0B1220] leading-tight mb-3">
          Trusted to protect people, property and operations
        </h2>
        <p className="text-[15px] md:text-base text-[#4B5563] max-w-2xl mx-auto">
          A selection of the businesses, municipalities and estates we secure across KZN and Mpumalanga.
        </p>
      </div>
      <div
        className="relative overflow-hidden trusted-mask group"
        aria-label="Client logos"
      >
        <div className="flex w-max animate-trusted-marquee gap-16 md:gap-12 items-center px-4">
          {loop.map((l, i) => (
            <div
              key={i}
              className="shrink-0 flex items-center justify-center bg-white border border-[#E5E7EB] rounded-xl shadow-sm hover:shadow-md transition-shadow h-24 w-40 md:h-28 md:w-52 p-4"
            >
              <img
                src={l.src}
                alt={l.alt}
                loading="lazy"
                className="max-h-14 md:max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
