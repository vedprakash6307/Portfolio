/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import TrainingAndEducation from './components/TrainingAndEducation';
import Strengths from './components/Strengths';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [resumeOpen, setResumeOpen] = useState(false);

  // Sync theme with HTML DOM node for class-based Tailwind styling
  useEffect(() => {
    // Read cached preference or default to dark
    const cachedTheme = localStorage.getItem('vk-portfolio-theme') as 'dark' | 'light';
    if (cachedTheme) {
      setTheme(cachedTheme);
    } else {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('vk-portfolio-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Loading animation simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-950 text-white"
        >
          <div className="text-center space-y-4">
            {/* Visual pulse */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center mx-auto shadow-2xl shadow-indigo-500/30"
            >
              <span className="font-display font-black text-2xl tracking-tighter">VK</span>
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-500 blur-sm opacity-50 animate-pulse" />
            </motion.div>

            <div className="space-y-1">
              <h3 className="font-display font-medium text-sm tracking-widest text-indigo-400 uppercase">
                Initializing Portfolio
              </h3>
              <div className="w-48 h-1 bg-gray-900 rounded-full overflow-hidden mx-auto">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
              <span className="font-mono text-xs text-gray-500">{Math.min(progress, 100)}%</span>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`min-h-screen relative flex flex-col justify-between overflow-x-hidden ${
            theme === 'dark' ? 'bg-gray-950 text-gray-100' : 'bg-slate-50 text-gray-900'
          }`}
        >
          {/* Header/Navbar */}
          <Navbar theme={theme} toggleTheme={toggleTheme} onOpenResume={() => setResumeOpen(true)} />

          {/* Main sections layout */}
          <main className="flex-grow">
            <Hero theme={theme} onOpenResume={() => setResumeOpen(true)} />
            <About theme={theme} />
            <Skills theme={theme} />
            <TrainingAndEducation theme={theme} />
            <Projects theme={theme} />
            <Strengths theme={theme} />
            <Contact theme={theme} />
          </main>

          {/* Site Footer */}
          <Footer theme={theme} />

          {/* Interactive Print-Optimized Resume Overlays */}
          <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} theme={theme} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

