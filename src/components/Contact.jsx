import { contactLinks } from "../data/portfolio";
import ButtonLink from "./ButtonLink";
import RevealSection from "./RevealSection";
import SectionHeader from "./SectionHeader";

function Contact() {
  const year = new Date().getFullYear();

  return (
    <RevealSection id="contact" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build the next useful thing."
          description="Reach out for backend work, AI-assisted product builds, or a portfolio of systems that need to ship cleanly and stay maintainable."
        />

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[28px] border border-border bg-[#edf4fa] p-6 shadow-[0_10px_30px_rgba(48,54,58,0.05)] sm:p-8">
            <p className="max-w-2xl font-display text-[clamp(2.5rem,5vw,4.75rem)] leading-[0.95] tracking-tight text-ink">
              Available for product builds, backend systems, and AI workflows.
            </p>
            <p className="mt-5 max-w-2xl font-mono text-sm leading-7 text-muted sm:text-base">
              If you want a portfolio project, an internal tool, or an API layer
              that needs to be more reliable, this is a good place to start.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`mailto:${contactLinks.email}`} external>
                Email
              </ButtonLink>
              <ButtonLink href={contactLinks.linkedin} external variant="secondary">
                LinkedIn
              </ButtonLink>
              <ButtonLink href={contactLinks.github} external variant="secondary">
                GitHub
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-[28px] border border-border bg-[#edf4fa] p-6 shadow-[0_10px_30px_rgba(48,54,58,0.05)] sm:p-8">
            <p className="font-display text-3xl leading-[0.95] tracking-tight text-ink">
              Direct links
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-border bg-[#dfe9f3] p-4">
                <p className="font-mono text-xs text-muted">Email</p>
                <a
                  href={`mailto:${contactLinks.email}`}
                  className="mt-2 block font-mono text-sm text-ink transition hover:text-electric"
                >
                  {contactLinks.email}
                </a>
              </div>
              <div className="rounded-2xl border border-border bg-[#dfe9f3] p-4">
                <p className="font-mono text-xs text-muted">Resume</p>
                <ButtonLink
                  href={contactLinks.resume}
                  variant="secondary"
                  className="mt-3 w-full"
                  download
                >
                  Download Resume
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>

        <footer className="flex flex-col gap-3 border-t border-border pt-6 font-mono text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Puneet Sehgal</p>
          <p>Software Developer · Backend Engineer · AI Builder</p>
          <p>{year}</p>
        </footer>
      </div>
    </RevealSection>
  );
}

export default Contact;
