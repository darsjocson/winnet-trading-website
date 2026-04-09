import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ProductsServices from "@/components/sections/ProductsServices";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import GovernmentCorporate from "@/components/sections/GovernmentCorporate";
import Capabilities from "@/components/sections/Capabilities";
import Testimonials from "@/components/sections/Testimonials";
import RFQForm from "@/components/sections/RFQForm";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  const scrollToRFQ = () => {
    const el = document.querySelector("#rfq");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <ProductsServices />
        <WhyChooseUs />
        <GovernmentCorporate />
        <Capabilities />
        <Testimonials />
        <RFQForm />
        <Contact />
      </main>

      <Footer />

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-slate-200 z-50">
        <Button 
          className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-12 shadow-lg"
          onClick={scrollToRFQ}
          data-testid="button-sticky-mobile-quote"
        >
          Request a Quote
        </Button>
      </div>
      
      {/* Spacer to prevent mobile content from being hidden behind sticky CTA */}
      <div className="h-20 md:hidden bg-slate-900"></div>
    </div>
  );
}
