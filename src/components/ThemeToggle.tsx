import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useState } from 'react';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    toggleTheme();
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  };

  return (
    <button
      onClick={handleToggle}
      className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg ${
        isAnimating ? 'animate-theme-toggle theme-toggle-glow' : ''
      }`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={`absolute inset-0 w-5 h-5 text-gray-700 dark:text-gray-300 transition-all duration-300 ${
            theme === 'light' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-180 scale-75'
          }`}
        />
        <Moon 
          className={`absolute inset-0 w-5 h-5 text-gray-700 dark:text-gray-300 transition-all duration-300 ${
            theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-180 scale-75'
          }`}
        />
      </div>
    </button>
  );
};
