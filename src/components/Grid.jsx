import React from "react";

// Static technical-grid backdrop. No pulsing blobs, no gradients — just enough
// structure to read as "engineering system" rather than "marketing page".
const Grid = ({ className = "" }) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
  >
    <div
      className="absolute inset-0 opacity-[0.05] dark:opacity-[0.07]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
      }}
    />
  </div>
);

export default Grid;
