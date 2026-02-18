"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent -z-10" />

      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Ready to Elevate Your Digital Presence?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's build something extraordinary together. Whether you need a new website, store, or a custom application, we're here to help.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button variant="premium" size="lg" className="text-lg px-8 h-12 w-full md:w-auto" asChild>
              <Link href="mailto:buddhika@dayzsolutions.com" className="gap-2">
                Get in Touch <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 h-12 w-full md:w-auto" asChild>
              <Link href="https://wa.me/94782528736" target="_blank" className="gap-2">
                WhatsApp <MessageCircle className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
