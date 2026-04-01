import { Section } from '../ui/Section';
import { GithubIcon, LinkedinIcon } from 'lucide-react';
import { personalInfo } from '@/constants/portfolio-data';

export const ContactSection = () => {
  return (
    <Section id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-8">
          Contact
        </p>

        <h2
          className="font-black tracking-tight leading-[0.9] text-gray-900 dark:text-white mb-8"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}
        >
          Get in<br />touch.
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed mb-10">
          Open to new opportunities, collaborations, and conversations about tech.
          The best way to reach me is email.
        </p>

        <a
          href={`mailto:${personalInfo.email}`}
          className="group inline-flex items-center gap-2 text-lg font-medium text-primary hover:text-primary/80 transition-colors"
        >
          {personalInfo.email}
          <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
        </a>

        <div className="flex gap-6 mt-8">
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
};
