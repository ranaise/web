"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

// Inline WhatsApp SVG brand icon
function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 5.054L2 22l5.125-1.343a9.925 9.925 0 004.877 1.28c5.507 0 9.99-4.479 9.992-9.985A9.993 9.993 0 0012.012 2zm6.059 14.154c-.266.75-1.306 1.349-1.782 1.405-.477.057-.945.275-3.053-.555-2.544-1.002-4.148-3.589-4.275-3.757-.127-.167-.927-1.233-.927-2.35 0-1.117.583-1.667.82-1.907.238-.24.52-.301.696-.301.176 0 .35.001.503.008c.162.008.38-.061.593.45.22.529.75 1.834.815 1.968.065.134.108.29.02.464-.088.176-.134.286-.266.44-.132.156-.277.348-.396.467-.132.132-.27.276-.118.536.152.26.677 1.116 1.452 1.808.997.89 1.835 1.166 2.096 1.296.26.13.41.108.563-.069.152-.176.65-.758.824-1.017.174-.258.348-.216.586-.128.238.089 1.516.715 1.777.846.26.13.435.195.498.307.065.112.065.65-.201 1.4z" />
    </svg>
  );
}

export function Contact() {
  const shouldReduceMotion = useReducedMotion();

  // Contact list targets from official CV data
  const contactLinks = [
    {
      name: "WhatsApp",
      label: "+62 882-1502-7255",
      href: "https://wa.me/6288215027255",
      icon: WhatsappIcon,
      color: "hover:border-[#25D366]/40 text-[#25D366] bg-[#25D366]/5",
    },
    {
      name: "Email",
      label: "rafasepti06@gmail.com",
      href: "mailto:rafasepti06@gmail.com",
      icon: Mail,
      color: "hover:border-primary/40 text-primary bg-primary/5",
    },
    {
      name: "LinkedIn",
      label: "linkedin.com/in/ranaise",
      href: "https://linkedin.com/in/ranaise/",
      icon: LinkedinIcon,
      color: "hover:border-[#0077B5]/40 text-[#0077B5] bg-[#0077B5]/5",
    },
    {
      name: "GitHub",
      label: "github.com/ranaise",
      href: "https://github.com/ranaise/",
      icon: GithubIcon,
      color: "hover:border-foreground/40 text-foreground bg-foreground/5",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 sm:px-8 bg-background transition-colors duration-300">
      <div className="container mx-auto max-w-4xl text-center space-y-16">
        
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto space-y-2">
          <h2 className="text-xs font-heading font-bold uppercase tracking-wider text-primary italic">
            ✨ Contact
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading tracking-tight text-foreground leading-[1.05] font-normal italic">
            Get in Touch
          </h3>
          <div className="h-0.5 w-8 bg-primary/40 mx-auto mt-2 rounded-full" />
          <p className="text-xs sm:text-sm text-muted-foreground pt-3 leading-relaxed max-w-[55ch] mx-auto">
            Direct access to my channels. Click any item below to message me, check repositories, or connect professionally.
          </p>
        </div>

        {/* Dynamic Recruiter Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={shouldReduceMotion ? {} : {
                  scale: 1.05,
                  y: -4,
                }}
                className={`relative group rounded-2xl p-6 solid-surface flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 border border-border/80 ${link.color} shadow-premium-sm`}
              >
                {/* Micro-glow background on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/3 to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Brand Icon wrapper */}
                <div className="p-3.5 rounded-2xl bg-card border border-border/85 flex items-center justify-center transition-all group-hover:scale-110 shadow-xs text-current">
                  <Icon className="h-6 w-6" />
                </div>

                <div className="space-y-1">
                  <span className="text-[9px] font-mono tracking-widest uppercase font-extrabold block text-muted-foreground">
                    {link.name}
                  </span>
                  <span className="text-[11px] font-semibold text-foreground tracking-tight truncate max-w-[140px] inline-flex items-center gap-1">
                    {link.name === "WhatsApp" ? "+6288215027255" : link.label.replace("https://", "")}
                    <ExternalLink className="h-3 w-3 text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
