import { personalInfo } from '@/constants/portfolio-data';

export const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-4xl px-4 sm:px-6">
      <p className="pb-10 pt-8 text-muted">
        © {new Date().getFullYear()} {personalInfo.name}
      </p>
    </footer>
  );
};
