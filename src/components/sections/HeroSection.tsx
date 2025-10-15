import { Section } from '../ui/Section';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { personalInfo } from '@/constants/portfolio-data';

export const HeroSection = () => {
  return (
    <Section id="home" className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 w-full">
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
          
          {/* Right side - Placeholder Animation */}
          <div className="hidden md:flex items-center justify-center animate-slide-in-right">
            <div className="relative w-full max-w-md aspect-square">
              {/* Animated placeholder - you can replace this with your 3D animation */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse"></div>
              <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-primary/30 to-secondary/30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute inset-16 rounded-full bg-gradient-to-bl from-primary/40 to-secondary/40 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                  {personalInfo.name.split(' ').map(word => word[0]).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
