"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/shared/Button";

export function Navbar(): React.ReactElement {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const desktopItems = NAV_ITEMS.filter((item) => item.href !== "/kontaktai");

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-40 h-20 flex items-center transition-all duration-300",
          isScrolled
            ? "bg-charcoal/95 backdrop-blur-lg shadow-lg shadow-black/10"
            : "bg-transparent",
        )}
      >
        <div className="max-w-[1200px] mx-auto px-6 w-full grid grid-cols-[auto_1fr_auto] items-center">
          {/* Logo */}
          <a href="/" className="shrink-0">
            <Image
              src="/images/arversa-logo.png"
              alt="Arversa"
              width={180}
              height={52}
              className="h-12 w-auto"
              priority
            />
          </a>

          {/* Desktop nav — centered */}
          <nav className="hidden md:flex items-center justify-center gap-1" ref={dropdownRef}>
            {desktopItems.map((item) => {
              if (item.children) {
                const isOpen = openDropdown === item.label;
                return (
                  <div key={item.label} className="relative">
                    <button
                      onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                      className={cn(
                        "relative px-3.5 py-2 text-sm font-medium transition-colors flex items-center gap-1",
                        "text-white/80 hover:text-white group",
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          isOpen && "rotate-180",
                        )}
                      />
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-0 mt-1 w-56 bg-charcoal border border-white/10 rounded-xl shadow-xl shadow-black/20 overflow-hidden"
                        >
                          {item.children.map((child) => (
                            <a
                              key={child.href + child.label}
                              href={child.href}
                              onClick={() => setOpenDropdown(null)}
                              className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                            >
                              {child.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3.5 py-2 text-sm font-medium transition-colors",
                    "text-white/80 hover:text-white",
                    "group",
                  )}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              );
            })}
          </nav>

          {/* Right side: CTA button (desktop) + hamburger (mobile) */}
          <div className="flex items-center justify-end gap-2">
            <div className="hidden md:block">
              <Button href="/kontaktai" size="sm">
                Susisiekite
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden w-11 h-11 flex items-center justify-center rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Atidaryti meniu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
