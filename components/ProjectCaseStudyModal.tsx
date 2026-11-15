"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Compass,
  Layers,
  Ruler,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import type { Project } from "@/data/projects";
import { SITE_CONFIG } from "@/data/site-config";

type Props = {
  project: Project | null;
  allProjects: Project[];
  onClose: () => void;
  onSelectProject: (p: Project) => void;
};

type TabKey = "overview" | "concept" | "drawings" | "materials";

export default function ProjectCaseStudyModal({
  project,
  allProjects,
  onClose,
  onSelectProject
}: Props) {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Reset tab when project changes
  useEffect(() => {
    setActiveTab("overview");
    setLightboxOpen(false);
  }, [project?.number]);

  // Find index for prev/next
  const currentIndex = project
    ? allProjects.findIndex((p) => p.number === project.number)
    : -1;
  const prevProject =
    currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxOpen) {
          setLightboxOpen(false);
        } else {
          onClose();
        }
      } else if (!lightboxOpen) {
        if (e.key === "ArrowLeft" && prevProject) {
          onSelectProject(prevProject);
        } else if (e.key === "ArrowRight" && nextProject) {
          onSelectProject(nextProject);
        }
      }
    },
    [lightboxOpen, onClose, onSelectProject, prevProject, nextProject]
  );

  useEffect(() => {
    if (!project) return;
    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <>
      <div
        className="modal-backdrop"
        role="presentation"
        onClick={onClose}
      >
        <motion.div
          className="project-modal case-study-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="modal-header-bar">
            <div className="modal-nav-arrows">
              <button
                type="button"
                className="modal-nav-btn"
                onClick={() => onSelectProject(prevProject)}
                aria-label={`Previous project: ${prevProject.title}`}
                title={`Previous: ${prevProject.title}`}
              >
                <ChevronLeft size={16} />
                <span>{prevProject.number}</span>
              </button>
              <span className="modal-nav-divider">/</span>
              <button
                type="button"
                className="modal-nav-btn"
                onClick={() => onSelectProject(nextProject)}
                aria-label={`Next project: ${nextProject.title}`}
                title={`Next: ${nextProject.title}`}
              >
                <span>{nextProject.number}</span>
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="modal-index-pill">
              <span>{project.number} OF 06</span>
              <span className="dot-sep">·</span>
              <span>{project.category}</span>
            </div>

            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close case study dialog"
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Hero Visual */}
          <div className="case-study-hero">
            <div className="case-study-media-wrapper">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="case-study-hero-img"
              />
              <button
                type="button"
                className="case-study-zoom-btn"
                onClick={() => setLightboxOpen(true)}
                aria-label="Enlarge presentation board"
                title="Click to view full size"
              >
                <Maximize2 size={15} />
                <span>Expand drawing</span>
              </button>
              <div className="case-study-hero-badge">
                <span>{project.year}</span>
                <span className="dot-sep">·</span>
                <span>{project.place}</span>
              </div>
            </div>
          </div>

          {/* Project Title & Subtitle */}
          <div className="case-study-heading">
            <div className="case-study-type">{project.type}</div>
            <h2 id="modal-project-title" className="case-study-title">
              {project.title}
            </h2>
            <p className="case-study-summary">{project.summary}</p>
          </div>

          {/* Interactive Case Study Tabs */}
          <div className="case-study-tabs" role="tablist" aria-label="Case study sections">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "overview"}
              className={`case-tab ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              <Compass size={13} />
              <span>Overview</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "concept"}
              className={`case-tab ${activeTab === "concept" ? "active" : ""}`}
              onClick={() => setActiveTab("concept")}
            >
              <Layers size={13} />
              <span>Concept & Process</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "drawings"}
              className={`case-tab ${activeTab === "drawings" ? "active" : ""}`}
              onClick={() => setActiveTab("drawings")}
            >
              <Ruler size={13} />
              <span>Technical Drawings</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "materials"}
              className={`case-tab ${activeTab === "materials" ? "active" : ""}`}
              onClick={() => setActiveTab("materials")}
            >
              <Sparkles size={13} />
              <span>Materials & Outcomes</span>
            </button>
          </div>

          {/* Tab Content Panels */}
          <div className="case-study-content">
            {activeTab === "overview" && (
              <motion.div
                key="tab-overview"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="tab-panel"
              >
                <div className="case-narrative">
                  <h4>Project Narrative</h4>
                  <p>{project.detail}</p>
                </div>

                <div className="case-section-box">
                  <div className="case-section-title">Design Focus & Core Pillars</div>
                  <div className="focus-pill-grid">
                    {project.focus.map((item) => (
                      <div key={item} className="focus-pill-item">
                        <span className="focus-dot" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="case-specs-preview">
                  <div className="case-section-title">Key Parameters</div>
                  <div className="specs-grid">
                    {caseStudy.technicalSpecs.map((spec) => (
                      <div key={spec.label} className="spec-card">
                        <span className="spec-label">{spec.label}</span>
                        <span className="spec-value">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "concept" && (
              <motion.div
                key="tab-concept"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="tab-panel"
              >
                <div className="case-block">
                  <div className="case-badge-label">The Challenge</div>
                  <p className="case-block-body">{caseStudy.challenge}</p>
                </div>

                <div className="case-block concept-highlight">
                  <div className="case-badge-label">Design Concept</div>
                  <p className="case-block-body concept-text">{caseStudy.concept}</p>
                </div>

                <div className="case-process-section">
                  <div className="case-section-title">Design Process & Methodology</div>
                  <div className="process-timeline">
                    {caseStudy.process.map((step, idx) => (
                      <div key={step} className="timeline-item">
                        <span className="timeline-number">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <div className="timeline-content">
                          <p>{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "drawings" && (
              <motion.div
                key="tab-drawings"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="tab-panel"
              >
                <div className="case-section-title">Technical Documentation & Drawings</div>
                <div className="drawings-list">
                  {caseStudy.drawings.map((drawing) => (
                    <div key={drawing.title} className="drawing-card">
                      <div className="drawing-header">
                        <Ruler size={14} className="drawing-icon" />
                        <h5>{drawing.title}</h5>
                      </div>
                      <p>{drawing.description}</p>
                    </div>
                  ))}
                </div>

                <div className="case-section-title" style={{ marginTop: "24px" }}>
                  Engineering & Dimensional Specifications
                </div>
                <div className="specs-table">
                  {caseStudy.technicalSpecs.map((spec) => (
                    <div key={spec.label} className="specs-row">
                      <span className="spec-k">{spec.label}</span>
                      <span className="spec-v">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "materials" && (
              <motion.div
                key="tab-materials"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="tab-panel"
              >
                <div className="case-section-title">Material & Tactile Palette</div>
                <div className="materials-grid">
                  {caseStudy.materials.map((mat) => (
                    <div key={mat} className="material-card">
                      <span className="material-swatch-dot" />
                      <span className="material-name">{mat}</span>
                    </div>
                  ))}
                </div>

                <div className="case-section-title" style={{ marginTop: "28px" }}>
                  Key Outcomes & Innovations
                </div>
                <div className="highlights-list">
                  {caseStudy.keyHighlights.map((highlight) => (
                    <div key={highlight} className="highlight-item">
                      <CheckCircle2 size={15} className="highlight-icon" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Modal Footer Bar */}
          <div className="modal-footer-bar">
            <a
              href={SITE_CONFIG.portfolioBookUrl}
              target="_blank"
              rel="noreferrer"
              className="button button-dark modal-book-btn"
            >
              <span>View full folio in portfolio book</span>
              <ArrowUpRight size={14} />
            </a>

            <div className="modal-footer-nav">
              <button
                type="button"
                className="footer-nav-link"
                onClick={() => onSelectProject(prevProject)}
              >
                ← {prevProject.title}
              </button>
              <button
                type="button"
                className="footer-nav-link"
                onClick={() => onSelectProject(nextProject)}
              >
                {nextProject.title} →
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Full-screen Lightbox for Presentations / Drawings */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close enlarged view"
            >
              <X size={24} />
            </button>
            <div
              className="lightbox-img-wrapper"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={project.image}
                alt={project.imageAlt}
                className="lightbox-img"
              />
              <div className="lightbox-caption">
                <strong>{project.number} · {project.title}</strong>
                <span>{project.type} · {project.place}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
