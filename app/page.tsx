"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  Mail,
  Phone,
  Youtube,
  Instagram,
  Menu,
  Download,
  BookOpen,
  GraduationCap,
  Award,
  Sparkles,
  QrCode,
  Languages,
  CheckCircle2,
  FileCheck2
} from "lucide-react";
import {
  PROJECTS,
  PROJECT_FILTERS,
  type Project,
  type ProjectFilter
} from "@/data/projects";
import {
  SITE_CONFIG,
  EDUCATION_FACTS,
  WORKSHOPS,
  SOFTWARE_TOOLS,
  DESIGN_CAPABILITIES,
  LANGUAGES,
  APPROACH_PILLARS,
  DESIGN_QUOTE
} from "@/data/site-config";
import ProjectCard from "@/components/ProjectCard";
import ProjectCaseStudyModal from "@/components/ProjectCaseStudyModal";
import MobileMenuDrawer from "@/components/MobileMenuDrawer";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import CertificationsGallery from "@/components/CertificationsGallery";
import FaqSection from "@/components/FaqSection";
import WebsiteIntro from "@/components/WebsiteIntro";
import CustomCursor from "@/components/CustomCursor";
import HeroInteractive from "@/components/HeroInteractive";
import AnimatedCounter from "@/components/AnimatedCounter";

const BOOK_URL = SITE_CONFIG.portfolioBookUrl;
const RESUME_URL = SITE_CONFIG.resumeDownloadUrl;

