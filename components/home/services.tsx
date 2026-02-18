"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  ShoppingCart, 
  Megaphone, 
  MonitorSmartphone, 
  Wrench, 
  BarChart3 
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Development",
    description: "Tailored websites using Next.js, React, and Laravel for high-performance and scalability.",
    tech: ["Next.js", "React", "Laravel", "Node.js"]
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Robust online stores built on Shopify, WooCommerce, or custom platforms to drive sales.",
    tech: ["Shopify", "WooCommerce", "Stripe"]
  },
  {
    icon: MonitorSmartphone,
    title: "CMS Implementation",
    description: "Easy-to-manage websites using WordPress and other content management systems.",
    tech: ["WordPress", "Headless CMS"]
  },
  {
    icon: Wrench,
    title: "Maintenance & Support/Bug Fixing",
    description: "Ongoing updates, bug fixes, and performance optimization to keep your site running smoothly.",
    tech: ["24/7 Support", "Security Updates"]
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Strategic campaigns to grow your audience and increase brand visibility across social platforms.",
    tech: ["Instagram", "LinkedIn", "Facebook", "SEO"]
  },
  {
    icon: BarChart3,
    title: "Growth Strategy",
    description: "Data-driven strategies to scale your digital presence and improve conversion rates.",
    tech: ["Analytics", "CRO"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-primary/5 -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Comprehensive digital solutions tailored to your business goals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-display">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tech.map((item) => (
                    <span 
                      key={item} 
                      className="text-xs font-medium px-2 py-1 rounded-full bg-white/5 text-muted-foreground border border-white/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
