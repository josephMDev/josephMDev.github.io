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
        py-16 md:py-20
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {children}
    </section>
  );
};

