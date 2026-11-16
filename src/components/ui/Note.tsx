import { ReactNode } from 'react';

interface NoteProps {
  id: string;
  title: string;
  children: ReactNode;
}

// Section with a markdown-style heading over a thin rule
export const Note = ({ id, title, children }: NoteProps) => {
  return (
    <section id={id} className="scroll-mt-16 mx-auto max-w-3xl px-4 sm:px-6">
      <div className="border-t border-rule py-16 md:py-20">
        <h2 className="mb-8 font-mono text-sm font-medium">
          <span className="text-muted">##</span> {title}
        </h2>
        {children}
      </div>
    </section>
  );
};
