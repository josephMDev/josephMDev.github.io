import { Section } from '../ui/Section';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { personalInfo } from '@/constants/portfolio-data';

export const HeroSection = () => {
  return (
    <Section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Gradient Orb - Mobile Background */}
      <div className="absolute inset-0 flex items-center justify-center md:hidden pointer-events-none">
        <div className="relative w-full h-full">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl animate-float"></div>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-gradient-to-tr from-secondary/25 to-accent/25 blur-2xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-15 blur-3xl animate-spin-slow"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                Hi, I'm
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                <span className="text-primary whitespace-nowrap">{personalInfo.name}</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                {personalInfo.title}
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            {/* Resume Button */}
            <div>
              <a
                href={personalInfo.resume}
                download
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <Download className="w-5 h-5" />
                Resume
              </a>
            </div>
          </div>
          
          {/* Right side - Animated Gradient Orb */}
          <div className="hidden md:flex items-center justify-center animate-slide-in-right">
            <div className="relative w-full h-[600px]">
              {/* Floating gradient orbs */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl animate-float"></div>
              <div className="absolute inset-12 rounded-full bg-gradient-to-tr from-secondary/40 to-accent/40 blur-2xl animate-float-delayed"></div>
              <div className="absolute inset-24 rounded-full bg-gradient-to-bl from-accent/30 to-primary/30 blur-xl animate-float-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-20 blur-3xl animate-spin-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
