"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen mx-auto">
      {/* Hero Section */}
      <section className="container px-4 md:px-6 mb-24 min-h-[50vh] flex flex-col justify-center mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
            We Build Digital <span className="text-gradient">Legacies</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Savolix is more than just a web agency. We are your strategic partners in the digital landscape, committed to delivering excellence and driving growth.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="container px-4 md:px-6 mb-24 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-2xl overflow-hidden border border-white/5 bg-card"
          >
            {/* Placeholder for team/office image */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground" >
              <Image src="/images/savolix-team.png" alt="Office" width={500} height={500} className="rounded-2xl"/>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold font-display mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded with a passion for clean code and exceptional design, Savolix began as a small team of developers and designers. Today, we've grown into a full-service agency helping businesses across the globe.
            </p>
            <p className="text-muted-foreground mb-6">
              We believe in the power of technology to transform businesses. Our approach combines technical expertise with creative innovation to solve complex problems.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Client-Centric Approach",
                "Technical Excellence",
                "Transparent Communication",
                "Continuous Innovation"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="premium" asChild>
              <Link href="/#contact">Work With Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container bg-primary/5 py-24 mb-0 border-y border-white/5 mx-auto">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold font-display mb-6">Ready to Start?</h2>
          <Button variant="outline" size="lg" asChild>
            <Link href="/#contact" className="gap-2">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
