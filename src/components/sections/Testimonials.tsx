import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "WinNet Trading has been our go-to supplier for our department's quarterly requirements. Their RFQ response time is unmatched, and they always provide complete compliance documents.",
    name: "Procurement Officer",
    title: "Procurement Division",
    org: "Local Government Agency"
  },
  {
    quote: "Finding a supplier that understands corporate terms and handles bulk IT and office setups efficiently was a challenge until we partnered with WinNet Trading. Highly reliable.",
    name: "Operations Manager",
    title: "Operations Department",
    org: "Private Logistics Company"
  },
  {
    quote: "They managed our entire campus sanitation and janitorial supply needs flawlessly. Competitive pricing without sacrificing quality.",
    name: "Administration Head",
    title: "Administrative Services",
    org: "Higher Education Institution"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Trusted by Institutions</h2>
          <p className="text-lg text-slate-600">
            Hear from procurement professionals who rely on WinNet Trading.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-slate-50 border-none shadow-sm relative pt-6">
                <div className="absolute -top-4 left-6 text-primary/20">
                  <Quote size={40} className="fill-current" />
                </div>
                <CardContent className="pt-6">
                  <p className="text-slate-700 italic mb-6 leading-relaxed relative z-10">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.title}</p>
                    <p className="text-sm font-medium text-primary mt-1">{testimonial.org}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
