import React from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { GraduationCap, Code2, Rocket, Brain, Calendar, Database } from 'lucide-react';

interface AboutProps {
  theme: 'dark' | 'light';
}

export default function About({ theme }: AboutProps) {
  const highlights = [
    {
      icon: <GraduationCap className="text-blue-500" size={24} />,
      title: 'BCA Student',
      description: 'Ambalika Institute of Management and Technology, Lucknow',
    },
    {
      icon: <Calendar className="text-indigo-500" size={24} />,
      title: 'Graduation Timeline',
      description: 'Expected completion by June–July 2026',
    },
    {
      icon: <Code2 className="text-purple-500" size={24} />,
      title: 'Full-Stack Developer',
      description: 'Strong interest in constructing elegant end-to-end MERN architectures',
    },
    {
      icon: <Rocket className="text-pink-500" size={24} />,
      title: 'Startup Mindset',
      description: 'Eager to build high-momentum features and solve real-world problems',
    },
    {
      icon: <Database className="text-cyan-500" size={24} />,
      title: 'Backend Systems',
      description: 'Passionate about structural REST APIs, servers, and model queries',
    },
    {
      icon: <Brain className="text-yellow-500" size={24} />,
      title: 'Persistent Learner',
      description: 'Constantly practicing hands-on deployment and logical pipelines',
    },
  ];

  return (
    <section
      id="about"
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
              Get To Know Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              About Me
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          </motion.div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Description */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className={`text-2xl font-display font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                BCA Final Year Student & MERN Stack Developer
              </h3>

              <div className="space-y-3 text-base sm:text-lg text-gray-400 dark:text-gray-400">
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Based in Lucknow, India, I am a passionate, driven <strong>BCA final-year student</strong> (completing June–July 2026) in computer applications who fell in love with full-stack web engineering.
                </p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Over the past few semesters, I have shifted my focus towards masterminding web frameworks, specifically building, expanding, and optimizing applications inside the <strong>MERN (MongoDB, Express, React, Node) stack</strong> pipeline.
                </p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  I excel at linking logical schemas with fluid user frontends, writing secure REST nodes, and designing clean layouts that look incredibly professional across both desktop and mobile viewports.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column Grid Highlights */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`p-5 rounded-xl border flex flex-col justify-between transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gray-900/40 border-gray-900 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5'
                      : 'bg-indigo-50/30 border-indigo-100 hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start space-x-4 mb-3">
                    <div className={`p-2.5 rounded-lg ${
                      theme === 'dark' ? 'bg-gray-800/80' : 'bg-white shadow-sm'
                    }`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className={`text-base font-display font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {item.title}
                      </h4>
                      <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
