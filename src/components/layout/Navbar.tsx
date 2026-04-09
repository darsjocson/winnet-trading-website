import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
      data-testid="header-navigation"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Brand mark */}
          <button
            className="flex items-center gap-3 focus:outline-none"
            onClick={() => scrollToSection("#home")}
            data-testid="link-logo"
          >
            <img
              src="/logo.png"
              alt="WinNet Trading logo"
              className="h-9 md:h-10 w-auto object-contain flex-shrink-0 select-none"
              draggable={false}
            />
            <span className="text-xl md:text-[22px] font-bold text-primary leading-none tracking-tight">
              WinNet Trading
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" data-testid="nav-desktop">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                    data-testid={`link-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            <Button
              className="bg-secondary hover:bg-secondary/90 text-white shadow-sm"
              onClick={() => scrollToSection("#rfq")}
              data-testid="button-nav-quote-desktop"
            >
              Request a Quote
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground/80"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-border shadow-lg py-4 px-4 flex flex-col gap-4" data-testid="nav-mobile">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="text-base font-medium text-foreground w-full text-left py-2 border-b border-border/50"
                  data-testid={`link-mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
          <Button
            className="bg-secondary hover:bg-secondary/90 text-white w-full mt-2"
            onClick={() => scrollToSection("#rfq")}
            data-testid="button-nav-quote-mobile"
          >
            Request a Quote
          </Button>
        </div>
      )}
    </header>
  );
}
