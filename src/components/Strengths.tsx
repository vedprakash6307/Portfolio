import React from 'react';
import { motion } from 'motion/react';
import { strengths } from '../data';
import { Cpu, Zap, Database, Shuffle, Users, CheckCircle } from 'lucide-react';

interface StrengthsProps {
  theme: 'dark' | 'light';
}

const getStrengthIcon = (name: string) => {
  switch (name) {
    case 'Cpu':
      return <Cpu className="text-blue-500" size={24} />;
    case 'Zap':
      return <Zap className="text-yellow-500" size={24} />;
    case 'Database':
      return <Database className="text-indigo-500" size={24} />;
    case 'Shuffle':
      return <Shuffle className="text-pink-500" size={24} />;
    case 'Users':
      return <Users className="text-purple-400" size={24} />;
    default:
      return <CheckCircle className="text-blue-500" size={24} />;
  }
};

export default function Strengths({ theme }: StrengthsProps) {
  return (
    <section
      id="strengths"
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
              Professional Attributes
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              My Core Strengths
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          </motion.div>
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {strengths.map((str, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
              className={`p-6 rounded-2xl border flex flex-col justify-between h-56 transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-b from-gray-900/40 to-gray-900/10 border-gray-900 hover:border-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/5'
                  : 'bg-indigo-50/15 border-indigo-100 hover:border-blue-300 hover:shadow-md'
              }`}
            >
              <div className="space-y-4">
                <div className={`p-3 rounded-xl inline-block ${
                  theme === 'dark' ? 'bg-gray-800/80' : 'bg-white shadow-sm border border-indigo-50'
                }`}>
                  {getStrengthIcon(str.iconName)}
                </div>

                <h3 className={`text-base sm:text-lg font-display font-bold leading-tight ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {str.title}
                </h3>
              </div>

              <p className={`text-xs sm:text-sm leading-relaxed mt-2 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {str.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
