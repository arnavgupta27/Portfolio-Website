import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { Github, Linkedin, MapPin, Download, Mail, Phone } from 'lucide-react';
import { HeroProps } from '../../types';
import Button from '../ui/Button';
import { LampContainer } from '../ui/lamp';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Hero: React.FC<HeroProps> = ({ personalInfo, phrases }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const { elementRef, hasIntersected } = useIntersectionObserver({ triggerOnce: true });
  const [showContactModal, setShowContactModal] = useState(false);

  // Simple typing animation
  useEffect(() => {
    if (!hasIntersected || showContactModal) return;

    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const deletingSpeed = 50;

    const timer = setTimeout(() => {

      if (!isDeleting) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }

    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentPhraseIndex, phrases, hasIntersected, showContactModal]);

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  ];

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/arnavresumeLatest.pdf';
    link.download = 'arnavresumeLatest.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const ContactModal = () => (
    <AnimatePresence>
      {showContactModal && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowContactModal(false)}
        >
          <motion.div
            className="bg-slate-900/95 backdrop-blur-lg border border-slate-700/50 rounded-xl p-6 max-w-md w-full mx-4 shadow-xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-200 mb-2">Let's Connect!</h3>
              <p className="text-slate-400">Ready to discuss opportunities</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                <Mail className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-slate-200">arnavguptamodinagar@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                <Phone className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="text-slate-200">+91-7452027990</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="text-slate-200">Ghaziabad, UP</p>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  variant="outline"
                  className="flex-1 flex items-center justify-center gap-2 border-slate-600 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-400"
                  onClick={() => window.open('https://linkedin.com/in/arnav-gupta-8351641b6', '_blank')}
                >
                  <Linkedin size={16} />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 flex items-center justify-center gap-2 border-slate-600 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-400"
                  onClick={() => window.open('https://github.com/arnavgupta27', '_blank')}
                >
                  <Github size={16} />
                  GitHub
                </Button>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full mt-6 border-slate-600 bg-slate-800 hover:bg-slate-700 text-slate-300"
              onClick={() => setShowContactModal(false)}
            >
              Close
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <section
      ref={elementRef}
      id="home"
      className="relative"
    >
      <LampContainer>
        <motion.p
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-2 bg-gradient-to-br from-slate-300 to-slate-500 py-1 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-2xl"
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-0 bg-gradient-to-br from-slate-300 to-slate-500 py-1 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-1 bg-gradient-to-br from-slate-400 to-slate-600 py-1 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-3xl"
        >
          I'm a{' '}
          <span className="text-cyan-400 font-semibold">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.h2>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Button
            onClick={handleResumeDownload}
            variant="primary"
            size="lg"
            className="group bg-cyan-600 hover:bg-cyan-700 text-white"
          >
            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Download Resume
          </Button>
          <Button
            href="#contact"
            variant="outline"
            size="lg"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
            onClick={() => setShowContactModal(true)}
          >
            Get In Touch

          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.label === 'Email' || social.label === 'Phone' ? undefined : '_blank'}
              rel={social.label === 'Email' || social.label === 'Phone' ? undefined : 'noopener noreferrer'}
              className="p-3 rounded-full bg-slate-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1 border border-slate-700/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Location */}
        <motion.div
          className="flex items-center justify-center space-x-2 text-slate-400 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <MapPin className="w-4 h-4" />
          <span>{personalInfo.location}</span>
        </motion.div>
      </LampContainer>
      <ContactModal />
    </section>
  );
};

export default Hero;

