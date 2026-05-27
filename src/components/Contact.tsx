import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo, socialLinks } from '../data';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle } from 'lucide-react';

interface ContactProps {
  theme: 'dark' | 'light';
}

export default function Contact({ theme }: ContactProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('submitting');
    
    // Construct pre-filled email details
    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Hello Vedprakash,\n\n` +
      `You received a new message from your portfolio website contact form:\n\n` +
      `----------------------------------------\n` +
      `Sender Name:  ${formData.name}\n` +
      `Sender Email: ${formData.email}\n` +
      `----------------------------------------\n\n` +
      `Message Details:\n` +
      `${formData.message}\n\n` +
      `----------------------------------------\n` +
      `Sent via Vedprakash Kushwaha's Personal Portfolio Contact Section.`
    );
    
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${emailBody}`;

    setTimeout(() => {
      setStatus('success');
      // Open default mail provider pre-populated with the structured message
      window.location.href = mailtoUrl;
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'instagram':
        return <Instagram size={20} />;
      default:
        return null;
    }
  };

  return (
    <section
      id="contact"
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
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              Contact Me
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          </motion.div>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Details Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className={`text-xl sm:text-2xl font-display font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Let's discuss your next project
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-605'
              }`}>
                I'm active on all channels and looking forward to exploring graduation milestones, freelancing pipelines, fresh junior software internships, and team roles is ready.
              </p>
            </motion.div>

            {/* Direct Channels Cards */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`p-4 rounded-xl border flex items-center space-x-4 ${
                  theme === 'dark' ? 'bg-gray-900/30 border-gray-900' : 'bg-white border-gray-200'
                }`}
              >
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-500">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Email Me</span>
                  <a href={`mailto:${personalInfo.email}`} className={`text-sm sm:text-base font-medium hover:text-blue-500 transition-colors ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-900'
                  }`}>
                    {personalInfo.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className={`p-4 rounded-xl border flex items-center space-x-4 ${
                  theme === 'dark' ? 'bg-gray-900/30 border-gray-900' : 'bg-white border-gray-200'
                }`}
              >
                <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-500">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Call Me</span>
                  <a href={`tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`} className={`text-sm sm:text-base font-medium hover:text-indigo-500 transition-colors ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-900'
                  }`}>
                    {personalInfo.phone}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`p-4 rounded-xl border flex items-center space-x-4 ${
                  theme === 'dark' ? 'bg-gray-900/30 border-gray-900' : 'bg-white border-gray-200'
                }`}
              >
                <div className="p-2.5 rounded-lg bg-pink-500/10 text-pink-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Location</span>
                  <span className={`text-sm sm:text-base font-medium ${
                    theme === 'dark' ? 'text-gray-250' : 'text-gray-900'
                  }`}>
                    {personalInfo.location}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                theme === 'dark' ? 'bg-gray-900/15 border-gray-900' : 'bg-white border-gray-200 shadow-md'
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className={`text-xs font-mono uppercase tracking-wider font-semibold ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4.5 py-3 rounded-lg text-sm border focus:outline-none transition-all duration-200 ${
                        theme === 'dark'
                          ? 'bg-gray-950 border-gray-800 focus:border-indigo-500 text-white'
                          : 'bg-gray-50 border-gray-200 focus:border-blue-500 text-gray-900'
                      }`}
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className={`text-xs font-mono uppercase tracking-wider font-semibold ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4.5 py-3 rounded-lg text-sm border focus:outline-none transition-all duration-200 ${
                        theme === 'dark'
                          ? 'bg-gray-950 border-gray-800 focus:border-indigo-500 text-white'
                          : 'bg-gray-50 border-gray-200 focus:border-blue-500 text-gray-900'
                      }`}
                    />
                  </div>
                </div>

                {/* Message Box */}
                <div className="space-y-2">
                  <label className={`text-xs font-mono uppercase tracking-wider font-semibold ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Enter your message details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4.5 py-3 rounded-lg text-sm border focus:outline-none transition-all duration-200 resize-none ${
                      theme === 'dark'
                        ? 'bg-gray-950 border-gray-800 focus:border-indigo-500 text-white'
                        : 'bg-gray-50 border-gray-200 focus:border-blue-500 text-gray-900'
                    }`}
                  />
                </div>

                {/* Feedback Dialogues */}
                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-lg bg-green-500/10 border border-green-500/25 flex items-center space-x-3 text-sm text-green-400"
                    >
                      <CheckCircle size={18} />
                      <span>Thank you! Pre-filling your email client to send your message directly.</span>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/25 text-sm text-rose-500"
                    >
                      Please fill out all the input fields before submitting.
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-650 hover:from-blue-500 hover:to-indigo-550 text-white py-3 px-6 rounded-lg font-semibold shadow-lg shadow-indigo-500/10 transition-all duration-200 active:scale-95 disabled:opacity-50 cursor-pointer"
                >
                  <Send size={16} />
                  <span>{status === 'submitting' ? 'Delivering...' : 'Send Message'}</span>
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
