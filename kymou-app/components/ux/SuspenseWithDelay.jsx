'use client'
import React, { Suspense, lazy, useState, useEffect } from 'react';

const LazyComponent = lazy(() => import('../Home/AxesHome'));

export default function SuspenseWithDelay({ children, fallback, delay = 1000 }) {
  const [showFallback, setShowFallback] = useState(true);
  const [childReady, setChildReady] = useState(false);


  useEffect(() => {
    if (childReady) {
    alert('child ready')
      const timeout = setTimeout(() => {
        setShowFallback(false); // swap after delay
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [ delay]);

  return (
    <Suspense fallback={
      React.cloneElement(fallback, { onReady: () => setChildReady(true) })
    }>
      {showFallback ? fallback : children}
    </Suspense>
  );
}