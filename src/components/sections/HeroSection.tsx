import { personalInfo } from '@/constants/portfolio-data';
import { NetworkMotif } from '../ui/NetworkMotif';

const links = [
  { name: 'Email', href: `mailto:${personalInfo.email}`, external: false },
  { name: 'GitHub', href: personalInfo.social.github, external: true },
  { name: 'LinkedIn', href: personalInfo.social.linkedin, external: true },
];

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-4xl flex-col items-start gap-10 px-4 pb-8 pt-16 sm:px-6 md:flex-row md:items-center md:gap-0 md:pb-10 md:pt-24"
    >
      <div>
        <p className="text-base text-muted">// {personalInfo.title}</p>

        <h1 className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
          {personalInfo.name}
        </h1>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                className="code-link"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Below the links on mobile; centred between the end of the name and the column's right edge on wider screens */}
      <div className="flex md:flex-1 md:justify-center">
        <NetworkMotif className="w-60 shrink-0" />
      </div>
    </section>
  );
};
