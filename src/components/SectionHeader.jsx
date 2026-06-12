function SectionHeader({ eyebrow, title, description, className = "" }) {
  return (
    <div className={className}>
      {eyebrow ? (
        <p className="font-mono text-sm text-muted">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 max-w-4xl font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.92] tracking-tight text-ink">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl font-mono text-sm leading-7 text-muted sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeader;
