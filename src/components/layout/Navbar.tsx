"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/shared/Button";

export function Navbar(): React.ReactElement {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <div className="max-w-[1200px] mx-auto px-6 w-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="font-heading text-2xl text-amber tracking-wide hover:text-amber-light transition-colors"
          >
            ARVERSA
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.filter((item) => item.href !== "/kontaktai").map(
              (item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3.5 py-2 text-sm font-medium transition-colors",
                    isScrolled
                      ? "text-white/80 hover:text-white"
                      : "text-white/80 hover:text-white",
                    "group",
                  )}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              ),
            )}

            {/* CTA button */}
            <div className="ml-3">
              <Button href="/kontaktai" size="sm">
                Susisiekite
              </Button>
            </div>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Atidaryti meniu"
          >
            <Menu className="w-6 h-6" />
          </button>
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
