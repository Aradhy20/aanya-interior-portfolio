"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Layers } from "lucide-react";
import type { Project } from "@/data/projects";

interface GallerySlide {
  src: string;
  caption: string;
  tag: string;
}

interface ProjectGallerySwipeableProps {
  project: Project;
  onOpenLightbox?: (src: string, caption: string) => void;
}

export default function ProjectGallerySwipeable({
  project,
  onOpenLightbox
}: ProjectGallerySwipeableProps) {
  // Construct gallery slides from project data
  const slides: GallerySlide[] = [
    {
      src: project.seoImage || project.image,
      caption: project.imageAlt,
      tag: "Primary Visual Presentation"
    }
  ];

  // If dining chair, add the studio prototype shot
  if (project.slug === "dining-chair-furniture-design") {
    slides.push({
      src: "/images/dining-chair-studio.webp",
      caption:
        "Sculpted hardwood dining chair prototype with curved cabriole legs and woven cord lumbar detailing",
      tag: "1:1 Physical Prototype & Form Study"
    });
  }

  // Add technical drawing callouts if available
  if (project.caseStudy.technicalDrawings && project.caseStudy.technicalDrawings.length > 0) {
    slides.push({
      src: project.image,
      caption: `${project.caseStudy.technicalDrawings[0].title}: ${project.caseStudy.technicalDrawings[0].description}`,
      tag: "Technical CAD & Spatial Drawing"
    });
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const activeSlide = slides[currentIndex] || slides[0];

  const paginate = (newDirection: number) => {
    if (slides.length <= 1) return;
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = slides.length - 1;
      if (next >= slides.length) next = 0;
      return next;
    });
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.96
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.38,
        ease: [0.16, 1, 0.3, 1] as const
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.96,
      transition: {
        duration: 0.28,
        ease: [0.16, 1, 0.3, 1] as const
      }
    })
  };

  return (
    <div className="project-swipe-gallery">
      {/* Top Bar with Counter and Prev/Next Navigation */}
      <div className="project-gallery-topbar">
        <div className="gallery-counter-badge">
          <Layers size={13} />
          <span>
            {String(currentIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
          <span className="dot-sep">·</span>
          <span className="gallery-tag-text">{activeSlide.tag}</span>
        </div>

        {slides.length > 1 && (
          <div className="gallery-nav-arrows">
            <button
              type="button"
              className="gallery-arrow-btn"
              onClick={() => paginate(-1)}
              aria-label="Previous gallery visual"
              title="Previous slide (Left Arrow)"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              className="gallery-arrow-btn"
              onClick={() => paginate(1)}
              aria-label="Next gallery visual"
              title="Next slide (Right Arrow)"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Swipeable / Draggable Stage */}
      <div className="project-gallery-stage">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag={slides.length > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              if (slides.length <= 1) return;
              if (offset.x > 60 || velocity.x > 250) {
                paginate(-1);
              } else if (offset.x < -60 || velocity.x < -250) {
                paginate(1);
              }
            }}
            className="project-gallery-slide-frame"
          >
            <div className="gallery-img-container">
              <img
                src={activeSlide.src}
                alt={activeSlide.caption}
                className="gallery-slide-img"
                draggable={false}
              />

              {onOpenLightbox && (
                <button
                  type="button"
                  className="gallery-zoom-action-btn"
                  onClick={() => onOpenLightbox(activeSlide.src, activeSlide.caption)}
                  aria-label="Open fullscreen visual"
                  title="Click to view fullscreen lightbox"
                >
                  <Maximize2 size={14} />
                  <span>Enlarge visual</span>
                </button>
              )}
            </div>

            {/* Slide Caption */}
            <div className="gallery-slide-caption">
              <p>{activeSlide.caption}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Interactive Pagination Indicators */}
      {slides.length > 1 && (
        <div className="gallery-dots-bar" role="tablist" aria-label="Visual slides">
          {slides.map((s, idx) => (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={idx === currentIndex}
              className={`gallery-dot-btn ${idx === currentIndex ? "is-active" : ""}`}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              aria-label={`Jump to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
