function SectionHeader({ eyebrow, title, description, className = "" }) {
  return (
    <div className={className}>
      {eyebrow ? (
        <p className="font-mono text-sm text-muted">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl lg:text-5xl">
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
