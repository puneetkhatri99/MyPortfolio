import { stackLayers } from "../data/portfolio";
import RevealSection from "./RevealSection";

function Stack() {
  return (
    <RevealSection id="stack" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-4">
            <p className="font-mono text-sm uppercase tracking-[0.35em] text-electric">
              What I build with
            </p>
            <h2 className="font-display text-[clamp(3.5rem,8vw,6.2rem)] leading-[0.92] tracking-tight text-ink">
              The Stack
            </h2>
          </div>

          <p className="max-w-xl font-display text-2xl leading-tight text-muted sm:text-3xl lg:pt-5 lg:text-[2.2rem]">
            Not a list of buzzwords. A working system across every layer of production work.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[0px] border border-[#9ecdcc]  shadow-[0_18px_50px_rgba(48,54,58,0.06)]">
          <div className="grid lg:grid-cols-4">
            {stackLayers.map((layer, index) => (
              <article
                key={layer.title}
                className={`min-h-full border-b border-[#9ecdcc] p-8 sm:p-10 lg:border-b-0 lg:p-12 ${
                  index < stackLayers.length - 1 ? "lg:border-r" : ""
                }`}
              >
                <p className="font-mono text-[0.78rem] uppercase tracking-[0.32em] text-electric">
                  {layer.layer}
                </p>
                <h3 className="mt-6 max-w-[10ch] font-display text-3xl leading-[0.95] text-ink sm:text-4xl">
                  {layer.title}
                </h3>

                <ul className="mt-8 space-y-4">
                  {layer.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start gap-3 font-mono text-sm leading-6 text-muted sm:text-base"
                    >
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-electric" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

export default Stack;
