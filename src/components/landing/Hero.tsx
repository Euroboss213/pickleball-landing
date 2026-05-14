import heroImg from "@/assets/hero-pickleball.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b-2 border-ink bg-cream">
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-yellow px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-retro-sm">
            <span className="h-2 w-2 rounded-full bg-orange" /> UPCC Certified Coaching
          </span>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
            Pickleball players are <span className="relative inline-block">
              <span className="relative z-10">not born,</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-orange" />
            </span> they are <span className="text-teal">trained.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-ink/75">
            Learn and enjoy pickleball with UC Pickleball Coaching — quality sessions designed to take you from your first dink to your first win.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#sessions" className="rounded-full border-2 border-ink bg-orange px-6 py-3 font-bold text-cream shadow-retro transition hover:translate-x-[-2px] hover:translate-y-[-2px]">
              Choose Your Session
            </a>
            <a href="#contact" className="rounded-full border-2 border-ink bg-cream px-6 py-3 font-bold text-ink shadow-retro-sm transition hover:bg-yellow">
              Message Coach Yey
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-ink/70">
            <Stat value="UPCC" label="Certified" />
            <div className="h-8 w-px bg-ink/20" />
            <Stat value="3" label="Skill levels" />
            <div className="h-8 w-px bg-ink/20" />
            <Stat value="1:1 / Group" label="Formats" />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rotate-2 rounded-3xl bg-teal" />
          <div className="absolute -inset-2 -z-10 -rotate-1 rounded-3xl bg-yellow" />
          <img
            src={heroImg}
            alt="Pickleball player mid-swing on a teal and orange court"
            width={1536}
            height={1024}
            className="relative aspect-[4/5] w-full rounded-3xl border-2 border-ink object-cover shadow-retro md:aspect-[3/4]"
          />
          <div className="absolute -bottom-5 -left-5 rotate-[-6deg] rounded-2xl border-2 border-ink bg-cream px-4 py-3 shadow-retro-sm">
            <p className="font-display text-sm font-bold">May 16 · Sat</p>
            <p className="text-xs text-ink/70">12 slots per session</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-xl font-bold text-ink">{value}</p>
      <p className="text-xs uppercase tracking-wider text-ink/60">{label}</p>
    </div>
  );
}