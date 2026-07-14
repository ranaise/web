"use client";

import * as React from "react";
import { Database, Terminal, Cpu, Braces } from "lucide-react";
import { motion } from "framer-motion";
import { profileDetails } from "@/data";

export function About() {
  return (
    <section id="about" className="relative py-24 px-6 md:px-12 bg-transparent">
      {/* Decorative vertical line connecting from Hero */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border/40 hidden sm:block" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        
        <div className="max-w-3xl text-left space-y-6 mb-16 pl-0 sm:pl-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground">
            About
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pl-0 sm:pl-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground font-sans"
          >
            <p>
              My foundation lies in formal computer science principles, currently completing my sixth semester 
              as an Informatics student at <strong className="text-foreground font-semibold">Telkom University</strong>. 
            </p>
            <p>
              My engineering approach is data-centric and scalable. I specialize in backend architectures, designing relational database schemas, optimizing complex queries, and building secure RESTful APIs. Currently, I apply these concepts as a Programming Intern at <strong className="text-foreground font-semibold">Medusa Technology</strong>, where I develop real-time server connections and integrate local Large Language Models (LLMs) for automated chat moderation.
            </p>
            <p>
              Beyond backend infrastructure, I actively explore Artificial Intelligence, bridging the gap between research and production-ready applications. My focus remains on writing clean, maintainable code that solves real-world operational bottlenecks.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               <div>
                 <Database className="h-6 w-6 text-primary mb-4" />
                 <h4 className="font-bold text-foreground text-base mb-2 font-heading">Data Architecture</h4>
                 <p className="text-sm text-muted-foreground leading-relaxed">Relational schema design, query optimization, and persistent storage management.</p>
               </div>
               <div>
                 <Terminal className="h-6 w-6 text-primary mb-4" />
                 <h4 className="font-bold text-foreground text-base mb-2 font-heading">API Engineering</h4>
                 <p className="text-sm text-muted-foreground leading-relaxed">Building scalable, secure RESTful services and real-time endpoints.</p>
               </div>
               <div>
                 <Cpu className="h-6 w-6 text-primary mb-4" />
                 <h4 className="font-bold text-foreground text-base mb-2 font-heading">AI Integration</h4>
                 <p className="text-sm text-muted-foreground leading-relaxed">Deploying LLMs and computer vision models into production applications.</p>
               </div>
               <div>
                 <Braces className="h-6 w-6 text-primary mb-4" />
                 <h4 className="font-bold text-foreground text-base mb-2 font-heading">System Logic</h4>
                 <p className="text-sm text-muted-foreground leading-relaxed">Algorithm design, data structure implementation, and asynchronous processing.</p>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
