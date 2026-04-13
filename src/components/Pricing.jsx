import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const buildPlans = [
    { name: "Sitio Web", price: "Desde $5,000", desc: "La mayoría de los proyectos terminan entre $6,000 y $10,000 MXN dependiendo del tamaño. Diseño desde cero, versión móvil, optimización de conversiones y contacto integrado." },
    { name: "Sitio Web Premium", price: "$10,000 – $15,000", desc: "Para negocios que requieren mayor impacto visual y operativo. Múltiples secciones, experiencia de usuario refinada y arquitectura de conversión avanzada." }
  ];

  const retainerPlans = [
    { name: "Cambios sueltos", price: "Desde $1,000", desc: "Ajustes, evoluciones o mejoras detalladas sobre una infraestructura preexistente o sitio activo.", highlight: false },
    { name: "Mantenimiento / Retainer", price: "$1,200", desc: "Esquema operativo mensual. Cambios pequeños continuos, ajustes de contenido y soporte técnico preventivo para tu negocio.", highlight: false },
    { name: "Sin Mantenimiento", price: "$0", desc: "Transferencia total de la infraestructura. El cliente asume la responsabilidad operativa y de hosting.", highlight: false }
  ];

  return (
    <section id="pricing" className="bg-background py-32 px-6 flex justify-center">
      <div className="max-w-6xl w-full text-center">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-dark mb-4 tracking-tight">Invest & ROI.</h2>
        <p className="font-body text-secondary text-lg mb-16 max-w-2xl mx-auto">Selecciona la infraestructura ideal para arrancar, y define tu nivel operativo a futuro.</p>

        <div className="text-left mb-16">
          <h3 className="font-heading font-bold text-2xl text-dark tracking-tight mb-8 pl-4 border-l-4 border-accent">1. Setup de tu Sitio (Pago Único)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {buildPlans.map((plan, i) => (
              <div key={i} className="bg-white border border-borderlight rounded-[2rem] p-8 shadow-md hover:border-dark transition-colors duration-300">
                <h4 className="font-heading font-bold text-xl text-dark mb-2">{plan.name}</h4>
                <div className="font-mono text-3xl font-bold text-dark mb-4">{plan.price}</div>
                <p className="font-body text-secondary text-sm leading-relaxed">{plan.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-left">
          <h3 className="font-heading font-bold text-2xl text-dark tracking-tight mb-8 pl-4 border-l-4 border-accent">2. Tu Retainer Mensual (Opcional)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {retainerPlans.map((plan, i) => (
              <div key={i} className={`border rounded-[2rem] p-8 shadow-md transition-colors duration-300 ${plan.highlight ? 'bg-dark text-white border-dark' : 'bg-white text-dark border-borderlight hover:border-dark'}`}>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-heading font-bold text-xl">{plan.name}</h4>
                  {plan.highlight && <span className="text-xs font-mono font-bold bg-accent text-[#F5F3EE] px-3 py-1 rounded-full uppercase tracking-widest">Recomendado</span>}
                </div>
                <div className="font-mono text-3xl font-bold mb-4">{plan.price}<span className="text-lg opacity-60 ml-1">{plan.price !== "$0" && !plan.price.includes("Desde") ? "/mo" : ""}</span></div>
                <p className={`font-body text-sm leading-relaxed ${plan.highlight ? 'text-white/80' : 'text-secondary'}`}>{plan.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <a 
            href="#contact"
            className="inline-block bg-primary text-[#F5F3EE] px-10 py-5 rounded-full font-heading font-bold text-xl hover:scale-[1.03] transition-transform duration-300 shadow-xl"
            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
          >
            Cuéntame de tu negocio
          </a>
        </div>

      </div>
    </section>
  );
}
