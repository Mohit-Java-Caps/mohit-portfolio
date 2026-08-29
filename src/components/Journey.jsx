import React from "react";
import { motion } from "framer-motion";
import ChapterHeader from "./ChapterHeader";
import { journey } from "../data/mock";
import { fadeUp, viewportOnce } from "./motionVariants";

const Journey = () => (
  <section id="journey" className="relative py-24 sm:py-32">
    <div className="mx-auto max-w-4xl px-5 sm:px-8">
      <ChapterHeader
        index="06"
        label="Journey"
        title="Evolution, not a resume list."
        description="Real dates, real promotions — no invented milestones."
      />

      <div className="relative mt-14">
        <div aria-hidden="true" className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-border sm:left-[7px]" />
        <ol className="space-y-10">
          {journey.map((step, i) => (
            <motion.li
              key={step.title}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ delay: i * 0.05 }}
              className="relative pl-8"
            >
              <span aria-hidden="true" className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background" />
              <p className="font-mono text-xs font-semibold uppercase tracking-wide text-primary">{step.date}</p>
              <h3 className="font-display mt-1 text-lg font-semibold text-foreground sm:text-xl">{step.title}</h3>
              <p className="mt-0.5 text-sm text-muted-foreground">{step.place}</p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground/80 sm:text-base">{step.detail}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default Journey;
