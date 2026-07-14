"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, Layers, Code, Database, Cpu } from "lucide-react";
import { projectsData } from "@/data";

const appDetailsShort: Record<string, string> = {
  "nexevent-2026": "Coordinates campus event approvals across Student Affairs (Superadmin), Organization Presidents (Admin), and Students.",
  "posyandu-pintar": "Provides a health data logging dashboard for infant records, offering automated BMI/growth chart rendering and Groq AI diet suggestions.",
  "microplast-2026": "Automates microplastic fragment analysis under microscopic views using OpenCV binarization, Otsu filters, and circularity calculations.",
  "gpt-ner-2026": "Converts plain English documents into structured JSON entity labels, querying Groq Llama-3 models with evaluation metrics.",
  "my-dormitory-2025": "Manages resident check-in/check-out confirmations using localized GPS fence validation and camera-verified QR code scans.",
  "telyutalks-2025": "Serves as a campus question-and-answer discussion forum, integrating Telkom SSO login and admin content moderation queues."
};

function getAppDetailsShort(id: string, fallback: string): string {
  return appDetailsShort[id] || fallback;
}

function ProjectCard({
  project,
  index,
}: {
  project: typeof projectsData[0];
  index: number;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group flex flex-col border border-border/60 bg-card overflow-hidden hover:border-primary/40 transition-colors"
    >
      <Link href={`/projects/${project.id}`} className="block relative aspect-[16/9] border-b border-border/60 overflow-hidden bg-muted">
        <img
          src={project.screenshot}
          alt={`Screenshot of ${project.title}`}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur text-foreground text-[10px] font-mono font-bold px-2 py-1 uppercase tracking-widest border border-border">
          {project.year}
        </div>
      </Link>
      
      <div className="flex flex-col flex-1 p-6 sm:p-8">
        <div className="space-y-4 mb-6">
          <div className="space-y-2">
            <h4 className="text-2xl font-heading font-bold text-foreground">
              {project.title}
            </h4>
            <p className="text-sm font-mono text-primary uppercase tracking-wider">
              {project.subtitle}
            </p>
          </div>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            {getAppDetailsShort(project.id, project.overview)}
          </p>
        </div>

        <div className="mt-auto space-y-6">
          <div className="space-y-3">
            <span className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-widest border-b border-border/40 pb-1 flex w-full">
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tag) => (
                <span key={tag} className="px-2 py-1 text-[10px] font-mono bg-muted/50 border border-border/50 text-foreground uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-border/60">
            <Link
              href={`/projects/${project.id}`}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-primary text-primary-foreground text-xs font-mono font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
            >
              Analyze Case Study
              <ArrowRight className="h-4 w-4" />
            </Link>
            
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-2.5 border border-border bg-card text-foreground hover:bg-muted transition-colors"
                title="View Source Code"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const categories = ["All", "AI / ML", "Fullstack", "Mobile", "Web"];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "AI / ML") {
      return project.technologies.some((t) =>
        ["Llama 3", "Groq API", "LLM"].includes(t)
      );
    }
    if (activeCategory === "Fullstack") {
      return (
        (project.technologies.includes("Laravel") || project.technologies.includes("Spring Boot")) &&
        (project.technologies.includes("Flutter") || project.technologies.includes("Next.js") || project.technologies.includes("TypeScript"))
      );
    }
    if (activeCategory === "Mobile") {
      return project.technologies.includes("Flutter");
    }
    if (activeCategory === "Web") {
      return (
        project.technologies.includes("Spring Boot") ||
        project.technologies.includes("Next.js") ||
        project.technologies.includes("TypeScript") ||
        project.technologies.includes("Laravel") ||
        project.technologies.includes("Streamlit")
      );
    }
    return true;
  });

  return (
    <section id="projects" className="py-24 px-6 sm:px-8 bg-muted/10 border-t border-border/40">
      <div className="container mx-auto max-w-6xl space-y-16">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-border/60">
          <div className="text-left space-y-4 max-w-2xl">
            <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-primary">
              04. Architecture Portfolio
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground">
              Featured Projects
            </h3>
            <p className="text-base text-muted-foreground">
              Detailed breakdowns of product implementations, backend systems, and automated pipelines.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 w-fit h-fit md:self-end">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-[11px] font-mono font-bold uppercase tracking-widest transition-all outline-none border ${
                    active 
                      ? "bg-primary text-primary-foreground border-primary" 
                      : "bg-transparent text-muted-foreground border-border hover:bg-muted/50 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
