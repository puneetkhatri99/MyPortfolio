export function scrollToSection(targetId) {
  const element = document.getElementById(targetId);

  if (!element) {
    return;
  }

  if (window.location.hash) {
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}`
    );
  }

  const header = document.querySelector("[data-site-header]");
  const headerHeight = header?.getBoundingClientRect().height ?? 0;
  const targetTop = element.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: Math.max(targetTop - headerHeight, 0),
    behavior: "smooth",
  });
}
