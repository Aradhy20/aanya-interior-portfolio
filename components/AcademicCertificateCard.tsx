"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Download,
  Maximize2,
  X,
  Calendar,
  Building2,
  FileCheck2,
  CheckCircle2,
  ShieldCheck,
  FileText
} from "lucide-react";
import { ACADEMIC_RECOGNITION } from "@/data/site-config";

export default function AcademicCertificateCard() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setModalOpen(false);
    }
  }, []);

  useEffect(() => {
    if (!modalOpen) return;
    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [modalOpen, handleKeyDown]);

  const cert = ACADEMIC_RECOGNITION;

  return (
    <motion.section
      className="section shell academic-recognition-section"
      id="academic-recognition"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="section-heading">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-dot" /> {cert.sectionHeading}{" "}
            <span className="eyebrow-line" />
          </div>
          <h2>
            Among the <em>Top 20%</em> in Industrial Design
          </h2>
        </div>
        <p className="section-side-copy">
          {cert.supportingDescription}
        </p>
      </div>

      <div className="certificate-card">
        {/* Left Information Column */}
        <div className="certificate-info-col">
          <div className="cert-official-badge">
            <ShieldCheck size={14} className="badge-icon" />
            <span>{cert.badgeLabel}</span>
          </div>

          <h3 className="cert-card-title">{cert.mainTitle}</h3>

          <p className="cert-card-description">
            {cert.supportingDescription}
          </p>

          <div className="cert-meta-grid">
            <div className="cert-meta-item">
              <span className="cert-meta-label">
                <Building2 size={12} /> Institution
              </span>
              <strong className="cert-meta-val">{cert.institutionLabel}</strong>
            </div>

            <div className="cert-meta-item">
              <span className="cert-meta-label">
                <Calendar size={12} /> Issue Date
              </span>
              <strong className="cert-meta-val">{cert.issueDate}</strong>
            </div>

            <div className="cert-meta-item">
              <span className="cert-meta-label">
                <FileText size={12} /> Reference No.
              </span>
              <strong className="cert-meta-val">{cert.referenceNumber}</strong>
            </div>

            <div className="cert-meta-item">
              <span className="cert-meta-label">
                <Award size={12} /> Branch & Semester
              </span>
              <strong className="cert-meta-val">
                {cert.branch} · {cert.semester}
              </strong>
            </div>
          </div>

          <div className="cert-verification-callout">
            <CheckCircle2 size={15} className="callout-icon" />
            <div>
              <strong>Verified Academic Merit</strong>
              <p>
                Awarded by {cert.issuingAuthority} ({cert.authorityName}) for
                outstanding academic performance by virtue of total marks secured.
              </p>
            </div>
          </div>

          <div className="cert-actions-row">
            <button
              type="button"
              className="button button-dark cert-action-btn"
              onClick={() => setModalOpen(true)}
              aria-label="View original certificate scan"
            >
              <Maximize2 size={14} />
              <span>View Certificate</span>
            </button>

            <a
              href={cert.certificateImage}
              download={cert.downloadFileName}
              className="button button-light cert-action-btn"
              aria-label="Download original certificate image"
            >
              <Download size={14} />
              <span>Download Certificate</span>
            </a>
          </div>
        </div>

        {/* Right Certificate Preview Column */}
        <div className="certificate-visual-col">
          <button
            type="button"
            className="cert-preview-frame"
            onClick={() => setModalOpen(true)}
            aria-label="Open full certificate in lightbox view"
            title="Click to inspect original certificate"
          >
            <img
              src={cert.certificatePreviewImage}
              alt="Official Academic Recognition Certificate awarded to Aanya Jain by Banasthali Vidyapith"
              className="cert-preview-img"
              loading="lazy"
            />
            <div className="cert-preview-overlay">
              <span className="cert-overlay-pill">
                <Maximize2 size={13} /> Click to expand certificate
              </span>
            </div>
            <div className="cert-preview-tag">
              <FileCheck2 size={12} /> Banasthali Vidyapith Official Scan
            </div>
          </button>
        </div>
      </div>

      {/* Large Lightbox Modal for Certificate Inspection */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="certificate-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setModalOpen(false)}
            role="presentation"
          >
            <motion.div
              className="certificate-modal-content"
              role="dialog"
              aria-modal="true"
              aria-labelledby="cert-modal-heading"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="cert-modal-header">
                <div>
                  <span className="cert-modal-kicker">
                    OFFICIAL ACADEMIC RECOGNITION · REF: {cert.referenceNumber}
                  </span>
                  <h3 id="cert-modal-heading" className="cert-modal-title">
                    Banasthali Vidyapith — Top 20% in Industrial Design
                  </h3>
                </div>

                <div className="cert-modal-actions">
                  <a
                    href={cert.certificateImage}
                    download={cert.downloadFileName}
                    className="button button-light cert-modal-dl-btn"
                    title="Download certificate image"
                  >
                    <Download size={14} />
                    <span>Download</span>
                  </a>
                  <button
                    type="button"
                    className="cert-modal-close-btn"
                    onClick={() => setModalOpen(false)}
                    aria-label="Close certificate modal"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Modal Certificate Image Scroll Area */}
              <div className="cert-modal-body">
                <img
                  src={cert.certificateImage}
                  alt="Official Banasthali Vidyapith Academic Recognition Certificate awarded to Ms. Aanya Jain"
                  className="cert-full-scan-img"
                />
              </div>

              {/* Modal Footer Bar */}
              <div className="cert-modal-footer">
                <div className="cert-modal-footer-info">
                  <ShieldCheck size={15} className="footer-seal-icon" />
                  <span>
                    Official certificate issued on {cert.issueDate} by {cert.issuingAuthority} ({cert.authorityName}), Department of Design, Banasthali Vidyapith.
                  </span>
                </div>
                <button
                  type="button"
                  className="button button-dark"
                  onClick={() => setModalOpen(false)}
                >
                  Close View
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
