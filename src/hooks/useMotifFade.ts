import { useEffect } from 'react';

// Exposes --motif-fade on the root element: 1 on wide windows, easing to 0 as the side margins
// become too narrow for the background motifs
const fadeStart = 1440;
const fadeEnd = 1240;

export const useMotifFade = () => {
  useEffect(() => {
    const update = () => {
      const t = Math.min(1, Math.max(0, (window.innerWidth - fadeEnd) / (fadeStart - fadeEnd)));
      document.documentElement.style.setProperty('--motif-fade', String(t));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
};
