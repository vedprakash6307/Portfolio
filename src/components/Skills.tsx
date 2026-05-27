import React from 'react';
import { motion } from 'motion/react';
import { skillCategories } from '../data';
import { Code, Terminal, Server, Database, GitBranch, Layout, Play, Milestone } from 'lucide-react';

interface SkillsProps {
  theme: 'dark' | 'light';
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Frontend':
      return <Layout className="text-blue-500" size={20} />;
    case 'Backend & Databases':
      return <Server className="text-indigo-500" size={20} />;
    case 'Tools & Version Control':
      return <Terminal className="text-purple-500" size={20} />;
    default:
      return <Code className="text-pink-500" size={20} />;
  }
};

const getSkillIcon = (name: string) => {
  const normalized = name.toLowerCase();
  if (normalized.includes('html') || normalized.includes('css')) {
    return <Code className="text-emerald-500" size={18} />;
  } else if (normalized.includes('javascript') || normalized.includes('js')) {
    return <Milestone className="text-amber-500" size={18} />;
  } else if (normalized.includes('react')) {
    return <Play className="text-sky-500 animate-spin-slow" size={18} />;
  } else if (normalized.includes('node') || normalized.includes('express')) {
    return <Server className="text-green-500" size={18} />;
  } else if (normalized.includes('mongo') || normalized.includes('mysql') || normalized.includes('database')) {
    return <Database className="text-blue-500" size={18} />;
  } else if (normalized.includes('git')) {
    return <GitBranch className="text-orange-500" size={18} />;
  } else {
    return <Terminal className="text-purple-400" size={18} />;
  }
};

export default function Skills({ theme }: SkillsProps) {
  return (
    <section
      id="skills"
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#030712] border-t border-gray-950' : 'bg-slate-50/50 border-t border-gray-100'
      }`}
    >
      {/* Dynamic ambient bg spots */}
      {theme === 'dark' && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl" />
        </div>
      )}

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
              Technical Arsenal
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              Skills & Expertise
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          </motion.div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className={`p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gray-900/20 border-gray-900 hover:border-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/5'
                  : 'bg-white border-gray-200 hover:border-blue-200 hover:shadow-md'
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-gray-150 dark:border-gray-800">
                  <div className={`p-2 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-800/80' : 'bg-blue-50'
                  }`}>
                    {getCategoryIcon(cat.category)}
                  </div>
                  <h3 className={`text-lg font-display font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {cat.category}
                  </h3>
                </div>

                {/* Skill Items List */}
                <div className="space-y-5">
                  {cat.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center space-x-2">
                          <span className="flex-shrink-0">{getSkillIcon(skill.name)}</span>
                          <span className={`font-semibold ${
                            theme === 'dark' ? 'text-gray-250' : 'text-gray-700'
                          }`}>
                            {skill.name}
                          </span>
                        </div>
                        <span className={`font-mono text-xs ${
                          theme === 'dark' ? 'text-indigo-400' : 'text-blue-600'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>

                      {/* Animated Progress Meter */}
                      <div className={`h-2 w-full rounded-full transition-colors ${
                        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                      }`}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: skillIndex * 0.1 }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
