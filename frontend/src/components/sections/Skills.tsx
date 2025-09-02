import React from 'react';
import { motion } from 'framer-motion';
import { Icons } from '../ui/icons';
import { Marquee } from '../ui/marquee';
import { SkillsProps } from '../../types';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Skills: React.FC<SkillsProps> = ({ skillsData }) => {
  const { elementRef, hasIntersected } = useIntersectionObserver({ triggerOnce: true });

  // Flatten all skills into one array, excluding "Core Concepts"
  const allSkills = Object.entries(skillsData)
    .filter(([category]) => category !== "Core Concepts")
    .flatMap(([, skills]) => skills);

  // Mapping skills to their corresponding icons
  const skillIconMap: { [key: string]: keyof typeof Icons } = {
    'C++': 'cplusplus',
    'JavaScript': 'javascript',
    'SQL': 'sql',
    'Python': 'python',
    'Kotlin': 'kotlin',
    'HTML': 'html',
    'CSS': 'css',
    'React.js': 'react',
    'Next.js': 'nextjs',
    'Tailwind CSS': 'tailwind',
    'Node.js': 'nodejs',
    'Express.js': 'express',
    'REST APIs': 'restapi',
    'GraphQL': 'graphql',
    'Socket.io': 'socketio',
    'Android Automotive OS': 'androidauto',
    'Jetpack': 'jetpack',
    'Android Studio': 'androidstudio',
    'Machine Learning': 'machinelearning',
    'Real-Time KPI Graphing': 'realtimekpi',
    'Scikit-learn': 'scikitlearn',
    'Ollama': 'ollama',
    'Artificial Intelligence': 'ai',
    'Model Finetuning': 'modelfinetuning',
    'MongoDB': 'mongodb',
    'MySQL': 'mysql',
    'Kubernetes': 'kubernetes',
    'Selenium': 'selenium',
    'AWS Lambda': 'aws',
    'Git': 'git',
    'GitHub': 'github',
    'Linux': 'linux',
    'WebSockets': 'websockets',
    'Flask': 'flask',
    'DSA': 'dsa',
    'OOP': 'oop',
    'SDLC': 'sdlc',
    'System Design': 'systemdesign',
    'Agile': 'agile',
    'TDD': 'tdd',
    'SDV': 'sdv'
  };

  const getSkillBadge = (skillName: string) => {
    const iconKey = skillIconMap[skillName];
    let IconComponent = null;
    
    if (iconKey && Icons[iconKey]) {
      IconComponent = Icons[iconKey];
    }
    
    // Create initials for fallback
    const initials = skillName
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
    
    return (
      <div className="inline-flex items-center gap-2 bg-slate-800/60 backdrop-blur-md border border-slate-700/40 rounded-xl px-3 py-2 hover:bg-slate-700/60 hover:border-cyan-400/40 hover:shadow-md hover:shadow-cyan-400/10 transition-all duration-300 group cursor-pointer">
        <div className="flex-shrink-0">
          {IconComponent ? (
            <IconComponent className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
          ) : (
            <div className="flex items-center justify-center w-4 h-4 bg-cyan-400/15 text-cyan-400 font-semibold text-[10px] rounded-lg border border-cyan-400/20">
              {initials}
            </div>
          )}
        </div>
        <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors whitespace-nowrap select-none">
          {skillName}
        </span>
      </div>
    );
  };

  return (
    <section
      ref={elementRef}
      id="skills"
      className="relative min-h-screen bg-slate-950 py-24 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Technical Skills
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Technologies and tools I work with to build amazing digital experiences
          </motion.p>
        </motion.div>

        {/* 4 Different Infinite Marquees */}
        <motion.div
          className="space-y-4 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={hasIntersected ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* First Marquee - Normal Speed, Left to Right */}
          <div className="relative">
            <Marquee speed="normal" className="[--gap:16px] py-2">
              {allSkills.map((skill, index) => (
                <div key={`marquee1-${skill}-${index}`} className="mx-2">
                  {getSkillBadge(skill)}
                </div>
              ))}
            </Marquee>
          </div>

          {/* Second Marquee - Reverse Direction, Normal Speed */}
          <div className="relative">
            <Marquee reverse speed="normal" className="[--gap:16px] py-2">
              {allSkills.map((skill, index) => (
                <div key={`marquee2-${skill}-${index}`} className="mx-2">
                  {getSkillBadge(skill)}
                </div>
              ))}
            </Marquee>
          </div>

          {/* Third Marquee - Slow Speed, Left to Right */}
          <div className="relative">
            <Marquee speed="slow" className="[--gap:16px] py-2">
              {allSkills.map((skill, index) => (
                <div key={`marquee3-${skill}-${index}`} className="mx-2">
                  {getSkillBadge(skill)}
                </div>
              ))}
            </Marquee>
          </div>

          {/* Fourth Marquee - Reverse Direction, Normal Speed */}
          <div className="relative">
            <Marquee reverse speed="normal" className="[--gap:16px] py-2">
              {allSkills.map((skill, index) => (
                <div key={`marquee4-${skill}-${index}`} className="mx-2">
                  {getSkillBadge(skill)}
                </div>
              ))}
            </Marquee>
          </div>
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div
          className="flex justify-center mt-20"
          initial={{ opacity: 0 }}
          animate={hasIntersected ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-cyan-400/60 rounded-full" />
            <div className="w-3 h-3 bg-cyan-400/80 rounded-full animate-pulse" />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-cyan-400/60 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
