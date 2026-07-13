"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { navigationItems } from "@/data";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const [isOpen, setIsOpen] = React.useState(false);

  // Scroll visibility and dimensions tracking states
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(true);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Active section tracking
      const sections = navigationItems.map((item) => {
        const el = document.getElementById(item.href.substring(1));
        if (el) {
          const rect = el.getBoundingClientRect();
          return {
            id: item.href.substring(1),
            top: rect.top + window.scrollY - 180,
            bottom: rect.bottom + window.scrollY - 180,
          };
        }
        return null;
      }).filter(Boolean) as { id: string; top: number; bottom: number }[];

      const scrollPos = window.scrollY;
      const currentSection = sections.find(
        (sec) => scrollPos >= sec.top && scrollPos < sec.bottom
      );

      if (currentSection) {
        setActiveSection(currentSection.id);
      }

      // Navbar shrink & hide checks
      setIsScrolled(currentScrollY > 20);

      // Navbar hide check removed as per user request
      setIsScrolled(currentScrollY > 20);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  if (!mounted) return null;

  return (
    <motion.div
      animate={{
        y: 0, // Never hide
        scale: 1, // Keep scale constant
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 w-full"
    >
      <header className={`w-full transition-all duration-300 ${isScrolled ? "bg-card border-b border-border shadow-md" : "bg-transparent"}`}>
        <div className="flex h-16 items-center justify-between px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex-1 flex justify-start">
            <Link 
              href="#home" 
              className="flex items-center hover:opacity-85 transition-opacity focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1 outline-none text-2xl font-heading font-bold text-foreground italic"
            >
              R.
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
            {navigationItems.map((item) => {
              const id = item.href.substring(1);
              const isActive = activeSection === id;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-xs font-semibold tracking-wider transition-colors duration-200 hover:text-foreground py-1 outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-sm ${
                    isActive ? "text-foreground font-bold" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex-1 flex justify-end items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full w-8 h-8 sm:w-9 sm:h-9 border border-border/10 focus-visible:ring-2 focus-visible:ring-primary cursor-pointer hover:bg-muted/40"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-400" />
              ) : (
                <Moon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-700" />
              )}
            </Button>

            {/* Mobile Nav Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger 
                className="inline-flex items-center justify-center rounded-full w-8 h-8 sm:w-9 sm:h-9 md:hidden text-muted-foreground hover:text-foreground hover:bg-muted/50 focus-visible:ring-2 focus-visible:ring-primary outline-none cursor-pointer transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="h-4.5 w-4.5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] border-l border-border bg-background/95 backdrop-blur-md">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-8 py-8 h-full">
                  <Link
                    href="#home"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 font-heading font-bold text-sm tracking-tight px-3"
                  >
                    <Terminal className="h-4 w-4 text-primary" />
                    <span className="font-mono tracking-wider">Rafa'Na'ilah Septia</span>
                  </Link>
                  <div className="flex flex-col gap-1">
                    {navigationItems.map((item) => {
                      const id = item.href.substring(1);
                      const isActive = activeSection === id;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center px-4 h-11 text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors ${
                            isActive
                              ? "bg-primary/10 text-foreground font-bold"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          }`}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </motion.div>
  );
}
