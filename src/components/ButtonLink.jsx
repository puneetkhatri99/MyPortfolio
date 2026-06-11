import { FiArrowUpRight } from "react-icons/fi";

function getLinkTarget(href, external) {
  if (external) {
    return "_blank";
  }

  if (href.startsWith("http") || href.startsWith("tel:")) {
    return "_blank";
  }

  return undefined;
}

function getLinkRel(href, external) {
  if (external || href.startsWith("http")) {
    return "noreferrer";
  }

  return undefined;
}

function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 font-mono text-sm transition duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

  const variants = {
    primary:
      "border-electric bg-electric text-offblack hover:-translate-y-0.5 hover:opacity-90",
    secondary:
      "border-border bg-transparent text-ink hover:-translate-y-0.5 hover:bg-[#e6eef6]",
  };

  const showExternalIcon =
    external || href.startsWith("http") || href.startsWith("mailto:");

  return (
    <a
      href={href}
      className={`${base} ${variants[variant] ?? variants.primary} ${className}`}
      target={getLinkTarget(href, external)}
      rel={getLinkRel(href, external)}
      download={download}
      {...props}
    >
      <span>{children}</span>
      {showExternalIcon ? <FiArrowUpRight aria-hidden="true" /> : null}
    </a>
  );
}

export default ButtonLink;
