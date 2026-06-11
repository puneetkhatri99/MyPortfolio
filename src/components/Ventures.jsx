import { FiArrowUpRight } from "react-icons/fi";
import { ventureProjects } from "../data/portfolio";
import RevealSection from "./RevealSection";
import SectionHeader from "./SectionHeader";

function Ventures() {
  return (
    <RevealSection id="ventures" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeader
          eyebrow="Ventures"
          title="Pet Projects"
          description="Draft product ideas and experiments that sit close to the way I like to build: small surfaces, clear purpose, and practical utility."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {ventureProjects.map((venture) => (
            <article
              key={venture.title}
              className="overflow-hidden rounded-[28px] border border-border bg-[#edf4fa] shadow-[0_10px_30px_rgba(48,54,58,0.05)] transition duration-200 ease-out hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b border-border">
                <img
                  src={venture.image}
                  alt={venture.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-offblack/10" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="max-w-md rounded-full border border-border bg-[#edf4fa] px-4 py-2 font-mono text-xs text-ink">
                    External link available
                  </p>
                </div>
              </div>

              <div className="space-y-4 p-6">
                <div>
                  <h3 className="font-display text-2xl text-ink">{venture.title}</h3>
                  <p className="mt-2 max-w-2xl font-mono text-sm leading-7 text-muted sm:text-base">
                    {venture.tagline}
                  </p>
                </div>

                <ul className="space-y-3">
                  {venture.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 font-mono text-sm text-muted sm:text-base"
                    >
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-electric" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {venture.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-[#dfe9f3] px-3 py-1 font-mono text-xs text-ink"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={venture.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-electric bg-electric px-5 py-3 font-mono text-sm text-offblack transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#1d78ff]"
                >
                  {venture.linkLabel}
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

export default Ventures;
