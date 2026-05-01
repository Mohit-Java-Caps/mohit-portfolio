import React from "react";
import { motion } from "framer-motion";
import { Code2, Trophy, Award, Sparkles, GitBranch, Zap } from "lucide-react";
import { achievements } from "../data/mock";

const iconMap = { Code2, Trophy, Award, Sparkles, GitBranch, Zap };

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-400">
            Achievements
          </p>
          <h2
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl"
            style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
          >
            Recognised for problem solving and impact.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Certifications, contests and production wins that round out the engineering story.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, idx) => {
            const Icon = iconMap[a.icon] || Trophy;
            return (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: idx * 0.04 }}
                whileHover={{ y: -4 }}
                className="group relative flex gap-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 p-5 backdrop-blur-md transition-colors hover:border-blue-500/50 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-cyan-400/40"
              >
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-cyan-400/10 dark:text-cyan-300 dark:group-hover:bg-cyan-400 dark:group-hover:text-slate-900">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                    {a.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {a.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
