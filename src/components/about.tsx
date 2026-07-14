"use client";

import * as React from "react";
import { Database, Terminal, Cpu, Braces } from "lucide-react";
import { motion } from "framer-motion";
import { profileDetails } from "@/data";

export function About() {
  return (
    <section id="about" className="py-24 px-6 sm:px-8 bg-background border-t border-border/40">
      <div className="container mx-auto max-w-6xl space-y-16">
        
        <div className="max-w-2xl text-left space-y-4">
          <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-primary">
            01. Architecture Overview
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground">
            System Profiling
          </h3>
          <p className="text-base text-muted-foreground max-w-[60ch]">
            An analytical breakdown of my academic background, technical proficiencies, and engineering focus.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground font-serif">
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
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
               <div className="p-5 border border-border bg-muted/30">
                 <Database className="h-5 w-5 text-primary mb-3" />
                 <h4 className="font-bold text-foreground text-sm mb-1">Data Architecture</h4>
                 <p className="text-xs text-muted-foreground">Relational schema design, query optimization, and persistent storage management.</p>
               </div>
               <div className="p-5 border border-border bg-muted/30">
                 <Terminal className="h-5 w-5 text-primary mb-3" />
                 <h4 className="font-bold text-foreground text-sm mb-1">API Engineering</h4>
                 <p className="text-xs text-muted-foreground">Building scalable, secure RESTful services and real-time endpoints.</p>
               </div>
               <div className="p-5 border border-border bg-muted/30">
                 <Cpu className="h-5 w-5 text-primary mb-3" />
                 <h4 className="font-bold text-foreground text-sm mb-1">AI Integration</h4>
                 <p className="text-xs text-muted-foreground">Deploying LLMs and computer vision models into production applications.</p>
               </div>
               <div className="p-5 border border-border bg-muted/30">
                 <Braces className="h-5 w-5 text-primary mb-3" />
                 <h4 className="font-bold text-foreground text-sm mb-1">System Logic</h4>
                 <p className="text-xs text-muted-foreground">Algorithm design, data structure implementation, and asynchronous processing.</p>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="border border-border bg-card p-6 md:p-8 space-y-6">
              <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground border-b border-border pb-4">
                Entity Configuration
              </h4>
              
              <div className="space-y-4 font-mono text-sm">
                <div className="grid grid-cols-3 gap-4 border-b border-border/50 pb-3">
                  <span className="text-muted-foreground">Name</span>
                  <span className="col-span-2 text-foreground font-medium">{profileDetails.name}</span>
                </div>
                <div className="grid grid-cols-3 gap-4 border-b border-border/50 pb-3">
                  <span className="text-muted-foreground">Status</span>
                  <span className="col-span-2 text-foreground font-medium">Active (Semester 6)</span>
                </div>
                <div className="grid grid-cols-3 gap-4 border-b border-border/50 pb-3">
                  <span className="text-muted-foreground">Institution</span>
                  <span className="col-span-2 text-foreground font-medium">Telkom University</span>
                </div>
                <div className="grid grid-cols-3 gap-4 border-b border-border/50 pb-3">
                  <span className="text-muted-foreground">Major</span>
                  <span className="col-span-2 text-foreground font-medium">Informatics</span>
                </div>
                <div className="grid grid-cols-3 gap-4 border-b border-border/50 pb-3">
                  <span className="text-muted-foreground">Location</span>
                  <span className="col-span-2 text-foreground font-medium">Indonesia</span>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-1">
                  <span className="text-muted-foreground">Contact</span>
                  <span className="col-span-2 text-foreground font-medium truncate">{profileDetails.email}</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
