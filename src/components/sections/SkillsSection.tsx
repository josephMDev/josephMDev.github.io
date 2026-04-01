import { Section } from '../ui/Section';
import { skills } from '@/constants/portfolio-data';

export const SkillsSection = () => {
  return (
    <Section id="skills">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-8">
          Skills & Expertise
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {skills.categories.map((category) => (
            <div key={category.title}>
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-gray-400 dark:text-gray-500 mb-4">
                {category.title}
              </p>
              <ul className="space-y-2.5">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
