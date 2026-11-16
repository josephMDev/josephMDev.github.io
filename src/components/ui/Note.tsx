import { ReactNode } from 'react';

interface NoteProps {
  id: string;
  title: string;
  children: ReactNode;
}

// Section with a markdown-style heading; whitespace separates sections
export const Note = ({ id, title, children }: NoteProps) => {
  return (
    <section id={id} className="scroll-mt-16 mx-auto max-w-4xl px-4 py-8 sm:px-6 md:py-10">
      <h2 className="mb-6 text-base font-medium">
        <span className="text-muted">##</span> {title}
      </h2>
      {children}
    </section>
  );
};
