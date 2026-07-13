"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hardSkillsCategories, softSkillsList } from "@/data";

// Helper component for Custom SVGs that Devicon doesn't cover
function CustomSkillIcon({ name }: { name: string }) {
  switch (name) {
    case "Linden Scripting Language (LSL)":
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="#2E7D32">
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <text x="6" y="15" fill="white" fontSize="11" fontFamily="monospace" fontWeight="bold">LS</text>
        </svg>
      );
    case "XML":
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="#E65100">
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <text x="5" y="15" fill="white" fontSize="10" fontFamily="monospace" fontWeight="bold">XML</text>
        </svg>
      );
    case "Streamlit":
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="#FF4B4B">
          <path d="M12 3L2 20h20L12 3zm0 4.5L18.5 18H5.5L12 7.5z" />
        </svg>
      );
    case "Groq API":
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <circle cx="12" cy="12" r="5" fill="#F3F4F6" />
          <text x="10" y="15.5" fill="currentColor" fontSize="9" fontWeight="extrabold" fontFamily="sans-serif">G</text>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        </svg>
      );
  }
}

export function Skills() {
  const [activeTab, setActiveTab] = React.useState(hardSkillsCategories[0].title);
  const activeCategory = hardSkillsCategories.find(c => c.title === activeTab) || hardSkillsCategories[0];

  return (
    <section id="skills" className="py-24 px-6 sm:px-8 bg-transparent transition-colors duration-300 relative z-10">
      <div className="container mx-auto max-w-5xl space-y-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border">
          <div className="text-left space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Capabilities
            </h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Technical Skills &amp; Stack
            </h3>
            <p className="text-sm text-muted-foreground max-w-lg">
              The tools and technologies I use to build robust and scalable systems.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2">
          {hardSkillsCategories.map((category) => {
            const active = activeTab === category.title;
            return (
              <button
                key={category.title}
                onClick={() => setActiveTab(category.title)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  active 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "bg-card text-muted-foreground hover:bg-muted border border-border"
                }`}
              >
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            >
              {activeCategory.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group rounded-2xl p-6 solid-surface flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
                >
                  <div className="h-12 w-12 flex items-center justify-center grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
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
                  <span className="text-xs font-semibold text-foreground">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Soft Skills */}
        <div className="pt-8 border-t border-border">
          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Soft Skills
          </h4>
          <div className="flex flex-wrap gap-3">
            {softSkillsList.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-card border border-border text-foreground shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
