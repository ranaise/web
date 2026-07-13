"use client";

import * as React from "react";
import { Award, Copy, Check, ExternalLink, Landmark, ZoomIn, ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { certificationsData } from "@/data";

function CertificateVectorPlaceholder({ title, issuer, date }: { title: string; issuer: string; date: string }) {
  return (
    <div className="relative w-full aspect-[4/3] bg-linear-to-tr from-amber-50/20 via-card/50 to-slate-100/20 rounded-2xl border border-amber-500/25 p-4 sm:p-6 flex flex-col justify-between overflow-hidden select-none shadow-inner">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1,2" />
          <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" />
          <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="absolute inset-2 sm:inset-3 border border-amber-500/10 pointer-events-none rounded-xl" />

      <div className="text-center space-y-1 z-10 pt-2">
        <span className="text-[7px] sm:text-[8px] font-mono tracking-widest uppercase text-amber-600/80 font-bold block">
          Certificate of Completion
        </span>
        <div className="h-[0.5px] w-12 bg-amber-500/20 mx-auto" />
      </div>

      <div className="text-center space-y-2 z-10 py-1">
        <span className="text-[8px] sm:text-[9px] text-muted-foreground italic font-serif">
          This is proudly presented to
        </span>
        <h5 className="text-[12px] sm:text-[14px] font-heading font-extrabold text-foreground tracking-tight">
          Rafa Na&apos;ilah Septia
        </h5>
        <span className="text-[8px] sm:text-[9px] text-muted-foreground leading-normal block max-w-[28ch] mx-auto">
          for successfully finishing all curricula requirements for
        </span>
        <h6 className="text-[10px] sm:text-[11px] font-mono font-bold text-primary max-w-[32ch] mx-auto leading-snug">
          {title}
        </h6>
      </div>

      <div className="flex items-end justify-between px-3 sm:px-5 pb-2 z-10 text-[7px] sm:text-[8px] font-mono">
        <div className="space-y-0.5 text-left">
          <span className="text-muted-foreground block">ISSUER</span>
          <span className="font-bold text-foreground">{issuer}</span>
        </div>

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 shadow-xs scale-90 sm:scale-100">
          <Award className="h-4.5 w-4.5" />
        </div>

        <div className="space-y-0.5 text-right">
          <span className="text-muted-foreground block">COMPLETED</span>
          <span className="font-bold text-foreground">{date}</span>
        </div>
      </div>
    </div>
  );
}

function CertificationImage({ 
  src, 
  alt, 
  title, 
  issuer, 
  date 
}: { 
  src: string; 
  alt: string; 
  title: string; 
  issuer: string; 
  date: string;
}) {
  const [error, setError] = React.useState(false);

  if (error) {
    return <CertificateVectorPlaceholder title={title} issuer={issuer} date={date} />;
  }

  return (
    <div className="w-full relative">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-background/50 shadow-premium-md group/img">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-105"
          onError={() => setError(true)}
        />
        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <ZoomIn className="h-6 w-6 text-white drop-shadow-md" />
        </div>
      </div>
    </div>
  );
}

function WidescreenTicketCard({ 
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
    if (!cert.credentialId) return;
    try {
      await navigator.clipboard.writeText(cert.credentialId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="w-full relative overflow-hidden p-6 sm:p-10 solid-surface rounded-3xl border border-primary/20 bg-card/45 shadow-premium-xl flex flex-col md:flex-row gap-8 items-center select-none">
      {/* Ticket Notches */}
      <div className="ticket-notch-left hidden md:block" />
      <div className="ticket-notch-right hidden md:block" />

      {/* Left Column: Certificate Image preview (clickable to trigger lightbox) */}
      <div 
        className="w-full md:w-[48%] flex justify-center cursor-zoom-in shrink-0"
        onClick={() => onViewImage(cert.image, `${cert.issuer} - ${cert.title}`)}
      >
        <CertificationImage
          src={cert.image}
          alt={`Completion certificate for ${cert.title}`}
          title={cert.title}
          issuer={cert.issuer}
          date={cert.date}
        />
      </div>

      {/* Right Column: Details text & Verification tools */}
      <div className="flex-1 space-y-5 text-left w-full">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[10px] font-heading font-extrabold text-primary tracking-widest uppercase">
            <span>✦ CERTIFICATION</span>
            <span>✧</span>
            <span>{cert.date}</span>
          </div>
          
          <h4 className="text-xl sm:text-2xl font-heading font-bold text-foreground tracking-tight leading-tight">
            {cert.title}
          </h4>
        </div>

        <div className="space-y-2 text-xs text-muted-foreground font-semibold border-t border-b border-dashed border-primary/20 py-3">
          <div className="flex items-center gap-2.5">
            <Landmark className="h-4 w-4 text-primary shrink-0" />
            <span>ISSUER: <strong className="text-foreground">{cert.issuer}</strong></span>
          </div>
          <div className="flex items-center gap-2.5 mt-1.5">
            <Calendar className="h-4 w-4 text-primary shrink-0" />
            <span>COMPLETED: <strong className="text-foreground">{cert.date}</strong></span>
          </div>
        </div>

        {/* Foot actions */}
        <div className="space-y-3 pt-2">
          {cert.credentialId && cert.credentialId !== "N/A" && (
            <div className="flex items-center justify-between gap-3 bg-muted/40 p-2.5 rounded-xl border border-border/50 max-w-md">
              <div className="space-y-0.5 truncate">
                <span className="text-[7.5px] font-mono text-muted-foreground uppercase tracking-wider block">
                  Credential Code
                </span>
                <span className="text-[9.5px] font-mono font-bold text-foreground block truncate">
                  {cert.credentialId}
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="p-2 rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground transition-all hover:bg-muted select-none cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-primary shrink-0"
                title="Copy ID"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
          )}

          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 text-[10px] font-bold text-muted-foreground hover:text-primary tracking-wider uppercase rounded-xl border border-border hover:border-primary/20 bg-card hover:bg-primary/5 transition-all outline-none focus-visible:ring-1 focus-visible:ring-primary"
          >
            Verify Credential URL
            <ExternalLink className="h-3 w-3" />
          </a>
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
      setActiveIndex(0); // loop wrap around to the first slide
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(certificationsData.length - 1); // loop wrap around to the last slide
    }
  };

  return (
    <section id="certifications" className="py-24 px-6 sm:px-8 bg-background transition-colors duration-300">
      <div className="container mx-auto max-w-5xl space-y-12">
        {/* Section Heading */}
        <div className="max-w-2xl text-left space-y-2 pb-4 border-b border-border/40">
          <h2 className="text-xs font-heading font-bold uppercase tracking-wider text-primary italic">
            ✨ Credentials
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading tracking-tight text-foreground leading-[1.05] font-normal italic">
            Certifications
          </h3>
          <p className="text-xs text-muted-foreground pt-1">
            Swipe or use arrows to slide through certifications. Click certificates to zoom.
          </p>
        </div>

        {/* 1-by-1 Widescreen Slide Carousel with looping wrap around */}
        <div className="relative w-full flex flex-col items-center gap-5">

          <div className="relative w-full flex items-center justify-between gap-4 sm:gap-6">

            {/* Left Button — desktop only, hidden on mobile */}
            <button
              onClick={handlePrev}
              className="hidden sm:flex p-3 rounded-full border border-border bg-card text-muted-foreground hover:text-primary hover:scale-105 transition-all outline-none cursor-pointer focus-visible:ring-1 focus-visible:ring-primary shrink-0 z-10"
              aria-label="Previous certificate"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Viewport — full width on mobile (no side buttons) */}
            <div className="flex-1 overflow-hidden py-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(event, info) => {
                    if (info.offset.x < -50) {
                      handleNext();
                    } else if (info.offset.x > 50) {
                      handlePrev();
                    }
                  }}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="w-full cursor-grab active:cursor-grabbing"
                >
                  <WidescreenTicketCard
                    cert={certificationsData[activeIndex]}
                    onViewImage={(src, title) => setLightbox({ src, title })}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Button — desktop only, hidden on mobile */}
            <button
              onClick={handleNext}
              className="hidden sm:flex p-3 rounded-full border border-border bg-card text-muted-foreground hover:text-primary hover:scale-105 transition-all outline-none cursor-pointer focus-visible:ring-1 focus-visible:ring-primary shrink-0 z-10"
              aria-label="Next certificate"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

          </div>

          {/* Bottom nav: mobile arrows + dots */}
          <div className="flex items-center justify-center gap-4">
            {/* Prev — mobile only */}
            <button
              onClick={handlePrev}
              className="sm:hidden p-2.5 rounded-full border border-border bg-card text-muted-foreground hover:text-primary transition-all outline-none cursor-pointer"
              aria-label="Previous certificate"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Dots */}
            <div className="flex gap-2.5 justify-center">
              {certificationsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 outline-none ${
                    activeIndex === i
                      ? "w-7 bg-primary"
                      : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Next — mobile only */}
            <button
              onClick={handleNext}
              className="sm:hidden p-2.5 rounded-full border border-border bg-card text-muted-foreground hover:text-primary transition-all outline-none cursor-pointer"
              aria-label="Next certificate"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
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
