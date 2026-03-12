import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from([text1Ref.current, text2Ref.current, text3Ref.current, ctaRef.current], {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-[100dvh] w-full flex items-end pb-12 md:pb-16 px-6 md:px-16"
    >
      {/* Background with Dark Base */}
      <div className="absolute inset-0 z-0 bg-dark">
      </div>

      <div className="relative z-10 max-w-4xl text-[#F5F3EE]">
        <h1 className="flex flex-col">
          <span 
            ref={text1Ref}
            className="font-heading font-bold text-5xl md:text-7xl lg:text-[7rem] tracking-[0.05em] uppercase mb-8 md:mb-10 lg:mb-12"
          >
            ALCOCER STUDIOS
          </span>
          <span 
            ref={text2Ref}
            className="font-drama italic text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-2"
          >
            Websites That Turn Visitors Into Customers
          </span>
        </h1>
        
        <p 
          ref={text3Ref}
          className="font-mono text-sm tracking-widest text-[#F5F3EE]/60 font-light mt-4"
        >
          By Pablo Alcocer
        </p>

        <div ref={ctaRef} className="mt-12 flex items-center">
          <a 
            href="#contact"
            className="group flex items-center space-x-3 bg-accent text-[#F5F3EE] px-8 py-4 rounded-full font-heading font-bold tracking-wider hover:scale-[1.03] transition-transform duration-300"
            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
          >
            <span>Start Your Website</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
