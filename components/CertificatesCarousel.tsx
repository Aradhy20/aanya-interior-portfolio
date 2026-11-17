"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Calendar,
  Building2,
  Sparkles,
  LayoutGrid,
  SlidersHorizontal
} from "lucide-react";
import type { CertificateItem } from "@/data/certificates";

interface CertificatesCarouselProps {
  certificates: CertificateItem[];
  onView: (cert: CertificateItem) => void;
}

export default function CertificatesCarousel({
  certificates,
  onView
}: CertificatesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Safety check
  const activeCert = certificates[currentIndex] || certificates[0];

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = certificates.length - 1;
      if (next >= certificates.length) next = 0;
      return next;
    });
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.94
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as const
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.94,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1] as const
      }
    })
  };

  return (
    <div className="cert-carousel-wrapper">
      {/* Carousel Top Controls & Counter */}
      <div className="cert-carousel-header">
        <div className="cert-carousel-counter">
          <span className="current-idx">0{currentIndex + 1}</span>
          <span className="counter-sep">/</span>
          <span className="total-idx">0{certificates.length}</span>
          <span className="cert-carousel-tag">{activeCert.category}</span>
        </div>

        <div className="cert-carousel-arrows">
          <button
            type="button"
            className="carousel-arrow-btn"
            onClick={() => paginate(-1)}
            aria-label="Previous certificate"
            title="Previous certificate"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            className="carousel-arrow-btn"
            onClick={() => paginate(1)}
            aria-label="Next certificate"
            title="Next certificate"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Main Swipeable Stage */}
      <div className="cert-carousel-stage">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={activeCert.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (offset.x > 75 || velocity.x > 300) {
                paginate(-1);
              } else if (offset.x < -75 || velocity.x < -300) {
                paginate(1);
              }
            }}
            className="cert-carousel-active-card"
          >
            {/* Certificate Preview Frame */}
            <div
              className="cert-active-preview-box"
              onClick={() => onView(activeCert)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onView(activeCert);
                }
              }}
              aria-label={`Inspect ${activeCert.title}`}
            >
              <img
                src={activeCert.previewImage || activeCert.image}
                alt={activeCert.title}
                className="cert-active-scan-img"
                draggable={false}
              />
              <div className="cert-active-overlay">
                <span className="cert-hover-pill">
                  <Maximize2 size={14} /> Click to Inspect Full Resolution Scan
                </span>
              </div>
              {activeCert.isFeatured && (
                <span className="cert-carousel-featured-badge">
                  <Sparkles size={12} /> Top 20% Academic Recognition
                </span>
              )}
            </div>

            {/* Certificate Meta & Actions */}
            <div className="cert-active-info-panel">
              <span className="cert-active-kicker">{activeCert.category.toUpperCase()}</span>
              <h3 className="cert-active-title">{activeCert.title}</h3>
              <p className="cert-active-desc">{activeCert.description}</p>

              <div className="cert-active-meta-rows">
                <div className="meta-row">
                  <Building2 size={14} />
                  <span>{activeCert.issuer}</span>
                </div>
                <div className="meta-row">
                  <Calendar size={14} />
                  <span>{activeCert.date}</span>
                </div>
              </div>

              <div className="cert-active-cta-row">
                <button
                  type="button"
                  className="button button-dark"
                  onClick={() => onView(activeCert)}
                >
                  <Maximize2 size={14} />
                  <span>View Verified Certificate</span>
                </button>
                <a
                  href={activeCert.previewImage || activeCert.image}
                  download={activeCert.downloadFilename}
                  className="button button-light"
                >
                  Download Scan
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dot Navigation */}
      <div className="cert-carousel-dots" role="tablist" aria-label="Certificate slides">
        {certificates.map((cert, idx) => (
          <button
            key={cert.id}
            type="button"
            role="tab"
            aria-selected={idx === currentIndex}
            aria-label={`Jump to certificate: ${cert.title}`}
            className={`carousel-dot ${idx === currentIndex ? "is-active" : ""}`}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
          />
        ))}
      </div>
    </div>
  );
}
