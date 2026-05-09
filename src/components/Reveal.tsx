import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

type Variant = "fade-up" | "fade-in" | "zoom-in";

interface RevealProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number; // ms
  className?: string;
  as?: "div" | "li" | "section" | "span";
  style?: CSSProperties;
}

export function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  className = "",
  as: Tag = "div",
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal reveal-${variant} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
