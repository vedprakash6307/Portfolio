import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Download, FileText, Check, Copy, Sparkles, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: 'dark' | 'light';
}

export default function ResumeModal({ isOpen, onClose, theme }: ResumeModalProps) {
  const [copied, setCopied] = React.useState(false);

  const rawResumeText = `VEDPRAKASH KUSHWAHA
MERN Stack Developer | Aspiring Full-Stack Developer
Lucknow, India | Email: pk7645115@gmail.com | Phone: +91-6307616454

PROFILE SUMMARY
Final year BCA student with a strong interest in Full-Stack Web Development (MERN Stack). 
Currently building academic and practice projects using modern web technologies, with hands-on experience in MongoDB, Express.js, React.js, and Node.js.

KEY HIGHLIGHTS
• Hands-on learning of MERN Stack (MongoDB, Express.js, React.js, Node.js)
• Developed small projects integrating frontend and backend technologies
• Understanding of REST APIs and backend workflows
• Fast learner with a startup-oriented mindset

TECHNICAL SKILLS
• Frontend: HTML, CSS, JavaScript, React.js
• Backend: Node.js, Express.js
• Database: MongoDB, MySQL (Basic)
• Tools: Git, GitHub, VS Code

PROJECTS
1. Personal Portfolio Website - Built using HTML, CSS, JavaScript
2. Tourism Place Finder and Travel Booking System - Full-stack project with MERN technologies

TRAINING
PrepCode Office - 45-day intensive MERN Stack training
• Daily 3–4 hours of hands-on coding practice
• REST API development and backend server middleware construction
• Full-stack integration practices connecting React UI component with MongoDB
• Developed mini-projects implementing REST APIs and full-stack integration

EDUCATION
• BCA - Final Year, Ambalika Institute of Management and Technology, Lucknow (Expected Completion: June–July 2026)
• Intermediate (12th) - 76.6%
• High School (10th) - 72.5%

STRENGTHS
• Problem-solving mindset | Quick learner | Strong interest in MERN stack development`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(rawResumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadAtsTxt = () => {
    const element = document.createElement('a');
    const file = new Blob([rawResumeText], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'Vedprakash_Kushwaha_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const triggerPrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop screen lock */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-gray-950/80 backdrop-blur-md z-40 cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3 }}
            className={`w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl border z-50 shadow-2xl relative overflow-hidden ${
              theme === 'dark' ? 'bg-gray-950 border-gray-900' : 'bg-white border-gray-200'
            }`}
          >
            {/* Action Bar Header */}
            <div className={`p-4 border-b flex flex-wrap gap-2 items-center justify-between z-10 print:hidden ${
              theme === 'dark' ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50 border-gray-150'
            }`}>
              <div className="flex items-center space-x-2">
                <FileText className="text-blue-500" size={20} />
                <span className={`font-display font-bold text-sm sm:text-base ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Vedprakash's Resume
                </span>
                <span className="text-[10px] sm:text-xs font-mono px-2 py-0.5 roundedbg-blue-500/10 text-blue-500 flex items-center space-x-1">
                  <Sparkles size={10} className="animate-pulse" />
                  <span>ATS-Optimized</span>
                </span>
              </div>

              {/* Functional CTA row */}
              <div className="flex items-center space-x-2">
                {/* Print button (Save PDF) */}
                <button
                  onClick={triggerPrint}
                  className="inline-flex items-center space-x-1 sm:space-x-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-650 hover:from-blue-500 hover:to-indigo-550 text-white text-xs sm:text-sm font-semibold rounded-lg transition-transform active:scale-95 cursor-pointer"
                  title="Print Resume or Save as PDF"
                >
                  <Printer size={14} />
                  <span>Print / Save PDF</span>
                </button>

                {/* Plain text downloader */}
                <button
                  onClick={downloadAtsTxt}
                  className={`inline-flex items-center space-x-1 sm:space-x-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg border transition-all duration-200 active:scale-95 cursor-pointer ${
                    theme === 'dark'
                      ? 'border-gray-800 bg-gray-900 hover:bg-gray-800 text-gray-250 hover:text-white'
                      : 'border-gray-205 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-950'
                  }`}
                  title="Download clean plaintext version for ATS trackers"
                >
                  <Download size={14} />
                  <span>ATS TXT</span>
                </button>

                {/* Copies text resume */}
                <button
                  onClick={copyToClipboard}
                  className={`p-2 rounded-lg border transition-all duration-200 active:scale-95 cursor-pointer ${
                    theme === 'dark'
                      ? 'border-gray-800 bg-gray-900 hover:bg-gray-800 text-gray-250 hover:text-white'
                      : 'border-gray-205 bg-white hover:bg-gray-50 text-gray-755 hover:text-gray-950'
                  }`}
                  title="Copy plaintext to clipboard"
                >
                  {copied ? <Check className="text-green-500" size={14} /> : <Copy size={14} />}
                </button>

                <div className={`w-[1px] h-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`} />

                {/* Close modal */}
                <button
                  onClick={onClose}
                  className={`p-1.5 rounded-lg border hover:scale-105 active:scale-95 transition-all duration-200 ${
                    theme === 'dark'
                      ? 'border-gray-800 hover:bg-gray-900 text-gray-400 hover:text-white'
                      : 'border-gray-200 hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Document body scroll */}
            <div className={`flex-1 overflow-y-auto p-6 sm:p-10 print:p-0 select-text ${
              theme === 'dark' ? 'bg-gray-950 text-gray-200' : 'bg-white text-gray-800'
            }`}>
              
              {/* @media print formatting block */}
              <div className="max-w-3xl mx-auto print-resume space-y-8 select-text">
                
                {/* CV Header */}
                <div className="text-center space-y-2 border-b-2 border-gray-150 dark:border-gray-850 pb-6">
                  <h1 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-gray-900 dark:text-white print:text-gray-950">
                    VEDPRAKASH KUSHWAHA
                  </h1>
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-500 print:text-blue-600">
                    MERN Stack Developer | Aspiring Full-Stack Developer
                  </p>
                  
                  {/* Metadata linkings */}
                  <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-gray-400 dark:text-gray-400 print:text-gray-700 font-mono mt-3">
                    <span className="flex items-center space-x-1">
                      <MapPin size={12} className="text-blue-500" />
                      <span>Lucknow, India</span>
                    </span>
                    <span>•</span>
                    <a href="mailto:pk7645115@gmail.com" className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                      <Mail size={12} className="text-blue-500" />
                      <span>pk7645115@gmail.com</span>
                    </a>
                    <span>•</span>
                    <a href="tel:+916307616454" className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                      <Phone size={12} className="text-blue-500" />
                      <span>+91-6307616454</span>
                    </a>
                  </div>
                </div>

                {/* Profile Summary */}
                <div className="space-y-3">
                  <h2 className="text-md sm:text-lg font-display font-black uppercase tracking-wider text-gray-900 dark:text-white print:text-gray-950 border-b border-gray-150 dark:border-gray-850 pb-1 flex items-center space-x-2">
                    <span className="w-1.5 h-4 bg-blue-500 rounded print:bg-blue-600" />
                    <span>Profile Summary</span>
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed text-gray-400 dark:text-gray-300 print:text-gray-750">
                    Final year BCA student with a strong interest in Full-Stack Web Development (MERN Stack). Currently building academic and practice projects using modern web technologies, with hands-on experience in MongoDB, Express.js, React.js, and Node.js.
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="space-y-3">
                  <h2 className="text-md sm:text-lg font-display font-black uppercase tracking-wider text-gray-900 dark:text-white print:text-gray-950 border-b border-gray-150 dark:border-gray-850 pb-1 flex items-center space-x-2">
                    <span className="w-1.5 h-4 bg-blue-500 rounded print:bg-blue-600" />
                    <span>Key Highlights</span>
                  </h2>
                  <ul className="list-disc list-inside text-sm sm:text-base space-y-2 text-gray-400 dark:text-gray-300 print:text-gray-750">
                    <li><strong className="text-gray-900 dark:text-white print:text-gray-900">Hands-on learning</strong> of MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
                    <li>Developed <strong className="text-gray-900 dark:text-white print:text-gray-900">small integration projects</strong> linking custom structured MongoDB tables</li>
                    <li>Clear understanding of RESTful API designs and back-end express logic</li>
                    <li>Highly adaptable learner with a startup-oriented delivery mindset</li>
                  </ul>
                </div>

                {/* Technical Skills */}
                <div className="space-y-3">
                  <h2 className="text-md sm:text-lg font-display font-black uppercase tracking-wider text-gray-900 dark:text-white print:text-gray-950 border-b border-gray-150 dark:border-gray-850 pb-1 flex items-center space-x-2">
                    <span className="w-1.5 h-4 bg-blue-500 rounded print:bg-blue-600" />
                    <span>Technical Skills</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
                    <div className="space-y-1">
                      <span className="font-mono text-xs uppercase text-blue-500 font-bold tracking-wider">Frontend Development</span>
                      <p className="text-gray-400 dark:text-gray-300 print:text-gray-750">HTML, CSS, JavaScript, React.js</p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono text-xs uppercase text-indigo-500 font-bold tracking-wider">Backend & Database</span>
                      <p className="text-gray-400 dark:text-gray-300 print:text-gray-750">Node.js, Express.js, MongoDB, MySQL (Basic)</p>
                    </div>
                    <div className="space-y-1 sm:col-span-2">
                      <span className="font-mono text-xs uppercase text-purple-500 font-bold tracking-wider">Tools & Utilities</span>
                      <p className="text-gray-400 dark:text-gray-300 print:text-gray-750">Git, GitHub, VS Code, Tailwind CSS, Framer Motion</p>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div className="space-y-3">
                  <h2 className="text-md sm:text-lg font-display font-black uppercase tracking-wider text-gray-900 dark:text-white print:text-gray-950 border-b border-gray-150 dark:border-gray-850 pb-1 flex items-center space-x-2">
                    <span className="w-1.5 h-4 bg-blue-500 rounded print:bg-blue-600" />
                    <span>Key Engineering Projects</span>
                  </h2>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-display font-bold text-sm sm:text-base text-gray-900 dark:text-white print:text-gray-955">
                          1. Tourism Place Finder and Travel Booking System
                        </h3>
                        <span className="font-mono text-xs text-blue-500">MERN FULL-STACK</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-300 print:text-gray-750">
                        A custom web application detailing travel itineraries, featuring REST integration, Mongo storage structure, and adaptive react components.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-display font-bold text-sm sm:text-base text-gray-900 dark:text-white print:text-gray-955">
                          2. Personal Portfolio Website
                        </h3>
                        <span className="font-mono text-xs text-indigo-500">REACT / TAILWIND</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-300 print:text-gray-750">
                        A modern digital visual card showing full academic progression, skill matrices, credentials, strengths, and smooth layout print transitions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Training */}
                <div className="space-y-3">
                  <h2 className="text-md sm:text-lg font-display font-black uppercase tracking-wider text-gray-900 dark:text-white print:text-gray-955 border-b border-gray-150 dark:border-gray-855 pb-1 flex items-center space-x-2">
                    <span className="w-1.5 h-4 bg-blue-500 rounded print:bg-blue-600" />
                    <span>Corporate Training</span>
                  </h2>
                  <div className="space-y-2">
                    <div className="flex justify-between items-start flex-wrap gap-1">
                      <div>
                        <h3 className="font-display font-bold text-sm sm:text-base text-gray-900 dark:text-white print:text-gray-955">
                          PrepCode Office
                        </h3>
                        <p className="text-xs font-mono text-blue-500">45-day Intensive MERN Stack Practice</p>
                      </div>
                      <span className="text-xs font-mono text-gray-400 dark:text-gray-400 print:text-gray-700">Completed Training</span>
                    </div>
                    <ul className="list-disc list-inside text-xs sm:text-sm space-y-1 text-gray-400 dark:text-gray-300 print:text-gray-750">
                      <li>Daily 3–4 hours of intensive hands-on programming workflows modeling modern web tasks.</li>
                      <li>Developed complete mini-projects linking Express routers with operational databases.</li>
                      <li>Synthesized UI workflows using state context, handling asynchronous database fetches.</li>
                    </ul>
                  </div>
                </div>

                {/* Education */}
                <div className="space-y-3">
                  <h2 className="text-md sm:text-lg font-display font-black uppercase tracking-wider text-gray-900 dark:text-white print:text-gray-955 border-b border-gray-150 dark:border-gray-855 pb-1 flex items-center space-x-2">
                    <span className="w-1.5 h-4 bg-blue-500 rounded print:bg-blue-600" />
                    <span>Education Background</span>
                  </h2>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white print:text-gray-955">BCA (Bachelor of Computer Applications)</h4>
                        <p className="text-gray-400 dark:text-gray-300 print:text-gray-750">Ambalika Institute of Management and Technology, Lucknow</p>
                      </div>
                      <span className="text-xs font-mono text-blue-500">June-July 2026 (Expected)</span>
                    </div>

                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white print:text-gray-954">Intermediate (12th Grade)</h4>
                        <p className="text-gray-400 dark:text-gray-300 print:text-gray-750">UP Board, Lucknow</p>
                      </div>
                      <span className="text-xs font-mono text-indigo-400">Score: 76.6%</span>
                    </div>

                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white print:text-gray-954">High School (10th Grade)</h4>
                        <p className="text-gray-400 dark:text-gray-300 print:text-gray-750">UP Board, Lucknow</p>
                      </div>
                      <span className="text-xs font-mono text-indigo-400">Score: 72.5%</span>
                    </div>
                  </div>
                </div>

                {/* Strengths */}
                <div className="space-y-3">
                  <h2 className="text-md sm:text-lg font-display font-black uppercase tracking-wider text-gray-900 dark:text-white print:text-gray-955 border-b border-gray-150 dark:border-gray-855 pb-1 flex items-center space-x-2">
                    <span className="w-1.5 h-4 bg-blue-500 rounded print:bg-blue-600" />
                    <span>Strengths</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-300 print:text-gray-750">
                    • Problem-solving mindset | • Quick learner | • Strong interest in building high-scale MERN stack systems | • Highly Adaptable | • Team Collaboration
                  </p>
                </div>

              </div>

            </div>

            {/* Custom print CSS for standard document sizing and hides headers */}
            <style>{`
              @media print {
                body {
                  background-color: white !important;
                  color: black !important;
                  font-family: Arial, sans-serif !important;
                }
                #navbar, header, footer, .print\\:hidden {
                  display: none !important;
                }
                .print-resume {
                  margin: 0 !important;
                  padding: 15mm !important;
                  width: 100% !important;
                  color: #111827 !important;
                }
                .dark-theme-glow, .glow-spot {
                  display: none !important;
                }
              }
            `}</style>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
