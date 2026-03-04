'use client';

import { createContext, useContext, useState, useCallback } from 'react';

const TransitionContext = createContext({
  isTransitioning: false,
  triggerTransition: () => {},
});

export function TransitionProvider({ children }) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const triggerTransition = useCallback((callback) => {
    setIsTransitioning(true);

    // After overlay covers screen (~500ms), execute the navigation
    setTimeout(() => {
      callback();
    }, 600);

    // Hold the overlay for ~2s total so it feels like a real load
    setTimeout(() => {
      setIsTransitioning(false);
    }, 2200);
  }, []);

  return (
    <TransitionContext.Provider value={{ isTransitioning, triggerTransition }}>
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  return useContext(TransitionContext);
}
