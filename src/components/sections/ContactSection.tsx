import { Note } from '../ui/Note';
import { personalInfo } from '@/constants/portfolio-data';

export const ContactSection = () => {
  return (
    <Note id="contact" title="Let's connect!">
      <p className="text-pretty text-lg leading-relaxed">
        Feel free to send me an email, check out my GitHub, or reach out on LinkedIn!
      </p>

      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
        <li>
          <a href={`mailto:${personalInfo.email}`} className="code-link">
            {personalInfo.email}
          </a>
        </li>
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
