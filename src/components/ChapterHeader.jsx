import React from "react";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "./motionVariants";

// Shared chapter-opening block: system-label numbering + title + description.
// Reused by every narrative chapter so the "01 / 02 / 03..." metaphor stays consistent.
const ChapterHeader = ({ index, label, title, description, className = "" }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={viewportOnce}
    variants={fadeUp}
    className={`max-w-3xl ${className}`}
  >
    <p className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.25em] text-primary">
      {index && <span className="text-muted-foreground">{index}</span>}
      {label}
    </p>
    <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
        {description}
      </p>
    )}
  </motion.div>
);

export default ChapterHeader;
