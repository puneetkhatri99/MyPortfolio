import { heroImage, heroStats } from "../data/portfolio";
import RevealSection from "./RevealSection";
import { scrollToSection } from "../utils/scrollToSection";

function Hero() {
  return (
    <RevealSection id="home" className="px-4 pb-10 pt-10 sm:px-6 lg:px-8 ">
      <div className="relative mx-auto min-h-[92svh] max-w-7xl overflow-hidden rounded-[36px] border border-[#708391] bg-offblack shadow-[0_20px_50px_rgba(48,54,58,0.12)]">
        <img
          src={heroImage}
          alt="Puneet Sehgal sitting with a laptop by a train window"
          className="absolute inset-0 h-full w-full object-cover object-[16%_center] sm:object-[12%_center] lg:object-center"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,16,18,0.12)_0%,rgba(12,16,18,0.10)_58%,rgba(12,16,18,0.24)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[26%] bg-[rgba(8,10,12,0.42)]" />
        <div className="absolute inset-x-0 bottom-[24%] h-20 bg-[rgba(8,10,12,0.18)] blur-2xl" />

        <div className="relative z-10 flex min-h-[92svh] flex-col items-center justify-center px-5 py-8 text-center sm:px-8 lg:px-10">
          <div className="flex w-full max-w-5xl flex-col items-center">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.5em] text-white/70 sm:text-xs">
              Software Developer · Backend Engineer · AI Builder
            </p>
            <h1 className="max-w-5xl font-display text-[clamp(4.25rem,12vw,8.8rem)] leading-[0.88] tracking-tight text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)]">
              Puneet
              <br />
              Sehgal
            </h1>
            <p className="mt-5 max-w-2xl font-mono text-sm leading-7 text-white/80 sm:text-base">
              I build reliable backend systems, AI workflows, and product
              experiences that move from idea to production.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => scrollToSection("work")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white bg-white px-5 py-3 font-mono text-sm text-offblack transition duration-200 ease-out hover:-translate-y-0.5 hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-offblack"
              >
                See My Work
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-transparent px-5 py-3 font-mono text-sm text-white transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-offblack"
              >
                Get in Touch
              </button>
            </div>
          </div>

          <div className="mt-12 grid w-full max-w-5xl gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/15 bg-white/10 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-[2px]"
              >
                <p className="font-display text-3xl text-white">{stat.value}</p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-white/70 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 right-6 hidden items-end gap-3 text-white/65 sm:flex">
          <span className="h-14 w-px bg-white/45" />
          <span className="font-mono text-xs uppercase tracking-[0.35em]">
            Scroll
          </span>
        </div>
      </div>
    </RevealSection>
  );
}

export default Hero;
