import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { personalInfo, typingText } from '../data';
import { Code2, FileText, Send, ArrowRight, Github, Linkedin, Instagram, ArrowDown } from 'lucide-react';

interface HeroProps {
  theme: 'dark' | 'light';
  onOpenResume: () => void;
}

export default function Hero({ theme, onOpenResume }: HeroProps) {
  // Typing state
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Auto typing animation loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = typingText[currentTextIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause at full word
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % typingText.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex]);

  // Canvas particle background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number }[] = [];
    
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 100);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const dotColor = theme === 'dark' ? 'rgba(99, 102, 241,' : 'rgba(37, 99, 235,';
      
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${dotColor}${p.opacity})`;
        ctx.fill();
      });

      // Simple connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const lineOpacity = (1 - dist / 100) * 0.08;
            ctx.strokeStyle = theme === 'dark' ? `rgba(129, 140, 248, ${lineOpacity})` : `rgba(59, 130, 246, ${lineOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  const scrollToSection = (id: string) => {
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
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center pt-20 overflow-hidden ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-gray-950 via-gray-950 to-[#0c0d1e]'
          : 'bg-gradient-to-b from-slate-50 via-slate-50 to-indigo-50/20'
      }`}
    >
      {/* Dynamic particles background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
      />

      {/* Radial soft background glow spots in dark mode */}
      {theme === 'dark' && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl animate-pulse-slow" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 py-12 md:py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Text Column */}
          <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full border text-xs sm:text-sm font-medium ${
                theme === 'dark'
                  ? 'bg-indigo-950/40 border-indigo-900/50 text-indigo-400'
                  : 'bg-indigo-50 border-indigo-100 text-indigo-600'
              }`}
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span>Available for Freelance & Internships</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6.5xl font-display font-extrabold tracking-tight">
                <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
                  Hi, I'm{' '}
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 drop-shadow-sm">
                  {personalInfo.name}
                </span>
              </h1>

              {/* Typed Tagline */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <span className={`text-xl sm:text-2xl font-semibold ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  I am a{' '}
                  <span className="text-blue-500 font-bold border-r-2 border-blue-500 px-1 animate-pulse">
                    {currentText}
                  </span>
                </span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-base sm:text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-4"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-5 sm:px-6 py-3 rounded-lg text-sm sm:text-base font-semibold shadow-lg shadow-indigo-500/25 transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className={`inline-flex items-center space-x-2 px-5 sm:px-6 py-3 rounded-lg text-sm sm:text-base font-semibold border transition-all duration-200 active:scale-95 cursor-pointer ${
                  theme === 'dark'
                    ? 'border-gray-800 bg-gray-9050 hover:bg-gray-900 text-gray-200 hover:text-white'
                    : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-950'
                }`}
              >
                <Send size={18} />
                <span>Contact Me</span>
              </button>

              {/* View/Download Resume (We provide a smooth link/action) */}
              <button
                onClick={onOpenResume}
                className={`inline-flex items-center space-x-2 px-5 sm:px-6 py-3 rounded-lg text-sm sm:text-base font-semibold border transition-all duration-200 active:scale-95 cursor-pointer ${
                  theme === 'dark'
                    ? 'border-gray-800 bg-gray-950 hover:bg-gray-900 text-gray-200 hover:text-white'
                    : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-950'
                }`}
              >
                <FileText size={18} />
                <span>Download Resume</span>
              </button>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start space-x-4 pt-6 text-gray-400"
            >
              <a
                href="https://github.com/pk7645115"
                target="_blank"
                rel="noreferrer"
                className={`p-2 rounded-full border transition-all duration-200 ${
                  theme === 'dark'
                    ? 'border-gray-800 hover:border-gray-700 hover:bg-gray-900 text-gray-400 hover:text-white'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                }`}
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/vedprakash-kushwaha"
                target="_blank"
                rel="noreferrer"
                className={`p-2 rounded-full border transition-all duration-200 ${
                  theme === 'dark'
                    ? 'border-gray-800 hover:border-gray-700 hover:bg-gray-900 text-gray-400 hover:text-white'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                }`}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com/ved_kushwaha_official"
                target="_blank"
                rel="noreferrer"
                className={`p-2 rounded-full border transition-all duration-200 ${
                  theme === 'dark'
                    ? 'border-gray-800 hover:border-gray-700 hover:bg-gray-900 text-gray-400 hover:text-white'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                }`}
              >
                <Instagram size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right Profile Column with Glow and Animation */}
          <div className="flex-1 flex justify-center items-center relative z-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-72 h-72 sm:w-85 sm:h-85 lg:w-96 lg:h-96 flex items-center justify-center animate-float"
            >
              {/* Blurred atmospheric gradient background behind matching dark theme */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-2xl opacity-40 animate-pulse-slow z-0" />

              {/* Glowing animated gradient border around the image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 animate-spin-slow z-10" />

              {/* Masking container for Glassmorphism + border overlay and photo */}
              <div className={`absolute inset-1.5 rounded-full p-2 z-20 ${
                theme === 'dark' ? 'bg-gray-950/95' : 'bg-slate-50/95'
              } flex items-center justify-center`}>
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-indigo-500/20">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                  {/* Glassmorphic card overlay layer representing UI details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/30 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Small structural details floaters */}
              <div className="absolute -bottom-2 -right-2 z-30 p-3 bg-gray-900/90 text-yellow-400 border border-gray-800 rounded-2xl flex items-center space-x-2 text-xs font-mono shadow-xl shadow-yellow-500/10">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                <span>Lucknow, IN</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center space-y-2 text-gray-400 text-xs">
          <span className="font-mono tracking-widest uppercase">Scroll Down</span>
          <button
            onClick={() => scrollToSection('about')}
            className={`p-2 rounded-full border transition-all duration-200 bounce cursor-pointer ${
              theme === 'dark' ? 'border-gray-800 hover:bg-gray-900' : 'border-gray-200 hover:bg-gray-100'
            }`}
          >
            <ArrowDown size={14} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
