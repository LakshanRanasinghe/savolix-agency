"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Code, Cpu, GraduationCap, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamRoles = [
  {
    role: "Tech Lead",
    count: 1,
    icon: Cpu,
    description: "Guiding technical vision and architecture."
  },
  {
    role: "Senior Software Engineers",
    count: 2,
    icon: Code,
    description: "Expert problem solvers with deep system knowledge."
  },
  {
    role: "Software Engineers",
    count: 3,
    icon: Users,
    description: "Building robust features and ensuring code quality."
  },
  {
    role: "Intern",
    count: 1,
    icon: GraduationCap,
    description: "Growing talent bringing fresh perspectives."
  }
];

export function TeamOverview() {
  return (
    <section id="about" className="py-24 bg-background border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display mb-4"
          >
            Our Powerhouse Team
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            We are a tight-knit group of 7 passionate developers focused on delivering excellence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamRoles.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold font-display mb-2">{item.count}</div>
              <div className="text-lg font-medium text-foreground mb-2">{item.role}</div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link href="/about">About Us <ArrowUpRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );  
}
