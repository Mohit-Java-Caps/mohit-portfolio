import React from "react";
import "./App.css";
import { MotionConfig } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { ModeProvider } from "./context/ModeContext";
import Navbar from "./components/Navbar";
import ChapterRail from "./components/ChapterRail";
import Hero from "./components/Hero";
import Identity from "./components/Identity";
import EngineeringStack from "./components/EngineeringStack";
import CaseStudies from "./components/CaseStudies";
import AILab from "./components/AILab";
import Mindset from "./components/Mindset";
import Journey from "./components/Journey";
import ProblemSolving from "./components/ProblemSolving";
import Capabilities from "./components/Capabilities";
import SourceCode from "./components/SourceCode";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

const Portfolio = () => (
  <div className="relative min-h-screen bg-background text-foreground antialiased transition-colors duration-500">
    <Navbar />
    <ChapterRail />
    <main>
      <Hero />
      <Identity />
      <EngineeringStack />
      <CaseStudies />
      <AILab />
      <Mindset />
      <Journey />
      <ProblemSolving />
      <Capabilities />
      <SourceCode />
      <Contact />
    </main>
    <Footer />
    <Toaster />
  </div>
);

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <ModeProvider>
          <div className="App">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Routes>
                <Route path="/" element={<Portfolio />} />
              </Routes>
            </BrowserRouter>
          </div>
        </ModeProvider>
      </ThemeProvider>
    </MotionConfig>
  );
}

export default App;
