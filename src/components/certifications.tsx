"use client";

import * as React from "react";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { certificationsData } from "@/data";


export function Certifications() {
  const [lightbox, setLightbox] = React.useState<{ src: string; title: string } | null>(null);

  return (
    <section id="certifications" className="relative py-24 px-6 md:px-12 bg-transparent">
      {/* Decorative vertical line connecting from Skills */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border/40 hidden sm:block" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl text-left space-y-6 mb-16 pl-0 sm:pl-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground">
            Certifications
          </h2>
        </div>

        <div className="pl-0 sm:pl-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-colors shadow-sm hover:shadow-premium-sm"
              >
                <div 
                  className="w-full relative aspect-[16/9] overflow-hidden bg-muted cursor-zoom-in"
                  onClick={() => setLightbox({ src: cert.image, title: `${cert.issuer} - ${cert.title}` })}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur text-foreground text-[10px] font-mono font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                    {cert.date}
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-6 md:p-8">
                  <h4 className="text-xl font-heading font-bold text-foreground mb-4">
                    {cert.title}
                  </h4>
                  
                  <div className="space-y-4 mb-6 text-sm font-mono text-muted-foreground uppercase tracking-wider">
                    <div>
                      <span className="block text-[10px] mb-1 font-bold text-foreground">Issuer</span>
                      {cert.issuer}
                    </div>
                    <div>
                      <span className="block text-[10px] mb-1 font-bold text-foreground">Credential ID</span>
                      <span className="truncate block w-full" title={cert.credentialId || ""}>
                        {cert.credentialId !== "N/A" ? cert.credentialId : "Not Provided"}
                      </span>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
                    {cert.link ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors"
                      >
                        Verify
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : <span />}
                  </div>
                </div>
              </motion.div>
            ))}
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
