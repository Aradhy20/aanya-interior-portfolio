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
  Search,
  Ruler,
  Sparkles,
  CheckCircle2,
  MapPin,
  Calendar,
  Layers
} from "lucide-react";
import type { Project } from "@/data/projects";
import { SITE_CONFIG } from "@/data/site-config";

type Props = {
  project: Project | null;
  allProjects: Project[];
  onClose: () => void;
  onSelectProject: (p: Project) => void;
};

type TabKey = "overview" | "research" | "drawings" | "materials";

export default function ProjectCaseStudyModal({
  project,
  allProjects,
  onClose,
  onSelectProject
}: Props) {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    setActiveTab("overview");
    setLightboxOpen(false);
  }, [project?.number]);

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
              <span>PROJECT {project.number} OF 06</span>
              <span className="dot-sep">·</span>
              <span>{project.category}</span>
              <span className="dot-sep">·</span>
              <a
                href={`/projects/${project.slug}`}
                className="modal-full-page-pill-link"
                title="Open dedicated case study page"
              >
                Dedicated Page ↗
              </a>
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
                title="Click to view high-resolution presentation board"
              >
                <Maximize2 size={15} />
                <span>Enlarge presentation board</span>
              </button>
              <div className="case-study-hero-badge">
                <Calendar size={13} />
                <span>{caseStudy.semester}</span>
                <span className="dot-sep">·</span>
                <MapPin size={13} />
                <span>{caseStudy.location}</span>
              </div>
            </div>
          </div>

          {/* Project Title & Context Bar */}
          <div className="case-study-heading">
            <div className="case-study-type">{project.type}</div>
            <h2 id="modal-project-title" className="case-study-title">
              {project.title}
            </h2>
            <div className="case-concept-subtitle">
              <span>Concept:</span> <em>{caseStudy.conceptTitle}</em>
            </div>
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
              <span>1. Overview & Concept</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "research"}
              className={`case-tab ${activeTab === "research" ? "active" : ""}`}
              onClick={() => setActiveTab("research")}
            >
              <Search size={13} />
              <span>2. Research & Site Analysis</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "drawings"}
              className={`case-tab ${activeTab === "drawings" ? "active" : ""}`}
              onClick={() => setActiveTab("drawings")}
            >
              <Ruler size={13} />
              <span>3. Planning & Drawings</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "materials"}
              className={`case-tab ${activeTab === "materials" ? "active" : ""}`}
              onClick={() => setActiveTab("materials")}
            >
              <Sparkles size={13} />
              <span>4. Materials & Outcomes</span>
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
                <div className="case-block concept-highlight">
                  <div className="case-badge-label">Design Concept & Philosophy</div>
                  <h4 className="case-concept-heading">{caseStudy.conceptTitle}</h4>
                  <p className="case-block-body concept-text">{caseStudy.conceptDescription}</p>
                </div>

                <div className="case-block">
                  <div className="case-badge-label">Design Problem & Brief</div>
                  <p className="case-block-body">{caseStudy.problemBrief}</p>
                </div>

                <div className="case-narrative">
                  <h4>Detailed Project Narrative</h4>
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

                <div className="case-section-box">
                  <div className="case-section-title">Key Innovations & Distinctions</div>
                  <div className="highlights-list">
                    {caseStudy.keyHighlights.map((highlight) => (
                      <div key={highlight} className="highlight-item">
                        <CheckCircle2 size={15} className="highlight-icon" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "research" && (
              <motion.div
                key="tab-research"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="tab-panel"
              >
                <div className="case-section-title">Research, Context & Site Analysis</div>
                <div className="process-timeline">
                  {caseStudy.researchSiteAnalysis.map((item, idx) => (
                    <div key={item} className="timeline-item">
                      <span className="timeline-number">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div className="timeline-content">
                        <p>{item}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="case-section-title" style={{ marginTop: "24px" }}>
                  Design Development & Form Exploration
                </div>
                <div className="process-timeline">
                  {caseStudy.designDevelopment.map((step, idx) => (
                    <div key={step} className="timeline-item development-step">
                      <span className="timeline-number dev-num">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div className="timeline-content">
                        <p>{step}</p>
                      </div>
                    </div>
                  ))}
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
                <div className="case-section-title">Planning & Technical Drawings</div>
                <div className="drawings-list">
                  {caseStudy.technicalDrawings.map((drawing) => (
                    <div key={drawing.title} className="drawing-card">
                      <div className="drawing-header">
                        <Ruler size={15} className="drawing-icon" />
                        <h5>{drawing.title}</h5>
                      </div>
                      <p>{drawing.description}</p>
                    </div>
                  ))}
                </div>

                <div className="case-notice-card">
                  <Layers size={16} className="notice-icon" />
                  <div>
                    <strong>View original full-scale presentation boards</strong>
                    <p>
                      The technical drawings, orthographic projections, and dimensioned
                      layouts are documented in Aanya’s original portfolio flipbook.
                    </p>
                  </div>
                  <a
                    href={SITE_CONFIG.portfolioBookUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button button-dark notice-btn"
                  >
                    Open Flipbook <ArrowUpRight size={13} />
                  </a>
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
                <div className="case-section-title">Materials & Finishes Palette</div>
                <div className="materials-grid">
                  {caseStudy.materialsFinishes.map((mat) => (
                    <div key={mat} className="material-card">
                      <span className="material-swatch-dot" />
                      <span className="material-name">{mat}</span>
                    </div>
                  ))}
                </div>

                <div className="case-block" style={{ marginTop: "24px" }}>
                  <div className="case-badge-label">Final Design & Visualisations</div>
                  <p className="case-block-body">{caseStudy.finalOutcome}</p>
                </div>

                <div className="case-section-title" style={{ marginTop: "24px" }}>
                  Key Learning & Design Takeaways
                </div>
                <div className="highlights-list">
                  {caseStudy.learningOutcomes.map((outcome) => (
                    <div key={outcome} className="highlight-item learning-item">
                      <CheckCircle2 size={15} className="highlight-icon" />
                      <span>{outcome}</span>
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
                <strong>PROJECT {project.number} · {project.title}</strong>
                <span>{project.type} · {caseStudy.location} ({caseStudy.semester})</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
