"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Smooth springs for cursor position
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    // Check if device supports fine hover (desktop mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!mediaQuery.matches || prefersReducedMotion.matches) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".project-card") ||
        target.closest(".cert-card") ||
        target.closest(".featured-recognition-card") ||
        target.closest(".filter-pill") ||
        target.closest("[role='button']") ||
        target.closest("[role='tab']");

      setHovered(Boolean(isInteractive));
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, visible]);

  if (isTouchDevice || !visible) return null;

  return (
    <div className="custom-cursor-container" aria-hidden="true">
      {/* Outer Spring Ring */}
      <motion.div
        className="custom-cursor-ring"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          scale: hovered ? 1.75 : 1,
          borderColor: hovered ? "rgba(95, 111, 82, 0.75)" : "rgba(28, 29, 26, 0.28)",
          backgroundColor: hovered ? "rgba(95, 111, 82, 0.08)" : "rgba(0, 0, 0, 0)"
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      />

      {/* Inner Dot */}
      <motion.div
        className="custom-cursor-dot"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          scale: hovered ? 0.6 : 1,
          backgroundColor: hovered ? "var(--sage)" : "var(--ink)"
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />
    </div>
  );
}
