import paddles from "@/assets/paddles.jpg";

export function Philosophy() {
  return (
    <section id="about" className="border-b-2 border-ink bg-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="relative">
            <div className="absolute -inset-3 -rotate-3 rounded-3xl bg-yellow" />
            <img
              src={paddles}
              alt="Pickleball paddles and balls on teal court"
              width={1024}
              height={1024}
              loading="lazy"
              className="relative aspect-square w-full rounded-3xl border-2 border-ink object-cover shadow-retro"
            />
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange">Our philosophy</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl">
            Quality coaching that meets you where you are.
          </h2>
          <p className="mt-5 text-lg text-ink/75">
            UC Pickleball Coaching offers structured training designed around your level and pace. Whether you've never picked up a paddle or you're sharpening your strategy, every session is built to grow your game and your confidence.
          </p>
          <p className="mt-4 text-lg text-ink/75">
            Coach Yey Certeza is here to guide you on your pickleball journey — one drill, one rally, one win at a time. <span className="inline-block">🙂</span>
          </p>
        </div>
      </div>
    </section>
  );
}