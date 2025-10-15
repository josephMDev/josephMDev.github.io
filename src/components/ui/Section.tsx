import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  fullWidth = false 
}) => {
  return (
    <section
      id={id}
      className={`
        py-20 px-6 
        ${!fullWidth ? 'max-w-7xl mx-auto' : ''}
        ${className}
      `}
    >
      {children}
    </section>
  );
};

