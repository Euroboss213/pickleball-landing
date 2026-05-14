import { useEffect, useState } from "react";

export function MobileCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`fixed inset-x-0 bottom-4 z-40 mx-auto flex w-[min(92%,420px)] items-center justify-between gap-3 rounded-full border-2 border-ink bg-orange px-4 py-2.5 text-cream shadow-retro transition md:hidden ${show ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"}`}
    >
      <span className="font-display text-sm font-bold uppercase tracking-wider">12 slots · May 16</span>
      <a href="#contact" className="rounded-full border-2 border-ink bg-cream px-4 py-1.5 text-sm font-bold text-ink">
        Book →
      </a>
    </div>
  );
}