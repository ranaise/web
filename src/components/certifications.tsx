"use client";

import * as React from "react";
import { Copy, Check, ExternalLink, ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { certificationsData } from "@/data";

function CertificationImage({ 
  src, 
  alt, 
}: { 
  src: string; 
  alt: string; 
}) {
  const [error, setError] = React.useState(false);

  return (
    <div className="w-full relative aspect-[4/3] overflow-hidden border border-border/60 bg-muted/20 group/img">
      {!error ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-105"
          onError={() => setError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-card p-4 text-center">
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block">Image Not Found</span>
        </div>
      )}
    </div>
  );
}

function CertificationCard({ 
  cert, 
  onViewImage 
}: { 
  cert: typeof certificationsData[0]; 
  onViewImage: (src: string, title: string) => void;
}) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!cert.credentialId || cert.credentialId === "N/A") return;
    try {
      await navigator.clipboard.writeText(cert.credentialId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row bg-card border border-border/60 hover:border-primary/40 transition-colors">
      
      {/* Left Column: Image */}
      <div 
        className="w-full md:w-5/12 border-b md:border-b-0 md:border-r border-border/60 p-4 sm:p-6 cursor-zoom-in"
        onClick={() => onViewImage(cert.image, `${cert.issuer} - ${cert.title}`)}
      >
        <CertificationImage
          src={cert.image}
          alt={`Completion certificate for ${cert.title}`}
        />
      </div>

      {/* Right Column: Details */}
      <div className="flex-1 flex flex-col justify-between p-6 sm:p-8">
        <div className="space-y-6">
          <div className="space-y-2 border-b border-border/40 pb-4">
            <div className="text-[10px] font-mono font-bold text-primary tracking-widest uppercase">
              {cert.date}
            </div>
            <h4 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
              {cert.title}
            </h4>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm font-mono text-muted-foreground uppercase tracking-wider">
            <div>
              <span className="block text-[10px] mb-1 font-bold">Issuer</span>
              <span className="text-foreground">{cert.issuer}</span>
            </div>
            <div>
              <span className="block text-[10px] mb-1 font-bold">Credential ID</span>
              <span className="text-foreground truncate block max-w-full" title={cert.credentialId || ""}>
                {cert.credentialId !== "N/A" ? cert.credentialId : "Not Provided"}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-border/40 flex items-center justify-between gap-4">
          {cert.credentialId && cert.credentialId !== "N/A" && (
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors outline-none"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                  <span className="text-emerald-500">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Copy ID
                </>
              )}
            </button>
          )}

          {cert.link && (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors ml-auto"
            >
              Verify Credential
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function Certifications() {
  const [lightbox, setLightbox] = React.useState<{ src: string; title: string } | null>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleNext = () => {
    if (activeIndex < certificationsData.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(certificationsData.length - 1);
    }
  };

  return (
    <section id="certifications" className="py-24 px-6 sm:px-8 bg-muted/10 border-t border-border/40">
      <div className="container mx-auto max-w-6xl space-y-12">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-border/60">
          <div className="max-w-2xl text-left space-y-4">
            <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-primary">
              Credentials
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground">
              Certifications
            </h3>
            <p className="text-base text-muted-foreground">
              Official records of skill acquisition and standard verifications.
            </p>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            <button
              onClick={handlePrev}
              className="p-3 bg-card border border-border/60 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div className="px-4 py-2 font-mono text-xs font-bold bg-card border border-border/60 text-muted-foreground">
              {String(activeIndex + 1).padStart(2, '0')} / {String(certificationsData.length).padStart(2, '0')}
            </div>
            <button
              onClick={handleNext}
              className="p-3 bg-card border border-border/60 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="relative w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <CertificationCard
                cert={certificationsData[activeIndex]}
                onViewImage={(src, title) => setLightbox({ src, title })}
              />
            </motion.div>
          </AnimatePresence>
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
