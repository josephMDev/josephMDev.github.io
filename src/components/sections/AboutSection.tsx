import { Note } from '../ui/Note';

export const AboutSection = () => {
  return (
    <Note id="about" number="01" title="About Me">
      <p className="max-w-3xl text-pretty border-l-2 border-accent pl-5 text-lg leading-relaxed md:pl-6 md:text-xl md:leading-relaxed">
        With 3+ years of experience in software and AI engineering,
        I've built solutions for organizations ranging from Bank of Montreal (BMO) to both pre-seed and funded startups.
        Currently, I work at SuiteSpot where I focus on integrating AI technology into
        an established proptech B2B SaaS platform.
        I specialize at the intersection of cloud, traditional software, and AI,
        turning complex challenges into impactful solutions.
      </p>
    </Note>
  );
};
