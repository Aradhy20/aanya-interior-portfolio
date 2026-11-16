"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowUpRight,
  Mail,
  Youtube,
  Instagram,
  Download,
  BookOpen,
  Phone,
  MapPin
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const NAV_LINKS = [
  { href: "#about", label: "About & CV", number: "01" },
  { href: "#certifications", label: "Certifications & Achievements", number: "02" },
  { href: "#work", label: "Selected Projects", number: "03" },
  { href: "#skills", label: "Software & Capabilities", number: "04" },
  { href: "#approach", label: "Design Approach", number: "05" },
  { href: "#archive", label: "Portfolio Book & QR", number: "06" },
  { href: "#contact", label: "Contact & Resume", number: "07" }
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
              <div className="mobile-action-buttons">
                <a
                  href={SITE_CONFIG.resumeDownloadUrl}
                  download="Aanya-Jain-Resume.pdf"
                  className="button button-dark mobile-btn"
                  onClick={onClose}
                >
                  <Download size={15} />
                  <span>Download Resume (PDF)</span>
                </a>
                <a
                  href={SITE_CONFIG.portfolioBookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-light mobile-btn"
                  onClick={onClose}
                >
                  <BookOpen size={15} />
                  <span>Open Full Portfolio</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>

              <div className="mobile-location-tag">
                <MapPin size={12} /> {SITE_CONFIG.fullLocation}
              </div>

              <div className="mobile-drawer-socials">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  aria-label="Email Aanya Jain"
                  className="drawer-social-link"
                >
                  <Mail size={15} />
                  <span>Email</span>
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, "")}`}
                  aria-label="Call Aanya Jain"
                  className="drawer-social-link"
                >
                  <Phone size={15} />
                  <span>Call</span>
                </a>
                <a
                  href={SITE_CONFIG.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`YouTube channel ${SITE_CONFIG.youtubeDisplayName}`}
                  className="drawer-social-link"
                >
                  <Youtube size={15} />
                  <span>YouTube</span>
                </a>
                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram profile"
                  className="drawer-social-link"
                >
                  <Instagram size={15} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
