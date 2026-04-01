import { Section } from '../ui/Section';
import { experience } from '@/constants/portfolio-data';

export const ExperienceSection = () => {
  return (
    <Section id="experience">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-8">
          Experience
        </p>

        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="py-8 flex flex-col md:flex-row md:items-start md:justify-between gap-3"
            >
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {exp.position}
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  {exp.company}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </div>
              <div className="md:text-right flex-shrink-0">
                <span className="text-sm text-gray-400 dark:text-gray-500 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
