import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Github } from "lucide-react";
import { navLinks, personal } from "../data/mock";
import { useTheme } from "../context/ThemeContext";
import { useMode } from "../context/ModeContext";
import { useActiveSection } from "../hooks/useActiveSection";
import { Button } from "./ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { mode } = useMode();
  const active = useActiveSection(navLinks, "#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/75 border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 py-4">
        <button onClick={() => handleNav("#home")} className="group flex items-center gap-2.5 text-foreground">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-mono text-sm font-bold text-primary-foreground">
            MK
          </span>
          <span className="hidden font-mono text-xs text-muted-foreground sm:block">
            MODE: <span className="text-primary">{mode === "engineering" ? "ENGINEERING" : "OVERVIEW"}</span>
          </span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-primary/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground/80 transition hover:border-primary/50 hover:text-primary"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </button>

          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground/80 transition hover:border-primary/50 hover:text-primary sm:flex"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>

          <Button
            onClick={() => handleNav("#connect")}
            className="hidden rounded-full bg-primary px-5 text-primary-foreground hover:bg-primary/90 md:inline-flex"
          >
            Connect
          </Button>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/80 md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Open menu"
          >
            {open ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-foreground/90 hover:bg-secondary"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <Button
                  onClick={() => handleNav("#connect")}
                  className="mt-2 w-full rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Connect
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
