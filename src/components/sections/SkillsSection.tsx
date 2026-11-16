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
  'LangChain',
  'LangGraph',
  'PostgreSQL',
];

export const SkillsSection = () => {
  return (
    <Note id="skills" title="Skills">
      <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </Note>
  );
};
