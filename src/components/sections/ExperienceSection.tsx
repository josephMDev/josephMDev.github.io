import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { experience } from '@/constants/portfolio-data';

export const ExperienceSection = () => {
  return (
    <Section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey"
          className="text-center mb-16"
        />
        
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <Card key={exp.id} className="p-8 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {exp.position}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {exp.period}
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Experience
                  </span>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {exp.description}
              </p>
              
              {exp.achievements && exp.achievements.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm">{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
