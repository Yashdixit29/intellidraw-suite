import { useCallback, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/use-reveal";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const IDS = LINKS.map((l) => l.id);

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useActiveSection(IDS, useCallback((id: string) => setActive(id), []));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center gap-4 px-5">
        <a
          href="#home"
          className="font-display text-sm font-bold tracking-[0.28em] text-foreground"
        >
          YASH<span className="text-primary"> DIXIT</span>
        </a>

        <ul className="ml-auto hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative rounded-full px-3 py-2 text-sm transition-colors ${
                  active === link.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {active === link.id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-accent" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="ml-auto hidden rounded-full bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] lg:ml-0 lg:inline-flex"
        >
          Let's Connect
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-5 mt-3 overflow-hidden rounded-2xl glass-card lg:hidden">
          <ul className="flex flex-col p-2">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="p-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-gradient-accent px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Let's Connect
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
