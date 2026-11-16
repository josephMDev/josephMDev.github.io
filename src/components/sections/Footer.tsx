import { personalInfo } from '@/constants/portfolio-data';

export const Footer = () => {
  return (
    <footer className="mx-auto max-w-4xl px-4 sm:px-6">
      <p className="border-t border-dashed border-rule py-8 font-mono text-xs text-muted">
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </p>
    </footer>
  );
};
