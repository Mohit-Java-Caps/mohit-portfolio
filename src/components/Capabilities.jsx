import React from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import ChapterHeader from "./ChapterHeader";
import { certifications, minorCertifications, cognizantAward } from "../data/mock";
import { fadeUp, fadeUpSm, staggerContainer, viewportOnce } from "./motionVariants";

const Capabilities = () => (
  <section id="capabilities" className="relative py-24 sm:py-32">
    <div className="mx-auto max-w-4xl px-5 sm:px-8">
      <ChapterHeader
        index="08"
        label="Verified Capabilities"
        title="Capabilities, not badges."
        description="Each of these is a demonstrated capability the system can call on — not a sticker collection."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="mt-10 flex items-start gap-4 rounded-2xl border border-primary/30 bg-primary/5 p-6"
      >
        <Trophy aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-primary" />
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-primary">{cognizantAward.date} · Cognizant Award</p>
          <h3 className="font-display mt-1 text-lg font-semibold text-foreground">{cognizantAward.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cognizantAward.detail}</p>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.07)}
        className="mt-6 grid gap-3 sm:grid-cols-2"
      >
        {certifications.map((c) => (
          <motion.div
            key={c.title}
            variants={fadeUpSm}
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
          >
            <span className="font-mono text-xs text-primary">●</span>
            <div>
              <p className="text-sm font-medium text-foreground">{c.title}</p>
              <p className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">{c.issuer}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-6 flex flex-wrap gap-2">
        {minorCertifications.map((c) => (
          <span key={c.title} className="rounded-full border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground">
            {c.title} · {c.issuer}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Capabilities;
