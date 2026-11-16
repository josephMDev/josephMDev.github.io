import { personalInfo } from '@/constants/portfolio-data';

const links = [
  { name: 'Email', href: `mailto:${personalInfo.email}`, external: false },
  { name: 'GitHub', href: personalInfo.social.github, external: true },
  { name: 'LinkedIn', href: personalInfo.social.linkedin, external: true },
];

export const HeroSection = () => {
  return (
    <section id="home" className="mx-auto max-w-3xl px-4 pb-20 pt-20 sm:px-6 md:pb-24 md:pt-32">
      <p className="font-mono text-sm text-muted">// {personalInfo.title}</p>

      <h1 className="mt-4 font-mono text-4xl font-medium tracking-tight sm:text-5xl">
        {personalInfo.name}
      </h1>

      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
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
    </section>
  );
};
