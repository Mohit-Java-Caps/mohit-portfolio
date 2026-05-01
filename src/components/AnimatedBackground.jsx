import React from "react";
import { motion } from "framer-motion";

/**
 * Subtle animated grid + glow background.
 * Uses CSS variables so it adapts to dark/light mode automatically.
 */
const AnimatedBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35] dark:opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(56,118,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,118,255,0.08) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at 50% 30%, #000 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 30%, #000 40%, transparent 75%)",
        }}
      />

      {/* Soft blue glow */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0.6, scale: 1 }}
        animate={{ opacity: [0.55, 0.8, 0.55], scale: [1, 1.05, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(37,99,235,0.35), rgba(6,182,212,0.10) 45%, transparent 70%)",
        }}
      />

      {/* Cyan accent glow */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0.4 }}
        animate={{ opacity: [0.3, 0.55, 0.3], x: [0, 30, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[8%] top-[40%] h-[320px] w-[320px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(6,182,212,0.30), transparent 70%)",
        }}
      />

      {/* Subtle noise overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
