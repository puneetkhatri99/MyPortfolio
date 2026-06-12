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
    <header className="sticky top-0 z-50 border-b border-border bg-bg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="font-display text-2xl text-ink transition hover:text-electric"
          onClick={() => scrollToSection("home")}
        >
          PS.
        </button>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className="rounded-full px-3 py-2 font-display text-base text-ink transition hover:text-electric"
              onClick={() => scrollToSection(item.targetId)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-[#edf4fa] text-ink transition hover:text-electric focus:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-bg md:hidden"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <HiOutlineX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`border-t border-border bg-bg md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6" aria-label="Mobile">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className="rounded-2xl border border-border bg-[#edf4fa] px-4 py-4 font-display text-lg text-ink transition hover:text-electric"
              onClick={() => {
                setIsOpen(false);
                scrollToSection(item.targetId);
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
