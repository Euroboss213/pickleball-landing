import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#sessions", label: "Sessions" },
    { href: "#gallery", label: "Gallery" },
    { href: "#reviews", label: "Reviews" },
    { href: "#coach", label: "Coach" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-background/85 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-orange text-cream border border-ink font-display text-base font-extrabold uppercase tracking-wider">UC</span>
          <span className="font-display text-xl font-bold uppercase tracking-wide">UC Pickleball</span>
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-semibold uppercase tracking-wide text-ink/70 hover:text-ink transition">{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="#contact" className="rounded-md border border-ink bg-orange px-4 py-2 text-sm font-bold uppercase tracking-wider text-cream transition hover:bg-teal">
            Book Now
          </a>
        </div>
      </nav>
    </header>
  );
}