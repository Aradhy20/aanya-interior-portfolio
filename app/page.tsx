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
  X,
  Sparkles
} from "lucide-react";

const BOOK_URL = "https://heyzine.com/flip-book/4908923594.html";

type Project = {
  number: string;
  title: string;
  category: "Spatial" | "Furniture";
  type: string;
  place: string;
  year: string;
  image: string;
  imageAlt: string;
  summary: string;
  detail: string;
  focus: string[];
};

const projects: Project[] = [
  {
    number: "01",
    title: "Worker’s Module",
    category: "Spatial",
    type: "Modular shelter",
    place: "Bagru, Rajasthan",
    year: "7th semester · 2026",
    image: "/images/worker-module.webp",
    imageAlt: "Worker’s Module project board and modular shelter concept",
    summary:
      "A temporary, modular space designed around the everyday needs of construction workers: a place to rest, eat, sleep, wash and feel protected.",
    detail:
      "The proposal responds to a 7-acre construction site and its access, climate and movement conditions. The design explores repeatable modular components, shaded seating, drinking water, resting space, storage and open areas that support workers and accompanying families.",
    focus: [
      "Site and climate analysis",
      "Modular planning",
      "Rest, wash and dining zones",
      "Shade and ventilation"
    ]
  },
  {
    number: "02",
    title: "Centre Table",
    category: "Furniture",
    type: "Space-saving furniture",
    place: "Furniture design",
    year: "7th semester · 2026",
    image: "/images/centre-table.webp",
    imageAlt: "Centre Table furniture concept and technical presentation",
    summary:
      "A compact centre table with four nesting stools, designed to create extra seating while keeping the living area uncluttered.",
    detail:
      "The design combines a slatted wooden top with a tubular metal frame. The stools tuck beneath the table when not in use, making the piece economical in space and material. The portfolio documents form exploration, technical drawings, an exploded view, joinery and material choices.",
    focus: [
      "Nesting stool mechanism",
      "Timber and metal pairing",
      "Technical drawings",
      "Material exploration"
    ]
  },
  {
    number: "03",
    title: "Tide & Terra",
    category: "Spatial",
    type: "Rooftop hospitality",
    place: "Kothrud, Pune",
    year: "6th semester · 2026",
    image: "/images/tide-terra.webp",
    imageAlt: "Tide and Terra rooftop hospitality design rendering",
    summary:
      "A rooftop café concept that brings together the enclosure of a cave and the openness of the sky.",
    detail:
      "The hospitality concept uses the meeting of ocean and earth as its design inspiration. It explores privacy, fluid movement, curved forms, open-air dining and a calm, luxurious rooftop atmosphere, supported by site study, moodboards, layouts and 3D views.",
    focus: [
      "Hospitality experience",
      "Cave-inspired forms",
      "Open-air seating",
      "Site and circulation study"
    ]
  },
  {
    number: "04",
    title: "Universal Toilet",
    category: "Spatial",
    type: "Institutional · accessibility",
    place: "Banasthali Vidyapith, Jaipur",
    year: "6th semester · 2026",
    image: "/images/universal-toilet.webp",
    imageAlt: "Universal Toilet institutional design drawing and presentation",
    summary:
      "An institutional toilet-design exercise focused on making an existing facility more accessible and functional.",
    detail:
      "The project studies an existing campus facility and develops a more considered toilet layout. The source portfolio includes existing-site references, a material board and dimensioned design drawings. The intent is to make everyday use clearer and more comfortable for a wider range of users.",
    focus: [
      "Existing-site response",
      "Accessible use",
      "Fixture and circulation planning",
      "Material selection"
    ]
  },
  {
    number: "05",
    title: "Shulabh",
    category: "Spatial",
    type: "Residential",
    place: "Ahmedabad, Gujarat",
    year: "5th semester · 2025",
    image: "/images/shulabh.webp",
    imageAlt: "Shulabh residential project plan and interior design board",
    summary:
      "A residential concept built around simplicity, thermal comfort and thoughtful everyday living.",
    detail:
      "The project explores passive cooling, thermal comfort, sustainability, spatial efficiency and human well-being. The portfolio presents furniture and floor layouts, elevations, interior details and a warm material direction.",
    focus: [
      "Passive cooling",
      "Thermal comfort",
      "Spatial efficiency",
      "Material and furniture planning"
    ]
  },
  {
    number: "06",
    title: "Dining Chair",
    category: "Furniture",
    type: "Furniture design",
    place: "Furniture design",
    year: "5th semester · 2025",
    image: "/images/dining-chair.webp",
    imageAlt: "Dining Chair concept, sketches and design development board",
    summary:
      "A dining-chair exploration where organic curves express both support and openness.",
    detail:
      "The concept, “Protection & openness”, is developed through initial sketches, form studies, prototypes, joinery exploration and technical drawings. The selected direction translates the curve of the body into a sculptural yet functional furniture piece.",
    focus: [
      "Ergonomic study",
      "Sketch-to-form exploration",
      "Prototype development",
      "Wood and upholstery"
    ]
  }
];

