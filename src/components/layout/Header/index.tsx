import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown, ArrowRight } from "lucide-react";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../common/Logo";
import { services } from "../../../lib/services-data";
import { LinkButton } from "../../ui/Buttons";


const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services", hasMenu: true },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const transparent = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  const solid = scrolled || !transparent;

  return (
    <>
      <div
        className={clsx(
          "hidden md:block text-xs transition-all",
          solid ? "bg-brand-light text-brand-muted" : "bg-white/5 text-white/70 backdrop-blur",
        )}
      >
        <div className="container-x flex items-center justify-between h-10 text-black">
          <span>Industrial Supply &amp; Engineering Solutions — Trusted across 7 industries</span>
          <div className="flex items-center gap-5">
            <a href="tel:+919999999999" className="inline-flex items-center gap-2 hover:text-brand-red">
              <Phone size={12} /> +91 82863 53007
            </a>
            <a href="mailto:info@mechfro.com" className="hover:text-brand-red">info@mechfro.com</a>
          </div>
        </div>
      </div>

      <header
        className={clsx(
          "sticky top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur border-b border-brand-border shadow-sm",
          // solid
          //   ? "bg-white/95 backdrop-blur border-b border-brand-border shadow-sm"
          //   : "bg-transparent",
        )}
      >
        <div className="container-x flex items-center justify-between h-20">
          <Logo variant={solid ? "dark" : "light"} />

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <div
                key={l.to}
                className="relative"
                onMouseEnter={() => l.hasMenu && setMenuOpen(true)}
                onMouseLeave={() => l.hasMenu && setMenuOpen(false)}
              >
                <Link
                  to={l.to}
                  className={clsx(
                    "inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:text-brand-red",
                    pathname === l.to ? "text-brand-red" : "text-brand-dark"
                  )}
                >
                  {l.label}
                  {l.hasMenu && <ChevronDown size={14} />}
                </Link>
                {l.hasMenu && menuOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4">
                    <div className="w-[640px] bg-white border border-brand-border shadow-2xl p-6 grid grid-cols-2 gap-1 rounded-sm">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="group flex items-start gap-3 p-3 hover:bg-brand-light transition-colors"
                        >
                          <div className="w-1 h-10 bg-brand-red/0 group-hover:bg-brand-red transition-all" />
                          <div>
                            <div className="text-sm font-semibold text-brand-dark group-hover:text-brand-blue">
                              {s.title}
                            </div>
                            <div className="text-xs text-brand-muted line-clamp-1 mt-0.5">{s.short}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:block">
            <LinkButton to="/contact" variant="accent" size="sm" className="bg-[var(--brand-blue-dark)]" icon={<ArrowRight size={14} />}>
              Request Quote
            </LinkButton>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className={clsx("lg:hidden p-2", solid ? "text-brand-dark" : "text-white")}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={clsx(
            "lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-brand-border",
            open ? "max-h-[90vh]" : "max-h-0",
          )}
        >
          <div className="container-x py-6 space-y-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={clsx(
                  "block py-3 text-base font-semibold border-b border-brand-border",
                  pathname === l.to
                    ? "text-brand-red"
                    : "text-brand-dark"
                )}
              >
                {l.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-3">
              {services.slice(0, 6).map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="text-xs text-brand-muted py-1"
                >
                  → {s.title}
                </Link>
              ))}
            </div>
            <div className="pt-5">
              <LinkButton to="/contact" variant="accent" size="md" className="bg-[var(--brand-blue-dark)]" icon={<ArrowRight size={14} />}>
                Request Quote
              </LinkButton>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
