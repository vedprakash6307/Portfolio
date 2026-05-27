import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  onOpenResume: () => void;
}

export default function Navbar({ theme, toggleTheme, onOpenResume }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'training', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background scroll effect
      setScrolled(window.scrollY > 20);

      // Scroll spy for active section
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? theme === 'dark'
            ? 'bg-gray-950/80 backdrop-blur-md border-b border-gray-900 shadow-lg'
            : 'bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Initials */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-display font-bold text-lg shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-300">
                VK
              </div>
              <span className={`font-display font-bold text-xl tracking-tight ${
                theme === 'dark' 
                  ? 'text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-indigo-400' 
                  : 'text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600'
              } transition-colors duration-300`}>
                Vedprakash
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 focus:outline-none ${
                  activeSection === item.id
                    ? theme === 'dark'
                      ? 'text-white font-semibold'
                      : 'text-blue-600 font-semibold'
                    : theme === 'dark'
                    ? 'text-gray-400 hover:text-gray-200'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeBubble"
                    className={`absolute inset-0 rounded-lg -z-10 ${
                      theme === 'dark' ? 'bg-indigo-900/40 border border-indigo-700/50' : 'bg-blue-50 border border-blue-100'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            ))}

            {/* View Resume Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center space-x-1 px-3.5 py-1.5 ml-4 bg-gradient-to-r from-blue-650 to-indigo-650 hover:from-blue-550 hover:to-indigo-550 text-white text-xs font-semibold rounded-lg shadow-md shadow-indigo-500/20 active:scale-95 transition-transform duration-200 cursor-pointer"
            >
              <span>Resume</span>
            </button>

            {/* Dark/Light mode selector */}
            <button
              onClick={toggleTheme}
              className={`p-2 ml-4 rounded-lg focus:outline-none border transition-all duration-300 ${
                theme === 'dark'
                  ? 'border-gray-800 bg-gray-900/50 text-yellow-400 hover:border-gray-700 hover:bg-gray-900'
                  : 'border-gray-200 bg-gray-50 text-indigo-600 hover:border-gray-300 hover:bg-gray-100'
              }`}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          {/* Mobile menu button and theme toggle */}
          <div className="flex items-center md:hidden space-x-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg border focus:outline-none transition-transform duration-200 active:scale-95 ${
                theme === 'dark'
                  ? 'border-gray-800 bg-gray-900/50 text-yellow-500'
                  : 'border-gray-200 bg-gray-50 text-indigo-600'
              }`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg border focus:outline-none transition-all duration-200 active:scale-95 ${
                theme === 'dark'
                  ? 'border-gray-800 bg-gray-900/50 text-gray-300'
                  : 'border-gray-200 bg-gray-50 text-gray-700'
              }`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className={`md:hidden border-t ${
              theme === 'dark' ? 'bg-gray-950 border-gray-900' : 'bg-white border-gray-200'
            }`}
          >
            <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? theme === 'dark'
                        ? 'bg-indigo-900/50 text-blue-400 border-l-4 border-blue-500'
                        : 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                      : theme === 'dark'
                      ? 'text-gray-400 hover:bg-gray-900/50 hover:text-white'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile View / Download Resume button */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenResume();
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold border-l-4 border-dashed border-blue-500 cursor-pointer ${
                  theme === 'dark'
                    ? 'text-blue-400 hover:bg-gray-900/50'
                    : 'text-blue-600 hover:bg-gray-100'
                }`}
              >
                📄 View / Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
