import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const Icon = theme === 'light' ? Sun : Moon;

  return (
    <button
      onClick={toggleTheme}
      className="text-muted transition-colors hover:text-ink"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <Icon className="h-4 w-4" strokeWidth={1.75} />
    </button>
  );
};
