import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  { title: "Reliable Supplier Network", desc: "Strong partnerships with manufacturers to ensure consistent availability." },
  { title: "Fast Response to RFQs", desc: "Rapid quotation turnaround to keep your procurement timeline on track." },
  { title: "Procurement-Friendly Service", desc: "Structured to align seamlessly with corporate purchasing procedures." },
  { title: "Corporate & Government Focus", desc: "Deep understanding of institutional requirements and compliance." },
  { title: "Flexible Sourcing", desc: "Ability to source non-standard items tailored to unique project needs." },
  { title: "Quality & Cost Efficiency", desc: "Balancing premium quality with competitive pricing for better ROI." },
  { title: "Professional Documentation", desc: "Accurate invoicing, delivery receipts, and compliance paperwork." },
  { title: "Scalable Supply Capability", desc: "Equipped to handle both routine orders and large-scale bulk requirements." },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose WinNet Trading</h2>
          <p className="text-lg text-slate-400">
            We don't just supply products; we provide procurement solutions. Our operational structure is designed entirely around the needs of institutional buyers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl hover:bg-slate-800 transition-colors"
            >
              <CheckCircle2 className="w-8 h-8 text-secondary mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
