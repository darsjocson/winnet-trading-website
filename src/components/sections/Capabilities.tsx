import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Products Sourced" },
  { value: "50+", label: "Clients Served" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Compliance" },
];

export default function Capabilities() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center px-4"
            >
              <h4 className="text-4xl md:text-5xl font-bold font-display mb-2 text-secondary">{stat.value}</h4>
              <p className="text-primary-foreground/80 font-medium text-sm md:text-base uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
