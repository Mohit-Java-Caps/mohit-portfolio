import { useEffect, useState } from "react";

// Shared scroll-spy: returns the href ("#id") of whichever section is currently
// in view, given a list of {href} entries. Used by Navbar and the chapter rail.
export function useActiveSection(items, fallback) {
  const [active, setActive] = useState(fallback);

  useEffect(() => {
    const onScroll = () => {
      const sections = items.map((l) => document.querySelector(l.href)).filter(Boolean);
      const y = window.scrollY + 120;
      let current = fallback;
      sections.forEach((sec) => {
        if (sec.offsetTop <= y) current = `#${sec.id}`;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return active;
}
