"use client";

import * as React from "react";
import { ArrowRight, TerminalSquare, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { profileDetails } from "@/data";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const animateY = shouldReduceMotion ? 0 : 20;
  
  const transitionDelay = (delay: number): any => ({
    duration: 0.8,
    ease: "easeOut",
    delay,
  });

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center pt-32 pb-24 px-6 md:px-12 overflow-hidden"
    >
      {/* Decorative vertical line */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border/40 hidden sm:block" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-8 flex flex-col items-start text-left space-y-10">
            
            <motion.div
              initial={{ opacity: 0, x: -animateY }}
              animate={{ opacity: 1, x: 0 }}
              transition={transitionDelay(0.1)}
              className="flex items-center gap-3"
            >
              <div className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-primary">Backend Engineer &middot; AI Enthusiast</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: animateY }}
              animate={{ opacity: 1, y: 0 }}
              transition={transitionDelay(0.2)}
              className="space-y-8"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading font-bold tracking-tighter text-foreground leading-[1.05]">
                Building reliable systems from data, APIs, and practical AI.
              </h1>
              
              <p className="max-w-[55ch] text-base sm:text-lg text-muted-foreground leading-relaxed font-sans">
                I’m Rafa’Na’ilah Septia, an Informatics student and programming intern focused on backend services, real-time applications, database design, and useful AI integration.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: animateY }}
              animate={{ opacity: 1, y: 0 }}
              transition={transitionDelay(0.3)}
              className="flex flex-col sm:flex-row items-center gap-4 pt-6 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className={buttonVariants({
                  variant: "default",
                  size: "lg",
                  className: "rounded-full font-semibold text-sm bg-foreground hover:bg-foreground/90 text-background transition-all h-14 px-8 w-full sm:w-auto"
                })}
              >
                Explore My Projects
              </a>
              <a
                href="#contact"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "rounded-full font-semibold text-sm border-border hover:bg-muted/50 transition-all h-14 px-8 w-full sm:w-auto"
                })}
              >
                Get in Touch
              </a>
              
              <div className="flex items-center gap-4 border-l border-border pl-6 ml-2 hidden sm:flex">
                <a href={profileDetails.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted/50">
                  <GithubIcon className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href={profileDetails.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted/50">
                  <LinkedinIcon className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="hidden lg:block lg:col-span-4 relative">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={transitionDelay(0.4)}
               className="relative w-full aspect-[3/4] flex items-center justify-center overflow-hidden"
             >
               {/* Editorial graphic instead of system dashboard */}
               <div className="absolute inset-0 bg-muted/30 rounded-2xl border border-border/50" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-primary/20 rounded-full animate-[spin_60s_linear_infinite]" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-primary/40 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary/10 rounded-full blur-xl" />
               <TerminalSquare className="w-8 h-8 text-primary/50 relative z-10" />
             </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
