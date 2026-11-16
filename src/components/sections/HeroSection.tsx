import { personalInfo } from '@/constants/portfolio-data';

const links = [
  { name: 'Email', href: `mailto:${personalInfo.email}`, external: false },
  { name: 'GitHub', href: personalInfo.social.github, external: true },
  { name: 'LinkedIn', href: personalInfo.social.linkedin, external: true },
];

export const HeroSection = () => {
  return (
    <section id="home" className="mx-auto max-w-4xl px-4 pb-20 pt-20 sm:px-6 md:pb-28 md:pt-32">
      <p className="font-mono text-sm text-muted">// {personalInfo.title}</p>

      <h1 className="mt-5 font-mono text-[2.5rem] font-medium leading-none tracking-tight sm:text-6xl md:text-7xl">
        {personalInfo.name}
        <span
          className="cursor-blink ml-2 inline-block h-[0.8em] w-[0.45em] translate-y-[0.08em] bg-accent"
          aria-hidden="true"
        />
      </h1>

      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2 font-mono text-base md:mt-12">
        {links.map((link) => (
          <li key={link.name}>
            <span className="text-accent">→</span>{' '}
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
    </section>
  );
};
