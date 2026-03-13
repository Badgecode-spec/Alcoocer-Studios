import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const buildPlans = [
    { name: "1-Page Website", price: "$599", desc: "Single-page: landing, contact form, CTA optimized. Entry point, quick delivery." },
    { name: "3-5 Page Website", price: "$999", desc: "Multi-page: home, services, about, contact, portfolio. Standard small business site." },
    { name: "6+ Page Website", price: "$2,499", desc: "Complex: advanced features, gallery, booking system. Full custom build with integrations." }
  ];

  const retainerPlans = [
    { name: "No Retainer", price: "$0", desc: "Full ownership transfer of the website. No subscription.", highlight: false },
    { name: "Standard Retainer", price: "$89", desc: "Unlimited edits, updates, priority support, hosting included.", highlight: true },
    { name: "Premium Retainer", price: "$150", desc: "Unlimited edits + 1 new feature/month + analytics review + weekly check-in + content changes. For clients needing more features.", highlight: false }
  ];

  return (
    <section id="pricing" className="bg-background py-32 px-6 flex justify-center">
      <div className="max-w-6xl w-full text-center">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-dark mb-4 tracking-tight">Transparent Investment.</h2>
        <p className="font-body text-secondary text-lg mb-16 max-w-2xl mx-auto">Select your baseline build architecture, then choose the level of continuous technical support you require.</p>

        <div className="text-left mb-16">
          <h3 className="font-heading font-bold text-2xl text-dark tracking-tight mb-8 pl-4 border-l-4 border-accent">1. Website Development (One-Time)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          <h3 className="font-heading font-bold text-2xl text-dark tracking-tight mb-8 pl-4 border-l-4 border-accent">2. Monthly Retainer (Recommended)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {retainerPlans.map((plan, i) => (
              <div key={i} className={`border rounded-[2rem] p-8 shadow-md transition-colors duration-300 ${plan.highlight ? 'bg-dark text-white border-dark' : 'bg-white text-dark border-borderlight hover:border-dark'}`}>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-heading font-bold text-xl">{plan.name}</h4>
                  {plan.highlight && <span className="text-xs font-mono font-bold bg-accent text-[#F5F3EE] px-3 py-1 rounded-full uppercase tracking-widest">Best Value</span>}
                </div>
                <div className="font-mono text-3xl font-bold mb-4">{plan.price}<span className="text-lg opacity-60 ml-1">/mo</span></div>
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
            Start Your Project
          </a>
        </div>

      </div>
    </section>
  );
}
