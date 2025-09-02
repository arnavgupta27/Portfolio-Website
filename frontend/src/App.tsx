import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomeScreen from './components/WelcomeScreen';
import CompactNavigation from './components/layout/CompactNavigation';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Footer from './components/sections/Footer';
import { personalInfo, phrases, skillsData } from './data/portfolio';
import { useLocalStorage } from './hooks/useLocalStorage';

const App: React.FC = () => {
  const [hasVisited, setHasVisited] = useLocalStorage('arnav-portfolio-visited', false, 'sessionStorage');
  const [showWelcome, setShowWelcome] = useState(!hasVisited);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    setHasVisited(true);
  };

  // Auto-scroll to hero section on page refresh
  useEffect(() => {
    if (!showWelcome) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [showWelcome]);

  return (
    <div className="App">
      <AnimatePresence>
        {showWelcome && (
          <WelcomeScreen onComplete={handleWelcomeComplete} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CompactNavigation />
          <main>
            <Hero personalInfo={personalInfo} phrases={phrases} />
            <Skills skillsData={skillsData} />
            <Projects />
            <Experience />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default App;
