export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800" data-testid="section-footer">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            {/* Brand mark */}
            <button
              className="flex items-center gap-2.5 mb-2 focus:outline-none group"
              onClick={scrollToTop}
              data-testid="link-footer-logo"
            >
              <img
                src="/logo.png"
                alt="WinNet Trading logo"
                className="h-7 md:h-8 w-auto object-contain flex-shrink-0 brightness-0 invert select-none"
                draggable={false}
              />
              <span className="text-lg font-bold text-white leading-none tracking-tight group-hover:text-slate-200 transition-colors">
                WinNet Trading
              </span>
            </button>
            <p className="text-xs text-slate-500 mb-5">
              Operated by WinNet Consumer Goods Trading
            </p>
            <p className="text-sm text-slate-400 max-w-sm">
              Reliable supply. Smart solutions. A trusted partner for government agencies, institutions, and corporate buyers in the Philippines.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors" data-testid="link-footer-quick-about">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors" data-testid="link-footer-quick-services">Products &amp; Services</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors" data-testid="link-footer-quick-whyus">Why Choose Us</a></li>
              <li><a href="#clients" className="hover:text-white transition-colors" data-testid="link-footer-quick-clients">Our Clients</a></li>
              <li><a href="#rfq" className="hover:text-white transition-colors" data-testid="link-footer-quick-rfq">Request a Quote</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>17-01 Camella Terrazas, Adlas, Silang Cavite, Philippines 4118</li>
              <li>info@winnettrading.com</li>
              <li>+63 921 193 8343</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} WinNet Consumer Goods Trading. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-slate-300 cursor-pointer" data-testid="link-footer-privacy">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer" data-testid="link-footer-terms">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
