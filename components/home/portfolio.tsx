"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Rebrand",
    category: "Shopify Development",
    description: "A complete overhaul of a high-traffic fashion store, resulting in a 40% increase in conversion rate.",
    image: "/images/photo-001.avif",
    tags: ["Shopify", "Liquid", "Tailwind CSS"],
    link: "#"
  },
  {
    title: "SaaS Dashboard",
    category: "Web Application",
    description: "Real-time analytics dashboard for a fintech startup, built with Next.js and secure data handling.",
    image: "/images/photo-002.avif",
    tags: ["Next.js", "TypeScript", "Recharts"],
    link: "#"
  },
  {
    title: "Corporate Identity",
    category: "WordPress Solution",
    description: "Modern, responsive corporate website with custom Gutenberg blocks and dynamic content.",
    image: "/images/photo-003.avif",
    tags: ["WordPress", "PHP", "React"],
    link: "#"
  }
];

export function Portfolio() {
  return (
    <section id="work" className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Selected Work</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Check out some of our recent projects and the impact we've delivered for our clients.
          </p>
          <Button variant="outline" asChild>
            <Link href="#work">View All Projects <ArrowUpRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden border border-white/5 bg-card hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm" className="rounded-full">
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-xs font-medium text-primary mb-2 uppercase tracking-wider">{project.category}</div>
                <h3 className="text-xl font-bold mb-2 font-display">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-muted-foreground">
                      {tag}
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
