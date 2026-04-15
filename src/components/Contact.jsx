import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="bg-accent text-[#F5F3EE] py-32 px-6">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-5xl md:text-7xl tracking-tighter mb-6">¿Listo Para Avanzar?</h2>
          <p className="font-body text-[#F5F3EE]/80 text-xl max-w-xl mx-auto">Compártenos tus datos. Evaluamos tu panorama y empezamos a maquetar tu proyecto, sin compromisos.</p>
        </div>

        <form action="https://api.web3forms.com/submit" method="POST" className="bg-dark/20 p-8 md:p-12 rounded-[3xl] shadow-inner backdrop-blur-sm border border-white/10 flex flex-col gap-6">
          
          {/* Web3Forms Configuration */}
          <input type="hidden" name="access_key" value="defd7f1f-9ef3-4704-a224-e98be941c5c1" />
          <input type="hidden" name="subject" value="New Website Lead - Alcocer Studios" />
          <input type="hidden" name="from_name" value="Alcocer Studios Website" />
          {/* Optional: Add a redirect URL if you want a custom thank you page */}
          {/* <input type="hidden" name="redirect" value="https://yourwebsite.com/thanks" /> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="font-mono text-xs uppercase tracking-widest mb-2 opacity-80">Nombre Completo *</label>
              <input required name="name" type="text" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 placeholder-white/30 text-[#F5F3EE] focus:outline-none focus:border-white focus:bg-white/20 transition-all font-body" placeholder="Juan Pérez" />
            </div>
            
            <div className="flex flex-col">
              <label className="font-mono text-xs uppercase tracking-widest mb-2 opacity-80">Nombre del Negocio *</label>
              <input required name="businessName" type="text" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 placeholder-white/30 text-[#F5F3EE] focus:outline-none focus:border-white focus:bg-white/20 transition-all font-body" placeholder="Empresa S.A." />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="font-mono text-xs uppercase tracking-widest mb-2 opacity-80">Teléfono / WhatsApp *</label>
              <input required name="phone" type="tel" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 placeholder-white/30 text-[#F5F3EE] focus:outline-none focus:border-white focus:bg-white/20 transition-all font-body" placeholder="(55) 1234-5678" />
            </div>
            
            <div className="flex flex-col">
              <label className="font-mono text-xs uppercase tracking-widest mb-2 opacity-80">Correo Electrónico *</label>
              <input required name="email" type="email" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 placeholder-white/30 text-[#F5F3EE] focus:outline-none focus:border-white focus:bg-white/20 transition-all font-body" placeholder="juan@correo.com" />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="font-mono text-xs uppercase tracking-widest mb-2 opacity-80">Giro Comercial *</label>
            <select required name="businessType" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-[#F5F3EE] focus:outline-none focus:border-white focus:bg-white/20 transition-all font-body appearance-none">
              <option value="" disabled selected className="text-dark">Selecciona tu industria...</option>
              <option value="Consultorio Médica" className="text-dark">Consultorio / Clínica Médica</option>
              <option value="Alta Peluquería" className="text-dark">Barbershop / Alta Peluquería</option>
              <option value="Boutique Studio" className="text-dark">Gym / Boutique Studio</option>
              <option value="Desarrollo Inmobiliario" className="text-dark">Desarrollo Inmobiliario / Bienes Raíces</option>
              <option value="Restaurante" className="text-dark">Hospitality / Restaurante</option>
              <option value="Despacho o Servicios" className="text-dark">Despacho / Servicios Corporativos</option>
              <option value="Otro" className="text-dark">Otro</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-mono text-xs uppercase tracking-widest mb-2 opacity-80">Mensaje Privado (Opcional)</label>
            <textarea name="message" rows="4" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 placeholder-white/30 text-[#F5F3EE] focus:outline-none focus:border-white focus:bg-white/20 transition-all font-body resize-y" placeholder="Cuéntame un poco más de tus objetivos..."></textarea>
          </div>

          <button 
            type="submit"
            className="mt-4 bg-primary text-[#F5F3EE] py-5 rounded-full font-heading font-bold text-xl tracking-wide hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 w-full"
            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
          >
            Iniciar el Proyecto
          </button>

        </form>
      </div>
    </section>
  );
}
