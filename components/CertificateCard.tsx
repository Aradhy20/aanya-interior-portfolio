"use client";

import { motion } from "framer-motion";
import {
  Award,
  Download,
  Maximize2,
  Calendar,
  Building2,
  FileCheck2,
  Sparkles
} from "lucide-react";
import type { CertificateItem } from "@/data/certificates";

interface CertificateCardProps {
  certificate: CertificateItem;
  onView: (cert: CertificateItem) => void;
}

export default function CertificateCard({
  certificate,
  onView
}: CertificateCardProps) {
  // Safeguard student roll number for Banasthali top-20 certificate
  const displayImage = certificate.previewImage || certificate.image;
  const downloadUrl = certificate.previewImage || certificate.image;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`cert-item-card ${certificate.isFeatured ? "featured-cert" : ""}`}
    >
      {/* Visual Thumbnail Area */}
      <div
        className="cert-card-media-wrap"
        onClick={() => onView(certificate)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onView(certificate);
          }
        }}
        aria-label={`View full certificate: ${certificate.title}`}
      >
        <div className={`cert-thumb-frame ${certificate.aspectRatio}`}>
          <img
            src={displayImage}
            alt={`Official scan of ${certificate.title} awarded to Aanya Jain`}
            className="cert-thumb-img"
            loading="lazy"
          />
        </div>

        {/* Hover overlay hint */}
        <div className="cert-thumb-overlay">
          <span className="cert-hover-pill">
            <Maximize2 size={13} /> Inspect Scan
          </span>
        </div>

        {/* Category Pill Tag */}
        <div className="cert-category-badge">
          {certificate.isFeatured ? (
            <span className="badge-featured">
              <Sparkles size={11} /> {certificate.featuredBadge || "Featured"}
            </span>
          ) : (
            <span>{certificate.category}</span>
          )}
        </div>
      </div>

      {/* Text & Metadata Content */}
      <div className="cert-card-body">
        <h3 className="cert-item-title">{certificate.title}</h3>

        <div className="cert-item-meta">
          <div className="cert-meta-row issuer">
            <Building2 size={13} className="meta-icon" />
            <span>{certificate.issuer}</span>
          </div>

          <div className="cert-meta-row date">
            <Calendar size={13} className="meta-icon" />
            <span>{certificate.date}</span>
          </div>
        </div>

        <p className="cert-item-desc">{certificate.description}</p>

        {certificate.verificationNote && (
          <div className="cert-mini-verification">
            <FileCheck2 size={12} className="check-icon" />
            <span>{certificate.verificationNote}</span>
          </div>
        )}

        {/* Card Actions */}
        <div className="cert-item-actions">
          <button
            type="button"
            className="button button-dark cert-btn-view"
            onClick={() => onView(certificate)}
            aria-label={`View certificate for ${certificate.title}`}
          >
            <Maximize2 size={13} />
            <span>View Certificate</span>
          </button>

          <a
            href={downloadUrl}
            download={certificate.downloadFilename}
            className="button button-light cert-btn-dl"
            title={`Download ${certificate.title}`}
            aria-label={`Download certificate for ${certificate.title}`}
          >
            <Download size={13} />
            <span>Download</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}
