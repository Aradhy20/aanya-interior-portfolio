"use client";

import { useState } from "react";
import { Maximize2, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  badge?: string;
};

export default function ProjectImageViewer({ src, alt, caption, badge }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="project-detail-image-box">
        <div className="project-detail-image-inner">
          <img
            src={src}
            alt={alt}
            className="project-detail-main-img"
            loading="eager"
            width={1200}
            height={700}
          />
          {badge && <span className="project-detail-badge">{badge}</span>}
          <button
            type="button"
            className="project-detail-zoom-btn"
            onClick={() => setOpen(true)}
            aria-label="View full resolution image in fullscreen lightbox"
          >
            <Maximize2 size={16} />
            <span>View Fullscreen</span>
          </button>
        </div>
        {caption && <p className="project-detail-caption">{caption}</p>}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="image-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="High resolution project visualization"
          >
            <div className="image-lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={() => setOpen(false)}
                aria-label="Close fullscreen view"
              >
                <X size={20} />
              </button>
              <img src={src} alt={alt} className="lightbox-img" />
              {caption && <p className="lightbox-caption">{caption}</p>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
