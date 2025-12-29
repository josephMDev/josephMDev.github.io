import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { GithubIcon, LinkedinIcon, Mail } from 'lucide-react';
import { personalInfo } from '@/constants/portfolio-data';

export const ContactSection = () => {
  return (
    <Section id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="Let's connect!"
          center={false}
          className="mb-8"
        />
        
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-left mb-8">
          Feel free to send me an email, check out my GitHub, or reach out on LinkedIn!
        </p>

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
      </div>
    </Section>
  );
};

