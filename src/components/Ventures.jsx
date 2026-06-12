import { FiArrowUpRight } from "react-icons/fi";
import { ventureProjects } from "../data/portfolio";
import RevealSection from "./RevealSection";
import SectionHeader from "./SectionHeader";

function Ventures() {
  return (
    <RevealSection id="ventures" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeader
          eyebrow="Shipped"
          title="Personal Ventures"
          description="Products I built, launched, and own. Hobby projects."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {ventureProjects.map((venture) => (
            <article
              key={venture.title}
              className="overflow-hidden rounded-[6px] border border-[#e8e8e8] bg-white shadow-[0_18px_40px_rgba(48,54,58,0.05)] transition duration-200 ease-out hover:-translate-y-1"
            >
              <div className="flex min-h-full flex-col p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#dfe3e8] bg-[#f3f5f7] font-display text-lg tracking-tight text-ink">
                      {venture.logoText}
                    </div>
                    <div className="space-y-1">
                      <p className="font-mono text-[0.72rem] uppercase tracking-[0.32em] text-electric">
                        {venture.category}
                      </p>
                      <p className="font-display text-xl leading-none text-ink sm:text-2xl">
                        {venture.title}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 max-w-3xl font-display text-2xl leading-tight text-muted sm:text-[2rem]">
                  {venture.summary}
                </p>

                <p className="mt-4 max-w-3xl font-mono text-sm leading-7 text-muted sm:text-base">
                  {venture.body}
                </p>

                <ul className="mt-8 space-y-3">
                  {venture.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 font-mono text-sm text-muted sm:text-base"
                    >
                      <span className="mt-0.5 shrink-0 text-electric">→</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto border-t border-[#ededed] pt-6">
                  <div className="flex flex-wrap gap-2">
                    {venture.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm border border-[#e3e3e3] bg-[#f5f5f5] px-3 py-1 font-mono text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-end">
                    <a
                      href={venture.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-display text-base tracking-tight text-electric transition hover:text-[#1d78ff]"
                    >
                      {venture.linkLabel}
                      <FiArrowUpRight aria-hidden="true" />
                    </a>
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

export default Ventures;
