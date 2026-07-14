"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
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
  const contactLinks = [
    {
      name: "WhatsApp",
      label: "+62 882-1502-7255",
      href: "https://wa.me/6288215027255",
      icon: WhatsappIcon,
    },
    {
      name: "Email",
      label: "rafasepti06@gmail.com",
      href: "mailto:rafasepti06@gmail.com",
      icon: Mail,
    },
    {
      name: "LinkedIn",
      label: "linkedin.com/in/ranaise",
      href: "https://linkedin.com/in/ranaise/",
      icon: LinkedinIcon,
    },
    {
      name: "GitHub",
      label: "github.com/ranaise",
      href: "https://github.com/ranaise/",
      icon: GithubIcon,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 sm:px-8 bg-muted/30 border-t border-border/40">
      <div className="container mx-auto max-w-6xl space-y-16">
        
        {/* Section Heading */}
        <div className="max-w-2xl text-left space-y-4">
          <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-primary">
            05. Initialization
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground">
            Connect
          </h3>
          <p className="text-base text-muted-foreground max-w-[60ch]">
            Direct access channels for system design discussions, architectural consultations, and professional inquiries.
          </p>
        </div>

        {/* Minimal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative bg-card p-6 flex flex-col items-start gap-8 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <div className="w-full flex justify-between items-start">
                  <Icon className="h-6 w-6 opacity-70 group-hover:opacity-100 transition-opacity" />
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                <div className="space-y-1 mt-4">
                  <span className="text-[10px] font-mono tracking-widest uppercase font-bold block text-muted-foreground group-hover:text-primary-foreground/70 transition-colors">
                    {link.name}
                  </span>
                  <span className="text-sm font-mono font-bold truncate block w-full max-w-full">
                    {link.label.replace("https://", "")}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Minimal Footer Stamp */}
        <div className="pt-16 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Rafa Septian.</p>
          <p>System Online &bull; All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
}
