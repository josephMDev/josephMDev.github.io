import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';

const technologies = [
  { name: 'Angular', icon: '/angular-original.svg' },
  { name: 'React', icon: '/react-original.svg' },
  { name: 'Node.js', icon: '/nodejs-plain-wordmark.svg' },
  { name: 'TypeScript', icon: '/typescript-original.svg' },
  { name: 'Python', icon: '/python-original.svg' },
  { name: 'Swift', icon: '/swift-original.svg' },
  { name: 'C++', icon: '/cplusplus-original.svg' },
  { name: 'MongoDB', icon: '/mongodb-original.svg'},
  { name: 'PostgreSQL', icon: '/postgresql-original.svg'},
];

export const SkillsSection = () => {
  return (
    <Section id="skills" className="pt-10 pb-20 bg-gray-50 dark:bg-gray-900 mb-20">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          title="Skills & Expertise"
          className="text-center mb-16"
        />
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {technologies.map((tech, index) => (
            <Card
              key={tech.name}
              className="flex items-center justify-center p-6 w-24 h-24 md:w-28 md:h-28 animate-slide-up group hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-full h-full flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                {tech.fallback ? (
                  <div className="w-full h-full flex items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-lg">
                    <span className="text-2xl font-bold text-primary">{tech.fallback}</span>
                  </div>
                ) : (
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      if (target.nextElementSibling) {
                        (target.nextElementSibling as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                )}
                {tech.fallback && (
                  <div className="hidden w-full h-full items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-lg">
                    <span className="text-xl font-bold text-primary">{tech.fallback}</span>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
