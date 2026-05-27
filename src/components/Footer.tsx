import React from 'react';
import { socialLinks, personalInfo } from '../data';
import { Github, Linkedin, Instagram, Code, Heart } from 'lucide-react';

interface FooterProps {
  theme: 'dark' | 'light';
}

export default function Footer({ theme }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github':
        return <Github size={18} />;
      case 'linkedin':
        return <Linkedin size={18} />;
      case 'instagram':
        return <Instagram size={18} />;
      default:
        return null;
    }
  };

  return (
    <footer
      className={`border-t py-12 transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-gray-950 border-gray-900 text-gray-400'
          : 'bg-white border-gray-200 text-gray-500'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand/Signature */}
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-display font-bold text-sm">
              VK
            </div>
            <span className={`font-display font-semibold text-base ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Vedprakash Kushwaha
            </span>
          </div>

          {/* Description / Built with */}
          <div className="flex items-center space-x-1 text-xs font-medium">
            <span>Built with</span>
            <Heart size={12} className="text-rose-500 animate-pulse fill-rose-500" />
            <span>by</span>
            <span className="font-semibold text-blue-500">{personalInfo.name}</span>
            <span className="text-gray-400">© {currentYear}</span>
          </div>

          {/* Socials Anchors */}
          <div className="flex items-center space-x-3">
            {socialLinks
              .filter((lnk) => lnk.platform !== 'email' && lnk.platform !== 'phone')
              .map((lnk, idx) => (
                <a
                  key={idx}
                  href={lnk.url}
                  target="_blank"
                  rel="noreferrer"
                  title={lnk.platform}
                  className={`p-2 rounded-lg border transition-all duration-200 ${
                    theme === 'dark'
                      ? 'border-gray-900 bg-gray-900/40 hover:border-gray-800 hover:text-white hover:bg-gray-900'
                      : 'border-gray-100 bg-gray-50 hover:border-blue-200 hover:text-gray-950 hover:bg-blue-50/50'
                  }`}
                >
                  {getSocialIcon(lnk.platform)}
                </a>
              ))}
          </div>

        </div>
      </div>
    </footer>
  );
}
