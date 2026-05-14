import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import group from "@/assets/group.jpg";
import paddles from "@/assets/paddles.jpg";

const shots = [
  { src: g1, span: "md:col-span-2 md:row-span-2", alt: "Player diving for return" },
  { src: g2, span: "", alt: "Group celebrating after match" },
  { src: g3, span: "", alt: "Pickleball over the net" },
  { src: paddles, span: "", alt: "Paddles and balls" },
  { src: g4, span: "md:col-span-2", alt: "Coach demonstrating grip" },
  { src: g5, span: "", alt: "Pickleball court" },
];

export function Gallery() {
  return (
    <section id="gallery" className="border-b-2 border-ink bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-20">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end reveal">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange">On the court</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl">
              Real reps. <span className="text-teal">Real results.</span>
            </h2>
          </div>
          <a href="#contact" className="rounded-full border-2 border-ink bg-yellow px-5 py-2.5 text-sm font-bold uppercase tracking-wider shadow-retro-sm transition hover:bg-orange hover:text-cream">
            Tag us @ucpickleball
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[180px]">
          {shots.map((s, i) => (
            <div key={i} className={`reveal group relative overflow-hidden rounded-2xl border-2 border-ink shadow-retro-sm ${s.span}`}>
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}