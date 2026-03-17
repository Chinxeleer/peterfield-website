const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About Us", href: "#about" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="section-container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-4 mt-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Peter Field Technologies Logo"
                  className="w-20 h-20 object-contain py-2"
                />
              </div>
              <span className="font-heading font-bold text-xl">
                <span className="text-purple-600">PETER</span>
                <span className="text-orange-400">FIELD</span> Technologies
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">
              Enterprise IT solutions and network equipment for Zimbabwe's
              leading organizations. Business Without Boundaries.
            </p>
            <p className="text-primary-foreground/40 text-xs">
              Established 2014 · Harare, Zimbabwe
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>7 Beal Road, Belvedere, Harare</li>
              <li>
                <a
                  href="tel:+263242257145"
                  className="hover:text-accent transition-colors"
                >
                  +263 242 257 145
                </a>
              </li>
              <li>
                <a
                  href="tel:+263773818428"
                  className="hover:text-accent transition-colors"
                >
                  +263 773 818 428
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@peterfield.co.zw"
                  className="hover:text-accent transition-colors"
                >
                  sales@peterfield.co.zw
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © 2026 Peter Field Technologies. All rights reserved.
          </p>
          <p className="text-primary-foreground/30 text-xs">
            Business Without Boundaries
          </p>
        </div>
      </div>
    </footer>
  );
}
