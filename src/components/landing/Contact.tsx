export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-b-2 border-ink bg-orange text-cream">
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="mx-auto max-w-5xl px-5 py-24 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow">Ready to play?</p>
        <h2 className="mt-4 font-display text-5xl font-extrabold leading-[0.95] md:text-7xl">
          Don't hesitate — message us for inquiries. <span className="inline-block">🙂</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-cream/85">
          Solo or group, novice or intermediate — book the session that fits and we'll see you on court.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="mailto:jerrualen@gmail.com" className="rounded-full border-2 border-ink bg-cream px-7 py-3.5 font-bold text-ink shadow-retro transition hover:translate-x-[-2px] hover:translate-y-[-2px]">
            Send a message
          </a>
          <a href="#sessions" className="rounded-full border-2 border-ink bg-teal px-7 py-3.5 font-bold text-cream shadow-retro transition hover:translate-x-[-2px] hover:translate-y-[-2px]">
            View sessions
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-10 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-orange font-display font-bold border-2 border-cream">UC</span>
          <div>
            <p className="font-display text-lg font-bold">UC Pickleball Coaching</p>
            <p className="text-xs text-cream/60">Players are not born, they are trained.</p>
          </div>
        </div>
        <p className="text-xs text-cream/60">© {new Date().getFullYear()} UC Pickleball Coaching. All rights reserved.</p>
      </div>
    </footer>
  );
}