import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import ChapterHeader from "./ChapterHeader";
import { principles } from "../data/mock";
import { fadeUp, viewportOnce, EASE } from "./motionVariants";

const PrincipleCard = ({ principle }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.button
      variants={fadeUp}
      onClick={() => setOpen((o) => !o)}
      aria-expanded={open}
      className={`text-left rounded-2xl border p-6 transition-colors ${
        open ? "border-primary/40 bg-primary/5" : "border-border bg-card hover:border-primary/30"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-foreground">{principle.title}</h3>
        <Plus aria-hidden="true" className={`h-4 w-4 flex-none text-primary transition-transform ${open ? "rotate-45" : ""}`} />
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="mt-3 overflow-hidden text-sm leading-relaxed text-muted-foreground"
          >
            {principle.example}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

const Mindset = () => (
  <section id="mindset" className="relative py-24 sm:py-32">
    <div className="mx-auto max-w-5xl px-5 sm:px-8">
      <ChapterHeader
        index="05"
        label="Engineering Mindset"
        title="How I think."
        description="Principles that only earn a place here if there's a real example behind them. Click one to see it."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-12 grid gap-4 sm:grid-cols-2"
      >
        {principles.map((p) => (
          <PrincipleCard key={p.id} principle={p} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default Mindset;
