"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { FAQS, type FaqItem } from "@/data/faq";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("who-is-aanya-jain");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Identity & Background", "Design Concepts", "Portfolio & Collaboration"] as const;

  const filteredFaqs = FAQS.filter(
    (faq) => activeCategory === "All" || faq.category === activeCategory
  );

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-heading">
      <div className="shell">
        <div className="faq-header">
          <p className="eyebrow">
            ANSWERS & SPECIALIZATION <span className="eyebrow-line" />
          </p>
          <div className="faq-title-row">
            <h2 id="faq-heading" className="faq-main-title">
              Frequently Asked <em>Questions.</em>
            </h2>
            <p className="faq-subtitle">
              Clear, factual answers about Aanya Jain’s design background, spatial methodology,
              software proficiency, and portfolio case studies.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="faq-filter-pills" role="tablist" aria-label="FAQ categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                className={`filter-pill ${activeCategory === cat ? "is-active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-accordion-list">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <motion.article
                key={faq.id}
                className={`faq-item ${isOpen ? "is-open" : ""}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="faq-index">0{index + 1}</span>
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-icon-wrap" aria-hidden="true">
                    <ChevronDown
                      size={18}
                      className={`faq-chevron ${isOpen ? "rotate-180" : ""}`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      className="faq-answer-pane"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="faq-answer-inner">
                        <p className="faq-answer-text">{faq.answer}</p>

                        {faq.relatedLinks && faq.relatedLinks.length > 0 && (
                          <div className="faq-related-links">
                            <span className="faq-related-label">Related section:</span>
                            {faq.relatedLinks.map((link) => (
                              <a
                                key={link.href}
                                href={link.href}
                                className="faq-deep-link"
                              >
                                {link.label} <ArrowUpRight size={12} />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>

        {/* Direct contact hint */}
        <div className="faq-footer-note">
          <p>
            Have a question not answered here?{" "}
            <a href="#contact" className="faq-contact-link">
              Reach out directly for collaborations or inquiries ↗
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
