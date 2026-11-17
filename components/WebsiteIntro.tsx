"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WebsiteIntroProps {
  onComplete: () => void;
}

export default function WebsiteIntro({ onComplete }: WebsiteIntroProps) {
  const [stage, setStage] = useState<"enter" | "name" | "sub" | "exit" | "done">("enter");

  useEffect(() => {
    // Check if user already saw intro during this browsing session
    const hasSeen = typeof window !== "undefined" && sessionStorage.getItem("aj_intro_seen");
    if (hasSeen) {
      onComplete();
      setStage("done");
      return;
    }

    const t1 = setTimeout(() => setStage("name"), 450);
    const t2 = setTimeout(() => setStage("sub"), 1100);
    const t3 = setTimeout(() => {
      setStage("exit");
      if (typeof window !== "undefined") {
        sessionStorage.setItem("aj_intro_seen", "true");
      }
    }, 2200);
    const t4 = setTimeout(() => {
      setStage("done");
      onComplete();
    }, 2850);

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        skipIntro();
      }
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      window.removeEventListener("keydown", handleKey);
    };
  }, [onComplete]);

  const skipIntro = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("aj_intro_seen", "true");
    }
    setStage("done");
    onComplete();
  };

  return (
    <AnimatePresence>
      {stage !== "done" && (
        <motion.div
          key="intro-overlay"
          className="intro-overlay"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
          }}
          aria-hidden={false}
        >
          {/* Subtle architectural grid lines */}
          <div className="intro-grid-backdrop" aria-hidden="true">
            <span className="intro-line v-line left" />
            <span className="intro-line v-line right" />
            <span className="intro-line h-line top" />
            <span className="intro-line h-line bottom" />
          </div>

          <div className="intro-center-box">
            {/* Monogram A. */}
            <motion.div
              className="intro-monogram"
              initial={{ scale: 0.8, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="intro-monogram-text">A.</span>
            </motion.div>

            {/* Name Reveal */}
            <div className="intro-name-wrap">
              <motion.h1
                className="intro-name"
                initial={{ y: 35, opacity: 0 }}
                animate={
                  stage === "name" || stage === "sub" || stage === "exit"
                    ? { y: 0, opacity: 1 }
                    : { y: 35, opacity: 0 }
                }
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                AANYA JAIN
              </motion.h1>
            </div>

            {/* Subtitle / Tagline */}
            <div className="intro-sub-wrap">
              <motion.p
                className="intro-sub"
                initial={{ opacity: 0, letterSpacing: "0.1em" }}
                animate={
                  stage === "sub" || stage === "exit"
                    ? { opacity: 1, letterSpacing: "0.22em" }
                    : { opacity: 0, letterSpacing: "0.1em" }
                }
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                INTERIOR & INDUSTRIAL DESIGN
              </motion.p>
            </div>
          </div>

          {/* Skip Control */}
          <button
            type="button"
            className="intro-skip-btn"
            onClick={skipIntro}
            aria-label="Skip website introduction"
          >
            <span>Skip Intro</span>
            <span className="intro-skip-kbd">Esc</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
