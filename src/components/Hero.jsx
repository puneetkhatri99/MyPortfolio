import { heroImage, heroStats } from "../data/portfolio";
import RevealSection from "./RevealSection";
import { scrollToSection } from "../utils/scrollToSection";

function Hero() {
  return (
    <RevealSection id="home" className="p-0" contentClassName="">
      <div className="relative min-h-[calc(100svh_-_var(--nav-height))] w-full overflow-hidden bg-offblack">
        <img
          src={heroImage}
          alt="Puneet Sehgal sitting with a laptop by a train window"
          className="absolute inset-0 h-full w-full object-cover object-[16%_center] sm:object-[12%_center] lg:object-center"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,15,18,0.16)_0%,rgba(11,15,18,0.32)_48%,rgba(11,15,18,0.58)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(219,232,241,0.05),rgba(0,0,0,0.18)_52%,rgba(0,0,0,0.36)_100%)]" />

        <div className="relative z-10 flex min-h-[calc(100svh_-_var(--nav-height))] flex-col items-center justify-center px-5 py-8 text-center sm:px-8 lg:px-10">
          <div className="flex w-full max-w-6xl flex-col items-center">
            <p className="mb-5 font-mono text-[11px] font-semibold uppercase tracking-[0.45em] text-white/70 sm:text-xs">
              AI Engineer · Builder · Founder
            </p>
            <h1 className="max-w-5xl font-display text-[clamp(4.5rem,11vw,9.5rem)] leading-[0.86] text-white drop-shadow-[0_10px_32px_rgba(0,0,0,0.45)]">
              Puneet
              <br />
              Sehgal
            </h1>
            <p className="mt-6 max-w-3xl font-display text-2xl leading-tight text-white/90 sm:text-3xl lg:text-4xl">
              I build AI systems that work in production, and the teams and products around them.
            </p>

            <div className="mt-10 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={() => scrollToSection("work")}
                className="inline-flex min-h-16 flex-1 items-center justify-center border border-white bg-white px-8 py-4 font-mono text-sm font-bold tracking-[0.16em] text-offblack transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-electric focus:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-offblack"
              >
                See My Work
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="inline-flex min-h-16 flex-1 items-center justify-center border border-white/30 bg-transparent px-8 py-4 font-mono text-sm font-bold tracking-[0.16em] text-white transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-offblack"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-5 right-5 z-10 hidden items-end justify-between text-white/65 sm:flex lg:left-12 lg:right-12">
          <div className="grid grid-cols-4 gap-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="min-w-28 border-t border-white/35 pt-3">
                <p className="font-display text-2xl text-white">{stat.value}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/65">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.35em]">Scroll</span>
        </div>
      </div>
    </RevealSection>
  );
}

export default Hero;
