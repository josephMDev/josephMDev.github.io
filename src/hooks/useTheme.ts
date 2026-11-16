import { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';

type Theme = 'light' | 'dark';

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';
  
  const savedTheme = localStorage.getItem('theme') as Theme;
  if (savedTheme) return savedTheme;
  
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Apply theme on mount and changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);

    // Re-enable transitions once the new theme has painted
    let frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => root.classList.remove('theme-switching'));
    });
    return () => cancelAnimationFrame(frame);
  }, [theme]);

  const toggleTheme = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light';
    const root = document.documentElement;

    // Switch every colour at once instead of letting per-element transitions fade from the old theme
    const apply = () => {
      root.classList.add('theme-switching');
      root.classList.toggle('dark', next === 'dark');
      flushSync(() => setTheme(next));
    };

    // Crossfade the whole page between the two themes where the browser supports it
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!document.startViewTransition || reduceMotion) {
      apply();
      return;
    }
    document.startViewTransition(apply);
  };

  return { theme, toggleTheme };
};
