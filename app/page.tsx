"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  Mail,
  Instagram,
  Youtube,
  Menu,
  Sparkles
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
  DESIGN_INTERESTS,
  APPROACH_PILLARS,
  DESIGN_QUOTE
} from "@/data/site-config";
import ProjectCard from "@/components/ProjectCard";
import ProjectCaseStudyModal from "@/components/ProjectCaseStudyModal";
import MobileMenuDrawer from "@/components/MobileMenuDrawer";
import InfiniteMarquee from "@/components/InfiniteMarquee";

const BOOK_URL = SITE_CONFIG.portfolioBookUrl;

export default function Home() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const visibleProjects = PROJECTS.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <main id="top">
      {/* Site Header */}
      <header className="site-header">
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
            <a href="#about">About</a>
            <a href="#work">Selected work</a>
            <a href="#skills">Tools & Focus</a>
            <a href="#approach">Approach</a>
            <a href="#archive">Portfolio book</a>
            <a className="nav-contact" href="#contact">
              Let’s connect <ArrowUpRight size={14} />
            </a>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenuDrawer isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Hero Section */}
      <section className="shell hero">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="eyebrow">
            <span className="eyebrow-dot" /> DESIGNING WITH INTENTION{" "}
            <span className="eyebrow-line" />
          </div>
          <p className="hero-kicker">Industrial design · Spatial experiences · Furniture</p>
          <h1>
            Thoughtful spaces.<br />
            <em>Meaningful</em> living.
          </h1>
          <p className="hero-intro">
            I’m Aanya Jain, a design student exploring sustainable, ergonomic
            and human-centred ideas across interiors, furniture and everyday
            spaces.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              Explore selected work <ArrowDown size={15} />
            </a>
            <a className="text-link" href={BOOK_URL} target="_blank" rel="noreferrer">
              Open portfolio book <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="hero-location">
            <MapPin size={14} /> {SITE_CONFIG.location}
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="portrait-frame">
            <img
              src="/images/aanya-portrait.webp"
              alt="Aanya Jain in a sage green blazer"
            />
            <div className="portrait-stamp">
              <span>AJ</span>
              <small>
                DESIGN
                <br />
                PORTFOLIO
              </small>
            </div>
          </div>
          <div className="hero-note">
            <span>01 / 06</span>
            <span>
              Selected projects
              <br />
              2025—2026
            </span>
          </div>
          <div className="hero-orbit" aria-hidden="true" />
        </motion.div>
      </section>

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
            A collection of academic explorations in space, furniture and the
            details that shape everyday experience.
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
          <span className="tiny-mark">✳</span> Select any project to explore its
          in-depth case study, design methodology, technical drawings, and material palette.
        </div>
      </motion.section>

      {/* About Section */}
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
              A LITTLE ABOUT ME <span className="eyebrow-line" />
            </p>
            <h2>
              Curiosity first.
              <br />
              <em>People always.</em>
            </h2>
            <p className="about-copy">{SITE_CONFIG.longBio}</p>
            <p className="about-copy muted">{SITE_CONFIG.processBio}</p>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="underlined-link"
            >
              See the complete portfolio <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="about-facts">
            {EDUCATION_FACTS.map((fact) => (
              <div key={fact.index} className="fact-card">
                <span className="fact-index">{fact.index}</span>
                <div className="fact-main">
                  <h3>{fact.title}</h3>
                  <p>{fact.subtitle}</p>
                </div>
                <span className="fact-date">{fact.date}</span>
              </div>
            ))}

            <div className="fact-card workshops">
              <span className="fact-index">04 / WORKSHOPS & CERTIFICATES</span>
              <div className="workshop-list">
                {WORKSHOPS.map((workshop) => (
                  <div key={workshop.topic}>
                    <b>{workshop.institution}</b>
                    <span>{workshop.topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills & Tools Section */}
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
              TOOLS & CAPABILITIES <span className="eyebrow-line" />
            </p>
            <h2>
              Ideas into <em>form.</em>
            </h2>
          </div>
          <p className="section-side-copy">
            A growing toolkit for exploring, developing and communicating design
            ideas.
          </p>
        </div>

        <div className="skills-layout">
          <div className="skill-label">SOFTWARE I WORK WITH</div>
          <div className="tool-list">
            {SOFTWARE_TOOLS.map((tool, index) => (
              <span key={tool}>
                <i>{String(index + 1).padStart(2, "0")}</i>
                {tool}
              </span>
            ))}
          </div>

          <div className="skill-label">DESIGN INTERESTS</div>
          <div className="interest-list">
            {DESIGN_INTERESTS.map((interest) => (
              <span key={interest}>{interest}</span>
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

      {/* Portfolio Book Flipbook Archive */}
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
          <a
            href={BOOK_URL}
            className="text-link"
            target="_blank"
            rel="noreferrer"
          >
            Open full-screen book <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="book-frame">
          <div className="book-topline">
            <span>AANYA JAIN · PORTFOLIO</span>
            <span>FLIPBOOK ARCHIVE ↗</span>
          </div>
          <iframe
            src={BOOK_URL}
            title="Aanya Jain original design portfolio flipbook"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="contact-section"
        id="contact"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="shell contact-inner">
          <p className="eyebrow">
            HAVE A PROJECT OR AN IDEA? <span className="eyebrow-line" />
          </p>
          <h2>
            Let’s make room
            <br />
            for <em>possibility.</em>
          </h2>

          <div className="contact-bottom">
            <a
              className="button button-light"
              href={`mailto:${SITE_CONFIG.email}`}
            >
              Start a conversation <ArrowUpRight size={16} />
            </a>

            <div className="contact-links">
              <a href={`mailto:${SITE_CONFIG.email}`}>
                <Mail size={15} /> Email
              </a>
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <Instagram size={15} /> Instagram
              </a>
              <a
                href={SITE_CONFIG.youtube}
                target="_blank"
                rel="noreferrer"
              >
                <Youtube size={15} /> YouTube
              </a>
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
          <a href="#top">Back to top ↑</a>
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
