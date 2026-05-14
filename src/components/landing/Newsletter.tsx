import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section className="border-b-2 border-ink bg-teal text-cream">
      <div className="mx-auto max-w-5xl px-5 py-20 text-center reveal">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow">Stay in the loop</p>
        <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl">
          Get drills, drop dates & <span className="text-yellow">slot alerts.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-cream/80">
          One short email a month. No spam — just sessions, tips, and the occasional meme.
        </p>
        <form
          onSubmit={(e) => { e.preventDefault(); if (email) setSent(true); }}
          className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="flex-1 rounded-full border-2 border-ink bg-cream px-5 py-3 text-ink placeholder:text-ink/50 shadow-retro-sm focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full border-2 border-ink bg-orange px-6 py-3 font-bold text-cream shadow-retro transition hover:translate-x-[-2px] hover:translate-y-[-2px]"
          >
            {sent ? "You're in ✓" : "Notify me"}
          </button>
        </form>
      </div>
    </section>
  );
}