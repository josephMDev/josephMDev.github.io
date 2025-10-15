import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { skills } from '@/constants/portfolio-data';

// Backup of the original categorized skills section
// Kept for potential future use
export const SkillsCategoriesSection = () => {
  return (
    <Section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 mb-20">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          title="Skills & Expertise"
          subtitle="Technologies and tools I work with"
          className="text-center mb-16"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {skills.categories.map((category, index) => (
            <Card key={category.title} className="p-8 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

