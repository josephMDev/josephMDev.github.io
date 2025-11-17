import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';

export const AboutSection = () => {
  return (
    <Section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="About Me"
          center={false}
          className="mb-12"
        />
        
        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-left animate-fade-in">
        I'm a software and AI engineer with 3+ years in software and AI engineering. 
        I've built solutions at Bank of Montreal (BMO) and pre-seed & funded startups.
        Currently, I'm at SuiteSpot where I focus on integrating AI technology into 
        an established proptech B2B SaaS platform. 
        I specialize at the intersection of cloud, traditional software, and AI, 
        turning complex challenges into impactful solutions.
        </p>
      </div>
    </Section>
  );
};
