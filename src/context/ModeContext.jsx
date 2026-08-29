import React, { createContext, useContext, useState, useCallback } from "react";

// Tracks the hero's "ENTER SYSTEM" interaction: overview -> engineering.
// Purely a presentation flag (nav label / subtle accent shift) — never gates content.
const ModeContext = createContext({
  mode: "overview",
  enterSystem: () => {},
});

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState("overview");
  const enterSystem = useCallback(() => setMode("engineering"), []);
  return (
    <ModeContext.Provider value={{ mode, enterSystem }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => useContext(ModeContext);
