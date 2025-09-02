import React from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';
import { Phone } from 'lucide-react';


const Footer: React.FC = () => {

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-200">Arnav Gupta</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              AI/ML and Full Stack developer passionate about creating innovative solutions with modern technologies.
              Currently pursuing B.Tech in Computer Science Engineering at IIIT Sonepat.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-200">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'Experience', href: '#experience' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.href.replace('#', ''))?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-200">Connect</h3>
            <div className="space-y-3">
              <a
                href="mailto:arnavguptamodinagar@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Mail size={16} />
                arnavguptamodinagar@gmail.com
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Phone size={16} />
                +91 9876543210
              </a>

              <div className="flex gap-3 pt-2">
                <a
                  href="https://github.com/arnavgupta27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all"
                >
                  <Github size={16} />
                </a>
                <a
                  href="https://linkedin.com/in/arnav-gupta-8351641b6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Subtle background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
    </footer>
  );
};

export default Footer;
