import { Building2, Landmark, GraduationCap, Building, PlusSquare } from "lucide-react";
import { motion } from "framer-motion";

const clients = [
  { icon: Landmark, name: "Government Offices" },
  { icon: Building2, name: "Private Corporations" },
  { icon: GraduationCap, name: "Schools & Universities" },
  { icon: Building, name: "Property Management" },
  { icon: PlusSquare, name: "Clinics & Institutions" },
];

export default function GovernmentCorporate() {
  return (
    <section id="clients" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-sm font-medium mb-6">
              Who We Serve
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Dedicated to Institutional Supply
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Unlike retail stores, our entire operation is optimized for B2B transactions. We understand the specific documentation, approval processes, and compliance standards required by our clients.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              We provide full support for structured quotations, formal invoicing, delivery documentation, and other institutional procurement requirements.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {["Registered Business", "BIR Compliant", "Official Receipts", "Terms Available"].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-white border border-slate-200 rounded-md text-sm font-semibold text-slate-700 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {clients.map((client, index) => {
              const Icon = client.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4 ${
                    index === clients.length - 1 ? "sm:col-span-2 sm:justify-center" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-slate-900">{client.name}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
