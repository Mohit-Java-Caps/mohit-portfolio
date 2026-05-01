import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Sparkles } from "lucide-react";
import { personal, heroStats } from "../data/mock";
import AnimatedBackground from "./AnimatedBackground";
import { Button } from "./ui/button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => {
  const goTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      <AnimatedBackground />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start gap-8"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
            </span>
            Available for new opportunities · {personal.location}
          </motion.div>

          <motion.h1
            variants={item}
            className="max-w-5xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
          >
            Hi, I'm <span className="text-slate-900 dark:text-white">{personal.name}</span>
            <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              {personal.role}.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl"
          >
            {personal.tagline}{" "}
            <span className="text-slate-500 dark:text-slate-400">{personal.subTagline}</span>
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            <Button
              onClick={() => goTo("#projects")}
              className="group h-12 rounded-full bg-slate-900 px-6 text-base font-medium text-white shadow-lg shadow-blue-600/10 hover:bg-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-cyan-300"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={() => goTo("#contact")}
              variant="outline"
              className="h-12 rounded-full border-slate-300 bg-white/60 px-6 text-base font-medium text-slate-900 hover:border-blue-500 hover:text-blue-600 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-300"
            >
              <Mail className="mr-2 h-4 w-4" /> Contact
            </Button>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-slate-300 bg-white/60 px-5 text-sm font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 grid w-full grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {heroStats.map((s, idx) => (
              <motion.div
                key={s.label}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 p-5 backdrop-blur-md transition-colors dark:border-white/10 dark:bg-white/[0.03]"
              >
                <div
                  className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                  style={{
                    background:
                      idx % 2 === 0
                        ? "radial-gradient(circle, rgba(37,99,235,0.35), transparent 70%)"
                        : "radial-gradient(circle, rgba(6,182,212,0.35), transparent 70%)",
                  }}
                />
                <div className="relative">
                  <p className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {s.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={item}
            className="mt-2 inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400"
          >
            <Sparkles className="h-3.5 w-3.5 text-cyan-500" />
            Currently engineering at {personal.company} for {personal.client}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
