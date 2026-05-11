import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/ssg-logo.png";

const navItems = [
  { to: "/" as const, label: "Home" },
  { to: "/services" as const, label: "Services" },
  { to: "/about" as const, label: "About" },
  { to: "/coverage" as const, label: "Coverage" },
  { to: "/careers" as const, label: "Careers" },
  { to: "/contact" as const, label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  // Home: transparent over hero. Subpages: solid navy bar.
  const wrapperClass = isHome
    ? "absolute top-0 left-0 right-0 z-30"
    : "sticky top-0 z-30 bg-brand-navy shadow-md";

  return (
    <>
      <header className={wrapperClass}>
        <div className="max-w-[1120px] mx-auto h-[72px] px-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <img src={logo} alt="SSG" width={42} height={42} className="h-[42px] w-auto" />
            <div className="leading-none">
              <div className="font-display text-white text-[20px]">SNESENZO</div>
              <div className="text-white/80 text-[8px] tracking-[0.2em] font-bold">SECURITY GROUP</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-white/85 text-[13px] font-semibold uppercase tracking-wide hover:text-white transition-colors"
                activeProps={{ className: "text-white border-b-2 border-brand-red pb-1" }}
                activeOptions={{ exact: true }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="inline-flex h-[40px] px-4 items-center justify-center rounded-lg bg-brand-red text-white text-[12px] font-bold uppercase tracking-wide hover:opacity-90"
            >
              Get Protected
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            aria-label="Open menu"
            className="md:hidden text-white"
            onClick={() => setOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <aside className="absolute right-0 top-0 h-full w-[78%] max-w-[320px] bg-brand-navy p-5 flex flex-col gap-4 shadow-2xl">
            <div className="flex items-center justify-between mb-2">
              <span className="font-display text-white text-[18px]">MENU</span>
              <button aria-label="Close menu" className="text-white" onClick={() => setOpen(false)}>
                <X size={26} />
              </button>
            </div>
            <nav className="flex flex-col gap-1 mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="text-white text-[15px] font-semibold uppercase tracking-wide py-3 border-b border-white/10"
                  activeProps={{ className: "text-brand-red" }}
                  activeOptions={{ exact: true }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 h-[46px] inline-flex items-center justify-center rounded-lg bg-brand-red text-white text-[13px] font-bold uppercase tracking-wide"
            >
              Get Protected
            </Link>
            <a
              href="tel:0639102378"
              className="h-[46px] inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 text-white text-[13px] font-semibold"
            >
              <Phone size={16} /> 063 910 2378
            </a>
          </aside>
        </div>
      )}
    </>
  );
}
