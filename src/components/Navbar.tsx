import { personalInfo } from '@/constants/portfolio-data';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-baseline justify-between gap-6 px-4 py-5 font-mono text-sm sm:px-6">
        <a href="#home" className="font-medium">
          {personalInfo.name}
        </a>

        <nav className="flex items-baseline gap-5 sm:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hidden text-muted transition-colors hover:text-ink sm:inline"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};
