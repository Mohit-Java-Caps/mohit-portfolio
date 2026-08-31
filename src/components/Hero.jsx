import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, FileText } from "lucide-react";
import { personal, heroStats } from "../data/mock";
import { useMode } from "../context/ModeContext";
import { Button } from "./ui/button";
import Grid from "./Grid";
import SystemDiagram from "./SystemDiagram";
import { fadeUp, fadeUpSm, staggerContainer, EASE } from "./motionVariants";

const Hero = () => {
  const { enterSystem } = useMode();

  const handleEnterSystem = () => {
    enterSystem();
    const el = document.querySelector("#identity");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <Grid />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div initial="hidden" animate="show" variants={staggerContainer()}>
            <motion.div
              variants={fadeUpSm}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              SYSTEM ONLINE · {personal.location}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl"
            >
              {personal.name}
            </motion.h1>

            <motion.p variants={fadeUp} className="font-display mt-2 text-xl font-medium text-primary sm:text-2xl">
              {personal.role}
            </motion.p>

            <motion.p variants={fadeUp} className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
              {personal.tagline}
            </motion.p>

            <motion.p variants={fadeUpSm} className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
              Java · Spring Boot · AWS · Distributed Systems · Data · AI
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
              <Button
                onClick={handleEnterSystem}
                className="group h-11 rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90"
              >
                Enter system
                <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <a href={personal.resumeUrl} target="_blank" rel="noreferrer">
                <Button variant="outline" className="h-11 rounded-full border-border px-6">
                  <FileText aria-hidden="true" className="mr-2 h-4 w-4" /> View resume
                </Button>
              </a>
              <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Button variant="outline" size="icon" className="h-11 w-11 rounded-full border-border">
                  <Github className="h-4 w-4" aria-hidden="true" />
                </Button>
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {heroStats.map((s) => (
                <motion.div
                  key={s.label}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2, ease: EASE }}
                  className="rounded-xl border border-border bg-card/60 p-4 backdrop-blur"
                >
                  <p className="font-display text-2xl font-semibold text-foreground">{s.value}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p variants={fadeUpSm} className="mt-8 font-mono text-xs text-muted-foreground/70">
              Currently engineering at {personal.company} for {personal.client}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            className="relative rounded-3xl border border-border bg-card/40 p-6 backdrop-blur sm:p-10"
          >
            <SystemDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
