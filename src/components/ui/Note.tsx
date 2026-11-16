import { ReactNode } from 'react';

interface NoteProps {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}

// Notebook entry: markdown-style heading over a dashed rule, entry number in the margin
export const Note = ({ id, number, title, children }: NoteProps) => {
  return (
    <section id={id} className="scroll-mt-16 mx-auto max-w-4xl px-4 sm:px-6">
      <div className="border-t border-dashed border-rule py-16 md:py-24">
        <h2 className="mb-8 flex items-baseline justify-between font-mono text-lg font-medium md:mb-10">
          <span>
            <span className="text-accent">##</span> {title}
          </span>
          <span className="text-sm font-normal text-muted">{number}</span>
        </h2>
        {children}
      </div>
    </section>
  );
};
