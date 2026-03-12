import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const protocols = [
  {
    step: "01",
    title: "The Blueprint",
    desc: "We extract your business value propositions and design a conversion architecture within hours, not weeks.",
    AnimationContent: () => (
      <div className="w-full h-full flex items-center justify-center relative">
        <div className="absolute w-64 h-64 border border-accent/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
        <div className="absolute w-48 h-48 border border-accent/40 rounded-full animate-[spin_15s_linear_reverse_infinite]"></div>
        <div className="w-32 h-32 bg-dark rounded-full flex items-center justify-center shadow-2xl relative z-10">
          <div className="w-16 h-1 rounded-full bg-accent animate-pulse"></div>
        </div>
      </div>
    )
  },
  {
    step: "02",
    title: "The Build",
    desc: "Using advanced frameworks, we code a perfectly optimized instrument.",
    AnimationContent: () => (
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-dark rounded-3xl p-8">
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-2 opacity-20">
          {Array.from({length: 72}).map((_, i) => (
            <div key={i} className="bg-white rounded-sm w-full h-full"></div>
          ))}
        </div>
        <div className="absolute left-0 top-0 w-full h-2 bg-accent shadow-[0_0_20px_#E63B2E] animate-[scan_4s_ease-in-out_infinite_alternate]"></div>
      </div>
    )
  },
  {
    step: "03",
    title: "The Launch",
    desc: "Live in 5-7 days. Zero friction. $89/mo taking care of every technical aspect moving forward.",
    AnimationContent: () => (
      <div className="w-full h-full flex items-center justify-center relative bg-dark rounded-3xl">
        <svg viewBox="0 0 200 100" className="w-full h-32 stroke-accent stroke-[3] fill-none" strokeLinecap="round" strokeLinejoin="round">
          <path 
            className="animate-[dash_2s_linear_infinite]"
            strokeDasharray="400"
            strokeDashoffset="400"
            d="M0,50 L50,50 L60,20 L80,90 L100,10 L120,70 L130,50 L200,50" 
          />
        </svg>
      </div>
    )
  }
];

export default function Protocol() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Stacking effect
      cardsRef.current.forEach((card, i) => {
        if (i === protocols.length - 1) return; // Last card doesn't squish

        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: cardsRef.current[i + 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
          animation: gsap.to(card, {
            scale: 0.9,
            opacity: 0.5,
            filter: "blur(5px)",
            ease: "none"
          }),
          scrub: true
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" ref={containerRef} className="relative w-full bg-background pt-24 pb-32">
      <div className="text-center mb-16 px-6">
        <h2 className="font-heading font-bold text-5xl text-dark tracking-tight">Conversion Protocol</h2>
        <p className="font-body text-secondary mt-4 max-w-xl mx-auto">Precision engineering meets rapid deployment. Our three-step framework for delivering extreme value.</p>
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-8">
        {protocols.map((p, i) => (
          <div 
            key={i}
            ref={el => cardsRef.current[i] = el}
            className="w-full h-[85vh] md:h-[70vh] mb-8 sticky top-24 bg-white border border-borderlight rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
            {/* Text Side */}
            <div className="flex-1 p-10 md:p-16 flex flex-col justify-center">
              <span className="font-mono text-accent text-xl tracking-widest font-bold mb-4">// STEP {p.step}</span>
              <h3 className="font-heading font-bold text-4xl md:text-6xl text-dark mb-6 tracking-tight">{p.title}</h3>
              <p className="font-body text-secondary text-lg md:text-xl max-w-md">{p.desc}</p>
            </div>
            
            {/* Visual Side */}
            <div className="flex-1 bg-background/50 flex items-center justify-center p-8 md:p-16 border-t md:border-t-0 md:border-l border-borderlight">
              <p.AnimationContent />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
