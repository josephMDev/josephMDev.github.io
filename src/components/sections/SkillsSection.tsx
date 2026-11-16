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
    <Note id="skills" number="02" title="Skills & Expertise">
      <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-rule bg-rule font-mono sm:grid-cols-3">
        {technologies.map((tech, index) => (
          <li key={tech} className="flex items-baseline gap-4 bg-paper px-5 py-4 text-lg">
            <span className="text-sm text-muted tabular-nums">{String(index + 1).padStart(2, '0')}</span>
            {tech}
          </li>
        ))}
      </ol>
    </Note>
  );
};
