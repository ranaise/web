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

      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  if (!mounted) return null;

  return (
    <motion.div
      animate={{ y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 w-full"
    >
      <header className={`w-full transition-all duration-300 border-b ${isScrolled ? "bg-background/95 backdrop-blur-sm border-border" : "bg-transparent border-transparent"}`}>
        <div className="flex h-14 md:h-16 items-stretch justify-between px-6 md:px-12 max-w-7xl mx-auto">
          
          <div className="flex items-center">
            <Link 
              href="#home" 
              className="flex items-center hover:text-primary transition-colors focus-visible:ring-1 focus-visible:ring-primary outline-none text-2xl font-heading font-bold text-foreground"
            >
              R.
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-stretch gap-px bg-border/40 ml-8">
            {navigationItems.map((item) => {
              const id = item.href.substring(1);
              const isActive = activeSection === id;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-6 text-[11px] font-mono font-bold tracking-widest uppercase transition-colors duration-200 outline-none focus-visible:ring-inset focus-visible:ring-1 focus-visible:ring-primary bg-background ${
                    isActive ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground border-b-2 border-transparent hover:bg-muted/30"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4 ml-auto">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-none w-10 h-10 border border-transparent hover:border-border/60 focus-visible:ring-1 focus-visible:ring-primary cursor-pointer transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-primary" />
              ) : (
                <Moon className="h-4 w-4 text-primary" />
              )}
            </Button>

            {/* Mobile Nav Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger 
                className="flex items-center justify-center w-10 h-10 md:hidden text-muted-foreground hover:text-foreground border border-transparent hover:border-border/60 focus-visible:ring-1 focus-visible:ring-primary outline-none cursor-pointer transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] border-l border-border bg-background/95 backdrop-blur-md p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-border/60">
                    <Link
                      href="#home"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 font-heading font-bold text-sm tracking-tight"
                    >
                      <Terminal className="h-4 w-4 text-primary" />
                      <span className="font-mono tracking-wider">SYSTEM_NAV</span>
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    {navigationItems.map((item) => {
                      const id = item.href.substring(1);
                      const isActive = activeSection === id;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center px-6 py-4 text-[11px] font-mono font-bold uppercase tracking-widest border-b border-border/40 transition-colors ${
                            isActive
                              ? "bg-primary/5 text-primary border-l-4 border-l-primary"
                              : "text-muted-foreground hover:bg-muted/50 hover:text-foreground border-l-4 border-l-transparent"
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
