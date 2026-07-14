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
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 px-6 sm:px-8 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 flex flex-col items-start text-left space-y-10">
            
            <motion.div
              initial={{ opacity: 0, x: -animateY }}
              animate={{ opacity: 1, x: 0 }}
              transition={transitionDelay(0.1)}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted rounded-md border border-border"
            >
              <TerminalSquare className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono font-medium tracking-wider uppercase text-foreground">Informatics Student &middot; Telkom University</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: animateY }}
              animate={{ opacity: 1, y: 0 }}
              transition={transitionDelay(0.2)}
              className="space-y-6"
            >
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-heading font-bold tracking-tighter text-foreground leading-[1.1]">
                Backend Engineer <br />
                <span className="text-muted-foreground">&amp; AI Enthusiast</span>
              </h1>
              
              <div className="h-px w-24 bg-primary/40 rounded-full" />
              
              <p className="max-w-[50ch] text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-serif">
                I build robust, scalable architectures and integrate intelligent systems. Passionate about 
                transforming theoretical concepts into high-performance, production-ready solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: animateY }}
              animate={{ opacity: 1, y: 0 }}
              transition={transitionDelay(0.3)}
              className="flex flex-col sm:flex-row items-center gap-6 pt-4"
            >
              <a
                href="#projects"
                className={buttonVariants({
                  variant: "default",
                  size: "lg",
                  className: "rounded-none font-medium text-sm tracking-widest uppercase bg-foreground hover:bg-foreground/90 text-background transition-all h-14 px-10 cursor-pointer w-full sm:w-auto"
                })}
              >
                View Architecture
                <ArrowRight className="ml-3 h-4 w-4" />
              </a>
              
              <div className="flex items-center gap-4 border-l border-border pl-6">
                <a href={profileDetails.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <GithubIcon className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href={profileDetails.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <LinkedinIcon className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href={`mailto:${profileDetails.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="hidden lg:flex lg:col-span-4 justify-end relative">
             {/* Abstract editorial graphic/shape instead of a typical photo */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={transitionDelay(0.4)}
               className="relative w-full aspect-[3/4] bg-muted/50 border border-border p-6 flex flex-col justify-between"
             >
               <div className="flex justify-between items-start">
                 <span className="text-[10px] font-mono uppercase text-muted-foreground tracking-widest">Sys.Status</span>
                 <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
               </div>
               
               <div className="space-y-2">
                 <div className="h-px w-full bg-border" />
                 <div className="flex justify-between text-[10px] font-mono text-muted-foreground uppercase">
                   <span>Root</span>
                   <span>Rafa'Na'ilah S.</span>
                 </div>
               </div>
             </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
