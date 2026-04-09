import { motion } from "framer-motion";
import { 
  Paperclip, 
  Monitor, 
  Printer, 
  Trash2, 
  Coffee, 
  Armchair, 
  Briefcase, 
  PackageSearch,
  Wrench
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { icon: Paperclip, title: "Office Supplies", desc: "Comprehensive range of essential office consumables and stationery." },
  { icon: Monitor, title: "Computer Equipment & IT", desc: "Desktops, laptops, peripherals, and network hardware for corporate use." },
  { icon: Printer, title: "Printing & Consumables", desc: "Commercial printers, inks, toners, and specialized paper products." },
  { icon: Trash2, title: "Cleaning & Janitorial", desc: "Industrial-grade cleaning supplies and maintenance equipment." },
  { icon: Coffee, title: "Pantry & Institutional", desc: "Bulk provisions, breakroom supplies, and everyday institutional needs." },
  { icon: Armchair, title: "Furniture & Fixtures", desc: "Ergonomic seating, desks, storage solutions, and office build-outs." },
  { icon: Briefcase, title: "General Procurement", desc: "End-to-end support for complex or multi-category purchasing requirements." },
  { icon: PackageSearch, title: "Sourcing Solutions", desc: "Specialized sourcing for hard-to-find items and custom specifications." },
  { icon: Wrench, title: "Basic IT Setup & Services", desc: "Equipment deployment, configuration, and basic infrastructure setup." },
];

export default function ProductsServices() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Products & Services</h2>
            <p className="text-lg text-slate-600">
              We offer a broad spectrum of institutional supplies and procurement services designed to keep your operations running smoothly.
            </p>
          </div>
          <div className="bg-blue-50 px-4 py-3 rounded-lg border border-blue-100 max-w-sm">
            <p className="text-sm text-primary font-medium flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Product offerings can be customized based on specific client requirements.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="group border-slate-200 hover:border-primary/30 hover:shadow-md transition-all h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-6 h-6 text-slate-700 group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-slate-600">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
