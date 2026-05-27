import React, { useState } from 'react';
import { motion } from 'motion/react';
import { projects } from '../data';
import { Github, ExternalLink, Code, Layers, Sparkles, FolderDot } from 'lucide-react';

interface ProjectsProps {
  theme: 'dark' | 'light';
}

export default function Projects({ theme }: ProjectsProps) {
  // We can track hovered card index for unique overlays
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Custom visual background style generator for project cards to act as beautiful tech placeholders
  const getGradientForCard = (index: number) => {
    const gradients = [
      'from-blue-600/30 via-indigo-600/20 to-purple-600/30',
      'from-purple-650/30 via-indigo-650/20 to-pink-650/30',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section
      id="projects"
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#060713]' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs uppercase font-mono tracking-widest text-indigo-500 font-semibold">
              Recent Engineering Creations
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              Projects & Portfolios
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          </motion.div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`rounded-2xl border overflow-hidden flex flex-col h-full group transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gray-900/10 border-gray-900 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5'
                  : 'bg-indigo-50/10 border-indigo-100/85 hover:border-blue-300 hover:shadow-lg'
              }`}
            >
              {/* Card visual banner / mockup */}
              <div className={`h-48 sm:h-56 relative overflow-hidden flex items-center justify-center bg-gradient-to-r ${getGradientForCard(idx)} border-b border-gray-150 dark:border-gray-800`}>
                
                {/* Floating ambient glow spheres */}
                <div className="absolute w-24 h-24 rounded-full bg-blue-500/20 blur-xl group-hover:scale-125 transition-transform duration-500" />
                <div className="absolute w-12 h-12 rounded-full bg-purple-500/20 blur-lg -bottom-2 -left-2" />

                <div className="text-center p-4 relative z-10 space-y-3">
                  <div className={`p-3.5 rounded-2xl inline-flex ${
                    theme === 'dark' ? 'bg-gray-950/80' : 'bg-white shadow-md'
                  }`}>
                    {idx === 0 ? (
                      <Layers className="text-blue-500" size={32} />
                    ) : (
                      <FolderDot className="text-purple-500" size={32} />
                    )}
                  </div>
                  <div className="text-xs font-mono font-medium tracking-wider text-gray-400 dark:text-gray-400">
                    {idx === 0 ? 'MERN FULL-STACK ARCHITECTURE' : 'CLIENT-SIDE COMPONENT TREE'}
                  </div>
                </div>

                {/* Cover badge */}
                {proj.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] sm:text-xs font-mono font-bold px-2.5 py-1 rounded-full shadow-md shadow-indigo-500/20 flex items-center space-x-1">
                    <Sparkles size={12} />
                    <span>Featured</span>
                  </div>
                )}
              </div>

              {/* Card content details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className={`text-xl font-display font-bold group-hover:text-blue-500 transition-colors duration-200 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {proj.title}
                  </h3>

                  <p className={`text-sm leading-relaxed ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-650'
                  }`}>
                    {proj.description}
                  </p>
                </div>

                <div className="space-y-5">
                  {/* Tech stack badges list */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-xs ml-0 mr-1.5 mb-1.5 px-2.5 py-1 rounded-md font-medium tracking-tight border ${
                          theme === 'dark'
                            ? 'bg-gray-900/60 border-gray-800 text-gray-350'
                            : 'bg-blue-50/50 border-blue-100 text-blue-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons line */}
                  <div className="flex gap-3 border-t border-gray-150 dark:border-gray-800 pt-4">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex-1 inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-lg text-sm font-semibold border transition-all duration-205 active:scale-95 ${
                        theme === 'dark'
                          ? 'border-gray-800 bg-gray-950 hover:bg-gray-900 text-gray-300 hover:text-white'
                          : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900'
                      }`}
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>

                    <a
                      href={proj.liveUrl}
                      onClick={(e) => {
                        if (proj.liveUrl === '#') {
                          e.preventDefault();
                          // Provide a simple notification element or smooth link navigation
                        }
                      }}
                      className="flex-1 inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-lg text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-650 hover:from-blue-500 hover:to-indigo-550 text-white shadow-lg shadow-indigo-500/10 transition-all duration-205 active:scale-95"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
