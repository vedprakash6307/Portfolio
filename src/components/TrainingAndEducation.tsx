import React from 'react';
import { motion } from 'motion/react';
import { educationList, trainingDetails } from '../data';
import { GraduationCap, Briefcase, Award, CheckCircle2, ChevronRight, Milestone } from 'lucide-react';

interface TrainingAndEducationProps {
  theme: 'dark' | 'light';
}

export default function TrainingAndEducation({ theme }: TrainingAndEducationProps) {
  return (
    <section
      id="training"
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#030712] border-t border-gray-950' : 'bg-slate-50/50 border-t border-gray-100'
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
              Qualifications & Practicums
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              Education & Training
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          </motion.div>
        </div>

        {/* Double Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Column 1: Academics (Left side, spanning 5 cols on desktop) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-500">
                <GraduationCap size={24} />
              </div>
              <h3 className={`text-xl font-display font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Academic Journey
              </h3>
            </div>

            {/* Academic cards list */}
            <div className="space-y-6 relative border-l-2 border-gray-150 dark:border-gray-800 pl-6 ml-4">
              {educationList.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative space-y-2 group"
                >
                  {/* Timeline bullet dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full border-4 border-gray-950 bg-blue-500 transition-transform group-hover:scale-125 duration-300" />

                  <span className={`text-xs font-mono font-semibold tracking-wider px-2.5 py-1 rounded-md inline-block ${
                    theme === 'dark' ? 'bg-gray-900/80 text-blue-400' : 'bg-blue-50 text-blue-600'
                  }`}>
                    {edu.completionDate}
                  </span>

                  <h4 className={`text-base sm:text-lg font-display font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {edu.degree}
                  </h4>

                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {edu.school}
                  </p>

                  {edu.score && (
                    <div className="flex items-center space-x-1.5 mt-2.5">
                      <ChevronRight size={14} className="text-indigo-400" />
                      <span className={`text-xs sm:text-sm font-mono font-medium ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
                      }`}>
                        Score / Status: <strong className="text-blue-500">{edu.score}</strong>
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Intensive Training (Right side, spanning 7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2.5 rounded-xl bg-indigo-600/10 text-indigo-500">
                <Briefcase size={24} />
              </div>
              <h3 className={`text-xl font-display font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Professional Training
              </h3>
            </div>

            {/* PrepCode Training Large Bento Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`p-6 sm:p-8 rounded-2xl border relative overflow-hidden transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-tr from-gray-900/30 to-gray-900/10 border-gray-900 hover:border-indigo-500/20'
                  : 'bg-white border-gray-200 hover:border-blue-200 shadow-md'
              }`}
            >
              <div className="absolute top-0 right-0 h-24 w-24 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="space-y-1">
                  <span className={`text-xs font-mono font-semibold uppercase tracking-wider ${
                    theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                  }`}>
                    Intensive Cohort Training
                  </span>
                  <h4 className={`text-xl sm:text-2xl font-display font-extrabold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {trainingDetails.organization}
                  </h4>
                </div>

                <span className={`text-xs font-mono font-bold px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-md shadow-indigo-500/10`}>
                  {trainingDetails.duration}
                </span>
              </div>

              {/* Training detail paragraphs with custom icons */}
              <div className="space-y-4 pt-4 border-t border-gray-150 dark:border-gray-800">
                {trainingDetails.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-sm sm:text-base">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="text-emerald-500" size={18} />
                    </div>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      {detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Interactive badge link as validation of accomplishments */}
              <div className="mt-8 flex items-center justify-between p-3.5 rounded-xl bg-blue-500/5 dark:bg-gray-850 border border-blue-500/10">
                <div className="flex items-center space-x-2.5">
                  <Award className="text-yellow-500 animate-pulse" size={20} />
                  <span className={`text-xs sm:text-sm font-semibold ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-850'
                  }`}>
                    MERN Stack Graduate Practitioner
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-wider font-mono text-gray-400">Verified Practicum</span>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
