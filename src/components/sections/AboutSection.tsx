import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { personalInfo } from '@/constants/portfolio-data';

export const AboutSection = () => {
  return (
    <Section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          title="About Me"
          subtitle="Get to know me better"
          className="text-center mb-16"
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Story
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm passionate about creating innovative solutions that make a real impact. 
                With expertise in both software engineering and AI, I love tackling complex 
                challenges and turning ideas into reality.
              </p>
            </Card>
          </div>
          
          <div className="animate-slide-in-right">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                What I Do
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Full-stack web development with modern technologies
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    AI/ML model development and implementation
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Cloud architecture and DevOps practices
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Technical leadership and mentoring
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};
