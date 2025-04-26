
import React from 'react';

interface Star {
  id: number;
  top: string;
  left: string;
  size: string;
  delay: string;
  duration: string;
}

const generateStars = (count: number): Star[] => {
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 0.2 + 0.1}rem`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 3 + 2}s`,
    });
  }
  return stars;
};

export const StarryBackground: React.FC = () => {
  const stars = generateStars(50);
  
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
};

export const FloatingClouds: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none opacity-20">
      <div className="absolute top-[10%] left-[10%] w-40 h-20 rounded-full bg-dreamTeal blur-xl animate-float" />
      <div className="absolute top-[30%] right-[15%] w-32 h-16 rounded-full bg-dreamCoral blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[20%] left-[20%] w-48 h-24 rounded-full bg-dreamCream blur-xl animate-float" style={{ animationDelay: '4s' }} />
    </div>
  );
};

export const DreamySparks: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-dreamTeal animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            boxShadow: '0 0 8px 1px rgba(155, 193, 188, 0.8)',
          }}
        />
      ))}
    </div>
  );
};
