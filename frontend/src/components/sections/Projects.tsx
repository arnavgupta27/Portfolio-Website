import React from 'react';
import { motion } from 'framer-motion';
import { Database, Smartphone, Brain, Zap, Globe } from "lucide-react";
import RadialOrbitalTimeline from '../ui/radial-orbital-timeline';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Projects: React.FC = () => {
  const { elementRef, hasIntersected } = useIntersectionObserver({ triggerOnce: true });

  const projectsData = [
    {
      id: 1,
      title: "EV Battery Predictor",
      date: "2024",
      content: "ML-powered API for electric vehicle battery life prediction and convoy route optimization using Python and Flask.",
      category: "Machine Learning",
      icon: Brain,
      relatedIds: [2, 4],
      status: "completed" as const,
      energy: 100,
      githubUrl: "https://github.com/arnavgupta27/Elevation-based-EV-Battery-Usage-Prediction-Convoy-Recommendation-API",
      liveUrl: ""
    },
    {
      id: 2,
      title: "Cloud BMS for EV Fleets",
      date: "2024",
      content: "Intelligent Battery Management System for electric vehicle fleets with real-time monitoring using Android and Kotlin.",
      category: "Mobile Development",
      icon: Smartphone,
      relatedIds: [1, 3],
      status: "completed" as const,
      energy: 95,
      githubUrl: "https://github.com/arnavgupta27/iCBMP",
      liveUrl: ""
    },
    {
      id: 3,
      title: "DeFi Credit Scoring",
      date: "2024",
      content: "AI-powered credit scoring system for Aave protocol wallets using blockchain data analysis and machine learning.",
      category: "Blockchain & AI",
      icon: Database,
      relatedIds: [2, 4],
      status: "completed" as const,
      energy: 90,
      githubUrl: "https://github.com/arnavgupta27/DeFi-credit-scoring-for-Aave-V2-wallets",
      liveUrl: ""
    },
    {
      id: 4,
      title: "Lead Generation Agent",
      date: "2024",
      content: "AI-powered lead generation agent that automates prospect identification and outreach using advanced machine learning algorithms.",
      category: "Artificial Intelligence",
      icon: Zap,
      relatedIds: [1, 3],
      status: "completed" as const,
      energy: 85,
      githubUrl: "https://github.com/arnavgupta27/ai-based-lead-generation-agent",
      liveUrl: ""
    },
    {
      id: 5,
      title: "Portfolio Website",
      date: "2024",
      content: "Modern React TypeScript portfolio with advanced animations, 3D elements, and performance optimization.",
      category: "Web Development",
      icon: Globe,
      relatedIds: [],
      status: "in-progress" as const,
      energy: 75,
      githubUrl: "https://github.com/arnavgupta27/Portforlio-website",
      liveUrl: ""
    }
  ];

  return (
    <section
      ref={elementRef}
      id="projects"
      className="relative min-h-screen bg-slate-950 flex items-center overflow-hidden"
    >
      <div className="container mx-auto px-6 flex items-center h-full">
        {/* Left side - Heading and Subheading (60%) */}
        <div className="w-3/5 pr-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              My Projects
            </motion.h2>
            
            <motion.p
              className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Innovative solutions spanning machine learning, blockchain, mobile development, and web technologies. Each project represents a unique challenge solved with cutting-edge technology.
            </motion.p>

            <motion.div
              className="flex items-center gap-4 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
              <span className="text-sm text-slate-500 uppercase tracking-wider font-medium">
                Click on any project to explore
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Right side - Radial Orbital Timeline (40%) */}
        <motion.div
          className="w-2/5 h-screen"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={hasIntersected ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <RadialOrbitalTimeline timelineData={projectsData} />
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Projects;
