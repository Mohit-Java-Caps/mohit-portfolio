import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import ChapterHeader from "./ChapterHeader";
import { dsaCategories, dsaStats, personal } from "../data/mock";
import { fadeUpSm, staggerContainer, viewportOnce } from "./motionVariants";

const ProblemSolving = () => (
  <section id="problem-solving" className="relative py-24 sm:py-32">
    <div className="mx-auto max-w-4xl px-5 sm:px-8">
      <ChapterHeader
        index="07"
        label="Problem Solving"
        title={`${dsaStats.solved} problems solved.`}
        description="Not a fabricated activity graph — a category map of where the reps went."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.05)}
        className="mt-10 flex flex-wrap gap-2.5"
      >
        {dsaCategories.map((c) => (
          <motion.span
            key={c}
            variants={fadeUpSm}
            className="rounded-full border border-border bg-card px-4 py-2 font-mono text-sm text-foreground/90"
          >
            {c}
          </motion.span>
        ))}
      </motion.div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {[dsaStats.solved + " solved", dsaStats.rating, dsaStats.gfg].map((s) => (
          <div key={s} className="rounded-xl border border-border bg-card p-4 text-center font-mono text-sm text-foreground/90">
            {s}
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={personal.leetcode}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 font-mono text-xs text-foreground hover:border-primary/50"
        >
          LeetCode profile <ExternalLink className="h-3 w-3" />
        </a>
        <a
          href={personal.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 font-mono text-xs text-foreground hover:border-primary/50"
        >
          GitHub <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  </section>
);

export default ProblemSolving;
