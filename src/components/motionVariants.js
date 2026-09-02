// Shared Framer Motion variants so chapters don't each redefine the same easing/timing.
export const EASE = [0.22, 1, 0.36, 1];

// y-offsets kept in the 8-16px range (per ui-ux-pro-max gsap guidance) so this
// reads as a fade with lift, not a slide-in.
export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export const fadeUpSm = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

// Standard-tier hover lift for cards (case studies, repos): small, consistent,
// transform/opacity-only so it stays on the compositor thread.
export const hoverLift = { y: -4, scale: 1.02, transition: { duration: 0.25, ease: "easeOut" } };

export const staggerContainer = (stagger = 0.08) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger } },
});

export const viewportOnce = { once: true, margin: "-80px" };
