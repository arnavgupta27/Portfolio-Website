import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Mail, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Badge } from '../ui/badge';
import Button from '../ui/Button';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Experience: React.FC = () => {
  const { elementRef, hasIntersected } = useIntersectionObserver({ triggerOnce: true });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);

  const slides = [
    {
      id: 1,
      type: 'experience',
      company: 'TechMahindra',
      position: 'Software Engineering Summer Intern',
      duration: 'June 2024 – August 2024',
      location: 'Remote, India',
      description: 'Developed ML-powered solutions for electric vehicle fleet optimization, creating recommendation systems and Android Automotive dashboards.',
      achievements: [
        'Created ML pipeline with Flask app using custom rules for vehicle-specific recommendations',
        'Built robust pipeline and model with cloud endpoint integration via comprehensive testing',
        'Developed Android Automotive dashboard for real-time ML model recommendations',
        'Created critical UI components and connected backend to frontend systems'
      ],
      technologies: ['Python', 'Flask', 'Machine Learning', 'Android Automotive', 'AWS', 'Testing'],
      highlights: [
        'Optimized battery performance in high elevation areas',
        'Integrated cloud endpoints with comprehensive testing',
        'Built real-time recommendation dashboard'
      ]
    },
    {
      id: 2,
      type: 'hiring',
      title: 'Open to New Opportunities',
      subtitle: 'Ready to contribute to innovative projects',
      description: 'I\'m actively seeking full-time software engineering roles where I can leverage my experience in Machine Learning, Artificial Intelligence, Full Stack Development and Mobile Technologies to create impactful solutions.',
      skills: ['Full-Stack Development', 'Machine Learning', 'Mobile Development', 'Cloud Technologies'],
      availability: 'Available immediately for full-time positions'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
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
      id="experience"
      className="relative min-h-screen bg-slate-950 flex items-center py-20"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-slate-200 to-slate-400 bg-clip-text text-transparent mb-4">
            Experience Showcase
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            
          </p>
        </motion.div>

        <motion.div
          className="relative max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Slide Indicators */}
          <div className="flex justify-center mb-8 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-cyan-400' : 'bg-slate-600'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          {/* Slides Container */}
          <div className="relative overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                {slides[currentSlide].type === 'experience' ? (
                  <Card className="bg-slate-900/95 backdrop-blur-lg border-slate-700/50 shadow-xl">
                    <div className="flex flex-col lg:flex-row">
                      {/* Company Image */}
                      <div className="lg:w-1/3 bg-gradient-to-br from-slate-800 to-slate-700 p-8 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-full max-w-xs mx-auto mb-4">
                            <img 
                              src="/techmahindra-office.jpg" 
                              alt="TechMahindra Office" 
                              className="w-full h-48 object-cover rounded-lg shadow-lg"
                            />
                          </div>
                          <Badge className="bg-slate-800 text-cyan-400 border-cyan-400/50">
                            {slides[currentSlide].company}
                          </Badge>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:w-2/3 p-8">
                        <CardHeader className="pb-4">
                          <CardTitle className="text-2xl text-slate-200 mb-2">
                            {slides[currentSlide].position}
                          </CardTitle>
                          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              {slides[currentSlide].duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              {slides[currentSlide].location}
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent>
                          <p className="text-slate-300 mb-6">
                            {slides[currentSlide].description}
                          </p>

                          <div className="mb-6">
                            <h4 className="text-lg font-semibold text-slate-200 mb-3">Key Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {slides[currentSlide].technologies?.map((tech, index) => (
                                <Badge
                                  key={index}
                                  className="bg-cyan-400/10 text-cyan-400 border-cyan-400/30"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="mb-6">
                            <h4 className="text-lg font-semibold text-slate-200 mb-3">Highlights</h4>
                            <ul className="space-y-2">
                              {slides[currentSlide].highlights?.map((highlight, index) => (
                                <li key={index} className="flex items-start gap-2 text-slate-300">
                                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ) : (
                  <Card className="bg-slate-900/95 backdrop-blur-lg border-slate-700/50 shadow-xl">
                    <CardContent className="p-12 text-center">
                      <div className="max-w-2xl mx-auto">
                        <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                          <ExternalLink className="w-12 h-12 text-white" />
                        </div>
                        
                        <h3 className="text-3xl font-bold text-slate-200 mb-4">
                          {slides[currentSlide].title}
                        </h3>
                        
                        <p className="text-xl text-cyan-400 mb-6">
                          {slides[currentSlide].subtitle}
                        </p>
                        
                        <p className="text-slate-300 mb-8 leading-relaxed">
                          {slides[currentSlide].description}
                        </p>

                        <div className="flex flex-wrap justify-center gap-2 mb-8">
                          {slides[currentSlide].skills?.map((skill, index) => (
                            <Badge
                              key={index}
                              className="bg-cyan-400/10 text-cyan-400 border-cyan-400/30"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        <p className="text-sm text-slate-400 mb-8">
                          {slides[currentSlide].availability}
                        </p>

                        <Button
                          className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600 px-8 py-3 text-lg font-semibold"
                          onClick={() => setShowContactModal(true)}
                        >
                          Hire Me
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-full flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:bg-slate-700/80 transition-all"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-full flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:bg-slate-700/80 transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <ContactModal />
    </section>
  );
};

export default Experience;
