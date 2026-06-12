import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { navItems } from "../data/portfolio";
import { scrollToSection } from "../utils/scrollToSection";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header data-site-header className="sticky top-0 z-50 border-b border-[#c7d2d9] bg-[#e6edf2]/95 backdrop-blur">
      <div className="mx-auto grid max-w-none grid-cols-[1fr_auto_1fr] items-center px-5 py-5 sm:px-8 lg:px-12">
        <button
          type="button"
          className="justify-self-start font-display text-xl text-offblack transition hover:text-electric sm:text-2xl"
          onClick={() => scrollToSection("home")}
        >
          PS.
        </button>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className="font-display text-base text-muted transition hover:text-offblack lg:text-lg"
              onClick={() => scrollToSection(item.targetId)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="hidden justify-self-end bg-offblack px-6 py-4 font-mono text-sm font-bold tracking-[0.18em] text-white transition hover:bg-electric hover:text-offblack md:inline-flex"
          onClick={() => scrollToSection("contact")}
        >
          Let&apos;s Build →
        </button>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="inline-flex h-11 w-11 items-center justify-center justify-self-end border border-border bg-[#edf4fa] text-ink transition hover:text-electric focus:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-bg md:hidden"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <HiOutlineX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`border-t border-border bg-[#e6edf2] md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6" aria-label="Mobile">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className="border border-border bg-[#edf4fa] px-4 py-4 font-display text-lg text-ink transition hover:text-electric"
              onClick={() => {
                setIsOpen(false);
                window.setTimeout(() => scrollToSection(item.targetId), 0);
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            className="bg-offblack px-4 py-4 font-mono text-sm font-bold tracking-[0.18em] text-white"
            onClick={() => {
              setIsOpen(false);
              window.setTimeout(() => scrollToSection("contact"), 0);
            }}
          >
            Let&apos;s Build →
          </button>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
