"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Calendar, Eye } from "lucide-react";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  onSelect: (p: Project) => void;
};

export default function ProjectCard({ project, onSelect }: Props) {
  return (
    <motion.div
      layout
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Clickable Image Thumbnail to open quick modal view */}
      <div
        className="project-art"
        onClick={() => onSelect(project)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelect(project);
          }
        }}
        aria-label={`Quick view case study modal: ${project.title}`}
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          className="project-art-img"
          width={600}
          height={380}
        />
        <span className="art-number">{project.number}</span>
        <div className="art-category-pill">{project.category}</div>
        <span className="art-open" title="Open quick view modal">
          <Eye size={17} />
        </span>
      </div>

      <div className="project-meta">
        <span className="meta-type">{project.type}</span>
        <span className="meta-dot">·</span>
        <span className="meta-item">
          <Calendar size={11} className="inline-icon" /> {project.year}
        </span>
      </div>

      {/* Crawlable Title Link */}
      <div className="project-title-row">
        <h3>
          <Link
            href={`/projects/${project.slug}`}
            className="project-title-anchor"
            title={`View full case study page for ${project.title}`}
          >
            {project.title}
          </Link>
        </h3>
        <span className="project-place">
          <MapPin size={11} className="inline-icon" /> {project.place}
        </span>
      </div>

      <div className="card-concept-subtitle">
        <span>Concept:</span> <em>{project.caseStudy.conceptTitle}</em>
      </div>

      <p className="project-summary">{project.summary}</p>

      <div className="project-card-footer">
        <div className="card-tags">
          {project.focus.slice(0, 3).map((f) => (
            <span key={f} className="card-tag">
              {f}
            </span>
          ))}
          {project.focus.length > 3 && (
            <span className="card-tag-more">+{project.focus.length - 3}</span>
          )}
        </div>

        <div className="card-action-links">
          <button
            type="button"
            className="card-quick-btn"
            onClick={() => onSelect(project)}
            title="Open quick modal dialog"
          >
            Quick View
          </button>
          <Link
            href={`/projects/${project.slug}`}
            className="card-cta"
            title={`Open dedicated case study page for ${project.title}`}
          >
            Case Study <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
