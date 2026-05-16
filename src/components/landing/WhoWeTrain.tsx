import group from "@/assets/group.jpg";
import whoWeTrain from "@/assets/who-we-train.jpg";

const players = [
  { tag: "Level 01", title: "Beginners", desc: "Zero knowledge about pickleball — we'll start from the very first dink.", color: "bg-yellow" },
  { tag: "Level 02", title: "Intermediate", desc: "Already playing? Sharpen strategy, positioning, and decision-making.", color: "bg-orange text-cream" },
  { tag: "Level 03", title: "Hitting Partner", desc: "Need a consistent partner to drill with and push your game forward.", color: "bg-teal text-cream" },
];

export function WhoWeTrain() {
  return (
    <section id="who" className="border-b-2 border-ink bg-teal text-cream">
      <div className="mx-auto max-w-7xl px-5 py-20">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow">Who we train</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl">
              From first paddle to <span className="text-yellow">first podium.</span>
            </h2>
          </div>
          <p className="max-w-sm text-cream/80">
            We train players at every stage of the journey. Pick the level that fits — or message us and we'll help you choose.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {players.map((p) => (
            <article key={p.title} className={`group relative rounded-3xl border-2 border-ink p-6 shadow-retro transition hover:translate-x-[-3px] hover:translate-y-[-3px] ${p.color}`}>
              <p className="font-display text-xs font-bold uppercase tracking-widest opacity-70">{p.tag}</p>
              <h3 className="mt-2 font-display text-3xl font-extrabold">{p.title}</h3>
              <p className="mt-3 text-sm opacity-90">{p.desc}</p>
              <div className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-cream text-ink">→</div>
            </article>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border-2 border-ink shadow-retro">
          <img src={whoWeTrain} alt="Group pickleball lesson" width={1280} height={896} loading="lazy" className="h-72 w-full object-cover object-[center_40%] md:h-110" />
        </div>
      </div>
    </section>
  );
}