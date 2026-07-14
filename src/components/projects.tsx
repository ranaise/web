"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
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


export function Projects() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const categories = ["All", "AI / ML", "Fullstack", "Mobile", "Web"];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "AI / ML") {
      return project.technologies.some((t) =>
        ["Llama 3", "Groq API", "LLM", "Python", "Streamlit", "OpenCV"].includes(t)
      );
    }
    if (activeCategory === "Fullstack") {
      return (
        (project.technologies.includes("Laravel") || project.technologies.includes("Spring Boot") || project.technologies.includes("Next.js"))
      );
    }
    if (activeCategory === "Mobile") {
      return project.technologies.includes("Flutter");
    }
    if (activeCategory === "Web") {
      return (
        project.technologies.includes("Spring Boot") ||
        project.technologies.includes("Next.js") ||
        project.technologies.includes("Laravel") ||
        project.technologies.includes("Streamlit")
      );
    }
    return true;
  });

  const featuredProject = filteredProjects.find((p) => p.featured) || filteredProjects[0];
  const regularProjects = filteredProjects.filter((p) => p.id !== featuredProject?.id);

  return (
    <section id="projects" className="relative py-24 px-6 md:px-12 bg-transparent">
      {/* Decorative vertical line connecting from Experience */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border/40 hidden sm:block" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pl-0 sm:pl-8">
          <div className="text-left space-y-6 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground">
              Selected Projects
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 w-fit h-fit md:self-end">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-[11px] font-mono font-bold uppercase tracking-widest transition-all outline-none rounded-full ${
                    active 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="pl-0 sm:pl-8">
          {featuredProject && (
            <motion.div 
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="group flex flex-col lg:flex-row bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-colors mb-12 shadow-premium-sm hover:shadow-premium-md"
            >
              <Link href={`/projects/${featuredProject.id}`} className="block lg:w-[60%] relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-muted">
                <img
                  src={featuredProject.screenshot}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur text-foreground text-[10px] font-mono font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                  {featuredProject.year}
                </div>
              </Link>
              <div className="flex flex-col flex-1 p-8 md:p-12 justify-center">
                <h3 className="text-sm font-mono font-bold text-primary uppercase tracking-widest mb-2">Featured Project</h3>
                <h4 className="text-3xl font-heading font-bold text-foreground mb-4">{featuredProject.title}</h4>
                <p className="text-muted-foreground mb-8 text-lg font-sans leading-relaxed">
                  {featuredProject.overview}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.technologies.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 text-[10px] font-mono font-semibold bg-muted text-foreground rounded-full uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <Link
                    href={`/projects/${featuredProject.id}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background text-xs font-mono font-bold uppercase tracking-widest rounded-full hover:bg-foreground/90 transition-colors"
                  >
                    View Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  {featuredProject.github && (
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-muted text-foreground rounded-full hover:bg-muted/80 transition-colors"
                      title="View Source Code"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <AnimatePresence mode="popLayout">
              {regularProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-colors shadow-sm hover:shadow-premium-sm"
                >
                  <Link href={`/projects/${project.id}`} className="block relative aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      src={project.screenshot}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-background/90 backdrop-blur text-foreground text-[10px] font-mono font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                      {project.year}
                    </div>
                  </Link>
                  <div className="flex flex-col flex-1 p-6 md:p-8">
                    <h4 className="text-2xl font-heading font-bold text-foreground mb-2">{project.title}</h4>
                    <p className="text-sm text-muted-foreground mb-6 font-sans leading-relaxed line-clamp-2">
                      {project.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2.5 py-1 text-[9px] font-mono font-semibold bg-muted text-foreground rounded-full uppercase">
                          {tag}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2.5 py-1 text-[9px] font-mono font-semibold bg-muted text-foreground rounded-full uppercase">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                      <Link
                        href={`/projects/${project.id}`}
                        className="text-xs font-mono font-bold text-primary uppercase tracking-widest hover:text-primary/80 transition-colors flex items-center gap-2"
                      >
                        View Project
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          title="View Source Code"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
