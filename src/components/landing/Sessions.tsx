const sessions = [
  {
    level: "Novice",
    duration: "3 hrs",
    color: "bg-yellow",
    pill: "bg-orange text-cream",
    desc: "Perfect if you know the basics but want better control, consistency, and confidence.",
    features: ["Foundational drills", "Form correction", "Light gameplay"],
  },
  {
    level: "Intermediate",
    duration: "2 hrs",
    color: "bg-orange text-cream",
    pill: "bg-yellow text-ink",
    desc: "For players ready to improve strategy, positioning, and decision-making.",
    features: ["Tactical drills", "Live game scenarios", "Coaching feedback"],
  },
];

const formats = [
  { title: "Solo training", desc: "1-on-1 attention. Fastest path to progress." },
  { title: "Group sessions", desc: "Train with friends — more energy, more reps." },
  { title: "Hitting partner", desc: "Consistent rallying to drill specific shots." },
];

export function Sessions() {
  return (
    <section id="sessions" className="border-b-2 border-ink bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-20">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">Choose your session</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl">
              Two sessions. <span className="text-orange">One Saturday.</span>
            </h2>
          </div>
          <div className="rounded-2xl border-2 border-ink bg-teal px-4 py-3 text-cream shadow-retro-sm">
            <p className="font-display text-sm font-bold">📅 May 16 (Saturday)</p>
            <p className="text-xs opacity-80">12 slots per session only</p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {sessions.map((s) => (
            <article key={s.level} className={`rounded-3xl border-2 border-ink p-8 shadow-retro ${s.color}`}>
              <div className="flex items-center justify-between">
                <span className={`rounded-full border-2 border-ink px-3 py-1 text-xs font-bold uppercase tracking-widest ${s.pill}`}>{s.level}</span>
                <span className="font-display text-2xl font-extrabold">{s.duration}</span>
              </div>
              <p className="mt-6 text-lg font-medium">{s.desc}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="grid h-5 w-5 place-items-center rounded-full border-2 border-ink bg-cream text-ink">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-cream px-5 py-2.5 font-bold text-ink shadow-retro-sm transition hover:translate-x-[-2px] hover:translate-y-[-2px]">
                Reserve a slot →
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 rounded-3xl border-2 border-ink bg-ink p-8 text-cream md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow">Inclusions</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>👕 Clinic t-shirt</li>
              <li>🏓 Use of paddles & balls</li>
              <li>📜 Certificate of completion</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange">What to expect</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>✓ Targeted drills to build your skills</li>
              <li>✓ Real gameplay situations</li>
              <li>✓ Coaching feedback</li>
              <li>✓ Level up your game</li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange">Training formats</p>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {formats.map((f) => (
              <div key={f.title} className="rounded-2xl border-2 border-ink bg-cream p-5 shadow-retro-sm">
                <h3 className="font-display text-xl font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-ink/75">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}