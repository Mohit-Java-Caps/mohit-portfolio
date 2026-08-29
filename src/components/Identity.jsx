import React from "react";
import { motion } from "framer-motion";
import ChapterHeader from "./ChapterHeader";
import { identityHighlights } from "../data/mock";
import { fadeUpSm, staggerContainer, viewportOnce } from "./motionVariants";

const Identity = () => (
  <section id="identity" className="relative py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <ChapterHeader
        index="01"
        label="Identity"
        title="Java Full-Stack Engineer. Systems-minded by default."
        description="Not a title chase — a preference for building things that keep working after the demo, under real load, with real failure modes."
      />

      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.1)}
        className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2"
      >
        {identityHighlights.map((h, i) => (
          <motion.li
            key={i}
            variants={fadeUpSm}
            className="bg-card p-6 text-base leading-relaxed text-foreground/90 sm:p-8"
          >
            <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
            <p className="mt-2">{h}</p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  </section>
);

export default Identity;
