import React, { useState } from 'react';
import { Monitor, Tablet, Smartphone } from 'lucide-react';

export default function Archive() {
  const [activeSite, setActiveSite] = useState('/previews/quantum.html');
  const [device, setDevice] = useState('desktop');

  const sites = [
    {
      id: 1,
      name: "OmniPulse Agency",
      desc: "Live Generative WebGL & Isometric HUDs",
      url: "/previews/quantum.html"
    },
    {
      id: 2,
      name: "Atelier Architecture",
      desc: "Editorial Grid, Magnetic UI & Hover Reveal GSAP",
      url: "/previews/atelier.html"
    },
    {
      id: 3,
      name: "Benny B Barbershop",
      desc: "Utilitarian Landing Page, Paper.js Physics & Glassmorphism",
      url: "/previews/barber.html"
    },
  ];

  return (
    <section id="archive" className="bg-dark text-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="font-heading font-bold text-5xl md:text-6xl tracking-tighter mb-4">The Archive.</h2>
            <p className="font-body text-secondary text-xl max-w-xl">Live, interactive technical explorations. Experience the code natively—built, not drawn.</p>
          </div>
          
          {/* Device Toggles */}
          <div className="flex items-center space-x-2 bg-white/5 p-2 rounded-full border border-white/10">
            <button onClick={() => setDevice('desktop')} className={`p-3 rounded-full transition-colors ${device === 'desktop' ? 'bg-accent text-white' : 'text-secondary hover:text-white'}`}>
              <Monitor size={20} />
            </button>
            <button onClick={() => setDevice('tablet')} className={`p-3 rounded-full transition-colors ${device === 'tablet' ? 'bg-accent text-white' : 'text-secondary hover:text-white'}`}>
              <Tablet size={20} />
            </button>
            <button onClick={() => setDevice('mobile')} className={`p-3 rounded-full transition-colors ${device === 'mobile' ? 'bg-accent text-white' : 'text-secondary hover:text-white'}`}>
              <Smartphone size={20} />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Project List */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {sites.map(site => (
              <button 
                key={site.id}
                onClick={() => setActiveSite(site.url)}
                className={`text-left p-6 rounded-3xl border transition-all duration-300 ${activeSite === site.url ? 'bg-white/10 border-accent shadow-[0_0_30px_rgba(230,59,46,0.1)]' : 'bg-transparent border-white/10 hover:border-white/30 hover:bg-white/5'}`}
              >
                <div className="font-mono text-accent text-xs tracking-widest font-bold mb-2 uppercase">Project {site.id.toString().padStart(2, '0')}</div>
                <h3 className="font-heading font-bold text-2xl mb-1">{site.name}</h3>
                <p className="font-body text-secondary text-sm">{site.desc}</p>
              </button>
            ))}
          </div>

          {/* Interactive Frame */}
          <div className="w-full lg:w-2/3 flex justify-center items-center bg-[#0a0a0a] rounded-[3rem] p-4 md:p-8 border border-white/5 min-h-[600px] overflow-hidden relative">
            <div 
              className={`bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex flex-col ${
                device === 'desktop' ? 'w-full aspect-[16/10]' : 
                device === 'tablet' ? 'w-[768px] aspect-[3/4] max-w-full' : 
                'w-[375px] aspect-[9/16]'
              }`}
            >
              {/* Fake Browser Header */}
              <div className="h-10 bg-[#f0f0f0] border-b border-[#ddd] flex items-center px-4 space-x-2 shrink-0">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white px-8 py-1 rounded-md text-[10px] font-mono text-gray-400 border border-gray-200">
                    localhost:3000{activeSite}
                  </div>
                </div>
              </div>
              
              {/* Live iframe */}
              <iframe 
                src={activeSite} 
                className="w-full h-full bg-white border-none"
                title="Interactive Preview"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
