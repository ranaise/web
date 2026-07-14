"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hardSkillsCategories, softSkillsList } from "@/data";
import { TerminalSquare } from "lucide-react";

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
  const [activeTab, setActiveTab] = React.useState(hardSkillsCategories[0].title);
  const activeCategory = hardSkillsCategories.find(c => c.title === activeTab) || hardSkillsCategories[0];

  return (
    <section id="skills" className="py-24 px-6 sm:px-8 bg-background border-t border-border/40">
      <div className="container mx-auto max-w-6xl space-y-16">
        
        <div className="max-w-2xl text-left space-y-4">
          <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-primary">
            03. Tech Stack Matrix
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground">
            Capabilities
          </h3>
          <p className="text-base text-muted-foreground max-w-[60ch]">
            The languages, frameworks, and architectural tools I leverage to build robust systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Tab Navigation - Editorial List style */}
          <div className="lg:col-span-1 space-y-2 border-l border-border pl-6">
            <h4 className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-widest mb-6 border-b border-border/40 pb-2">
              Categories
            </h4>
            <div className="flex flex-col gap-1">
              {hardSkillsCategories.map((category) => {
                const active = activeTab === category.title;
                return (
                  <button
                    key={category.title}
                    onClick={() => setActiveTab(category.title)}
                    className={`text-left px-4 py-3 text-sm font-mono transition-all duration-200 border-l-2 ${
                      active 
                        ? "border-primary text-foreground bg-muted/50 font-bold" 
                        : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/20"
                    }`}
                  >
                    {category.title}
                  </button>
                );
              })}
            </div>
            
            <div className="pt-12">
              <h4 className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-widest mb-4 border-b border-border/40 pb-2">
                Operational Soft Skills
              </h4>
              <ul className="space-y-3 font-mono text-xs text-muted-foreground">
                {softSkillsList.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <TerminalSquare className="h-3 w-3 text-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Skills Grid - Sharp borders */}
          <div className="lg:col-span-3 min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-border border border-border"
              >
                {activeCategory.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group bg-card p-6 flex flex-col items-center justify-center text-center gap-4 hover:bg-muted/30 transition-colors"
                  >
                    <div className="h-10 w-10 flex items-center justify-center grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
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
                    <span className="text-xs font-mono font-semibold text-foreground">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
