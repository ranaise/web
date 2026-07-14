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


export function Experience() {
  const [lightbox, setLightbox] = React.useState<{ src: string; title: string } | null>(null);

  return (
    <section id="experience" className="relative py-24 px-6 md:px-12 bg-transparent">
      {/* Decorative vertical line connecting from About */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border/40 hidden sm:block" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl text-left space-y-6 mb-16 pl-0 sm:pl-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground">
            Experience &amp; Education
          </h2>
        </div>

        <div className="pl-0 sm:pl-8">
          <div className="max-w-4xl relative border-l border-border/60 ml-3 sm:ml-0">
            
            {/* Work Experience */}
            <div className="mb-16">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-primary" />
              <div className="pl-8 pb-4">
                <h3 className="text-sm font-mono font-bold text-foreground uppercase tracking-widest mb-8 text-primary">
                  Professional Experience
                </h3>
                
                <div className="space-y-12">
                  {experienceData.map((item, index) => (
                    <div key={item.id} className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                        <h4 className="text-2xl font-heading font-bold text-foreground">
                          {item.company}
                        </h4>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                        <span className="font-bold text-foreground">{item.role}</span>
                        <span>&bull;</span>
                        <span>{item.duration}</span>
                        {item.location && (
                          <>
                            <span>&bull;</span>
                            <span>{item.location}</span>
                          </>
                        )}
                      </div>

                      <div className="text-base text-muted-foreground leading-relaxed pt-2">
                        <ul className="space-y-3">
                          {item.achievements.map((ach, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="text-primary shrink-0 mt-1">&rarr;</span>
                              <span className="font-sans">{renderBoldText(ach)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {item.photos && item.photos.length > 0 && (
                        <div className="pt-6">
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {item.photos.map((src, idx) => (
                              <div 
                                key={idx}
                                onClick={() => setLightbox({ src, title: `${item.company} - Photo ${idx + 1}` })}
                                className="group relative aspect-video bg-muted/40 cursor-pointer overflow-hidden rounded-lg"
                              >
                                <img 
                                  src={src} 
                                  alt={`Photo ${idx + 1}`} 
                                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-16">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-border" />
              <div className="pl-8 pb-4">
                <h3 className="text-sm font-mono font-bold text-foreground uppercase tracking-widest mb-8 text-muted-foreground">
                  Education
                </h3>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-heading font-bold text-foreground">
                    {educationDetails.institution}
                  </h4>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    <span className="font-bold text-foreground">{educationDetails.degree}</span>
                    <span>&bull;</span>
                    <span>2023 - Present</span>
                  </div>
                  
                  <div className="pt-2 space-y-4">
                    <p className="text-base text-foreground font-medium font-sans">
                      Current GPA: {educationDetails.gpa}
                    </p>
                    <ul className="space-y-2 pt-1 text-muted-foreground">
                      {educationDetails.awards.map((award, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-muted-foreground shrink-0 mt-0.5">&bull;</span>
                          <span className="font-sans text-sm">{award}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Organizations */}
            <div>
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-border" />
              <div className="pl-8 pb-4">
                <h3 className="text-sm font-mono font-bold text-foreground uppercase tracking-widest mb-8 text-muted-foreground">
                  Organizations
                </h3>
                
                <div className="space-y-12">
                  {orgExperienceData.map((item, index) => (
                    <div key={item.id} className="space-y-4">
                      <h4 className="text-xl font-heading font-bold text-foreground">
                        {item.organization}
                      </h4>
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                        <span className="font-bold text-foreground">{item.role}</span>
                        <span>&bull;</span>
                        <span>{item.duration}</span>
                      </div>

                      <div className="text-sm text-muted-foreground leading-relaxed pt-2">
                        <ul className="space-y-2">
                          {item.tasks.map((task, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="text-muted-foreground shrink-0 mt-0.5">&bull;</span>
                              <span className="font-sans">{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
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
              className="absolute top-4 right-4 z-10 h-10 w-10 bg-muted/80 flex items-center justify-center text-foreground hover:bg-muted transition-colors rounded-full"
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
              <div className="p-2 bg-card rounded-lg shadow-2xl">
                <img
                  src={lightbox.src}
                  alt={lightbox.title}
                  className="max-w-full max-h-[75vh] object-contain rounded"
                />
              </div>
              <div className="text-foreground text-xs font-mono tracking-widest uppercase bg-card px-4 py-2 rounded-full shadow-sm">
                {lightbox.title}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
