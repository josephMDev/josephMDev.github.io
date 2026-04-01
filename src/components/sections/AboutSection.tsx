import { Section } from '../ui/Section';

export const AboutSection = () => {
  return (
    <Section id="about">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-8">
          About
        </p>

        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
          With 3+ years of experience in software and AI engineering,
          I've built solutions for organizations ranging from Bank of Montreal (BMO) to both pre-seed and funded startups.
          Currently at SuiteSpot, I focus on integrating AI technology into an established proptech B2B SaaS platform.
          I specialize at the intersection of cloud, traditional software, and AI,
          turning complex challenges into impactful solutions.
        </p>

        {/* Stats */}
        <div className="mt-12 pt-12 border-t border-gray-200 dark:border-gray-800 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <p className="text-4xl font-black text-gray-900 dark:text-white mb-1">3+</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Years of experience</p>
          </div>
          <div>
            <p className="text-4xl font-black text-gray-900 dark:text-white mb-1">4</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Companies</p>
          </div>
          <div>
            <p className="text-4xl font-black text-gray-900 dark:text-white mb-1">10+</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Technologies</p>
          </div>
        </div>
      </div>
    </Section>
  );
};
