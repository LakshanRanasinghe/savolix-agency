"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";


const testimonials = [
  {
    content: "Savolix transformed our online presence. Highly recommended!",
    author: "Tharaka Withanage",
    role: "Electrical Engineer",
    avatar: "/images/avatar-001.avif"
  },
  {
    content: "The team delivered our e-commerce platform ahead of schedule and it looks stunning. Our sales have increased by 200%.",
    author: "Pieter Van Der Westhuizen",
    role: "Founder, Deurbeslag",
    avatar: "/images/avatar-002.avif"
  },
  {
    content: "Professional and responsive. They understood our vision perfectly and executed it flawlessly.",
    author: "Emma Davis",
    role: "Marketing Director, CreativeCo",
    avatar: "/images/avatar-003.avif"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold font-display text-center mb-16">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-white/5 p-8 rounded-2xl relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <p className="text-muted-foreground mb-6 relative z-10 italic">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-bold flex items-center gap-2">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
