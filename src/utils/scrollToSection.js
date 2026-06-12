export function scrollToSection(targetId) {
  const element = document.getElementById(targetId);

  if (!element) {
    return;
  }

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
