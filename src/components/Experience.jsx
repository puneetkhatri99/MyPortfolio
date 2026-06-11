import { experienceEntries } from "../data/portfolio";
import RevealSection from "./RevealSection";
import SectionHeader from "./SectionHeader";

function Experience() {
  return (
    <RevealSection id="experience" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeader
          eyebrow="Experience"
          title="Timeline"
          description="A compact view of how the work has evolved across backend, full-stack, and AI/product delivery."
        />

        <div className="space-y-5">
          {experienceEntries.map((entry) => (
            <article
              key={`${entry.date}-${entry.title}`}
              className="relative overflow-hidden rounded-[28px] border border-border bg-[#edf4fa] p-6 shadow-[0_10px_30px_rgba(48,54,58,0.05)] transition duration-200 ease-out hover:-translate-y-0.5"
            >
              <span className="absolute left-6 top-7 h-3 w-3 rounded-full bg-electric" />
              <div className="grid gap-4 pl-8 lg:grid-cols-[0.7fr_1.5fr_0.6fr] lg:items-start lg:gap-8">
                <div className="space-y-2 font-mono text-sm text-muted">
                  <div>{entry.date}</div>
                  <div>{entry.location}</div>
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-display text-2xl text-ink">{entry.title}</h3>
                    <p className="mt-1 font-mono text-sm text-muted">
                      {entry.company}
                    </p>
                  </div>
                  <p className="max-w-3xl font-mono text-sm leading-7 text-muted sm:text-base">
                    {entry.description}
                  </p>
                </div>
                <div className="flex items-start lg:justify-end">
                  <div className="rounded-full border border-electric bg-[#dfeeff] px-4 py-2 font-mono text-xs text-ink">
                    {entry.badge}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

export default Experience;
