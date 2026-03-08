"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail } from "lucide-react";
import { NAV_ITEMS, COMPANY } from "@/lib/constants";
import { formatPhone } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const EASE = [0.22, 1, 0.36, 1] as const;

const menuVariants = {
  closed: {
    opacity: 0,
    transition: { duration: 0.3, ease: EASE },
  },
  open: {
    opacity: 1,
    transition: { duration: 0.3, ease: EASE },
  },
};

const itemVariants = {
  closed: { opacity: 0, y: 20 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.06,
      duration: 0.4,
      ease: EASE,
    },
  }),
};

export function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps): React.ReactElement {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="fixed inset-0 z-50 bg-charcoal flex flex-col"
        >
          {/* Close button */}
          <div className="flex justify-end p-6">
            <button
              onClick={onClose}
              className="w-12 h-12 flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Uždaryti meniu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Nav items */}
          <nav className="flex-1 flex flex-col items-center justify-center gap-6">
            {NAV_ITEMS.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                custom={i}
                variants={itemVariants}
                initial="closed"
                animate="open"
                exit="closed"
                onClick={onClose}
                className="text-2xl font-heading text-white/90 hover:text-amber transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Contact info at bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="p-8 flex flex-col items-center gap-3 border-t border-white/10"
          >
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2.5 text-white/70 hover:text-amber transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{formatPhone(COMPANY.phone)}</span>
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-2.5 text-white/70 hover:text-amber transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>{COMPANY.email}</span>
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
