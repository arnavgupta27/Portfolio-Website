import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { navigationItems, resumeFileName } from '../../data/portfolio';
import { smoothScroll } from '../../utils';

const CompactNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {

      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const targetId = href.replace('#', '');
    smoothScroll(targetId);
    setIsOpen(false);
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = `/${resumeFileName}`;
    link.download = resumeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed top-4 right-4 z-50">
      <div className="flex items-center space-x-4">
        {/* AG Logo */}
        <motion.button
          onClick={() => handleNavClick('#home')}
          className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors bg-slate-900/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-slate-700/50"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          AG
        </motion.button>

        {/* Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors bg-slate-900/80 backdrop-blur-sm border border-slate-700/50"
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="sr-only">Open menu</span>
          {isOpen ? (
            <X className="block h-5 w-5" />
          ) : (
            <Menu className="block h-5 w-5" />
          )}
        </motion.button>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 mt-2 w-56 rounded-lg bg-slate-900/95 backdrop-blur-md border border-slate-700/50 shadow-xl"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="py-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-cyan-400 bg-slate-800/50'
                      : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/30'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="border-t border-slate-700/50 my-2"></div>
              <button
                onClick={handleResumeDownload}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-cyan-400 hover:bg-slate-800/30 transition-colors"
              >
                <Download className="w-4 h-4 inline mr-2" />
                Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default CompactNavigation;
