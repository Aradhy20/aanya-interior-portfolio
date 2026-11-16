import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Compass,
  Download,
  Layers,
  Lightbulb,
  Mail,
  MapPin,
  Ruler,
  Search,
  Sparkles,
  UserCheck
} from "lucide-react";
import { PROJECTS, getProjectBySlug, type Project } from "@/data/projects";
import { SITE_CONFIG } from "@/data/site-config";
import ProjectImageViewer from "@/components/ProjectImageViewer";

type Props = {
  params: Promise<{ slug: string }>;
};

const baseUrl = SITE_CONFIG.siteUrl.replace(/\/$/, "");

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Aanya Jain Design Portfolio"
    };
  }

  const pageUrl = `${baseUrl}/projects/${project.slug}`;
  const imageUrl = `${baseUrl}${project.seoImage}`;

  return {
    title: project.metaTitle,
    description: project.metaDescription,
    keywords: project.keywords,
    alternates: {
      canonical: pageUrl
    },
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      url: pageUrl,
      type: "article",
      siteName: "Aanya Jain Design Portfolio",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 675,
          alt: project.imageAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: project.metaTitle,
      description: project.metaDescription,
      images: [imageUrl]
    }
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const prevProject =
    currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject =
    currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

  const relatedProjects = (project.caseStudy.relatedProjectSlugs || [])
    .map((s) => getProjectBySlug(s))
    .filter((p): p is Project => Boolean(p));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${baseUrl}/projects/${project.slug}#creativework`,
        name: project.title,
        headline: project.metaTitle,
        description: project.metaDescription,
        url: `${baseUrl}/projects/${project.slug}`,
        image: `${baseUrl}${project.seoImage}`,
        author: {
          "@type": "Person",
          name: SITE_CONFIG.name,
          url: baseUrl
        },
        creator: {
          "@type": "Person",
          name: SITE_CONFIG.name,
          jobTitle: SITE_CONFIG.role
        },
        genre: project.category === "Spatial" ? "Spatial Design" : "Furniture Design",
        dateCreated: project.year,
        inLanguage: "en-US",
        locationCreated: {
          "@type": "Place",
          name: project.place
        },
        keywords: project.keywords.join(", ")
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/projects/${project.slug}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${baseUrl}/`
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Selected Work",
            item: `${baseUrl}/#work`
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: `${baseUrl}/projects/${project.slug}`
          }
        ]
      }
    ]
  };

  const { caseStudy } = project;

  return (
    <article className="project-page-shell">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Editorial Sticky Navigation Bar */}
      <header className="project-page-nav">
        <div className="shell project-page-nav-inner">
          <Link href="/#work" className="project-back-link">
            <ArrowLeft size={16} />
            <span>Back to All Projects</span>
          </Link>

          {/* Breadcrumbs Navigation */}
          <nav aria-label="Breadcrumb" className="breadcrumbs-nav">
            <ol className="breadcrumbs-list">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-hidden="true" className="breadcrumb-sep">/</li>
              <li>
                <Link href="/#work">Projects</Link>
              </li>
              <li aria-hidden="true" className="breadcrumb-sep">/</li>
              <li aria-current="page" className="breadcrumb-active">
                {project.title}
              </li>
            </ol>
          </nav>

          <div className="project-nav-actions">
            <a
              href={SITE_CONFIG.resumeDownloadUrl}
              download="Aanya-Jain-Resume.pdf"
              className="project-nav-resume-btn"
            >
              <Download size={13} /> Resume
            </a>
            <a href="#contact-cta" className="project-nav-contact-btn">
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="shell project-page-body">
        {/* Project Header Banner */}
        <section className="project-page-header">
          <div className="project-page-eyebrow-row">
            <span className="project-number-badge">PROJECT {project.number}</span>
            <span className="project-category-tag">{project.category} DESIGN</span>
            <span className="project-type-tag">{project.type}</span>
          </div>

          <h1 className="project-page-title">{project.title}</h1>

          <p className="project-concept-statement">
            Concept: <em>{caseStudy.conceptTitle}</em> — {caseStudy.conceptDescription}
          </p>

          <div className="project-meta-strip">
            <div className="meta-strip-item">
              <MapPin size={15} />
              <span>
                <strong>Location:</strong> {project.place}
              </span>
            </div>
            <div className="meta-strip-item">
              <Calendar size={15} />
              <span>
                <strong>Academic Term:</strong> {project.year}
              </span>
            </div>
            <div className="meta-strip-item">
              <Compass size={15} />
              <span>
                <strong>Institution:</strong> {SITE_CONFIG.university}
              </span>
            </div>
          </div>
        </section>

        {/* Primary Artwork / Technical Drawing Viewer */}
        <section className="project-hero-media-section" aria-label="Project Visual Presentation">
          <ProjectImageViewer
            src={project.seoImage}
            alt={project.imageAlt}
            caption={project.imageAlt}
            badge={`Visual Study · ${project.place}`}
          />
        </section>

        {/* 17-Point Detailed Case Study Sections */}
        <div className="project-case-study-grid">
          {/* Section 1 & 2: Brief & Problem Statement */}
          <section className="case-study-module-row">
            <div className="case-module-card highlight-card">
              <div className="card-header-icon">
                <Lightbulb size={18} />
                <h3>01. Design Brief</h3>
              </div>
              <p className="module-prose">{caseStudy.designBrief || caseStudy.problemBrief}</p>
            </div>

            <div className="case-module-card highlight-card">
              <div className="card-header-icon">
                <Search size={18} />
                <h3>02. Problem Statement</h3>
              </div>
              <p className="module-prose">{caseStudy.problemStatement || caseStudy.problemBrief}</p>
            </div>
          </section>

          {/* Section 3: Research & Site Observations */}
          <section className="case-study-module-full">
            <div className="case-module-card">
              <div className="card-header-icon">
                <Compass size={18} />
                <h3>03. Research, Site & Ergonomic Observations</h3>
              </div>
              <p className="module-lead">
                Rigorous on-ground analysis, climate mapping, and human factor studies established
                the design constraints:
              </p>
              <ul className="module-checklist">
                {caseStudy.researchSiteAnalysis.map((item, idx) => (
                  <li key={idx}>
                    <span className="check-bullet" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 4: Design Objectives */}
          {caseStudy.designObjectives && caseStudy.designObjectives.length > 0 && (
            <section className="case-study-module-full">
              <div className="case-module-card">
                <div className="card-header-icon">
                  <Sparkles size={18} />
                  <h3>04. Design Objectives & Performance Criteria</h3>
                </div>
                <div className="objectives-pill-grid">
                  {caseStudy.designObjectives.map((obj, idx) => (
                    <div key={idx} className="objective-box">
                      <span className="objective-num">OBJ 0{idx + 1}</span>
                      <p>{obj}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Section 5 & 6: Concept Development & Moodboard Inspiration */}
          <section className="case-study-module-row">
            <div className="case-module-card">
              <div className="card-header-icon">
                <Layers size={18} />
                <h3>05. Concept Development</h3>
              </div>
              <ul className="module-checklist">
                {caseStudy.designDevelopment.map((dev, idx) => (
                  <li key={idx}>
                    <span className="check-bullet" />
                    <span>{dev}</span>
                  </li>
                ))}
              </ul>
            </div>

            {caseStudy.moodboardInspiration && (
              <div className="case-module-card">
                <div className="card-header-icon">
                  <Sparkles size={18} />
                  <h3>06. Moodboard & Inspiration</h3>
                </div>
                <ul className="module-checklist">
                  {caseStudy.moodboardInspiration.map((insp, idx) => (
                    <li key={idx}>
                      <span className="check-bullet" />
                      <span>{insp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* Section 7: Space Planning & Layouts */}
          {caseStudy.spacePlanningLayouts && caseStudy.spacePlanningLayouts.length > 0 && (
            <section className="case-study-module-full">
              <div className="case-module-card">
                <div className="card-header-icon">
                  <Ruler size={18} />
                  <h3>07. Space Planning & Layout Strategy</h3>
                </div>
                <p className="module-lead">
                  Functional zoning, circulation clearances, and volumetric layout principles:
                </p>
                <div className="space-planning-grid">
                  {caseStudy.spacePlanningLayouts.map((plan, idx) => (
                    <div key={idx} className="planning-card">
                      <span className="planning-idx">ZONE 0{idx + 1}</span>
                      <p>{plan}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Section 8 & 9: Material Selection & Furniture/Lighting */}
          <section className="case-study-module-row">
            <div className="case-module-card">
              <div className="card-header-icon">
                <Layers size={18} />
                <h3>08. Material Selection & Finishes</h3>
              </div>
              <p className="module-lead">
                Selected for durability, sustainability, passive thermal response, and tactile warmth:
              </p>
              <ul className="materials-list">
                {caseStudy.materialsFinishes.map((mat, idx) => (
                  <li key={idx} className="material-pill-item">
                    <span className="mat-dot" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {caseStudy.furnitureLighting && (
              <div className="case-module-card">
                <div className="card-header-icon">
                  <Lightbulb size={18} />
                  <h3>09. Furniture & Lighting Considerations</h3>
                </div>
                <p className="module-lead">
                  Custom millwork, ergonomics, and natural/artificial illumination integration:
                </p>
                <ul className="materials-list">
                  {caseStudy.furnitureLighting.map((fl, idx) => (
                    <li key={idx} className="material-pill-item">
                      <span className="mat-dot" />
                      <span>{fl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* Section 10: Technical Drawings & Documentation */}
          <section className="case-study-module-full">
            <div className="case-module-card">
              <div className="card-header-icon">
                <Ruler size={18} />
                <h3>10. Technical Drawings & Construction Detailing</h3>
              </div>
              <p className="module-lead">
                Standard architectural and joinery drafting prepared in AutoCAD:
              </p>
              <div className="technical-drawings-grid">
                {caseStudy.technicalDrawings.map((draw, idx) => (
                  <div key={idx} className="drawing-sheet-card">
                    <div className="drawing-sheet-header">
                      <span className="sheet-tag">SHEET {idx + 1}</span>
                      <h4>{draw.title}</h4>
                    </div>
                    <p>{draw.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 11 & 12: Final Outcome & Aanya's Contribution */}
          <section className="case-study-module-row">
            <div className="case-module-card outcome-card">
              <div className="card-header-icon">
                <Sparkles size={18} />
                <h3>11. Final Outcome & Key Highlights</h3>
              </div>
              <p className="module-prose">{caseStudy.finalOutcome}</p>
              <div className="outcome-highlights-box">
                <strong>Project Highlights:</strong>
                <ul>
                  {caseStudy.keyHighlights.map((hl, idx) => (
                    <li key={idx}>{hl}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="case-module-card contribution-card">
              <div className="card-header-icon">
                <UserCheck size={18} />
                <h3>12. Aanya’s Specific Contribution</h3>
              </div>
              <p className="module-lead">
                Verified academic responsibilities delivered during the project lifecycle:
              </p>
              <ul className="contribution-list">
                {(caseStudy.specificContribution || caseStudy.learningOutcomes).map(
                  (item, idx) => (
                    <li key={idx}>
                      <span className="contrib-check">✓</span>
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </section>
        </div>

        {/* Project Call to Action */}
        <section id="contact-cta" className="project-cta-banner">
          <div className="project-cta-inner">
            <p className="eyebrow">DESIGN INQUIRY & COLLABORATION</p>
            <h2>Interested in discussing this project or exploring an internship collaboration?</h2>
            <p className="cta-subtext">
              Aanya Jain is open to interior and industrial design internships, spatial design research,
              and collaborative design inquiries.
            </p>
            <div className="cta-buttons-row">
              <a
                href={`mailto:${SITE_CONFIG.email}?subject=Inquiry regarding ${project.title}`}
                className="button button-light"
              >
                <Mail size={15} /> Discuss This Project <ArrowUpRight size={14} />
              </a>
              <a
                href={SITE_CONFIG.resumeDownloadUrl}
                download="Aanya-Jain-Resume.pdf"
                className="button button-dark"
              >
                <Download size={15} /> Download Full Resume (PDF)
              </a>
            </div>
          </div>
        </section>

        {/* Related Projects Contextual Linking */}
        {relatedProjects.length > 0 && (
          <section className="related-projects-section">
            <div className="related-section-header">
              <h3>Related Case Studies</h3>
              <p>Explore complementary spatial planning and furniture design work:</p>
            </div>
            <div className="related-cards-grid">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/projects/${rel.slug}`}
                  className="related-project-card"
                >
                  <div className="related-card-art">
                    <img
                      src={rel.seoImage}
                      alt={rel.imageAlt}
                      loading="lazy"
                      width={400}
                      height={240}
                    />
                    <span className="related-card-num">{rel.number}</span>
                  </div>
                  <div className="related-card-body">
                    <span className="related-card-cat">{rel.category} DESIGN</span>
                    <h4>{rel.title}</h4>
                    <p>{rel.summary}</p>
                    <span className="related-card-cta">
                      View Case Study <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Previous / Next Project Navigation Bar */}
        <nav className="project-pagination-bar" aria-label="Project Navigation">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="pagination-item prev"
          >
            <span className="pagination-label">
              <ArrowLeft size={14} /> PREVIOUS PROJECT
            </span>
            <span className="pagination-title">{prevProject.title}</span>
          </Link>

          <Link href="/#work" className="pagination-overview-btn">
            All Projects
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="pagination-item next"
          >
            <span className="pagination-label">
              NEXT PROJECT <ArrowRight size={14} />
            </span>
            <span className="pagination-title">{nextProject.title}</span>
          </Link>
        </nav>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="shell footer-inner">
          <Link href="/" className="footer-brand">
            {SITE_CONFIG.name.toUpperCase()}
            <span>{SITE_CONFIG.role.toUpperCase()}</span>
          </Link>
          <span>Designed with curiosity · 2026</span>
          <div className="footer-links">
            <Link href="/#about">About</Link>
            <span>·</span>
            <Link href="/#work">Work</Link>
            <span>·</span>
            <Link href="/#faq">FAQ</Link>
            <span>·</span>
            <a href={SITE_CONFIG.resumeDownloadUrl} download="Aanya-Jain-Resume.pdf">
              Resume PDF
            </a>
          </div>
        </div>
      </footer>
    </article>
  );
}
