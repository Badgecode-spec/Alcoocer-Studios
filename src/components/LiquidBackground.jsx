import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './LiquidBackground.css';

export default function LiquidBackground() {
  const containerRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob3Ref = useRef(null);
  const blob4Ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 2; // Range -1 to 1
      const yPos = (clientY / window.innerHeight - 0.5) * 2; // Range -1 to 1

      // Subtle parallax movement for the true 4K James Turrell lighting
      gsap.to(blob1Ref.current, {
        x: xPos * 40,
        y: yPos * 40,
        duration: 2,
        ease: "power2.out"
      });
      
      gsap.to(blob2Ref.current, {
        x: xPos * -60,
        y: yPos * -60,
        duration: 2.5,
        ease: "power2.out"
      });
      
      gsap.to(blob3Ref.current, {
        x: xPos * 30,
        y: yPos * 30,
        duration: 3,
        ease: "power2.out"
      });
      
      gsap.to(blob4Ref.current, {
        x: xPos * -40,
        y: yPos * -40,
        duration: 3.5,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="liquid-bg-container">
      <div ref={blob1Ref} className="blob blob-1"></div>
      <div ref={blob2Ref} className="blob blob-2"></div>
      <div ref={blob3Ref} className="blob blob-3"></div>
      <div ref={blob4Ref} className="blob blob-4"></div>
      <div className="liquid-overlay"></div>
    </div>
  );
}
