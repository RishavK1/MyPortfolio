import React, { useEffect, useRef } from 'react';

const Background = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return;

      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random size between 2 and 6 pixels
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random starting position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random animation duration between 15 and 25 seconds
      particle.style.animationDuration = `${Math.random() * 10 + 15}s`;
      
      particlesRef.current.appendChild(particle);

      // Remove particle after animation
      setTimeout(() => {
        particle.remove();
      }, 25000);
    };

    // Create initial particles
    for (let i = 0; i < 50; i++) {
      createParticle();
    }

    // Create new particles periodically
    const interval = setInterval(() => {
      createParticle();
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="animated-background" />
      <div ref={particlesRef} className="particles" />
    </>
  );
};

export default Background;