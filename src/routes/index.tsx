import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "../components/landing/Nav";
import { Hero } from "../components/landing/Hero";
import { Marquee } from "../components/landing/Marquee";
import { Stats } from "../components/landing/Stats";
import { Philosophy } from "../components/landing/Philosophy";
import { WhoWeTrain } from "../components/landing/WhoWeTrain";
import { Benefits } from "../components/landing/Benefits";
import { Sessions } from "../components/landing/Sessions";
import { Gallery } from "../components/landing/Gallery";
import { Testimonials } from "../components/landing/Testimonials";
import { Coach } from "../components/landing/Coach";
import { FAQ } from "../components/landing/FAQ";
import { Newsletter } from "../components/landing/Newsletter";
import { Contact, Footer } from "../components/landing/Contact";
import { MobileCTA } from "../components/landing/MobileCTA";
import { useReveal } from "../hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Philosophy />
        <WhoWeTrain />
        <Benefits />
        <Sessions />
        <Gallery />
        <Testimonials />
        <Coach />
        <FAQ />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
