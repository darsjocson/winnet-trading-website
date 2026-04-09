import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToRFQ = () => {
    const el = document.querySelector("#rfq");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative" data-testid="section-hero">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Institutional & Government Supplier
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-slate-900 mb-6" data-testid="text-hero-headline">
              Reliable Supply.<br />
              <span className="text-primary">Smart Solutions.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed" data-testid="text-hero-subtext">
              WinNet Trading is a Philippine-based supplier providing quality goods and procurement support to government agencies, companies, and institutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white font-medium shadow-md shadow-secondary/20 h-14 px-8 text-base"
                onClick={scrollToRFQ}
                data-testid="button-hero-quote"
              >
                Request a Quotation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/5 h-14 px-8 text-base font-medium"
                onClick={scrollToServices}
                data-testid="button-hero-services"
              >
                View Products & Services
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 pt-8 border-t border-slate-100">
              <div data-testid="stat-philgeps">
                <p className="text-3xl font-bold text-slate-900">PH Govt</p>
                <p className="text-sm text-slate-500 font-medium mt-1">Registered Supplier</p>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div data-testid="stat-compliance">
                <p className="text-3xl font-bold text-slate-900">100%</p>
                <p className="text-sm text-slate-500 font-medium mt-1">Compliance Ready</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 aspect-[4/3] bg-gradient-to-br from-[#0B3C6D] to-[#0d4d8a] border border-slate-100 flex items-center justify-center p-8" data-testid="img-hero-illustration">
              <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Background grid */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                  </pattern>
                  <linearGradient id="cardGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.15)"/>
                    <stop offset="100%" stopColor="rgba(255,255,255,0.05)"/>
                  </linearGradient>
                  <linearGradient id="cardGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(43,182,115,0.3)"/>
                    <stop offset="100%" stopColor="rgba(43,182,115,0.1)"/>
                  </linearGradient>
                </defs>
                <rect width="480" height="360" fill="url(#grid)"/>

                {/* Main supply chain flow */}
                <path d="M 60 180 C 120 180 130 120 190 120 C 250 120 260 180 320 180 C 380 180 390 120 440 120" stroke="rgba(43,182,115,0.6)" strokeWidth="2.5" strokeDasharray="6 3" fill="none"/>
                <path d="M 60 200 C 130 200 140 260 200 260 C 260 260 270 200 330 200" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 4" fill="none"/>

                {/* Hub nodes */}
                <circle cx="60" cy="180" r="18" fill="url(#cardGrad2)" stroke="rgba(43,182,115,0.8)" strokeWidth="2"/>
                <circle cx="60" cy="180" r="8" fill="#2BB673"/>
                <circle cx="190" cy="120" r="18" fill="url(#cardGrad1)" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                <circle cx="190" cy="120" r="8" fill="rgba(255,255,255,0.9)"/>
                <circle cx="320" cy="180" r="18" fill="url(#cardGrad2)" stroke="rgba(43,182,115,0.8)" strokeWidth="2"/>
                <circle cx="320" cy="180" r="8" fill="#2BB673"/>
                <circle cx="440" cy="120" r="22" fill="url(#cardGrad1)" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
                <circle cx="440" cy="120" r="10" fill="rgba(255,255,255,0.95)"/>

                {/* Card: Office Supplies */}
                <rect x="30" y="30" width="130" height="70" rx="10" fill="url(#cardGrad1)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                <rect x="42" y="46" width="20" height="20" rx="4" fill="#2BB673"/>
                <rect x="70" y="48" width="70" height="6" rx="3" fill="rgba(255,255,255,0.7)"/>
                <rect x="70" y="60" width="50" height="4" rx="2" fill="rgba(255,255,255,0.3)"/>
                <rect x="42" y="74" width="90" height="4" rx="2" fill="rgba(255,255,255,0.15)"/>
                <text x="57" y="59" fontSize="11" fill="white" fontWeight="bold" fontFamily="Inter, sans-serif">✓</text>

                {/* Card: IT Equipment */}
                <rect x="175" y="200" width="130" height="70" rx="10" fill="url(#cardGrad1)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                <rect x="187" y="216" width="20" height="20" rx="4" fill="#2BB673"/>
                <rect x="215" y="218" width="70" height="6" rx="3" fill="rgba(255,255,255,0.7)"/>
                <rect x="215" y="230" width="50" height="4" rx="2" fill="rgba(255,255,255,0.3)"/>
                <rect x="187" y="246" width="90" height="4" rx="2" fill="rgba(255,255,255,0.15)"/>
                <text x="202" y="229" fontSize="11" fill="white" fontWeight="bold" fontFamily="Inter, sans-serif">✓</text>

                {/* Card: Procurement */}
                <rect x="310" y="260" width="140" height="70" rx="10" fill="url(#cardGrad2)" stroke="rgba(43,182,115,0.4)" strokeWidth="1"/>
                <rect x="322" y="276" width="20" height="20" rx="4" fill="rgba(255,255,255,0.9)"/>
                <rect x="350" y="278" width="80" height="6" rx="3" fill="rgba(255,255,255,0.8)"/>
                <rect x="350" y="290" width="55" height="4" rx="2" fill="rgba(255,255,255,0.4)"/>
                <rect x="322" y="306" width="100" height="4" rx="2" fill="rgba(255,255,255,0.2)"/>
                <text x="328" y="290" fontSize="11" fill="#0B3C6D" fontWeight="bold" fontFamily="Inter, sans-serif">→</text>

                {/* Stats cards at bottom */}
                <rect x="30" y="285" width="100" height="55" rx="8" fill="url(#cardGrad1)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                <text x="80" y="307" fontSize="20" fill="white" fontWeight="800" fontFamily="Inter, sans-serif" textAnchor="middle">500+</text>
                <text x="80" y="325" fontSize="9" fill="rgba(255,255,255,0.6)" fontFamily="Inter, sans-serif" textAnchor="middle">Products Sourced</text>

                <rect x="145" y="285" width="100" height="55" rx="8" fill="url(#cardGrad1)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                <text x="195" y="307" fontSize="20" fill="#2BB673" fontWeight="800" fontFamily="Inter, sans-serif" textAnchor="middle">50+</text>
                <text x="195" y="325" fontSize="9" fill="rgba(255,255,255,0.6)" fontFamily="Inter, sans-serif" textAnchor="middle">Clients Served</text>

                {/* PhilGEPS badge */}
                <rect x="330" y="30" width="130" height="50" rx="25" fill="rgba(43,182,115,0.2)" stroke="rgba(43,182,115,0.5)" strokeWidth="1.5"/>
                <text x="395" y="50" fontSize="12" fill="#2BB673" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">PH Govt</text>
                <text x="395" y="66" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="Inter, sans-serif" textAnchor="middle">Registered Supplier</text>

                {/* Connecting dots */}
                <circle cx="200" cy="260" r="4" fill="rgba(255,255,255,0.3)"/>
                <circle cx="310" cy="260" r="4" fill="rgba(43,182,115,0.6)"/>
                <line x1="200" y1="260" x2="310" y2="260" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeDasharray="4 4"/>
              </svg>
            </div>
            
            {/* Floating badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-secondary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Procurement Ready</p>
                <p className="text-xs text-slate-500">Fast RFQ turnaround</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
