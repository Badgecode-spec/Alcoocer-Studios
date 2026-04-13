import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax background
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Text reveal
      gsap.from([text1Ref.current, text2Ref.current], {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out"
      });
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full min-h-[80vh] bg-dark flex flex-col items-center justify-center overflow-hidden py-32 px-6"
    >
      {/* Background Parallax */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 scale-[1.2]"
      >
        <img 
          src="https://images.unsplash.com/photo-1620121478247-ec786f9ee4ea?q=80&w=1932&auto=format&fit=crop" 
          alt="Organic Texture" 
          className="w-full h-full object-cover opacity-15 grayscale"
        />
        <div className="absolute inset-0 bg-dark/60 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-5xl text-center space-y-16">
        <div ref={text1Ref}>
          <p className="font-heading text-secondary text-xl md:text-3xl tracking-tight mb-2">
            El enfoque de siempre:
          </p>
          <p className="font-heading text-[#F5F3EE] text-2xl md:text-4xl font-bold tracking-tight">
            juntas interminables y propuestas sin rumbo.
          </p>
        </div>

        <div ref={text2Ref}>
          <p className="font-heading text-secondary text-xl md:text-3xl tracking-tight mb-4">
            Nuestro enfoque:
          </p>
          <p className="font-drama italic text-accent text-5xl md:text-8xl leading-[1.1] tracking-tight">
            conversión, estatus y retorno sólido.
          </p>
        </div>
      </div>
    </section>
  );
}
