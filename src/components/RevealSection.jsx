import useRevealOnScroll from "../hooks/useRevealOnScroll";

function RevealSection({
  id,
  className = "",
  contentClassName = "md:pt-16",
  delay = 0,
  children,
  as: Tag = "section",
}) {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <Tag
      ref={ref}
      className={`flex min-h-[calc(100svh_-_var(--nav-height))] items-center ${className} motion-safe:transition motion-safe:duration-700 motion-safe:ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div id={id} className={`w-full ${contentClassName}`}>
        {children}
      </div>
    </Tag>
  );
}

export default RevealSection;
