import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MousePointer2, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ShufflerCard = () => {
  const [cards, setCards] = useState([
    { id: 1, title: 'En 5-7 Días', subtitle: 'Deployment Inmediato', z: 3, scale: 1, y: 0, opacity: 1 },
    { id: 2, title: 'Protocolo Activo', subtitle: 'Desarrollo Eficiente', z: 2, scale: 0.95, y: -20, opacity: 0.7 },
    { id: 3, title: 'Cero Fricción', subtitle: 'ROI Inmediato', z: 1, scale: 0.9, y: -40, opacity: 0.4 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const newArr = [...prev];
        const last = newArr.pop();
        newArr.unshift(last);
        
        // Re-assign z, scale, y, opacity based on new order
        return newArr.map((card, idx) => ({
          ...card,
          z: 3 - idx,
          scale: 1 - (idx * 0.05),
          y: idx * -20,
          opacity: 1 - (idx * 0.3)
        }));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-64 w-full">
      {cards.map((card) => (
        <div
          key={card.id}
          className="absolute bottom-0 w-full h-44 bg-white border border-borderlight rounded-[2rem] p-6 shadow-sm flex flex-col justify-center transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          style={{
            zIndex: card.z,
            transform: `translateY(${card.y}px) scale(${card.scale})`,
            opacity: card.opacity
          }}
        >
          <div className="flex items-center space-x-3 text-secondary mb-2">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <span className="font-mono text-xs uppercase tracking-widest">{card.subtitle}</span>
          </div>
          <h4 className="font-heading font-bold text-xl text-dark">{card.title}</h4>
        </div>
      ))}
    </div>
  );
};

const TYPEWRITER_MESSAGES = [
  "> Evaluando tu negocio...",
  "> Optimizando presencia digital...",
  "> Protocolo de ventas activo...",
  "> Conectando agenda a WhatsApp...",
  "> Modalidad de soporte flexible...",
  "> Evaluando flat-fee u operación continua.",
  "> ¿Listo para escalar?"
];

const TypewriterCard = () => {
  const [text, setText] = useState('');
  const [msgIdx, setMsgIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (msgIdx >= TYPEWRITER_MESSAGES.length) {
      setTimeout(() => { setText(''); setMsgIdx(0); setCharIdx(0); }, 3000);
      return;
    }
    
    if (charIdx < TYPEWRITER_MESSAGES[msgIdx].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + TYPEWRITER_MESSAGES[msgIdx][charIdx]);
        setCharIdx(charIdx + 1);
      }, 50); // typing speed
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText((prev) => prev + '\n');
        setMsgIdx(msgIdx + 1);
        setCharIdx(0);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [charIdx, msgIdx]);

  return (
    <div className="h-64 w-full bg-dark rounded-[2rem] p-6 text-[#F5F3EE] font-mono text-sm leading-relaxed overflow-hidden flex flex-col shadow-inner">
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
        <span className="text-secondary text-xs uppercase tracking-wider font-bold">Terminal en Vivo</span>
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
      </div>
      <div className="flex-1 whitespace-pre-wrap flex flex-col justify-end">
        <p>
          {text}
          <span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse align-middle"></span>
        </p>
      </div>
    </div>
  );
};

const SchedulerCard = () => {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const daysRef = useRef([]);
  const saveBtnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      
      // Reset
      tl.set(cursorRef.current, { x: 50, y: 150, opacity: 0 });
      tl.set(daysRef.current, { backgroundColor: 'transparent', color: '#666666' });
      tl.set(saveBtnRef.current, { scale: 1 });

      // Cursor Enters
      tl.to(cursorRef.current, { opacity: 1, duration: 0.5, ease: "power2.out" })
        // Move to Wednesday (index 3)
        .to(cursorRef.current, { x: 140, y: 80, duration: 1, ease: "power3.inOut" })
        // Click animation
        .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
        // Highlight Wednesday
        .to(daysRef.current[3], { backgroundColor: '#E63B2E', color: '#F5F3EE', duration: 0.2 }, "-=0.2")
        // Move to Save
        .to(cursorRef.current, { x: 200, y: 180, duration: 1, ease: "power3.inOut" }, "+=0.3")
        // Click Save
        .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
        .to(saveBtnRef.current, { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 }, "-=0.2")
        // Exit
        .to(cursorRef.current, { opacity: 0, duration: 0.5, ease: "power2.in" }, "+=0.5");
        
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-64 w-full bg-white border border-borderlight rounded-[2rem] p-6 shadow-sm flex flex-col justify-between">
      <div>
        <h4 className="font-heading font-bold text-lg mb-4 text-dark text-center">Agendado Automático</h4>
        <div className="flex justify-between mt-2">
          {['S','M','T','W','T','F','S'].map((day, i) => (
            <div 
              key={i} 
              ref={el => daysRef.current[i] = el}
              className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-sm text-secondary transition-colors"
            >
              {day}
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-end mt-4">
        <div 
          ref={saveBtnRef}
          className="bg-primary text-[#F5F3EE] px-4 py-1.5 rounded-full font-heading text-sm shadow-md"
        >
          Capturar Cliente
        </div>
      </div>

      <div 
        ref={cursorRef} 
        className="absolute z-10 w-6 h-6 text-dark"
        style={{ top: 0, left: 0 }}
      >
        <MousePointer2 className="w-full h-full fill-dark" />
      </div>
    </div>
  );
};

export default function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-32 px-6 md:px-16 bg-background max-w-7xl mx-auto">
      <div className="text-center mb-20 max-w-2xl mx-auto">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-dark mb-6 tracking-tight">Ingeniería de Conversión.</h2>
        <p className="font-body text-secondary text-lg">Diseño con propósito. Enfocados totalmente en el posicionamiento y la rentabilidad de tu negocio, sin procesos lentos.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="feature-card flex flex-col">
          <ShufflerCard />
          <div className="mt-8 text-center px-4">
            <h3 className="font-heading font-bold text-2xl text-dark mb-2">Desarrollo Acelerado.</h3>
            <p className="font-body text-secondary text-sm">Olvídate de las agencias de meses. Entrego tu sitio en una semana, totalmente optimizado y operando. Pura ventaja competitiva.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="feature-card flex flex-col">
          <TypewriterCard />
          <div className="mt-8 text-center px-4">
            <h3 className="font-heading font-bold text-2xl text-dark mb-2">Mantenimiento Flexible.</h3>
            <p className="font-body text-secondary text-sm">Retainer mensual para delegar toda la administración continua de tu infraestructura, o un *flat fee* transparente para actualizaciones por evento. Tú decides.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="feature-card flex flex-col">
          <SchedulerCard />
          <div className="mt-8 text-center px-4">
            <h3 className="font-heading font-bold text-2xl text-dark mb-2">Alto Nivel de Conversión.</h3>
            <p className="font-body text-secondary text-sm">No es solo estética premium. Estructura celular optimizada. Convertimos simple tráfico pasivo en agendas llenas.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
