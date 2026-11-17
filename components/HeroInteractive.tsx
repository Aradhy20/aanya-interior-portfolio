"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Download, ArrowUpRight, MapPin, Award, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

export default function HeroInteractive() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for smooth 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D rotations based on mouse position
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);

  // Parallax offsets for floating badge and stamp
  const stampX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const stampY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);
  const orbitRotate = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <section className="shell hero" id="top">
      {/* Left Copy Column */}
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="eyebrow">
          <span className="eyebrow-dot" /> {SITE_CONFIG.studentStatus.toUpperCase()}{" "}
          <span className="eyebrow-line" />
        </div>

        <p className="hero-kicker">
          {SITE_CONFIG.role} · Spatial Experiences · Furniture Design
        </p>

        <h1 className="hero-title">
          Thoughtful spaces.
          <br />
          <em>Meaningful</em> living.
        </h1>

        <p className="hero-intro">{SITE_CONFIG.profileDescription}</p>

        <div className="hero-actions">
          <a className="button button-dark hero-btn-magnetic" href="#work">
            <span>Explore Projects</span>
            <ArrowDown size={15} />
          </a>
          <a
            className="button button-light hero-btn-magnetic"
            href={SITE_CONFIG.resumeDownloadUrl}
            download="Aanya-Jain-Resume.pdf"
          >
            <Download size={14} />
            <span>Download Resume</span>
          </a>
          <a
            className="text-link hero-link-animated"
            href={SITE_CONFIG.portfolioBookUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span>View Full Portfolio</span>
            <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="hero-location">
          <MapPin size={14} /> {SITE_CONFIG.location} <span>·</span>{" "}
          {SITE_CONFIG.university} ({SITE_CONFIG.degree}, {SITE_CONFIG.graduationYears})
        </div>

        <motion.div
          className="hero-cert-highlight"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
        >
          <Award size={13} className="hero-cert-icon" />
          <span>Top 20% · Industrial Design · Banasthali Vidyapith · 2026</span>
          <span className="hero-cert-sparkle">
            <Sparkles size={11} />
          </span>
        </motion.div>
      </motion.div>

      {/* Right Visual Column with 3D Tilt & Parallax */}
      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
        ref={frameRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="portrait-frame"
          style={{
            rotateX,
            rotateY,
            transformPerspective: 1000,
            transformStyle: "preserve-3d"
          }}
          transition={{ type: "spring", damping: 15 }}
        >
          {/* Main Portrait with Hover Zoom & Clip Reveal */}
          <div className="portrait-image-wrapper">
            <motion.img
              src="/images/aanya-portrait.webp"
              alt="Aanya Jain — Interior and Industrial Design Student in sage-green tailored blazer"
              className="portrait-img-main"
              animate={{
                scale: isHovered ? 1.05 : 1
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              loading="eager"
              width={540}
              height={680}
            />
            {/* Cinematic subtle light gradient sheen on hover */}
            <motion.div
              className="portrait-sheen-overlay"
              animate={{ opacity: isHovered ? 0.15 : 0 }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* Floating AJ Design Stamp */}
          <motion.div
            className="portrait-stamp"
            style={{
              x: stampX,
              y: stampY,
              z: 40
            }}
          >
            <span>AJ</span>
            <small>
              DESIGN
              <br />
              PORTFOLIO
            </small>
          </motion.div>
        </motion.div>

        {/* Counter Note */}
        <motion.div
          className="hero-note"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <span>01 / 06</span>
          <span>
            Academic projects
            <br />
            2025—2026
          </span>
        </motion.div>

        {/* Dynamic Architectural Orbit Element */}
        <motion.div
          className="hero-orbit"
          aria-hidden="true"
          style={{ rotate: orbitRotate }}
        />
      </motion.div>
    </section>
  );
}
