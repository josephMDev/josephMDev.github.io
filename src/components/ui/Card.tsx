
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = true, style }) => {
  return (
    <div
      className={`
        bg-white dark:bg-gray-800 
        rounded-xl shadow-lg 
        p-6 
        ${hover ? 'transition-all duration-300 hover:shadow-2xl hover:-translate-y-1' : ''}
        ${className}
      `}
      style={style}
    >
      {children}
    </div>
  );
};

