import { useState, useEffect } from "react";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Sections
import HomeSection     from "./sections/HomeSection";
import ProjectsSection from "./sections/ProjectsSection";
import TechSection     from "./sections/TechSection";
import ContactSection  from "./sections/ContactSection";
import BlogSection     from "./sections/BlogSection";

// Styles
import "./styles/globals.css";

const SECTION_IDS = ["home", "projetos", "tecnologias", "contato", "blog"];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Intersection Observer — highlights the current visible section in the navbar
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.35 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Full-page grid texture */}
      <div className="grid-overlay" />

      {/* Fixed navigation */}
      <Navbar activeSection={activeSection} />

      {/* Page content */}
      <main>
        <HomeSection />
        <ProjectsSection />
        <TechSection />
        <ContactSection />
        <BlogSection />
      </main>

      <Footer />
    </>
  );
}
