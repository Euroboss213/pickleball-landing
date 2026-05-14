import coachImg from "@/assets/coach.jpg";

const achievements = [
  { value: "UPCC", label: "Certified Coach" },
  { value: "All", label: "Skill levels" },
  { value: "1:1", label: "& Group sessions" },
  { value: "100%", label: "Beginner friendly" },
];

export function Coach() {
  return (
    <section id="coach" className="border-b-2 border-ink bg-yellow">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="relative">
            <div className="absolute -inset-4 rotate-3 rounded-3xl bg-orange" />
            <img
              src={coachImg}
              alt="Coach Yey Certeza"
              width={1024}
              height={1280}
              loading="lazy"
              className="relative aspect-[4/5] w-full rounded-3xl border-2 border-ink object-cover shadow-retro"
            />
            <div className="absolute -bottom-4 -right-4 rotate-6 rounded-2xl border-2 border-ink bg-cream px-4 py-2 shadow-retro-sm">
              <p className="font-display text-sm font-bold">UPCC ✓</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">Meet your coach</p>
          <h2 className="mt-3 font-display text-5xl font-extrabold leading-tight md:text-6xl">
            Coach <span className="text-orange">Yey Certeza</span>
          </h2>
          <p className="mt-3 inline-block rounded-full border-2 border-ink bg-cream px-3 py-1 text-sm font-bold">UPCC Certified Coach</p>
          <p className="mt-6 max-w-xl text-lg text-ink/80">
            Coach Yey is willing to train you to improve your skills and guide you on your pickleball journey. Patient with beginners, sharp with intermediates — every session is built around you.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {achievements.map((a) => (
              <div key={a.label} className="rounded-2xl border-2 border-ink bg-cream p-4 shadow-retro-sm">
                <p className="font-display text-2xl font-extrabold text-orange">{a.value}</p>
                <p className="text-xs font-medium text-ink/70">{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}