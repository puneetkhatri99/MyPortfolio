import { workProjects } from "../data/portfolio";
import RevealSection from "./RevealSection";
import SectionHeader from "./SectionHeader";

function WorkMedia({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className="h-56 w-full object-cover transition duration-300 ease-out group-hover:scale-[1.02]"
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <div className="flex h-56 items-end overflow-hidden bg-[#dfe9f3] p-5">
      <div className="max-w-sm space-y-3">
        <p className="font-mono text-sm text-muted">Draft system</p>
        <p className="font-display text-3xl text-ink">{project.title}</p>
        <p className="font-mono text-sm leading-7 text-muted">
          API routing, context handling, and response history in one panel.
        </p>
      </div>
    </div>
  );
}

function Work() {
  return (
    <RevealSection id="work" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeader
          eyebrow="Work"
          title="Selected Projects"
          description="A tighter presentation of shipped work and one drafted AI/backend system to match the intended direction of the portfolio."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {workProjects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[28px] border border-border bg-[#edf4fa] shadow-[0_10px_30px_rgba(48,54,58,0.05)] transition duration-200 ease-out hover:-translate-y-1"
            >
              <WorkMedia project={project} />
              <div className="space-y-4 p-6">
                <p className="font-mono text-sm text-muted">{project.category}</p>
                <h3 className="font-display text-2xl text-ink">{project.title}</h3>
                <p className="font-mono text-sm leading-7 text-muted sm:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-[#dfe9f3] px-3 py-1 font-mono text-xs text-ink"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="border-t border-border pt-4 font-mono text-sm leading-7 text-muted">
                  Outcome: <span className="text-ink">{project.outcome}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

export default Work;
