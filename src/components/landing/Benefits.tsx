const benefits = [
  { num: "01", title: "Learn the basics", desc: "Grip, footwork, and the rules — built right from session one." },
  { num: "02", title: "Improve your skill", desc: "Targeted drills tailored to your weak spots and goals." },
  { num: "03", title: "Build consistency", desc: "Repetition with feedback — turn good shots into automatic ones." },
  { num: "04", title: "Enjoy & win more", desc: "Have fun on court and walk off with more wins than ever." },
];

export function Benefits() {
  return (
    <section className="border-b-2 border-ink bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange">What you'll gain</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl">
            Four wins, every player takes home.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.num} className="group rounded-3xl border-2 border-ink bg-cream p-6 shadow-retro-sm transition hover:bg-yellow">
              <p className="font-display text-5xl font-extrabold text-orange">{b.num}</p>
              <h3 className="mt-3 font-display text-xl font-bold">{b.title}</h3>
              <p className="mt-2 text-sm text-ink/75">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}