export default function Home() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [introFinished, setIntroFinished] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("top");
  const [isScrolled, setIsScrolled] = useState(false);

  const visibleProjects = PROJECTS.filter(
    (project) => filter === "All" || project.category === filter
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sectionIds = [
        "contact",
        "faq",
        "archive",
        "approach",
        "skills",
        "work",
        "certifications",
        "about"
      ];
      const scrollPos = window.scrollY + 220;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("top");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main id="top">
      {/* Cinematic Opening Intro Animation */}
      <WebsiteIntro onComplete={() => setIntroFinished(true)} />

      {/* Desktop Custom Follower Cursor */}
      <CustomCursor />

      {/* Site Header */}
      <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
        <div className="shell nav-inner">
          <a
            className="brand"
            href="#top"
            aria-label={`${SITE_CONFIG.name} home`}
          >
            <span className="brand-mark">A.</span>
            <span className="brand-copy">
              {SITE_CONFIG.name.toUpperCase()}
              <small>{SITE_CONFIG.role.toUpperCase()}</small>
            </span>
          </a>

          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            <Menu size={22} />
          </button>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#about" className={activeSection === "about" ? "active" : ""}>
              About & CV
            </a>
            <a
              href="#certifications"
              className={activeSection === "certifications" ? "active" : ""}
            >
              Certifications
            </a>
            <a href="#work" className={activeSection === "work" ? "active" : ""}>
              Selected Work
            </a>
            <a href="#skills" className={activeSection === "skills" ? "active" : ""}>
              Software & Skills
            </a>
            <a href="#approach" className={activeSection === "approach" ? "active" : ""}>
              Approach
            </a>
            <a href="#archive" className={activeSection === "archive" ? "active" : ""}>
              Portfolio Book
            </a>
            <a href="#faq" className={activeSection === "faq" ? "active" : ""}>
              FAQ
            </a>
            <a
              href={RESUME_URL}
              download="Aanya-Jain-Resume.pdf"
              className="nav-resume-link"
              title="Download verified resume (PDF)"
            >
              <Download size={13} /> Resume
            </a>
            <a className="nav-contact" href="#contact">
              Let’s connect <ArrowUpRight size={14} />
            </a>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenuDrawer isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Hero Section with 3D Tilt, Parallax & Interactive Reveal */}
      <HeroInteractive introFinished={introFinished} />

      {/* Infinite Marquee Ticker */}
      <InfiniteMarquee />

      {/* Selected Work Section */}
      <motion.section
        className="section shell"
        id="work"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              THE WORK, SO FAR <span className="eyebrow-line" />
            </p>
            <h2>
              Selected <em>projects.</em>
            </h2>
          </div>
          <p className="section-side-copy">
            A curated collection of six academic studio explorations in spatial
            shelter, space-saving furniture, rooftop hospitality, institutional
            accessibility, and passive cooling.
          </p>
        </div>

        <div className="work-toolbar">
          <span>{String(visibleProjects.length).padStart(2, "0")} PROJECTS</span>
          <div className="filters" role="group" aria-label="Filter projects">
            {PROJECT_FILTERS.map((item) => (
              <button
                key={item}
                type="button"
                className={filter === item ? "filter active" : "filter"}
                onClick={() => setFilter(item)}
                aria-pressed={filter === item}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="project-grid">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.number}
                project={project}
                onSelect={setSelected}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="work-footnote">
          <span className="tiny-mark">✳</span> Select any project card to open its
          complete editorial case study with research, process, technical drawings, and material palette.
        </div>
      </motion.section>

      {/* CV / About Section */}
      <motion.section
        className="about-section"
        id="about"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="shell about-grid">
          <div className="about-lead">
            <p className="eyebrow">
              CURRICULUM VITAE <span className="eyebrow-line" />
            </p>
            <h2>
              Curiosity first.
              <br />
              <em>People always.</em>
            </h2>
            <p className="about-copy">{SITE_CONFIG.profileDescription}</p>
            <p className="about-copy muted">{SITE_CONFIG.profileFollowUp}</p>

            <div className="about-cta-row">
              <a
                href={RESUME_URL}
                download="Aanya-Jain-Resume.pdf"
                className="button button-dark"
              >
                <Download size={14} /> Download Verified Resume (PDF)
              </a>
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noreferrer"
                className="underlined-link"
              >
                View full portfolio flipbook <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          <div className="about-facts">
            {/* Education Credentials */}
            <div className="cv-category-header">
              <GraduationCap size={15} />
              <span>EDUCATION</span>
            </div>

            {EDUCATION_FACTS.map((fact) => (
              <div key={fact.index} className="fact-card">
                <span className="fact-index">{fact.index}</span>
                <div className="fact-main">
                  <h3>{fact.title}</h3>
                  <p>{fact.subtitle}</p>
                  {fact.location && (
                    <small className="fact-sub-location">
                      <MapPin size={10} /> {fact.location}
                    </small>
                  )}
                  {fact.details && (
                    <small className="fact-sub-desc">{fact.details}</small>
                  )}
                </div>
                <span className="fact-date">
                  {fact.date.includes("%") ? (
                    <AnimatedCounter
                      value={parseFloat(fact.date)}
                      decimals={1}
                      suffix="%"
                    />
                  ) : (
                    fact.date
                  )}
                </span>
              </div>
            ))}

            {/* Workshops & Certificates */}
            <div className="cv-category-header" style={{ marginTop: "24px" }}>
              <Award size={15} />
              <span>WORKSHOPS & CERTIFICATES</span>
            </div>

            <div className="fact-card workshops">
              <span className="fact-index">CREDENTIALS</span>
              <div className="workshop-list">
                {WORKSHOPS.map((workshop) => (
                  <div key={workshop.topic} className="workshop-row">
                    <div>
                      <b>{workshop.institution}</b>
                      <span className="workshop-topic">{workshop.topic}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span className="workshop-tag">{workshop.type}</span>
                      {"certificatePath" in workshop && workshop.certificatePath && (
                        <a
                          href={workshop.certificatePath}
                          target="_blank"
                          rel="noreferrer"
                          className="workshop-scan-link"
                          title={`View verified certificate scan for ${workshop.topic}`}
                        >
                          <FileCheck2 size={12} /> View Scan
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Certifications & Achievements Gallery */}
      <CertificationsGallery />

      {/* Software and Skills Section */}
      <motion.section
        className="section shell skills-section"
        id="skills"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">
              TOOLKIT & COMPETENCIES <span className="eyebrow-line" />
            </p>
            <h2>
              Software & <em>skills.</em>
            </h2>
          </div>
          <p className="section-side-copy">
            A specialized toolkit spanning computer-aided drafting, 3D modeling,
            space planning, post-production, and sustainable design thinking.
          </p>
        </div>

        <div className="skills-layout">
          {/* Software Grid */}
          <div className="skill-label">SOFTWARE TOOLS</div>
          <div className="software-cards-grid">
            {SOFTWARE_TOOLS.map((tool, index) => (
              <div key={tool.name} className="software-card">
                <span className="software-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="software-info">
                  <h4>{tool.name}</h4>
                  <small>{tool.category}</small>
                </div>
              </div>
            ))}
          </div>

          {/* Design Capabilities */}
          <div className="skill-label">DESIGN CAPABILITIES</div>
          <div className="capabilities-grid">
            {DESIGN_CAPABILITIES.map((capability) => (
              <div key={capability} className="capability-pill">
                <CheckCircle2 size={13} className="capability-icon" />
                <span>{capability}</span>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="skill-label">LANGUAGES</div>
          <div className="languages-row">
            {LANGUAGES.map((lang) => (
              <div key={lang.name} className="language-badge">
                <Languages size={13} />
                <strong>{lang.name}</strong>
                <span>({lang.fluency})</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Design Approach Section */}
      <motion.section
        className="approach-section"
        id="approach"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8 }}
      >
        <div className="shell">
          <div className="approach-top">
            <p className="eyebrow">
              HOW I THINK <span className="eyebrow-line" />
            </p>
            <h2>
              Good design begins
              <br />
              with <em>listening.</em>
            </h2>
          </div>

          <div className="approach-grid">
            {APPROACH_PILLARS.map((pillar) => (
              <article key={pillar.number}>
                <span>{pillar.number}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>

          <div className="quote-block">
            <Sparkles size={19} />
            <blockquote>
              “{DESIGN_QUOTE.quote.replace(/[“”"]/g, "")}”
            </blockquote>
            <cite>— {DESIGN_QUOTE.author}</cite>
          </div>
        </div>
      </motion.section>

      {/* Portfolio Book Flipbook Archive & QR Section */}
      <motion.section
        className="section shell archive-section"
        id="archive"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              THE FULL COLLECTION <span className="eyebrow-line" />
            </p>
            <h2>
              Look a little <em>closer.</em>
            </h2>
          </div>
          <div className="archive-actions">
            <a
              href={BOOK_URL}
              className="text-link"
              target="_blank"
              rel="noreferrer"
            >
              Open full-screen book <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="book-frame">
          <div className="book-topline">
            <span>AANYA JAIN · PORTFOLIO FLIPBOOK</span>
            <span>HEYZINE LIVE VIEWER ↗</span>
          </div>
          <iframe
            src={BOOK_URL}
            title="Aanya Jain original design portfolio flipbook"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </motion.section>

      {/* Frequently Asked Questions (FAQ / AEO Section) */}
      <FaqSection />

      {/* Contact Section With QR Code & Resume */}
      <motion.section
        className="contact-section"
        id="contact"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="shell contact-inner">
          <div className="contact-main-grid">
            <div className="contact-copy-col">
              <p className="eyebrow">
                HAVE A PROJECT OR AN IDEA? <span className="eyebrow-line" />
              </p>
              <h2>
                Let’s make room
                <br />
                for <em>possibility.</em>
              </h2>
              <p className="contact-intro-text">
                I am open to interior and industrial design internships,
                academic design research, and collaborative spatial projects.
              </p>

              <div className="contact-action-row">
                <a
                  className="button button-light"
                  href={`mailto:${SITE_CONFIG.email}`}
                >
                  <Mail size={15} /> Send an Email <ArrowUpRight size={14} />
                </a>
                <a
                  className="button button-dark"
                  href={RESUME_URL}
                  download="Aanya-Jain-Resume.pdf"
                >
                  <Download size={15} /> Download Resume (PDF)
                </a>
              </div>

              <div className="contact-channels-list">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="channel-item"
                >
                  <Mail size={16} />
                  <span>{SITE_CONFIG.email}</span>
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, "")}`}
                  className="channel-item"
                >
                  <Phone size={16} />
                  <span>{SITE_CONFIG.phoneDisplay}</span>
                  <small className="phone-verified-tag">Resume Verified</small>
                </a>
                <div className="channel-item non-link">
                  <MapPin size={16} />
                  <span>{SITE_CONFIG.fullLocation}</span>
                </div>
                <a
                  href={SITE_CONFIG.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="channel-item"
                >
                  <Youtube size={16} />
                  <span>YouTube: {SITE_CONFIG.youtubeDisplayName}</span>
                  <ArrowUpRight size={13} />
                </a>
                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="channel-item"
                >
                  <Instagram size={16} />
                  <span>Instagram Profile</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            {/* Real QR Code Card */}
            <div className="contact-qr-col">
              <div className="portfolio-qr-card">
                <div className="qr-badge">
                  <QrCode size={13} /> PORTFOLIO ACCESS
                </div>
                <div className="qr-img-frame">
                  <img
                    src="/images/portfolio-qr.svg"
                    alt="Scan QR code to view Aanya Jain full portfolio"
                    className="qr-img"
                    width={180}
                    height={180}
                  />
                </div>
                <div className="qr-caption">
                  <strong>Scan to view full portfolio</strong>
                  <p>
                    Point your mobile camera to open Aanya’s live interactive
                    Heyzine flipbook.
                  </p>
                </div>
                <a
                  href={BOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="qr-direct-link"
                >
                  <BookOpen size={13} /> Open flipbook directly ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Site Footer */}
      <footer className="site-footer">
        <div className="shell footer-inner">
          <a href="#top" className="footer-brand">
            {SITE_CONFIG.name.toUpperCase()}
            <span>{SITE_CONFIG.role.toUpperCase()}</span>
          </a>
          <span>Designed with curiosity · 2026</span>
          <div className="footer-links">
            <a href="#about">About</a>
            <span>·</span>
            <a href="#work">Work</a>
            <span>·</span>
            <a href="#faq">FAQ</a>
            <span>·</span>
            <a href={RESUME_URL} download="Aanya-Jain-Resume.pdf">
              Resume PDF
            </a>
            <span>·</span>
            <a href={BOOK_URL} target="_blank" rel="noreferrer">
              Portfolio Book
            </a>
            <span>·</span>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>

      {/* Rich Case Study Dialog Modal & Lightbox */}
      <AnimatePresence>
        {selected && (
          <ProjectCaseStudyModal
            project={selected}
            allProjects={PROJECTS}
            onClose={() => setSelected(null)}
            onSelectProject={setSelected}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
