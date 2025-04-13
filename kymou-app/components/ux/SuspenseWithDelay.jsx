'use client'
import React, { Suspense, useState, useEffect } from 'react';

// Composant pour le fallback
const FallbackComponent = ({ onReady }) => {
  useEffect(() => {
    if (onReady) onReady(); // Trigger onReady when fallback component is mounted
  }, [onReady]);

  return (
    <div className="zigzag w-[100vw] h-[100vh] top-0 fixed left-0">
      {/* Ton animation ou composant de chargement ici */}
      Loading...
    </div>
  );
};
export default function SuspenseWithDelay({ children, fallback, delay = 1000 }) {
  const [showFallback, setShowFallback] = useState(true);
  const [childReady, setChildReady] = useState(false);


  useEffect(() => {
    if (childReady) {
      const timeout = setTimeout(() => {
        setShowFallback(false); // swap after delay
      }, delay);
      return () => clearTimeout(timeout); // cleanup on unmount
    }
  }, [childReady, delay]); // Re-run effect when childReady or delay changes

  return (
    <Suspense
      fallback={
        <FallbackComponent onReady={() => setChildReady(true)} />
      }
    >
      {/* Affiche les enfants ou fallback en fonction de l'état */}
      {showFallback ? <FallbackComponent /> : children}
    </Suspense>
  );
}
