export function Marquee() {
  const items = ["Learn the Basics", "Improve Your Skill", "Build Consistency", "Win More Games", "UPCC Certified", "Solo & Group"];
  return (
    <div className="border-y-2 border-ink bg-orange py-3 text-cream overflow-hidden">
      <div className="flex animate-[scroll_30s_linear_infinite] gap-10 whitespace-nowrap font-display text-2xl font-bold uppercase tracking-tight">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-10">
            {it}
            <span className="text-yellow">●</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}