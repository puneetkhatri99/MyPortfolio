import useRevealOnScroll from "../hooks/useRevealOnScroll";

function RevealSection({
  id,
  className = "",
  delay = 0,
  children,
  as: Tag = "section",
}) {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <Tag
      ref={ref}
      className={`scroll-mt-28 ${className} lg:my-12 motion-safe:transition motion-safe:duration-700 motion-safe:ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div id={id} className="scroll-mt-20">
        {children}
      </div>
    </Tag>
  );
}

export default RevealSection;
