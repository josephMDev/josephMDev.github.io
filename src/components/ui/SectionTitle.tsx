
interface SectionTitleProps {
  title?: string;
  children?: React.ReactNode;
  subtitle?: string;
  className?: string;
  center?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title,
  children, 
  subtitle,
  className = '',
  center = true
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''} ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
        {title || children}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

