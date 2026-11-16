import { Note } from '../ui/Note';

const technologies = [
  'Angular',
  'React',
  'Node.js',
  'TypeScript',
  'Python',
  'Swift',
  'C++',
  'MongoDB',
  'AWS',
];

export const SkillsSection = () => {
  return (
    <Note id="skills" title="Skills & Expertise">
      <ul className="grid grid-cols-2 gap-x-8 gap-y-3 font-mono sm:grid-cols-3">
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </Note>
  );
};