const tools = [
  "AutoCAD",
  "SketchUp",
  "3ds Max",
  "Rayon",
  "Illustrator",
  "Photoshop",
  "Canva"
];
const filters = ["All", "Spatial", "Furniture"] as const;

export default function Home() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top">
      <header className="site-header">
        <div className="shell nav-inner">
          <a
            className="brand"
            href="#top"
            onClick={closeMenu}
            aria-label="Aanya Jain home"
          >
            <span className="brand-mark">A.</span>
            <span className="brand-copy">
              AANYA JAIN
              <small>INDUSTRIAL DESIGNER</small>
            </span>
          </a>
          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav
            className={menuOpen ? "main-nav is-open" : "main-nav"}
            aria-label="Main navigation"
          >
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#work" onClick={closeMenu}>Selected work</a>
            <a href="#approach" onClick={closeMenu}>Approach</a>
            <a href="#archive" onClick={closeMenu}>Portfolio book</a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>
              Let’s connect <ArrowUpRight size={14} />
            </a>
          </nav>
        </div>
      </header>

      <section className="shell hero">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <div className="eyebrow">
            <span className="eyebrow-dot" /> DESIGNING WITH INTENTION{" "}
            <span className="eyebrow-line" />
          </div>
          <p className="hero-kicker">Industrial design · Spatial experiences · Furniture</p>
          <h1>Thoughtful spaces.<br /><em>Meaningful</em> living.</h1>
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
            <MapPin size={14} /> Agra, Uttar Pradesh, India <span>·</span>{" "}
            Banasthali Vidyapith
          </div>
        </motion.div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <div className="portrait-frame">
            <img src="/images/aanya-portrait.webp" alt="Aanya Jain in a sage green blazer" />
            <div className="portrait-stamp">
              <span>AJ</span><small>DESIGN<br />PORTFOLIO</small>
            </div>
          </div>
          <div className="hero-note">
            <span>01 / 06</span>
            <span>Selected projects<br />2025—2026</span>
          </div>
          <div className="hero-orbit" aria-hidden="true" />
        </motion.div>
      </section>

      <section className="ticker" aria-label="Design interests">
        <div className="ticker-track">
          <span>SPATIAL DESIGN</span><i>✳</i><span>FURNITURE</span><i>✳</i>
          <span>HUMAN-CENTRED THINKING</span><i>✳</i><span>MATERIAL EXPLORATION</span><i>✳</i>
          <span>SPATIAL DESIGN</span><i>✳</i><span>FURNITURE</span><i>✳</i>
          <span>HUMAN-CENTRED THINKING</span><i>✳</i>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE WORK, SO FAR <span className="eyebrow-line" /></p>
            <h2>Selected <em>projects.</em></h2>
          </div>
          <p className="section-side-copy">
            A collection of academic explorations in space, furniture and the
            details that shape everyday experience.
          </p>
        </div>
        <div className="work-toolbar">
          <span>{String(visibleProjects.length).padStart(2, "0")} PROJECTS</span>
          <div className="filters" role="group" aria-label="Filter projects">
            {filters.map((item) => (
              <button
                key={item}
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
              <motion.button
                layout
                key={project.number}
                className="project-card"
                onClick={() => setSelected(project)}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.28 }}
                aria-label={`View ${project.title} project`}
              >
                <div className="project-art">
                  <img src={project.image} alt={project.imageAlt} loading="lazy" />
                  <span className="art-number">{project.number}</span>
                  <span className="art-open"><ArrowUpRight size={19} /></span>
                </div>
                <div className="project-meta">
                  <span>{project.type}</span><span>{project.year}</span>
                </div>
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <span className="project-place">{project.place}</span>
                </div>
                <p className="project-summary">{project.summary}</p>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
        <div className="work-footnote">
          <span className="tiny-mark">✳</span> Select a project to explore its
          concept, design focus and original portfolio pages.
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="shell about-grid">
          <div className="about-lead">
            <p className="eyebrow">A LITTLE ABOUT ME <span className="eyebrow-line" /></p>
            <h2>Curiosity first.<br /><em>People always.</em></h2>
            <p className="about-copy">
              I’m a 7th-semester design student at Banasthali Vidyapith. I’m
              interested in creating sustainable, ergonomic and smart design
              solutions that make spaces feel intuitive, comfortable and
              connected to the people who use them.
            </p>
            <p className="about-copy muted">
              My process brings together observation, trend forecasting,
              furniture layouts, lighting planning and creative problem-solving.
              I enjoy moving between research, sketches, material choices and
              visualisation to give an idea its full shape.
            </p>
            <a href={BOOK_URL} target="_blank" rel="noreferrer" className="underlined-link">
              See the complete portfolio <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="about-facts">
            <div className="fact-card">
              <span className="fact-index">01 / EDUCATION</span>
              <div className="fact-main">
                <h3>Banasthali Vidyapith</h3>
                <p>Bachelor’s in Design · Jaipur</p>
              </div>
              <span className="fact-date">2023—2027</span>
            </div>
            <div className="fact-card">
              <span className="fact-index">02 / ACADEMICS</span>
              <div className="fact-main">
                <h3>Senior Secondary · PCM</h3>
                <p>Divine International Academy · CBSE</p>
              </div>
              <span className="fact-date">88.4%</span>
            </div>
            <div className="fact-card">
              <span className="fact-index">03 / ACADEMICS</span>
              <div className="fact-main">
                <h3>Secondary School</h3>
                <p>Divine International Academy · CBSE</p>
              </div>
              <span className="fact-date">91.6%</span>
            </div>
            <div className="fact-card workshops">
              <span className="fact-index">04 / WORKSHOPS & CERTIFICATES</span>
              <div className="workshop-list">
                <div><b>IIT Delhi</b><span>Interior Design Basics Workshop</span></div>
                <div><b>IIT Bombay</b><span>AutoCAD Workshop</span></div>
                <div><b>Head of Department</b><span>Department certificate</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell skills-section">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">TOOLS & CAPABILITIES <span className="eyebrow-line" /></p>
            <h2>Ideas into <em>form.</em></h2>
          </div>
          <p className="section-side-copy">
            A growing toolkit for exploring, developing and communicating
            design ideas.
          </p>
        </div>
        <div className="skills-layout">
          <div className="skill-label">SOFTWARE I WORK WITH</div>
          <div className="tool-list">
            {tools.map((tool, index) => (
              <span key={tool}><i>{String(index + 1).padStart(2, "0")}</i>{tool}</span>
            ))}
          </div>
          <div className="skill-label">DESIGN INTERESTS</div>
          <div className="interest-list">
            <span>Trend forecasting</span><span>Furniture layouts</span>
            <span>Lighting planning</span><span>Creative problem-solving</span>
            <span>Material exploration</span><span>3D visualisation</span>
          </div>
        </div>
      </section>

      <section className="approach-section" id="approach">
        <div className="shell">
          <div className="approach-top">
            <p className="eyebrow">HOW I THINK <span className="eyebrow-line" /></p>
            <h2>Good design begins<br />with <em>listening.</em></h2>
          </div>
          <div className="approach-grid">
            <article>
              <span>01</span><h3>Observe</h3>
              <p>Understand the site, climate, movement and the small routines that shape how a space is used.</p>
            </article>
            <article>
              <span>02</span><h3>Imagine</h3>
              <p>Explore concepts, materials and forms that respond to real needs without losing a sense of character.</p>
            </article>
            <article>
              <span>03</span><h3>Resolve</h3>
              <p>Bring the idea together through layouts, details, drawings and visualisations that communicate intent.</p>
            </article>
          </div>
          <div className="quote-block">
            <Sparkles size={19} />
            <blockquote>
              “Anyone can find a solution, but a designer elevates it into an experience.”
            </blockquote>
            <cite>— Aanya Jain</cite>
          </div>
        </div>
      </section>

      <section className="section shell archive-section" id="archive">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE FULL COLLECTION <span className="eyebrow-line" /></p>
            <h2>Look a little <em>closer.</em></h2>
          </div>
          <a href={BOOK_URL} className="text-link" target="_blank" rel="noreferrer">
            Open full-screen book <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="book-frame">
          <div className="book-topline">
            <span>AANYA JAIN · PORTFOLIO</span><span>FLIPBOOK ARCHIVE ↗</span>
          </div>
          <iframe
            src={BOOK_URL}
            title="Aanya Jain original design portfolio flipbook"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-inner">
          <p className="eyebrow">HAVE A PROJECT OR AN IDEA? <span className="eyebrow-line" /></p>
          <h2>Let’s make room<br />for <em>possibility.</em></h2>
          <div className="contact-bottom">
            <a className="button button-light" href="mailto:aanyachandoriya2@gmail.com">
              Start a conversation <ArrowUpRight size={16} />
            </a>
            <div className="contact-links">
              <a href="mailto:aanyachandoriya2@gmail.com"><Mail size={15} /> Email</a>
              <a href="https://www.instagram.com/jainj_enny/" target="_blank" rel="noreferrer">
                <Instagram size={15} /> Instagram
              </a>
              <a href="https://www.youtube.com/@aanyajain234" target="_blank" rel="noreferrer">
                <Youtube size={15} /> YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <a href="#top" className="footer-brand">
            AANYA JAIN<span>INDUSTRIAL DESIGNER</span>
          </a>
          <span>Designed with curiosity · 2026</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal-backdrop"
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.section
              className="project-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelected(null)}
                aria-label="Close project details"
              >
                <X size={20} />
              </button>
              <div className="modal-kicker">PROJECT {selected.number} <span>·</span> {selected.type}</div>
              <div className="modal-art">
                <img src={selected.image} alt={selected.imageAlt} />
              </div>
              <div className="modal-content">
                <div className="modal-meta">{selected.place} <span>·</span> {selected.year}</div>
                <h2 id="modal-title">{selected.title}</h2>
                <p>{selected.detail}</p>
                <div className="focus-label">DESIGN FOCUS</div>
                <div className="focus-tags">
                  {selected.focus.map((item) => <span key={item}>{item}</span>)}
                </div>
                <a className="button button-dark modal-book" href={BOOK_URL} target="_blank" rel="noreferrer">
                  View original portfolio pages <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
