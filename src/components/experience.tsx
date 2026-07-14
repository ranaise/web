"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, GitCommit, Link, Image as ImageIcon, Briefcase, GraduationCap } from "lucide-react";
import { experienceData, orgExperienceData, educationDetails } from "@/data";

function renderBoldText(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="text-foreground font-semibold">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}

function LogEntry({
  version,
  title,
  subtitle,
  date,
  location,
  body,
  attachments,
  onViewImage
}: {
  version: string;
  title: string;
  subtitle: string;
  date: string;
  location?: string;
  body: React.ReactNode;
  attachments?: string[];
  onViewImage?: (src: string, title: string) => void;
}) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0 border-l border-border/60">
      {/* Node / Commit Dot */}
      <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-background border-2 border-primary" />
      
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
          <span className="text-xs font-mono font-bold text-primary shrink-0 bg-primary/10 px-2 py-0.5 rounded">
            {version}
          </span>
          <h4 className="text-xl font-heading font-bold text-foreground">
            {title}
          </h4>
        </div>
        
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <Terminal className="h-3 w-3" />
            {subtitle}
          </span>
          <span>&bull;</span>
          <span>{date}</span>
          {location && (
            <>
              <span>&bull;</span>
              <span>{location}</span>
            </>
          )}
        </div>

        <div className="text-sm text-muted-foreground leading-relaxed pt-2">
          {body}
        </div>

        {attachments && attachments.length > 0 && onViewImage && (
          <div className="pt-4 space-y-2">
            <div className="text-xs font-mono text-muted-foreground uppercase flex items-center gap-2 border-b border-border/40 pb-2">
              <Link className="h-3 w-3" />
              Attached Assets ({attachments.length})
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              {attachments.map((src, idx) => (
                <div 
                  key={idx}
                  onClick={() => onViewImage(src, `${title} - Asset ${idx + 1}`)}
                  className="group relative aspect-video bg-muted/40 border border-border/60 cursor-pointer overflow-hidden rounded-md"
                >
                  <img 
                    src={src} 
                    alt={`Asset ${idx + 1}`} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ImageIcon className="h-5 w-5 text-white" />
                  </div>
                  <div className="absolute bottom-1 right-2 text-[9px] font-mono text-white/70 bg-black/50 px-1 rounded">
                    IMG_{idx+1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Experience() {
  const [lightbox, setLightbox] = React.useState<{ src: string; title: string } | null>(null);

  return (
    <section id="experience" className="py-24 px-6 sm:px-8 bg-muted/30 border-t border-border/40">
      <div className="container mx-auto max-w-6xl space-y-16">
        
        {/* Section Heading */}
        <div className="max-w-2xl text-left space-y-4">
          <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-primary">
            02. Execution History
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground">
            System Logs
          </h3>
          <p className="text-base text-muted-foreground max-w-[60ch]">
            A chronological timeline of my professional experience, organizational involvement, and educational milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
          
          {/* Left Column: Work Experience */}
          <div className="space-y-8">
            <h4 className="text-sm font-mono font-bold text-foreground uppercase flex items-center gap-2 border-b border-border pb-3">
              <Briefcase className="h-4 w-4 text-primary" />
              Professional Log
            </h4>
            
            <div className="pt-4">
              {experienceData.map((item, index) => (
                <LogEntry
                  key={item.id}
                  version={`v1.${experienceData.length - index}.0`}
                  title={item.company}
                  subtitle={item.role}
                  date={item.duration}
                  location={item.location}
                  attachments={item.photos}
                  onViewImage={(src, title) => setLightbox({ src, title })}
                  body={
                    <ul className="space-y-3">
                      {item.achievements.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <GitCommit className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{renderBoldText(ach)}</span>
                        </li>
                      ))}
                    </ul>
                  }
                />
              ))}
            </div>
          </div>

          {/* Right Column: Education & Organizations */}
          <div className="space-y-12">
            
            {/* Education */}
            <div className="space-y-8">
              <h4 className="text-sm font-mono font-bold text-foreground uppercase flex items-center gap-2 border-b border-border pb-3">
                <GraduationCap className="h-4 w-4 text-primary" />
                Academic Log
              </h4>
              
              <div className="pt-4">
                <LogEntry
                  version="v0.9.0"
                  title={educationDetails.institution}
                  subtitle={educationDetails.degree}
                  date="2023 - Present"
                  body={
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 bg-background border border-border px-3 py-1 text-xs font-mono font-bold text-foreground rounded">
                        Current GPA: {educationDetails.gpa}
                      </div>
                      <div className="space-y-2">
                        <span className="text-xs font-mono uppercase text-muted-foreground font-bold border-b border-border/40 pb-1 block">Awards &amp; Scholarships</span>
                        <ul className="space-y-2 pt-1">
                          {educationDetails.awards.map((award, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <GitCommit className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              <span>{award}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  }
                />
              </div>
            </div>

            {/* Organizations */}
            <div className="space-y-8">
              <h4 className="text-sm font-mono font-bold text-foreground uppercase flex items-center gap-2 border-b border-border pb-3">
                <Terminal className="h-4 w-4 text-primary" />
                Organization Log
              </h4>
              
              <div className="pt-4">
                {orgExperienceData.map((item, index) => (
                  <LogEntry
                    key={item.id}
                    version={`v0.${orgExperienceData.length - index}.0`}
                    title={item.organization}
                    subtitle={item.role}
                    date={item.duration}
                    body={
                      <ul className="space-y-3">
                        {item.tasks.map((task, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <GitCommit className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    }
                  />
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-default"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 z-10 h-10 w-10 bg-muted/80 border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors rounded"
              aria-label="Close image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              <div className="p-2 border border-border bg-card rounded-lg shadow-2xl">
                <img
                  src={lightbox.src}
                  alt={lightbox.title}
                  className="max-w-full max-h-[75vh] object-contain"
                />
              </div>
              <div className="text-foreground text-xs font-mono tracking-widest uppercase bg-card border border-border px-4 py-2 rounded-sm shadow-sm">
                {lightbox.title}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
