import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-header shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center"
          aria-label="Peter Field Technologies Home"
        >
          <img
            src="/logo.png"
            alt="Peter Field Technologies Logo"
            className="w-20 h-20 object-contain py-2"
          />
          <div className="font-heading font-bold text-4xl leading-tight">
            <span
              className={
                scrolled ? "text-foreground" : "text-primary-foreground"
              }
            >
              <span className="text-purple-600">PETER</span>
              <span className="text-orange-400">FIELD</span>
            </span>
            <span
              className={`block text-xs font-medium ${scrolled ? "text-muted-foreground" : "text-primary-foreground/70"}`}
            >
              Technologies
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? "text-foreground" : "text-primary-foreground/90"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a href="tel:+263773818428" className="flex items-center gap-1.5">
            <Button variant={scrolled ? "accent" : "hero"} size="sm">
              <Phone className="w-3.5 h-3.5" />
              Get In Touch
            </Button>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-up">
          <nav
            className="section-container py-6 flex flex-col gap-4"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-foreground font-medium text-lg py-2 hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a href="tel:+263773818428">
              <Button variant="accent" className="w-full mt-2">
                <Phone className="w-4 h-4" />
                +263 773 818 428
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
