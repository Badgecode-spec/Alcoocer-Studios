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
    // Create highly optimized quickTo functions for 60/120fps performance
    // This bypasses the tween creation overhead on every single pixel movement
    const xSet1 = gsap.quickTo(blob1Ref.current, "x", { duration: 2, ease: "power2.out" });
    const ySet1 = gsap.quickTo(blob1Ref.current, "y", { duration: 2, ease: "power2.out" });
    
    const xSet2 = gsap.quickTo(blob2Ref.current, "x", { duration: 2.5, ease: "power2.out" });
    const ySet2 = gsap.quickTo(blob2Ref.current, "y", { duration: 2.5, ease: "power2.out" });
    
    const xSet3 = gsap.quickTo(blob3Ref.current, "x", { duration: 3, ease: "power2.out" });
    const ySet3 = gsap.quickTo(blob3Ref.current, "y", { duration: 3, ease: "power2.out" });
    
    const xSet4 = gsap.quickTo(blob4Ref.current, "x", { duration: 3.5, ease: "power2.out" });
    const ySet4 = gsap.quickTo(blob4Ref.current, "y", { duration: 3.5, ease: "power2.out" });

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      // Fast calculations, no layout thrashing
      const xPos = (e.clientX / window.innerWidth - 0.5) * 2;
      const yPos = (e.clientY / window.innerHeight - 0.5) * 2;

      // Directly pipe values into the quickTo instances
      xSet1(xPos * 40); ySet1(yPos * 40);
      xSet2(xPos * -60); ySet2(yPos * -60);
      xSet3(xPos * 30); ySet3(yPos * 30);
      xSet4(xPos * -40); ySet4(yPos * -40);
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
