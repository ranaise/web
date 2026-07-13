"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ExternalLink, ImageIcon, ZoomIn } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/data";

interface MockupProps {
  id: string;
  src: string;
  alt: string;
}

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

export function TechIcon({ name }: { name: string }) {
  const deviconMap: Record<string, string> = {
    Python: "python/python-original.svg",
    FastAPI: "fastapi/fastapi-original.svg",
    Laravel: "laravel/laravel-original.svg",
    "C++": "cplusplus/cplusplus-original.svg",
    MySQL: "mysql/mysql-original.svg",
    PostgreSQL: "postgresql/postgresql-original.svg",
    Flutter: "flutter/flutter-original.svg",
    "Next.js": "nextjs/nextjs-original.svg",
    TypeScript: "typescript/typescript-original.svg",
    "Spring Boot": "spring/spring-original.svg",
  };

  const path = deviconMap[name];

  if (name === "Llama 3" || name === "Groq API") {
    return (
      <Badge variant="outline" className="text-[10px] font-mono px-2 py-0.5 border-border/80 text-primary font-bold">
        {name}
      </Badge>
    );
  }

  if (name === "OpenCV") {
    return (
      <Badge variant="outline" className="text-[10px] font-mono px-2 py-0.5 border-border/80 text-accent font-bold">
        {name}
      </Badge>
    );
  }

  if (name === "Streamlit") {
    return (
      <Badge variant="outline" className="text-[10px] font-mono px-2 py-0.5 border-border/80 text-amber-500 font-bold">
        {name}
      </Badge>
    );
  }

  return (
    <Badge variant="outline" className="text-[10px] font-mono px-2 py-0.5 border-border/80 flex items-center gap-1.5 font-bold">
      {path ? (
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`}
          alt={`${name} logo`}
          className="h-3 w-3 object-contain shrink-0"
        />
      ) : (
        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
      )}
      {name}
    </Badge>
  );
}

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = React.useState(false);

  return (
    <div className="relative w-full aspect-[9/19.5] glass-surface rounded-[24px] overflow-hidden shadow-2xl border-4 border-slate-800 bg-white">
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-3.5 bg-slate-800 rounded-full z-20 flex items-center justify-center">
        <span className="w-1 h-1 rounded-full bg-black/40" />
      </div>
      <div className="relative w-full h-full overflow-hidden bg-white">
        {!error ? (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-contain bg-white"
            onError={() => setError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-card/45 p-2 flex flex-col justify-center items-center text-center select-none">
            <span className="text-[9px] font-bold text-slate-800">Mobile UI</span>
          </div>
        )}
      </div>
    </div>
  );
}

interface DualDeviceMockupProps {
  id: string;
  webSrc: string;
  mobileSrc: string;
  alt: string;
}

function DualDeviceMockup({ id, webSrc, mobileSrc, alt }: DualDeviceMockupProps) {
  return (
    <div className="relative flex flex-col sm:flex-row items-center sm:items-end justify-center gap-6 lg:gap-0 w-full max-w-[460px] py-4 select-none">
      <div className="w-[85%] sm:w-[65%] lg:w-[82%] lg:mr-[18%] transition-transform duration-500 hover:-translate-y-0.5">
        <BrowserMockup id={id} src={webSrc} alt={alt} />
      </div>
      <div className="w-[38%] sm:w-[28%] lg:w-[33%] lg:absolute lg:right-2 lg:bottom-0 transition-transform duration-500 hover:scale-[1.04] hover:-translate-y-0.5 drop-shadow-2xl z-20">
        <PhoneMockup src={mobileSrc} alt={`${alt} Mobile`} />
      </div>
    </div>
  );
}

function BrowserMockup({ id, src, alt }: MockupProps) {
  const [error, setError] = React.useState(false);

  return (
    <div className="relative w-full max-w-[460px] glass-surface rounded-2xl overflow-hidden shadow-premium-lg border border-border/80 transition-all duration-300 hover:border-primary/20">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/10 bg-muted/20 select-none">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56] border border-black/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E] border border-black/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F] border border-black/10" />
        </div>
        <div className="w-1/2 max-w-[180px] h-5 bg-background/60 rounded-md border border-border/30 flex items-center justify-center text-[8px] text-muted-foreground font-mono">
          api.rafanailah.dev/{id}
        </div>
        <div className="text-[8px] font-mono text-primary font-bold">
          HTTPS
        </div>
      </div>

      <div className="relative aspect-[21/10] w-full overflow-hidden bg-[#0A0E17]">
        {!error ? (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-contain transition-transform duration-500 hover:scale-[1.02]"
            onError={() => setError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-card/45 p-4 flex flex-col justify-center items-center text-center select-none">
            <div className="p-3 rounded-2xl bg-muted/65 text-muted-foreground mb-2 shadow-xs">
              <ImageIcon className="h-5 w-5" />
            </div>
            <span className="text-[11px] font-bold text-foreground">Project UI Preview</span>
            <span className="text-[8px] font-mono text-muted-foreground mt-1.5 uppercase tracking-widest border border-border/40 px-2 py-0.5 rounded-md bg-muted/20">
              {src}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

// Project Card with movie poster flip effect
function ProjectCard({
  project,
  index,
  isOdd,
  shouldReduceMotion,
  onViewImage,
}: {
  project: typeof projectsData[0];
  index: number;
  isOdd: boolean;
  shouldReduceMotion: boolean;
  onViewImage: (src: string, title: string) => void;
}) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onClick={() => setIsFlipped(!isFlipped)}
      className="w-full aspect-[3.2/4] relative perspective-1000 group cursor-pointer select-none min-h-[420px] sm:min-h-[480px]"
    >
      <div 
        className={`w-full h-full relative transition-transform duration-700 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        } group-hover:md:rotate-y-180`}
      >
        {/* --- FRONT FACE: THE MOVIE COVER --- */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl border border-primary/25 bg-card dark:bg-[#12070A] p-5 flex flex-col justify-between shadow-premium-lg">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 pointer-events-none rounded-3xl" />
          
          <div className="flex items-center justify-between text-foreground/50 dark:text-white/50 text-[10px] font-heading font-bold italic uppercase tracking-wider">
            <span>✦ PROJECT</span>
            <span>{project.year}</span>
          </div>

          {/* Screenshot viewport (Theater projection screen mockup with Zoom overlay on hover) */}
          <div 
            className="relative aspect-video w-full rounded-xl border border-border/30 dark:border-white/10 overflow-hidden bg-muted/30 dark:bg-black my-2 shadow-inner group/screen cursor-zoom-in"
            onClick={(e) => {
              e.stopPropagation(); // prevent flipping the card
              onViewImage(project.screenshot, `${project.title} - Main Interface`);
            }}
          >
            <img
              src={project.screenshot}
              alt={`Screen capture of ${project.title}`}
              className="w-full h-full object-contain opacity-90 transition-transform duration-500 group-hover/screen:scale-105"
            />
            {/* Hover magnifying glass icon indicator */}
            <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/screen:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <ZoomIn className="h-6 w-6 text-white drop-shadow-md" />
            </div>
          </div>

          <div className="text-center space-y-1 pt-2">
            <span className="text-[7.5px] font-heading font-bold text-primary/70 tracking-[0.25em] uppercase block">
              ✦ {project.year}
            </span>
            <h4 className="text-2xl sm:text-3xl font-heading font-bold italic text-foreground dark:text-white leading-none tracking-tight">
              {project.title}
            </h4>
            <span className="text-[10px] font-heading font-bold text-primary tracking-wider uppercase block">
              {project.subtitle}
            </span>
          </div>

          <div className="billing-block-condensed text-[8.5px] text-foreground/45 dark:text-white/55 leading-relaxed text-center border-t border-border/30 dark:border-white/10 pt-4 mt-2 select-none uppercase">
            {project.technologies.join(" • ")}
          </div>
        </div>

        {/* --- BACK FACE: THE SYNOPSIS & ACTIONS --- */}
        <div className="absolute inset-0 w-full h-full rotate-y-180 backface-hidden rounded-3xl border border-primary/25 bg-card dark:bg-[#12070A] p-5 flex flex-col justify-between shadow-premium-lg text-left">
          <div className="border-b border-border/30 dark:border-white/10 pb-3">
            <h4 className="text-xl font-heading font-bold italic text-foreground dark:text-white leading-tight">
              {project.title}
            </h4>
            <span className="text-[9px] font-heading font-bold text-primary uppercase tracking-wider block mt-0.5">
              Overview &amp; Details
            </span>
          </div>

          <div className="flex-1 py-4 space-y-4 overflow-y-auto scrollbar-thin">
            <div className="space-y-1">
              <strong className="text-[9px] font-heading font-bold text-primary tracking-widest uppercase block">
                Overview
              </strong>
              <p className="text-[11px] leading-relaxed text-muted-foreground">
                {project.overview}
              </p>
            </div>

            <div className="space-y-1">
              <strong className="text-[9px] font-heading font-bold text-primary tracking-widest uppercase block">
                Core Functionality
              </strong>
              <p className="text-[11px] leading-relaxed text-muted-foreground">
                {getAppDetailsShort(project.id, project.overview)}
              </p>
            </div>

            <div className="space-y-1">
              <strong className="text-[9px] font-heading font-bold text-primary tracking-widest uppercase block">
                Technologies
              </strong>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.technologies.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded text-[8px] font-bold bg-muted/50 dark:bg-white/5 border border-border/50 dark:border-white/10 text-muted-foreground uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-border/30 dark:border-white/10 pt-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center text-[10px] font-heading font-bold text-foreground dark:text-white hover:text-primary tracking-widest uppercase inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-border/40 dark:border-white/10 bg-muted/20 dark:bg-white/5 hover:bg-primary/10 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                GitHub Source
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}

            <Link
              href={`/projects/${project.id}`}
              className="w-full text-center text-[10px] font-heading font-bold text-white hover:text-primary tracking-widest uppercase inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-primary/10 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              View Details
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [lightbox, setLightbox] = React.useState<{ src: string; title: string } | null>(null);

  const categories = ["All", "AI / ML", "Fullstack", "Mobile", "Web"];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "AI / ML") {
      // Only actual LLM/ML-based projects — excludes traditional CV (OpenCV)
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
      // Web projects: Spring Boot, Next.js, Laravel (web backend), Streamlit (web app)
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
    <section id="projects" className="py-24 px-6 sm:px-8 bg-background transition-colors duration-300">
      <div className="container mx-auto max-w-5xl space-y-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border/40">
          <div className="text-left space-y-2">
            <h2 className="text-xs font-heading font-bold uppercase tracking-wider text-primary italic">
              ✨ Portfolio
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading tracking-tight text-foreground leading-[1.05] font-normal italic">
              Featured Projects
            </h3>
            <p className="text-xs text-muted-foreground pt-1">
              Detailed breakdowns of product implementations, backend systems, and automated pipelines.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 bg-muted/40 p-1.5 rounded-2xl border border-border/60 w-fit h-fit self-start md:self-end shadow-xs">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-300 outline-none focus-visible:ring-1 focus-visible:ring-primary ${
                    active 
                      ? "bg-card text-foreground shadow-xs font-extrabold border border-border/30" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column widescreen movie poster card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => {
            const isOdd = index % 2 !== 0;
            return (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isOdd={isOdd}
                shouldReduceMotion={shouldReduceMotion}
                onViewImage={(src, title) => setLightbox({ src, title })}
              />
            );
          })}
        </div>
      </div>

      {/* Dynamic Animated Lightbox Modal */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-default"
          >
            {/* Close button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 z-10 h-9 w-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Close image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center gap-4"
            >
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="max-w-full max-h-[78vh] object-contain rounded-2xl shadow-premium-2xl border border-white/10"
              />
              <div className="text-white/80 text-[10px] font-mono tracking-widest uppercase bg-black/60 border border-white/10 px-4 py-2 rounded-full select-none shadow-md">
                {lightbox.title}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
