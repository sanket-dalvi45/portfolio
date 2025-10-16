import React, { useContext } from 'react';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import SkillGridSection from './components/SkillGridSection';
import Projects from './components/Projects';
import EducationGridSection from './components/EducationGridSection';
import Footer from './components/Footer';
import CodingStats from './components/CodingStats'; 

import { ThemeProvider, ThemeContext } from './ThemeContext';

function AppContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      {/* <button
        style={{
          position: 'fixed', top: 12, right: 12, zIndex: 1000,
          padding: '0.25em 0.7em', borderRadius: '6px', border: 'none', cursor: 'pointer',
          fontSize: '1rem', minWidth: '48px', minHeight: '28px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        }}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button> */}
      <section id="navbar"><NavBar /></section>
      <section id="hero"><Hero /></section>
      <section id="skills"><SkillGridSection /></section>
      <section id="education"><EducationGridSection /></section>
      <section id="projects"><Projects /></section>
      {/* <section id="experience"><Experience /></section> */}
      <section id="coding-stats"><CodingStats /></section>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
