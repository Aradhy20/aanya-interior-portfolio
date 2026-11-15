"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Mail, Instagram, Youtube, BookOpen } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const NAV_LINKS = [
  { href: "#about", label: "About", number: "01" },
  { href: "#work", label: "Selected Work", number: "02" },
  { href: "#skills", label: "Tools & Focus", number: "03" },
  { href: "#approach", label: "Design Approach", number: "04" },
  { href: "#archive", label: "Portfolio Book", number: "05" },
  { href: "#contact", label: "Contact & Connect", number: "06" }
];

export default function MobileMenuDrawer({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    const orig = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = orig;
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="mobile-drawer-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="mobile-drawer-sheet"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-drawer-header">
              <div className="brand">
                <span className="brand-mark">A.</span>
                <span className="brand-copy">
                  {SITE_CONFIG.name.toUpperCase()}
                  <small>{SITE_CONFIG.role.toUpperCase()}</small>
                </span>
              </div>
              <button
                type="button"
                className="mobile-drawer-close"
                onClick={onClose}
                aria-label="Close navigation menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="mobile-drawer-nav" aria-label="Mobile Navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={onClose}
                >
                  <span className="mobile-nav-num">{link.number}</span>
                  <span className="mobile-nav-label">{link.label}</span>
                  <ArrowUpRight size={16} className="mobile-nav-arrow" />
                </a>
              ))}
            </nav>

            <div className="mobile-drawer-footer">
              <a
                href={SITE_CONFIG.portfolioBookUrl}
                target="_blank"
                rel="noreferrer"
                className="button button-dark mobile-book-btn"
                onClick={onClose}
              >
                <BookOpen size={15} />
                <span>Open Original Portfolio Book</span>
                <ArrowUpRight size={14} />
              </a>

              <div className="mobile-drawer-socials">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  aria-label="Email Aanya Jain"
                  className="drawer-social-link"
                >
                  <Mail size={16} />
                  <span>Email</span>
                </a>
                <a
                  href={SITE_CONFIG.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram profile"
                  className="drawer-social-link"
                >
                  <Instagram size={16} />
                  <span>Instagram</span>
                </a>
                <a
                  href={SITE_CONFIG.youtube}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube channel"
                  className="drawer-social-link"
                >
                  <Youtube size={16} />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
