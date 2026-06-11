import { stackLayers } from "../data/portfolio";
import RevealSection from "./RevealSection";
import SectionHeader from "./SectionHeader";

function Stack() {
  return (
    <RevealSection id="stack" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeader
          eyebrow="Stack"
          title="Layered Skills"
          description="The stack is organized by how the work is actually built: backend first, then AI and data, then cloud and product-facing layers."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {stackLayers.map((layer) => (
            <article
              key={layer.title}
              className="rounded-[28px] border border-border bg-[#edf4fa] p-6 shadow-[0_10px_30px_rgba(48,54,58,0.05)] transition duration-200 ease-out hover:-translate-y-0.5"
            >
              <p className="font-mono text-sm text-muted">{layer.layer}</p>
              <h3 className="mt-2 font-display text-2xl text-ink">{layer.title}</h3>
              <ul className="mt-6 space-y-4">
                {layer.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-3 font-mono text-sm text-muted sm:text-base">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-electric" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

export default Stack;
