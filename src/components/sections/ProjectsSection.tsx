import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { projects } from '@/constants/portfolio-data';

export const ProjectsSection = () => {
  return (
    <Section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          title="Featured Projects"
          subtitle="Some of my recent work"
          className="text-center mb-16"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex space-x-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
