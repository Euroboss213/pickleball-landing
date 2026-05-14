import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 250, suffix: "+", label: "Players coached" },
  { value: 1200, suffix: "+", label: "Drills delivered" },
  { value: 98, suffix: "%", label: "Would recommend" },
  { value: 5, suffix: "★", label: "Average rating" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const dur = 1400;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="border-b-2 border-ink bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 grid gap-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="reveal text-center md:text-left">
            <p className="font-display text-5xl md:text-6xl font-extrabold text-yellow leading-none">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-cream/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}