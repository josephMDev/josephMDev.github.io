import { useState, useEffect } from 'react';
import { Section } from '../ui/Section';
import { GithubIcon, LinkedinIcon, Mail, Download } from 'lucide-react';
import { personalInfo } from '@/constants/portfolio-data';

export const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = ['Software', 'AI', 'Software + AI'];
  const pauseTimes = [15000, 10000, 15000]; // 30s, 10s, 15s

  useEffect(() => {
    const currentWord = roles[currentRole];
    const typingSpeed = isDeleting ? 75 : 150;
    const pauseTime = pauseTimes[currentRole];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentWord.length) {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRole]);

  return (
    <Section id="home" className="pt-24 md:pt-32 pb-16 md:pb-20 flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left side - Content */}
          <div className="space-y-5 md:space-y-6 animate-slide-in-left text-center md:text-left w-full">
            <div className="space-y-3">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                Hi, I'm
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                <span className="text-primary whitespace-nowrap">{personalInfo.name}</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 min-h-[2rem] md:min-h-[2.5rem]">
                {displayedText}
                <span className="animate-pulse -ml-0.5 -mr-1">|</span>
                {' Engineer'}
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 justify-center md:justify-start">
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
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
            
            {/* Resume Button */}
            <div className="flex justify-center md:justify-start">
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
          
          {/* Illustration - Shows on mobile (smaller) and desktop */}
          <div className="flex items-center justify-center animate-slide-in-right w-full mt-6 md:mt-0">
            <div className="relative w-full h-[220px] sm:h-[300px] md:h-[450px]">
              {/* Background blur effects - hidden on mobile */}
              <div className="hidden md:block absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl animate-float"></div>
              <div className="hidden md:block absolute inset-12 rounded-full bg-gradient-to-tr from-secondary/30 to-accent/30 blur-2xl animate-float-delayed"></div>
              
              {/* Programming Illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/programming-pro.svg" 
                  alt="Programming Workspace" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
