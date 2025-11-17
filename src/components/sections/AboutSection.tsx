import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';

export const AboutSection = () => {
  return (
    <Section id="about">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="About Me"
          center={false}
          className="mb-12"
        />
        
        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-left animate-fade-in">
        With 3+ years of experience in software and AI engineering, 
        I've built solutions for organizations ranging from Bank of Montreal (BMO) to both pre-seed and funded startups.
        Currently, I work at SuiteSpot where I focus on integrating AI technology into 
        an established proptech B2B SaaS platform. 
        I specialize at the intersection of cloud, traditional software, and AI, 
        turning complex challenges into impactful solutions.
        </p>
      </div>
    </Section>
  );
};
