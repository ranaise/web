"use client";

import * as React from "react";
import { ArrowRight, TerminalSquare } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const animateY = shouldReduceMotion ? 0 : 20;
  
  const transitionDelay = (delay: number) => ({
    duration: 0.6,
    ease: "easeOut" as const,
    delay,
  });

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 sm:px-8 overflow-hidden"
    >
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="grid grid-cols-1 gap-12 items-center">
          
          <div className="flex flex-col items-center text-center space-y-8">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={transitionDelay(0.1)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              <TerminalSquare className="w-4 h-4" />
              <span className="text-xs font-semibold tracking-wider uppercase">Informatics Student &middot; Telkom University</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: animateY }}
              animate={{ opacity: 1, y: 0 }}
              transition={transitionDelay(0.2)}
              className="space-y-4"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight text-foreground leading-tight">
                Rafa'Na'ilah <br className="hidden sm:block" />
                <span className="text-primary">Septia</span>
              </h1>
              
              <p className="text-lg sm:text-xl font-medium text-muted-foreground/80 tracking-wide">
                Theory refined. Solutions deployed.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: animateY }}
              animate={{ opacity: 1, y: 0 }}
              transition={transitionDelay(0.3)}
              className="max-w-[60ch] text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              Turning ideas into production-ready systems through backend engineering, AI integration, and clean architectural design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: animateY }}
              animate={{ opacity: 1, y: 0 }}
              transition={transitionDelay(0.4)}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-4"
            >
              <a
                href="#projects"
                className={buttonVariants({
                  variant: "default",
                  size: "lg",
                  className: "rounded-xl font-semibold text-sm tracking-wider uppercase bg-primary hover:bg-primary/90 text-primary-foreground transition-all h-12 px-8 cursor-pointer w-full sm:w-auto shadow-premium-md hover:shadow-premium-lg"
                })}
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#contact"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "rounded-xl font-semibold text-sm tracking-wider uppercase border-border bg-background text-foreground hover:bg-muted/50 transition-all h-12 px-8 cursor-pointer w-full sm:w-auto shadow-premium-sm"
                })}
              >
                Get in Touch
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
