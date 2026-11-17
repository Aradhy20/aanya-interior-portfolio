"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Download,
  Maximize2,
  Calendar,
  Building2,
  FileCheck2,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
  SlidersHorizontal,
  LayoutGrid
} from "lucide-react";
import {
  CERTIFICATES_DATA,
  CERTIFICATE_CATEGORIES,
  type CertificateCategory,
  type CertificateItem
} from "@/data/certificates";
import CertificateCard from "@/components/CertificateCard";
import CertificateModal from "@/components/CertificateModal";
import CertificatesCarousel from "@/components/CertificatesCarousel";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function CertificationsGallery() {
  const [activeFilter, setActiveFilter] =
    useState<CertificateCategory>("All Certificates");
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [viewMode, setViewMode] = useState<"carousel" | "grid">("carousel");

  // Filtered certificates based on active tab
  const filteredCertificates = useMemo(() => {
    if (activeFilter === "All Certificates") {
      return CERTIFICATES_DATA;
    }
    return CERTIFICATES_DATA.filter(
      (item) => item.filterCategory === activeFilter
    );
  }, [activeFilter]);

  // Compute item counts for each category filter badge
  const categoryCounts = useMemo(() => {
    const counts: Record<CertificateCategory, number> = {
      "All Certificates": CERTIFICATES_DATA.length,
      "Academic Recognition": 0,
      "Design & CAD": 0,
      "3D & Digital Design": 0,
      "AI & Digital Skills": 0,
      "Creative Achievement": 0,
      "Personal Development": 0
    };

    CERTIFICATES_DATA.forEach((cert) => {
      counts[cert.filterCategory] = (counts[cert.filterCategory] || 0) + 1;
    });

    return counts;
  }, []);

  // Primary featured certificate (Top 20% Banasthali)
  const featuredCertificate = useMemo(() => {
    return CERTIFICATES_DATA.find((c) => c.isFeatured) || CERTIFICATES_DATA[0];
  }, []);

  return (
    <motion.section
      className="section shell certifications-gallery-section"
      id="certifications"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Anchor targets to keep previous links backwards-compatible */}
      <div id="academic-recognition" style={{ position: "relative", top: "-40px" }} />
      <div id="credentials" style={{ position: "relative", top: "-40px" }} />

      {/* Section Heading */}
      <div className="section-heading">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-dot" /> CERTIFICATIONS & ACHIEVEMENTS{" "}
            <span className="eyebrow-line" />
          </div>
          <h2>
            Learning. Creating. <em>Achieving.</em>
          </h2>
        </div>
        <p className="section-side-copy">
          An evolving collection of academic recognition, design workshops, creative
          achievements and new skills gained through hands-on learning.
        </p>
      </div>

      {/* Featured Academic Recognition Highlight Card (Top 20%) */}
      {featuredCertificate && (
        <motion.div
          className="featured-recognition-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="featured-card-content">
            <div className="featured-badge-row">
              <span className="featured-pill-tag">
                <ShieldCheck size={14} /> OFFICIAL ACADEMIC RECOGNITION
              </span>
              <span className="featured-sub-tag">
                <Sparkles size={12} /> Top <AnimatedCounter value={20} suffix="%" /> in Industrial Design
              </span>
            </div>

            <h3 className="featured-recognition-title">
              Top 20% in Industrial Design
            </h3>

            <p className="featured-recognition-institution">
              <strong>Banasthali Vidyapith</strong> · March 2026 · 6th Semester
            </p>

            <p className="featured-recognition-desc">
              {featuredCertificate.description}
            </p>

            <div className="featured-meta-points">
              <div className="feat-meta-item">
                <Building2 size={13} />
                <span>Department of Design · Banasthali Vidyapith</span>
              </div>
              <div className="feat-meta-item">
                <Calendar size={13} />
                <span>Issued 09 March 2026</span>
              </div>
              <div className="feat-meta-item">
                <FileCheck2 size={13} />
                <span>Ref: DD/ADMIN/2026/03/004 · Principal / Head of Institute</span>
              </div>
            </div>

            <div className="featured-card-actions">
              <button
                type="button"
                className="button button-dark"
                onClick={() => setSelectedCert(featuredCertificate)}
                aria-label="View verified Banasthali Top 20% certificate"
              >
                <Maximize2 size={14} />
                <span>View Full Certificate</span>
              </button>

              <a
                href={featuredCertificate.previewImage || featuredCertificate.image}
                download={featuredCertificate.downloadFilename}
                className="button button-light"
                aria-label="Download verified Banasthali Top 20% certificate"
              >
                <Download size={14} />
                <span>Download Certificate</span>
              </a>
            </div>
          </div>

          {/* Right Preview Frame */}
          <div
            className="featured-card-preview"
            onClick={() => setSelectedCert(featuredCertificate)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedCert(featuredCertificate);
              }
            }}
            aria-label="Inspect Banasthali Top 20% certificate scan"
          >
            <div className="featured-preview-frame">
              <img
                src={featuredCertificate.previewImage || featuredCertificate.image}
                alt="Official Banasthali Vidyapith Top 20% Academic Recognition Certificate"
                className="featured-preview-img"
                loading="lazy"
              />
              <div className="featured-preview-overlay">
                <span className="cert-hover-pill">
                  <Maximize2 size={13} /> Click to Expand Scan
                </span>
              </div>
            </div>
            <div className="featured-preview-caption">
              <ShieldCheck size={13} /> Official Scan · Roll Number Protected for Privacy
            </div>
          </div>
        </motion.div>
      )}

      {/* Category Filter Tabs & View Mode Switcher */}
      <div className="cert-controls-bar">
        <div
          className="cert-filter-bar"
          role="tablist"
          aria-label="Filter certificates by category"
        >
          {CERTIFICATE_CATEGORIES.map((category) => {
            const isActive = activeFilter === category;
            const count = categoryCounts[category] || 0;

            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`cert-filter-btn ${isActive ? "active" : ""}`}
                onClick={() => setActiveFilter(category)}
              >
                <span>{category}</span>
                <span className="cert-filter-count">({count})</span>
              </button>
            );
          })}
        </div>

        {/* View Mode Switcher: Carousel vs Grid */}
        <div className="cert-view-toggle-wrap">
          <button
            type="button"
            className={`cert-view-btn ${viewMode === "carousel" ? "is-active" : ""}`}
            onClick={() => setViewMode("carousel")}
            aria-label="Swipeable carousel view"
            title="Interactive swipeable carousel view"
          >
            <SlidersHorizontal size={14} />
            <span>Carousel</span>
          </button>
          <button
            type="button"
            className={`cert-view-btn ${viewMode === "grid" ? "is-active" : ""}`}
            onClick={() => setViewMode("grid")}
            aria-label="All certificates grid view"
            title="Full grid view"
          >
            <LayoutGrid size={14} />
            <span>Grid</span>
          </button>
        </div>
      </div>

      {/* Active Filter Summary Bar */}
      <div className="cert-grid-status-row">
        <span className="cert-status-text">
          Showing <strong>{filteredCertificates.length}</strong> of{" "}
          <strong>{CERTIFICATES_DATA.length}</strong> verified certificates
          {activeFilter !== "All Certificates" && (
            <span> in &ldquo;{activeFilter}&rdquo;</span>
          )}
        </span>
      </div>

      {/* Dynamic Content Display: Swipeable Carousel or Grid */}
      {viewMode === "carousel" && filteredCertificates.length > 0 ? (
        <CertificatesCarousel
          certificates={filteredCertificates}
          onView={(c) => setSelectedCert(c)}
        />
      ) : (
        <motion.div layout className="cert-cards-grid">
          <AnimatePresence mode="popLayout">
            {filteredCertificates.map((cert) => (
              <CertificateCard
                key={cert.id}
                certificate={cert}
                onView={(c) => setSelectedCert(c)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Full Image Modal Lightbox with Next & Prev navigation */}
      <CertificateModal
        certificate={selectedCert}
        allCertificates={filteredCertificates}
        onClose={() => setSelectedCert(null)}
        onSelectCertificate={(c) => setSelectedCert(c)}
      />
    </motion.section>
  );
}
