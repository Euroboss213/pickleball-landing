const reviews = [
  {
    quote: "Coach Yey made my first session feel easy. By week two I was rallying with confidence — and actually winning points!",
    name: "Mika R.",
    role: "Beginner · Solo session",
    color: "bg-yellow",
  },
  {
    quote: "The drills are sharp and the feedback is honest. My third-shot drop finally feels automatic.",
    name: "Jared T.",
    role: "Intermediate · Group",
    color: "bg-cream",
  },
  {
    quote: "Best 3 hours I've spent on a court. Came in nervous, left obsessed.",
    name: "Anna L.",
    role: "Novice clinic",
    color: "bg-teal text-cream",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="border-b-2 border-ink bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-20">
        <div className="max-w-2xl reveal">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">Word on the court</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl">
            Players don't lie. <span className="text-orange">Wins do the talking.</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className={`reveal relative rounded-3xl border-2 border-ink p-6 shadow-retro-sm ${r.color}`}
            >
              <span className="absolute -top-5 left-5 grid h-10 w-10 place-items-center rounded-full border-2 border-ink bg-orange text-cream font-display text-xl font-extrabold">"</span>
              <blockquote className="pt-3 text-base font-medium leading-relaxed">
                {r.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/20 pt-4">
                <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-ink bg-cream font-display text-sm font-bold text-ink">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <p className="font-display text-sm font-bold leading-tight">{r.name}</p>
                  <p className="text-xs opacity-75">{r.role}</p>
                </div>
                <span className="ml-auto text-yellow text-sm">★★★★★</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}