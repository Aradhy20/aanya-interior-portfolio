"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Calendar } from "lucide-react";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  onSelect: (p: Project) => void;
};

export default function ProjectCard({ project, onSelect }: Props) {
  return (
    <motion.button
      layout
      type="button"
      className="project-card"
      onClick={() => onSelect(project)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      aria-label={`Explore case study: ${project.title} (${project.type})`}
    >
      <div className="project-art">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          className="project-art-img"
        />
        <span className="art-number">{project.number}</span>
        <div className="art-category-pill">{project.category}</div>
        <span className="art-open">
          <ArrowUpRight size={18} />
        </span>
      </div>

      <div className="project-meta">
        <span className="meta-type">{project.type}</span>
        <span className="meta-dot">·</span>
        <span className="meta-item">
          <Calendar size={11} className="inline-icon" /> {project.year}
        </span>
      </div>

      <div className="project-title-row">
        <h3>{project.title}</h3>
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
        <span className="card-cta">
          View case study <ArrowUpRight size={13} />
        </span>
      </div>
    </motion.button>
  );
}
