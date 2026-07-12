'use client';

import { createContext, useContext, useState, useCallback, useRef } from 'react';

const TransitionContext = createContext({
  isTransitioning: false,
  triggerTransition: () => {},
});

export function TransitionProvider({ children }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef({ navigation: null, overlay: null });

  const triggerTransition = useCallback((callback) => {
    // Clear any existing timers to prevent stacking
    if (timerRef.current.navigation) clearTimeout(timerRef.current.navigation);
    if (timerRef.current.overlay) clearTimeout(timerRef.current.overlay);

    setIsTransitioning(true);

    // After overlay covers screen (~500ms), execute the navigation
    timerRef.current.navigation = setTimeout(() => {
      callback();
    }, 600);

    // Hold the overlay for ~2s total so it feels like a real load
    timerRef.current.overlay = setTimeout(() => {
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
