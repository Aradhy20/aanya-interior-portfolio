"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Building2,
  Calendar,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from "lucide-react";
import type { CertificateItem } from "@/data/certificates";

interface CertificateModalProps {
  certificate: CertificateItem | null;
  allCertificates?: CertificateItem[];
  onClose: () => void;
  onSelectCertificate?: (cert: CertificateItem) => void;
}

export default function CertificateModal({
  certificate,
  allCertificates = [],
  onClose,
  onSelectCertificate
}: CertificateModalProps) {
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Reset zoom whenever certificate changes
  useEffect(() => {
    setZoomLevel(1);
  }, [certificate?.id]);

  const currentIndex = certificate && allCertificates.length > 0
    ? allCertificates.findIndex((c) => c.id === certificate.id)
    : -1;

  const prevCert =
    currentIndex > 0
      ? allCertificates[currentIndex - 1]
      : allCertificates[allCertificates.length - 1];

  const nextCert =
    currentIndex < allCertificates.length - 1
      ? allCertificates[currentIndex + 1]
      : allCertificates[0];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "+" || e.key === "=") {
        setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
      } else if (e.key === "-") {
        setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
      } else if (e.key === "0") {
        setZoomLevel(1);
      } else if (e.key === "ArrowLeft" && prevCert && onSelectCertificate) {
        onSelectCertificate(prevCert);
      } else if (e.key === "ArrowRight" && nextCert && onSelectCertificate) {
        onSelectCertificate(nextCert);
      }
    },
    [onClose, prevCert, nextCert, onSelectCertificate]
  );

  useEffect(() => {
    if (!certificate) return;
    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [certificate, handleKeyDown]);

  if (!certificate) return null;

  // Use privacy preview for Banasthali Top 20% to safeguard student roll number
  const displayImage = certificate.previewImage || certificate.image;
  const downloadUrl = certificate.previewImage || certificate.image;

  return (
    <AnimatePresence>
      <motion.div
        className="certificate-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        role="presentation"
      >
        <motion.div
          className="certificate-modal-content"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
          initial={{ opacity: 0, scale: 0.97, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 12 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="cert-modal-header">
            <div className="cert-modal-title-group">
              <span className="cert-modal-kicker">
                {certificate.category.toUpperCase()} · VERIFIED CREDENTIAL
                {currentIndex >= 0 && (
                  <span className="cert-modal-counter">
                    {" "}({currentIndex + 1} of {allCertificates.length})
                  </span>
                )}
              </span>
              <h3 id="cert-modal-title" className="cert-modal-title">
                {certificate.title}
              </h3>
            </div>

            <div className="cert-modal-actions">
              {/* Previous / Next Navigation Controls */}
              {allCertificates.length > 1 && onSelectCertificate && (
                <div className="cert-modal-nav-group" role="group" aria-label="Certificate switching">
                  <button
                    type="button"
                    className="cert-nav-btn"
                    onClick={() => onSelectCertificate(prevCert)}
                    title={`Previous: ${prevCert.title} (Left Arrow)`}
                    aria-label="Previous certificate"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    className="cert-nav-btn"
                    onClick={() => onSelectCertificate(nextCert)}
                    title={`Next: ${nextCert.title} (Right Arrow)`}
                    aria-label="Next certificate"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}

              {/* Zoom Controls */}
              <div className="cert-zoom-toolbar" role="group" aria-label="Zoom controls">
                <button
                  type="button"
                  className="cert-zoom-btn"
                  onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.75))}
                  title="Zoom Out (-)"
                  aria-label="Zoom Out"
                  disabled={zoomLevel <= 0.75}
                >
                  <ZoomOut size={15} />
                </button>
                <span className="cert-zoom-indicator">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  type="button"
                  className="cert-zoom-btn"
                  onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 2.5))}
                  title="Zoom In (+)"
                  aria-label="Zoom In"
                  disabled={zoomLevel >= 2.5}
                >
                  <ZoomIn size={15} />
                </button>
                {zoomLevel !== 1 && (
                  <button
                    type="button"
                    className="cert-zoom-btn"
                    onClick={() => setZoomLevel(1)}
                    title="Reset Zoom (0)"
                    aria-label="Reset Zoom"
                  >
                    <RotateCcw size={14} />
                  </button>
                )}
              </div>

              {/* Download Button */}
              <a
                href={downloadUrl}
                download={certificate.downloadFilename}
                className="button button-light cert-modal-dl-btn"
                title={`Download ${certificate.title}`}
              >
                <Download size={14} />
                <span>Download</span>
              </a>

              {/* Close Button */}
              <button
                type="button"
                className="cert-modal-close-btn"
                onClick={onClose}
                aria-label="Close certificate preview"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Body with Certificate Scan & Touch Swipe Navigation */}
          <div className="cert-modal-body">
            <div
              className="cert-modal-viewport"
              style={{
                transform: `scale(${zoomLevel})`,
                transformOrigin: "center top",
                transition: "transform 0.18s ease-out"
              }}
            >
              <img
                src={displayImage}
                alt={`Certificate scan of ${certificate.title} awarded to Aanya Jain`}
                className={`cert-full-scan-img ${certificate.aspectRatio}`}
                draggable={false}
              />
            </div>
          </div>

          {/* Footer Bar */}
          <div className="cert-modal-footer">
            <div className="cert-modal-footer-info">
              <ShieldCheck size={16} className="footer-seal-icon" />
              <div>
                <strong>{certificate.issuer}</strong>
                <span> · {certificate.date}</span>
                {certificate.verificationNote && (
                  <span className="cert-footer-note"> — {certificate.verificationNote}</span>
                )}
              </div>
            </div>

            <div className="cert-modal-footer-nav">
              {allCertificates.length > 1 && onSelectCertificate && (
                <div className="cert-modal-subnav-links">
                  <button
                    type="button"
                    className="cert-footer-jump-btn"
                    onClick={() => onSelectCertificate(prevCert)}
                  >
                    ← {prevCert.title.slice(0, 24)}...
                  </button>
                  <button
                    type="button"
                    className="cert-footer-jump-btn"
                    onClick={() => onSelectCertificate(nextCert)}
                  >
                    {nextCert.title.slice(0, 24)}... →
                  </button>
                </div>
              )}
              <button
                type="button"
                className="button button-dark"
                onClick={onClose}
              >
                Close View
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
