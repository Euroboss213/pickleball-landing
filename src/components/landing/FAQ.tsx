import { useState } from "react";

const faqs = [
  { q: "Do I need my own paddle or balls?", a: "Nope. Paddles and balls are included for every session — just bring court shoes, water, and energy." },
  { q: "What if I've never played before?", a: "Perfect. The Novice clinic starts from zero — grip, footwork, rules, and your first rally, all in one Saturday." },
  { q: "How big are the groups?", a: "We cap each session at 12 slots so every player gets real coaching reps and personal feedback." },
  { q: "Can I book a 1-on-1 instead of a group?", a: "Yes. Solo sessions are the fastest way to progress. Message Coach Yey to lock in a time." },
  { q: "Where are the sessions held?", a: "We use UPCC-affiliated courts. The exact location is shared once your slot is confirmed." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-b-2 border-ink bg-yellow">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-5">
        <div className="md:col-span-2 reveal">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange">FAQ</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl">
            Quick answers, <span className="text-teal">no fluff.</span>
          </h2>
          <p className="mt-4 text-ink/75">
            Still curious? Send us a message — we usually reply same day.
          </p>
          <a href="#contact" className="mt-6 inline-flex rounded-full border-2 border-ink bg-cream px-5 py-2.5 font-bold shadow-retro-sm hover:bg-orange hover:text-cream transition">
            Ask Coach Yey →
          </a>
        </div>
        <div className="md:col-span-3 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="reveal rounded-2xl border-2 border-ink bg-cream shadow-retro-sm overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-bold">{f.q}</span>
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 border-ink bg-orange text-cream transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-ink/80">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}