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
  { name: 'AWS', icon: '/amazonwebservices-plain-wordmark.svg'},
];

export const SkillsSection = () => {
  return (
    <Section id="skills">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="Skills & Expertise"
          center={false}
          className="mb-12"
        />
        
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-5">
          {technologies.map((tech, index) => (
            <Card
              key={tech.name}
              className="flex items-center justify-center p-6 w-24 h-24 md:w-28 md:h-28 animate-slide-up group hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-full h-full flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                {
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
                }
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
