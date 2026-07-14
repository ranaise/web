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
      <header className={`w-full transition-all duration-300 border-b ${isScrolled ? "bg-background/95 backdrop-blur-md border-border" : "bg-transparent border-transparent"}`}>
        <div className="flex h-16 md:h-20 items-center justify-between px-6 md:px-12 max-w-7xl mx-auto">
          
          <div className="flex-1 flex items-center">
            <Link 
              href="#home" 
              className="hover:text-primary transition-colors outline-none text-2xl font-heading font-bold text-foreground"
            >
              RN
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 justify-center flex-1">
            {navigationItems.map((item) => {
              const id = item.href.substring(1);
              const isActive = activeSection === id;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[12px] font-mono font-medium tracking-widest uppercase transition-colors duration-200 outline-none hover:text-foreground ${
                    isActive ? "text-foreground font-bold" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Center active section or name */}
          <div className="flex md:hidden flex-1 justify-center items-center">
            <span className="text-[12px] font-mono font-bold tracking-widest uppercase text-foreground">
              {activeSection === "home" ? "Rafa'Na'ilah" : activeSection}
            </span>
          </div>

          {/* Actions */}
          <div className="flex-1 flex items-center justify-end gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-none w-10 h-10 hover:bg-muted/50 cursor-pointer transition-colors"
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
                className="flex items-center justify-center w-10 h-10 md:hidden text-foreground hover:bg-muted/50 outline-none cursor-pointer transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="top" className="w-full h-full bg-background/95 backdrop-blur-xl border-none p-0 flex flex-col justify-center items-center gap-8">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                {navigationItems.map((item) => {
                  const id = item.href.substring(1);
                  const isActive = activeSection === id;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-2xl font-heading font-bold transition-colors ${
                        isActive
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </motion.div>
  );
}
