"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hardSkillsCategories, softSkillsList } from "@/data";


// Helper component for Custom SVGs that Devicon doesn't cover
function CustomSkillIcon({ name }: { name: string }) {
  switch (name) {
    case "Linden Scripting Language (LSL)":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#2E7D32">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <text x="6" y="15" fill="white" fontSize="11" fontFamily="monospace" fontWeight="bold">LS</text>
        </svg>
      );
    case "XML":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#E65100">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <text x="5" y="15" fill="white" fontSize="10" fontFamily="monospace" fontWeight="bold">XML</text>
        </svg>
      );
    case "Streamlit":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#FF4B4B">
          <path d="M12 3L2 20h20L12 3zm0 4.5L18.5 18H5.5L12 7.5z" />
        </svg>
      );
    case "Groq API":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="12" cy="12" r="5" fill="#F3F4F6" />
          <text x="10" y="15.5" fill="currentColor" fontSize="9" fontWeight="extrabold" fontFamily="sans-serif">G</text>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        </svg>
      );
  }
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 md:px-12 bg-transparent">
      {/* Decorative vertical line connecting from Projects */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border/40 hidden sm:block" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl text-left space-y-6 mb-16 pl-0 sm:pl-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground">
            Technical Proficiencies
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pl-0 sm:pl-8">
          
          <div className="lg:col-span-8 space-y-16">
            {hardSkillsCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-heading font-bold text-foreground border-b border-border/60 pb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="group flex items-center gap-2 px-4 py-2 bg-muted/30 border border-border rounded-full hover:border-primary/40 hover:bg-muted/50 transition-colors"
                    >
                      <div className="h-4 w-4 flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                        {skill.custom ? (
                          <CustomSkillIcon name={skill.name} />
                        ) : (
                          <img
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.devicon}`}
                            alt={skill.name}
                            className="max-h-full max-w-full object-contain"
                            onError={(e) => { e.currentTarget.style.display = "none"; }}
                          />
                        )}
                      </div>
                      <span className="text-sm font-sans font-medium text-foreground">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="sticky top-24 bg-card border border-border p-8 rounded-2xl shadow-sm"
            >
              <h4 className="text-sm font-mono font-bold text-muted-foreground uppercase tracking-widest mb-6">
                Operational &amp; Soft Skills
              </h4>
              <ul className="space-y-4 text-base font-sans text-foreground font-medium">
                {softSkillsList.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary shrink-0 mt-1">&bull;</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
