import { Note } from '../ui/Note';
import { personalInfo } from '@/constants/portfolio-data';

export const ContactSection = () => {
  return (
    <Note id="contact" number="03" title="Let's connect!">
      <p className="max-w-2xl text-pretty text-lg leading-relaxed md:text-xl">
        Feel free to send me an email, check out my GitHub, or reach out on LinkedIn!
      </p>

      <p className="mt-10 break-words font-mono text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl">
        <span className="text-accent">→</span>{' '}
        <a href={`mailto:${personalInfo.email}`} className="code-link">
          {personalInfo.email}
        </a>
      </p>

      <ul className="mt-8 flex gap-8 font-mono text-base">
        <li>
          <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="code-link">
            GitHub
          </a>
        </li>
        <li>
          <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="code-link">
            LinkedIn
          </a>
        </li>
      </ul>
    </Note>
  );
};
