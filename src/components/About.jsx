import React from "react";
import { motion } from "framer-motion";
import { Cpu, Cloud, Database, Layers } from "lucide-react";
import { aboutHighlights, personal } from "../data/mock";

const pillars = [
  {
    icon: Cpu,
    title: "Backend craftsmanship",
    text: "Java, Spring Boot and microservices designed for clarity, testability and scale.",
  },
  {
    icon: Cloud,
    title: "Cloud-native pipelines",
    text: "Event-driven architectures on AWS — S3, SNS, SQS and ECS in production.",
  },
  {
    icon: Database,
    title: "Data at scale",
    text: "Apache Spark + Kafka workloads, indexed PostgreSQL queries, MongoDB.",
  },
  {
    icon: Layers,
    title: "Full-stack delivery",
    text: "Comfortable shipping end-to-end features with Angular and modern JS.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-400">
            About
          </p>
          <h2
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl"
            style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
          >
            Engineer focused on systems that
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              {" "}don't break under load.
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            I'm {personal.firstName}, a Java Full Stack Engineer with {""}
            <span className="font-medium text-slate-900 dark:text-white">2.5+ years</span> of
            production experience at {personal.company} working with {personal.client}. I care
            deeply about clean architecture, observable systems and writing code that other
            engineers love to read.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="space-y-3 lg:col-span-2"
          >
            {aboutHighlights.map((h, i) => (
              <li
                key={i}
                className="flex gap-3 rounded-xl border border-slate-200/80 bg-white/60 p-4 text-sm leading-relaxed text-slate-700 backdrop-blur dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300"
              >
                <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-md bg-gradient-to-br from-blue-600 to-cyan-400 text-[10px] font-bold text-white">
                  {i + 1}
                </span>
                <span>{h}</span>
              </li>
            ))}
          </motion.ul>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 p-6 backdrop-blur-md transition-colors dark:border-white/10 dark:bg-white/[0.03]"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/0 to-cyan-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-blue-500/10 dark:to-cyan-400/5" />
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-white/5 dark:text-cyan-300 dark:group-hover:bg-cyan-400 dark:group-hover:text-slate-900">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {p.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
