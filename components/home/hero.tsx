"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Rocket, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse delay-1000" />
      </div>

      <div className="container px-4 md:px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm md:mx-0 mx-auto w-fit mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              Accepting New Projects
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight leading-tight">
              Elevating Digital <br />
              <span className="text-gradient">Experiences</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0"
          >
            We are Savolix. A premium web development agency specializing in Next.js, Shopify, WordPress, WooCommerce, Laravel, and robust digital solutions that drive growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4"
          >
            <Button variant="premium" size="lg" asChild>
              <Link href="#contact" className="gap-2">
                Start a Project <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#work">View Our Work</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center md:justify-start gap-8 mt-8 text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Rocket className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Clean Code</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">High Performance</span>
            </div>
          </motion.div>
        </div>

        {/* Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 bg-gradient-to-tr from-white/10 to-transparent p-1 rounded-2xl glass">
            <div className="bg-card rounded-xl overflow-hidden border border-white/5 relative h-[500px]">
              {/* Pseudo-code Editor UI */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
              </div>
              <div className="p-6 font-mono text-sm space-y-4">
                <div className="flex gap-4">
                  <span className="text-muted-foreground">1</span>
                  <span><span className="text-purple-400">const</span> <span className="text-yellow-300">Savolix</span> = <span className="text-purple-400">new</span> <span className="text-blue-400">Agency</span>({`{`}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-muted-foreground">2</span>
                  <span className="pl-4"><span className="text-blue-300">expertise</span>: [<span className="text-green-300">"Next.js"</span>, <span className="text-green-300">"Shopify"</span>, <span className="text-green-300">"WordPress"</span>, <span className="text-green-300">"Laravel"</span>],</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-muted-foreground">3</span>
                  <span className="pl-4"><span className="text-blue-300">mission</span>: <span className="text-green-300">"Build premium digital experiences"</span>,</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-muted-foreground">4</span>
                  <span className="pl-4"><span className="text-blue-300">status</span>: <span className="text-green-300">"Ready to scale your business"</span></span>
                </div>
                <div className="flex gap-4">
                  <span className="text-muted-foreground">5</span>
                  <span>{`}`});</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-muted-foreground">6</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-muted-foreground">7</span>
                  <span><span className="text-purple-400">await</span> <span className="text-yellow-300">Savolix</span>.<span className="text-blue-400">launchProject</span>();</span>
                </div>
              </div>

              {/* Decorative floating elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-20 right-10 p-3 glass rounded-xl"
              >
                <img src="https://api.iconify.design/logos/react.svg" className="w-8 h-8" alt="React" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-10 p-3 glass rounded-xl"
              >
                <img src="https://api.iconify.design/logos/nextjs-icon.svg" className="w-8 h-8 invert" alt="Next.js" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-40 right-20 p-3 glass rounded-xl"
              >
                <img src="https://api.iconify.design/logos/shopify.svg" className="w-8 h-8" alt="Shopify" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.5 }}
                className="absolute top-40 right-8 p-3 glass rounded-xl"
              >
                <img src="https://api.iconify.design/logos/wordpress-icon.svg" className="w-8 h-8" alt="WordPress" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-12 left-32 p-3 glass rounded-xl"
              >
                <img src="https://api.iconify.design/logos/woocommerce-icon.svg" className="w-8 h-8" alt="WooCommerce" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2.5 }}
                className="absolute bottom-8 right-12 p-3 glass rounded-xl"
              >
                <img src="https://api.iconify.design/logos/laravel.svg" className="w-8 h-8" alt="Laravel" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
