import { processSteps } from "../data/portfolio";
import RevealSection from "./RevealSection";
import SectionHeader from "./SectionHeader";

function Process() {
  return (
    <RevealSection id="process" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeader
          eyebrow="Process"
          title="How the Work Moves"
          description="A five-step loop that keeps the build practical: understand the problem, shape the system, ship the work, then improve what the product needs next."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {processSteps.map((item) => (
            <article
              key={item.step}
              className="rounded-[28px] border border-border bg-[#edf4fa] p-6 shadow-[0_10px_30px_rgba(48,54,58,0.05)] transition duration-200 ease-out hover:-translate-y-0.5"
            >
              <p className="font-display text-4xl text-electric">{item.step}</p>
              <h3 className="mt-5 font-display text-2xl text-ink">{item.title}</h3>
              <p className="mt-3 font-mono text-sm leading-7 text-muted sm:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

export default Process;
