import { aboutWords } from "../data/portfolio";
import RevealSection from "./RevealSection";
import SectionHeader from "./SectionHeader";

function About() {
  return (
    <RevealSection id="about" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start mt-15">
        <div className="space-y-6">
          <SectionHeader
            eyebrow="About"
            title="Builder first."
            description="The work stays practical: clean interfaces, dependable APIs, and enough structure to keep product changes manageable."
          />
          <div className="space-y-3">
            {aboutWords.map((word) => (
              <p
                key={word}
                className="font-display text-[clamp(3rem,7vw,5.5rem)] leading-[0.92] tracking-tight text-ink"
              >
                {word}
              </p>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-border bg-[#edf4fa] p-6 shadow-[0_10px_30px_rgba(48,54,58,0.05)] sm:p-8">
          <p className="font-mono text-sm leading-8 text-muted sm:text-base">
            I build systems that feel simple from the outside and stay maintainable
            underneath. That usually means a clear backend shape, careful data flow,
            AI integrations only where they improve the product, and frontend surfaces
            that stay calm even when the logic behind them gets complicated.
          </p>
          <p className="mt-6 font-mono text-sm leading-8 text-muted sm:text-base">
            The goal is not visual noise or unnecessary abstraction. The goal is to
            ship useful software, keep it understandable, and leave it easier to
            extend than it was before.
          </p>
        </div>
      </div>
    </RevealSection>
  );
}

export default About;
