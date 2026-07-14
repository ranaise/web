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
    <section id="contact" className="relative py-32 px-6 md:px-12 bg-transparent overflow-hidden">
      {/* Decorative vertical line connecting from Certifications */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border/40 hidden sm:block" />

      {/* Converging decorative lines */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full stroke-border/40 fill-none" strokeWidth="0.5">
          <path d="M100 0 L0 100" />
          <path d="M100 20 L20 100" />
          <path d="M100 40 L40 100" />
          <path d="M100 60 L60 100" />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        <div className="max-w-3xl text-left space-y-6 mb-20 pl-0 sm:pl-8">
          <h2 className="text-5xl md:text-6xl font-heading font-bold tracking-tight text-foreground">
            Let's build something <span className="text-primary italic font-serif tracking-normal pr-2">useful.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-[50ch] leading-relaxed">
            I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="pt-4">
            <a href="mailto:rafasepti06@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-mono font-bold uppercase tracking-widest rounded-full hover:bg-foreground/90 transition-colors shadow-premium-sm">
              <Mail className="h-4 w-4" />
              Say Hello
            </a>
          </div>
        </div>

        <div className="pl-0 sm:pl-8 pt-12 border-t border-border/40">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group flex flex-col gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:bg-muted/30 transition-colors"
                >
                  <div className="flex justify-between items-start w-full">
                    <Icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-xs font-mono uppercase tracking-widest text-muted-foreground">
                      {link.name}
                    </span>
                    <span className="block text-sm font-semibold text-foreground truncate">
                      {link.label.replace("https://", "")}
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Minimal Footer Stamp */}
        <div className="pl-0 sm:pl-8 pt-24 mt-24 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Rafa'Na'ilah Septia.</p>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
          </div>
        </div>
      </div>
    </section>
  );
}
