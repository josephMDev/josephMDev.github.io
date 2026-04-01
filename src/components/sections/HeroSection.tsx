import { Section } from '../ui/Section';
import { GithubIcon, LinkedinIcon, Mail } from 'lucide-react';
import { personalInfo } from '@/constants/portfolio-data';

export const HeroSection = () => {
  return (
    <Section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Status indicator */}
        <div className="mb-10 md:mb-12">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 text-xs font-semibold tracking-[0.1em] uppercase border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
            Currently at SuiteSpot
          </span>
        </div>

        {/* Name — editorial display */}
        <h1 className="font-black tracking-tight leading-[0.88] text-gray-900 dark:text-white mb-8"
            style={{ fontSize: 'clamp(3rem, 12vw, 8rem)' }}>
          Joseph<br />Moraru
        </h1>

        {/* Divider + role */}
        <div className="flex items-center gap-5 mb-8">
          <div className="w-12 h-[2px] bg-primary flex-shrink-0" />
          <p className="text-base md:text-lg font-medium text-gray-500 dark:text-gray-400 tracking-wide">
            Software + AI Engineer · Canada
          </p>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed mb-10">
          Building at the intersection of cloud, traditional software, and AI—
          turning complex challenges into impactful products.
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            <Mail className="w-4 h-4" />
            Email me
          </a>
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-colors text-sm font-medium"
          >
            <GithubIcon className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-colors text-sm font-medium"
          >
            <LinkedinIcon className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
};
